(() => {
  if (!window.PlayLing) return;

  function stateLabel(state){
    if(state === 'current') return '▶ AGORA';
    if(state === 'open') return '✓ LIBERADO';
    if(state === 'next') return '→ A SEGUIR';
    return '🔒 BLOQUEADO';
  }

  function makeSequenceLink(id, direction){
    if(!id){
      const span = document.createElement('span');
      span.className = `course-sequence-link ${direction} empty`;
      return span;
    }
    const item = PlayLing.item(id);
    const state = PlayLing.state(id);
    const available = PlayLing.isAvailable(id);
    const el = document.createElement(available ? 'a' : 'span');
    el.className = `course-sequence-link ${direction} ${available ? 'available' : 'locked'}`;
    if(available) el.href = item.href;
    else el.setAttribute('aria-disabled','true');

    const d = document.createElement('span');
    d.className = 'direction';
    const arrow = direction === 'prev' ? '←' : '→';
    d.textContent = `${arrow} ${direction === 'prev' ? 'ANTERIOR' : 'PRÓXIMO'} · ${stateLabel(state)}`;

    const t = document.createElement('span');
    t.className = 'nav-title';
    t.textContent = `${item.label} — ${item.title}`;
    el.append(d,t);
    return el;
  }

  document.querySelectorAll('[data-course-nav]').forEach(nav => {
    let currentId = nav.dataset.current || '';
    if(nav.dataset.currentGroup){
      const ids = nav.dataset.currentGroup.split(',').map(s => s.trim()).filter(Boolean);
      currentId = PlayLing.currentWithin(ids);
    }
    if(!currentId) return;
    const prev = PlayLing.adjacent(currentId,'prev');
    const next = PlayLing.adjacent(currentId,'next');
    nav.replaceChildren(makeSequenceLink(prev,'prev'),makeSequenceLink(next,'next'));
  });
})();
