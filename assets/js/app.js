const cl = console.log;

$('#tmSlider').owlCarousel({
    loop : true,
        nav : true,
        navText : ['<i class="fa-solid fa-arrow-left"></i>','<i class="fa-solid fa-arrow-right"></i>'],
        autoplay : true,
        margin : 10,
        responsive : {
        0 : {
            item : 1,
            dot : false
        },
        600 : {
            item : 3
        },
        
        1100 : {
                items : 5,
                margin : 20
        }
    }
});