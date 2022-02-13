const bgColor = document.querySelector(".title");
const form  = document.getElementById("form");

const favouriteColor = function (event) {
  event.preventDefault();
  
  const color = form.color.value;

  if (color == "select"){
    event.preventDefault();
    return;
  }

  if (color === "red") {
    bgColor.style.backgroundColor = "red";
    console.log("red is your favourite color");
  } 
  else if (color === "orange") {
    bgColor.style.backgroundColor = "orange";
    console.log("orange is your favourite color");
  } 
  else if (color === "yellow") {
    bgColor.style.backgroundColor = "yellow";
    console.log("yellow is your favourite color");
  } 
  else if (color === "purple") {
    bgColor.style.backgroundColor = "purple";
    console.log("purple is your favourite color");
  } 
  else if (color === "cyan") {
    bgColor.style.backgroundColor = "cyan";
    console.log("cyan is your favourite color");
  } 
  
  form.output.value = `Favourite color is ${color}`;
}
  
  
  form.addEventListener("submit", favouriteColor);







