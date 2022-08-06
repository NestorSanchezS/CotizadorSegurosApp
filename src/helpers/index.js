export const getYearDifference = (year) => {
  return new Date().getFullYear() - year;
};

export const calculateMark = (mark) => {
  let increment;
  switch (mark) {
    case "1":
      increment = 1.3;
      break;
    case "2":
      increment = 1.15;
      break;
    case "3":
      increment = 1.05;
      break;
    default:
      break;
  }

  return increment;
};
