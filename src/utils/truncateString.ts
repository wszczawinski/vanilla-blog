export const truncateString = (
  inputString: string,
  maxLength: number
): string => {
  if (inputString.length <= maxLength) {
    return inputString;
  } else {
    return inputString.substr(0, maxLength - 3) + "...";
  }
};
