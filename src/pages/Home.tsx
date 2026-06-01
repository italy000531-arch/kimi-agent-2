import { useState, useCallback, useRef } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { CloudSun } from 'lucide-react';
import Header from '@/components/Header';
import DateSelector from '@/components/DateSelector';
import MealCard from '@/components/MealCard';
import CalendarSheet from '@/components/CalendarSheet';
import ListView from '@/components/ListView';
import { getMenuByDate } from '@/data/menuData';
import { useWeather } from '@/hooks/useWeather';

// Get today's date (1-30), or nearest school day if holiday
function getTodayDate(): number {
  const today = new Date().getDate();
  const clamped = Math.max(1, Math.min(30, today));
  const menu = getMenuByDate(clamped);
  // If today is a holiday, find the nearest previous school day
  if (menu?.isHoliday) {
    for (let d = clamped - 1; d >= 1; d--) {
      if (!getMenuByDate(d)?.isHoliday) return d;
    }
    // If all previous are holidays, find next school day
    for (let d = clamped + 1; d <= 30; d++) {
      if (!getMenuByDate(d)?.isHoliday) return d;
    }
    return 1;
  }
  return clamped;
}

export default function Home() {
  const [activeTab, setActiveTab] = useState('daily');
  const [selectedDate, setSelectedDate] = useState(getTodayDate);
  const [direction, setDirection] = useState(0);
  const touchStartX = useRef(0);

  const weather = useWeather();
  const currentMenu = getMenuByDate(selectedDate);

  const handlePrevDate = useCallback(() => {
    setDirection(-1);
    setSelectedDate((prev) => { const n = prev - 1; return n < 1 ? 30 : n; });
  }, []);

  const handleNextDate = useCallback(() => {
    setDirection(1);
    setSelectedDate((prev) => { const n = prev + 1; return n > 30 ? 1 : n; });
  }, []);

  const handleSelectDate = useCallback((date: number) => {
    setSelectedDate(date);
    setActiveTab('daily');
  }, []);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const handleTouchEnd = (e: React.TouchEvent) => {
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) diff > 0 ? handleNextDate() : handlePrevDate();
  };

  return (
    <div
      className="h-[100dvh] w-full overflow-hidden relative"
      style={{
        backgroundImage: `url(${weather.bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-white/10 pointer-events-none" />
      <div
        className="h-[100dvh] max-w-md mx-auto flex flex-col relative"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {/* Weather badge */}
        <div className="flex-shrink-0 flex justify-end px-4 pt-1.5">
          <div className="flex items-center gap-1 bg-white/70 backdrop-blur-sm px-2 py-0.5 rounded-full">
            <CloudSun className="w-3 h-3 text-[#007AFF]" />
            <span className="text-[10px] text-gray-600">
              {weather.description} {weather.temperature > 0 && `${Math.round(weather.temperature)}°C`}
            </span>
          </div>
        </div>

        {/* Header */}
        <Header activeTab={activeTab} onTabChange={setActiveTab} />

        {/* Content - strict single page, no scroll */}
        <div className="flex-1 min-h-0 px-4 pt-1 pb-0 overflow-hidden">
          <AnimatePresence mode="wait">
            {activeTab === 'daily' ? (
              <motion.div
                key="daily"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.2 }}
                className="h-full flex flex-col"
              >
                <DateSelector
                  date={selectedDate}
                  weekday={currentMenu?.weekday || ''}
                  onPrev={handlePrevDate}
                  onNext={handleNextDate}
                />

                {currentMenu?.isHoliday ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex-1 flex flex-col items-center justify-center"
                  >
                    <span className="text-3xl font-bold text-[#FF3B30]">周休二日</span>
                    {currentMenu.specialNote && (
                      <p className="text-sm text-[#FF9500] font-medium mt-1">{currentMenu.specialNote}</p>
                    )}
                    <p className="text-sm text-gray-400 mt-1">6月{selectedDate}日 星期{currentMenu.weekday}</p>
                  </motion.div>
                ) : (
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={selectedDate}
                      initial={{ opacity: 0, x: direction * 30 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: direction * -30 }}
                      transition={{ duration: 0.25 }}
                      className="flex-1 flex flex-col min-h-0 gap-2"
                    >
                      {currentMenu?.specialNote && (
                        <div className="bg-[#FF9500]/10 border border-[#FF9500]/20 rounded-xl px-4 py-2 flex-shrink-0">
                          <p className="text-xs text-[#FF9500] font-medium text-center">{currentMenu.specialNote}</p>
                        </div>
                      )}

                      <div className="flex-1 min-h-0 flex flex-col gap-2">
                        <MealCard
                          type="breakfast" title="早點" time="08:30"
                          content={currentMenu?.breakfast || ''}
                          calories={currentMenu?.breakfastCal || 0}
                        />
                        <MealCard
                          type="lunch" title="午餐" time="11:30"
                          content=""
                          calories={currentMenu?.lunchCal || 0}
                          lunchType={currentMenu?.lunchType}
                          lunchDetail={currentMenu?.lunch}
                          lunchCombined={currentMenu?.lunchCombined}
                        />
                        <MealCard
                          type="afternoon" title="午點" time="15:30"
                          content={currentMenu?.afternoon || ''}
                          calories={currentMenu?.afternoonCal || 0}
                        />
                      </div>
                    </motion.div>
                  </AnimatePresence>
                )}
              </motion.div>
            ) : (
              <motion.div
                key="list"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.2 }}
                className="h-full overflow-y-auto"
              >
                <ListView onSelectDate={handleSelectDate} />
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Calendar Sheet - slides up from bottom */}
        {activeTab === 'daily' && (
          <CalendarSheet selectedDate={selectedDate} onSelectDate={handleSelectDate} />
        )}
      </div>
    </div>
  );
}
