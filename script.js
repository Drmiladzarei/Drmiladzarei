const menu=document.querySelector('.menu-btn'), mobile=document.querySelector('.mobile-menu');
menu?.addEventListener('click',()=>{const open=mobile.classList.toggle('open');menu.setAttribute('aria-expanded',open);mobile.setAttribute('aria-hidden',!open)});
document.querySelectorAll('.mobile-menu a').forEach(a=>a.addEventListener('click',()=>mobile.classList.remove('open')));

const images=['gallery-01.webp','gallery-02.webp','gallery-03.webp','gallery-04.webp'];
let current=0;
const main=document.querySelector('.gallery-card.main img'), left=document.querySelector('.gallery-card.left img'), right=document.querySelector('.gallery-card.right img');
function renderGallery(){
  main.src=images[current];
  left.src=images[(current+images.length-1)%images.length];
  right.src=images[(current+1)%images.length];
}
document.querySelector('.gallery-arrow.prev')?.addEventListener('click',()=>{current=(current-1+images.length)%images.length;renderGallery()});
document.querySelector('.gallery-arrow.next')?.addEventListener('click',()=>{current=(current+1)%images.length;renderGallery()});

const box=document.getElementById('lightbox'), lightImg=document.getElementById('lightboxImg');
function openLightbox(){lightImg.src=images[current];box.classList.add('open');box.setAttribute('aria-hidden','false')}
function closeLightbox(){box.classList.remove('open');box.setAttribute('aria-hidden','true')}
document.querySelector('.gallery-card.main')?.addEventListener('click',openLightbox);
document.getElementById('openGallery')?.addEventListener('click',openLightbox);
document.querySelector('.lightbox-close')?.addEventListener('click',closeLightbox);
document.querySelector('.lightbox-prev')?.addEventListener('click',()=>{current=(current-1+images.length)%images.length;lightImg.src=images[current];renderGallery()});
document.querySelector('.lightbox-next')?.addEventListener('click',()=>{current=(current+1)%images.length;lightImg.src=images[current];renderGallery()});
box?.addEventListener('click',e=>{if(e.target===box)closeLightbox()});
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeLightbox()});

document.querySelectorAll('[data-placeholder]').forEach(a=>a.addEventListener('click',e=>{
  if(a.getAttribute('href')==='#'){e.preventDefault();alert('لینک واقعی این بخش را در HTML جایگزین کنید.')}
}));
renderGallery();