
new Swiper ('.swiper',{
    navigation:{
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
    pagination:{
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true,
        //эффект замены размера
        
        renderBullet: function(index,className){
            return '<span class="' + className + '">' + (index + 1) + '</span>';
        },
        //вывод нужного значения на буллет

        //fraction - show 1/n
        // renderFraction: function(currentClass,totalClass){
        //     return 'Слой' + '<span class="' + currentClass + '"></span>' + 
        //     'из' +
        //     '<span class="' + totalClass + '"></span>';
        // }
        

        //progressBar
        //работает как линия загрузки
    },

    //dir = "rtl" // меняет местами все, для стран которые пишут справа на лево

    //активный слайд по центру
    // centeredSlides: true,

    //scrolbar;
    // scrollbar: {
    //     el: '.swiper-scrollbar',
    //     draggable: true,
    // },

    //стартвой слайд
    initialSlide: 1,
    
    //скорость
    speed: 700,

    //Freemod // свободный режим

    // direction // переключает вертикаль или горизонталь

    //бессконечная прокрутка !!!!!!!!!!!! важно
    loop: true,


    //sliderperColumn // многорядность

    //ператаскивание на пк
    simulateTouch: false,

    //touchRatio - чувстивтельность перетаскивания
    //touchAngle - отвечает за угл ператаскивания
    //touchCursor - меняет курсор
    
    //slideToClickedSlide: false, переход най слайд по клику

    //hashNavigation - добавляет каждому слайду произвольный хэш
    // необходимо добаить свойство  data-hash

    
    keyboard:{
        enabled:true,
        //В пределах вьюпорта
        onlyinViewPort: true,
        //pageUpPageDown
        pageUpDown: true,
    },
    mousewheel: {
        //чувствительность
        sensitivity:1,
        //класс на котором
        //будет отрабатывать прокрутка мыши
        eventsTarget: '.slider',
    },


    //высота слайдера будет подстраиваться под высоту всего контейнера
    autoHeight:false,

    //кол-во слайдов для показа
    // slidesPerView: 1,

    //spaceBetween - отступы между слайдерами

    // slidesPerGroup: 3, страницы за раз прокручиваются

    //название за себя говорит
    autoplay: {
        delay: 2000,
        //заддержка
        disableOnInteraction: true,
        //при клике отменять автопрокрутку
      },

      //breakpoints:{} - отрабатывает при ширине окна

      //lasyload - помогает быстрее прогружать страницу путем отгрузки контента
    //   lazy:{

    //   }
      // необходимо добавть класс swiper-lazy

      ////эффекты
    //   effect: 'fade', через прозрачность
    // effect: 'flip', переворачивает
    // effect: 'cube',

    //разрашает увеличивать изоображение при клике
    // zoom:{maxRatio:5,minRatio:1},
    // swiper-zoom-container класс 
    //thumbs - галлерея 
    // 37min

      ////////////////

    //несколько одинаковых слайдов
    // просто дублирование хтмл (они независимы друг от друга)

    //слайдер внтури слайдер
    //nasted - true спасает
}); 