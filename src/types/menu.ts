export interface MenuItem {
  date: number;
  weekday: string;
  isHoliday: boolean;
  breakfast: string;
  breakfastCal: number;
  // Separate lunch (standard format)
  lunchType: 'separate' | 'combined';
  lunch: {
    staple: string; stapleCal: number;
    main: string; mainCal: number;
    side1: string; side1Cal: number;
    side2: string; side2Cal: number;
    soup: string; soupCal: number;
    fruit: string; fruitCal: number;
  };
  // Combined lunch (special format for certain days)
  lunchCombined: string;
  lunchCal: number;
  afternoon: string;
  afternoonCal: number;
  totalCal: number;
  specialNote?: string;
}
