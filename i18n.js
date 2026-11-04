const LOCALES = ["zh-Hans", "zh-Hant", "ja", "en", "ro", "ar"];
const LOCALE_KEY = "katsu:locale";

const UI = {
  "zh-Hans": {
    name: "棒喝",
    gloss: "释",
    glossLabel: "解释",
    htmlLang: "zh-Hans",
    corpora: { buddhist: "佛典", haiku: "俳句", bible: "圣经", orthodox: "东正教", quran: "古兰经", llm: "大模型" },
    switchCorpus: "切换语料",
    switchLang: "切换语言",
    chooseLang: "选择界面语言",
    chooseCorpus: "选择语料",
    about: "关于"
  },
  "zh-Hant": {
    name: "棒喝",
    gloss: "釋",
    glossLabel: "解釋",
    htmlLang: "zh-Hant",
    corpora: { buddhist: "佛典", haiku: "俳句", bible: "聖經", orthodox: "東正教", quran: "古蘭經", llm: "大模型" },
    switchCorpus: "切換語料",
    switchLang: "切換語言",
    chooseLang: "選擇介面語言",
    chooseCorpus: "選擇語料",
    about: "關於"
  },
  ja: {
    name: "喝",
    gloss: "釈",
    glossLabel: "解説",
    htmlLang: "ja",
    corpora: { buddhist: "仏典", haiku: "俳句", bible: "聖書", orthodox: "正教", quran: "クルアーン", llm: "LLM" },
    switchCorpus: "コーパスを切替",
    switchLang: "言語を切替",
    chooseLang: "表示言語",
    chooseCorpus: "コーパス",
    about: "について"
  },
  en: {
    name: "Katsu",
    gloss: "?",
    glossLabel: "Explain",
    htmlLang: "en",
    corpora: { buddhist: "Sutras", haiku: "Haiku", bible: "Bible", orthodox: "Orthodox", quran: "Quran", llm: "Models" },
    switchCorpus: "Switch corpus",
    switchLang: "Switch language",
    chooseLang: "Interface language",
    chooseCorpus: "Corpus",
    about: "About"
  },
  ro: {
    name: "Katsu",
    gloss: "?",
    glossLabel: "Tâlcuire",
    htmlLang: "ro",
    corpora: {
      buddhist: "Sutre",
      haiku: "Haiku",
      bible: "Biblie",
      orthodox: "Ortodox",
      quran: "Coran",
      llm: "Modele"
    },
    switchCorpus: "Schimbă corpusul",
    switchLang: "Schimbă limba",
    chooseLang: "Limba interfeței",
    chooseCorpus: "Corpusul",
    about: "Despre"
  },
  ar: {
    name: "Katsu",
    gloss: "؟",
    glossLabel: "تفسير",
    htmlLang: "ar",
    corpora: {
      buddhist: "بوذية",
      haiku: "هايكو",
      bible: "الكتاب",
      orthodox: "أرثوذكسية",
      quran: "القرآن",
      llm: "نماذج"
    },
    switchCorpus: "تبديل المتن",
    switchLang: "تبديل اللغة",
    chooseLang: "لغة الواجهة",
    chooseCorpus: "المتن",
    about: "عن"
  }
};

const LOCALE_NATIVE = {
  "zh-Hans": "简体中文",
  "zh-Hant": "繁體中文",
  ja: "日本語",
  en: "English",
  ro: "Română",
  ar: "العربية"
};

const CORPUS_NATIVE = {
  buddhist: { text: "佛典", lang: "zh-Hant" },
  haiku: { text: "俳句", lang: "ja" },
  bible: { text: "Bible", lang: "en" },
  orthodox: { text: "Orthodox", lang: "en" },
  quran: { text: "القرآن", lang: "ar" },
  llm: { text: "Models", lang: "en" }
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
  金剛經: {
    title: {
      "zh-Hans": "金刚经",
      "zh-Hant": "金剛經",
      ja: "金剛般若経",
      en: "Diamond Sutra"
    },
    wiki: {
      "zh-Hans": "https://zh.wikipedia.org/wiki/金剛經",
      "zh-Hant": "https://zh.wikipedia.org/wiki/金剛經",
      ja: "https://ja.wikipedia.org/wiki/金剛般若経",
      en: "https://en.wikipedia.org/wiki/Diamond_Sutra"
    }
  },
  般若心經: {
    title: {
      "zh-Hans": "般若心经",
      "zh-Hant": "般若心經",
      ja: "般若心経",
      en: "Heart Sutra"
    },
    wiki: {
      "zh-Hans": "https://zh.wikipedia.org/wiki/般若心經",
      "zh-Hant": "https://zh.wikipedia.org/wiki/般若心經",
      ja: "https://ja.wikipedia.org/wiki/般若心経",
      en: "https://en.wikipedia.org/wiki/Heart_Sutra"
    }
  },
  六祖壇經: {
    title: {
      "zh-Hans": "六祖坛经",
      "zh-Hant": "六祖壇經",
      ja: "六祖壇経",
      en: "Platform Sutra"
    },
    wiki: {
      "zh-Hans": "https://zh.wikipedia.org/wiki/六祖壇經",
      "zh-Hant": "https://zh.wikipedia.org/wiki/六祖壇經",
      ja: "https://ja.wikipedia.org/wiki/六祖壇経",
      en: "https://en.wikipedia.org/wiki/Platform_Sutra"
    }
  },
  大般涅槃經: {
    title: {
      "zh-Hans": "大般涅槃经",
      "zh-Hant": "大般涅槃經",
      ja: "大般涅槃経",
      en: "Nirvana Sutra"
    },
    wiki: {
      "zh-Hans": "https://zh.wikipedia.org/wiki/大般涅槃經",
      "zh-Hant": "https://zh.wikipedia.org/wiki/大般涅槃經",
      ja: "https://ja.wikipedia.org/wiki/大般涅槃経",
      en: "https://en.wikipedia.org/wiki/Mahaparinirvana_Sutra"
    }
  },
  中論: {
    title: {
      "zh-Hans": "中论",
      "zh-Hant": "中論",
      ja: "中論",
      en: "Middle Way"
    },
    wiki: {
      "zh-Hans": "https://zh.wikipedia.org/wiki/中論",
      "zh-Hant": "https://zh.wikipedia.org/wiki/中論",
      ja: "https://ja.wikipedia.org/wiki/中論",
      en: "https://en.wikipedia.org/wiki/Mūlamadhyamakakārikā"
    }
  },
  信心銘: {
    title: {
      "zh-Hans": "信心铭",
      "zh-Hant": "信心銘",
      ja: "信心銘",
      en: "Faith in Mind"
    },
    wiki: {
      "zh-Hans": "https://zh.wikipedia.org/wiki/信心銘",
      "zh-Hant": "https://zh.wikipedia.org/wiki/信心銘",
      en: "https://en.wikipedia.org/wiki/Xinxin_Ming"
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
      "zh-Hans": "Ted Chiang",
      "zh-Hant": "Ted Chiang",
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
      "zh-Hans": "Hinton",
      "zh-Hant": "Hinton",
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
  "Dario Amodei": {
    title: {
      "zh-Hans": "Dario Amodei",
      "zh-Hant": "Dario Amodei",
      ja: "Dario Amodei",
      en: "Dario Amodei",
      ro: "Dario Amodei"
    },
    wiki: {
      "zh-Hans": "https://zh.wikipedia.org/wiki/达里奥·阿莫代伊",
      "zh-Hant": "https://zh.wikipedia.org/wiki/达里奥·阿莫代伊",
      ja: "https://ja.wikipedia.org/wiki/ダリオ・アモデイ",
      en: "https://en.wikipedia.org/wiki/Dario_Amodei"
    }
  },
  "Sam Altman": {
    title: {
      "zh-Hans": "Sam Altman",
      "zh-Hant": "Sam Altman",
      ja: "Sam Altman",
      en: "Sam Altman",
      ro: "Sam Altman"
    },
    wiki: {
      "zh-Hans": "https://zh.wikipedia.org/wiki/萨姆·奥尔特曼",
      "zh-Hant": "https://zh.wikipedia.org/wiki/萨姆·奥尔特曼",
      ja: "https://ja.wikipedia.org/wiki/サム・アルトマン",
      en: "https://en.wikipedia.org/wiki/Sam_Altman"
    }
  },
  "Ethan Mollick": {
    title: {
      "zh-Hans": "Ethan Mollick",
      "zh-Hant": "Ethan Mollick",
      ja: "Ethan Mollick",
      en: "Ethan Mollick",
      ro: "Ethan Mollick"
    },
    wiki: {
      en: "https://en.wikipedia.org/wiki/Ethan_Mollick"
    }
  },
  "Mustafa Suleyman": {
    title: {
      "zh-Hans": "Mustafa Suleyman",
      "zh-Hant": "Mustafa Suleyman",
      ja: "Mustafa Suleyman",
      en: "Mustafa Suleyman",
      ro: "Mustafa Suleyman"
    },
    wiki: {
      en: "https://en.wikipedia.org/wiki/Mustafa_Suleyman"
    }
  },
  "Fei-Fei Li": {
    title: {
      "zh-Hans": "Fei-Fei Li",
      "zh-Hant": "Fei-Fei Li",
      ja: "Fei-Fei Li",
      en: "Fei-Fei Li",
      ro: "Fei-Fei Li"
    },
    wiki: {
      "zh-Hans": "https://zh.wikipedia.org/wiki/李飞飞",
      "zh-Hant": "https://zh.wikipedia.org/wiki/李飞飞",
      ja: "https://ja.wikipedia.org/wiki/フェイフェイ・リ",
      en: "https://en.wikipedia.org/wiki/Fei-Fei_Li"
    }
  },
  "Yann LeCun": {
    title: {
      "zh-Hans": "Yann LeCun",
      "zh-Hant": "Yann LeCun",
      ja: "Yann LeCun",
      en: "Yann LeCun",
      ro: "Yann LeCun"
    },
    wiki: {
      "zh-Hans": "https://zh.wikipedia.org/wiki/杨立昆",
      "zh-Hant": "https://zh.wikipedia.org/wiki/杨立昆",
      ja: "https://ja.wikipedia.org/wiki/ヤン・ルカン",
      en: "https://en.wikipedia.org/wiki/Yann_LeCun"
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
  },
  "Rugăciunea lui Iisus": {
    title: {
      "zh-Hans": "耶稣祷文",
      "zh-Hant": "耶穌禱文",
      ja: "イエスの祈り",
      en: "Jesus Prayer",
      ro: "Rugăciunea lui Iisus"
    },
    wiki: {
      "zh-Hans": "https://zh.wikipedia.org/wiki/耶稣祷文",
      "zh-Hant": "https://zh.wikipedia.org/wiki/耶稣祷文",
      ro: "https://ro.wikipedia.org/wiki/Rugăciunea_lui_Iisus",
      en: "https://en.wikipedia.org/wiki/Jesus_Prayer"
    }
  },
  Ectenie: {
    title: {
      "zh-Hans": "连祷",
      "zh-Hant": "連禱",
      ja: "連祷",
      en: "Ektenia",
      ro: "Ectenie"
    },
    wiki: {
      ro: "https://ro.wikipedia.org/wiki/Ectenie",
      en: "https://en.wikipedia.org/wiki/Ektenia"
    }
  },
  "Troparul Învierii": {
    title: {
      "zh-Hans": "复活赞词",
      "zh-Hant": "復活讚詞",
      ja: "復活の讃詞",
      en: "Paschal troparion",
      ro: "Troparul Învierii"
    },
    wiki: {
      en: "https://en.wikipedia.org/wiki/Paschal_troparion"
    }
  },
  Trisaghion: {
    title: {
      "zh-Hans": "三圣颂",
      "zh-Hant": "三聖頌",
      ja: "三聖頌",
      en: "Trisagion",
      ro: "Trisaghion"
    },
    wiki: {
      en: "https://en.wikipedia.org/wiki/Trisagion"
    }
  },
  "Mica doxologie": {
    title: {
      "zh-Hans": "小光荣颂",
      "zh-Hant": "小光榮頌",
      ja: "小栄頌",
      en: "Little doxology",
      ro: "Mica doxologie"
    },
    wiki: {
      en: "https://en.wikipedia.org/wiki/Gloria_Patri"
    }
  },
  "Lumină lină": {
    title: {
      "zh-Hans": "柔和之光",
      "zh-Hant": "柔和之光",
      ja: "静かなる光",
      en: "Phos Hilaron",
      ro: "Lumină lină"
    },
    wiki: {
      en: "https://en.wikipedia.org/wiki/Phos_Hilaron"
    }
  },
  "Dumnezeiasca Liturghie": {
    title: {
      "zh-Hans": "神圣礼仪",
      "zh-Hant": "神聖禮儀",
      ja: "聖体礼儀",
      en: "Divine Liturgy",
      ro: "Dumnezeiasca Liturghie"
    },
    wiki: {
      ro: "https://ro.wikipedia.org/wiki/Sfânta_Liturghie",
      en: "https://en.wikipedia.org/wiki/Divine_Liturgy"
    }
  },
  "Avva Moise": {
    title: {
      "zh-Hans": "摩西神父",
      "zh-Hant": "摩西神父",
      ja: "聖モイセス",
      en: "Abba Moses",
      ro: "Avva Moise"
    },
    wiki: {
      en: "https://en.wikipedia.org/wiki/Moses_the_Black"
    }
  },
  "Avva Arsenie": {
    title: {
      "zh-Hans": "阿尔塞尼",
      "zh-Hant": "阿爾塞尼",
      ja: "アルセニオス",
      en: "Abba Arsenius",
      ro: "Avva Arsenie"
    },
    wiki: {
      en: "https://en.wikipedia.org/wiki/Arsenius_the_Great"
    }
  },
  "Avva Antonie": {
    title: {
      "zh-Hans": "大安东尼",
      "zh-Hant": "大安東尼",
      ja: "大アントニオス",
      en: "Abba Anthony",
      ro: "Avva Antonie"
    },
    wiki: {
      en: "https://en.wikipedia.org/wiki/Anthony_the_Great"
    }
  },
  "Avva Sisoe": {
    title: {
      "zh-Hans": "西索伊斯",
      "zh-Hant": "西索伊斯",
      ja: "シソエス",
      en: "Abba Sisoes",
      ro: "Avva Sisoe"
    },
    wiki: {
      en: "https://en.wikipedia.org/wiki/Sisoes_the_Great"
    }
  },
  Evagrie: {
    title: {
      "zh-Hans": "埃瓦格里乌斯",
      "zh-Hant": "埃瓦格里烏斯",
      ja: "エヴァグリオス",
      en: "Evagrius Ponticus",
      ro: "Evagrie"
    },
    wiki: {
      en: "https://en.wikipedia.org/wiki/Evagrius_Ponticus"
    }
  },
  "Avva Ioan Colov": {
    title: {
      "zh-Hans": "矮约翰",
      "zh-Hant": "矮約翰",
      ja: "小ヨハネ",
      en: "Abba John the Dwarf",
      ro: "Avva Ioan Colov"
    },
    wiki: {
      en: "https://en.wikipedia.org/wiki/John_the_Dwarf"
    }
  },
  الفاتحة: {
    title: {
      "zh-Hans": "开端章",
      "zh-Hant": "開端章",
      ja: "開端",
      en: "The Opening",
      ro: "Al-Fatiha",
      ar: "الفاتحة"
    },
    wiki: {
      ar: "https://ar.wikipedia.org/wiki/سورة_الفاتحة",
      en: "https://en.wikipedia.org/wiki/Al-Fatiha"
    }
  },
  البقرة: {
    title: {
      "zh-Hans": "黄牛章",
      "zh-Hant": "黃牛章",
      ja: "雌牛",
      en: "The Cow",
      ro: "Al-Baqara",
      ar: "البقرة"
    },
    wiki: {
      ar: "https://ar.wikipedia.org/wiki/سورة_البقرة",
      en: "https://en.wikipedia.org/wiki/Al-Baqara"
    }
  },
  الرعد: {
    title: {
      "zh-Hans": "雷霆章",
      "zh-Hant": "雷霆章",
      ja: "雷霆",
      en: "The Thunder",
      ro: "Ar-Ra'd",
      ar: "الرعد"
    },
    wiki: {
      ar: "https://ar.wikipedia.org/wiki/سورة_الرعد",
      en: "https://en.wikipedia.org/wiki/Ar-Ra%27d"
    }
  },
  الشرح: {
    title: {
      "zh-Hans": "开拓章",
      "zh-Hant": "開拓章",
      ja: "開胸",
      en: "The Relief",
      ro: "Ash-Sharh",
      ar: "الشرح"
    },
    wiki: {
      ar: "https://ar.wikipedia.org/wiki/سورة_الشرح",
      en: "https://en.wikipedia.org/wiki/Ash-Sharh"
    }
  },
  الإخلاص: {
    title: {
      "zh-Hans": "忠诚章",
      "zh-Hant": "忠誠章",
      ja: "純正",
      en: "The Sincerity",
      ro: "Al-Ikhlas",
      ar: "الإخلاص"
    },
    wiki: {
      ar: "https://ar.wikipedia.org/wiki/سورة_الإخلاص",
      en: "https://en.wikipedia.org/wiki/Al-Ikhlas"
    }
  },
  "آل عمران": {
    title: {
      "zh-Hans": "仪姆兰的家属章",
      "zh-Hant": "儀姆蘭的家屬章",
      ja: "イムラーン家",
      en: "The Family of Imran",
      ro: "Ali 'Imran",
      ar: "آل عمران"
    },
    wiki: {
      ar: "https://ar.wikipedia.org/wiki/سورة_آل_عمران",
      en: "https://en.wikipedia.org/wiki/Al_Imran"
    }
  },
  الحجرات: {
    title: {
      "zh-Hans": "寝室章",
      "zh-Hant": "寢室章",
      ja: "部屋",
      en: "The Rooms",
      ro: "Al-Hujurat",
      ar: "الحجرات"
    },
    wiki: {
      ar: "https://ar.wikipedia.org/wiki/سورة_الحجرات",
      en: "https://en.wikipedia.org/wiki/Al-Hujurat"
    }
  },
  الضحى: {
    title: {
      "zh-Hans": "上午章",
      "zh-Hant": "上午章",
      ja: "朝",
      en: "The Morning Hours",
      ro: "Ad-Duha",
      ar: "الضحى"
    },
    wiki: {
      ar: "https://ar.wikipedia.org/wiki/سورة_الضحى",
      en: "https://en.wikipedia.org/wiki/Ad-Duhaa"
    }
  },
  الرحمن: {
    title: {
      "zh-Hans": "至仁主章",
      "zh-Hant": "至仁主章",
      ja: "慈悲あまねく御方",
      en: "The Merciful",
      ro: "Ar-Rahman",
      ar: "الرحمن"
    },
    wiki: {
      ar: "https://ar.wikipedia.org/wiki/سورة_الرحمن",
      en: "https://en.wikipedia.org/wiki/Ar-Rahman"
    }
  }
};

function localeFromTag(raw) {
  const tag = String(raw || "").toLowerCase();
  if (!tag) return undefined;
  if (tag.startsWith("ja")) return "ja";
  if (tag.startsWith("en")) return "en";
  if (tag.startsWith("ro")) return "ro";
  if (tag.startsWith("ar")) return "ar";
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
    // An unrecognized saved tag is left untouched. Load never writes the default.
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
  if (locale === "en" || locale === "ro" || locale === "ar" || !/[\u3400-\u9fff]/.test(title)) return title;
  return `《${title}》`;
}

function verseOf(saying, locale) {
  if (locale === "ja" && saying.ja) return saying.ja;
  return saying.text;
}

function glossOf(saying, locale) {
  const gloss = saying.gloss;
  if (!gloss) return "";
  if (typeof gloss === "string") return gloss;
  if (gloss[locale]) return gloss[locale];
  if (locale === "ro" || locale === "ar") return gloss.en || "";
  return gloss["zh-Hans"] || gloss.en || "";
}
