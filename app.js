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

  const quizCard = `
    <div class="section-card quiz-card" data-action="goto-quiz">
      <span class="section-card-icon">🧠</span>
      <h2>Quiz Mode</h2>
      <p>Test your knowledge with flashcards. Choose categories, flip cards, and track what you know.</p>
      <div class="section-card-meta">
        <span class="section-card-count quiz-card-label">Challenge yourself →</span>
        <span class="section-card-arrow quiz-arrow">⚡</span>
      </div>
    </div>`;

  return `
    <div class="home-intro">
      <h2>Landmark Cardiology Trials</h2>
      <p>A curated reference for Cardiology Fellows — explore by topic, browse by subtopic, or search any trial.</p>
      <span class="trial-count-badge">${totalTrials()} landmark trials</span>
    </div>
    <div class="section-grid">${cards}${quizCard}</div>`;
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
