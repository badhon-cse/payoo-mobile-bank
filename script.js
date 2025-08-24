document.getElementById("login-button").addEventListener("click", function (e) {
  e.preventDefault();
  const mobileNumber = 01766356158;
  const pin = 775900;

  const mobileNumberValue = document.getElementById("mobile-number").value;
  const mobileNumberValueConverted = parseInt(mobileNumberValue);

  const pinValue = document.getElementById("pin-number").value;
  const pinValueConverted = parseInt(pinValue);

  if (
    mobileNumberValueConverted === mobileNumber &&
    pinValueConverted === pin
  ) {
    window.location.href = "./home.html";
  } else {
    alert("Invalid Credentials");
  }
});
