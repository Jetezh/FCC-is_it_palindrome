const textInput = document.querySelector("#text-input");
const checkBtn = document.querySelector("#check-btn");
const result = document.querySelector("#result");

function isItPalindrome(input) {
  const inputValue = textInput.value.replace(/[^A-Za-z0-9]/gi, "").toLowerCase();
  const reversed = inputValue.split('').reverse().join('');

  if(textInput.value === "") {
    window.alert("Please input a value");
  } else if(inputValue != reversed) {
    result.textContent = `${textInput.value} is not a palindrome`;
  } else if(inputValue === reversed) {
    result.textContent = `${textInput.value} is a palindrome`;
  }

  result.classList.remove("hidden");
}

checkBtn.addEventListener("click", () => {
  isItPalindrome(textInput.value);
  textInput.value = "";
});