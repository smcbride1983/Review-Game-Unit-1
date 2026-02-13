/* fill-in.js
   Loads an existing deck file and runs the fill-in-the-blank UI.
   Put this in: fill-in/fill-in.js
   Ensure your HTML includes at bottom:
     <script src="./data/fill-in_decks.js"></script>
     <script src="./fill-in.js"></script>
*/

(() => {
  "use strict";

  // ---------- DOM ----------
  const $ = (id) => document.getElementById(id);

  const levelSelect = $("levelSelect");
  const sentenceEl  = $("sentence");
  const inputEl     = $("answerInput");
  const hintTextEl  = $("hintText");
  const feedbackEl  = $("feedback");

  const qNumEl   = $("qNum");
  const qTotalEl = $("qTotal");
  const scoreEl  = $("score");
  const streakEl = $("streak");

  const nextBtn   = $("nextBtn");
  const checkBtn  = $("checkBtn");
  const hintBtn   = $("hintBtn");
  const revealBtn = $("revealBtn");
  const shuffleBtn= $("shuffleBtn");
  const resetBtn  = $("resetBtn");

  const tutorialBtn   = $("tutorialBtn");
  const modalBackdrop = $("modalBackdrop");
  const closeModalBtn = $("closeModalBtn");

  const levelLabel = $("levelLabel");     // optional (if present)
  const savedStateEl = $("savedState");   // optional (if present)

  // ---------- Deck source auto-detect ----------
  function getDeckStore() {
    // Prefer FILLIN_DECKS, else GRAMMAR_DECKS, else SCENARIO_DECKS
    return (
      window.FILLIN_DECKS ||
      window.GRAMMAR_DECKS ||
      window.SCENARIO_DECKS ||
      null
    );
  }

  function normalize(s) {
    return (s ?? "")
      .trim()
      .replace(/\s+/g, " ")
      .toLowerCase();
  }

  function shuffle(arr) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  function escapeHTML(str) {
    return String(str)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#39;");
  }

  // ---------- State ----------
  const STORAGE_KEY = "grammar_fillin_state_v1";

  const state = {
    deckKey: levelSelect?.value || "",
    items: [],
    idx: 0,
    score: 0,
    streak: 0,
    usedHint: false,
    revealed: false
  };

  // ---------- UI helpers ----------
  function setSaved(on) {
    if (savedStateEl) savedStateEl.textContent = on ? "on" : "off";
  }

  function showFeedback(ok, msg) {
    feedbackEl.style.display = "block";
    feedbackEl.className = "feedback " + (ok ? "good" : "bad");
    feedbackEl.textContent = msg;
  }

  function clearFeedback() {
    feedbackEl.style.display = "none";
    feedbackEl.className = "feedback";
    feedbackEl.textContent = "";
  }

  function render() {
    const item = state.items[state.idx];

    qTotalEl.textContent = String(state.items.length);
    qNumEl.textContent   = state.items.length ? String(state.idx + 1) : "0";
    scoreEl.textContent  = String(state.score);
    streakEl.textContent = String(state.streak);

    if (levelLabel) levelLabel.textContent = state.deckKey;

    hintTextEl.textContent = "";
    clearFeedback();

    state.usedHint = false;
    state.revealed = false;

    if (!item) {
      sentenceEl.textContent = "No items found for this deck key.";
      inputEl.value = "";
      return;
    }

    // Accept several common field names:
    const rawText = item.prompt_de || item.text || item.prompt || item.sentence || "";
    // Show a visible blank even if deck uses "_____" or "{blank}"
    const display = escapeHTML(rawText)
      .replace("_____", "<span class='blank'>_____</span>")
      .replace("{blank}", "<span class='blank'>_____</span>");

    sentenceEl.innerHTML = display;

    inputEl.value = "";
    inputEl.focus();
  }

  // ---------- Deck loading ----------
  function coerceToItems(deckValue) {
    // Your deck file might be:
    //  - array of items
    //  - object with .items or .cards
    if (Array.isArray(deckValue)) return deckValue;
    if (deckValue && Array.isArray(deckValue.items)) return deckValue.items;
    if (deckValue && Array.isArray(deckValue.cards)) return deckValue.cards;
    return [];
  }

  function loadDeck(deckKey) {
    const store = getDeckStore();

    if (!store) {
      // This is the MOST common issue: deck script didn't load or name mismatch
      sentenceEl.textContent =
        "Deck store not found. Your deck file loaded, but it did not define window.FILLIN_DECKS / window.GRAMMAR_DECKS / window.SCENARIO_DECKS.";
      qNumEl.textContent = "0";
      qTotalEl.textContent = "0";
      return;
    }

    const deckValue = store[deckKey];
    const items = coerceToItems(deckValue);

    state.deckKey = deckKey;
    state.items = shuffle(items);
    state.idx = 0;
    state.score = 0;
    state.streak = 0;

    saveState();
    render();
  }

  // ---------- Answer / hint ----------
  function currentAnswer() {
    const item = state.items[state.idx];
    if (!item) return "";
    // common answer fields:
    return String(item.answer ?? item.correct ?? item.solution ?? "");
  }

  function currentHint() {
    const item = state.items[state.idx];
    if (!item) return "";
  return String(item.hint_en ?? item.hint ?? item.clue ?? item.help ?? "");
  }

  function doHint() {
    const h = currentHint();
    if (!h) {
      hintTextEl.textContent = "No hint available.";
      state.usedHint = true;
      return;
    }
    state.usedHint = true;
    hintTextEl.textContent = "Hint: " + h;
  }

  function doReveal() {
    const ans = currentAnswer();
    state.revealed = true;
    state.streak = 0;
    showFeedback(false, `Answer: "${ans}"`);
    saveState();
  }

  function doCheck() {
    const ans = currentAnswer();
    const user = inputEl.value;

    const ok = normalize(user) === normalize(ans);

    if (ok) {
      const points = state.revealed ? 0 : (state.usedHint ? 1 : 2);
      state.score += points;
      state.streak += 1;
      showFeedback(true, `Correct (+${points})`);
      saveState();
    } else {
      state.streak = 0;
      showFeedback(false, "Not quite — try again or use Hint.");
      saveState();
    }
    streakEl.textContent = String(state.streak);
    scoreEl.textContent = String(state.score);
  }

  function doNext() {
    if (!state.items.length) return;
    if (state.idx < state.items.length - 1) {
      state.idx += 1;
      saveState();
      render();
    } else {
      showFeedback(true, `Done! Final score: ${state.score}`);
    }
  }

  function doShuffle() {
    state.items = shuffle(state.items);
    state.idx = 0;
    saveState();
    render();
  }

  function doReset() {
    localStorage.removeItem(STORAGE_KEY);
    setSaved(false);
    loadDeck(levelSelect.value);
  }

  // ---------- Tutorial modal (optional; only if elements exist) ----------
  function openTutorial() {
    if (!modalBackdrop) return;
    modalBackdrop.style.display = "flex";
    closeModalBtn?.focus?.();
  }
  function closeTutorial() {
    if (!modalBackdrop) return;
    modalBackdrop.style.display = "none";
    tutorialBtn?.focus?.();
  }

  // ---------- Persistence ----------
  function saveState() {
    try {
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({
          deckKey: state.deckKey,
          idx: state.idx,
          score: state.score,
          streak: state.streak,
          items: state.items
        })
      );
      setSaved(true);
    } catch {
      setSaved(false);
    }
  }

  function restoreState() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return false;
      const s = JSON.parse(raw);
      if (!s || !s.deckKey) return false;

      state.deckKey = s.deckKey;
      state.items = Array.isArray(s.items) ? s.items : [];
      state.idx = Math.max(0, Math.min(s.idx ?? 0, state.items.length - 1));
      state.score = s.score ?? 0;
      state.streak = s.streak ?? 0;

      // sync dropdown if option exists
      if (levelSelect && [...levelSelect.options].some(o => o.value === state.deckKey)) {
        levelSelect.value = state.deckKey;
      }

      setSaved(true);
      render();
      return true;
    } catch {
      return false;
    }
  }

  // ---------- Wiring ----------
  function wireEvents() {
    levelSelect.addEventListener("change", () => loadDeck(levelSelect.value));

    checkBtn.addEventListener("click", doCheck);
    hintBtn.addEventListener("click", doHint);
    revealBtn.addEventListener("click", doReveal);
    nextBtn.addEventListener("click", doNext);
    shuffleBtn.addEventListener("click", doShuffle);
    resetBtn.addEventListener("click", doReset);

    inputEl.addEventListener("keydown", (e) => {
      if (e.key === "Enter") doCheck();
    });

    // keyboard shortcuts
    document.addEventListener("keydown", (e) => {
      if (modalBackdrop && modalBackdrop.style.display === "flex") {
        if (e.key === "Escape") closeTutorial();
        return;
      }
      if (e.key.toLowerCase() === "h") doHint();
      if (e.key.toLowerCase() === "n") doNext();
      if (e.key === "?") openTutorial();
    });

    // tutorial modal hookups (only if modal exists in your HTML)
    tutorialBtn?.addEventListener?.("click", openTutorial);
    closeModalBtn?.addEventListener?.("click", closeTutorial);
    modalBackdrop?.addEventListener?.("click", (e) => {
      if (e.target === modalBackdrop) closeTutorial();
    });
  }

  // ---------- Init ----------
  document.addEventListener("DOMContentLoaded", () => {
    wireEvents();

    // Try restore; otherwise load current dropdown deck
    if (!restoreState()) {
      loadDeck(levelSelect.value);
    }
  });
})();
