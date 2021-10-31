
$(function () {
    // -----Init AOS-------------
    function aos_init() {
        AOS.init({
            duration: 1000,
            easing: "ease-in-out",
            once: true
        });
    }

    $(document).ready(function () {
        aos_init();
    });


    // Activate smooth scroll on page load with hash links in the url
    $(document).ready(function () {
        if (window.location.hash) {
            var initial_nav = window.location.hash;
            if ($(initial_nav).length) {
                var scrollto = $(initial_nav).offset().top - scrolltoOffset;
                $('html, body').animate({
                    scrollTop: scrollto
                }, 1500, 'easeInOutExpo');
            }
        }
    });

    // ---- drop Down Menu -------
    $('.dropdown').mouseover(function () {
        if ($(window).width() > 990) {
            $(this).children(".dropdown-menu").addClass('dropdown-active');
        }
    });

    $('.dropdown').mouseout(function () {
        if ($(window).width() > 990) {
            $(this).children('.dropdown-menu').removeClass('dropdown-active');
        }
    });

    // ----- Deep DropDown -------------
    $('.deepdropdown').mouseover(function () {
        if ($(window).width() > 990) {
            $('.deepdropdown-menu').addClass('deepdropdown-active');
        }
    });

    $('.deepdropdown').mouseout(function () {
        if ($(window).width() > 990) {
            $('.deepdropdown-menu').removeClass('deepdropdown-active');
        }
    });


    // ------- this code for mobile menu ----------------
    $('.dropdown').click(function (e) {
        e.preventDefault();
        if ($(window).width() < 990) {
            if (!$('.dropdown-menu').hasClass('dropdown-active')) {
                $(this).children(".dropdown-menu").addClass('dropdown-active');
            } else {
                // $(this).children(".dropdown-menu").removeClass('dropdown-active');
            }
        }
    });

    $('.dddown').click(function (e) {
        e.preventDefault();

        if (!$(".dddown-menu").hasClass("deepdropdown-active")) {
            $(this).children('.deepdroupdown-menu').addClass('deepdropdown-active');
        } else {
            $(this).children('.deepdroupdown-menu').removeClass('deepdropdown-active');
        }
    });



    // ------ mobile menu button ---------
    $('#mobile-menu').click(function (e) {
        e.preventDefault();
        $(this).toggleClass('is-active');
        $('.nav-menu').toggleClass('active');
    });

    $('.navlink').click(function (e) {
        if (!$(this).parent().hasClass('dropdown')) {
            closeMobileMenu();
        }
        e.preventDefault();
    });

    // --------- this funcation for close mobile menu --------------
    function closeMobileMenu() {
        $('#mobile-menu').removeClass('is-active');
        $('.nav-menu').removeClass('active');
        $('.dropdown-menu').removeClass('dropdown-active');
        // $('.deepdropdown-menu').removeClass('deepdropdown-active');
    }




    // ------- price ------------
    $('.price-container').mouseover(function () {
        $('.box', this).removeClass('default-plan');
    });

    $('.pricing').mouseout(function () {
        $('.default').addClass('default-plan');
    });



    // ------- Stick menubar on top ------------ 
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('#header').addClass('header-scrolled');
            $('#topbar').addClass('top-scrolled');
        } else {
            $('#header').removeClass('header-scrolled');
            $('#topbar').removeClass('top-scrolled');
        }
    });

    if ($(window).scrollTop() > 100) {
        $('#header').addClass('header-scrolled');
        $('#topbar').addClass('top-scrolled');
    }
    // ------- Close Stick menubar on top ------------ 


    // ------ Navigation active state on scroll -------------
    var nav_sections = $('section');
    var main_nav = $('.nav-menu');

    $(window).on('scroll', function () {
        var current_pos = $(this).scrollTop();

        nav_sections.each(function () {
            var top = $(this).offset().top,
                bottom = top + $(this).outerHeight() - 40;

            console.log("Current Position: " + current_pos);

            if (current_pos >= top && current_pos <= bottom) {
                if (current_pos <= bottom) {
                    main_nav.find("li").removeClass('active');
                }
                main_nav.find('a[href="#' + $(this).attr('id') + '"]').parent('li').addClass('active');
            }
            if (current_pos == 40) {
                $('html, body').scrollTop(0);
                $(".nav-menu li:first").addClass('active');
            }

        })
    });


    // -------- Clients-slider ------------------
    $(document).ready(function () {
        const mediaQuery = window.matchMedia("(max-width: 990px)");
        if (mediaQuery.matches) {
            var swiper = new Swiper('.clients-slider', {
                slidesPerView: 3,
                spaceBetween: 20,
                freeMode: true,
                pagination: {
                    el: ".swiper-pagination",
                    clickable: true,
                },
            });
        }
        else {
            var swiper = new Swiper('.clients-slider', {
                slidesPerView: 5,
                spaceBetween: 30,
                freeMode: true,
                pagination: {
                    el: ".swiper-pagination",
                    clickable: true,
                },
            });
        }
    });   // ----- close clients-slider


    // back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });

    $(".back-to-top").click(function () {
        // alert("back to top");
        $('html, body').animate({
            scrollTop: 0
        }, 1500, 'easeInOutExpo');
    });
});