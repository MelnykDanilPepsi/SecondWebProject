const buttons = [...document.querySelectorAll('.choose__button')];
let activeButton = document.querySelector('.activeButton');
const [starterPrice, proPrice] = [document.querySelector('.starterPrice'), document.querySelector('.proPrice')];
const cards = [...document.querySelectorAll('.plan__card')],
cardsButtons = [...document.querySelectorAll('.card__button')];

for(let i = 0; i < buttons.length; i++){
    buttons[i].addEventListener('click',()=>{
        activeButton.classList.remove('activeButton');
        activeButton = buttons[i];
        buttons[i].classList.toggle('activeButton');
        changePrice(i);
    })
}

function changePrice(itemIndex){
    if(itemIndex === 0){
        starterPrice.innerHTML = 'FREE';
        proPrice.innerHTML = '$4.99';
        return;
    }
    starterPrice.innerHTML = '$9.99';
    proPrice.innerHTML = '$24.99';
}


window.addEventListener('resize',()=>{
    if(window.screen.width > 1180){
        cards[0].classList.remove('nonHover');
        cards[1].classList.remove('nonHover');
        cardsButtons[0].classList.remove('nonHover');
        cardsButtons[1].classList.remove('nonHover');
    }
    else if(window.screen.width  < 1180){
        cards[0].classList.add('nonHover');
        cards[1].classList.add('nonHover');
        cardsButtons[0].classList.add('nonHover');
        cardsButtons[1].classList.add('nonHover');
    }
});
