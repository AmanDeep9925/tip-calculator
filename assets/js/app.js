/*
 * Initializing the variables *
 */

const tipAmount = document.querySelector(".tip-amount-value");
const totalAmount = document.querySelector(".total-amount-value");

const billInput = document.querySelector(".bill-input");
const peopleInput = document.querySelector(".people-input");
const tipPercents = document.querySelectorAll(".tip-percent");
const error = document.querySelector("#error");
const form = document.querySelector("#tip-form");
const customInput = document.querySelector(".custom-input>input");

const resetBtn = document.querySelector(".reset-btn");

let billInputVal = 0;
let tipPercentValue = 0;
let peopleValue = 0;

const percentContainer = document.querySelector(".input-percent");

/*
 * Accessing the event listeners *
 */

billInput.addEventListener("change", (e) => {
  billInputVal = e.target.value;
  calculateTip();
});

percentContainer.addEventListener("click", (e) => {
  var selectedTipPercent = e.target;

  tipPercents.forEach((tipPercent) => {
    tipPercent.classList.remove("active-btn");
  });

  selectedTipPercent.classList.add("active-btn");
  tipPercentValue = selectedTipPercent.getAttribute("data-value");
  calculateTip();
});

// * checking if the number of people is zero or not

peopleInput.addEventListener("change", (e) => {
  peopleValue = e.target.value;

  if (peopleValue <= 0) {
    error.classList.remove("inactive");
    error.classList.add("active");
  } else {
    error.classList.add("inactive");
    error.classList.remove("active");
  }
  calculateTip();
});

customInput.addEventListener("change", (e) => {
  tipPercentValue = e.target.value;
  calculateTip();
});

/*
 * Form submission *
 */

resetBtn.addEventListener("click", () => {
  billInput.value = "";
  peopleInput.value = "";

  tipPercents.forEach((tipPercent) => {
    tipPercent.classList.remove("active-btn");
  });

  customInput.value = "";
  //   calculateTip();
  updateUI(0.0, 0.0);
});

/*
 * calculate the tip *
 */

const calculateTip = () => {
  let tipPercent = tipPercentValue / 100;
  //   console.log(tipPercentValue);
  //   console.log(billInputVal);
  let tipAmountByBill = billInputVal * Number(tipPercent);
  let tipPerPersonValue = tipAmountByBill / peopleValue;

  totalAmountValue = Number(billInputVal) + Number(tipAmountByBill);
  console.log(typeof totalAmountValue);
  //   console.log(totalAmount, tipAmount);
  updateUI(totalAmountValue, tipPerPersonValue);
};

let updateUI = (totalAmountValue, tipPerPersonValue) => {
  totalAmount.innerHTML = `<span class="money">$</span>${totalAmountValue}</span>`;
  tipAmount.innerHTML = `<span class="money">$</span>${tipPerPersonValue}</span>`;
};
