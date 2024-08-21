var swiper = new Swiper(".mySwiper-1", {
    slidersPreView:1,
    spaceBettwen: 30,
    loop: true,
    pagination:{
        el:".swiper-pagination",
        clickable: true,
    },
    navigation:{
        nextEl:".swiper-button-next",
        prevEl:".swiper-button-prev",
    }
});

var swiper = new Swiper(".mySwiper-2",{
    slidersPreView:3,
    spaceBettwen: 20,
    loop:true,
    loopFillGroupWitBlank: true,
    navigation:{
        nextEl:".swiper-button-next",
        prevEl:".swiper-button-prev",
    },
    breakpoints :{
        0: {
            slidesPreView:1,
        },
        520: {
            slidersPreView:2,
        },
        950:{
            slidersPreView:3,
        }
    }
    });

    let tabInputs = document.querySelectorAll(".tabInput");

    tabInputs.forEach(function(input){

        input.addEventListener('change', function(){
            let id = input.ariaValueMax;
            let thisSwiper = document.getElementById('swiper' + id);
            thisSwiper.swiper.update();
        })
    });
