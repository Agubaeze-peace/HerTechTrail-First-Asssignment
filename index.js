const change = document.getElementById("image1");
change.addEventListener("click", (event) =>{
    event.target.style.background = "green";
    event.target.style.color = "black";
});

const blooms = document.getElementById("image2");
blooms.addEventListener("click", (event) =>{
    event.target.style.background = "black";
    event.target.style.color = "yellow";
});

const roses = document.getElementById("image3");
roses.addEventListener("click", (event)=>{
    event.target.style.background = "blue";
    event.target.style.color = "white";
});
const fall = document.getElementById("image4");
fall.addEventListener("click" , (event)=>{
    event.target.style.background = "orange";
    event.target.style.color = "brown";
});

const laptop = document.getElementById("image5");
laptop.addEventListener("click",(event)=>{
  event.target.style.background = "gray";
  event.target.style.color = "yellow"
});
const birch = document.getElementById("image6");
birch.addEventListener("click", (event)=>{
    event.target.style.background="bisque";
    event.target.style.color = "green";
});