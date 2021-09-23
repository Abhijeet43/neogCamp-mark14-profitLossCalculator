const initialValueEl = document.querySelector("#initial-value");
const quantityEl = document.querySelector("#quantity");
const currentValueEl = document.querySelector("#current-value");
const tellBtn = document.querySelector("#btn-tell");
const resetBtn = document.querySelector("#btn-reset");
const outputBox = document.querySelector("#output-box");

function showMessage(msg, color) {
  outputBox.style.display = "block";
  outputBox.style.color = color;
  outputBox.innerText = msg;
}

function reset() {
  initialValueEl.value = "";
  quantityEl.value = "1";
  currentValueEl.value = "";
  outputBox.innerText = "";
  initialValueEl.focus();
}

function calculateProfitorLoss(initialValue, quantity, currentValue) {
  if (initialValue < currentValue) {
    const profit = ((currentValue - initialValue) * quantity).toFixed(2);
    const profitPercentage = (
      ((currentValue - initialValue) * 100) /
      initialValue
    ).toFixed(2);
    showMessage(
      `Profit is ₹ ${profit} and Profit percentage is ${profitPercentage}%`,
      "green"
    );
  } else if (initialValue > currentValue) {
    const loss = ((initialValue - currentValue) * quantity).toFixed(2);
    const lossPercentage = (
      ((initialValue - currentValue) * 100) /
      initialValue
    ).toFixed(2);
    showMessage(
      `Loss is ₹ ${loss} and Loss percentage is ${lossPercentage}%`,
      "red"
    );
  } else {
    showMessage("No profit no loss", "red");
  }
}

tellBtn.addEventListener("click", function () {
  const initialValue = Number(initialValueEl.value);
  const quantity = Number(quantityEl.value);
  const currentValue = Number(currentValueEl.value);

  if (initialValue && quantity && currentValue) {
    if (initialValue <= 0 || currentValue <= 0) {
      showMessage("Initial Price or Current Price cannot be negative", "red");
      setTimeout(() => {
        reset();
      }, 4000);
    } else {
      calculateProfitorLoss(initialValue, quantity, currentValue);
    }
  } else {
    showMessage("Fields cannot be empty", "red");
    setTimeout(() => {
      reset();
    }, 4000);
  }
});

resetBtn.addEventListener("click", reset);
