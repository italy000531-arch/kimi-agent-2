import type { MenuItem } from '@/types/menu';

// Lunch helper function

function L(
  staple: string, stapleCal: number,
  main: string, mainCal: number,
  side1: string, side1Cal: number,
  side2: string, side2Cal: number,
  soup: string, soupCal: number,
  fruit: string, fruitCal: number,
  lunchCal: number
) {
  return {
    staple, stapleCal, main, mainCal, side1, side1Cal, side2, side2Cal, soup, soupCal, fruit, fruitCal, lunchCal,
  };
}

export const menuData: MenuItem[] = [
  // 6/1 一
  {
    date: 1, weekday: '一', isHoliday: false,
    breakfast: '玉米蔬菜粥', breakfastCal: 195,
    lunchType: 'separate',
    lunch: L('白飯',170,'瓜仔肉',135,'紅蘿蔔絲炒蛋',80,'季節時蔬',30,'大黃瓜肉絲湯',45,'時令水果',45,505),
    lunchCombined: '', lunchCal: 505,
    afternoon: '綠豆湯、蔬菜餅乾', afternoonCal: 175, totalCal: 875,
  },
  // 6/2 二
  {
    date: 2, weekday: '二', isHoliday: false,
    breakfast: '菜包、黑豆漿', breakfastCal: 220,
    lunchType: 'separate',
    lunch: L('五穀飯',165,'青椒肉絲',130,'麻婆豆腐',75,'季節時蔬',30,'味噌小魚湯',50,'時令水果',45,495),
    lunchCombined: '', lunchCal: 495,
    afternoon: '魷魚羹麵', afternoonCal: 210, totalCal: 925,
  },
  // 6/3 三
  {
    date: 3, weekday: '三', isHoliday: false,
    breakfast: '海苔味噌拉麵', breakfastCal: 230,
    lunchType: 'separate',
    lunch: L('燕麥飯',170,'蔥爆雞柳',130,'大黃瓜炒甜不辣',80,'季節時蔬',30,'海帶芽肉絲湯',50,'時令水果',45,505),
    lunchCombined: '', lunchCal: 505,
    afternoon: '蜂蜜蛋糕、牛奶', afternoonCal: 200, totalCal: 935,
  },
  // 6/4 四 - combined lunch
  {
    date: 4, weekday: '四', isHoliday: false,
    breakfast: '果醬吐司、牛奶', breakfastCal: 225,
    lunchType: 'combined',
    lunch: L('',0,'',0,'',0,'',0,'',0,'時令水果',45,45),
    lunchCombined: '什錦炒麵、香酥魚條、青菜豆腐湯',
    lunchCal: 490,
    afternoon: '皮蛋瘦肉粥', afternoonCal: 190, totalCal: 905,
  },
  // 6/5 五
  {
    date: 5, weekday: '五', isHoliday: false,
    breakfast: '什錦海鮮麵', breakfastCal: 235,
    lunchType: 'separate',
    lunch: L('地瓜飯',165,'甜醬豬肉片',140,'蠔油杏鮑菇',70,'季節時蔬',30,'蘿蔔雞湯',55,'時令水果',45,505),
    lunchCombined: '', lunchCal: 505,
    afternoon: '黑糖饅頭、仙草湯', afternoonCal: 195, totalCal: 935,
  },
  // 6/6 六
  { date: 6, weekday: '六', isHoliday: true, breakfast: '', breakfastCal: 0, lunchType: 'separate', lunch: L('',0,'',0,'',0,'',0,'',0,'',0,0), lunchCombined: '', lunchCal: 0, afternoon: '', afternoonCal: 0, totalCal: 0 },
  // 6/7 日
  { date: 7, weekday: '日', isHoliday: true, breakfast: '', breakfastCal: 0, lunchType: 'separate', lunch: L('',0,'',0,'',0,'',0,'',0,'',0,0), lunchCombined: '', lunchCal: 0, afternoon: '', afternoonCal: 0, totalCal: 0 },
  // 6/8 一
  {
    date: 8, weekday: '一', isHoliday: false,
    breakfast: '雞茸玉米粥', breakfastCal: 200,
    lunchType: 'separate',
    lunch: L('白飯',175,'蔥爆肉絲',130,'銀魚炒蛋',85,'季節時蔬',30,'雞蓉南瓜湯',50,'時令水果',45,515),
    lunchCombined: '', lunchCal: 515,
    afternoon: '茶葉蛋、紫菜味噌湯', afternoonCal: 160, totalCal: 875,
  },
  // 6/9 二
  {
    date: 9, weekday: '二', isHoliday: false,
    breakfast: '鮪魚吐司、牛奶', breakfastCal: 230,
    lunchType: 'separate',
    lunch: L('五穀飯',165,'香菇蔬菜雞丁',125,'乾片炒韭黃',65,'季節時蔬',30,'菇菇湯',45,'時令水果',45,475),
    lunchCombined: '', lunchCal: 475,
    afternoon: '切仔麵', afternoonCal: 220, totalCal: 925,
  },
  // 6/10 三
  {
    date: 10, weekday: '三', isHoliday: false,
    breakfast: '粿仔條湯', breakfastCal: 215,
    lunchType: 'separate',
    lunch: L('地瓜飯',165,'洋蔥肉絲',125,'三絲燴金針菇',65,'季節時蔬',30,'蕃茄洋蔥湯',45,'時令水果',45,475),
    lunchCombined: '', lunchCal: 475,
    afternoon: '馬來糕、米漿', afternoonCal: 200, totalCal: 890,
  },
  // 6/11 四 - combined
  {
    date: 11, weekday: '四', isHoliday: false,
    breakfast: '饅頭蛋、豆漿', breakfastCal: 240,
    lunchType: 'combined',
    lunch: L('',0,'',0,'',0,'',0,'',0,'時令水果',45,45),
    lunchCombined: '銀魚五彩炒飯、滷小翅腿、海芽味噌魚片湯',
    lunchCal: 495,
    afternoon: '蘿蔔玉米甜不辣湯', afternoonCal: 180, totalCal: 915,
  },
  // 6/12 五
  {
    date: 12, weekday: '五', isHoliday: false,
    breakfast: '陽春麵', breakfastCal: 225,
    lunchType: 'separate',
    lunch: L('燕麥飯',170,'黃瓜炒雞丁',120,'什錦炒乾丁',70,'季節時蔬',30,'蔬菜豆腐蛋花湯',45,'時令水果',45,480),
    lunchCombined: '', lunchCal: 480,
    afternoon: '夾心麵包、牛奶', afternoonCal: 200, totalCal: 905,
  },
  // 6/13 六
  { date: 13, weekday: '六', isHoliday: true, breakfast: '', breakfastCal: 0, lunchType: 'separate', lunch: L('',0,'',0,'',0,'',0,'',0,'',0,0), lunchCombined: '', lunchCal: 0, afternoon: '', afternoonCal: 0, totalCal: 0 },
  // 6/14 日
  { date: 14, weekday: '日', isHoliday: true, breakfast: '', breakfastCal: 0, lunchType: 'separate', lunch: L('',0,'',0,'',0,'',0,'',0,'',0,0), lunchCombined: '', lunchCal: 0, afternoon: '', afternoonCal: 0, totalCal: 0 },
  // 6/15 一
  {
    date: 15, weekday: '一', isHoliday: false,
    breakfast: '什錦糙米粥', breakfastCal: 205,
    lunchType: 'separate',
    lunch: L('白飯',175,'梅干扣肉',145,'洋蔥炒蛋',80,'季節時蔬',30,'金針肉絲湯',50,'時令水果',45,525),
    lunchCombined: '', lunchCal: 525,
    afternoon: '古早味香菇米粉湯', afternoonCal: 190, totalCal: 920,
  },
  // 6/16 二
  {
    date: 16, weekday: '二', isHoliday: false,
    breakfast: '鮮肉包、黑豆漿', breakfastCal: 240,
    lunchType: 'separate',
    lunch: L('五穀飯',165,'京醬肉絲',135,'家常豆腐',70,'季節時蔬',30,'黃豆芽肉絲湯',50,'時令水果',45,495),
    lunchCombined: '', lunchCal: 495,
    afternoon: '檸檬冬瓜、法國麵包', afternoonCal: 180, totalCal: 915,
  },
  // 6/17 三
  {
    date: 17, weekday: '三', isHoliday: false,
    breakfast: '蛋餅', breakfastCal: 210,
    lunchType: 'separate',
    lunch: L('地瓜飯',165,'蒜泥白肉',140,'紅蘿蔔木耳炒蛋',80,'季節時蔬',30,'香菇雞湯',55,'時令水果',45,515),
    lunchCombined: '', lunchCal: 515,
    afternoon: '豆漿、蔥花饅頭', afternoonCal: 195, totalCal: 920,
  },
  // 6/18 四 - combined
  {
    date: 18, weekday: '四', isHoliday: false,
    breakfast: '培根吐司、牛奶', breakfastCal: 240,
    lunchType: 'combined',
    lunch: L('',0,'',0,'',0,'',0,'',0,'時令水果',45,45),
    lunchCombined: '蕃茄肉醬義大利麵、龍鳳腿、浸花椰菜、南瓜蘑菇濃湯',
    lunchCal: 520,
    afternoon: '海鮮粥', afternoonCal: 185, totalCal: 945,
  },
  // 6/19-21 端午連假
  {
    date: 19, weekday: '五', isHoliday: true,
    breakfast: '', breakfastCal: 0, lunchType: 'separate', lunch: L('',0,'',0,'',0,'',0,'',0,'',0,0),
    lunchCombined: '', lunchCal: 0, afternoon: '', afternoonCal: 0, totalCal: 0,
    specialNote: '祝福您闔家端午安康',
  },
  {
    date: 20, weekday: '六', isHoliday: true,
    breakfast: '', breakfastCal: 0, lunchType: 'separate', lunch: L('',0,'',0,'',0,'',0,'',0,'',0,0),
    lunchCombined: '', lunchCal: 0, afternoon: '', afternoonCal: 0, totalCal: 0,
    specialNote: '祝福您闔家端午安康',
  },
  {
    date: 21, weekday: '日', isHoliday: true,
    breakfast: '', breakfastCal: 0, lunchType: 'separate', lunch: L('',0,'',0,'',0,'',0,'',0,'',0,0),
    lunchCombined: '', lunchCal: 0, afternoon: '', afternoonCal: 0, totalCal: 0,
    specialNote: '祝福您闔家端午安康',
  },
  // 6/22 一
  {
    date: 22, weekday: '一', isHoliday: false,
    breakfast: '香菇雞肉粥', breakfastCal: 210,
    lunchType: 'separate',
    lunch: L('白飯',175,'滷肉',135,'什錦蔬菜炒蛋',85,'季節時蔬',30,'雙蘿蔔排骨湯',60,'時令水果',45,530),
    lunchCombined: '', lunchCal: 530,
    afternoon: '茄汁鯖魚麵', afternoonCal: 215, totalCal: 955,
  },
  // 6/23 二
  {
    date: 23, weekday: '二', isHoliday: false,
    breakfast: '雜糧饅頭、豆漿', breakfastCal: 220,
    lunchType: 'separate',
    lunch: L('五穀飯',165,'馬鈴薯燉肉',140,'酸菜麵腸',70,'季節時蔬',30,'枸杞雞湯',55,'時令水果',45,505),
    lunchCombined: '', lunchCal: 505,
    afternoon: '肉燥米苔目', afternoonCal: 225, totalCal: 950,
  },
  // 6/24 三
  {
    date: 24, weekday: '三', isHoliday: false,
    breakfast: '鍋燒意麵', breakfastCal: 235,
    lunchType: 'separate',
    lunch: L('地瓜飯',165,'糖醋魚條',135,'竹筍炒肉絲',70,'季節時蔬',30,'青木瓜排骨湯',60,'時令水果',45,505),
    lunchCombined: '', lunchCal: 505,
    afternoon: '蔥花饅頭、豆漿', afternoonCal: 195, totalCal: 935,
  },
  // 6/25 四 - combined
  {
    date: 25, weekday: '四', isHoliday: false,
    breakfast: '果醬吐司、牛奶', breakfastCal: 225,
    lunchType: 'combined',
    lunch: L('',0,'',0,'',0,'',0,'',0,'時令水果',45,45),
    lunchCombined: '咖哩蘿蔔馬鈴薯雞肉燴飯、花枝排、蘑菇濃湯',
    lunchCal: 510,
    afternoon: '綠豆珍珠粉條湯', afternoonCal: 175, totalCal: 910,
  },
  // 6/26 五
  {
    date: 26, weekday: '五', isHoliday: false,
    breakfast: '雲吞麵', breakfastCal: 230,
    lunchType: 'separate',
    lunch: L('燕麥飯',170,'彩椒炒雞丁',120,'塔香海龍',75,'季節時蔬',30,'大黃瓜肉絲湯',45,'時令水果',45,485),
    lunchCombined: '', lunchCal: 485,
    afternoon: '仙草湯、古早大餅', afternoonCal: 195, totalCal: 910,
  },
  // 6/27 六
  { date: 27, weekday: '六', isHoliday: true, breakfast: '', breakfastCal: 0, lunchType: 'separate', lunch: L('',0,'',0,'',0,'',0,'',0,'',0,0), lunchCombined: '', lunchCal: 0, afternoon: '', afternoonCal: 0, totalCal: 0 },
  // 6/28 日
  { date: 28, weekday: '日', isHoliday: true, breakfast: '', breakfastCal: 0, lunchType: 'separate', lunch: L('',0,'',0,'',0,'',0,'',0,'',0,0), lunchCombined: '', lunchCal: 0, afternoon: '', afternoonCal: 0, totalCal: 0 },
  // 6/29 一
  {
    date: 29, weekday: '一', isHoliday: false,
    breakfast: '皮蛋瘦肉粥', breakfastCal: 205,
    lunchType: 'separate',
    lunch: L('白飯',175,'五香肉醬',140,'蔥花蛋',75,'季節時蔬',30,'蕃茄豆腐湯',45,'時令水果',45,510),
    lunchCombined: '', lunchCal: 510,
    afternoon: '柴魚滑蛋雞絲麵', afternoonCal: 200, totalCal: 915,
  },
  // 6/30 二
  {
    date: 30, weekday: '二', isHoliday: false,
    breakfast: '榨菜肉絲麵', breakfastCal: 230,
    lunchType: 'separate',
    lunch: L('燕麥飯',170,'三杯雞',140,'小魚乾炒乾片',80,'季節時蔬',30,'玉米排骨湯',60,'時令水果',45,525),
    lunchCombined: '', lunchCal: 525,
    afternoon: '檸檬愛玉、珍珠麵包', afternoonCal: 190, totalCal: 945,
  },
];

export const getMenuByDate = (date: number): MenuItem | undefined => {
  return menuData.find((item) => item.date === date);
};

export const getWeekdays = (): string[] => {
  return ['日', '一', '二', '三', '四', '五', '六'];
};
