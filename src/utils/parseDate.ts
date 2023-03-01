export const parseDate = (date: string): string => {
  const inputDate = new Date(date);

  return inputDate.toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
};
