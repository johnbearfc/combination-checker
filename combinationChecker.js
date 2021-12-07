const combinationChecker = () => {
  let i = 10000;
  let correctCombination = "";

  while (i <= 99999) {
    // converting i to an array of numbers:
    const combination = i
      .toString()
      .split("")
      .map((digit) => Number(digit));

    // declaring the product of the first two digits:
    const productOfFirstTwoDigits = combination[0] * combination[1];

    // declaring the third of second digit:
    const thirdOfDigit2 = combination[1] / 3;

    // declaring the sum of last two digits:
    const sumOfLastTwoDigits = combination[3] + combination[4];

    // declaring the sum of first and third digits:
    const sumOfFirstAndThirdDigits = combination[0] + combination[2];

    // declaring sum of all digits:
    const sumOfDigits = combination.reduce((a, b) => a + b);

    // declaring whether the combination contains duplicates:
    const combinationWithoutDuplicates = [...new Set(combination)];
    const containsDuplicates =
      combinationWithoutDuplicates.length != combination.length;

    // checking if the combination meets requirements:
    if (
      productOfFirstTwoDigits === 24 &&
      thirdOfDigit2 === combination[3] &&
      sumOfLastTwoDigits === sumOfFirstAndThirdDigits &&
      sumOfDigits === 26 &&
      containsDuplicates
    ) {
      correctCombination = combination.join("");
    }

    i++;
  }

  return correctCombination;
};

console.log(combinationChecker());
