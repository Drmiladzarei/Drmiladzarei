const translations = {
  en: {
    "nav.home":"Home","nav.about":"About Dr.","nav.services":"Services","nav.gallery":"Gallery","nav.patient":"Patient Info","nav.contact":"Contact","nav.appointment":"Book an Appointment",
    "hero.specialized":"Specialized in Rhinoplasty & ENT Surgery","hero.title":"ENT & Rhinoplasty Surgeon","hero.tagline":"Better Breathing   |   Natural Beauty   |   A Healthier You",
    "quick.instagram":"Instagram","quick.telegram":"Telegram","quick.maps":"Google Maps","quick.care":"Post-Op Care",
    "about.kicker":"ABOUT THE DOCTOR","about.title":"Precision, function, and natural beauty.","about.body":"Dr. Milad Zarei focuses on individualized ENT and rhinoplasty care, balancing nasal function with refined, natural-looking results.",
    "services.kicker":"SERVICES","services.title":"Specialized ENT & Rhinoplasty Care","services.r1":"Rhinoplasty","services.r1b":"Personalized aesthetic and functional nasal surgery.","services.r2":"Functional ENT","services.r2b":"Evaluation and surgical care for breathing and nasal function.","services.r3":"Post-Op Care","services.r3b":"Clear guidance and follow-up throughout recovery.",
    "gallery.kicker":"GALLERY","gallery.title":"Selected Results","gallery.body":"A dedicated gallery can be connected here to real before-and-after patient cases with appropriate consent.",
    "patient.kicker":"PATIENT INFORMATION","patient.title":"Before and after surgery","patient.b1":"Before Surgery","patient.b1b":"Consultation, examination, medical history, and surgical planning.","patient.b2":"Recovery","patient.b2b":"Follow the individualized post-operative instructions provided by the clinic.",
    "post.kicker":"POST-OP CARE","post.title":"Your recovery, clearly guided.","post.body":"Use this area for the clinic's official post-operative instructions, medications, warning signs, and follow-up schedule.",
    "appointment.kicker":"APPOINTMENT","appointment.title":"Ready to take the next step?","appointment.body":"Connect this button to the clinic's real booking system, phone number, WhatsApp, or scheduling page.","appointment.cta":"Call the Clinic",
    "contact.kicker":"CONTACT","contact.title":"Clinic Contact","contact.map":"Open on Google Maps","footer":"ENT & Rhinoplasty Surgeon"
  },
  fa: {
    "nav.home":"خانه","nav.about":"درباره دکتر","nav.services":"خدمات","nav.gallery":"گالری","nav.patient":"اطلاعات بیماران","nav.contact":"تماس","nav.appointment":"رزرو نوبت",
    "hero.specialized":"متخصص جراحی بینی و گوش، حلق و بینی","hero.title":"جراح گوش، حلق و بینی و رینوپلاستی","hero.tagline":"تنفس بهتر   |   زیبایی طبیعی   |   سلامت بیشتر",
    "quick.instagram":"اینستاگرام","quick.telegram":"تلگرام","quick.maps":"مسیریابی","quick.care":"مراقبت بعد از عمل",
    "about.kicker":"درباره پزشک","about.title":"دقت، عملکرد و زیبایی طبیعی.","about.body":"دکتر میلاد زارعی بر درمان اختصاصی بیماری‌های گوش، حلق و بینی و جراحی بینی تمرکز دارد و عملکرد تنفسی را در کنار نتیجه‌ای طبیعی در نظر می‌گیرد.",
    "services.kicker":"خدمات","services.title":"خدمات تخصصی گوش، حلق و بینی و رینوپلاستی","services.r1":"جراحی بینی","services.r1b":"جراحی زیبایی و عملکردی بینی متناسب با شرایط هر بیمار.","services.r2":"جراحی عملکردی ENT","services.r2b":"ارزیابی و درمان جراحی مشکلات تنفسی و عملکرد بینی.","services.r3":"مراقبت بعد از عمل","services.r3b":"راهنمایی و پیگیری مرحله‌به‌مرحله در دوران نقاهت.",
    "gallery.kicker":"گالری","gallery.title":"نمونه نتایج","gallery.body":"در این بخش می‌توان گالری واقعی نتایج قبل و بعد بیماران را با رضایت آن‌ها قرار داد.",
    "patient.kicker":"اطلاعات بیماران","patient.title":"قبل و بعد از جراحی","patient.b1":"قبل از جراحی","patient.b1b":"مشاوره، معاینه، بررسی سوابق پزشکی و برنامه‌ریزی جراحی.","patient.b2":"دوران نقاهت","patient.b2b":"دستورالعمل‌های اختصاصی مراقبت بعد از عمل کلینیک را دنبال کنید.",
    "post.kicker":"مراقبت بعد از عمل","post.title":"دوران نقاهت، با راهنمایی روشن.","post.body":"دستورالعمل‌های رسمی مراقبت بعد از عمل، داروها، علائم هشدار و برنامه ویزیت‌های بعدی در این بخش قرار می‌گیرد.",
    "appointment.kicker":"رزرو نوبت","appointment.title":"آماده‌اید قدم بعدی را بردارید؟","appointment.body":"این دکمه را به سیستم واقعی رزرو، شماره تماس، واتساپ یا صفحه نوبت‌دهی کلینیک متصل کنید.","appointment.cta":"تماس با کلینیک",
    "contact.kicker":"تماس","contact.title":"ارتباط با کلینیک","contact.map":"مشاهده در Google Maps","footer":"جراح گوش، حلق و بینی و رینوپلاستی"
  }
};

const root = document.documentElement;
const switcher = document.getElementById('languageSwitch');
const menuBtn = document.getElementById('menuBtn');
const nav = document.querySelector('.desktop-nav');

function setLanguage(lang){
  root.lang = lang;
  root.dir = lang === 'fa' ? 'rtl' : 'ltr';
  document.querySelectorAll('[data-i18n]').forEach(el=>{
    const key = el.dataset.i18n;
    if(translations[lang][key]) el.textContent = translations[lang][key];
  });
  switcher.innerHTML = lang === 'en'
    ? '<span>Fa</span><span class="language-active">En</span>'
    : '<span class="language-active">Fa</span><span>En</span>';
  switcher.setAttribute('aria-label', lang === 'en' ? 'Switch to Persian' : 'Switch to English');
  localStorage.setItem('site-language', lang);
}
switcher.addEventListener('click',()=>setLanguage(root.lang === 'en' ? 'fa' : 'en'));

const mobileNav = document.createElement('nav');
mobileNav.className='mobile-nav';
mobileNav.setAttribute('aria-label','Mobile navigation');
mobileNav.innerHTML = nav.innerHTML;
document.body.appendChild(mobileNav);
mobileNav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>mobileNav.classList.remove('open')));
menuBtn.addEventListener('click',()=>{
  const open = mobileNav.classList.toggle('open');
  menuBtn.setAttribute('aria-expanded', String(open));
});

document.querySelectorAll('.desktop-nav a').forEach(a=>{
  a.addEventListener('click',()=>{
    document.querySelectorAll('.desktop-nav a').forEach(x=>x.classList.remove('active'));
    a.classList.add('active');
  });
});
document.getElementById('year').textContent = new Date().getFullYear();
setLanguage(localStorage.getItem('site-language') || 'en');
