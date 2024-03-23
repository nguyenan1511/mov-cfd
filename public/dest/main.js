$(document).ready(function () {

    // BUTTON MENU CLICKED
    function handleMenuMobile() {
        let btnMenu = document.querySelector(".btnmenu"),
            menuMobile = document.querySelector(".menumobile");

        btnMenu.addEventListener('click', function () { 
            btnMenu.classList.toggle("--close")
            menuMobile.classList.toggle("--active")
            if (document.querySelector('.coursedetailpage') != null) { 
                let header = document.querySelector('.header'),
                heightHeader = header.offsetHeight
                if (window.scrollY < heightHeader) { 
                    header.classList.toggle('--white')
                } else {
                    header.classList.remove('--white')
                }
            }
        })
        window.addEventListener('resize', function () {
            if (window.innerWidth > 1100) {
                btnMenu.classList.remove("--close")
                menuMobile.classList.remove("--active")
            }
        })
    }
    handleMenuMobile();


    // CHANGE BACKGROUND HEADER SCROLLING.
    function changeBgHeader() { 
        let courseDetailPage = document.querySelector('.coursedetailpage')
        if (courseDetailPage != null) { 
            let header = document.querySelector('.header'),
                heightHeader = header.offsetHeight
            window.addEventListener('scroll', function () {
                if (window.scrollY > heightHeader) { 
                    header.classList.remove('--white')
                } else {
                    header.classList.add('--white')
                }
            })
        }
    }

    changeBgHeader()

    // ACCORDIONS
    $(".accordion-button").click(function () {
        let label = $(this);
        let parent = label.parent(".accordion-item");
        let list = label.siblings(".accordion-content");

        if (parent.hasClass("is-open")) {
            list.slideUp(200);
            parent.removeClass("is-open");
        } else {
        list.slideDown(200);
            parent.addClass("is-open");
        }
    });

    // BACK TO TOP
    function clickBackToTop() { 
        let btnBackToTop = document.querySelector('.footer__backtotop')
        btnBackToTop.addEventListener('click', function () { 
            window.scrollTo({
                'top': 0,
                'behavior' : 'smooth'
            })
        })
    }
    clickBackToTop()
});
