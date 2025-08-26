document
  .getElementById("add-money-button")
  .addEventListener("click", function (e) {
    e.preventDefault();
    const selectedBank = document.getElementById("bank").value;
    const accountnumber = parseInt(
      document.getElementById("account-number").value
    );
    const addAmount = parseInt(document.getElementById("add-amount").value);
    const pin = parseInt(document.getElementById("add-pin").value);
    const validPin = 775900;

    const balance = parseInt(document.getElementById("balance").innerText);

    if (pin !== validPin && accountnumber.length != 11) {
      alert("Wrong Credentials");
      return;
    }

    const updateBalance = balance + addAmount;
    document.getElementById("balance").innerText = updateBalance;
  });

document.getElementById("add-money").addEventListener("click", function () {
  document.getElementById("add-money-section").style.display = "block";
  document.getElementById("cashout-section").style.display = "none";
});

document.getElementById("cashout").addEventListener("click", function () {
  document.getElementById("add-money-section").style.display = "none";
  document.getElementById("cashout-section").style.display = "block";
});

document
  .getElementById("withdraw-money-button")
  .addEventListener("click", function (e) {
    e.preventDefault();
    const withdrawAmount = parseInt(
      document.getElementById("withdraw-amount").value
    );
    const balance = parseInt(document.getElementById("balance").innerText);
    updateBalance = balance - withdrawAmount;
    document.getElementById("balance").innerText = updateBalance;
  });
