import { Sun, UtensilsCrossed, Cookie } from 'lucide-react';
import CategoryBadge from './CategoryBadge';

interface MealCardProps {
  type: 'breakfast' | 'lunch' | 'afternoon';
  title: string;
  time: string;
  content: string;
  calories: number;
  lunchType?: 'separate' | 'combined';
  lunchDetail?: {
    staple: string; stapleCal: number;
    main: string; mainCal: number;
    side1: string; side1Cal: number;
    side2: string; side2Cal: number;
    soup: string; soupCal: number;
    fruit: string; fruitCal: number;
  };
  lunchCombined?: string;
}

const headerConfig = {
  breakfast: { gradient: 'from-[#FF9500] to-[#FFB84D]', icon: Sun },
  lunch: { gradient: 'from-[#34C759] to-[#5BD47B]', icon: UtensilsCrossed },
  afternoon: { gradient: 'from-[#5856D6] to-[#7A79E0]', icon: Cookie },
};

export default function MealCard({ type, title, time, content, calories, lunchType, lunchDetail, lunchCombined }: MealCardProps) {
  const config = headerConfig[type];
  const Icon = config.icon;

  return (
    <div className="bg-white/85 backdrop-blur-sm rounded-2xl shadow-sm overflow-hidden">
      {/* Header */}
      <div className={`bg-gradient-to-r ${config.gradient} px-3 py-1.5 sm:px-4 sm:py-2 flex items-center justify-between`}>
        <div className="flex items-center gap-2">
          <Icon className="w-4 h-4 text-white" />
          <span className="text-white text-sm font-bold">{title} {time}</span>
        </div>
        {calories > 0 && <span className="text-white/90 text-xs font-medium">{calories} kcal</span>}
      </div>

      {/* Content */}
      <div className="px-3 py-2 sm:px-4 sm:py-3">
        {type === 'lunch' && lunchType === 'separate' && lunchDetail ? (
          <div className="space-y-1 sm:space-y-1.5">
            <div className="flex items-center gap-2">
              <CategoryBadge category="主食" />
              <span className="text-sm sm:text-base font-medium text-gray-800 flex-1">{lunchDetail.staple}</span>
              <span className="text-[10px] sm:text-xs text-gray-400">{lunchDetail.stapleCal}kcal</span>
            </div>
            <div className="flex items-center gap-2">
              <CategoryBadge category="主菜" />
              <span className="text-sm sm:text-base font-medium text-gray-800 flex-1">{lunchDetail.main}</span>
              <span className="text-[10px] sm:text-xs text-gray-400">{lunchDetail.mainCal}kcal</span>
            </div>
            <div className="flex items-center gap-2">
              <CategoryBadge category="副菜" />
              <span className="text-sm sm:text-base font-medium text-gray-800 flex-1">{lunchDetail.side1}</span>
              <span className="text-[10px] sm:text-xs text-gray-400">{lunchDetail.side1Cal}kcal</span>
            </div>
            {lunchDetail.side2 && (
              <div className="flex items-center gap-2">
                <CategoryBadge category="副菜" />
                <span className="text-sm sm:text-base font-medium text-gray-800 flex-1">{lunchDetail.side2}</span>
                <span className="text-[10px] sm:text-xs text-gray-400">{lunchDetail.side2Cal}kcal</span>
              </div>
            )}
            <div className="flex items-center gap-2">
              <CategoryBadge category="湯品" />
              <span className="text-sm sm:text-base font-medium text-gray-800 flex-1">{lunchDetail.soup}</span>
              <span className="text-[10px] sm:text-xs text-gray-400">{lunchDetail.soupCal}kcal</span>
            </div>
            <div className="flex items-center gap-2">
              <CategoryBadge category="水果" />
              <span className="text-sm sm:text-base font-medium text-gray-800 flex-1">{lunchDetail.fruit}</span>
              <span className="text-[10px] sm:text-xs text-gray-400">{lunchDetail.fruitCal}kcal</span>
            </div>
          </div>
        ) : type === 'lunch' && lunchType === 'combined' && lunchCombined ? (
          <div className="space-y-1 sm:space-y-1.5">
            <p className="text-sm sm:text-base font-medium text-gray-800 leading-relaxed">{lunchCombined}</p>
          </div>
        ) : (
          <p className="text-sm sm:text-base font-medium text-gray-800">{content}</p>
        )}
      </div>
    </div>
  );
}
