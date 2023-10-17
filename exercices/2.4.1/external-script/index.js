const btn = document.querySelector("button");
const text = document.querySelector("span");
let counter = 0;

let timeoutId;
const delayInSeconds = 5;
const delayInMilliseconds = 1000*delayInSeconds;

btn.addEventListener("mouseover",(e) =>{
    timeoutId =  setTimeout(() => {
        text.innerText= "Game over, you did not click 10 times within 5s !";
        btn.style.display = "none";
    }, delayInMilliseconds);
})

btn.addEventListener("click",(e)=>{
    counter++;
    if(counter>=10){
        clearTimeout(timeoutId);
        text.innerText="You win ! You clicked 10 times within 10 sec" ;
        btn.style.display = "none";
    }
})