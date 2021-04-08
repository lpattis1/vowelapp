let countVowels = document.querySelector(".count-vowels");

function getVowels() {
  let userInput = document.querySelector(".vowels").value;
  let count = userInput.match(/[aeiou]/gi).length;
  let result = document.querySelector(".result");

  if (count <= 1) {
    result.innerHTML = `There is ${count} vowel in "${userInput}".`;
  } else {
    result.innerHTML = `There are ${count} vowels in "${userInput}".`;
  }

  result.style.fontSize = "7rem";
  result.style.paddingTop = "4rem";
}

countVowels.addEventListener("click", function () {
  getVowels();
});
