//Obtiene Diferencia de años
export const getYearDifference = (year) => {
  return new Date().getFullYear() - year;
};

export const calculateMark = (marca) => {
  let increment;
  switch (marca) {
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

export const calculatePlan = (plan) => (plan === "1" ? 1.2 : 1.5);

export const formatMoney = (amount) =>
  amount.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });
