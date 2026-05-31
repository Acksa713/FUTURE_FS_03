window.onload = function(){

alert(
"Welcome to Moon Cafe ☕"
);

};

const darkModeBtn =
document.getElementById("darkModeBtn");

darkModeBtn.addEventListener(
"click",
function(){

document.body.classList.toggle(
"dark-mode"
);

}
);

const form =
document.getElementById("contactForm");

form.addEventListener(
"submit",
function(event){

event.preventDefault();

alert(
"Thank you! Your message has been sent."
);

form.reset();

}
);