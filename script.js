const $ = (selector, scope = document) => scope.querySelector(selector);

const drawer = $('#drawer');
const menu = $('#menuBtn');
const more = $('#moreBtn');

function closeDrawer() {
  drawer?.classList.remove('open');
  menu?.setAttribute('aria-expanded', 'false');
}

menu?.addEventListener('click', () => {
  const open = drawer?.classList.toggle('open');
  menu.setAttribute('aria-expanded', String(Boolean(open)));
});

more?.addEventListener('click', () => {
  const open = drawer?.classList.toggle('open');
  menu?.setAttribute('aria-expanded', String(Boolean(open)));
});

drawer?.querySelectorAll('a').forEach(link => link.addEventListener('click', closeDrawer));

$('#themeBtn')?.addEventListener('click', () => {
  document.body.classList.toggle('light');
  const light = document.body.classList.contains('light');
  document.documentElement.style.setProperty('--bg', light ? '#f4f0e8' : '#050a0d');
  document.documentElement.style.setProperty('--cream', light ? '#171514' : '#f4eee2');
});

$('#translateBtn')?.addEventListener('click', () => {
  alert('نسخه انگلیسی در مرحله بعد فعال می‌شود.');
});

const carouselConfig = {
  galleryTrack: 'galleryCount',
  videoTrack: 'videoCount',
  testimonialTrack: 'testimonialCount'
};

function renderCarousel(track, index) {
  const cards = [...track.children];
  const total = cards.length;
  if (!total) return;
  const current = ((index % total) + total) % total;
  track.dataset.index = String(current);

  cards.forEach((card, i) => {
    let delta = i - current;
    if (delta > total / 2) delta -= total;
    if (delta < -total / 2) delta += total;
    card.className = card.className.replace(/\bis-(?:center|prev|next|far-prev|far-next|hidden)\b/g, '').replace(/\s+/g, ' ').trim();
    if (delta === 0) card.classList.add('is-center');
    else if (delta === -1) card.classList.add('is-prev');
    else if (delta === 1) card.classList.add('is-next');
    else if (delta === -2) card.classList.add('is-far-prev');
    else if (delta === 2) card.classList.add('is-far-next');
    else card.classList.add('is-hidden');
  });

  const counter = document.getElementById(carouselConfig[track.id]);
  if (counter) counter.textContent = `${String(current + 1).padStart(2, '0')} / ${String(total).padStart(2, '0')}`;
}

function moveCarousel(trackId, step) {
  const track = document.getElementById(trackId);
  if (!track) return;
  const current = Number(track.dataset.index || 0);
  renderCarousel(track, current + step);
}

document.querySelectorAll('[data-center-prev]').forEach(button => {
  button.addEventListener('click', () => moveCarousel(button.dataset.centerPrev, -1));
});

document.querySelectorAll('[data-center-next]').forEach(button => {
  button.addEventListener('click', () => moveCarousel(button.dataset.centerNext, 1));
});

document.querySelectorAll('.center-track').forEach(track => renderCarousel(track, 0));

/* Videos stay unloaded until Play is pressed. */
document.querySelectorAll('.video-card').forEach(card => {
  const play = $('.play-btn', card);
  play?.addEventListener('click', (event) => {
    event.stopPropagation();
    const src = card.dataset.video;
    if (!src) return;

    let video = $('.inline-video', card);
    if (!video) {
      const poster = $('.video-poster', card);
      video = document.createElement('video');
      video.className = 'inline-video';
      video.controls = true;
      video.playsInline = true;
      video.preload = 'metadata';
      video.src = src;
      poster.replaceWith(video);
    }
    video.play().catch(() => {});
  });
});
