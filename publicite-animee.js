(()=>{
  const spot=document.querySelector('.advisual');
  const copy=document.querySelector('.adcopy');
  if(!spot||!copy)return;
  const reduce=window.matchMedia&&window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const slides=[
    {k:'LA MAISON DES PÊCHEURS',t:'Tout pour la pêche au même endroit',s:'Guet-Ndar • Saint-Louis • Sénégal',i:'logo-la-maison-des-pecheurs.png',logo:true},
    {k:'MOTORISATION',t:'Moteurs hors-bord pour vos pirogues',s:'15 CV • 25 CV • 40 CV',i:'https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Outboard_motor.jpg/640px-Outboard_motor.jpg'},
    {k:'FILETS & LIGNES',t:'Équipez vos sorties en mer',s:'Filets • Hameçons • Nylon • Flotteurs',i:'https://commons.wikimedia.org/wiki/Special:Redirect/file/Fishing-boat-fishing-net-net%20%2824217243512%29.jpg'},
    {k:'SÉCURITÉ & ÉQUIPEMENT',t:'Du matériel pensé pour les pêcheurs',s:'Gilets • Bottes • Cordages • Accessoires',i:'https://commons.wikimedia.org/wiki/Special:Redirect/file/Pirogues%20Guet%20ndar.jpg'},
    {k:'COMMANDEZ MAINTENANT',t:'Besoin d’un prix ou d’un conseil ?',s:'Contactez La Maison des Pêcheurs sur WhatsApp',i:'logo-la-maison-des-pecheurs.png',logo:true,cta:true}
  ];
  spot.innerHTML=`<div class="lmpSpotBg"></div><div class="lmpSpotShade"></div><div class="lmpSpotContent"><div class="lmpSpotKicker"></div><div class="lmpSpotTitle"></div><div class="lmpSpotSub"></div><a class="lmpSpotBtn" href="https://wa.me/33649118740" target="_blank" rel="noopener">◉ Commander sur WhatsApp</a></div><div class="lmpSpotDots"></div>`;
  const style=document.createElement('style');
  style.textContent=`
  .advisual{overflow:hidden;isolation:isolate;min-height:360px;background:#052f54!important}.lmpSpotBg{position:absolute;inset:0;background:center/cover no-repeat;transform:scale(1.08);transition:opacity .7s ease,transform 5.8s ease;z-index:-3}.lmpSpotShade{position:absolute;inset:0;background:linear-gradient(90deg,#021b30e8 0%,#043f6dbd 55%,#00172575);z-index:-2}.lmpSpotContent{width:100%;padding:42px;align-self:flex-end;color:#fff;text-shadow:0 2px 12px #0008}.lmpSpotKicker{font-size:12px;font-weight:900;letter-spacing:2px;color:#ffb04c;margin-bottom:8px}.lmpSpotTitle{font-size:clamp(27px,3vw,43px);font-weight:900;line-height:1.05;max-width:620px}.lmpSpotSub{font-size:15px;font-weight:700;margin-top:11px;max-width:600px}.lmpSpotBtn{display:none;width:max-content;margin-top:18px;background:#07963d;color:#fff;padding:12px 16px;border-radius:9px;font-weight:900;text-shadow:none;box-shadow:0 7px 20px #0004}.lmpSpotBtn.on{display:inline-block}.lmpSpotDots{position:absolute;right:22px;bottom:20px;display:flex;gap:6px}.lmpSpotDots i{width:8px;height:8px;border-radius:50%;background:#ffffff70;transition:.3s}.lmpSpotDots i.on{width:25px;border-radius:8px;background:#ff8a00}.lmpSpotBg.logo{background-size:min(70%,390px);background-color:#fff}.lmpSpotContent.pop{animation:lmpPop .65s ease}.adcopy small{color:#ffb04c}.adcopy h2{max-width:520px}.adcopy p{max-width:560px}@keyframes lmpPop{from{opacity:0;transform:translateY(16px)}to{opacity:1;transform:none}}@media(max-width:760px){.lmpSpotContent{padding:30px 24px 48px}.advisual{min-height:340px}.lmpSpotDots{right:18px;bottom:15px}}@media(prefers-reduced-motion:reduce){.track{animation:none!important}.lmpSpotContent.pop{animation:none}.lmpSpotBg{transition:none!important;transform:none!important}}
  `;
  document.head.appendChild(style);
  const bg=spot.querySelector('.lmpSpotBg'),content=spot.querySelector('.lmpSpotContent'),k=spot.querySelector('.lmpSpotKicker'),t=spot.querySelector('.lmpSpotTitle'),s=spot.querySelector('.lmpSpotSub'),btn=spot.querySelector('.lmpSpotBtn'),dots=spot.querySelector('.lmpSpotDots');
  dots.innerHTML=slides.map(()=>'<i></i>').join('');
  let n=0;
  function show(x){const a=slides[x];bg.style.opacity='0';setTimeout(()=>{bg.style.backgroundImage=`url("${a.i}")`;bg.classList.toggle('logo',!!a.logo);bg.style.opacity='1';bg.style.transform=reduce?'none':'scale(1)';},120);k.textContent=a.k;t.textContent=a.t;s.textContent=a.s;btn.classList.toggle('on',!!a.cta);content.classList.remove('pop');void content.offsetWidth;content.classList.add('pop');[...dots.children].forEach((d,j)=>d.classList.toggle('on',j===x));}
  show(0);
  if(!reduce)setInterval(()=>{n=(n+1)%slides.length;show(n)},4800);
  copy.querySelector('small').textContent='MINI-SPOT PUBLICITAIRE';
  copy.querySelector('h2').textContent='La Maison des Pêcheurs en mouvement';
  copy.querySelector('p').textContent='Découvrez nos équipements pour la pêche artisanale : motorisation, filets, lignes, sécurité, entretien et accessoires à Guet-Ndar.';
})();