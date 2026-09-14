const LOCALES = ["zh-Hans", "zh-Hant", "ja", "en"];
const LOCALE_KEY = "katsu:locale";

const UI = {
  "zh-Hans": {
    name: "棒喝",
    gloss: "释",
    glossLabel: "解释",
    htmlLang: "zh-Hans",
    corpora: { buddhist: "佛典", haiku: "俳句", bible: "圣经", llm: "大模型" },
    switchCorpus: (label) => `切换语料，当前${label}`,
    switchLang: "切换语言",
    chooseLang: "选择界面语言"
  },
  "zh-Hant": {
    name: "棒喝",
    gloss: "釋",
    glossLabel: "解釋",
    htmlLang: "zh-Hant",
    corpora: { buddhist: "佛典", haiku: "俳句", bible: "聖經", llm: "大模型" },
    switchCorpus: (label) => `切換語料，目前${label}`,
    switchLang: "切換語言",
    chooseLang: "選擇介面語言"
  },
  ja: {
    name: "喝",
    gloss: "釈",
    glossLabel: "解説",
    htmlLang: "ja",
    corpora: { buddhist: "仏典", haiku: "俳句", bible: "聖書", llm: "LLM" },
    switchCorpus: (label) => `コーパスを切替、現在は${label}`,
    switchLang: "言語を切替",
    chooseLang: "表示言語"
  },
  en: {
    name: "Katsu",
    gloss: "?",
    glossLabel: "Explain",
    htmlLang: "en",
    corpora: { buddhist: "Sutras", haiku: "Haiku", bible: "Bible", llm: "Models" },
    switchCorpus: (label) => `Switch corpus, current ${label}`,
    switchLang: "Switch language",
    chooseLang: "Interface language"
  }
};

const LOCALE_NATIVE = {
  "zh-Hans": "简体中文",
  "zh-Hant": "繁體中文",
  ja: "日本語",
  en: "English"
};

const SOURCE_META = {
  圓覺經: {
    title: {
      "zh-Hans": "圆觉经",
      "zh-Hant": "圓覺經",
      ja: "円覚経",
      en: "Sutra of Perfect Enlightenment"
    },
    wiki: {
      "zh-Hans": "https://zh.wikipedia.org/wiki/圓覺經",
      "zh-Hant": "https://zh.wikipedia.org/wiki/圓覺經",
      ja: "https://ja.wikipedia.org/wiki/円覚経",
      en: "https://en.wikipedia.org/wiki/Sutra_of_Perfect_Enlightenment"
    }
  },
  楞嚴經: {
    title: {
      "zh-Hans": "楞严经",
      "zh-Hant": "楞嚴經",
      ja: "楞厳経",
      en: "Shurangama Sutra"
    },
    wiki: {
      "zh-Hans": "https://zh.wikipedia.org/wiki/楞嚴經",
      "zh-Hant": "https://zh.wikipedia.org/wiki/楞嚴經",
      ja: "https://ja.wikipedia.org/wiki/楞厳経",
      en: "https://en.wikipedia.org/wiki/Shurangama_Sutra"
    }
  },
  維摩詰所說經: {
    title: {
      "zh-Hans": "维摩诘所说经",
      "zh-Hant": "維摩詰所說經",
      ja: "維摩経",
      en: "Vimalakirti Sutra"
    },
    wiki: {
      "zh-Hans": "https://zh.wikipedia.org/wiki/維摩詰經",
      "zh-Hant": "https://zh.wikipedia.org/wiki/維摩詰經",
      ja: "https://ja.wikipedia.org/wiki/維摩経",
      en: "https://en.wikipedia.org/wiki/Vimalakirti_Sutra"
    }
  },
  妙法蓮華經: {
    title: {
      "zh-Hans": "妙法莲华经",
      "zh-Hant": "妙法蓮華經",
      ja: "法華経",
      en: "Lotus Sutra"
    },
    wiki: {
      "zh-Hans": "https://zh.wikipedia.org/wiki/妙法蓮華經",
      "zh-Hant": "https://zh.wikipedia.org/wiki/妙法蓮華經",
      ja: "https://ja.wikipedia.org/wiki/法華経",
      en: "https://en.wikipedia.org/wiki/Lotus_Sutra"
    }
  },
  華嚴經: {
    title: {
      "zh-Hans": "华严经",
      "zh-Hant": "華嚴經",
      ja: "華厳経",
      en: "Avatamsaka Sutra"
    },
    wiki: {
      "zh-Hans": "https://zh.wikipedia.org/wiki/華嚴經",
      "zh-Hant": "https://zh.wikipedia.org/wiki/華嚴經",
      ja: "https://ja.wikipedia.org/wiki/華厳経",
      en: "https://en.wikipedia.org/wiki/Avatamsaka_Sutra"
    }
  },
  楞伽經: {
    title: {
      "zh-Hans": "楞伽经",
      "zh-Hant": "楞伽經",
      ja: "楞伽経",
      en: "Lankavatara Sutra"
    },
    wiki: {
      "zh-Hans": "https://zh.wikipedia.org/wiki/楞伽經",
      "zh-Hant": "https://zh.wikipedia.org/wiki/楞伽經",
      ja: "https://ja.wikipedia.org/wiki/楞伽経",
      en: "https://en.wikipedia.org/wiki/La%E1%B9%85k%C4%81vat%C4%81ra_S%C5%ABtra"
    }
  },
  勝鬘經: {
    title: {
      "zh-Hans": "胜鬘经",
      "zh-Hant": "勝鬘經",
      ja: "勝鬘経",
      en: "Srimala Sutra"
    },
    wiki: {
      "zh-Hans": "https://zh.wikipedia.org/wiki/勝鬘經",
      "zh-Hant": "https://zh.wikipedia.org/wiki/勝鬘經",
      ja: "https://ja.wikipedia.org/wiki/勝鬘経",
      en: "https://en.wikipedia.org/wiki/%C5%9Ar%C4%ABm%C4%81l%C4%81dev%C4%AB_Si%E1%B9%83han%C4%81da_S%C5%ABtra"
    }
  },
  解深密經: {
    title: {
      "zh-Hans": "解深密经",
      "zh-Hant": "解深密經",
      ja: "解深密経",
      en: "Samdhinirmocana Sutra"
    },
    wiki: {
      "zh-Hans": "https://zh.wikipedia.org/wiki/解深密經",
      "zh-Hant": "https://zh.wikipedia.org/wiki/解深密經",
      ja: "https://ja.wikipedia.org/wiki/解深密経",
      en: "https://en.wikipedia.org/wiki/Sa%E1%B9%83dhinirmocana_S%C5%ABtra"
    }
  },
  思益梵天所問經: {
    title: {
      "zh-Hans": "思益梵天所问经",
      "zh-Hant": "思益梵天所問經",
      ja: "思益梵天所問経",
      en: "Questions of Brahma"
    },
    wiki: {
      "zh-Hans": "https://zh.wikipedia.org/wiki/思益梵天所問經",
      "zh-Hant": "https://zh.wikipedia.org/wiki/思益梵天所問經",
      ja: "https://zh.wikipedia.org/wiki/思益梵天所問經",
      en: "https://zh.wikipedia.org/wiki/思益梵天所問經"
    }
  },
  臨濟錄: {
    title: {
      "zh-Hans": "临济录",
      "zh-Hant": "臨濟錄",
      ja: "臨済録",
      en: "Record of Linji"
    },
    wiki: {
      "zh-Hans": "https://zh.wikipedia.org/wiki/臨濟錄",
      "zh-Hant": "https://zh.wikipedia.org/wiki/臨濟錄",
      ja: "https://ja.wikipedia.org/wiki/臨済録",
      en: "https://en.wikipedia.org/wiki/Linji_Yixuan"
    }
  },
  約伯記: {
    title: {
      "zh-Hans": "约伯记",
      "zh-Hant": "約伯記",
      ja: "ヨブ記",
      en: "Job"
    },
    wiki: {
      "zh-Hans": "https://zh.wikipedia.org/wiki/約伯記",
      "zh-Hant": "https://zh.wikipedia.org/wiki/約伯記",
      ja: "https://ja.wikipedia.org/wiki/ヨブ記",
      en: "https://en.wikipedia.org/wiki/Book_of_Job"
    }
  },
  傳道書: {
    title: {
      "zh-Hans": "传道书",
      "zh-Hant": "傳道書",
      ja: "伝道の書",
      en: "Ecclesiastes"
    },
    wiki: {
      "zh-Hans": "https://zh.wikipedia.org/wiki/傳道書",
      "zh-Hant": "https://zh.wikipedia.org/wiki/傳道書",
      ja: "https://ja.wikipedia.org/wiki/コヘレトの言葉",
      en: "https://en.wikipedia.org/wiki/Ecclesiastes"
    }
  },
  箴言: {
    title: {
      "zh-Hans": "箴言",
      "zh-Hant": "箴言",
      ja: "箴言",
      en: "Proverbs"
    },
    wiki: {
      "zh-Hans": "https://zh.wikipedia.org/wiki/箴言",
      "zh-Hant": "https://zh.wikipedia.org/wiki/箴言",
      ja: "https://ja.wikipedia.org/wiki/箴言",
      en: "https://en.wikipedia.org/wiki/Book_of_Proverbs"
    }
  },
  以賽亞書: {
    title: {
      "zh-Hans": "以赛亚书",
      "zh-Hant": "以賽亞書",
      ja: "イザヤ書",
      en: "Isaiah"
    },
    wiki: {
      "zh-Hans": "https://zh.wikipedia.org/wiki/以賽亞書",
      "zh-Hant": "https://zh.wikipedia.org/wiki/以賽亞書",
      ja: "https://ja.wikipedia.org/wiki/イザヤ書",
      en: "https://en.wikipedia.org/wiki/Book_of_Isaiah"
    }
  },
  馬太福音: {
    title: {
      "zh-Hans": "马太福音",
      "zh-Hant": "馬太福音",
      ja: "マタイ福音書",
      en: "Matthew"
    },
    wiki: {
      "zh-Hans": "https://zh.wikipedia.org/wiki/馬太福音",
      "zh-Hant": "https://zh.wikipedia.org/wiki/馬太福音",
      ja: "https://ja.wikipedia.org/wiki/マタイによる福音書",
      en: "https://en.wikipedia.org/wiki/Gospel_of_Matthew"
    }
  },
  路加福音: {
    title: {
      "zh-Hans": "路加福音",
      "zh-Hant": "路加福音",
      ja: "ルカ福音書",
      en: "Luke"
    },
    wiki: {
      "zh-Hans": "https://zh.wikipedia.org/wiki/路加福音",
      "zh-Hant": "https://zh.wikipedia.org/wiki/路加福音",
      ja: "https://ja.wikipedia.org/wiki/ルカによる福音書",
      en: "https://en.wikipedia.org/wiki/Gospel_of_Luke"
    }
  },
  加拉太書: {
    title: {
      "zh-Hans": "加拉太书",
      "zh-Hant": "加拉太書",
      ja: "ガラテヤ書",
      en: "Galatians"
    },
    wiki: {
      "zh-Hans": "https://zh.wikipedia.org/wiki/加拉太書",
      "zh-Hant": "https://zh.wikipedia.org/wiki/加拉太書",
      ja: "https://ja.wikipedia.org/wiki/ガラテヤの信徒への手紙",
      en: "https://en.wikipedia.org/wiki/Epistle_to_the_Galatians"
    }
  },
  "Ted Chiang": {
    title: {
      "zh-Hans": "姜峯楠",
      "zh-Hant": "姜峯楠",
      ja: "Ted Chiang",
      en: "Ted Chiang"
    },
    wiki: {
      "zh-Hans": "https://zh.wikipedia.org/wiki/姜峯楠",
      "zh-Hant": "https://zh.wikipedia.org/wiki/姜峯楠",
      ja: "https://en.wikipedia.org/wiki/Ted_Chiang",
      en: "https://en.wikipedia.org/wiki/Ted_Chiang"
    }
  },
  "Bender & Gebru": {
    title: {
      "zh-Hans": "Bender & Gebru",
      "zh-Hant": "Bender & Gebru",
      ja: "Bender & Gebru",
      en: "Bender & Gebru"
    },
    wiki: {
      "zh-Hans": "https://zh.wikipedia.org/wiki/随机鹦鹉",
      "zh-Hant": "https://zh.wikipedia.org/wiki/随机鹦鹉",
      ja: "https://en.wikipedia.org/wiki/Stochastic_parrot",
      en: "https://en.wikipedia.org/wiki/Stochastic_parrot"
    }
  },
  "Bender & Koller": {
    title: {
      "zh-Hans": "Bender & Koller",
      "zh-Hant": "Bender & Koller",
      ja: "Bender & Koller",
      en: "Bender & Koller"
    },
    wiki: {
      "zh-Hans": "https://en.wikipedia.org/wiki/Emily_M._Bender",
      "zh-Hant": "https://en.wikipedia.org/wiki/Emily_M._Bender",
      ja: "https://en.wikipedia.org/wiki/Emily_M._Bender",
      en: "https://en.wikipedia.org/wiki/Emily_M._Bender"
    }
  },
  Hinton: {
    title: {
      "zh-Hans": "杰弗里·辛顿",
      "zh-Hant": "傑弗里·辛頓",
      ja: "Hinton",
      en: "Hinton"
    },
    wiki: {
      "zh-Hans": "https://zh.wikipedia.org/wiki/杰弗里·辛顿",
      "zh-Hant": "https://zh.wikipedia.org/wiki/杰弗里·辛顿",
      ja: "https://ja.wikipedia.org/wiki/ジェフリー・ヒントン",
      en: "https://en.wikipedia.org/wiki/Geoffrey_Hinton"
    }
  },
  "Jan Leike": {
    title: {
      "zh-Hans": "Jan Leike",
      "zh-Hant": "Jan Leike",
      ja: "Jan Leike",
      en: "Jan Leike"
    },
    wiki: {
      "zh-Hans": "https://en.wikipedia.org/wiki/Jan_Leike",
      "zh-Hant": "https://en.wikipedia.org/wiki/Jan_Leike",
      ja: "https://en.wikipedia.org/wiki/Jan_Leike",
      en: "https://en.wikipedia.org/wiki/Jan_Leike"
    }
  },
  Karpathy: {
    title: {
      "zh-Hans": "Karpathy",
      "zh-Hant": "Karpathy",
      ja: "Karpathy",
      en: "Karpathy"
    },
    wiki: {
      "zh-Hans": "https://en.wikipedia.org/wiki/Andrej_Karpathy",
      "zh-Hant": "https://en.wikipedia.org/wiki/Andrej_Karpathy",
      ja: "https://en.wikipedia.org/wiki/Andrej_Karpathy",
      en: "https://en.wikipedia.org/wiki/Andrej_Karpathy"
    }
  },
  "Shannon Vallor": {
    title: {
      "zh-Hans": "Shannon Vallor",
      "zh-Hant": "Shannon Vallor",
      ja: "Shannon Vallor",
      en: "Shannon Vallor"
    },
    wiki: {
      "zh-Hans": "https://en.wikipedia.org/wiki/Shannon_Vallor",
      "zh-Hant": "https://en.wikipedia.org/wiki/Shannon_Vallor",
      ja: "https://en.wikipedia.org/wiki/Shannon_Vallor",
      en: "https://en.wikipedia.org/wiki/Shannon_Vallor"
    }
  },
  "Melanie Mitchell": {
    title: {
      "zh-Hans": "Melanie Mitchell",
      "zh-Hant": "Melanie Mitchell",
      ja: "Melanie Mitchell",
      en: "Melanie Mitchell"
    },
    wiki: {
      "zh-Hans": "https://en.wikipedia.org/wiki/Melanie_Mitchell",
      "zh-Hant": "https://en.wikipedia.org/wiki/Melanie_Mitchell",
      ja: "https://en.wikipedia.org/wiki/Melanie_Mitchell",
      en: "https://en.wikipedia.org/wiki/Melanie_Mitchell"
    }
  },
  "Gary Marcus": {
    title: {
      "zh-Hans": "Gary Marcus",
      "zh-Hant": "Gary Marcus",
      ja: "Gary Marcus",
      en: "Gary Marcus"
    },
    wiki: {
      "zh-Hans": "https://en.wikipedia.org/wiki/Gary_Marcus",
      "zh-Hant": "https://en.wikipedia.org/wiki/Gary_Marcus",
      ja: "https://en.wikipedia.org/wiki/Gary_Marcus",
      en: "https://en.wikipedia.org/wiki/Gary_Marcus"
    }
  },
  "Simon Willison": {
    title: {
      "zh-Hans": "Simon Willison",
      "zh-Hant": "Simon Willison",
      ja: "Simon Willison",
      en: "Simon Willison"
    },
    wiki: {
      "zh-Hans": "https://en.wikipedia.org/wiki/Simon_Willison",
      "zh-Hant": "https://en.wikipedia.org/wiki/Simon_Willison",
      ja: "https://en.wikipedia.org/wiki/Simon_Willison",
      en: "https://en.wikipedia.org/wiki/Simon_Willison"
    }
  },
  Sutskever: {
    title: {
      "zh-Hans": "Sutskever",
      "zh-Hant": "Sutskever",
      ja: "Sutskever",
      en: "Sutskever"
    },
    wiki: {
      "zh-Hans": "https://en.wikipedia.org/wiki/Ilya_Sutskever",
      "zh-Hant": "https://en.wikipedia.org/wiki/Ilya_Sutskever",
      ja: "https://en.wikipedia.org/wiki/Ilya_Sutskever",
      en: "https://en.wikipedia.org/wiki/Ilya_Sutskever"
    }
  },
  "Foundation Models": {
    title: {
      "zh-Hans": "Foundation Models",
      "zh-Hant": "Foundation Models",
      ja: "Foundation Models",
      en: "Foundation Models"
    },
    wiki: {
      "zh-Hans": "https://en.wikipedia.org/wiki/Foundation_model",
      "zh-Hant": "https://en.wikipedia.org/wiki/Foundation_model",
      ja: "https://en.wikipedia.org/wiki/Foundation_model",
      en: "https://en.wikipedia.org/wiki/Foundation_model"
    }
  },
  松尾芭蕉: {
    title: {
      "zh-Hans": "松尾芭蕉",
      "zh-Hant": "松尾芭蕉",
      ja: "松尾芭蕉",
      en: "Matsuo Basho"
    },
    wiki: {
      "zh-Hans": "https://zh.wikipedia.org/wiki/松尾芭蕉",
      "zh-Hant": "https://zh.wikipedia.org/wiki/松尾芭蕉",
      ja: "https://ja.wikipedia.org/wiki/松尾芭蕉",
      en: "https://en.wikipedia.org/wiki/Matsuo_Bash%C5%8D"
    }
  },
  与謝蕪村: {
    title: {
      "zh-Hans": "与谢芜村",
      "zh-Hant": "與謝蕪村",
      ja: "与謝蕪村",
      en: "Yosa Buson"
    },
    wiki: {
      "zh-Hans": "https://zh.wikipedia.org/wiki/与谢芜村",
      "zh-Hant": "https://zh.wikipedia.org/wiki/与谢芜村",
      ja: "https://ja.wikipedia.org/wiki/与謝蕪村",
      en: "https://en.wikipedia.org/wiki/Yosa_Buson"
    }
  },
  小林一茶: {
    title: {
      "zh-Hans": "小林一茶",
      "zh-Hant": "小林一茶",
      ja: "小林一茶",
      en: "Kobayashi Issa"
    },
    wiki: {
      "zh-Hans": "https://zh.wikipedia.org/wiki/小林一茶",
      "zh-Hant": "https://zh.wikipedia.org/wiki/小林一茶",
      ja: "https://ja.wikipedia.org/wiki/小林一茶",
      en: "https://en.wikipedia.org/wiki/Kobayashi_Issa"
    }
  },
  正岡子規: {
    title: {
      "zh-Hans": "正冈子规",
      "zh-Hant": "正岡子規",
      ja: "正岡子規",
      en: "Masaoka Shiki"
    },
    wiki: {
      "zh-Hans": "https://zh.wikipedia.org/wiki/正冈子规",
      "zh-Hant": "https://zh.wikipedia.org/wiki/正冈子规",
      ja: "https://ja.wikipedia.org/wiki/正岡子規",
      en: "https://en.wikipedia.org/wiki/Masaoka_Shiki"
    }
  },
  尾崎放哉: {
    title: {
      "zh-Hans": "尾崎放哉",
      "zh-Hant": "尾崎放哉",
      ja: "尾崎放哉",
      en: "Ozaki Hosai"
    },
    wiki: {
      "zh-Hans": "https://zh.wikipedia.org/wiki/尾崎放哉",
      "zh-Hant": "https://zh.wikipedia.org/wiki/尾崎放哉",
      ja: "https://ja.wikipedia.org/wiki/尾崎放哉",
      en: "https://en.wikipedia.org/wiki/Ozaki_H%C5%8Dsai"
    }
  },
  種田山頭火: {
    title: {
      "zh-Hans": "种田山头火",
      "zh-Hant": "種田山頭火",
      ja: "種田山頭火",
      en: "Taneda Santoka"
    },
    wiki: {
      "zh-Hans": "https://zh.wikipedia.org/wiki/种田山头火",
      "zh-Hant": "https://zh.wikipedia.org/wiki/种田山头火",
      ja: "https://ja.wikipedia.org/wiki/種田山頭火",
      en: "https://en.wikipedia.org/wiki/Sant%C5%8Dka_Taneda"
    }
  }
};

function localeFromTag(raw) {
  const tag = String(raw || "").toLowerCase();
  if (!tag) return undefined;
  if (tag.startsWith("ja")) return "ja";
  if (tag.startsWith("en")) return "en";
  if (tag.startsWith("zh")) {
    return /(hant|tw|hk|mo)/.test(tag) ? "zh-Hant" : "zh-Hans";
  }
  return LOCALES.includes(raw) ? raw : undefined;
}

function detectLocale() {
  const forced = localeFromTag(
    new URLSearchParams(location.search).get("lang")
  );
  if (forced) return forced;

  try {
    const saved = localStorage.getItem(LOCALE_KEY);
    if (LOCALES.includes(saved)) return saved;
  } catch {
    // Private mode or blocked storage should not stop the page.
  }

  const nav =
    (navigator.languages && navigator.languages[0]) || navigator.language || "";
  return localeFromTag(nav) || "en";
}

function persistLocale(value) {
  try {
    localStorage.setItem(LOCALE_KEY, value);
  } catch {
    // Private mode or blocked storage should not stop the page.
  }
}

function nextLocale(current) {
  const i = LOCALES.indexOf(current);
  return LOCALES[(Math.max(i, 0) + 1) % LOCALES.length];
}

function t(locale) {
  return UI[locale] || UI.en;
}

function sourceTitle(source, locale) {
  const meta = SOURCE_META[source];
  return (meta && meta.title[locale]) || source;
}

function sourceHref(source, locale) {
  const meta = SOURCE_META[source];
  if (!meta) return undefined;
  return meta.wiki[locale] || meta.wiki.en || meta.wiki["zh-Hant"];
}

function formatSource(source, locale) {
  const title = sourceTitle(source, locale);
  if (locale === "en" || !/[\u3400-\u9fff]/.test(title)) return title;
  return `《${title}》`;
}

function glossOf(saying, locale) {
  const gloss = saying.gloss;
  if (!gloss) return "";
  if (typeof gloss === "string") return gloss;
  return gloss[locale] || gloss["zh-Hans"] || gloss.en || "";
}
