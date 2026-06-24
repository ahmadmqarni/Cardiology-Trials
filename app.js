/* ============================================================
   Cardiology Landmark Trials — SPA Navigation Logic
   ============================================================ */

const state = {
  view: 'home',      // home | section | subsection | search
  sectionId: null,
  subsectionId: null,
  searchQuery: ''
};

// ── DOM refs ─────────────────────────────────────────────────
const app          = document.getElementById('app');
const breadcrumb   = document.getElementById('breadcrumb');
const searchInput  = document.getElementById('search-input');
const modalOverlay = document.getElementById('modal-overlay');
const modalBox     = document.getElementById('modal-box');
const modalClose   = document.getElementById('modal-close');

// ── Utilities ─────────────────────────────────────────────────
function getSection(id)    { return cardiologyData.find(s => s.id === id); }
function getSubsection(sectionId, subId) {
  const sec = getSection(sectionId);
  return sec ? sec.subsections.find(s => s.id === subId) : null;
}
function getTrial(sectionId, subId, trialId) {
  const sub = getSubsection(sectionId, subId);
  return sub ? sub.trials.find(t => t.id === trialId) : null;
}

function totalTrials() {
  return cardiologyData.reduce((a, s) =>
    a + s.subsections.reduce((b, sub) => b + sub.trials.length, 0), 0);
}

function escape(str) {
  return str.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}

// ── Breadcrumb ─────────────────────────────────────────────────
function renderBreadcrumb() {
  let html = `<span class="crumb" data-nav="home">Home</span>`;
  if (state.view === 'section' || state.view === 'subsection') {
    const sec = getSection(state.sectionId);
    const isLast = state.view === 'section';
    html += `<span class="sep">›</span>
             <span class="crumb ${isLast ? 'active' : ''}" data-nav="section"
               data-section="${sec.id}">${sec.title}</span>`;
  }
  if (state.view === 'subsection') {
    const sub = getSubsection(state.sectionId, state.subsectionId);
    html += `<span class="sep">›</span>
             <span class="crumb active">${sub.title}</span>`;
  }
  if (state.view === 'search') {
    html += `<span class="sep">›</span>
             <span class="crumb active">Search: "${escape(state.searchQuery)}"</span>`;
  }
  breadcrumb.innerHTML = html;
}

// ── Navigation ─────────────────────────────────────────────────
function navigate(view, sectionId, subsectionId) {
  state.view = view;
  state.sectionId = sectionId || null;
  state.subsectionId = subsectionId || null;
  render();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ── HOME VIEW ─────────────────────────────────────────────────
function renderHome() {
  const cards = cardiologyData.map(sec => {
    const trialCount = sec.subsections.reduce((a, s) => a + s.trials.length, 0);
    const subCount   = sec.subsections.length;
    return `
      <div class="section-card" style="--accent:${sec.color}"
           data-action="goto-section" data-section="${sec.id}">
        <span class="section-card-icon">${sec.icon}</span>
        <h2>${escape(sec.title)}</h2>
        <p>${escape(sec.description)}</p>
        <div class="section-card-meta">
          <span class="section-card-count">${subCount} sub-topics · ${trialCount} trials</span>
          <span class="section-card-arrow">→</span>
        </div>
      </div>`;
  }).join('');

  return `
    <div class="home-intro">
      <h2>Landmark Cardiology Trials</h2>
      <p>A curated reference for Cardiology Fellows — explore by topic, browse by subtopic, or search any trial.</p>
      <span class="trial-count-badge">${totalTrials()} landmark trials</span>
    </div>
    <div class="section-grid">${cards}</div>`;
}

// ── SECTION VIEW ──────────────────────────────────────────────
function renderSection(sectionId) {
  const sec = getSection(sectionId);
  if (!sec) return '<p>Section not found.</p>';

  const backBtn = `<button class="back-btn" data-nav="home">← Back to Home</button>`;

  const cards = sec.subsections.map(sub => {
    return `
      <div class="subsection-card" style="--sub-accent:${sub.color}"
           data-action="goto-subsection" data-section="${sec.id}" data-subsection="${sub.id}">
        <h3><span class="sub-dot" style="background:${sub.color};box-shadow:0 0 8px ${sub.color}"></span>${escape(sub.title)}</h3>
        <p class="sub-trial-count">${sub.trials.length} trial${sub.trials.length !== 1 ? 's' : ''}</p>
      </div>`;
  }).join('');

  return `
    ${backBtn}
    <div class="view-title">${sec.icon} ${escape(sec.title)}</div>
    <p class="view-subtitle">Select a sub-topic to browse trials</p>
    <div class="subsection-grid">${cards}</div>`;
}

// ── SUBSECTION VIEW ───────────────────────────────────────────
function renderSubsection(sectionId, subId) {
  const sec = getSection(sectionId);
  const sub = getSubsection(sectionId, subId);
  if (!sec || !sub) return '<p>Not found.</p>';

  const backBtn = `<button class="back-btn" data-nav="section" data-section="${sec.id}">← Back to ${escape(sec.title)}</button>`;

  const cards = sub.trials.map(trial => {
    const flagClass = trial.flag === 'warning' ? 'flag-warning' : '';
    return `
      <div class="trial-card ${flagClass}"
           data-action="open-modal"
           data-section="${sectionId}" data-subsection="${subId}" data-trial="${trial.id}">
        <div class="trial-card-header">
          <span class="trial-name">${escape(trial.name)}</span>
          <div class="trial-badge">
            <span class="trial-year">${trial.year}</span>
          </div>
        </div>
        <div class="trial-n">N = <strong>${escape(trial.n)}</strong></div>
        <div class="trial-question">${escape(trial.question)}</div>
        <div class="trial-expand-hint">Click for results & pearl ↗</div>
      </div>`;
  }).join('');

  return `
    ${backBtn}
    <div class="section-color-bar">
      <span style="display:inline-block;width:10px;height:10px;border-radius:50%;background:${sub.color};box-shadow:0 0 6px ${sub.color}"></span>
      ${escape(sec.title)} › ${escape(sub.title)}
    </div>
    <div class="view-title" style="color:${sub.color}">${escape(sub.title)}</div>
    <p class="view-subtitle">${sub.trials.length} trial${sub.trials.length !== 1 ? 's' : ''} — click a card to see results and pearls</p>
    <div class="trials-grid">${cards}</div>`;
}

// ── SEARCH VIEW ───────────────────────────────────────────────
function renderSearch(query) {
  const q = query.toLowerCase().trim();
  if (!q) return '';

  const results = [];
  cardiologyData.forEach(sec => {
    sec.subsections.forEach(sub => {
      sub.trials.forEach(trial => {
        const searchable = [trial.name, trial.question, trial.result, trial.pearl, String(trial.year)].join(' ').toLowerCase();
        if (searchable.includes(q)) {
          results.push({ sec, sub, trial });
        }
      });
    });
  });

  if (results.length === 0) {
    return `
      <div class="view-title">Search Results</div>
      <div class="no-results">
        <span class="nr-icon">🔍</span>
        No trials found for "<strong>${escape(query)}</strong>"
      </div>`;
  }

  const items = results.map(({ sec, sub, trial }) => `
    <div class="search-result-item"
         data-action="open-modal"
         data-section="${sec.id}" data-subsection="${sub.id}" data-trial="${trial.id}">
      <div style="flex:1">
        <div class="sri-name">${escape(trial.name)}</div>
        <div class="sri-path">${escape(sec.title)} › ${escape(sub.title)}</div>
        <div class="sri-question">${escape(trial.question)}</div>
      </div>
      <span class="sri-year">${trial.year}</span>
    </div>`).join('');

  return `
    <div class="view-title">Search Results</div>
    <p class="view-subtitle">${results.length} result${results.length !== 1 ? 's' : ''} for "<strong>${escape(query)}</strong>"</p>
    <div class="search-results-list">${items}</div>`;
}

// ── MODAL ─────────────────────────────────────────────────────
function openModal(sectionId, subId, trialId) {
  const trial = getTrial(sectionId, subId, trialId);
  if (!trial) return;

  const sec = getSection(sectionId);
  const sub = getSubsection(sectionId, subId);

  const examPearlHtml = trial.examPearl
    ? `<div class="modal-exam-pearl">${escape(trial.examPearl)}</div>`
    : '';

  modalBox.innerHTML = `
    <button id="modal-close" aria-label="Close">✕</button>
    <div class="modal-trial-name">${escape(trial.name)}</div>
    <div class="modal-meta">
      <span class="modal-year-badge">${trial.year}</span>
      <span class="modal-n-badge">N = ${escape(trial.n)}</span>
      <span style="font-size:0.75rem;color:#6080a0">${escape(sec.title)} › ${escape(sub.title)}</span>
    </div>
    <hr class="modal-divider">
    <div class="modal-section-label">Trial Question</div>
    <div class="modal-question">${escape(trial.question)}</div>
    <hr class="modal-divider">
    <div class="modal-section-label">Result</div>
    <div class="modal-result">${escape(trial.result)}</div>
    <hr class="modal-divider">
    <div class="modal-section-label">Key Pearl</div>
    <div class="modal-pearl">${escape(trial.pearl)}</div>
    ${examPearlHtml}`;

  modalOverlay.classList.add('active');
  document.body.style.overflow = 'hidden';

  modalBox.querySelector('#modal-close').addEventListener('click', closeModal);
}

function closeModal() {
  modalOverlay.classList.remove('active');
  document.body.style.overflow = '';
}

// ── RENDER ────────────────────────────────────────────────────
function render() {
  let html = '';
  if (state.view === 'home')       html = renderHome();
  else if (state.view === 'section')    html = renderSection(state.sectionId);
  else if (state.view === 'subsection') html = renderSubsection(state.sectionId, state.subsectionId);
  else if (state.view === 'search')     html = renderSearch(state.searchQuery);
  app.innerHTML = html;
  renderBreadcrumb();
}

// ── EVENT DELEGATION ──────────────────────────────────────────
document.addEventListener('click', e => {
  const el = e.target.closest('[data-action]');
  if (el) {
    const action = el.dataset.action;
    if (action === 'goto-section')    navigate('section', el.dataset.section);
    if (action === 'goto-subsection') navigate('subsection', el.dataset.section, el.dataset.subsection);
    if (action === 'open-modal')      openModal(el.dataset.section, el.dataset.subsection, el.dataset.trial);
    return;
  }

  const nav = e.target.closest('[data-nav]');
  if (nav) {
    const dest = nav.dataset.nav;
    if (dest === 'home')    navigate('home');
    if (dest === 'section') navigate('section', nav.dataset.section);
    return;
  }
});

// Close modal on overlay click (outside box)
modalOverlay.addEventListener('click', e => {
  if (e.target === modalOverlay) closeModal();
});

// Escape key closes modal
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeModal();
});

// ── SEARCH ────────────────────────────────────────────────────
let searchTimeout;
searchInput.addEventListener('input', e => {
  clearTimeout(searchTimeout);
  const q = e.target.value.trim();
  searchTimeout = setTimeout(() => {
    if (q.length >= 2) {
      state.view = 'search';
      state.searchQuery = q;
      render();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (q.length === 0 && state.view === 'search') {
      navigate('home');
    }
  }, 280);
});

// ── INIT ──────────────────────────────────────────────────────
render();
