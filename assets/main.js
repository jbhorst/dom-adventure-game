/**
 * DOM Adventure Game
 */

// document.querySelector('#game').textContent = 'DOM Adventure Game';
let game = document.getElementById("game");
let textEl = document.getElementById("text");
let btnContainer = document.getElementById("choice-buttons");
let btnEl = document.getElementsByClassName("btn");
let multipleChoice = document.getElementById("multiple-choice");
let listItem1 = document.getElementById("list-item1");
let listItem2 = document.getElementById("list-item2");
let listItem3 = document.getElementById("list-item3");
let listItem4 = document.getElementById("list-item4");
let textInput = document.getElementById("choice-text-input");
let textInput2 = document.getElementById("choice-text-input2");
let textInput3 = document.getElementById("choice-text-input3");
let answer = document.getElementById("answer");
let answer2 = document.getElementById("answer2");
let answer3 = document.getElementById("answer3");

function start() {
  btnEl[0].addEventListener("click", () => {
    return math1();
  });
  btnEl[1].addEventListener("click", () => {
    return riddle1();
  });
};

const math1 = function() {
  textEl.textContent = "You walk over the bridge to another rock. The bridge behind you disappears. Again, you see the troll in between two bridges. You may only choose which to cross once you have answered the troll's question. The troll looks at you and asks, what is 2 times 2? (Press key a, b, c, or d to answer)";
  btnContainer.style.display = "none";
  multipleChoice.style.display = "block";
  window.addEventListener("keydown", event => {
    if (event.key == "b") {
      return math1BridgeChoice();
    } else if (event.key != "b") {
      return death();
    }
  });
};

const math1BridgeChoice = function() {
  textEl.textContent = "Well, aren't you smart. Now, which path will you take?";
  btnContainer.style.display = "block";
  multipleChoice.style.display = "none";
  btnEl[0].addEventListener("click", () => {
    return death2();
  });
  btnEl[1].addEventListener("click", () => {
    return math2();
  });
};

const math2 = function() {
  textEl.textContent = "You walk over the bridge to another rock. The bridge behind you disappears. Again, you see the troll in between two bridges. You may only choose which to cross once you have answered the troll's question. The troll looks at you and asks, what is 6/2(1+2)? (Press key a, b, c, or d to answer)";
  btnContainer.style.display = "none";
  multipleChoice.style.display = "block";
  textInput.style.display = "none";
  listItem1.textContent = "a. 1";
  listItem2.textContent = "b. 6";
  listItem3.textContent = "c. 9";
  listItem4.textContent = "d. 12";
  window.addEventListener("keydown", event => {
    if (event.key == "c") {
      return math2BridgeChoice();
    } else if (event.key != "c") {
      return death();
    }
  });
};

const math2BridgeChoice = function() {
  textEl.textContent = "I thought for sure you would answer that one wrong! No matter, you won't get past the final question. Now which path will you take?";
  btnContainer.style.display = "block";
  multipleChoice.style.display = "none";
  btnEl[0].addEventListener("click", () => {
    return math3();
  });
  btnEl[1].addEventListener("click", () => {
    return death2();
  });
};

const math3 = function() {
  textEl.textContent = "You walk over the bridge to another rock. The bridge behind you disappears. Again, you see the troll in between two bridges. You may only choose which to cross once you have answered the troll's question. The troll looks at you and asks, If 1 = 4, 2 = 16, and 3 = 64, what does 4 equal? (Press key a, b, c, or d to answer)";
  btnContainer.style.display = "none";
  multipleChoice.style.display = "block";
  listItem1.textContent = "a. 256";
  listItem2.textContent = "b. 128";
  listItem3.textContent = "c. 96";
  listItem4.textContent = "d. 512";
  window.addEventListener("keydown", event => {
    if (event.key == "a") {
      return math3BridgeChoice();
    } else if (event.key != "a") {
      return death();
    }
  });
};

const math3BridgeChoice = function() {
  textEl.textContent = "Well done. You're smarter than you look. Now which path will you take? Choose the correct path and you may leave my realm.";
  btnContainer.style.display = "block";
  multipleChoice.style.display = "none";
  btnEl[0].addEventListener("click", () => {
    return death2();
  });
  btnEl[1].addEventListener("click", () => {
    return winner();
  });
};

const riddle1 = function() {
  textEl.textContent = "You walk over the bridge to another rock. The bridge behind you disappears. Again, you see the troll in between two bridges. You may only choose which to cross once you have answered the troll's question. The troll looks at you and asks, what is full of holes yet still holds water? (Use one word answers and lowercase letters only.)";
  btnContainer.style.display = "none";
  textInput.style.display = "block";
  answer.addEventListener("change", () => {
    if (answer.value == "sponge") {
      return riddle1BridgeChoice();
    } else if (answer.value != "sponge") {
      return death();
    }
  });
};

const riddle1BridgeChoice = function() {
  textEl.textContent = "Don't give yourself too much credit. That was an easy one. Now which path will you take?";
  btnContainer.style.display = "block";
  multipleChoice.style.display = "none";
  textInput.style.display = "none";
  btnEl[0].addEventListener("click", () => {
    return riddle2();
  });
  btnEl[1].addEventListener("click", () => {
    return death2();
  });
};

const riddle2 = function() {
  textEl.textContent = "You walk over the bridge to another rock. The bridge behind you disappears. Again, you see the troll in between two bridges. You may only choose which to cross once you have answered the troll's question. The troll looks at you and asks, I am tall when I am young, and I am short when I am old. What am I? (Use one word answers and lowercase letters only.)";
  btnContainer.style.display = "none";
  textInput.style.display = "none";
  textInput2.style.display = "block";
  multipleChoice.style.display = "none";
  answer2.addEventListener("change", () => {
    if (answer2.value == "candle") {
      return riddle2BridgeChoice();
    } else if (answer2.value != "candle") {
      return death();
    }
  });
};

const riddle2BridgeChoice = function() {
  textEl.textContent = "You will not get past my final riddle! Now which path will you take?";
  btnContainer.style.display = "block";
  multipleChoice.style.display = "none";
  textInput.style.display = "none";
  btnEl[0].addEventListener("click", () => {
    return death2();
  });
  btnEl[1].addEventListener("click", () => {
    return riddle3();
  });
};

const riddle3 = function() {
  textEl.textContent = "You walk over the bridge to another rock. The bridge behind you disappears. Again, you see the troll in between two bridges. You may only choose which to cross once you have answered the troll's question. The troll looks at you and asks, I float in the sky, I cover the land; I can carry your weight or slip through your hand. What am I? (Use one word answers and lowercase letters only.)";
  btnContainer.style.display = "none";
  textInput3.style.display = "block";
  multipleChoice.style.display = "none";
  answer3.addEventListener("change", () => {
    if (answer3.value == "water") {
      return riddle3BridgeChoice();
    } else if (answer3.value != "water") {
      return death();
    }
  });
};

const riddle3BridgeChoice = function() {
  textEl.textContent = "Very clever, you are. Now which path will you take? Choose the correct path and you may leave my realm.";
  btnContainer.style.display = "block";
  multipleChoice.style.display = "none";
  textInput.style.display = "none";
  btnEl[0].addEventListener("click", () => {
    return winner();
  });
  btnEl[1].addEventListener("click", () => {
    return death2();
  });
};

const death = function() {
  textEl.textContent = "The troll runs toward you, picks you up by the neck and tosses you off the rock. You have died.";
  btnContainer.style.display = "none";
  multipleChoice.style.display = "none";
  textInput.style.display = "none";
  textInput2.style.display = "none";
  textInput3.style.display = "none";
};

const death2 = function() {
  textEl.textContent = "As you walk across the bridge it begins to disappear and you fall. You have died.";
  btnContainer.style.display = "none";
  multipleChoice.style.display = "none";
  textInput.style.display = "none";
  textInput2.style.display = "none";
  textInput3.style.display = "none";
};

const winner = function() {
  textEl.textContent = "You walk over the bridge. Congratulations! You chose you correct bridge! You wake up in you bed and go back to your boring life. The end.";
  btnContainer.style.display = "none";
  multipleChoice.style.display = "none";
  textInput.style.display = "none";
  textInput2.style.display = "none";
  textInput3.style.display = "none";
};

start();
