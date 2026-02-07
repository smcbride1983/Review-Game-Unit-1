(function () {
  "use strict";

  const $ = (id) => document.getElementById(id);

  const els = {
    deckSelect: $("deckSelect"),
    categorySelect: $("categorySelect"),
    startBtn: $("startBtn"),
    restartBtn: $("restartBtn"),
    submitBtn: $("submitBtn"),
    nextBtn: $("nextBtn"),
    promptText: $("promptText"),
    choicesArea: $("choicesArea"),
    feedbackBox: $("feedbackBox"),
    progressText: $("progressText"),
    categoryText: $("categoryText"),
    scorePill: $("scorePill"),
    statusPill: $("statusPill"),
    emptyState: $("emptyState"),
    gameArea: $("gameArea")
  };

  const state = {
    deckName: null,
    category: "__ALL__",
    order: [],
    idx: 0,
    correct: 0,
    total: 0,
    answered: false,
    current: null
  };

  function shuffle(arr) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  function unique(arr) {
    return Array.from(new Set(arr));
  }

  function escapeHtml(s) {
    return String(s)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");
  }

  function setStatus(txt) {
    els.statusPill.textContent = txt;
  }

  function setScore() {
    els.scorePill.textContent = `Score: ${state.correct}/${state.total}`;
  }

  function initDeckDropdown() {
    const decks = window.SCENARIO_DECKS || {};
    const names = Object.keys(decks).sort();

    els.deckSelect.innerHTML = "";
    if (names.length === 0) {
      const opt = document.createElement("option");
      opt.value = "";
      opt.textContent = "No scenario decks loaded";
      els.deckSelect.appendChild(opt);
      els.startBtn.disabled = true;
      els.categorySelect.disabled = true;
      return;
    }

    for (const name of names) {
      const opt = document.createElement("option");
      opt.value = name;
      opt.textContent = name;
      els.deckSelect.appendChild(opt);
    }

    els.startBtn.disabled = false;
    els.categorySelect.disabled = false;
    state.deckName = els.deckSelect.value;
    refreshCategories();
  }

  function refreshCategories() {
    const deck = (window.SCENARIO_DECKS || {})[els.deckSelect.value] || [];
    const cats = unique(deck.map(q => q.category).filter(Boolean)).sort();

    els.categorySelect.innerHTML = "";
    const allOpt = document.createElement("option");
    allOpt.value = "__ALL__";
    allOpt.textContent = "All categories";
    els.categorySelect.appendChild(allOpt);

    for (const c of cats) {
      const opt = document.createElement("option");
      opt.value = c;
      opt.textContent = c;
      els.categorySelect.appendChild(opt);
    }

    els.categorySelect.value = "__ALL__";
    state.category = "__ALL__";
  }

  function buildOrder() {
    const deck = (window.SCENARIO_DECKS || {})[state.deckName] || [];
    let pool = deck;

    if (state.category !== "__ALL__") {
      pool = deck.filter(q => q.category === state.category);
    }

    // Validate format
    pool = pool.filter(q =>
      q && typeof q.prompt === "string" &&
      Array.isArray(q.choices) && q.choices.length === 4 &&
      typeof q.answer === "string"
    );

    state.order = shuffle(pool);
    state.idx = 0;
    state.correct = 0;
    state.total = 0;
    state.answered = false;
    state.current = null;

    setStatus("In progress");
    setScore();
  }

  function renderQuestion() {
    els.feedbackBox.style.display = "none";
    els.feedbackBox.className = "feedback";
    els.feedbackBox.textContent = "";

    const q = state.order[state.idx];
    state.current = q;
    state.answered = false;

    if (!q) {
      els.promptText.textContent = "Done!";
      els.choicesArea.innerHTML = "";
      els.submitBtn.disabled = true;
      els.nextBtn.disabled = true;

      const pct = state.total ? Math.round((state.correct / state.total) * 100) : 0;
      els.feedbackBox.style.display = "block";
      els.feedbackBox.className = "feedback ok";
      els.feedbackBox.textContent = `Finished: ${state.correct}/${state.total} (${pct}%)`;
      setStatus("Finished");
      return;
    }

    els.progressText.textContent = `Question ${state.idx + 1} of ${state.order.length}`;
    els.categoryText.textContent = `Category: ${q.category || "—"}`;
    els.promptText.textContent = q.prompt;

    const displayChoices = shuffle(q.choices.slice());
    els.choicesArea.innerHTML = "";

    displayChoices.forEach((choice, i) => {
      const id = `ch_${state.idx}_${i}`;
      const div = document.createElement("label");
      div.className = "choice";
      div.innerHTML = `
        <input type="radio" name="choice" id="${id}" value="${escapeHtml(choice)}" />
        <div><b>${escapeHtml(choice)}</b></div>
      `;
      els.choicesArea.appendChild(div);
    });

    els.submitBtn.disabled = false;
    els.nextBtn.disabled = true;
  }

  function getSelected() {
    const checked = document.querySelector('input[name="choice"]:checked');
    return checked ? checked.value : null;
  }

  function submit() {
    if (!state.current || state.answered) return;

    const selected = getSelected();
    if (!selected) {
      els.feedbackBox.style.display = "block";
      els.feedbackBox.className = "feedback bad";
      els.feedbackBox.textContent = "Pick an answer first.";
      return;
    }

    state.answered = true;
    state.total += 1;

    const correct = (selected === state.current.answer);
    if (correct) state.correct += 1;

    setScore();

    els.feedbackBox.style.display = "block";
    els.feedbackBox.className = "feedback " + (correct ? "ok" : "bad");
    els.feedbackBox.textContent = correct ? "Correct." : `Incorrect. Correct answer: ${state.current.answer}`;

    els.submitBtn.disabled = true;
    els.nextBtn.disabled = false;
  }

  function next() {
    if (!state.current) return;
    state.idx += 1;
    renderQuestion();
  }

  // ---------- Wire up UI ----------
  els.deckSelect.addEventListener("change", () => {
    state.deckName = els.deckSelect.value;
    refreshCategories();
  });

  els.categorySelect.addEventListener("change", () => {
    state.category = els.categorySelect.value;
  });

  els.startBtn.addEventListener("click", () => {
    state.deckName = els.deckSelect.value;
    state.category = els.categorySelect.value;

    buildOrder();

    els.emptyState.style.display = "none";
    els.gameArea.style.display = "block";
    els.restartBtn.disabled = false;

    if (state.order.length === 0) {
      els.promptText.textContent = "No valid questions found for that deck/category.";
      els.choicesArea.innerHTML = "";
      els.submitBtn.disabled = true;
      els.nextBtn.disabled = true;
      setStatus("Empty");
      return;
    }

    renderQuestion();
  });

  els.restartBtn.addEventListener("click", () => {
    if (!state.deckName) return;
    buildOrder();
    renderQuestion();
  });

  els.submitBtn.addEventListener("click", submit);
  els.nextBtn.addEventListener("click", next);

  // ---------- Boot ----------
  setStatus("Not started");
  setScore();
  initDeckDropdown();

})();
