"use strict";

// elements

const currencyOneEl = document.getElementById("currency-one");
const currencyTwoEl = document.getElementById("currency-two");
const amountOneEl = document.getElementById("amount-one");
const amountTwoEl = document.getElementById("amount-two");
const btnSwap = document.getElementById("btn-swap");
const rateEl = document.getElementById("rate");

// global variable

let url = "";

// function

const convertCurrency = function () {
  const currencyOne = currencyOneEl.value;
  const currencyTwo = currencyTwoEl.value;
  const amountOne = amountOneEl.value;

  const url = `https://v6.exchangerate-api.com/v6/881fa5aade3e234e33b74c98/latest/${currencyOne}`;

  // using fetch method to call API
  fetch(url)
    .then((resp) => resp.json())
    .then((data) => {
      // using rate variable to adding the currency values
      const rate = data.conversion_rates[currencyTwo].toFixed(2);
      rateEl.innerText = `1 ${currencyOne} = ${rate} ${currencyTwo}`;
      amountTwoEl.value = amountOne * rate;
    });
};

// EventListeners
//using  input event to adding the value in amount one element
amountOneEl.addEventListener("input", convertCurrency);

// using change event to calculate the currency values
currencyOneEl.addEventListener("change", convertCurrency);
currencyTwoEl.addEventListener("change", convertCurrency);

// using click event  to swapping currency option
btnSwap.addEventListener("click", function () {
  // using temp variable to swap the currencies
  let temp = "";

  temp = currencyOneEl.value;
  currencyOneEl.value = currencyTwoEl.value;
  currencyTwoEl.value = temp;

  convertCurrency();
});
