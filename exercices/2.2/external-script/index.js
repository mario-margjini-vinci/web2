let counterWrapper = document.querySelector('.counter');
let message = document.querySelector('.message');
let counter = 0

window.addEventListener('click',()=>{
    counter++;
    counterWrapper.textContent= counter;
    if(counter===5)message.textContent= 'Bravo, bel echauffement';
    else if(counter===10)message.textContent='vous êtes le maitres des clicks';
});

