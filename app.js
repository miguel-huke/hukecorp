(()=>{
  'use strict';
  const routes=['home','about','systems','contact'];
  const catalog=window.HUKE_V7_CATALOG||[];
  const views=[...document.querySelectorAll('.view')];
  const topbar=document.getElementById('topbar'),footer=document.getElementById('page-footer'),shutter=document.getElementById('shutter');
  const optionBoard=document.getElementById('option-board'),startButton=document.getElementById('start-button'),menuButton=document.querySelector('.menu-button'),mobileMenu=document.getElementById('mobile-menu');
  const frame=document.getElementById('preview-frame'),previewViewport=document.getElementById('preview-viewport'),reduceMotion=matchMedia('(prefers-reduced-motion: reduce)');
  const previewPage={width:1440,height:900};
  const categoryOrder=['Comércio','Saúde','Educação','Serviços','Indústria','Transporte','Administração'];
  const categorySlug={'Comércio':'comercio','Saúde':'saude','Educação':'educacao','Serviços':'servicos','Indústria':'industria','Transporte':'transporte','Administração':'administracao'};
  let current='home',currentSystem=catalog[0]||null,busy=false;

  const esc=value=>String(value).replace(/[&<>"']/g,char=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
  function closePanels(){optionBoard.hidden=true;startButton.setAttribute('aria-expanded','false');mobileMenu.hidden=true;menuButton.setAttribute('aria-expanded','false');document.body.classList.remove('locked')}
  function renderRoute(route){views.forEach(view=>{const active=view.id===route;view.hidden=!active;view.classList.toggle('active',active);view.setAttribute('aria-hidden',String(!active))});const home=route==='home';topbar.hidden=home;footer.hidden=home;current=route;document.title={home:'HUKE CORP — Versão 7',about:'Sobre — HUKE CORP',systems:'Preview de sistemas — HUKE CORP',contact:'Contato — HUKE CORP'}[route];window.scrollTo(0,0);if(route==='systems')requestAnimationFrame(resizePreviewViewport)}
  function navigate(route,updateHistory=true){if(!routes.includes(route)||route===current||busy){closePanels();return}busy=true;closePanels();const finish=()=>{renderRoute(route);if(updateHistory)history.pushState({route},'',route==='home'?location.pathname:'#'+route);setTimeout(()=>busy=false,30)};if(reduceMotion.matches){finish();return}shutter.classList.remove('running');void shutter.offsetWidth;shutter.classList.add('running');setTimeout(finish,460)}
  document.querySelectorAll('[data-route]').forEach(button=>button.addEventListener('click',()=>navigate(button.dataset.route)));
  startButton.addEventListener('click',()=>{optionBoard.hidden=false;startButton.setAttribute('aria-expanded','true');document.body.classList.add('locked');optionBoard.querySelector('.option')?.focus()});
  document.getElementById('close-options').addEventListener('click',closePanels);
  menuButton.addEventListener('click',()=>{const open=menuButton.getAttribute('aria-expanded')!=='true';mobileMenu.hidden=!open;menuButton.setAttribute('aria-expanded',String(open));document.body.classList.toggle('locked',open)});
  document.addEventListener('keydown',event=>{if(event.key==='Escape')closePanels()});
  window.addEventListener('popstate',()=>renderRoute(routes.includes(location.hash.slice(1))?location.hash.slice(1):'home'));

  function buildCatalog(){
    const root=document.getElementById('catalog');root.replaceChildren();
    categoryOrder.forEach((category,index)=>{
      const section=document.createElement('section');section.className='catalog-group'+(index===0?' open':'');
      const toggle=document.createElement('button');toggle.type='button';toggle.className='group-toggle';toggle.innerHTML=`<span>${String(index+1).padStart(2,'0')} / ${category}</span><b>+</b>`;
      const list=document.createElement('div');list.className='group-list';list.hidden=index!==0;toggle.setAttribute('aria-expanded',String(index===0));
      toggle.addEventListener('click',()=>{const open=list.hidden;list.hidden=!open;section.classList.toggle('open',open);toggle.setAttribute('aria-expanded',String(open))});
      catalog.filter(item=>item.category===category).forEach(item=>{const button=document.createElement('button');button.type='button';button.className='system-link ready';button.dataset.system=item.id;button.innerHTML=`<span>${esc(item.title)}</span><b>ABRIR</b>`;button.addEventListener('click',()=>selectSystem(item.id));list.append(button)});
      section.append(toggle,list);root.append(section);
    });
  }
  function renderMap(item){
    document.getElementById('feature-panel').innerHTML=`<p class="model-concept">${esc(item.objective)}</p>${item.features.map((feature,index)=>`<article><span>${String(index+1).padStart(2,'0')}</span><div><h3>${esc(feature.split(/,| e /)[0])}</h3><p>${esc(feature)}</p></div></article>`).join('')}`;
    document.getElementById('architecture-panel').innerHTML=`<p class="model-concept">${esc(item.demo)}</p>${item.uiux.map((rule,index)=>`<article><span>${String(index+1).padStart(2,'0')}</span><div><h3>${esc(item.navigation[index%item.navigation.length])}</h3><p>${esc(rule)}</p></div></article>`).join('')}`;
  }
  function resizePreviewViewport(){
    const available=previewViewport.clientWidth;if(!available)return;
    const scale=Math.min(1,available/previewPage.width);
    previewViewport.style.setProperty('--frame-scale',String(scale));
    previewViewport.style.height=`${Math.round(previewPage.height*scale)}px`;
  }
  function selectSystem(id){
    const item=catalog.find(system=>system.id===id);if(!item)return;currentSystem=item;
    document.querySelectorAll('.system-link').forEach(button=>button.classList.toggle('active',button.dataset.system===id));
    document.getElementById('preview-path').textContent=`${item.category} / ${item.id}`.toUpperCase();document.getElementById('preview-title').textContent=item.title;
    document.getElementById('screen-address').textContent=`huke://v7/${categorySlug[item.category]}/${item.id}`;document.getElementById('stage-note').textContent=`${item.objective} Demo local com dados sintéticos; nenhuma transação é real.`;
    document.getElementById('wasm-state').innerHTML='<i></i> CARREGANDO';frame.title=`MVP do sistema ${item.title}`;frame.src=item.url;renderMap(item);
  }
  frame.addEventListener('load',()=>{document.getElementById('wasm-state').innerHTML='<i></i> WASM EMBUTIDO'});
  if('ResizeObserver'in window)new ResizeObserver(resizePreviewViewport).observe(previewViewport);else window.addEventListener('resize',resizePreviewViewport);
  document.querySelectorAll('.map-tabs button').forEach(button=>button.addEventListener('click',()=>{const features=button.dataset.panel==='features';document.getElementById('feature-panel').hidden=!features;document.getElementById('architecture-panel').hidden=features;document.querySelectorAll('.map-tabs button').forEach(tab=>{const active=tab===button;tab.classList.toggle('active',active);tab.setAttribute('aria-selected',String(active))})}));

  buildCatalog();if(catalog.length)selectSystem(catalog[0].id);document.getElementById('year').textContent=new Date().getFullYear();renderRoute(routes.includes(location.hash.slice(1))?location.hash.slice(1):'home');requestAnimationFrame(resizePreviewViewport);
})();
