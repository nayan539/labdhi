
document.addEventListener("DOMContentLoaded", function () {
  const openBtn = document.querySelector(".navbar-toggle.open-btn");
  const navMenu = document.querySelector(".navigation-holder");
  const closeBtn = document.querySelector(".close-navbar");

  if (openBtn && navMenu && closeBtn) {
    openBtn.addEventListener("click", function (e) {
      e.preventDefault();
      navMenu.classList.add("active");
    });

    closeBtn.addEventListener("click", function (e) {
      e.preventDefault();
      navMenu.classList.remove("active");
    });
  }

  const mobileBreakpoint = 991;
  if (window.innerWidth <= mobileBreakpoint) {
    const dropdownAnchors = document.querySelectorAll(
      ".navigation-holder li.menu-item-has-children > a"
    );

    dropdownAnchors.forEach(function (anchor) {
      anchor.addEventListener("click", function (e) {
        const parentLi = this.parentElement;
        const submenu = parentLi.querySelector(".sub-menu");

        if (submenu) {
          e.preventDefault();

          // Close other open submenus (same level)
          const siblingLis = Array.from(parentLi.parentElement.children);
          siblingLis.forEach(function (sibling) {
            if (sibling !== parentLi) {
              sibling.classList.remove("open");
            }
          });

          // Toggle current submenu
          parentLi.classList.toggle("open");
        }
      });
    });
  }
});



  // swiper
   var swiper = new Swiper('.hero-slider', {
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  // comapnies
 jQuery(document).ready(function () {
      $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 20,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        nav: true,
        dots: true,
        responsive: {
          0: {
            items: 1,
          },
          576: {
            items: 2,
          },
          992: {
            items: 3,
          },
        },
      });
    });