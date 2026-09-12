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
  if (state.view === 'quiz-pick' || state.view === 'quiz-card' || state.view === 'quiz-end') {
    html += `<span class="sep">›</span><span class="crumb active">Quiz Mode</span>`;
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

// ── SVG ILLUSTRATIONS ─────────────────────────────────────────
const SECTION_SVG = {
  coronaries: `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg" class="hc-svg">
    <defs>
      <radialGradient id="cg1" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stop-color="var(--hc-col)" stop-opacity="0.25"/>
        <stop offset="100%" stop-color="var(--hc-col)" stop-opacity="0"/>
      </radialGradient>
    </defs>
    <circle cx="60" cy="60" r="54" fill="url(#cg1)"/>
    <!-- Coronary artery curve -->
    <path d="M20 40 Q40 20 60 35 Q80 50 95 38 Q108 28 112 40" stroke="var(--hc-col)" stroke-width="7" fill="none" stroke-linecap="round" opacity="0.9"/>
    <path d="M20 40 Q40 20 60 35 Q80 50 95 38 Q108 28 112 40" stroke="rgba(255,255,255,0.15)" stroke-width="3" fill="none" stroke-linecap="round"/>
    <!-- Stent rings -->
    <ellipse cx="62" cy="35" rx="7" ry="4" stroke="var(--hc-col)" stroke-width="2.5" fill="none" opacity="0.7"/>
    <ellipse cx="74" cy="42" rx="7" ry="4" stroke="var(--hc-col)" stroke-width="2.5" fill="none" opacity="0.7"/>
    <ellipse cx="86" cy="40" rx="7" ry="4" stroke="var(--hc-col)" stroke-width="2.5" fill="none" opacity="0.7"/>
    <!-- Second artery branch -->
    <path d="M60 35 Q65 60 55 85 Q48 100 50 110" stroke="var(--hc-col)" stroke-width="5.5" fill="none" stroke-linecap="round" opacity="0.7"/>
    <!-- Plaque glow dot -->
    <circle cx="62" cy="38" r="5" fill="var(--hc-col)" opacity="0.6"/>
    <circle cx="62" cy="38" r="3" fill="#fff" opacity="0.5"/>
  </svg>`,

  'heart-failure': `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg" class="hc-svg">
    <defs>
      <radialGradient id="hfg1" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stop-color="var(--hc-col)" stop-opacity="0.2"/>
        <stop offset="100%" stop-color="var(--hc-col)" stop-opacity="0"/>
      </radialGradient>
    </defs>
    <circle cx="60" cy="60" r="54" fill="url(#hfg1)"/>
    <!-- Heart shape -->
    <path d="M60 95 C30 75 10 55 12 38 C14 22 26 15 38 18 C46 20 54 27 60 35 C66 27 74 20 82 18 C94 15 106 22 108 38 C110 55 90 75 60 95Z" stroke="var(--hc-col)" stroke-width="3" fill="var(--hc-col)" fill-opacity="0.18" opacity="0.9"/>
    <!-- LVAD pump symbol: circle with arrows -->
    <circle cx="60" cy="58" r="16" stroke="var(--hc-col)" stroke-width="2.5" fill="none" stroke-dasharray="5 3" opacity="0.8"/>
    <!-- Rotation arrows -->
    <path d="M60 42 A18 18 0 0 1 78 60" stroke="#fff" stroke-width="2.5" fill="none" stroke-linecap="round" opacity="0.7"/>
    <polygon points="78,55 78,65 85,60" fill="#fff" opacity="0.7"/>
    <!-- Center bolt -->
    <circle cx="60" cy="58" r="5" fill="var(--hc-col)" opacity="0.9"/>
    <circle cx="60" cy="58" r="2.5" fill="#fff" opacity="0.8"/>
  </svg>`,

  electrophysiology: `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg" class="hc-svg">
    <defs>
      <radialGradient id="epg1" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stop-color="var(--hc-col)" stop-opacity="0.2"/>
        <stop offset="100%" stop-color="var(--hc-col)" stop-opacity="0"/>
      </radialGradient>
    </defs>
    <circle cx="60" cy="60" r="54" fill="url(#epg1)"/>
    <!-- Pacemaker/ICD box -->
    <rect x="28" y="22" width="44" height="36" rx="8" stroke="var(--hc-col)" stroke-width="3" fill="var(--hc-col)" fill-opacity="0.15"/>
    <!-- ICD screen lines -->
    <line x1="36" y1="34" x2="64" y2="34" stroke="var(--hc-col)" stroke-width="1.5" opacity="0.6"/>
    <line x1="36" y1="42" x2="56" y2="42" stroke="var(--hc-col)" stroke-width="1.5" opacity="0.4"/>
    <!-- ECG blip on box -->
    <polyline points="34,50 40,50 43,44 46,56 49,44 52,50 64,50" stroke="#fff" stroke-width="2" fill="none" opacity="0.75"/>
    <!-- Connector port -->
    <rect x="48" y="56" width="6" height="6" rx="2" fill="var(--hc-col)" opacity="0.9"/>
    <!-- Electrode lead 1 -->
    <path d="M51 62 Q51 75 45 85 Q40 92 44 100" stroke="var(--hc-col)" stroke-width="2.5" fill="none" stroke-linecap="round" opacity="0.8"/>
    <circle cx="44" cy="102" r="4" fill="var(--hc-col)" opacity="0.9"/>
    <!-- Electrode lead 2 (shorter, RV) -->
    <path d="M51 62 Q60 72 65 82 Q68 90 72 95" stroke="var(--hc-col)" stroke-width="2" fill="none" stroke-linecap="round" opacity="0.6"/>
    <circle cx="72" cy="97" r="3.5" fill="var(--hc-col)" opacity="0.7"/>
  </svg>`,

  preventive: `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg" class="hc-svg">
    <defs>
      <radialGradient id="pvg1" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stop-color="var(--hc-col)" stop-opacity="0.2"/>
        <stop offset="100%" stop-color="var(--hc-col)" stop-opacity="0"/>
      </radialGradient>
    </defs>
    <circle cx="60" cy="60" r="54" fill="url(#pvg1)"/>
    <!-- Shield -->
    <path d="M60 18 L88 28 L88 58 C88 76 60 102 60 102 C60 102 32 76 32 58 L32 28 Z" stroke="var(--hc-col)" stroke-width="3" fill="var(--hc-col)" fill-opacity="0.14" opacity="0.9"/>
    <!-- Lipid molecule hexagon -->
    <polygon points="60,42 68,47 68,57 60,62 52,57 52,47" stroke="var(--hc-col)" stroke-width="2.5" fill="none" opacity="0.9"/>
    <!-- Double bonds -->
    <line x1="60" y1="42" x2="60" y2="38" stroke="var(--hc-col)" stroke-width="2" opacity="0.7"/>
    <line x1="68" y1="47" x2="72" y2="44" stroke="var(--hc-col)" stroke-width="2" opacity="0.7"/>
    <line x1="68" y1="57" x2="72" y2="60" stroke="var(--hc-col)" stroke-width="2" opacity="0.7"/>
    <line x1="60" y1="62" x2="60" y2="67" stroke="var(--hc-col)" stroke-width="2" opacity="0.7"/>
    <line x1="52" y1="57" x2="48" y2="60" stroke="var(--hc-col)" stroke-width="2" opacity="0.7"/>
    <line x1="52" y1="47" x2="48" y2="44" stroke="var(--hc-col)" stroke-width="2" opacity="0.7"/>
    <!-- Center fill -->
    <circle cx="60" cy="52" r="4" fill="var(--hc-col)" opacity="0.7"/>
    <!-- Shield tick -->
    <polyline points="50,78 57,86 72,68" stroke="#fff" stroke-width="3" fill="none" stroke-linecap="round" stroke-linejoin="round" opacity="0.75"/>
  </svg>`
};

const QUIZ_SVG = `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg" class="hc-svg">
  <defs>
    <radialGradient id="qzg1" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#c0392b" stop-opacity="0.35"/>
      <stop offset="100%" stop-color="#c0392b" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <circle cx="60" cy="60" r="54" fill="url(#qzg1)"/>
  <!-- Brain outline -->
  <path d="M42 75 C30 72 22 62 24 50 C26 40 34 33 38 35 C36 30 40 24 47 24 C50 18 58 16 64 20 C68 15 76 16 80 22 C87 22 93 30 91 40 C96 44 96 54 90 60 C93 68 89 76 82 77 C78 82 70 84 64 80 C58 86 48 84 42 75Z" stroke="#ff6b6b" stroke-width="2.5" fill="rgba(192,57,43,0.15)" opacity="0.9"/>
  <!-- Brain fold lines -->
  <path d="M50 38 Q55 44 52 52" stroke="#ff6b6b" stroke-width="1.5" fill="none" opacity="0.5"/>
  <path d="M65 32 Q68 40 64 48 Q60 56 63 64" stroke="#ff6b6b" stroke-width="1.5" fill="none" opacity="0.5"/>
  <path d="M76 40 Q80 50 74 58" stroke="#ff6b6b" stroke-width="1.5" fill="none" opacity="0.5"/>
  <!-- Lightning bolt -->
  <polygon points="58,52 50,68 60,64 55,82 72,62 61,66 67,52" fill="#ff6b6b" opacity="0.9"/>
  <polygon points="58,52 50,68 60,64 55,82 72,62 61,66 67,52" fill="#fff" opacity="0.2"/>
</svg>`;

// Keyword tags per section
const SECTION_TAGS = {
  coronaries:        ['ACS', 'STEMI', 'PCI', 'Statin', 'Antiplatelet'],
  'heart-failure':   ['HFrEF', 'HFpEF', 'LVAD', 'Transplant', 'Diuresis'],
  electrophysiology: ['AF', 'ICD', 'CRT', 'Ablation', 'Anticoag'],
  preventive:        ['Lipids', 'Hypertension', 'Statin', 'Aspirin', 'Risk']
};

// ── HOME VIEW ─────────────────────────────────────────────────
function renderHome() {
  const sectionCards = cardiologyData.map(sec => {
    const trialCount = sec.subsections.reduce((a, s) => a + s.trials.length, 0);
    const tags = (SECTION_TAGS[sec.id] || []).slice(0, 4).map(t =>
      `<span class="hc-tag">${t}</span>`).join('');
    const illus = SECTION_SVG[sec.id] || '';
    return `
      <div class="hc-card" style="--hc-col:${sec.color}" data-action="goto-section" data-section="${sec.id}">
        <div class="hc-glow"></div>
        <div class="hc-illus">${illus}</div>
        <div class="hc-tags">${tags}</div>
        <h3 class="hc-title">${escape(sec.title)}</h3>
        <p class="hc-desc">${escape(sec.description)}</p>
        <div class="hc-footer">
          <span class="hc-count">${trialCount} trials</span>
          <span class="hc-cta">Explore Trials →</span>
        </div>
      </div>`;
  }).join('');

  const quizCard = `
    <div class="hc-card hc-quiz-card" style="--hc-col:#c0392b" data-action="goto-quiz">
      <div class="hc-glow"></div>
      <div class="hc-illus">${QUIZ_SVG}</div>
      <div class="hc-tags">
        <span class="hc-tag">Flashcards</span>
        <span class="hc-tag">All Categories</span>
        <span class="hc-tag">Self-Test</span>
      </div>
      <h3 class="hc-title">Quiz Mode</h3>
      <p class="hc-desc">Test your recall with flashcards. Choose categories, flip cards, and track what you know.</p>
      <div class="hc-footer">
        <span class="hc-count">${totalTrials()} cards</span>
        <span class="hc-cta">Start Quiz →</span>
      </div>
    </div>`;

  // ECG path for hero animation
  const ecgPath = `M-10,60 L10,60 L15,60 L20,20 L25,100 L30,60 L35,60 L50,60 L55,60 L60,10 L65,110 L70,60 L75,60 L90,60 L95,60 L100,35 L105,85 L110,60 L120,60 L140,60`;

  return `
    <div class="home-hero">
      <svg class="hero-ecg-svg" viewBox="0 0 1200 120" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
        <path class="hero-ecg-path" d="M0,60 L60,60 L80,60 L100,20 L120,100 L140,60 L160,60
             L260,60 L280,60 L300,10 L320,110 L340,60 L360,60
             L460,60 L480,60 L500,25 L520,95 L540,60 L560,60
             L660,60 L680,60 L700,15 L720,105 L740,60 L760,60
             L860,60 L880,60 L900,22 L920,98 L940,60 L960,60
             L1060,60 L1080,60 L1100,18 L1120,102 L1140,60 L1200,60"/>
      </svg>
      <div class="hero-content">
        <div class="hero-eyebrow">CARDIOLOGY FELLOWS REFERENCE</div>
        <h2 class="hero-headline">Landmark<br>Cardiology Trials</h2>
        <p class="hero-sub">Evidence that shaped modern practice —<br>organized, searchable, quizzable.</p>
        <div class="hero-badges">
          <span class="hero-badge">${totalTrials()} Landmark Trials</span>
          <span class="hero-badge">4 Major Categories</span>
        </div>
      </div>
    </div>
    <div class="home-cards-wrap">
      <div class="home-cards-grid">${sectionCards}${quizCard}</div>
      <div class="home-tagline">
        <svg class="tagline-wave" viewBox="0 0 200 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,12 L10,12 L15,12 L20,4 L25,20 L30,12 L40,12 L50,12 L55,6 L60,18 L65,12 L75,12 L85,12 L90,8 L95,16 L100,12 L110,12 L120,12 L125,5 L130,19 L135,12 L145,12 L155,12 L160,7 L165,17 L170,12 L180,12 L190,12 L195,9 L200,12" stroke="rgba(192,57,43,0.5)" stroke-width="1.5" fill="none"/>
        </svg>
        <span>SAME EVIDENCE. A BRIGHTER TOMORROW.</span>
        <svg class="tagline-wave" viewBox="0 0 200 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,12 L10,12 L15,12 L20,4 L25,20 L30,12 L40,12 L50,12 L55,6 L60,18 L65,12 L75,12 L85,12 L90,8 L95,16 L100,12 L110,12 L120,12 L125,5 L130,19 L135,12 L145,12 L155,12 L160,7 L165,17 L170,12 L180,12 L190,12 L195,9 L200,12" stroke="rgba(192,57,43,0.5)" stroke-width="1.5" fill="none"/>
        </svg>
      </div>
    </div>`;
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
        const takeawayText = (trial.takeaways || []).join(' ');
        const searchable = [trial.name, trial.fullName, trial.question, trial.result, takeawayText, trial.whyLandmark, String(trial.year)].join(' ').toLowerCase();
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

  const takeawaysHtml = trial.takeaways && trial.takeaways.length
    ? `<hr class="modal-divider">
       <div class="modal-section-label">Key Takeaways</div>
       <ul class="modal-takeaways">${trial.takeaways.map(t => `<li>${escape(t)}</li>`).join('')}</ul>`
    : '';

  const whyLandmarkHtml = trial.whyLandmark
    ? `<hr class="modal-divider">
       <div class="modal-section-label">Why Landmark</div>
       <div class="modal-why">${escape(trial.whyLandmark)}</div>`
    : '';

  const examPearlHtml = trial.examPearl
    ? `<div class="modal-exam-pearl">${escape(trial.examPearl)}</div>`
    : '';

  let linkHtml = '';
  if (trial.pubLink) {
    linkHtml = `<hr class="modal-divider">
      <div class="modal-section-label">Primary Paper</div>
      <div class="modal-links">
        <a href="${trial.pubLink}" target="_blank" rel="noopener" class="modal-link-btn">Read Primary Paper ↗</a>`;
    if (trial.pubLink2) {
      linkHtml += `<a href="${trial.pubLink2}" target="_blank" rel="noopener" class="modal-link-btn modal-link-btn-secondary">Corrected / Follow-up Paper ↗</a>`;
    }
    linkHtml += `</div>`;
  }

  modalBox.innerHTML = `
    <button id="modal-close" aria-label="Close">✕</button>
    <div class="modal-trial-name">${escape(trial.name)}</div>
    ${trial.fullName ? `<div class="modal-full-name">${escape(trial.fullName)}</div>` : ''}
    <div class="modal-meta">
      <span class="modal-year-badge">${trial.year}</span>
      <span class="modal-n-badge">N = ${escape(trial.n)}</span>
      <span class="modal-path">${escape(sec.title)} › ${escape(sub.title)}</span>
    </div>
    <hr class="modal-divider">
    <div class="modal-section-label">Trial Question</div>
    <div class="modal-question">${escape(trial.question)}</div>
    <hr class="modal-divider">
    <div class="modal-section-label">Concise Result</div>
    <div class="modal-result">${escape(trial.result)}</div>
    ${takeawaysHtml}
    ${whyLandmarkHtml}
    ${examPearlHtml}
    ${linkHtml}`;

  modalOverlay.classList.add('active');
  document.body.style.overflow = 'hidden';

  modalBox.querySelector('#modal-close').addEventListener('click', closeModal);
}

function closeModal() {
  modalOverlay.classList.remove('active');
  document.body.style.overflow = '';
}

// ── QUIZ STATE ────────────────────────────────────────────────
const quiz = {
  deck: [],
  index: 0,
  known: 0,
  review: [],
  revealed: false,
  phase: 'pick'   // pick | cards | end
};

function buildDeck(sectionIds) {
  const all = [];
  cardiologyData.forEach(sec => {
    if (!sectionIds.includes(sec.id)) return;
    sec.subsections.forEach(sub => {
      sub.trials.forEach(t => all.push({ trial: t, sec, sub }));
    });
  });
  // Fisher-Yates shuffle
  for (let i = all.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [all[i], all[j]] = [all[j], all[i]];
  }
  return all;
}

// ── QUIZ: CATEGORY PICKER ─────────────────────────────────────
function renderQuizPick() {
  const rows = cardiologyData.map(sec => {
    const count = sec.subsections.reduce((a, s) => a + s.trials.length, 0);
    return `
      <label class="quiz-pick-row" style="--qcolor:${sec.color}">
        <input type="checkbox" class="quiz-pick-cb" value="${sec.id}" checked>
        <span class="quiz-pick-icon">${sec.icon}</span>
        <span class="quiz-pick-title">${escape(sec.title)}</span>
        <span class="quiz-pick-count">${count} trials</span>
      </label>`;
  }).join('');

  return `
    <div class="quiz-pick-wrap">
      <div class="quiz-pick-header">
        <div class="quiz-pick-emoji">🧠</div>
        <h2>Quiz Mode</h2>
        <p>Select the categories you want to be tested on, then start your session.</p>
      </div>
      <div class="quiz-pick-list">${rows}</div>
      <div class="quiz-pick-actions">
        <button class="quiz-start-btn" data-action="quiz-start">Start Quiz ⚡</button>
        <button class="back-btn" data-nav="home">← Back</button>
      </div>
    </div>`;
}

// ── QUIZ: FLASHCARD ───────────────────────────────────────────
function renderQuizCard() {
  const { deck, index, known, review, revealed } = quiz;
  const total   = deck.length;
  const current = deck[index];
  const { trial, sec, sub } = current;
  const progress = Math.round((index / total) * 100);

  const takeawaysHtml = trial.takeaways && trial.takeaways.length
    ? `<ul class="modal-takeaways qz-takeaways">${trial.takeaways.map(t => `<li>${escape(t)}</li>`).join('')}</ul>`
    : '';

  const whyHtml = trial.whyLandmark
    ? `<div class="modal-why qz-why">${escape(trial.whyLandmark)}</div>`
    : '';

  const frontFace = `
    <div class="qz-label">Trial Question</div>
    <div class="qz-n qz-n-front">N = <strong>${escape(trial.n)}</strong> patients</div>
    <div class="qz-question qz-question-front">${escape(trial.question)}</div>
    <button class="qz-reveal-btn" data-action="quiz-reveal">Reveal Answer ↓</button>`;

  const backFace = `
    <div class="qz-label">Trial</div>
    <div class="qz-trial-name">${escape(trial.name)} <span class="qz-year">${trial.year}</span></div>
    ${trial.fullName ? `<div class="qz-full-name">${escape(trial.fullName)}</div>` : ''}
    <div class="qz-n">N = <strong>${escape(trial.n)}</strong></div>
    <div class="qz-divider"></div>
    <div class="qz-label">Trial Question</div>
    <div class="qz-question">${escape(trial.question)}</div>
    <div class="qz-divider"></div>
    <div class="qz-label qz-result-label">Result</div>
    <div class="qz-result">${escape(trial.result)}</div>
    ${takeawaysHtml}
    ${whyHtml}
    <div class="qz-judge">
      <button class="qz-btn qz-review" data-action="quiz-review">✗ Review Again</button>
      <button class="qz-btn qz-known"  data-action="quiz-known">✓ Got It</button>
    </div>`;

  return `
    <div class="quiz-session-wrap">
      <div class="qz-topbar">
        <button class="back-btn qz-exit" data-action="quiz-exit">← Exit Quiz</button>
        <div class="qz-stats">
          <span class="qz-stat-known">✓ ${known}</span>
          <span class="qz-stat-review">✗ ${review.length}</span>
          <span class="qz-stat-pos">${index + 1} / ${total}</span>
        </div>
      </div>
      <div class="qz-progress-bar"><div class="qz-progress-fill" style="width:${progress}%"></div></div>
      <div class="qz-path">${escape(sec.title)} › ${escape(sub.title)}</div>
      <div class="qz-card ${revealed ? 'revealed' : ''}">
        ${revealed ? backFace : frontFace}
      </div>
    </div>`;
}

// ── QUIZ: END SCREEN ──────────────────────────────────────────
function renderQuizEnd() {
  const total   = quiz.deck.length;
  const known   = quiz.known;
  const missed  = quiz.review.length;
  const pct     = Math.round((known / total) * 100);

  let emoji = pct >= 90 ? '🏆' : pct >= 70 ? '💪' : pct >= 50 ? '📚' : '🔄';
  let msg   = pct >= 90 ? 'Outstanding!' : pct >= 70 ? 'Solid work!' : pct >= 50 ? 'Keep studying!' : 'More review needed';

  const retryBtn = missed > 0
    ? `<button class="quiz-start-btn qz-retry-btn" data-action="quiz-retry">Retry Missed (${missed}) ↻</button>`
    : '';

  return `
    <div class="quiz-end-wrap">
      <div class="quiz-end-emoji">${emoji}</div>
      <h2 class="quiz-end-title">${msg}</h2>
      <div class="quiz-end-score">${pct}%</div>
      <div class="quiz-end-detail">${known} known · ${missed} to review · ${total} total</div>
      <div class="quiz-end-actions">
        ${retryBtn}
        <button class="quiz-start-btn qz-new-btn" data-action="goto-quiz">New Session</button>
        <button class="back-btn" data-nav="home">← Home</button>
      </div>
    </div>`;
}

// ── RENDER ────────────────────────────────────────────────────
function render() {
  let html = '';
  if (state.view === 'home')       html = renderHome();
  else if (state.view === 'section')    html = renderSection(state.sectionId);
  else if (state.view === 'subsection') html = renderSubsection(state.sectionId, state.subsectionId);
  else if (state.view === 'search')     html = renderSearch(state.searchQuery);
  else if (state.view === 'quiz-pick')  html = renderQuizPick();
  else if (state.view === 'quiz-card')  html = renderQuizCard();
  else if (state.view === 'quiz-end')   html = renderQuizEnd();
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
    if (action === 'goto-quiz')       { state.view = 'quiz-pick'; render(); window.scrollTo({top:0}); }
    if (action === 'quiz-start') {
      const checked = [...document.querySelectorAll('.quiz-pick-cb:checked')].map(cb => cb.value);
      if (!checked.length) return;
      quiz.deck    = buildDeck(checked);
      quiz.index   = 0;
      quiz.known   = 0;
      quiz.review  = [];
      quiz.revealed = false;
      quiz.phase   = 'cards';
      state.view   = 'quiz-card';
      render(); window.scrollTo({top:0});
    }
    if (action === 'quiz-reveal') {
      quiz.revealed = true;
      render(); window.scrollTo({top:0});
    }
    if (action === 'quiz-known') {
      quiz.known++;
      quiz.index++;
      quiz.revealed = false;
      if (quiz.index >= quiz.deck.length) { state.view = 'quiz-end'; }
      render(); window.scrollTo({top:0});
    }
    if (action === 'quiz-review') {
      quiz.review.push(quiz.deck[quiz.index]);
      quiz.index++;
      quiz.revealed = false;
      if (quiz.index >= quiz.deck.length) { state.view = 'quiz-end'; }
      render(); window.scrollTo({top:0});
    }
    if (action === 'quiz-retry') {
      quiz.deck    = [...quiz.review];
      quiz.index   = 0;
      quiz.known   = 0;
      quiz.review  = [];
      quiz.revealed = false;
      state.view   = 'quiz-card';
      render(); window.scrollTo({top:0});
    }
    if (action === 'quiz-exit') { state.view = 'quiz-pick'; render(); window.scrollTo({top:0}); }
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

// Escape key closes modal / exits quiz
document.addEventListener('keydown', e => {
  if (state.view === 'quiz-card') {
    if (e.key === ' ' && !quiz.revealed) {
      e.preventDefault();
      quiz.revealed = true; render(); window.scrollTo({top:0});
    } else if (e.key === 'ArrowRight' && quiz.revealed) {
      document.querySelector('[data-action="quiz-known"]')?.click();
    } else if (e.key === 'ArrowLeft' && quiz.revealed) {
      document.querySelector('[data-action="quiz-review"]')?.click();
    } else if (e.key === 'Escape') {
      state.view = 'quiz-pick'; render(); window.scrollTo({top:0});
    }
    return;
  }
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

// ── THEME TOGGLE ──────────────────────────────────────────────
const themeToggle = document.getElementById('theme-toggle');
const themeIcon   = document.getElementById('theme-icon');

function applyTheme(light) {
  document.body.classList.toggle('light', light);
  themeIcon.textContent = light ? '🌙' : '☀️';
  localStorage.setItem('ct-theme', light ? 'light' : 'dark');
}

themeToggle.addEventListener('click', () => {
  applyTheme(!document.body.classList.contains('light'));
});

applyTheme(localStorage.getItem('ct-theme') === 'light');

// ── INIT ──────────────────────────────────────────────────────
render();
