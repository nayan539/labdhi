const openBtn = document.getElementById('openSidebarBtn');
  const closeBtn = document.getElementById('sidebarCloseBtn');
  const sidebar = document.getElementById('sidebarMenu');

  openBtn.addEventListener('click', () => {
    sidebar.classList.add('active');
    sidebar.setAttribute('aria-hidden', 'false');
  });

  closeBtn.addEventListener('click', () => {
    sidebar.classList.remove('active');
    sidebar.setAttribute('aria-hidden', 'true');
  });

  // Optional: close sidebar if user clicks outside it
  window.addEventListener('click', (e) => {
    if (sidebar.classList.contains('active') && !sidebar.contains(e.target) && e.target !== openBtn) {
      sidebar.classList.remove('active');
      sidebar.setAttribute('aria-hidden', 'true');
    }
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