


// $(document).ready(function () {
//     $('.owl-carousel').owlCarousel({
//         stagePadding: 120,
//         loop: true,
//         margin: 30,
//         nav: true,
//         dots: false,
//         responsive: {
//             576: {
//                 items: 2
//             },
//             768: {
//                 items: 3
//             },
//             1200: {
//                 items: 3
//             }
//         }
//     })

// });


var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        576: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 40,
        },
        1920: {
            slidesPerView: 3,
            spaceBetween: 62,
        },
    },
});