document.getElementById("login-button").addEventListener("click", function (e) {
  e.preventDefault();

  const mobileNumberValue = document.getElementById("mobile-number").value;
  // const mobileNumberValueConverted = parseInt(mobileNumberValue);

  const pinValue = document.getElementById("pin-number").value;
  // const pinValueConverted = parseInt(pinValue);

  if (mobileNumberValue.length == 11 && pinValue.length == 4) {
    window.location.href = "./home.html";
  } else {
    alert("Invalid! Enter 11 digit number and 4 digit pin");
  }
});
