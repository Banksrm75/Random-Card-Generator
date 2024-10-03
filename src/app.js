/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  // array for suits
  let suitArray = ["♥", "♠", "♣", "♦"];

  // array for value
  let valueArray = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];

  function generateCard() {
    // function for select random Index
    function select_index(array) {
      let index = Math.floor(Math.random() * array.length);
      return index;
    }

    // function to assign value
    function assign_value(array) {
      let randomIndex = select_index(array);
      let value = array[randomIndex];

      return value;
    }

    // function to assign suit
    function assign_suit(array) {
      let randomIndex = select_index(array);
      let suit = array[randomIndex];

      return suit;
    }

    // Assign card face first time
    let suit = assign_suit(suitArray);
    let value = assign_value(valueArray);

    let top_suitDivDOMElement = document.querySelector(".top_suit");
    let valueDivDOMElement = document.querySelector(".value");
    let bottom_suitDivDOMElement = document.querySelector(".bottom_suit");

    if (suit === "♥" || suit === "♦") {
      top_suitDivDOMElement.style.color = "red";
      bottom_suitDivDOMElement.style.color = "red";
    }
    if (suit === "♠" || suit === "♣") {
      top_suitDivDOMElement.style.color = "black";
      bottom_suitDivDOMElement.style.color = "black";
    }

    top_suitDivDOMElement.innerHTML = suit;
    valueDivDOMElement.innerHTML = value;
    bottom_suitDivDOMElement.innerHTML = suit;
  }
  document.querySelector(".btn").onclick = function() {
    generateCard();
  };
};
