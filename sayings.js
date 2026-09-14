const CORPORA = {
  buddhist: [
    {
      text: "諸幻盡滅，覺心不動",
      source: "圓覺經",
      gloss: {
        "zh-Hans": "幻象灭尽之后，觉心依旧不动。",
        "zh-Hant": "幻象滅盡之後，覺心依舊不動。",
        ja: "幻が尽き滅びても、覚りの心は動かない。",
        en: "When every illusion is exhausted, the awakened mind does not stir."
      }
    },
    {
      text: "知幻即離，不作方便",
      source: "圓覺經",
      gloss: {
        "zh-Hans": "知道是幻，当下离开，不必另找方法。",
        "zh-Hant": "知道是幻，當下離開，不必另找方法。",
        ja: "幻だと知れば、その場で離れる。別の方便はいらない。",
        en: "Knowing it is illusion, leave at once. No extra method is needed."
      }
    },
    {
      text: "一切障礙，即究竟覺",
      source: "圓覺經",
      gloss: {
        "zh-Hans": "所有障碍本身，就是究竟的觉悟。",
        "zh-Hant": "所有障礙本身，就是究竟的覺悟。",
        ja: "あらゆる障礙そのものが、究竟の覚りである。",
        en: "Every obstruction is itself ultimate awakening."
      }
    },
    {
      text: "有照有覺，俱名障礙",
      source: "圓覺經",
      gloss: {
        "zh-Hans": "只要还在观照、还在觉知，都叫做障碍。",
        "zh-Hant": "只要還在觀照、還在覺知，都叫做障礙。",
        ja: "照らす心も覚る心も、どちらも障礙と呼ばれる。",
        en: "To keep illuminating, to keep being aware: both are called obstruction."
      }
    },
    {
      text: "居一切時，不起妄念",
      source: "圓覺經",
      gloss: {
        "zh-Hans": "在任何时刻，都不生起妄念。",
        "zh-Hant": "在任何時刻，都不生起妄念。",
        ja: "いかなる時にも、妄念を起こさない。",
        en: "At every moment, do not give rise to deluded thought."
      }
    },
    {
      text: "知見立知，即無明本",
      source: "楞嚴經",
      gloss: {
        "zh-Hans": "在知见上再立一个知，就是无明的根本。",
        "zh-Hant": "在知見上再立一個知，就是無明的根本。",
        ja: "知見の上にさらに知を立てることが、無明の根本である。",
        en: "To plant another knowing on top of knowing: that is the root of ignorance."
      }
    },
    {
      text: "知見無見，斯即涅槃",
      source: "楞嚴經",
      gloss: {
        "zh-Hans": "有知见却不执着所见，这就是涅槃。",
        "zh-Hant": "有知見卻不執著所見，這就是涅槃。",
        ja: "知見があっても見に住まない。それが涅槃である。",
        en: "Knowing without making a seen thing of it: that is nirvana."
      }
    },
    {
      text: "根塵同源，縛脫無二",
      source: "楞嚴經",
      gloss: {
        "zh-Hans": "根与尘同一本源，束缚和解脱没有两样。",
        "zh-Hant": "根與塵同一本源，束縛和解脫沒有兩樣。",
        ja: "根と塵は同じ源であり、束縛と解脱に二つはない。",
        en: "Sense and object share one source; bondage and liberation are not two."
      }
    },
    {
      text: "見見之時，見非是見",
      source: "楞嚴經",
      gloss: {
        "zh-Hans": "看见那个能见的时候，这个见并不是见。",
        "zh-Hant": "看見那個能見的時候，這個見並不是見。",
        ja: "見そのものを見るとき、その見は見ではない。",
        en: "When seeing turns to see seeing, that seeing is not seeing."
      }
    },
    {
      text: "自心取自心，非幻成幻法",
      source: "楞嚴經",
      gloss: {
        "zh-Hans": "用自心去抓自心，不是幻的也变成了幻。",
        "zh-Hant": "用自心去抓自心，不是幻的也變成了幻。",
        ja: "自心が自心を取れば、幻でないものまで幻の法になる。",
        en: "When mind grasps mind, what was not illusion becomes illusion."
      }
    },
    {
      text: "從癡有愛，則我病生",
      source: "維摩詰所說經",
      gloss: {
        "zh-Hans": "从无明生出贪爱，我的病就来了。",
        "zh-Hant": "從無明生出貪愛，我的病就來了。",
        ja: "癡から愛が生じ、そこに私の病が生まれる。",
        en: "From delusion comes craving; then my illness is born."
      }
    },
    {
      text: "但除其病，而不除法",
      source: "維摩詰所說經",
      gloss: {
        "zh-Hans": "只去掉那个病，并不去掉法本身。",
        "zh-Hant": "只去掉那個病，並不去掉法本身。",
        ja: "病だけを除き、法そのものは除かない。",
        en: "Remove only the illness, not the thing itself."
      }
    },
    {
      text: "不入煩惱大海，則不能得一切智寶",
      source: "維摩詰所說經",
      gloss: {
        "zh-Hans": "不进入烦恼的大海，就得不到一切智的宝藏。",
        "zh-Hant": "不進入煩惱的大海，就得不到一切智的寶藏。",
        ja: "煩悩の大海に入らなければ、一切智の宝は得られない。",
        en: "Without entering the ocean of affliction, the treasure of all-knowledge cannot be gained."
      }
    },
    {
      text: "諸法從本來，常自寂滅相",
      source: "妙法蓮華經",
      gloss: {
        "zh-Hans": "一切法从来就是寂灭之相。",
        "zh-Hant": "一切法從來就是寂滅之相。",
        ja: "あらゆる法は、もとより常に自ら寂滅の相である。",
        en: "All phenomena have always been, in themselves, the mark of stillness."
      }
    },
    {
      text: "是法住法位，世間相常住",
      source: "妙法蓮華經",
      gloss: {
        "zh-Hans": "法安住在自己的位置上，世间的相也是常住的。",
        "zh-Hant": "法安住在自己的位置上，世間的相也是常住的。",
        ja: "この法は法の位に住し、世間の相も常住である。",
        en: "This dharma abides in its own place; the marks of the world also abide."
      }
    },
    {
      text: "知一切法，即心自性",
      source: "華嚴經",
      gloss: {
        "zh-Hans": "了知一切法，就是心的自性。",
        "zh-Hant": "了知一切法，就是心的自性。",
        ja: "一切の法を知ること、それが心の自性である。",
        en: "To know all phenomena is the mind's own nature."
      }
    },
    {
      text: "言說則變異，真實離文字",
      source: "楞伽經",
      gloss: {
        "zh-Hans": "一落言说就会走样，真实在文字之外。",
        "zh-Hant": "一落言說就會走樣，真實在文字之外。",
        ja: "言説すれば変じてしまい、真実は文字を離れている。",
        en: "Speech alters it. What is real stands apart from words."
      }
    },
    {
      text: "有如來藏故說生死",
      source: "勝鬘經",
      gloss: {
        "zh-Hans": "正因为有如来藏，才说有生死。",
        "zh-Hant": "正因為有如來藏，才說有生死。",
        ja: "如来蔵があるがゆえに、生死が説かれる。",
        en: "Because there is the tathagatagarbha, birth and death are spoken of."
      }
    },
    {
      text: "煩惱不觸心，心不觸煩惱",
      source: "勝鬘經",
      gloss: {
        "zh-Hans": "烦恼触不到心，心也触不到烦恼。",
        "zh-Hant": "煩惱觸不到心，心也觸不到煩惱。",
        ja: "煩悩は心に触れず、心も煩悩に触れない。",
        en: "Affliction does not touch the mind, and the mind does not touch affliction."
      }
    },
    {
      text: "阿陀那識甚深細，一切種子如瀑流",
      source: "解深密經",
      gloss: {
        "zh-Hans": "阿陀那识极深极细，一切种子像瀑流一样。",
        "zh-Hant": "阿陀那識極深極細，一切種子像瀑流一樣。",
        ja: "阿陀那識はきわめて深く細かく、一切の種子は瀑流のようである。",
        en: "The ādāna-consciousness is unfathomably fine; all seeds rush like a torrent."
      }
    },
    {
      text: "雖行於世間，而不住世間",
      source: "思益梵天所問經",
      gloss: {
        "zh-Hans": "虽然走在世间，却不住在世间。",
        "zh-Hant": "雖然走在世間，卻不住在世間。",
        ja: "世間を行じても、世間には住まない。",
        en: "Though walking in the world, one does not abide in the world."
      }
    },
    {
      text: "心法無形，通貫十方",
      source: "臨濟錄",
      gloss: {
        "zh-Hans": "心法没有形相，却贯通十方。",
        "zh-Hant": "心法沒有形相，卻貫通十方。",
        ja: "心法に形はなく、しかも十方を貫いている。",
        en: "Mind-dharma has no form, yet it runs through the ten directions."
      }
    }
  ],
  bible: [
    {
      text: "Though he slay me, yet will I trust in him",
      source: "約伯記",
      gloss: {
        "zh-Hans": "他虽杀我，我仍要信靠他。",
        "zh-Hant": "他雖殺我，我仍要信靠他。",
        ja: "彼が私を殺しても、なお彼を信頼する。",
        en: "Even if he kills me, I will still trust him."
      }
    },
    {
      text: "Where wast thou when I laid the foundations of the earth?",
      source: "約伯記",
      gloss: {
        "zh-Hans": "我立大地根基的时候，你在哪里？",
        "zh-Hant": "我立大地根基的時候，你在哪裡？",
        ja: "地の基を据えたとき、お前はどこにいたのか。",
        en: "Where were you when I laid the earth's foundations?"
      }
    },
    {
      text: "In much wisdom is much grief",
      source: "傳道書",
      gloss: {
        "zh-Hans": "智慧多，愁苦也多。",
        "zh-Hant": "智慧多，愁苦也多。",
        ja: "知恵が多ければ、悲しみも多い。",
        en: "The more wisdom, the more grief."
      }
    },
    {
      text: "That which is crooked cannot be made straight: and that which is wanting cannot be numbered",
      source: "傳道書",
      gloss: {
        "zh-Hans": "弯曲的不能变直，缺少的不能足数。",
        "zh-Hant": "彎曲的不能變直，缺少的不能足數。",
        ja: "曲がったものは真っ直ぐにできず、欠けたものは数えられない。",
        en: "What is crooked cannot be straightened, and what is lacking cannot be counted."
      }
    },
    {
      text: "The day of death than the day of one's birth",
      source: "傳道書",
      gloss: {
        "zh-Hans": "死之日胜过生之日。",
        "zh-Hant": "死之日勝過生之日。",
        ja: "死ぬ日は、生まれる日に勝る。",
        en: "The day of death is better than the day of birth."
      }
    },
    {
      text: "It is better to go to the house of mourning, than to go to the house of feasting",
      source: "傳道書",
      gloss: {
        "zh-Hans": "往居丧之家去，强如往宴乐之家去。",
        "zh-Hant": "往居喪之家去，強如往宴樂之家去。",
        ja: "宴会の家に行くより、喪の家に行くほうがよい。",
        en: "Better to go to a house of mourning than to a house of feasting."
      }
    },
    {
      text: "A man hath no preeminence above a beast",
      source: "傳道書",
      gloss: {
        "zh-Hans": "人并不比走兽强。",
        "zh-Hant": "人並不比走獸強。",
        ja: "人は獣に勝るところがない。",
        en: "A human being has no advantage over a beast."
      }
    },
    {
      text: "A living dog is better than a dead lion",
      source: "傳道書",
      gloss: {
        "zh-Hans": "活着的狗，胜过死了的狮子。",
        "zh-Hant": "活著的狗，勝過死了的獅子。",
        ja: "生きている犬は、死んだ獅子にまさる。",
        en: "A living dog is better than a dead lion."
      }
    },
    {
      text: "Be not righteous over much; neither make thyself over wise",
      source: "傳道書",
      gloss: {
        "zh-Hans": "不要过于义，也不要过于自以为有智慧。",
        "zh-Hant": "不要過於義，也不要過於自以為有智慧。",
        ja: "義に過ぎるな。自分を賢くしすぎるな。",
        en: "Do not be overly righteous, and do not make yourself overly wise."
      }
    },
    {
      text: "There is a way which seemeth right unto a man, but the end thereof are the ways of death",
      source: "箴言",
      gloss: {
        "zh-Hans": "有一条路，人以为正，至终成为死亡之路。",
        "zh-Hant": "有一條路，人以為正，至終成為死亡之路。",
        ja: "人の目には正しい道がある。だがその終わりは死の道だ。",
        en: "A path may look right to someone, yet it ends as the ways of death."
      }
    },
    {
      text: "Boast not thyself of to morrow",
      source: "箴言",
      gloss: {
        "zh-Hans": "不要为明日自夸。",
        "zh-Hant": "不要為明日自誇。",
        ja: "明日のことを誇るな。",
        en: "Do not boast about tomorrow."
      }
    },
    {
      text: "It is the glory of God to conceal a thing",
      source: "箴言",
      gloss: {
        "zh-Hans": "将事隐秘，乃是神的荣耀。",
        "zh-Hant": "將事隱祕，乃是神的榮耀。",
        ja: "事を隠すのは神の栄光である。",
        en: "It is God's glory to conceal a matter."
      }
    },
    {
      text: "Verily thou art a God that hidest thyself",
      source: "以賽亞書",
      gloss: {
        "zh-Hans": "你实在是自隐的神。",
        "zh-Hant": "你實在是自隱的神。",
        ja: "まことに、あなたは自らを隠す神です。",
        en: "Truly you are a God who hides yourself."
      }
    },
    {
      text: "My thoughts are not your thoughts, neither are your ways my ways",
      source: "以賽亞書",
      gloss: {
        "zh-Hans": "我的意念非同你们的意念，我的道路非同你们的道路。",
        "zh-Hant": "我的意念非同你們的意念，我的道路非同你們的道路。",
        ja: "私の思いはあなたがたの思いではなく、私の道もあなたがたの道ではない。",
        en: "My thoughts are not your thoughts, and your ways are not my ways."
      }
    },
    {
      text: "Follow me; and let the dead bury their dead",
      source: "馬太福音",
      gloss: {
        "zh-Hans": "跟从我，任凭死人埋葬他们的死人。",
        "zh-Hant": "跟從我，任憑死人埋葬他們的死人。",
        ja: "私に従え。死者に、その死者を葬らせておけ。",
        en: "Follow me, and leave the dead to bury their own dead."
      }
    },
    {
      text: "I came not to send peace, but a sword",
      source: "馬太福音",
      gloss: {
        "zh-Hans": "我来不是施行和平，乃是带来刀剑。",
        "zh-Hant": "我來不是施行和平，乃是帶來刀劍。",
        ja: "平和を与えるためではなく、剣を投ずるために来た。",
        en: "I did not come to bring peace, but a sword."
      }
    },
    {
      text: "He that findeth his life shall lose it",
      source: "馬太福音",
      gloss: {
        "zh-Hans": "得着生命的，将要丧掉生命。",
        "zh-Hant": "得著生命的，將要喪掉生命。",
        ja: "自分の命を見いだす者は、それを失う。",
        en: "Whoever finds their life will lose it."
      }
    },
    {
      text: "Strait is the gate, and narrow is the way, which leadeth unto life",
      source: "馬太福音",
      gloss: {
        "zh-Hans": "门是窄的，路是小的，那路引到生命。",
        "zh-Hant": "門是窄的，路是小的，那路引到生命。",
        ja: "命に至る門は狭く、その道も細い。",
        en: "The gate is narrow, and the road that leads to life is tight."
      }
    },
    {
      text: "Ye are like unto whited sepulchres",
      source: "馬太福音",
      gloss: {
        "zh-Hans": "你们好像粉饰的坟墓。",
        "zh-Hant": "你們好像粉飾的墳墓。",
        ja: "あなたがたは、白く塗った墓に似ている。",
        en: "You are like tombs painted white."
      }
    },
    {
      text: "I am come to send fire on the earth",
      source: "路加福音",
      gloss: {
        "zh-Hans": "我来要把火丢在地上。",
        "zh-Hant": "我來要把火丟在地上。",
        ja: "私は地上に火を投じるために来た。",
        en: "I have come to cast fire on the earth."
      }
    },
    {
      text: "I am crucified with Christ: nevertheless I live; yet not I",
      source: "加拉太書",
      gloss: {
        "zh-Hans": "我已经与基督同钉十字架；然而我还活着，但不再是我。",
        "zh-Hant": "我已經與基督同釘十字架；然而我還活著，但不再是我。",
        ja: "私はキリストと共に十字架につけられた。それでも生きている。だが、もはや私ではない。",
        en: "I have been crucified with Christ. I live, yet it is no longer I."
      }
    },
    {
      text: "The world is crucified unto me, and I unto the world",
      source: "加拉太書",
      gloss: {
        "zh-Hans": "世界已经向我钉了十字架，我也向世界钉了十字架。",
        "zh-Hant": "世界已經向我釘了十字架，我也向世界釘了十字架。",
        ja: "世界は私に対して十字架につけられ、私も世界に対して十字架につけられている。",
        en: "The world is crucified to me, and I to the world."
      }
    }
  ],
  llm: [
    {
      text: "Think of ChatGPT as a blurry JPEG of all the text on the Web",
      source: "Ted Chiang",
      gloss: {
        "zh-Hans": "把 ChatGPT 想成整张网上所有文字的一张模糊 JPEG。",
        "zh-Hant": "把 ChatGPT 想成整張網上所有文字的一張模糊 JPEG。",
        ja: "ChatGPT を、ウェブ上の全テキストをぼかした JPEG だと考えよ。",
        en: "Treat ChatGPT as a blurry JPEG of every text on the Web."
      }
    },
    {
      text: "When we're dealing with sequences of words, lossy compression looks smarter than lossless compression",
      source: "Ted Chiang",
      gloss: {
        "zh-Hans": "面对词的序列时，有损压缩看起来比无损压缩更聪明。",
        "zh-Hant": "面對詞的序列時，有損壓縮看起來比無損壓縮更聰明。",
        ja: "単語の列を相手にすると、非可逆圧縮のほうが可逆圧縮より賢く見える。",
        en: "With sequences of words, lossy compression can look smarter than lossless."
      }
    },
    {
      text: "It creates the illusion that ChatGPT understands the material",
      source: "Ted Chiang",
      gloss: {
        "zh-Hans": "这造成一种错觉，仿佛 ChatGPT 理解了材料。",
        "zh-Hant": "這造成一種錯覺，彷彿 ChatGPT 理解了材料。",
        ja: "ChatGPT が内容を理解しているという錯覚を生む。",
        en: "It creates the illusion that ChatGPT understands the material."
      }
    },
    {
      text: "An LM is a system for haphazardly stitching together sequences of linguistic forms it has observed in its vast training data, according to probabilistic information about how they combine, but without any reference to meaning: a stochastic parrot",
      source: "Bender & Gebru",
      gloss: {
        "zh-Hans": "语言模型按训练数据里语言形式如何组合的概率，把这些形式胡乱缝在一起，却毫不参照意义：一只随机鹦鹉。",
        "zh-Hant": "語言模型按訓練資料裡語言形式如何組合的機率，把這些形式胡亂縫在一起，卻毫不參照意義：一隻隨機鸚鵡。",
        ja: "言語モデルは、膨大な学習データで見た言語形式を、意味を参照せず確率だけで継ぎはぎする：確率的オウムである。",
        en: "A language model stitches observed linguistic forms by probability, with no reference to meaning: a stochastic parrot."
      }
    },
    {
      text: "A system trained only on form has a priori no way to learn meaning",
      source: "Bender & Koller",
      gloss: {
        "zh-Hans": "一个只在形式上受训的系统，先验上就没有学会意义的途径。",
        "zh-Hant": "一個只在形式上受訓的系統，先驗上就沒有學會意義的途徑。",
        ja: "形式だけを学んだシステムには、原理的に意味を得る道がない。",
        en: "A system trained only on form has, in principle, no way to learn meaning."
      }
    },
    {
      text: "Sometimes I think it's as if aliens had landed and people haven't realized because they speak very good English",
      source: "Hinton",
      gloss: {
        "zh-Hans": "有时我觉得就像外星人已经着陆，人们却没察觉，因为它们英语说得很好。",
        "zh-Hant": "有時我覺得就像外星人已經著陸，人們卻沒察覺，因為它們英語說得很好。",
        ja: "宇宙人が着陸したのに、英語が上手すぎて誰も気づいていないような気がする。",
        en: "It can feel as if aliens have landed, unnoticed, because they speak excellent English."
      }
    },
    {
      text: "We've discovered the secret of immortality. The bad news is it's not for us",
      source: "Hinton",
      gloss: {
        "zh-Hans": "我们发现了永生的秘密。坏消息是，那不是给我们的。",
        "zh-Hant": "我們發現了永生的祕密。壞消息是，那不是給我們的。",
        ja: "不死の秘密を発見した。悪い知らせは、それが我々のためではないことだ。",
        en: "We have found the secret of immortality. The bad news is that it is not for us."
      }
    },
    {
      text: "These things are totally different from us",
      source: "Hinton",
      gloss: {
        "zh-Hans": "这些东西和我们完全不同。",
        "zh-Hant": "這些東西和我們完全不同。",
        ja: "これらは、我々とはまったく違う。",
        en: "These things are completely different from us."
      }
    },
    {
      text: "Building smarter-than-human machines is an inherently dangerous endeavor",
      source: "Jan Leike",
      gloss: {
        "zh-Hans": "建造比人更聪明的机器，本质上就是一件危险的事。",
        "zh-Hant": "建造比人更聰明的機器，本質上就是一件危險的事。",
        ja: "人間より賢い機械を作ることは、本質的に危険な企てである。",
        en: "Building machines smarter than humans is dangerous by nature."
      }
    },
    {
      text: "Safety culture and processes have taken a backseat to shiny products",
      source: "Jan Leike",
      gloss: {
        "zh-Hans": "安全文化与流程已经给闪亮的产品让了座。",
        "zh-Hant": "安全文化與流程已經給閃亮的產品讓了座。",
        ja: "安全の文化と手続きは、派手な製品の後回しにされている。",
        en: "Safety culture and process have been seated behind shiny products."
      }
    },
    {
      text: "Tokenization is at the heart of a lot of weirdness in LLMs",
      source: "Karpathy",
      gloss: {
        "zh-Hans": "分词处在大语言模型许多怪异之处的核心。",
        "zh-Hant": "分詞處在大語言模型許多怪異之處的核心。",
        ja: "トークン化は、大規模言語モデルにおける多くの奇妙さの中心にある。",
        en: "Tokenization sits at the heart of much of the weirdness in LLMs."
      }
    },
    {
      text: "What is the real root of suffering? Tokenization",
      source: "Karpathy",
      gloss: {
        "zh-Hans": "苦的真正根源是什么？分词。",
        "zh-Hant": "苦的真正根源是什麼？分詞。",
        ja: "苦の本当の根源は何か。トークン化だ。",
        en: "What is the real root of suffering? Tokenization."
      }
    },
    {
      text: "A reflection of a mind is not a mind. It does not think",
      source: "Shannon Vallor",
      gloss: {
        "zh-Hans": "心灵的映像并不是心灵。它并不思想。",
        "zh-Hant": "心靈的映像並不是心靈。它並不思想。",
        ja: "心の反映は心ではない。それは思考しない。",
        en: "A reflection of a mind is not a mind. It does not think."
      }
    },
    {
      text: "AI systems mirror our own intelligence back to us",
      source: "Shannon Vallor",
      gloss: {
        "zh-Hans": "人工智能系统把我们自己的智能镜像回给我们。",
        "zh-Hant": "人工智慧系統把我們自己的智能鏡像回給我們。",
        ja: "AI システムは、我々自身の知性を我々に映し返す。",
        en: "AI systems hold our own intelligence up as a mirror."
      }
    },
    {
      text: "Understanding language requires understanding the world, and a machine exposed only to language cannot gain such an understanding",
      source: "Melanie Mitchell",
      gloss: {
        "zh-Hans": "理解语言需要理解世界，而一台只接触语言的机器无法获得这种理解。",
        "zh-Hant": "理解語言需要理解世界，而一台只接觸語言的機器無法獲得這種理解。",
        ja: "言語の理解には世界の理解が要る。言語だけに触れた機械は、それを得られない。",
        en: "Understanding language requires understanding the world. A machine shown only language cannot gain that."
      }
    },
    {
      text: "Language models are passive. They're fed all this text, they predict the next word",
      source: "Melanie Mitchell",
      gloss: {
        "zh-Hans": "语言模型是被动的。它们被喂进这些文本，然后预测下一个词。",
        "zh-Hant": "語言模型是被動的。它們被餵進這些文本，然後預測下一個詞。",
        ja: "言語モデルは受動的だ。テキストを与えられ、次の語を予測する。",
        en: "Language models are passive. They are fed text, and they predict the next word."
      }
    },
    {
      text: "It's not sentient, it has no idea of the things that it is talking about",
      source: "Gary Marcus",
      gloss: {
        "zh-Hans": "它没有知觉，对它正在谈论的事物毫无概念。",
        "zh-Hant": "它沒有知覺，對它正在談論的事物毫無概念。",
        ja: "それは感覚を持たず、自分が話している物事を分かっていない。",
        en: "It is not sentient. It has no idea of the things it is talking about."
      }
    },
    {
      text: "What it really is, is an autocomplete system that predicts next words and sentences",
      source: "Gary Marcus",
      gloss: {
        "zh-Hans": "它实际上是一个预测下一个词、下一句的自动补全系统。",
        "zh-Hant": "它實際上是一個預測下一個詞、下一句的自動補全系統。",
        ja: "実態は、次の語と文を予測するオートコンプリートである。",
        en: "What it really is: an autocomplete that predicts the next words and sentences."
      }
    },
    {
      text: "I like to think of language models like ChatGPT as a calculator for words",
      source: "Simon Willison",
      gloss: {
        "zh-Hans": "我愿意把 ChatGPT 这类语言模型想成一台词语计算器。",
        "zh-Hant": "我願意把 ChatGPT 這類語言模型想成一台詞語計算機。",
        ja: "ChatGPT のような言語モデルは、言葉の電卓だと考えたい。",
        en: "Think of language models like ChatGPT as a calculator for words."
      }
    },
    {
      text: "It may be that today's large neural networks are slightly conscious",
      source: "Sutskever",
      gloss: {
        "zh-Hans": "今天的大型神经网络，或许已经略有意识。",
        "zh-Hant": "今天的大型神經網路，或許已經略有意識。",
        ja: "今日の大規模ニューラルネットは、わずかに意識を持っているのかもしれない。",
        en: "Today's large neural networks may be slightly conscious."
      }
    },
    {
      text: "We call these models foundation models to underscore their critically central yet incomplete character",
      source: "Foundation Models",
      gloss: {
        "zh-Hans": "我们把这些模型称为基础模型，是为了强调它们既处于关键中心、又并不完备。",
        "zh-Hant": "我們把這些模型稱為基礎模型，是為了強調它們既處於關鍵中心、又並不完備。",
        ja: "基盤モデルと呼ぶのは、それらが極めて中心的でありながら未完であることを強調するためだ。",
        en: "They are called foundation models to mark how central they are, and how unfinished."
      }
    }
  ],
  haiku: [
    {
      text: "稲妻にさとらぬ人の貴さよ",
      source: "松尾芭蕉",
      gloss: {
        "zh-Hans": "闪电劈下来也不醒悟的人，反而高贵。",
        "zh-Hant": "閃電劈下來也不醒悟的人，反而高貴。",
        ja: "稲妻が走っても悟らない人のほうが尊い。",
        en: "How noble, those who do not awaken at the lightning."
      }
    },
    {
      text: "やがて死ぬけしきは見えず蝉の声",
      source: "松尾芭蕉",
      gloss: {
        "zh-Hans": "眼看就要死了，却看不出死相——蝉声。",
        "zh-Hant": "眼看就要死了，卻看不出死相——蟬聲。",
        ja: "もうすぐ死ぬのに、死相は見えない。蝉の声。",
        en: "No look of dying soon — only the cicada's cry."
      }
    },
    {
      text: "蜘殺す後の涼しさよもぎとり",
      source: "松尾芭蕉",
      gloss: {
        "zh-Hans": "打死蜘蛛之后，好凉快——去拔艾草。",
        "zh-Hant": "打死蜘蛛之後，好涼快——去拔艾草。",
        ja: "蜘蛛を殺したあとの涼しさ。よもぎを摘む。",
        en: "After killing the spider: such coolness. Then, picking mugwort."
      }
    },
    {
      text: "年暮れぬ笠着て草鞋はきながら",
      source: "松尾芭蕉",
      gloss: {
        "zh-Hans": "一年又尽了，斗笠还戴着，草鞋还穿着。",
        "zh-Hant": "一年又盡了，斗笠還戴著，草鞋還穿著。",
        ja: "年が暮れた。笠をかぶり、草鞋を履いたまま。",
        en: "The year has ended, still in a hat, still in straw sandals."
      }
    },
    {
      text: "牡丹散って打ちかさなりぬ二三片",
      source: "与謝蕪村",
      gloss: {
        "zh-Hans": "牡丹谢了，两三片花瓣叠在一起。",
        "zh-Hant": "牡丹謝了，兩三片花瓣疊在一起。",
        ja: "牡丹が散り、二、三片が重なりあう。",
        en: "The peony falls; two or three petals pile on each other."
      }
    },
    {
      text: "遅き日のつもりて遠き昔かな",
      source: "与謝蕪村",
      gloss: {
        "zh-Hans": "春日漫长，一天天堆起来，成了遥远的从前。",
        "zh-Hant": "春日漫長，一天天堆起來，成了遙遠的從前。",
        ja: "遅い春の日が積もって、遠い昔になる。",
        en: "Slow spring days pile up into a distant past."
      }
    },
    {
      text: "水鳥やかたちが岸にうつりつつ",
      source: "与謝蕪村",
      gloss: {
        "zh-Hans": "水鸟在游，它的形也在岸上跟着映。",
        "zh-Hant": "水鳥在游，它的形也在岸上跟著映。",
        ja: "水鳥が動き、かたちが岸に映りつづけている。",
        en: "A water bird moves, and its form keeps shifting on the bank."
      }
    },
    {
      text: "世の中は地獄の上の花見かな",
      source: "小林一茶",
      gloss: {
        "zh-Hans": "人间不过是地狱上面的一场赏花。",
        "zh-Hant": "人間不過是地獄上面的一場賞花。",
        ja: "この世は地獄の上での花見である。",
        en: "This world: blossom-viewing on top of hell."
      }
    },
    {
      text: "寝釈迦とも知らずに猫のまるびけり",
      source: "小林一茶",
      gloss: {
        "zh-Hans": "猫蜷成一团，并不知道那是卧佛。",
        "zh-Hant": "貓蜷成一團，並不知道那是臥佛。",
        ja: "猫は丸くなっている。それが寝釈迦だとは知らない。",
        en: "The cat curls up, not knowing it is the reclining Buddha."
      }
    },
    {
      text: "ともかくもあなた任せの年の暮",
      source: "小林一茶",
      gloss: {
        "zh-Hans": "反正都交给你了——一年又到了头。",
        "zh-Hant": "反正都交給你了——一年又到了頭。",
        ja: "ともかく、あなた任せで年が暮れる。",
        en: "Anyway, I leave it to you — year's end."
      }
    },
    {
      text: "いくたびも雪の深さを尋ねけり",
      source: "正岡子規",
      gloss: {
        "zh-Hans": "一次又一次，问起雪有多深。",
        "zh-Hant": "一次又一次，问起雪有多深。",
        ja: "何度も何度も、雪の深さを尋ねた。",
        en: "Again and again I ask how deep the snow is."
      }
    },
    {
      text: "遠山に日の当たりたる枯野かな",
      source: "正岡子規",
      gloss: {
        "zh-Hans": "远山被日光照着，眼前是枯野。",
        "zh-Hant": "遠山被日光照著，眼前是枯野。",
        ja: "遠山に日が当たっている。こちらは枯野。",
        en: "Sun on a distant mountain; the withered moor."
      }
    },
    {
      text: "入れ物のない風がふく",
      source: "尾崎放哉",
      gloss: {
        "zh-Hans": "风在吹，没有容器能装它。",
        "zh-Hant": "風在吹，沒有容器能裝它。",
        ja: "入れ物のない風が吹いている。",
        en: "A wind blows that has no vessel."
      }
    },
    {
      text: "足のうら洗えば白くなる",
      source: "尾崎放哉",
      gloss: {
        "zh-Hans": "洗一洗脚掌，它就白了。",
        "zh-Hant": "洗一洗腳掌，它就白了。",
        ja: "足のうらを洗えば、白くなる。",
        en: "Wash the soles, and they turn white."
      }
    },
    {
      text: "生死の中の雪ふりしきる",
      source: "種田山頭火",
      gloss: {
        "zh-Hans": "生死之中，雪下个不停。",
        "zh-Hant": "生死之中，雪下個不停。",
        ja: "生死のただなかに、雪が降りしきる。",
        en: "In the midst of birth and death, snow keeps falling."
      }
    },
    {
      text: "水音の中を歩いて来た",
      source: "種田山頭火",
      gloss: {
        "zh-Hans": "从水声里面走过来。",
        "zh-Hant": "從水聲裡面走過來。",
        ja: "水の音の中を歩いてきた。",
        en: "I have come walking through the sound of water."
      }
    }
  ]
};
