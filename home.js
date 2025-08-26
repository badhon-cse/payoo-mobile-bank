const transactionData = [];

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

// function to toggle button design

function handleButtonToggle(id) {
  const buttons = document.getElementsByClassName("form-btn");

  for (const btn of buttons) {
    btn.classList.remove("!border-[#0874f2]", "!bg-[#0874f20d]");
    btn.classList.add("border-gray-300");
  }

  document
    .getElementById(id)
    .classList.add("!border-[#0874f2]", "!bg-[#0874f20d]");
}

// add money features

document
  .getElementById("add-money-button")
  .addEventListener("click", function (e) {
    e.preventDefault();

    const selectedBank = getValue("bank");
    const accountNumber = getValue("account-number");
    const addAmount = getValueInt("add-amount");
    const pin = getValueInt("add-pin");
    const balance = getInnerText("balance");

    if (!addAmount || addAmount <= 0) {
      alert("Invalid Amount");
      return;
    }

    if (accountNumber.length != 11) {
      alert("inalid Mobile Number");
      return;
    }

    const updateBalance = balance + addAmount;

    document.getElementById("balance").innerText = updateBalance;
    const data = {
      name: "Add Money",
      date: new Date().toLocaleTimeString(),
    };

    transactionData.push(data);
  });

// Toggling features

document.getElementById("add-money").addEventListener("click", function () {
  handleToggle("add-money-section");
  handleButtonToggle("add-money");
});

document.getElementById("cashout").addEventListener("click", function () {
  handleToggle("cashout-section");
  handleButtonToggle("cashout");
});

document.getElementById("transactions").addEventListener("click", function () {
  handleToggle("transaction-section");
  handleButtonToggle("transactions");
});

document
  .getElementById("transfer-money")
  .addEventListener("click", function () {
    handleToggle("transfer-money-section");
    handleButtonToggle("transfer-money");
  });

document.getElementById("get-bonus").addEventListener("click", function () {
  handleToggle("get-bonus-section");
  handleButtonToggle("get-bonus");
});

document.getElementById("pay-bill").addEventListener("click", function () {
  handleToggle("pay-bill-section");
  handleButtonToggle("pay-bill");
});

// Withdraw money features

document
  .getElementById("withdraw-money-button")
  .addEventListener("click", function (e) {
    e.preventDefault();
    const withdrawAmount = getValueInt("withdraw-amount");
    const balance = getInnerText("balance");

    if (withdrawAmount <= 0 || withdrawAmount > balance || !withdrawAmount) {
      alert("Invalid Amount");
      return;
    }

    updateBalance = balance - withdrawAmount;
    document.getElementById("balance").innerText = updateBalance;

    document.getElementById("balance").innerText = updateBalance;
    const data = {
      name: "Cash Out",
      date: new Date().toLocaleTimeString(),
    };

    transactionData.push(data);
  });

// transactions features

document.getElementById("transactions").addEventListener("click", function () {
  const transactionSection = document.getElementById("transaction-section");
  transactionSection.innerHTML = `<div class="flex justify-between items-center">
        <div>
          <h3 class="font-bold mt-3 mb-4">Transaction History</h3>
        </div>
        <p class="text-[#08080880]">View All</p>
      </div>`;
  for (const data of transactionData) {
    const div = document.createElement("div");
    div.innerHTML = `
       
      <div class="flex bg-white p-3 rounded-xl gap-3 mb-3 border-1 border-gray-200">
        <div>
          <img
            class="bg-[#F4F5F7] p-3 rounded-[50%]"
            src="./assets/wallet1.png"
            alt=""
          />
        </div>
        <div>
          <h3 class="font-bold">${data.name}</h3>
          <p class="text-[#08080880]">${data.date}</p>
        </div>
      </div>`;

    transactionSection.appendChild(div);
  }
});
