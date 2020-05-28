export const convertToDollars = (ogPrice) => {
  return "$" + (ogPrice / 100).toFixed(2);
};