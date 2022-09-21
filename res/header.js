const headerLists = document.querySelectorAll('.header__list');
const burgerMenu = document.querySelector('.burger__menu');
const body = document.querySelector('body');
const headerMenu = document.querySelectorAll('.header__menu');

burgerMenu.addEventListener('click', ()=>{
    burgerMenu.classList.toggle('activeted');
    headerMenu[0].classList.toggle('activeted');
    headerMenu[1].classList.toggle('none');
    body.classList.toggle('lock')
    if(headerMenu[0].classList.contains('activeted')){
        CutAndPast(headerLists[1],headerLists[0],'after');
        return;
    } 
    CutAndPast(headerLists[1],headerMenu[1],'append');
})

window.addEventListener('resize', ()=>{
    if(window.screen.width >= 993){
        CutAndPast(headerLists[1],headerMenu[1],'append');
        burgerMenu.classList.remove('activeted');
        headerMenu[0].classList.remove('activeted');
        headerMenu[1].classList.remove('none');
        body.classList.remove('lock')
    }
})

function CutAndPast(element,to,method){
    if(method === 'after'){
        to.after(element);
        return;
    }
    to.append(element);
}