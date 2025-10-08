export function initSlider(container, { auto = true, interval = 4000 } = {}) {
  if (!container) return () => {};

  const slides  = container.querySelectorAll('.slider');
  const btnPrev = container.querySelector('.prev-button');
  const btnNext = container.querySelector('.next-button');

  let current = 0;
  let timerId = null;

  if (!slides.length) return () => {};

  function hideSlides() { slides.forEach(s => s.classList.remove('on')); }
  function showSlide(i)  { slides[i].classList.add('on'); }

  function goTo(n) {
    current = (n + slides.length) % slides.length;
    hideSlides();
    showSlide(current);
  }
  function nextSlide() { goTo(current + 1); }
  function prevSlide() { goTo(current - 1); }

  btnNext?.addEventListener('click', nextSlide);
  btnPrev?.addEventListener('click', prevSlide);

  function start() { if (auto && slides.length > 1) timerId = setInterval(nextSlide, interval); }
  function stop()  { if (timerId) clearInterval(timerId), (timerId = null); }

  container.addEventListener('mouseenter', stop);
  container.addEventListener('mouseleave', start);

  hideSlides();
  showSlide(current);
  start();

  return () => {
    stop();
    btnNext?.removeEventListener('click', nextSlide);
    btnPrev?.removeEventListener('click', prevSlide);
    container.removeEventListener('mouseenter', stop);
    container.removeEventListener('mouseleave', start);
  };
}
