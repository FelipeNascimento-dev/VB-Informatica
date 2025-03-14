$(document).ready(function() {
    $('#mobile_btn').on('click', function() {
        $('#mobile_menu').toggleClass('active');
        $('#mobile_btn').find('i').toggleClass('fa-x');
    });

    let currentPage = window.location.pathname.split('/').pop(); 

    if (currentPage === "") {
        currentPage = "index.html";
    }

    $('.nav-item').removeClass('active');

    $('.nav-item a').each(function() {
        let linkHref = $(this).attr('href');

        if (linkHref.includes(currentPage) && !linkHref.includes("#")) {
            $(this).parent().addClass('active');
        }
    });

    if (currentPage === "index.html") {
        $(window).on('scroll', function () {
            let activeSectionIndex = 0;
            const scrollPosition = $(window).scrollTop();

            $('section').each(function (i) {
                const sectionTop = $(this).offset().top - 200;
                const sectionBottom = sectionTop + $(this).outerHeight();

                if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                    activeSectionIndex = i;
                    return false;
                }
            });

            $('.nav-item').removeClass('active');
            $($('.nav-item')[activeSectionIndex]).addClass('active');
        });
    }
    

    ScrollReveal().reveal('#cta',{
        origin: 'left',
        duration: 2000,
        distance:'20%'
    })

    ScrollReveal().reveal('.service',{
        origin: 'left',
        duration: 2000,
        distance:'20%'
    })

    ScrollReveal().reveal('.about-description',{
        origin: 'right',
        duration: 2000,
        distance:'20%'
    })

    ScrollReveal().reveal('.about-image',{
        origin: 'left',
        duration: 2000,
        distance:'20%'
    })

});