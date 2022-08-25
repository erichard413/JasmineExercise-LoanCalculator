window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) {
    setupInitialValues();
    form.addEventListener("submit", function(e) {
      
      e.preventDefault();
      
      update();
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupInitialValues() {
  const values = { amount: 100000, years: 10, rate: 4.5 };
  const amountUI = document.getElementById('loan-amount');
  amountUI.value = values.amount;
  const yearsUI = document.getElementById('loan-years');
  yearsUI.value = values.years;
  const rateUI = document.getElementById('loan-rate');
  rateUI.value = values.rate;
  update();
  // calculateMonthlyPayment(amount, rate, payments);
}

// Get the current values from the UI
// Update the monthly payment
function update() {
  const currentUIValues = getCurrentUIValues();
  updateMonthly(calculateMonthlyPayment(currentUIValues))
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
// monthlyPayment = Number(((P*i)/(1-((1+i)**(-n)))).toFixed(2))
// return monthlyPayment
const monthlyRate = (values.rate /100)/12;
const n = Math.floor(values.years *12);
return (
  ((monthlyRate * values.amount)/(1 - ((1+ monthlyRate)**-n))).toFixed(2)
  );
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
  // result = document.getElementById('result');
  // if (document.querySelector('.output')) {
  //   oldOutput = document.querySelector('.output')
  //   result.removeChild(oldOutput);
  // }
  // newResult = document.createElement('p');
  // newResult.classList.add('output');
  // newResult.innerText =`${monthlyPayment}`;
  // result.append(newResult);
  const monthlyUI = document.getElementById('result')
  monthlyUI.innerText = `$${monthly}`
}