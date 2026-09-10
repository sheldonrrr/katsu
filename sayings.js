const SOURCE_WIKI = {
  圓覺經: "https://zh.wikipedia.org/wiki/圓覺經",
  楞嚴經: "https://zh.wikipedia.org/wiki/楞嚴經",
  維摩詰所說經: "https://zh.wikipedia.org/wiki/維摩詰經",
  妙法蓮華經: "https://zh.wikipedia.org/wiki/妙法蓮華經",
  華嚴經: "https://zh.wikipedia.org/wiki/華嚴經",
  楞伽經: "https://zh.wikipedia.org/wiki/楞伽經",
  勝鬘經: "https://zh.wikipedia.org/wiki/勝鬘經",
  解深密經: "https://zh.wikipedia.org/wiki/解深密經",
  思益梵天所問經: "https://zh.wikipedia.org/wiki/思益梵天所問經",
  臨濟錄: "https://zh.wikipedia.org/wiki/臨濟錄",
  約伯記: "https://zh.wikipedia.org/wiki/約伯記",
  傳道書: "https://zh.wikipedia.org/wiki/傳道書",
  箴言: "https://zh.wikipedia.org/wiki/箴言",
  以賽亞書: "https://zh.wikipedia.org/wiki/以賽亞書",
  馬太福音: "https://zh.wikipedia.org/wiki/馬太福音",
  路加福音: "https://zh.wikipedia.org/wiki/路加福音",
  加拉太書: "https://zh.wikipedia.org/wiki/加拉太書"
};

const CORPORA = {
  buddhist: [
    {
      text: "諸幻盡滅，覺心不動",
      source: "圓覺經",
      gloss: "诸幻尽灭，觉心不动。"
    },
    {
      text: "知幻即離，不作方便",
      source: "圓覺經",
      gloss: "知道是幻便即离开，不必另作方便。"
    },
    {
      text: "一切障礙，即究竟覺",
      source: "圓覺經",
      gloss: "一切障碍，即是究竟觉。"
    },
    {
      text: "有照有覺，俱名障礙",
      source: "圓覺經",
      gloss: "有照有觉，都名为障碍。"
    },
    {
      text: "居一切時，不起妄念",
      source: "圓覺經",
      gloss: "处于一切时中，不生起妄念。"
    },
    {
      text: "知見立知，即無明本",
      source: "楞嚴經",
      gloss: "在知见上再立一个知，就是无明的根本。"
    },
    {
      text: "知見無見，斯即涅槃",
      source: "楞嚴經",
      gloss: "知见而无所见，这就是涅槃。"
    },
    {
      text: "根塵同源，縛脫無二",
      source: "楞嚴經",
      gloss: "根与尘同一本源，束缚与解脱没有两样。"
    },
    {
      text: "見見之時，見非是見",
      source: "楞嚴經",
      gloss: "见那能见的时候，这个见并不是见。"
    },
    {
      text: "自心取自心，非幻成幻法",
      source: "楞嚴經",
      gloss: "以自心取自心，不是幻的却成了幻法。"
    },
    {
      text: "從癡有愛，則我病生",
      source: "維摩詰所說經",
      gloss: "从痴而有爱，则我的病就生起。"
    },
    {
      text: "但除其病，而不除法",
      source: "維摩詰所說經",
      gloss: "只除去那个病，而不除去法。"
    },
    {
      text: "不入煩惱大海，則不能得一切智寶",
      source: "維摩詰所說經",
      gloss: "不进入烦恼大海，就不能得到一切智宝。"
    },
    {
      text: "諸法從本來，常自寂滅相",
      source: "妙法蓮華經",
      gloss: "诸法从本来，自己常常就是寂灭之相。"
    },
    {
      text: "是法住法位，世間相常住",
      source: "妙法蓮華經",
      gloss: "这个法住在法位上，世间相常住。"
    },
    {
      text: "知一切法，即心自性",
      source: "華嚴經",
      gloss: "了知一切法，即是心的自性。"
    },
    {
      text: "言說則變異，真實離文字",
      source: "楞伽經",
      gloss: "言说便会变异，真实离开文字。"
    },
    {
      text: "有如來藏故說生死",
      source: "勝鬘經",
      gloss: "因为有如来藏，所以说有生死。"
    },
    {
      text: "煩惱不觸心，心不觸煩惱",
      source: "勝鬘經",
      gloss: "烦恼不触心，心不触烦恼。"
    },
    {
      text: "阿陀那識甚深細，一切種子如瀑流",
      source: "解深密經",
      gloss: "阿陀那识非常深细，一切种子如同瀑流。"
    },
    {
      text: "雖行於世間，而不住世間",
      source: "思益梵天所問經",
      gloss: "虽然行于世间，而不住于世间。"
    },
    {
      text: "心法無形，通貫十方",
      source: "臨濟錄",
      gloss: "心法没有形相，贯通十方。"
    }
  ],
  bible: [
    {
      text: "Though he slay me, yet will I trust in him",
      source: "約伯記",
      gloss: "他虽杀我，我仍要信靠他。"
    },
    {
      text: "Where wast thou when I laid the foundations of the earth?",
      source: "約伯記",
      gloss: "我立大地根基的时候，你在哪里？"
    },
    {
      text: "In much wisdom is much grief",
      source: "傳道書",
      gloss: "智慧多，愁苦也多。"
    },
    {
      text: "That which is crooked cannot be made straight: and that which is wanting cannot be numbered",
      source: "傳道書",
      gloss: "弯曲的不能变直，缺少的不能足数。"
    },
    {
      text: "The day of death than the day of one's birth",
      source: "傳道書",
      gloss: "死之日胜过生之日。"
    },
    {
      text: "It is better to go to the house of mourning, than to go to the house of feasting",
      source: "傳道書",
      gloss: "往居丧之家去，强如往宴乐之家去。"
    },
    {
      text: "A man hath no preeminence above a beast",
      source: "傳道書",
      gloss: "人并不比走兽强。"
    },
    {
      text: "A living dog is better than a dead lion",
      source: "傳道書",
      gloss: "活着的狗，胜过死了的狮子。"
    },
    {
      text: "Be not righteous over much; neither make thyself over wise",
      source: "傳道書",
      gloss: "不要过于义，也不要过于自以为有智慧。"
    },
    {
      text: "There is a way which seemeth right unto a man, but the end thereof are the ways of death",
      source: "箴言",
      gloss: "有一条路，人以为正，至终成为死亡之路。"
    },
    {
      text: "Boast not thyself of to morrow",
      source: "箴言",
      gloss: "不要为明日自夸。"
    },
    {
      text: "It is the glory of God to conceal a thing",
      source: "箴言",
      gloss: "将事隐秘，乃是神的荣耀。"
    },
    {
      text: "Verily thou art a God that hidest thyself",
      source: "以賽亞書",
      gloss: "你实在是自隐的神。"
    },
    {
      text: "My thoughts are not your thoughts, neither are your ways my ways",
      source: "以賽亞書",
      gloss: "我的意念非同你们的意念，我的道路非同你们的道路。"
    },
    {
      text: "Follow me; and let the dead bury their dead",
      source: "馬太福音",
      gloss: "跟从我，任凭死人埋葬他们的死人。"
    },
    {
      text: "I came not to send peace, but a sword",
      source: "馬太福音",
      gloss: "我来不是施行和平，乃是带来刀剑。"
    },
    {
      text: "He that findeth his life shall lose it",
      source: "馬太福音",
      gloss: "得着生命的，将要丧掉生命。"
    },
    {
      text: "Strait is the gate, and narrow is the way, which leadeth unto life",
      source: "馬太福音",
      gloss: "门是窄的，路是小的，那路引到生命。"
    },
    {
      text: "Ye are like unto whited sepulchres",
      source: "馬太福音",
      gloss: "你们好像粉饰的坟墓。"
    },
    {
      text: "I am come to send fire on the earth",
      source: "路加福音",
      gloss: "我来要把火丢在地上。"
    },
    {
      text: "I am crucified with Christ: nevertheless I live; yet not I",
      source: "加拉太書",
      gloss: "我已经与基督同钉十字架；然而我还活着，但不再是我。"
    },
    {
      text: "The world is crucified unto me, and I unto the world",
      source: "加拉太書",
      gloss: "世界已经向我钉了十字架，我也向世界钉了十字架。"
    }
  ]
};
