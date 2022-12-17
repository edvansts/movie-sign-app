export const removeFileExtension = (text: string) => {
  const dotIndex = text.lastIndexOf(".");

  if (dotIndex === -1) {
    return text;
  }

  const textWithoutExtension = text.substring(0, dotIndex);

  return textWithoutExtension;
};

export const removeHttpPrefixFromUri = (text: string) => {
  const barsIndex = text.lastIndexOf("://");

  if (barsIndex === -1) {
    return text;
  }

  const textWithoutBars = text.substring(barsIndex + 3).replaceAll('/', '.');

  return textWithoutBars;
};
