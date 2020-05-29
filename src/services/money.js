export const convertToDollars = (ogPrice) => {
  return '$' + (ogPrice / 100).toFixed(2);
};

export const dateConversion = (oldDate) => {
  const dateToConvert = new Date(oldDate);
  return dateToConvert.toLocaleDateString(undefined);
};

export const dateConversionWithTime = (oldDate) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' };
  const dateToConvert = new Date(oldDate);
  return dateToConvert.toLocaleDateString('en-US', options);
};
