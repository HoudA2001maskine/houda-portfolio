
const typing = document.querySelector(".typing");

const texts = [
"Full Stack Developer",
"Frontend Developer",
"UI/UX Designer"
];

let index = 0;
let charIndex = 0;

function typeEffect(){

if(charIndex < texts[index].length){

typing.textContent += texts[index].charAt(charIndex);

charIndex++;

setTimeout(typeEffect,100);

}else{

setTimeout(eraseEffect,1500);

}

}

function eraseEffect(){

if(charIndex > 0){

typing.textContent =
texts[index].substring(0,charIndex-1);

charIndex--;

setTimeout(eraseEffect,50);

}else{

index++;

if(index >= texts.length){
index = 0;
}

setTimeout(typeEffect,300);

}

}

typeEffect();
