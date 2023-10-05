function capitalize(string) {
  const firstLetter = string.charAt(0);
  const remainingLetters = string.substring(1);

  const firstUpperCase = firstLetter.toUpperCase();
  remainingLetters.toLowerCase();

  console.log(firstUpperCase + remainingLetters);
}

capitalize(hello);
