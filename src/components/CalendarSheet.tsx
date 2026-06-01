import { useState, useRef, useCallback } from 'react';
import { Calendar } from 'lucide-react';
import { menuData } from '@/data/menuData';

interface CalendarSheetProps {
  selectedDate: number;
  onSelectDate: (date: number) => void;
}

export default function CalendarSheet({ selectedDate, onSelectDate }: CalendarSheetProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const dragStartY = useRef(0);
  const dragCurrentY = useRef(0);
  const weekdays = ['日', '一', '二', '三', '四', '五', '六'];
  const firstDayOfWeek = 0;

  const toggle = () => setIsOpen(!isOpen);

  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    setIsDragging(true);
    dragStartY.current = e.touches[0].clientY;
    dragCurrentY.current = e.touches[0].clientY;
  }, []);

  const handleTouchMove = useCallback((e: React.TouchEvent) => {
    if (!isDragging) return;
    dragCurrentY.current = e.touches[0].clientY;
  }, [isDragging]);

  const handleTouchEnd = useCallback(() => {
    if (!isDragging) return;
    setIsDragging(false);
    const diff = dragStartY.current - dragCurrentY.current;
    if (diff > 40) {
      setIsOpen(true);
    } else if (diff < -40) {
      setIsOpen(false);
    }
  }, [isDragging]);

  const handleDateClick = (date: number) => {
    onSelectDate(date);
  };

  return (
    <div className="flex-shrink-0 z-50">
      {/* Handle bar - always visible */}
      <div
        className="bg-white rounded-t-2xl shadow-[0_-2px_12px_rgba(0,0,0,0.1)] cursor-pointer select-none"
        onClick={toggle}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div className="flex flex-col items-center pt-2 pb-2 px-4">
          <div className="w-8 h-1 bg-gray-300 rounded-full mb-1.5" />
          <div className="flex items-center justify-between w-full">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-gray-500" />
              <span className="text-sm font-semibold text-gray-700">全月日曆預覽</span>
            </div>
            <span className="text-xs text-gray-400">{isOpen ? '收起' : '展開'}</span>
          </div>
        </div>
      </div>

      {/* Calendar grid - expands/collapses */}
      <div
        className="bg-white overflow-hidden transition-all duration-300 ease-out"
        style={{ maxHeight: isOpen ? 280 : 0 }}
      >
        <div className="px-4 pb-4">
          <div className="grid grid-cols-7 gap-1 mb-2">
            {weekdays.map((day) => (
              <div key={day} className="text-center text-xs text-gray-400 py-1">{day}</div>
            ))}
          </div>
          <div className="grid grid-cols-7 gap-1">
            {Array.from({ length: firstDayOfWeek }).map((_, i) => (
              <div key={`empty-${i}`} className="aspect-square" />
            ))}
            {menuData.map((item) => {
              const isSelected = item.date === selectedDate;
              const hasMenu = !item.isHoliday;
              return (
                <button
                  key={item.date}
                  onClick={() => handleDateClick(item.date)}
                  className={`
                    aspect-square flex flex-col items-center justify-center rounded-xl text-sm font-medium
                    transition-all duration-150 active:scale-90
                    ${isSelected ? 'bg-[#007AFF] text-white shadow-sm' : item.isHoliday ? 'text-[#FF3B30]' : hasMenu ? 'bg-gray-50 text-gray-800 hover:bg-gray-100' : 'text-gray-400'}
                  `}
                >
                  <span>{item.date}</span>
                  {hasMenu && !isSelected && <span className="w-1 h-1 bg-[#007AFF] rounded-full mt-0.5" />}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
