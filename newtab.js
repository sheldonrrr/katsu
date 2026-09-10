(() => {
  const verseEl = document.getElementById("verse");
  const sourceEl = document.getElementById("source");
  const sayingEl = document.getElementById("saying");
  const switchEl = document.getElementById("katsu-switch");
  const corpusEl = document.getElementById("katsu-corpus");
  const LAST_PREFIX = "katsu:last:";
  const CORPUS_KEY = "katsu:corpus";
  const LABELS = { buddhist: "佛典", bible: "圣经", llm: "大模型" };
  const ORDER = ["buddhist", "bible", "llm"];

  let corpus = readCorpus();
  let pool = CORPORA[corpus];
  const params = new URLSearchParams(location.search);
  const forced = Number.parseInt(params.get("i"), 10);
  let index =
    Number.isInteger(forced) && pool[forced] ? forced : pickIndex();
  render(pool[index], false);
  sayingEl.classList.add("is-entering");
  window.addEventListener("resize", () => fitVerse(pool[index]));
  switchEl.addEventListener("click", toggleCorpus);

  function toggleCorpus() {
    const i = ORDER.indexOf(corpus);
    setCorpus(ORDER[(i + 1) % ORDER.length]);
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
    sayingEl.classList.toggle("is-bible", latin);
    verseEl.classList.toggle("is-bible", latin);

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

  function paintSwitch() {
    corpusEl.textContent = LABELS[corpus];
    switchEl.setAttribute("aria-label", `切换语料，当前${LABELS[corpus]}`);
  }

  function fitVerse(saying) {
    const text = saying.text;
    verseEl.style.removeProperty("letter-spacing");
    verseEl.style.removeProperty("text-indent");
    verseEl.style.removeProperty("font-size");

    paintVerse(text, false, saying.gloss);
    if (fits()) return;

    const computed = getComputedStyle(verseEl);
    const baseSize = parseFloat(computed.fontSize);
    const baseTrack = parseFloat(computed.letterSpacing) || 0;

    for (const scale of [0.92, 0.84, 0.76]) {
      verseEl.style.fontSize = `${baseSize * scale}px`;
      verseEl.style.letterSpacing = `${baseTrack * scale}px`;
      verseEl.style.textIndent = `${baseTrack * scale}px`;
      paintVerse(text, false, saying.gloss);
      if (fits()) return;
    }

    verseEl.style.removeProperty("letter-spacing");
    verseEl.style.removeProperty("text-indent");
    verseEl.style.removeProperty("font-size");

    if (isLatin(text)) {
      paintVerse(text, true, saying.gloss);
      return;
    }

    if (text.includes("，")) {
      paintVerse(text, true, saying.gloss);
    }
  }

  function paintSource(saying) {
    const href = SOURCE_WIKI[saying.source];
    sourceEl.replaceChildren();
    if (!href) {
      sourceEl.textContent = `《${saying.source}》`;
      return;
    }

    const link = document.createElement("a");
    link.className = "source-link";
    link.href = href;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    link.textContent = `《${saying.source}》`;
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
    mark.textContent = "释";
    mark.setAttribute("aria-label", "释");
    mark.setAttribute("aria-describedby", "gloss-tip");
    mark.addEventListener("click", (event) => event.stopPropagation());

    const tip = document.createElement("span");
    tip.id = "gloss-tip";
    tip.className = "gloss-tip";
    tip.setAttribute("role", "tooltip");
    tip.textContent = gloss;

    end.append(mark, tip);
    frag.append(end);
    return frag;
  }

  function fits() {
    const stage = document.querySelector(".stage");
    const style = getComputedStyle(stage);
    const pad =
      parseFloat(style.paddingLeft) + parseFloat(style.paddingRight);
    const budget = Math.min(stage.clientWidth - pad, window.innerWidth * 0.94);
    return verseEl.scrollWidth <= budget + 1;
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
      if (raw === "bible" || raw === "buddhist" || raw === "llm") return raw;
    } catch {
      // fall through
    }
    return "buddhist";
  }

  function isLatin(text) {
    return !/[\u3400-\u9fff]/.test(text);
  }

  function prefersReducedMotion() {
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }
})();
