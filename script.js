// Example 1

let ex1 = document.getElementById("btn");
let exp1 = document.getElementById("p1");
ex1.addEventListener("click", function () {
  exp1.innerText = `Hola you changed me!!`;
});

// Example 2

document.getElementById("btn2").addEventListener("click", function () {
  let firstCity = document.getElementById("Citylist");
  firstCity.firstElementChild.classList.add("highlight");
});

// Example 3
document.getElementById("changeOrder").addEventListener("click", function () {
  let coffeetype = document.getElementById("coffeetype");
  coffeetype.textContent = `Espresso`;
  coffeetype.style.backgroundColor = "red";
  coffeetype.style.padding = "5px";
});

// Example 4

document.getElementById("addItem").addEventListener("click", function () {
  let createdItem = document.createElement("li");
  createdItem.textContent = "Chawal";

  document.getElementById("list").appendChild(createdItem);
});

// Example 5
document.getElementById("RemoveItem").addEventListener("click", function () {
  let tasklist = document.getElementById("tasklist");
  tasklist.lastElementChild.remove();
});

// Example 6

document.getElementById("clickme").addEventListener("click", function () {
  alert("Hey I was triggered!");
});

// Example 7

document.getElementById("tealist").addEventListener("click", function (event) {
  if (event.target && event.target.matches(".teaItem")) {
    alert(`You selected: ${event.target.textContent}`);
  }
});



// Example 8

document.getElementById("feedbackform").addEventListener("submit", function(event){
  event.preventDefault();
  let inputValue = document.getElementById("feedback").value;
  let para = document.getElementById("displayFeedback");
  para.classList.add("paragraph")
  para.textContent = `Your feedback: ${inputValue}`
})

// Example 9

document.addEventListener("DOMContentLoaded", function(){
  document.getElementById("domStatus").textContent = "Dom fully loaded"
})


// Example 10

document.getElementById("toggleHighlight").addEventListener("click", function(){
  document.getElementById("descriptionText").classList.toggle("highlight")
})