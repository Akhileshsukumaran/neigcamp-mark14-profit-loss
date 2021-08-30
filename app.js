var inputPrice = document.querySelector("#lbl-initial-price");
var inputStock = document.querySelector("#lbl-quantity-stocks");
var inputCurrentPrice = document.querySelector("#lbl-current-price");
var btnCheck = document.querySelector("#btn-check");
var output = document.querySelector("#output");

btnCheck.addEventListener("click", clickHandler);

function clickHandler() {
  var ip = Number(inputPrice.value);
  var qty = Number(inputStock.value);
  var curr = Number(inputCurrentPrice.value);

  calculateProfitAndLoss(ip, qty, curr);
}

function calculateProfitAndLoss(initial, quantity, current) {
  if (initial > current) {
    var loss = (initial - current) * quantity;
    var lossPercentage = (loss / initial) * 100;

    showOutput(
      `The loss is ${loss} and the percent is ${lossPercentage}% 🙁`
    );
  } else if (current > initial) {
    var profit = (current - initial) * quantity;
    var profitPercentage = (profit / initial) * 100;

    showOutput(
      `Hey, the profit is ${profit} and the percent is ${profitPercentage}% 🎊`
    );
  } else {
    showOutput(`No pain no gain 😐`);
  }
}

function showOutput(message) {
  output.innerText = message;
  console.log(message);
}