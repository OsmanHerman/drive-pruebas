var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 80,
    pagination: {
      clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

const mediaQuery_1 = window.matchMedia('(max-width: 1150px)');
const mediaQuery_2 = window.matchMedia('(max-width: 900px)');

function handleMaxWidthChange1(mediaQuery) {
  if (mediaQuery.matches) {
    swiper.params.spaceBetween = 20;
    swiper.update(); //Actualiza el swiper
  } else {
    swiper.params.spaceBetween = 80;
    swiper.update(); //Actualiza el swiper
  }
}

function handleMaxWidthChange2(mediaQuery) {
  if (mediaQuery.matches) {
    swiper.destroy();
    swiper = new Swiper(".mySwiper", {
      spaceBetween: 20,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
    
  } else {
    swiper = new Swiper(".mySwiper", {
      slidesPerView: 3,
      spaceBetween: 20,
      pagination: {
        clickable: true,
      },
      navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
      },
    });
  }
}

handleMaxWidthChange1(mediaQuery_1);
handleMaxWidthChange2(mediaQuery_2);
mediaQuery_1.addListener(handleMaxWidthChange1); //Detecta cambios en el estado de la condición


mediaQuery_2.addListener(handleMaxWidthChange2);