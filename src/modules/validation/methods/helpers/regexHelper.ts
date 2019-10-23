export const quantityChars = (regex, str: string): number => {
  const matches: RegExpMatchArray = str.match(regex);
  try {
    return matches.length;
  } catch (e) {
    return 0;
  }
};
