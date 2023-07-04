"use strict";

//# Arrow_functions

//# Level 1_2

const sayHallo = ()=> "Hello World";

console.log(sayHallo());

const add = (numb1, numb2) => numb1 + numb2;

const x = 2;
const y = 3;

console.log(add(x, y));

const multiply = (numb1, numb2) => numb1 * numb2;

// window.alert(multiply(x,y));

const typeOfValue = (value) => typeof value; 

const i=true; 
const j="hi"; 
const k=1; 
const l={name: "John"}; 
const a=[0,1];

console.log(typeOfValue(i));
console.log(typeOfValue(j));
console.log(typeOfValue(k));
console.log(typeOfValue(l));
console.log(typeOfValue(a));

//# Level 1_4

const hero = (heroName, heroPower, heroEnemy) =>{
  const name = `Mein:e Lieblingsheld:in ist: ${heroName} `;
  const power = `Er/sie hat die Fähigkeit: ${heroPower} `;
  const enemy = `Sein/ihr größter Gegner ist: ${heroEnemy}`;
  return name + power + enemy;
}

console.log(hero("Batman", "Money", "The Joker"));

//# Level 1_6

const returnOne = () => 1;

const x2 = 1;
const y2 = returnOne();

if(x2 === y2){
  console.log("Wird das gedruckt?");
}

//# 1_7

const double = (param1) => param1 *2;

console.log(double(5));

//# 1_8

const yourAge = yearBorn => 2023 - yearBorn;

console.log(yourAge(1999));

const ageDifference = (age1, age2) => {
  let result = age1 - age2;
  if(result<0){
    result = result * -1;
  }
  return result;
}

console.log(ageDifference(25, 20));
console.log(ageDifference(20, 25));

//# 1_9

const introduction = (vorname, nachname, geburtsort, alter, wohnort) => {
  const output = 
  `Mein Name ist ${vorname} ${nachname}.
Ich bin in ${geburtsort} geboren.
Ich lerne coden bei Helmut und Elfriede.
Ich bin ${alter} Jahre alt.
Ich wohne in ${wohnort}.`;
  console.log(output);
}

introduction("Felix", "Siegert", "Halberstadt", "24", "Magdeburg");

//# 2_1

const form = document.querySelector(".message_form");
const input = document.querySelector("#input_message");
const outputBox = document.querySelector(".message_output");
const errorBox = document.querySelector(".error_message");

form.addEventListener("submit", (event) =>{
  event.preventDefault();
  const inputValue = input.value.trim();
  if (inputValue.length > 0){
outputBox.textContent = inputValue;
errorBox.textContent = "";
  } else {
    errorBox.textContent = "Gib eine Nachricht ein!";
  }
});

//# 3_2

const disconnectForm = document.querySelector(".disconnect_form");
const input1 = document.querySelector("#first_input");
const input2 = document.querySelector("#second_input");
const outputContainer = document.querySelector(".output_div");

disconnectForm.addEventListener("submit", event =>{
  event.preventDefault();

  const inputValue1 = input1.value;
  const inputValue2 = input2.value;
  const radioBefore = document.querySelector("#before");
  const radioAfter = document.querySelector("#after");
  let output1;
  let output2;

  if(radioBefore.checked){
    output1 = inputValue1.slice(0, inputValue1.indexOf(inputValue2));
    output2 = inputValue1.slice(inputValue1.indexOf(inputValue2));
  } else if(radioAfter.checked){
    output1 = inputValue1.slice(0, inputValue1.indexOf(inputValue2) + inputValue2.length);
    output2 = inputValue1.slice(inputValue1.indexOf(inputValue2) + inputValue2.length);
  }

outputContainer.innerHTML = `<p>${output1}</p><p>${output2}</p>`;

})