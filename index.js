const clickBtn = document.querySelector(".btn");
const output = document.querySelector(".styles");
const spanText= document.querySelector(".displayText");



output.style.background="#F1f5f8";

 clickBtn.addEventListener("click",(event)=>{
    let maxval = 0xFFFFFF;
    let randomNumber = Math.random() * maxval;
    randomNumber = Math.floor(randomNumber);
    randomNumber =randomNumber.toString(16);
    // console.log(randomNumber);
    let ranColor = randomNumber.padStart(6,0);
    let result= `#${ranColor.toUpperCase()}`;
    output.style.background=result;
    spanText.innerText=result;

})
console.log(hex);


