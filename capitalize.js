function capitalize(string) {
  const firstLetter = string.charAt(0);
  const remainingLetters = string.substring(1);

  const firstUpperCase = firstLetter.toUpperCase();
  remainingLetters.toLowerCase();

  return firstUpperCase + remainingLetters;
}

module.exports = capitalize;
