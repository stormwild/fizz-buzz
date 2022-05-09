export function isMultipleOfThree(n) {
  return n % 3 === 0;
}

export function isMultipleOfFive(n) {
  return n % 5 === 0;
}

export default function fizzBuzz(n) {
  for (let i = 1; i <= n; i++) {
    if (isMultipleOfThree(i) && isMultipleOfFive(i)) {
      console.log("FizzBuzz");
    }

    if (isMultipleOfThree(i) && !isMultipleOfFive(i)) {
      console.log("Fizz");
    }

    if (!isMultipleOfThree(i) && isMultipleOfFive(i)) {
      console.log("Buzz");
    }

    if (!isMultipleOfThree(i) && !isMultipleOfFive(i)) {
      console.log(i);
    }
  }
}
