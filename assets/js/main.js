"use script";

////////////////////////////////
// user nav
const userProfileBtn = document.querySelector(".user-mobile");
const userProfilClose = document.querySelector(".user-mobile--close");
const userProfileLinks = document.querySelectorAll(".user-mobile--links");

let x = window.matchMedia("(max-width: 700px)")

if (x.matches) {

    if (userProfileBtn) {
        userProfileBtn.addEventListener("click", () => {
            userProfileLinks.forEach(el => {
                el.classList.toggle("d-none")
            }

            )
            userProfileBtn.classList.toggle("d-none")
        })

        userProfilClose.addEventListener("click", () => {
            userProfileLinks.forEach(el => {
                el.classList.toggle("d-none")
            }

            )
            userProfileBtn.classList.toggle("d-none")
        })
    }
}


//////////////////////////
///BANNER SWIPER



$('.header-carousel').owlCarousel({
    loop: true,
    margin: 10,
    dots: false,
    nav: true,
    mouseDrag: false,
    autoplay: true,
    animateOut: 'fadeOut',
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        }
    }
});

$('.courses-carousel').owlCarousel({
    loop: true,
    margin: 10,
    dots: false,
    nav: false,
    mouseDrag: true,
    autoplay: true,
    animateOut: 'fadeOut',
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1000: {
            items: 3
        }
    }
});


//////////////////////////////////////////
// youtube

$('.popup-youtube ').magnificPopup({
    type: 'iframe',
    disableOn: function () { // don't use a popup for mobile
        if ($(window).width() < 600) {
            return false;
        }
        return true;
    },

    iframe: {
        markup: '<div class="mfp-iframe-scaler">' +
            '<div class="mfp-close"></div>' +
            '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>' +
            '</div>',
        patterns: {
            youtube: {
                index: 'youtube.com/',

                id: 'v=',

                src: '//www.youtube.com/embed/%id%?autoplay=1'
            }
        },

        srcAction: 'iframe_src',
    }


});




// //////////////////
//GALLERY
$('.single-gallery-item .popup-btn').magnificPopup({
    type: 'image',
    gallery: {
        enabled: false
    }
})

/////////////////////////////////////////
// mobile - menu


// ------------mobile-menu----//
const openBtn = document.querySelector("#hamburger-1")
const closeBtn = document.querySelector("#hamburger-2")
const nav_list = document.querySelector(".navigation__list")
const overlay = document.querySelector(".overlay")
const navContact = document.querySelector(".nav-contact")
overlay.classList.add("hidden")

function mobileMenu() {
    openBtn.classList.add("active");
    nav_list.classList.add("active")
    overlay.classList.remove("hidden")
}
function mobileMenuClose() {
    openBtn.classList.remove("active");
    nav_list.classList.remove("active")
    overlay.classList.add("hidden")
}


openBtn.addEventListener("click", mobileMenu)
closeBtn.addEventListener("click", mobileMenuClose)
overlay.addEventListener("click", mobileMenuClose)
// -----xx-------mobile-menu--xx--//

$(window).on('scroll', function () {
    if ($(window).scrollTop()) {
        $('#navbar').addClass('sticky')
    } else {
        $('#navbar').removeClass('sticky')

    }

})


/////////////////////////////////////////////
/////// COUNTER

var counted = 0;
$(window).scroll(function () {

    var oTop = $('#counter').offset().top - window.innerHeight;
    if (counted == 0 && $(window).scrollTop() > oTop) {
        $('.count').each(function () {
            var $this = $(this),
                countTo = $this.attr('data-count');
            $({
                countNum: $this.text()
            }).animate({
                countNum: countTo
            },

                {

                    duration: 2000,
                    easing: 'swing',
                    step: function () {
                        $this.text(Math.floor(this.countNum));
                    },
                    complete: function () {
                        $this.text(this.countNum);
                        //alert('finished');
                    }

                });
        });
        counted = 1;
    }

});

//////////////////////////////////////////
// Read More Btn
function toggleReadMore(key) {
    let dots = $('#paragraphDots' + key);
    let moreText = $('#paragraphMore' + key);
    let btnText = $('#paragraphBtn' + key);

    if (dots.css('display') === 'none') {
        dots.css('display', 'inline');
        btnText.html('Read more');
        moreText.css('display', 'none');
    } else {
        dots.css('display', 'none');
        btnText.html('Read less');
        moreText.css('display', 'inline');
    }
}


$('input').focus(function () {
    $(this).parent().addClass('active');
    $('input').focusout(function () {
        if ($(this).val() == '') {
            $(this).parent().removeClass('active');
        } else {
            $(this).parent().addClass('active');
        }
    })
});

/////////////////////////////////////
/// payemnt 

const paymentInput = document.querySelectorAll(".checkout__payment-head input")
const paymentLabel = document.querySelectorAll(".checkout__payment-head")

// paymentInput.forEach(el => {
//     el.addEventListener("click", (e) => {
//         e.preventDefault()
//     })
// })

paymentLabel.forEach(el => {
    el.addEventListener("click", (e) => {
        const label = e.target.closest(".checkout__payment-head")
        paymentInput.forEach(el => {
            el.checked = false
            if (label.getAttribute("for") == el.getAttribute("id")) {
                el.checked = true
            }
        })

    })
})