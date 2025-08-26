const validPin = 775900;

// function to get int value from input

function getValueInt(id) {
  const intValue = parseInt(document.getElementById(id).value);
  return intValue;
}

// function to get string value from input

function getValue(id) {
  const value = document.getElementById(id).value;
  return value;
}

// function to get innertextvalue to int

function getInnerText(id) {
  const innerText = parseInt(document.getElementById(id).innerText);
  return innerText;
}

// function to toggle

function handleToggle(id) {
  const forms = document.getElementsByClassName("forms");
  for (const form of forms) {
    form.style.display = "none";
  }
  document.getElementById(id).style.display = "block";
}

// add money features

document
  .getElementById("add-money-button")
  .addEventListener("click", function (e) {
    e.preventDefault();

    const selectedBank = getValue("bank");
    const accountnumber = getValueInt("account-number");
    const addAmount = getValueInt("add-amount");
    const pin = getValueInt("add-pin");
    const balance = getInnerText("balance");

    if (pin !== validPin && accountnumber.length != 11) {
      alert("Wrong Credentials");
      return;
    }

    const updateBalance = balance + addAmount;
    document.getElementById("balance").innerText = updateBalance;
  });

// Toggle between add mmoney and cashout

document.getElementById("add-money").addEventListener("click", function () {
  handleToggle("add-money-section");
});

document.getElementById("cashout").addEventListener("click", function () {
  handleToggle("cashout-section");
});

// Withdraw money features

document
  .getElementById("withdraw-money-button")
  .addEventListener("click", function (e) {
    e.preventDefault();
    const withdrawAmount = getValueInt("withdraw-amount");
    const balance = getInnerText("balance");
    updateBalance = balance - withdrawAmount;
    document.getElementById("balance").innerText = updateBalance;
  });
