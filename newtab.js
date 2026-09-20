(() => {
  const verseEl = document.getElementById("verse");
  const sourceEl = document.getElementById("source");
  const sayingEl = document.getElementById("saying");
  const switchEl = document.getElementById("katsu-switch");
  const langEl = document.getElementById("katsu-lang");
  const wordEl = document.getElementById("katsu-word");
  const corpusEl = document.getElementById("katsu-corpus");
  const barEl = document.querySelector(".katsu-bar");
  const dialogEl = document.getElementById("lang-dialog");
  const dialogTitleEl = document.getElementById("lang-dialog-title");
  const dialogListEl = document.getElementById("lang-dialog-list");
  const LAST_PREFIX = "katsu:last:";
  const CORPUS_KEY = "katsu:corpus";
  const ORDER = ["buddhist", "haiku", "bible", "llm"];
  const CORPUS_IDS = new Set(ORDER);
  const QUOTE_ICON =
    "M16 8c0 3.866-3.582 7-8 7a9 9 0 0 1-2.347-.306c-.584.296-1.925.864-4.181 1.234-.2.032-.352-.176-.273-.362.354-.836.674-1.95.77-2.966C.744 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7M7.194 6.766a1.7 1.7 0 0 0-.227-.272 1.5 1.5 0 0 0-.469-.324l-.008-.004A1.8 1.8 0 0 0 5.734 6C4.776 6 4 6.746 4 7.667c0 .92.776 1.666 1.734 1.666.343 0 .662-.095.931-.26-.137.389-.39.804-.81 1.22a.405.405 0 0 0 .011.59c.173.16.447.155.614-.01 1.334-1.329 1.37-2.758.941-3.706a2.5 2.5 0 0 0-.227-.4zM11 9.073c-.136.389-.39.804-.81 1.22a.405.405 0 0 0 .012.59c.172.16.446.155.613-.01 1.334-1.329 1.37-2.758.942-3.706a2.5 2.5 0 0 0-.228-.4 1.7 1.7 0 0 0-.227-.273 1.5 1.5 0 0 0-.469-.324l-.008-.004A1.8 1.8 0 0 0 10.07 6c-.957 0-1.734.746-1.734 1.667 0 .92.777 1.666 1.734 1.666.343 0 .662-.095.931-.26z";

  let locale = detectLocale();
  let corpus = readCorpus();
  let pool = CORPORA[corpus];
  const params = new URLSearchParams(location.search);
  const forced = Number.parseInt(params.get("i"), 10);
  let index =
    Number.isInteger(forced) && pool[forced] ? forced : pickIndex();
  applyLocaleChrome();
  render(pool[index], false);
  sayingEl.classList.add("is-entering");
  barEl.classList.add("is-ready");
  window.addEventListener("resize", () => fitVerse(pool[index]));
  buildLangDialog();
  switchEl.addEventListener("click", toggleCorpus);
  langEl.addEventListener("click", openLangDialog);
  dialogEl.addEventListener("click", onDialogBackdrop);
  dialogEl.addEventListener("close", () => {
    langEl.setAttribute("aria-expanded", "false");
  });

  function toggleCorpus() {
    const i = ORDER.indexOf(corpus);
    setCorpus(ORDER[(i + 1) % ORDER.length]);
  }

  function buildLangDialog() {
    dialogListEl.replaceChildren();
    LOCALES.forEach((id) => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "lang-option";
      btn.dataset.locale = id;
      btn.textContent = LOCALE_NATIVE[id];
      btn.addEventListener("click", () => {
        setLocale(id);
        dialogEl.close();
      });
      dialogListEl.append(btn);
    });
  }

  function openLangDialog() {
    paintLangDialog();
    langEl.setAttribute("aria-expanded", "true");
    dialogEl.showModal();
    const current = dialogListEl.querySelector(`[data-locale="${locale}"]`);
    if (current) current.focus();
  }

  function onDialogBackdrop(event) {
    if (event.target === dialogEl) dialogEl.close();
  }

  function paintLangDialog() {
    const ui = t(locale);
    dialogTitleEl.textContent = ui.chooseLang;
    dialogListEl.querySelectorAll(".lang-option").forEach((btn) => {
      const current = btn.dataset.locale === locale;
      btn.classList.toggle("is-current", current);
      if (current) btn.setAttribute("aria-current", "true");
      else btn.removeAttribute("aria-current");
    });
  }

  function setLocale(next) {
    if (next === locale) return;
    locale = next;
    persistLocale(locale);
    applyLocaleChrome();
    paintLangDialog();
    paintSource(pool[index]);
    paintSwitch();
    fitVerse(pool[index]);
  }

  function setCorpus(next) {
    if (next === corpus) return;
    corpus = next;
    pool = CORPORA[corpus];
    persistCorpus(corpus);
    index = pickIndex();
    render(pool[index], true);
  }

  function render(saying, animate) {
    paintSource(saying);
    document.title = saying.text;
    persistLast(index);
    paintSwitch();
    const latin = isLatin(saying.text);
    const haiku = corpus === "haiku";
    sayingEl.classList.toggle("is-bible", latin);
    sayingEl.classList.toggle("is-haiku", haiku);
    verseEl.classList.toggle("is-bible", latin);
    verseEl.classList.toggle("is-haiku", haiku);

    verseEl.classList.remove("is-flash", "is-short", "is-long", "is-wrapped");
    verseEl.classList.add(sizeClass(saying.text));

    if (animate && !prefersReducedMotion()) {
      sayingEl.classList.remove("is-entering");
      sayingEl.classList.add("is-leaving");
      window.setTimeout(() => {
        sayingEl.classList.remove("is-leaving");
        fitVerse(saying);
        sayingEl.classList.add("is-entering");
      }, 280);
      return;
    }

    fitVerse(saying);
  }

  function applyLocaleChrome() {
    const ui = t(locale);
    document.documentElement.lang = ui.htmlLang;
    document.documentElement.dataset.locale = locale;
    wordEl.textContent = ui.name;
    langEl.setAttribute("aria-label", ui.switchLang);
  }

  function paintSwitch() {
    const ui = t(locale);
    const label = ui.corpora[corpus];
    corpusEl.textContent = label;
    switchEl.setAttribute("aria-label", ui.switchCorpus(label));
  }

  function fitVerse(saying) {
    const text = saying.text;
    verseEl.style.removeProperty("letter-spacing");
    verseEl.style.removeProperty("text-indent");
    verseEl.style.removeProperty("font-size");

    paintVerse(text, false, glossOf(saying, locale));
    if (fits()) return;

    const computed = getComputedStyle(verseEl);
    const baseSize = parseFloat(computed.fontSize);
    const baseTrack = parseFloat(computed.letterSpacing) || 0;

    for (const scale of [0.92, 0.84, 0.76]) {
      verseEl.style.fontSize = `${baseSize * scale}px`;
      verseEl.style.letterSpacing = `${baseTrack * scale}px`;
      verseEl.style.textIndent = `${baseTrack * scale}px`;
      paintVerse(text, false, glossOf(saying, locale));
      if (fits()) return;
    }

    verseEl.style.removeProperty("letter-spacing");
    verseEl.style.removeProperty("text-indent");
    verseEl.style.removeProperty("font-size");

    paintVerse(text, true, glossOf(saying, locale));
  }

  function paintSource(saying) {
    const href = sourceHref(saying.source, locale);
    const label = formatSource(saying.source, locale);
    sourceEl.replaceChildren();
    if (!href) {
      sourceEl.textContent = label;
      return;
    }

    const link = document.createElement("a");
    link.className = "source-link";
    link.href = href;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    link.textContent = label;
    link.addEventListener("click", (event) => event.stopPropagation());
    sourceEl.append(link);
  }

  function paintVerse(text, wrapped, gloss) {
    verseEl.replaceChildren();
    verseEl.classList.toggle("is-wrapped", wrapped);

    const parts =
      wrapped && text.includes("，") ? text.split("，") : [text];
    parts.forEach((part, i) => {
      if (i > 0) verseEl.append(document.createElement("br"));
      const chunk = i < parts.length - 1 ? `${part}，` : part;
      if (i === parts.length - 1) {
        verseEl.append(withGloss(chunk, gloss));
      } else {
        verseEl.append(chunk);
      }
    });
  }

  function withGloss(chunk, gloss) {
    const ui = t(locale);
    const frag = document.createDocumentFragment();
    const last = chunk.slice(-1);
    const lead = chunk.slice(0, -1);
    if (lead) frag.append(document.createTextNode(lead));

    const end = document.createElement("span");
    end.className = "verse-end";
    end.append(document.createTextNode(last));

    const mark = document.createElement("button");
    mark.type = "button";
    mark.className = "gloss";
    if (locale === "en") {
      mark.classList.add("is-icon");
      mark.append(quoteIcon());
    } else {
      mark.textContent = ui.gloss;
    }
    mark.setAttribute("aria-label", ui.glossLabel);
    mark.setAttribute("aria-describedby", "gloss-tip");
    mark.addEventListener("click", (event) => event.stopPropagation());

    const tip = document.createElement("span");
    tip.id = "gloss-tip";
    tip.className = "gloss-tip";
    tip.setAttribute("role", "tooltip");
    tip.lang = ui.htmlLang;
    tip.textContent = gloss;

    end.append(mark, tip);
    frag.append(end);
    return frag;
  }

  function quoteIcon() {
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("viewBox", "0 0 16 16");
    svg.setAttribute("aria-hidden", "true");
    svg.setAttribute("focusable", "false");
    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.setAttribute("d", QUOTE_ICON);
    svg.append(path);
    return svg;
  }

  function fits() {
    const stage = document.querySelector(".stage");
    const style = getComputedStyle(stage);
    const pad =
      parseFloat(style.paddingLeft) + parseFloat(style.paddingRight);
    return verseEl.scrollWidth <= stage.clientWidth - pad + 1;
  }

  function sizeClass(text) {
    if (text.length <= 2) return "is-flash";
    if (text.length > 16) return "is-long";
    return "is-short";
  }

  function pickIndex() {
    const last = readLast();
    if (pool.length === 1) return 0;

    let nextIndex = Math.floor(Math.random() * pool.length);
    while (nextIndex === last) {
      nextIndex = Math.floor(Math.random() * pool.length);
    }
    return nextIndex;
  }

  function persistLast(value) {
    try {
      localStorage.setItem(`${LAST_PREFIX}${corpus}`, String(value));
    } catch {
      // Private mode or blocked storage should not stop the page.
    }
  }

  function persistCorpus(value) {
    try {
      localStorage.setItem(CORPUS_KEY, value);
    } catch {
      // Private mode or blocked storage should not stop the page.
    }
  }

  function readLast() {
    try {
      const raw = localStorage.getItem(`${LAST_PREFIX}${corpus}`);
      const value = Number.parseInt(raw, 10);
      return Number.isInteger(value) ? value : undefined;
    } catch {
      return undefined;
    }
  }

  function readCorpus() {
    try {
      const raw = localStorage.getItem(CORPUS_KEY);
      if (CORPUS_IDS.has(raw)) return raw;
    } catch {
      // fall through
    }
    return "buddhist";
  }

  function isLatin(text) {
    return !/[\u3040-\u30ff\u3400-\u9fff\uff66-\uff9d]/.test(text);
  }

  function prefersReducedMotion() {
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }
})();
