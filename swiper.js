
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 1,
        spaceBetween: 30,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true
        },
        // mousewheel: true,
        keyboard: true,
        breakpoints:{
             600:{
                slidesPerView: 2,
            }
        },
        loop:true
    });
