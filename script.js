const drawer=document.querySelector('.drawer'),hamb=document.querySelector('.hamb');
hamb?.addEventListener('click',()=>drawer.classList.toggle('open'));
document.querySelectorAll('.drawer a').forEach(a=>a.addEventListener('click',()=>drawer.classList.remove('open')));

const imgs=['gallery-01.webp','gallery-02.webp','gallery-03.webp','gallery-04.webp'];
let idx=0;
const mainImg=document.querySelector('.card.main img'), leftImg=document.querySelector('.card.left img'), rightImg=document.querySelector('.card.right img');
function draw(){mainImg.src=imgs[idx];leftImg.src=imgs[(idx+imgs.length-1)%imgs.length];rightImg.src=imgs[(idx+1)%imgs.length]}
document.querySelector('.prev')?.addEventListener('click',()=>{idx=(idx-1+imgs.length)%imgs.length;draw()});
document.querySelector('.next')?.addEventListener('click',()=>{idx=(idx+1)%imgs.length;draw()});

const lb=document.getElementById('lightbox'), lbImg=document.getElementById('lbImg');
function openLb(){lbImg.src=imgs[idx];lb.classList.add('open')}
function closeLb(){lb.classList.remove('open')}
document.getElementById('mainCard')?.addEventListener('click',openLb);
document.getElementById('openGallery')?.addEventListener('click',openLb);
document.getElementById('close')?.addEventListener('click',closeLb);
document.getElementById('lbPrev')?.addEventListener('click',()=>{idx=(idx-1+imgs.length)%imgs.length;draw();lbImg.src=imgs[idx]});
document.getElementById('lbNext')?.addEventListener('click',()=>{idx=(idx+1)%imgs.length;draw();lbImg.src=imgs[idx]});
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeLb()});

document.querySelectorAll('[data-link]').forEach(a=>a.addEventListener('click',e=>{e.preventDefault();alert('لینک واقعی '+a.dataset.link+' را در index.html جایگزین کنید.')}));