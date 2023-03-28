const convertBtn = document.getElementById("convert-btn");
const clearBtn = document.getElementById("clear-btn");
const lengthPara = document.getElementById("length-result");
const volumePara = document.getElementById("volume-result");
const massPara = document.getElementById("mass-result");

convertBtn.addEventListener("click", function () {
  const inputNum = document.querySelector(".num-container").value;
  const error = "Input is not a number";

  if (isNaN(inputNum)) {
    lengthPara.textContent = error;
    volumePara.textContent = error;
    massPara.textContent = error;
  } else {
    lengthPara.textContent = `${inputNum} Meter = ${meterToFeet(
      inputNum
    ).toFixed(2)} Feet
                          |  ${inputNum} Feet = ${feetToMeter(inputNum).toFixed(
      2
    )} Meter`;

    volumePara.textContent = `${inputNum} Liter = ${literToGallon(
      inputNum
    ).toFixed(2)} Gallon
                          |  ${inputNum} Gallon = ${gallonToLiter(
      inputNum
    ).toFixed(2)} Liter`;

    massPara.textContent = `${inputNum} Kilograms = ${kilogramToPound(
      inputNum
    ).toFixed(2)} Pounds
                          |  ${inputNum} Pounds = ${poundToKilogram(
      inputNum
    ).toFixed(2)} Kilograms`;
  }
});

clearBtn.addEventListener("click", function () {
  lengthPara.textContent = "";
  volumePara.textContent = "";
  massPara.textContent = "";
  document.querySelector(".num-container").value = null;
});

function meterToFeet(num) {
  return num * 3.28084;
}

function feetToMeter(num) {
  return num / 3.28084;
}

function gallonToLiter(num) {
  return num * 3.78541;
}

function literToGallon(num) {
  return num / 3.78541;
}

function kilogramToPound(num) {
  return num * 2.20462;
}

function poundToKilogram(num) {
  return num / 2.20462;
}
