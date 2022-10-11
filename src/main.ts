import { calculateSummation } from "./calculate";

const firstNumberElement = (<HTMLInputElement>document.getElementById("firstNumber"));
const secondNumberElement = (<HTMLInputElement>document.getElementById("secondNumber"));
const resultElement = (<HTMLDivElement>document.getElementById("result"));
const submitElement = document.getElementById("app");

submitElement?.addEventListener("submit", (event) => {
  event.preventDefault();
  if (typeof firstNumberElement === "number" && typeof secondNumberElement === "number") {
    console.log(calculateSummation(firstNumberElement, secondNumberElement));
  } else {
    const firstNumber = +firstNumberElement?.value;
    const secondNumber = +secondNumberElement?.value;
    const result = calculateSummation(firstNumber, secondNumber)
    resultElement.innerText = `Result is: ${result}`;
  }
})