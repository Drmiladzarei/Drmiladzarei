const $=s=>document.querySelector(s);
const drawer=$('#drawer'), menu=$('#menuBtn');
menu?.addEventListener('click',()=>{const open=drawer.classList.toggle('open');menu.setAttribute('aria-expanded',open)});
drawer?.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{drawer.classList.remove('open');menu.setAttribute('aria-expanded','false')}));
$('#themeBtn')?.addEventListener('click',()=>{document.body.classList.toggle('light');document.documentElement.style.setProperty('--bg',document.body.classList.contains('light')?'#f4f0e8':'#050a0d');document.documentElement.style.setProperty('--cream',document.body.classList.contains('light')?'#171514':'#f4eee2')});
$('#translateBtn')?.addEventListener('click',()=>{alert('نسخه انگلیسی در مرحله بعد فعال می‌شود.')});
let index=1;const counter=$('#counter');
function move(dir){index=((index-1+dir+4)%4)+1;counter.textContent=String(index).padStart(2,'0')+' / 04'}
$('#next')?.addEventListener('click',()=>move(1));$('#prev')?.addEventListener('click',()=>move(-1));
$('#moreBtn')?.addEventListener('click',()=>drawer?.classList.toggle('open'));
