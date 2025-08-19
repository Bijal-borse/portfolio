$(function () {
  $('a[target="_blank"]').attr('rel', 'noopener noreferrer');

  // Scroll to top
  const $scrollTopBtn = $('#scrollToTop');
  $(window).on('scroll', function () {
    $scrollTopBtn.toggleClass('show', $(this).scrollTop() > 120);
  });

  $scrollTopBtn.on('click', function () {
    $('html, body').animate({ scrollTop: 0 }, 500);
  });

  // Typing effect
  const $typing = $('#typing');
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const lines = [
    'Designing Engaging User Experiences.',
    'Building Responsive Web Interfaces.',
    'Adding Life with Clean Animations.'
  ];

  if (prefersReduced) {
    $typing.text(lines[0]);
  } else {
    let i = 0, j = 0, deleting = false;
    const typeSpeed = 90;
    const pauseTime = 1400;

    (function typeLoop() {
      const current = lines[i];
      $typing.text(current.substring(0, j));

      if (!deleting && j < current.length) {
        j++;
        setTimeout(typeLoop, typeSpeed);
      } else if (!deleting && j === current.length) {
        deleting = true;
        setTimeout(typeLoop, pauseTime);
      } else if (deleting && j > 0) {
        j--;
        setTimeout(typeLoop, typeSpeed / 2);
      } else {
        deleting = false;
        i = (i + 1) % lines.length;
        setTimeout(typeLoop, 200);
      }
    })();
  }

  // AOS init
  const isMobile = window.matchMedia('(max-width: 575px)').matches;
  AOS.init({
    offset: isMobile ? 80 : 120,
    duration: 600,
    easing: 'ease-out-cubic',
    once: true
  });

  $(window).on('load', function () {
    AOS.refresh();
  });
});
