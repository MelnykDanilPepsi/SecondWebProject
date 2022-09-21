const screens = [...document.querySelectorAll('.screens__screen')];
const core = document.querySelector('.core');
const subtitle = document.querySelector('.titleBlock__subtitle');
let lastActiveScreenClass, lastActiveScreen,lastActiveIndex = -1;
const lastActivePhoneClass = 'active__telephone';



window.addEventListener('resize',()=>{

   if(window.screen.width > 1400){
        if(lastActiveIndex !== -1 ){
            screens[lastActiveIndex].classList.remove(lastActivePhoneClass);
        }
        lastActiveIndex = -1;
        coreMoveDown();
    
    return;
   }
    if(lastActiveScreen){
        lastActiveScreen.classList.remove(lastActiveScreenClass);
    }
    coreMoveUp();
   
});
window.addEventListener('load', ()=>{
    if(window.screen.width < 1400){
        coreMoveUp();
    }
})


for(let i = 0; i < screens.length; i++) {

    screens[i].addEventListener('click',()=>{

        if(window.screen.width < 1400){
            if(lastActiveIndex === 3){
                screens[lastActiveIndex].classList.remove(lastActivePhoneClass);
                lastActiveIndex = -1;
                return;
            }
            screens[lastActiveIndex].classList.remove(lastActivePhoneClass);
            lastActiveIndex++;
            screens[lastActiveIndex].classList.add(lastActivePhoneClass);
            return;
        }
    
        if(screens[i].classList.contains(lastActiveScreenClass)){
            screens[i].classList.remove(lastActiveScreenClass);
            return;
        }

        if(lastActiveScreen !== undefined){
            lastActiveScreen.classList.remove(lastActiveScreenClass);
        }
        lastActiveScreen = screens[i];
        lastActiveScreenClass = 'active__screen_' + (i + 1);
        console.log(lastActiveScreenClass);
        screens[i].classList.add(lastActiveScreenClass);
    });
}

core.addEventListener('click',()=>{
    if(window.screen.width < 1400){
        if(lastActiveIndex === undefined || lastActiveIndex === -1){
            lastActiveIndex = 0;
            screens[0].classList.add(lastActivePhoneClass);
        }
        
    }
})

function coreMoveUp(){
    CutAndPast(core,subtitle,'after');
}
function coreMoveDown(){
    CutAndPast(core,screens[1],'after');
}
function removeActiveWrapper(element){
    element.parentNode.parentNode.removeChild(element.parentNode);

}

