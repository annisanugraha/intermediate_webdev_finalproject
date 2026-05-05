if (typeof require !== 'undefined' && typeof window !== 'undefined') {
  try { require('./style.css'); } catch(e) {}
}

const calculateSimpleInterest = (principal, rate, time) => {
  return (principal * rate * time) / 100;
};

const calculateTotalPayableAmount = (principal, interestAmount) => {
  return principal + interestAmount;
};

const calculate = () => {
  let principalElement = document.getElementById("principal");
  let rateElement = document.getElementById("rate");
  let timeElement = document.getElementById("time");
  let resultElement = document.getElementById("result");

  if (!principalElement || !rateElement || !timeElement || !resultElement) return;

  let p = Number(principalElement.value);
  let r = Number(rateElement.value);
  let t = Number(timeElement.value);

  let simpleInterest = calculateSimpleInterest(p, r, t);
  let amount = calculateTotalPayableAmount(p, simpleInterest);

  resultElement.innerHTML = `<div>Principal Amount: <span>${p.toFixed(2)}</span></div>
<div>Total Interest: <span>${simpleInterest.toFixed(2)}</span></div>
<div>Total Amount: <span>${amount.toFixed(2)}</span></div>`;
};

if (typeof window !== 'undefined') {
  window.addEventListener('DOMContentLoaded', () => {
    const calculateBtn = document.getElementById("calculate-btn");
    if (calculateBtn) {
      calculateBtn.addEventListener('click', calculate);
    }
  });
}

if (typeof module !== 'undefined')
  module.exports = { calculateSimpleInterest, calculateTotalPayableAmount, calculate };
