function MonthFormat(month) {
  let monthValue = null;
  switch (month) {
    case 0:
    monthValue = '一月'
    break;
    case 1:
    monthValue = '二月'
    break;
    case 2:
    monthValue = '三月'
    break;
    case 3:
    monthValue = '四月'
    break;
    case 4:
    monthValue = '五月'
    break;
    case 5:
    monthValue = '六月'
    break;
    case 6:
    monthValue = '七月'
    break;
    case 7:
    monthValue = '八月'
    break;
    case 8:
    monthValue = '九月'
    break;
    case 9:
    monthValue = '十月'
    break;
    case 10:
    monthValue = '十一月'
    break;
    case 11:
    monthValue = '十二月'
    break;
  }
  return monthValue;
}

export default MonthFormat;
