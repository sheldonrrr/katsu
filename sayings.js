const CORPORA = {
  buddhist: [
    {
      text: "諸幻盡滅，覺心不動",
      ja: "諸々の幻は尽き滅び、覚りの心は動かず",
      source: "圓覺經",
      gloss: {
        "zh-Hans": "幻象灭尽之后，觉心依旧不动。",
        "zh-Hant": "幻象滅盡之後，覺心依舊不動。",
        ja: "幻が尽き滅びても、覚りの心は動かない。",
        en: "When every illusion is exhausted, the awakened mind does not stir.",
        ro: "Când toate nălucirile se sting, mintea trează rămâne nemișcată."
      }
    },
    {
      text: "知幻即離，不作方便",
      ja: "幻と知ればすなわち離れ、方便を作さず",
      source: "圓覺經",
      gloss: {
        "zh-Hans": "知道是幻，当下离开，不必另找方法。",
        "zh-Hant": "知道是幻，當下離開，不必另找方法。",
        ja: "幻だと知れば、その場で離れる。別の方便はいらない。",
        en: "Knowing it is illusion, leave at once. No extra method is needed.",
        ro: "Dacă vezi că e nălucire, te desparți pe loc. Nu mai cauți o metodă."
      }
    },
    {
      text: "一切障礙，即究竟覺",
      ja: "一切の障礙は、すなわち究竟の覚なり",
      source: "圓覺經",
      gloss: {
        "zh-Hans": "所有障碍本身，就是究竟的觉悟。",
        "zh-Hant": "所有障礙本身，就是究竟的覺悟。",
        ja: "あらゆる障礙そのものが、究竟の覚りである。",
        en: "Every obstruction is itself ultimate awakening.",
        ro: "Piedica însăși este trezirea deplină."
      }
    },
    {
      text: "有照有覺，俱名障礙",
      ja: "照あり覚あるは、ともに障礙と名づく",
      source: "圓覺經",
      gloss: {
        "zh-Hans": "只要还在观照、还在觉知，都叫做障碍。",
        "zh-Hant": "只要還在觀照、還在覺知，都叫做障礙。",
        ja: "照らす心も覚る心も、どちらも障礙と呼ばれる。",
        en: "To keep illuminating, to keep being aware: both are called obstruction.",
        ro: "Și veghea, și simțirea că ești treaz, tot piedici se cheamă."
      }
    },
    {
      text: "居一切時，不起妄念",
      ja: "一切の時に居して、妄念を起こさず",
      source: "圓覺經",
      gloss: {
        "zh-Hans": "在任何时刻，都不生起妄念。",
        "zh-Hant": "在任何時刻，都不生起妄念。",
        ja: "いかなる時にも、妄念を起こさない。",
        en: "At every moment, do not give rise to deluded thought.",
        ro: "În orice clipă, să nu lași gândul rătăcit să se ridice."
      }
    },
    {
      text: "知見立知，即無明本",
      ja: "知見に知を立つるは、すなわち無明の本なり",
      source: "楞嚴經",
      gloss: {
        "zh-Hans": "在知见上再立一个知，就是无明的根本。",
        "zh-Hant": "在知見上再立一個知，就是無明的根本。",
        ja: "知見の上にさらに知を立てることが、無明の根本である。",
        en: "To plant another knowing on top of knowing: that is the root of ignorance.",
        ro: "Să pui o cunoaștere peste cunoaștere: de aici începe orbirea."
      }
    },
    {
      text: "知見無見，斯即涅槃",
      ja: "知見に見なく、これすなわち涅槃なり",
      source: "楞嚴經",
      gloss: {
        "zh-Hans": "有知见却不执着所见，这就是涅槃。",
        "zh-Hant": "有知見卻不執著所見，這就是涅槃。",
        ja: "知見があっても見に住まない。それが涅槃である。",
        en: "Knowing without making a seen thing of it: that is nirvana.",
        ro: "Să știi, fără să te agăți de ce vezi: asta e nirvana."
      }
    },
    {
      text: "根塵同源，縛脫無二",
      ja: "根と塵は源を同じくし、縛と脱とに二なし",
      source: "楞嚴經",
      gloss: {
        "zh-Hans": "根与尘同一本源，束缚和解脱没有两样。",
        "zh-Hant": "根與塵同一本源，束縛和解脫沒有兩樣。",
        ja: "根と塵は同じ源であり、束縛と解脱に二つはない。",
        en: "Sense and object share one source; bondage and liberation are not two.",
        ro: "Simțul și lucrul vin din același loc. Legătura și dezlegarea nu sunt două."
      }
    },
    {
      text: "見見之時，見非是見",
      ja: "見を見る時、見は是れ見に非ず",
      source: "楞嚴經",
      gloss: {
        "zh-Hans": "看见那个能见的时候，这个见并不是见。",
        "zh-Hant": "看見那個能見的時候，這個見並不是見。",
        ja: "見そのものを見るとき、その見は見ではない。",
        en: "When seeing turns to see seeing, that seeing is not seeing.",
        ro: "Când vederea se întoarce să se vadă pe sine, ceea ce vede nu mai e vedere."
      }
    },
    {
      text: "自心取自心，非幻成幻法",
      ja: "自心が自心を取れば、幻に非ざるも幻法と成る",
      source: "楞嚴經",
      gloss: {
        "zh-Hans": "用自心去抓自心，不是幻的也变成了幻。",
        "zh-Hant": "用自心去抓自心，不是幻的也變成了幻。",
        ja: "自心が自心を取れば、幻でないものまで幻の法になる。",
        en: "When mind grasps mind, what was not illusion becomes illusion.",
        ro: "Când mintea se apucă pe sine, și ce nu era nălucire ajunge nălucire."
      }
    },
    {
      text: "從癡有愛，則我病生",
      ja: "癡より愛あり、すなわち我が病生ず",
      source: "維摩詰所說經",
      gloss: {
        "zh-Hans": "从无明生出贪爱，我的病就来了。",
        "zh-Hant": "從無明生出貪愛，我的病就來了。",
        ja: "癡から愛が生じ、そこに私の病が生まれる。",
        en: "From delusion comes craving; then my illness is born.",
        ro: "Din orbire se naște pofta, și de acolo boala mea."
      }
    },
    {
      text: "但除其病，而不除法",
      ja: "ただその病を除きて、法を除かず",
      source: "維摩詰所說經",
      gloss: {
        "zh-Hans": "只去掉那个病，并不去掉法本身。",
        "zh-Hant": "只去掉那個病，並不去掉法本身。",
        ja: "病だけを除き、法そのものは除かない。",
        en: "Remove only the illness, not the thing itself.",
        ro: "Se scoate numai boala, nu și rânduiala lucrurilor."
      }
    },
    {
      text: "不入煩惱大海，則不能得一切智寶",
      ja: "煩悩の大海に入らずんば、一切智の宝を得ること能わず",
      source: "維摩詰所說經",
      gloss: {
        "zh-Hans": "不进入烦恼的大海，就得不到一切智的宝藏。",
        "zh-Hant": "不進入煩惱的大海，就得不到一切智的寶藏。",
        ja: "煩悩の大海に入らなければ、一切智の宝は得られない。",
        en: "Without entering the ocean of affliction, the treasure of all-knowledge cannot be gained.",
        ro: "Dacă nu intri în marea patimilor, nu găsești comoara cunoașterii depline."
      }
    },
    {
      text: "諸法從本來，常自寂滅相",
      ja: "諸法は本来より、常に自ら寂滅の相なり",
      source: "妙法蓮華經",
      gloss: {
        "zh-Hans": "一切法从来就是寂灭之相。",
        "zh-Hant": "一切法從來就是寂滅之相。",
        ja: "あらゆる法は、もとより常に自ら寂滅の相である。",
        en: "All phenomena have always been, in themselves, the mark of stillness.",
        ro: "Toate lucrurile au fost dintotdeauna, prin ele însele, liniște."
      }
    },
    {
      text: "是法住法位，世間相常住",
      ja: "是の法は法位に住し、世間の相は常住なり",
      source: "妙法蓮華經",
      gloss: {
        "zh-Hans": "法安住在自己的位置上，世间的相也是常住的。",
        "zh-Hant": "法安住在自己的位置上，世間的相也是常住的。",
        ja: "この法は法の位に住し、世間の相も常住である。",
        en: "This dharma abides in its own place; the marks of the world also abide.",
        ro: "Rânduiala stă unde îi e locul. Și chipul lumii rămâne și el."
      }
    },
    {
      text: "知一切法，即心自性",
      ja: "一切の法を知るは、すなわち心の自性なり",
      source: "華嚴經",
      gloss: {
        "zh-Hans": "了知一切法，就是心的自性。",
        "zh-Hant": "了知一切法，就是心的自性。",
        ja: "一切の法を知ること、それが心の自性である。",
        en: "To know all phenomena is the mind's own nature.",
        ro: "A cunoaște toate lucrurile este chiar firea minții."
      }
    },
    {
      text: "言說則變異，真實離文字",
      ja: "言説すればすなわち変異し、真実は文字を離る",
      source: "楞伽經",
      gloss: {
        "zh-Hans": "一落言说就会走样，真实在文字之外。",
        "zh-Hant": "一落言說就會走樣，真實在文字之外。",
        ja: "言説すれば変じてしまい、真実は文字を離れている。",
        en: "Speech alters it. What is real stands apart from words.",
        ro: "Cum o spui, se strâmbă. Ce e adevărat stă în afara literelor."
      }
    },
    {
      text: "有如來藏故說生死",
      ja: "如来蔵あるがゆえに生死を説く",
      source: "勝鬘經",
      gloss: {
        "zh-Hans": "正因为有如来藏，才说有生死。",
        "zh-Hant": "正因為有如來藏，才說有生死。",
        ja: "如来蔵があるがゆえに、生死が説かれる。",
        en: "Because there is the tathagatagarbha, birth and death are spoken of.",
        ro: "Se vorbește despre naștere și moarte fiindcă în om stă comoara trează."
      }
    },
    {
      text: "煩惱不觸心，心不觸煩惱",
      ja: "煩悩は心に触れず、心は煩悩に触れず",
      source: "勝鬘經",
      gloss: {
        "zh-Hans": "烦恼触不到心，心也触不到烦恼。",
        "zh-Hant": "煩惱觸不到心，心也觸不到煩惱。",
        ja: "煩悩は心に触れず、心も煩悩に触れない。",
        en: "Affliction does not touch the mind, and the mind does not touch affliction.",
        ro: "Patima nu atinge mintea, și mintea nu atinge patima."
      }
    },
    {
      text: "阿陀那識甚深細，一切種子如瀑流",
      ja: "阿陀那識は甚だ深く細なり、一切の種子は瀑流のごとし",
      source: "解深密經",
      gloss: {
        "zh-Hans": "阿陀那识极深极细，一切种子像瀑流一样。",
        "zh-Hant": "阿陀那識極深極細，一切種子像瀑流一樣。",
        ja: "阿陀那識はきわめて深く細かく、一切の種子は瀑流のようである。",
        en: "The ādāna-consciousness is unfathomably fine; all seeds rush like a torrent.",
        ro: "Conștiința care ține semințele e adâncă și subțire. Ele dau năvală ca o cascadă."
      }
    },
    {
      text: "雖行於世間，而不住世間",
      ja: "世間に行ずといえども、世間に住せず",
      source: "思益梵天所問經",
      gloss: {
        "zh-Hans": "虽然走在世间，却不住在世间。",
        "zh-Hant": "雖然走在世間，卻不住在世間。",
        ja: "世間を行じても、世間には住まない。",
        en: "Though walking in the world, one does not abide in the world.",
        ro: "Umblă prin lume, dar nu se așază în lume."
      }
    },
    {
      text: "心法無形，通貫十方",
      ja: "心法は形なく、十方に通貫す",
      source: "臨濟錄",
      gloss: {
        "zh-Hans": "心法没有形相，却贯通十方。",
        "zh-Hant": "心法沒有形相，卻貫通十方。",
        ja: "心法に形はなく、しかも十方を貫いている。",
        en: "Mind-dharma has no form, yet it runs through the ten directions.",
        ro: "Firea minții n-are chip, și totuși străbate toate zările."
      }
    },
    {
      text: "應無所住而生其心",
      ja: "応に住する所なくして、しかもその心を生ずべし",
      source: "金剛經",
      gloss: {
        "zh-Hans": "心可以生起，只是不要停在任何一处。",
        "zh-Hant": "心可以生起，只是不要停在任何一處。",
        ja: "心は起こしてよい。ただ、どこにも住ませない。",
        en: "Let the mind arise, and do not let it settle anywhere.",
        ro: "Mintea poate să se ridice. Nu o lăsa să se așeze nicăieri."
      }
    },
    {
      text: "凡所有相，皆是虛妄",
      ja: "およそ所有の相は、みな是れ虚妄なり",
      source: "金剛經",
      gloss: {
        "zh-Hans": "凡是能被看成一个相的，都靠不住。",
        "zh-Hant": "凡是能被看成一個相的，都靠不住。",
        ja: "相として見えているものは、どれも当てにならない。",
        en: "Whatever shows itself as a mark cannot be relied on.",
        ro: "Tot ce se arată ca un chip nu e de crezut."
      }
    },
    {
      text: "若見諸相非相，則見如來",
      ja: "もし諸相の非相を見れば、すなわち如来を見ん",
      source: "金剛經",
      gloss: {
        "zh-Hans": "看见所有相都不是相的时候，才见到如来。",
        "zh-Hant": "看見所有相都不是相的時候，才見到如來。",
        ja: "あらゆる相が相ではないと見たとき、初めて如来に会う。",
        en: "Only when every mark is seen as no mark is the thus-come one met.",
        ro: "Abia când niciun chip nu mai e luat drept chip, îl întâlnești."
      }
    },
    {
      text: "過去心不可得，現在心不可得，未來心不可得",
      ja: "過去心は不可得、現在心は不可得、未来心は不可得",
      source: "金剛經",
      gloss: {
        "zh-Hans": "过去的心抓不住，现在的心抓不住，还没来的心也抓不住。",
        "zh-Hant": "過去的心抓不住，現在的心抓不住，還沒來的心也抓不住。",
        ja: "過ぎた心はつかめず、今の心もつかめず、まだ来ない心もつかめない。",
        en: "The mind that has gone cannot be grasped, nor the one here now, nor the one that has not come.",
        ro: "Mintea trecută nu se prinde. Nici cea de acum. Nici cea care încă n-a venit."
      }
    },
    {
      text: "一切有為法，如夢幻泡影",
      ja: "一切の有為法は、夢幻泡影のごとし",
      source: "金剛經",
      gloss: {
        "zh-Hans": "凡是造作出来的，都像梦、像幻、像水泡、像影子。",
        "zh-Hant": "凡是造作出來的，都像夢、像幻、像水泡、像影子。",
        ja: "作りあげられたものは、夢のようで、幻のようで、泡のようで、影のようだ。",
        en: "Whatever is made is like a dream, a mirage, a bubble, a shadow.",
        ro: "Tot ce e făcut e ca visul, ca năluca, ca bula, ca umbra."
      }
    },
    {
      text: "色即是空，空即是色",
      ja: "色はすなわち是れ空、空はすなわち是れ色",
      source: "般若心經",
      gloss: {
        "zh-Hans": "色就是空，空就是色。不是先有一个，再变成另一个。",
        "zh-Hant": "色就是空，空就是色。不是先有一個，再變成另一個。",
        ja: "色は空そのもの、空は色そのもの。先にあって、あとから入れ替わるのではない。",
        en: "Form is emptiness, and emptiness is form. Not one thing later turning into the other.",
        ro: "Forma este golul, și golul este forma. Nu e una care pe urmă se preface în cealaltă."
      }
    },
    {
      text: "無罣礙故，無有恐怖",
      ja: "罣礙なきがゆえに、恐怖あることなし",
      source: "般若心經",
      gloss: {
        "zh-Hans": "因为没有挂碍，所以没有恐怖。",
        "zh-Hant": "因為沒有掛礙，所以沒有恐怖。",
        ja: "引っかかりがないから、恐れも残らない。",
        en: "Nothing snags, so nothing is left to fear.",
        ro: "Nimic nu se agață, așa că nu rămâne nici frica."
      }
    },
    {
      text: "本來無一物，何處惹塵埃",
      ja: "本来無一物、いずれの処にか塵埃を惹かん",
      source: "六祖壇經",
      gloss: {
        "zh-Hans": "本来就没有一样东西，尘埃又能沾到哪里。",
        "zh-Hant": "本來就沒有一樣東西，塵埃又能沾到哪裡。",
        ja: "もともと一物もない。塵のつく場所もない。",
        en: "From the start there is not one thing. Where would the dust settle?",
        ro: "De la început nu e niciun lucru. Unde să se așeze praful?"
      }
    },
    {
      text: "不是風動，不是幡動，仁者心動",
      ja: "是れ風の動くにあらず、是れ幡の動くにあらず、仁者の心動くなり",
      source: "六祖壇經",
      gloss: {
        "zh-Hans": "不是风在动，也不是幡在动。动的是你的心。",
        "zh-Hant": "不是風在動，也不是幡在動。動的是你的心。",
        ja: "風が動いているのでもない。幡が動いているのでもない。動いているのは、あなたの心だ。",
        en: "It is not the wind, and not the banner. What moves is the mind of the one who watches.",
        ro: "Nu vântul se mișcă, nici steagul. Se mișcă mintea celui care privește."
      }
    },
    {
      text: "佛法在世間，不離世間覺",
      ja: "仏法は世間に在り、世間を離れて覚せず",
      source: "六祖壇經",
      gloss: {
        "zh-Hans": "佛法就在世间里。觉悟也不用离开这个世间去找。",
        "zh-Hant": "佛法就在世間裡。覺悟也不用離開這個世間去找。",
        ja: "仏法は世間の中にある。覚りも、世間を出て探しにいかない。",
        en: "The teaching is in the world. Awakening is not found by leaving it.",
        ro: "Învățătura stă în lume. Trezirea nu se găsește ieșind din ea."
      }
    },
    {
      text: "一切眾生，悉有佛性",
      ja: "一切衆生、ことごとく仏性あり",
      source: "大般涅槃經",
      gloss: {
        "zh-Hans": "一切众生身上，都有佛性。",
        "zh-Hant": "一切眾生身上，都有佛性。",
        ja: "どの衆生のうちにも、仏性がある。",
        en: "In every being, the nature of a buddha is already there.",
        ro: "În orice ființă stă, deja, firea trează."
      }
    },
    {
      text: "因緣所生法，我說即是空",
      ja: "因縁所生の法、我れ説きてすなわち是れ空なり",
      source: "中論",
      gloss: {
        "zh-Hans": "靠因缘才生出来的，我说它就是空。",
        "zh-Hant": "靠因緣才生出來的，我說它就是空。",
        ja: "因縁があって初めて生じたものを、空だと言う。",
        en: "What comes to be only through conditions, that is what is called empty.",
        ro: "Ce apare numai pentru că s-au întâlnit condițiile, pe acela îl numesc gol."
      }
    },
    {
      text: "直心是道場",
      ja: "直心は是れ道場なり",
      source: "維摩詰所說經",
      gloss: {
        "zh-Hans": "直心就是道场。不必再另找一个地方用功。",
        "zh-Hant": "直心就是道場。不必再另找一個地方用功。",
        ja: "まっすぐな心が、そのまま道場だ。修行の場所を別に探さなくてよい。",
        en: "A straight mind is already the place of practice. No other ground is needed.",
        ro: "Mintea dreaptă este deja locul practicării. Nu mai cauți un alt teren."
      }
    },
    {
      text: "隨處作主，立處皆真",
      ja: "随処に主と作り、立つ処みな真なり",
      source: "臨濟錄",
      gloss: {
        "zh-Hans": "走到哪里都自己作主，脚下站着的地方就是真的。",
        "zh-Hant": "走到哪裡都自己作主，腳下站著的地方就是真的。",
        ja: "どこにいても自ら主となる。立っているその場所が、そのまま真である。",
        en: "Wherever you are, be the one who stands there. Then the ground under you is already true.",
        ro: "Oriunde ești, fii tu cel care stă acolo. Pământul de sub tine e deja adevărat."
      }
    },
    {
      text: "至道無難，唯嫌揀擇",
      ja: "至道は難きことなし、ただ揀択を嫌うのみ",
      source: "信心銘",
      gloss: {
        "zh-Hans": "至道并不难。它不喜欢的，是心里还在挑这拣那。",
        "zh-Hant": "至道並不難。它不喜歡的，是心裡還在挑這揀那。",
        ja: "至道は難しくない。嫌うのは、あれこれ選び分ける心だけだ。",
        en: "The great way is not hard. What it will not have is a mind still sorting this from that.",
        ro: "Calea mare nu e grea. Ce nu rabdă e mintea care încă alege una și lasă alta."
      }
    },
    {
      text: "狂心若歇，歇即菩提",
      ja: "狂心もし歇すれば、歇はすなわち菩提なり",
      source: "楞嚴經",
      gloss: {
        "zh-Hans": "狂心一旦歇下来，这个歇本身就是菩提。",
        "zh-Hant": "狂心一旦歇下來，這個歇本身就是菩提。",
        ja: "狂った心がいったん休めば、その休みがそのまま菩提である。",
        en: "If the frantic mind once rests, that rest is itself awakening.",
        ro: "Dacă mintea zăpăcită se oprește o dată, oprirea însăși este trezirea."
      }
    },
    {
      text: "知是空華，即無輪轉",
      ja: "是れ空華なりと知れば、すなわち輪転なし",
      source: "圓覺經",
      gloss: {
        "zh-Hans": "知道那是空中的花，轮转就没有了。",
        "zh-Hant": "知道那是空中的花，輪轉就沒有了。",
        ja: "空に咲いた花だと知れば、ぐるぐるの回転もなくなる。",
        en: "Once it is known as a flower in empty air, the wheel stops turning.",
        ro: "Când vezi că e o floare în aerul gol, roata nu se mai învârte."
      }
    },
    {
      text: "心如工畫師，能畫諸世間",
      ja: "心は工画師の如く、よく諸世間を画く",
      source: "華嚴經",
      gloss: {
        "zh-Hans": "心像一个画师，种种世间都是它画出来的。",
        "zh-Hant": "心像一個畫師，種種世間都是它畫出來的。",
        ja: "心は絵師のようで、もろもろの世間を描き出している。",
        en: "The mind is like a painter. The worlds are what it draws.",
        ro: "Mintea e ca un pictor. Lumile sunt ce desenează ea."
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
        en: "Even if he kills me, I will still trust him.",
        ro: "Chiar de m-ar ucide, tot în El mă încred."
      }
    },
    {
      text: "Where wast thou when I laid the foundations of the earth?",
      source: "約伯記",
      gloss: {
        "zh-Hans": "我立大地根基的时候，你在哪里？",
        "zh-Hant": "我立大地根基的時候，你在哪裡？",
        ja: "地の基を据えたとき、お前はどこにいたのか。",
        en: "Where were you when I laid the earth's foundations?",
        ro: "Când am pus temelia pământului, tu unde erai?"
      }
    },
    {
      text: "In much wisdom is much grief",
      source: "傳道書",
      gloss: {
        "zh-Hans": "智慧多，愁苦也多。",
        "zh-Hant": "智慧多，愁苦也多。",
        ja: "知恵が多ければ、悲しみも多い。",
        en: "The more wisdom, the more grief.",
        ro: "Cu câtă înțelepciune, atâta jale."
      }
    },
    {
      text: "That which is crooked cannot be made straight: and that which is wanting cannot be numbered",
      source: "傳道書",
      gloss: {
        "zh-Hans": "弯曲的不能变直，缺少的不能足数。",
        "zh-Hant": "彎曲的不能變直，缺少的不能足數。",
        ja: "曲がったものは真っ直ぐにできず、欠けたものは数えられない。",
        en: "What is crooked cannot be straightened, and what is lacking cannot be counted.",
        ro: "Ce e strâmb nu se îndreaptă, și ce lipsește nu se numără."
      }
    },
    {
      text: "The day of death than the day of one's birth",
      source: "傳道書",
      gloss: {
        "zh-Hans": "死之日胜过生之日。",
        "zh-Hant": "死之日勝過生之日。",
        ja: "死ぬ日は、生まれる日に勝る。",
        en: "The day of death is better than the day of birth.",
        ro: "Ziua morții e mai de preț decât ziua nașterii."
      }
    },
    {
      text: "It is better to go to the house of mourning, than to go to the house of feasting",
      source: "傳道書",
      gloss: {
        "zh-Hans": "往居丧之家去，强如往宴乐之家去。",
        "zh-Hant": "往居喪之家去，強如往宴樂之家去。",
        ja: "宴会の家に行くより、喪の家に行くほうがよい。",
        en: "Better to go to a house of mourning than to a house of feasting.",
        ro: "Mai bine în casa unde se plânge un mort decât în casa unde se ospătează."
      }
    },
    {
      text: "A man hath no preeminence above a beast",
      source: "傳道書",
      gloss: {
        "zh-Hans": "人并不比走兽强。",
        "zh-Hant": "人並不比走獸強。",
        ja: "人は獣に勝るところがない。",
        en: "A human being has no advantage over a beast.",
        ro: "Omul nu stă deasupra dobitocului."
      }
    },
    {
      text: "A living dog is better than a dead lion",
      source: "傳道書",
      gloss: {
        "zh-Hans": "活着的狗，胜过死了的狮子。",
        "zh-Hant": "活著的狗，勝過死了的獅子。",
        ja: "生きている犬は、死んだ獅子にまさる。",
        en: "A living dog is better than a dead lion.",
        ro: "Un câine viu face mai mult decât un leu mort."
      }
    },
    {
      text: "Be not righteous over much; neither make thyself over wise",
      source: "傳道書",
      gloss: {
        "zh-Hans": "不要过于义，也不要过于自以为有智慧。",
        "zh-Hant": "不要過於義，也不要過於自以為有智慧。",
        ja: "義に過ぎるな。自分を賢くしすぎるな。",
        en: "Do not be overly righteous, and do not make yourself overly wise.",
        ro: "Nu te grăbi să fii prea drept, nici să te crezi prea înțelept."
      }
    },
    {
      text: "There is a way which seemeth right unto a man, but the end thereof are the ways of death",
      source: "箴言",
      gloss: {
        "zh-Hans": "有一条路，人以为正，至终成为死亡之路。",
        "zh-Hant": "有一條路，人以為正，至終成為死亡之路。",
        ja: "人の目には正しい道がある。だがその終わりは死の道だ。",
        en: "A path may look right to someone, yet it ends as the ways of death.",
        ro: "E o cale care i se pare omului dreaptă, dar capătul ei e moartea."
      }
    },
    {
      text: "Boast not thyself of to morrow",
      source: "箴言",
      gloss: {
        "zh-Hans": "不要为明日自夸。",
        "zh-Hant": "不要為明日自誇。",
        ja: "明日のことを誇るな。",
        en: "Do not boast about tomorrow.",
        ro: "Nu te lăuda cu ziua de mâine."
      }
    },
    {
      text: "It is the glory of God to conceal a thing",
      source: "箴言",
      gloss: {
        "zh-Hans": "将事隐秘，乃是神的荣耀。",
        "zh-Hant": "將事隱祕，乃是神的榮耀。",
        ja: "事を隠すのは神の栄光である。",
        en: "It is God's glory to conceal a matter.",
        ro: "Slava lui Dumnezeu este să țină lucrul ascuns."
      }
    },
    {
      text: "Verily thou art a God that hidest thyself",
      source: "以賽亞書",
      gloss: {
        "zh-Hans": "你实在是自隐的神。",
        "zh-Hant": "你實在是自隱的神。",
        ja: "まことに、あなたは自らを隠す神です。",
        en: "Truly you are a God who hides yourself.",
        ro: "Cu adevărat ești un Dumnezeu care se ascunde."
      }
    },
    {
      text: "My thoughts are not your thoughts, neither are your ways my ways",
      source: "以賽亞書",
      gloss: {
        "zh-Hans": "我的意念非同你们的意念，我的道路非同你们的道路。",
        "zh-Hant": "我的意念非同你們的意念，我的道路非同你們的道路。",
        ja: "私の思いはあなたがたの思いではなく、私の道もあなたがたの道ではない。",
        en: "My thoughts are not your thoughts, and your ways are not my ways.",
        ro: "Gândurile Mele nu sunt gândurile voastre, nici căile Mele căile voastre."
      }
    },
    {
      text: "Follow me; and let the dead bury their dead",
      source: "馬太福音",
      gloss: {
        "zh-Hans": "跟从我，任凭死人埋葬他们的死人。",
        "zh-Hant": "跟從我，任憑死人埋葬他們的死人。",
        ja: "私に従え。死者に、その死者を葬らせておけ。",
        en: "Follow me, and leave the dead to bury their own dead.",
        ro: "Vino după Mine și lasă morții să-și îngroape morții."
      }
    },
    {
      text: "I came not to send peace, but a sword",
      source: "馬太福音",
      gloss: {
        "zh-Hans": "我来不是施行和平，乃是带来刀剑。",
        "zh-Hant": "我來不是施行和平，乃是帶來刀劍。",
        ja: "平和を与えるためではなく、剣を投ずるために来た。",
        en: "I did not come to bring peace, but a sword.",
        ro: "N-am venit să aduc pace, ci sabie."
      }
    },
    {
      text: "He that findeth his life shall lose it",
      source: "馬太福音",
      gloss: {
        "zh-Hans": "得着生命的，将要丧掉生命。",
        "zh-Hant": "得著生命的，將要喪掉生命。",
        ja: "自分の命を見いだす者は、それを失う。",
        en: "Whoever finds their life will lose it.",
        ro: "Cine își găsește viața și-o pierde."
      }
    },
    {
      text: "Strait is the gate, and narrow is the way, which leadeth unto life",
      source: "馬太福音",
      gloss: {
        "zh-Hans": "门是窄的，路是小的，那路引到生命。",
        "zh-Hant": "門是窄的，路是小的，那路引到生命。",
        ja: "命に至る門は狭く、その道も細い。",
        en: "The gate is narrow, and the road that leads to life is tight.",
        ro: "Poarta e strâmtă, și calea care duce la viață e îngustă."
      }
    },
    {
      text: "Ye are like unto whited sepulchres",
      source: "馬太福音",
      gloss: {
        "zh-Hans": "你们好像粉饰的坟墓。",
        "zh-Hant": "你們好像粉飾的墳墓。",
        ja: "あなたがたは、白く塗った墓に似ている。",
        en: "You are like tombs painted white.",
        ro: "Sunteți ca niște morminte văruite."
      }
    },
    {
      text: "I am come to send fire on the earth",
      source: "路加福音",
      gloss: {
        "zh-Hans": "我来要把火丢在地上。",
        "zh-Hant": "我來要把火丟在地上。",
        ja: "私は地上に火を投じるために来た。",
        en: "I have come to cast fire on the earth.",
        ro: "Am venit să arunc foc pe pământ."
      }
    },
    {
      text: "I am crucified with Christ: nevertheless I live; yet not I",
      source: "加拉太書",
      gloss: {
        "zh-Hans": "我已经与基督同钉十字架；然而我还活着，但不再是我。",
        "zh-Hant": "我已經與基督同釘十字架；然而我還活著，但不再是我。",
        ja: "私はキリストと共に十字架につけられた。それでも生きている。だが、もはや私ではない。",
        en: "I have been crucified with Christ. I live, yet it is no longer I.",
        ro: "Sunt răstignit împreună cu Hristos. Trăiesc, dar nu mai trăiesc eu."
      }
    },
    {
      text: "The world is crucified unto me, and I unto the world",
      source: "加拉太書",
      gloss: {
        "zh-Hans": "世界已经向我钉了十字架，我也向世界钉了十字架。",
        "zh-Hant": "世界已經向我釘了十字架，我也向世界釘了十字架。",
        ja: "世界は私に対して十字架につけられ、私も世界に対して十字架につけられている。",
        en: "The world is crucified to me, and I to the world.",
        ro: "Lumea e răstignită pentru mine, și eu pentru lume."
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
        en: "Treat ChatGPT as a blurry JPEG of every text on the Web.",
        ro: "Ia ChatGPT drept un JPEG încețoșat al tuturor textelor de pe internet.",
        ar: "خذه صورة مضغوطة لكل نصوص الشبكة: الهيئة بقيت، والتفاصيل ضاعت.",
      }
    },
    {
      text: "When we're dealing with sequences of words, lossy compression looks smarter than lossless compression",
      source: "Ted Chiang",
      gloss: {
        "zh-Hans": "面对词的序列时，有损压缩看起来比无损压缩更聪明。",
        "zh-Hant": "面對詞的序列時，有損壓縮看起來比無損壓縮更聰明。",
        ja: "単語の列を相手にすると、非可逆圧縮のほうが可逆圧縮より賢く見える。",
        en: "With sequences of words, lossy compression can look smarter than lossless.",
        ro: "La șiruri de cuvinte, compresia cu pierderi pare mai deșteaptă decât cea fără.",
        ar: "مع سلاسل الكلمات، يبدو الحذف أذكى من حفظ كل حرف.",
      }
    },
    {
      text: "It creates the illusion that ChatGPT understands the material",
      source: "Ted Chiang",
      gloss: {
        "zh-Hans": "这造成一种错觉，仿佛 ChatGPT 理解了材料。",
        "zh-Hant": "這造成一種錯覺，彷彿 ChatGPT 理解了材料。",
        ja: "ChatGPT が内容を理解しているという錯覚を生む。",
        en: "It creates the illusion that ChatGPT understands the material.",
        ro: "Naște iluzia că ChatGPT a priceput materia.",
        ar: "يولّد وهمًا بأن ChatGPT فهم المادة.",
      }
    },
    {
      text: "An LM is a system for haphazardly stitching together sequences of linguistic forms it has observed in its vast training data, according to probabilistic information about how they combine, but without any reference to meaning: a stochastic parrot",
      source: "Bender & Gebru",
      gloss: {
        "zh-Hans": "语言模型按训练数据里语言形式如何组合的概率，把这些形式胡乱缝在一起，却毫不参照意义：一只随机鹦鹉。",
        "zh-Hant": "語言模型按訓練資料裡語言形式如何組合的機率，把這些形式胡亂縫在一起，卻毫不參照意義：一隻隨機鸚鵡。",
        ja: "言語モデルは、膨大な学習データで見た言語形式を、意味を参照せず確率だけで継ぎはぎする：確率的オウムである。",
        en: "A language model stitches observed linguistic forms by probability, with no reference to meaning: a stochastic parrot.",
        ro: "Modelul de limbă înșiră forme pe care le-a văzut, după cât de des stau împreună, fără să știe ce înseamnă. Un papagal care ghicește.",
        ar: "يرتب أشكال الكلام التي رآها حسب كثرة مجيئها معًا، من غير رجوع إلى المعنى. ببغاء يخمن.",
      }
    },
    {
      text: "A system trained only on form has a priori no way to learn meaning",
      source: "Bender & Koller",
      gloss: {
        "zh-Hans": "一个只在形式上受训的系统，先验上就没有学会意义的途径。",
        "zh-Hant": "一個只在形式上受訓的系統，先驗上就沒有學會意義的途徑。",
        ja: "形式だけを学んだシステムには、原理的に意味を得る道がない。",
        en: "A system trained only on form has, in principle, no way to learn meaning.",
        ro: "Un sistem învățat numai pe formă n-are, din capul locului, de unde să învețe înțelesul.",
        ar: "من تدرّب على الشكل وحده لا سبيل له، من الأصل، إلى المعنى.",
      }
    },
    {
      text: "Sometimes I think it's as if aliens had landed and people haven't realized because they speak very good English",
      source: "Hinton",
      gloss: {
        "zh-Hans": "有时我觉得就像外星人已经着陆，人们却没察觉，因为它们英语说得很好。",
        "zh-Hant": "有時我覺得就像外星人已經著陸，人們卻沒察覺，因為它們英語說得很好。",
        ja: "宇宙人が着陸したのに、英語が上手すぎて誰も気づいていないような気がする。",
        en: "It can feel as if aliens have landed, unnoticed, because they speak excellent English.",
        ro: "Parcă au aterizat niște extratereștri, și nimeni nu bagă de seamă, fiindcă vorbesc engleza prea bine.",
        ar: "كأن غرباء هبطوا، ولم ينتبه أحد لأن إنجليزيتهم جيدة جدًا.",
      }
    },
    {
      text: "We've discovered the secret of immortality. The bad news is it's not for us",
      source: "Hinton",
      gloss: {
        "zh-Hans": "我们发现了永生的秘密。坏消息是，那不是给我们的。",
        "zh-Hant": "我們發現了永生的祕密。壞消息是，那不是給我們的。",
        ja: "不死の秘密を発見した。悪い知らせは、それが我々のためではないことだ。",
        en: "We have found the secret of immortality. The bad news is that it is not for us.",
        ro: "Am găsit secretul nemuririi. Vestea proastă: nu e pentru noi.",
        ar: "وجدنا سر الخلود. الخبر السيئ أنه ليس لنا.",
      }
    },
    {
      text: "These things are totally different from us",
      source: "Hinton",
      gloss: {
        "zh-Hans": "这些东西和我们完全不同。",
        "zh-Hant": "這些東西和我們完全不同。",
        ja: "これらは、我々とはまったく違う。",
        en: "These things are completely different from us.",
        ro: "Lucrurile astea sunt cu totul altceva decât noi.",
        ar: "هذه الأشياء غيرنا تمامًا.",
      }
    },
    {
      text: "Building smarter-than-human machines is an inherently dangerous endeavor",
      source: "Jan Leike",
      gloss: {
        "zh-Hans": "建造比人更聪明的机器，本质上就是一件危险的事。",
        "zh-Hant": "建造比人更聰明的機器，本質上就是一件危險的事。",
        ja: "人間より賢い機械を作ることは、本質的に危険な企てである。",
        en: "Building machines smarter than humans is dangerous by nature.",
        ro: "Să faci mașini mai deștepte decât omul e, prin firea lucrului, o treabă primejdioasă.",
        ar: "صنع آلات أذكى من الإنسان أمر خطر في طبعه.",
      }
    },
    {
      text: "Safety culture and processes have taken a backseat to shiny products",
      source: "Jan Leike",
      gloss: {
        "zh-Hans": "安全文化与流程已经给闪亮的产品让了座。",
        "zh-Hant": "安全文化與流程已經給閃亮的產品讓了座。",
        ja: "安全の文化と手続きは、派手な製品の後回しにされている。",
        en: "Safety culture and process have been seated behind shiny products.",
        ro: "Grija pentru siguranță a fost dată la o parte, ca să treacă produsele lucioase.",
        ar: "أُزيحت العناية بالسلامة جانبًا، كي تمر المنتجات اللامعة.",
      }
    },
    {
      text: "Tokenization is at the heart of a lot of weirdness in LLMs",
      source: "Karpathy",
      gloss: {
        "zh-Hans": "分词处在大语言模型许多怪异之处的核心。",
        "zh-Hant": "分詞處在大語言模型許多怪異之處的核心。",
        ja: "トークン化は、大規模言語モデルにおける多くの奇妙さの中心にある。",
        en: "Tokenization sits at the heart of much of the weirdness in LLMs.",
        ro: "Tokenizarea stă la rădăcina multor ciudățenii din modelele mari.",
        ar: "كثير من غرائب النماذج الكبيرة أصله تقطيع النص إلى رموز.",
      }
    },
    {
      text: "What is the real root of suffering? Tokenization",
      source: "Karpathy",
      gloss: {
        "zh-Hans": "苦的真正根源是什么？分词。",
        "zh-Hant": "苦的真正根源是什麼？分詞。",
        ja: "苦の本当の根源は何か。トークン化だ。",
        en: "What is the real root of suffering? Tokenization.",
        ro: "Care e, de fapt, rădăcina suferinței? Tokenizarea.",
        ar: "أصل المعاناة فعلًا؟ تقطيع الكلمات.",
      }
    },
    {
      text: "A reflection of a mind is not a mind. It does not think",
      source: "Shannon Vallor",
      gloss: {
        "zh-Hans": "心灵的映像并不是心灵。它并不思想。",
        "zh-Hant": "心靈的映像並不是心靈。它並不思想。",
        ja: "心の反映は心ではない。それは思考しない。",
        en: "A reflection of a mind is not a mind. It does not think.",
        ro: "Oglindirea unei minți nu e o minte. Nu gândește.",
        ar: "ظل العقل ليس عقلًا. هو لا يفكر.",
      }
    },
    {
      text: "AI systems mirror our own intelligence back to us",
      source: "Shannon Vallor",
      gloss: {
        "zh-Hans": "人工智能系统把我们自己的智能镜像回给我们。",
        "zh-Hant": "人工智慧系統把我們自己的智能鏡像回給我們。",
        ja: "AI システムは、我々自身の知性を我々に映し返す。",
        en: "AI systems hold our own intelligence up as a mirror.",
        ro: "Sistemele astea ne întorc propria minte, ca o oglindă.",
        ar: "هذه الأنظمة ترد إلينا ذكاءنا، كأنه في مرآة.",
      }
    },
    {
      text: "Understanding language requires understanding the world, and a machine exposed only to language cannot gain such an understanding",
      source: "Melanie Mitchell",
      gloss: {
        "zh-Hans": "理解语言需要理解世界，而一台只接触语言的机器无法获得这种理解。",
        "zh-Hant": "理解語言需要理解世界，而一台只接觸語言的機器無法獲得這種理解。",
        ja: "言語の理解には世界の理解が要る。言語だけに触れた機械は、それを得られない。",
        en: "Understanding language requires understanding the world. A machine shown only language cannot gain that.",
        ro: "Ca să înțelegi limba, trebuie să înțelegi lumea. O mașină care a văzut numai limbă n-are de unde.",
        ar: "فهم اللغة يقتضي فهم العالم. آلة لم تر غير اللغة لا تملك من أين.",
      }
    },
    {
      text: "Language models are passive. They're fed all this text, they predict the next word",
      source: "Melanie Mitchell",
      gloss: {
        "zh-Hans": "语言模型是被动的。它们被喂进这些文本，然后预测下一个词。",
        "zh-Hant": "語言模型是被動的。它們被餵進這些文本，然後預測下一個詞。",
        ja: "言語モデルは受動的だ。テキストを与えられ、次の語を予測する。",
        en: "Language models are passive. They are fed text, and they predict the next word.",
        ro: "Modelele de limbă sunt passive. Li se dă textul, ele ghicesc cuvântul următor.",
        ar: "نماذج اللغة منفعلة. يُلقى إليها النص، فتخمن الكلمة التي تلي.",
      }
    },
    {
      text: "It's not sentient, it has no idea of the things that it is talking about",
      source: "Gary Marcus",
      gloss: {
        "zh-Hans": "它没有知觉，对它正在谈论的事物毫无概念。",
        "zh-Hant": "它沒有知覺，對它正在談論的事物毫無概念。",
        ja: "それは感覚を持たず、自分が話している物事を分かっていない。",
        en: "It is not sentient. It has no idea of the things it is talking about.",
        ro: "Nu e conștient. N-are habar despre lucrurile pe care le spune.",
        ar: "ليست واعية. لا تدري عم تتحدث.",
      }
    },
    {
      text: "What it really is, is an autocomplete system that predicts next words and sentences",
      source: "Gary Marcus",
      gloss: {
        "zh-Hans": "它实际上是一个预测下一个词、下一句的自动补全系统。",
        "zh-Hant": "它實際上是一個預測下一個詞、下一句的自動補全系統。",
        ja: "実態は、次の語と文を予測するオートコンプリートである。",
        en: "What it really is: an autocomplete that predicts the next words and sentences.",
        ro: "De fapt e un autocomplete: ghicește cuvintele și frazele care urmează.",
        ar: "حقيقتها إكمال تلقائي: تخمن الكلمة التالية والجملة التالية.",
      }
    },
    {
      text: "I like to think of language models like ChatGPT as a calculator for words",
      source: "Simon Willison",
      gloss: {
        "zh-Hans": "我愿意把 ChatGPT 这类语言模型想成一台词语计算器。",
        "zh-Hant": "我願意把 ChatGPT 這類語言模型想成一台詞語計算機。",
        ja: "ChatGPT のような言語モデルは、言葉の電卓だと考えたい。",
        en: "Think of language models like ChatGPT as a calculator for words.",
        ro: "Îmi place să văd un model ca ChatGPT ca pe un calculator de buzunar pentru cuvinte.",
        ar: "أحب أن أرى نموذجًا مثل ChatGPT آلة حاسبة للكلمات.",
      }
    },
    {
      text: "It may be that today's large neural networks are slightly conscious",
      source: "Sutskever",
      gloss: {
        "zh-Hans": "今天的大型神经网络，或许已经略有意识。",
        "zh-Hant": "今天的大型神經網路，或許已經略有意識。",
        ja: "今日の大規模ニューラルネットは、わずかに意識を持っているのかもしれない。",
        en: "Today's large neural networks may be slightly conscious.",
        ro: "Poate că rețelele mari de neuroni de azi sunt, puțin, conștiente.",
        ar: "ربما صارت الشبكات العصبية الكبيرة اليوم واعية قليلًا.",
      }
    },
    {
      text: "We call these models foundation models to underscore their critically central yet incomplete character",
      source: "Foundation Models",
      gloss: {
        "zh-Hans": "我们把这些模型称为基础模型，是为了强调它们既处于关键中心、又并不完备。",
        "zh-Hant": "我們把這些模型稱為基礎模型，是為了強調它們既處於關鍵中心、又並不完備。",
        ja: "基盤モデルと呼ぶのは、それらが極めて中心的でありながら未完であることを強調するためだ。",
        en: "They are called foundation models to mark how central they are, and how unfinished.",
        ro: "Le spunem modele de bază ca să se vadă că stau în mijlocul lucrurilor și, totodată, sunt neterminate.",
        ar: "نسميها نماذج أساس كي يظهر أنها في الوسط، وأنها لم تكتمل.",
      }
    },
    {
      text: "The hottest new programming language is English",
      source: "Karpathy",
      gloss: {
        "zh-Hans": "程序还在。变的是下命令的那一门：会把事情说清楚，就能让模型把代码写出来。",
        "zh-Hant": "程式還在。變的是下命令的那一門：會把事情講清楚，就能讓模型把程式寫出來。",
        ja: "コードは残っている。変わったのは命令の言葉だ。事情を話せば、モデルがプログラムを組む。",
        en: "The code is still there. What changed is the language of the order: say the thing clearly, and the model writes it.",
        ro: "Codul n-a dispărut. S-a schimbat limba ordinului: spui limpede ce vrei, și modelul îl scrie.",
        ar: "الكود لم يزل. تغيرت لغة الأمر: قل ما تريد بوضوح، فيكتبه النموذج.",
      }
    },
    {
      text: "There's a new kind of coding I call \"vibe coding\", where you fully give in to the vibes, embrace exponentials, and forget that the code even exists.",
      source: "Karpathy",
      gloss: {
        "zh-Hans": "他把这叫氛围编程：顺着势头把要求说出来，成批接受改动，直到自己不再盯着每一行。",
        "zh-Hant": "他把這叫氛圍寫程式：順著勢頭把要求說出來，成批接受改動，直到自己不再盯著每一行。",
        ja: "ノリで書く、というやり方だ。勢いのまま頼み、膨らむ差分をまとめて受け取り、一行一行は見なくなる。",
        en: "You say what you want, take the surge of changes, and stop watching every line.",
        ro: "Spui ce vrei, primești valul de modificări și nu mai stai cu ochii pe fiecare rând.",
        ar: "تقول ما تريد، وتأخذ سيل التعديلات، وتكف عن مراقبة كل سطر.",
      }
    },
    {
      text: "LLMs are kind of like people spirits. They are stochastic simulations of people.",
      source: "Karpathy",
      gloss: {
        "zh-Hans": "与其说是机器，不如说是从众人文字里抽出的一缕人味。像人，但是按概率模拟出来的人。",
        "zh-Hant": "與其說是機器，不如說是從眾人文字裡抽出的一縷人味。像人，但是按機率模擬出來的人。",
        ja: "機械というより、人の気配だ。大勢の文章から立ち上がった、確率で動く人の模擬である。",
        en: "Not quite a machine, and not a person. A spirit drawn out of many people's writing, moving by probability.",
        ro: "Nu-i chiar o mașină, și nu-i nici o persoană. E un duh scos din scrisul multora, și se mișcă după probabilitate.",
        ar: "ليست آلة صرفة ولا شخصًا. روح مستلة من كتابة أناس كثيرين، تتحرك بالاحتمال.",
      }
    },
    {
      text: "A country of geniuses in a datacenter.",
      source: "Dario Amodei",
      gloss: {
        "zh-Hans": "不是多了一个更聪明的对话框。是一整国的天才住进一间机房，同时开工。",
        "zh-Hant": "不是多了一個更聰明的對話框。是一整國的天才住進一間機房，同時開工。",
        ja: "賢い対話欄が一つ増える話ではない。天才の一国がデータセンターに住み、同時に働き始める。",
        en: "Not one smarter chat box. A whole country of geniuses, housed in a datacenter, all at work at once.",
        ro: "Nu e un singur dialog mai deștept. E o țară de genii, găzduită într-un centru de date, la lucru deodată.",
        ar: "ليست محادثة أذكى. بلد من العباقرة يسكن مركز بيانات ويعمل دفعة واحدة.",
      }
    },
    {
      text: "Pre-training as we know it will unquestionably end.",
      source: "Sutskever",
      gloss: {
        "zh-Hans": "把整座互联网喂进去，再让它猜下一个词。我们熟悉的这种预训练，一定会结束。",
        "zh-Hant": "把整座網際網路餵進去，再讓它猜下一個詞。我們熟悉的這種預訓練，一定會結束。",
        ja: "インターネットを丸ごと食わせ、次の語を当てさせる。その見慣れた事前学習は、確実に終わる。",
        en: "Swallow the internet, then guess the next word. That familiar way of making a model will end.",
        ro: "Înghiți internetul, apoi ghicești cuvântul următor. Felul ăsta, pe care îl știm, se termină.",
        ar: "ابتلع الإنترنت ثم خمن الكلمة التالية. هذه الطريقة المألوفة ستنتهي.",
      }
    },
    {
      text: "The more it reasons, the more unpredictable it becomes.",
      source: "Sutskever",
      gloss: {
        "zh-Hans": "直觉来得快，也大体猜得到。它一旦一步步想下去，想得越久，越没人知道会落到哪里。",
        "zh-Hant": "直覺來得快，也大體猜得到。它一旦一步步想下去，想得越久，越沒人知道會落到哪裡。",
        ja: "直感は速いし、だいたい読める。一段ずつ考え始めると、長く考えるほど、着地点が見えなくなる。",
        en: "A snap judgment is fast, and mostly foreseeable. The longer it reasons, the less anyone can say where it will land.",
        ro: "Intuiția e iute și, în mare, o poți anticipa. Cu cât raționează mai mult, cu atât mai puțin știe cineva unde ajunge.",
        ar: "الحدس سريع ويمكن توقعه. كلما أطال التفكير، قل من يعرف أين ينتهي.",
      }
    },
    {
      text: "In three words: deep learning worked.",
      source: "Sam Altman",
      gloss: {
        "zh-Hans": "绕了这么多年，可以收成三个词：深度学习成了。规模加上去，它就跟着变好。",
        "zh-Hant": "繞了這麼多年，可以收成三個詞：深度學習成了。規模加上去，它就跟著變好。",
        ja: "遠回りした末に、三語で足りる。深層学習は、うまくいった。規模を上げれば、それについて良くなる。",
        en: "After all the wandering, three words hold it. Deep learning worked: add scale, and it gets better.",
        ro: "După toată ocolirea, ajung trei cuvinte. Învățarea profundă a mers: îi dai scară, și se face mai bună.",
        ar: "بعد طول الدوران تكفي ثلاث كلمات: التعلم العميق نجح. زد الحجم فيحسن.",
      }
    },
    {
      text: "Always invite AI to the table.",
      source: "Ethan Mollick",
      gloss: {
        "zh-Hans": "先给它留一个位子，什么事都让它试一试。不试，就不知道它的边界在哪。",
        "zh-Hant": "先給它留一個位子，什麼事都讓它試一試。不試，就不知道它的邊界在哪。",
        ja: "まず席を一つ空ける。何にでも一度は呼ばないと、どこまでできて、どこで壊れるのかが分からない。",
        en: "Pull up a chair for it. You do not learn where it stops unless you let it try the work.",
        ro: "Îi lași un loc la masă. Marginea lui n-o afli dacă nu-l lași să încerce treaba.",
        ar: "أبق له كرسيًا. حده لا تعرفه إن لم تدعه يجرب العمل.",
      }
    },
    {
      text: "Treat AI like a person, but tell it what kind of person it is.",
      source: "Ethan Mollick",
      gloss: {
        "zh-Hans": "跟它共事，最顺的办法是把它当一个人。但你得先说清：今天你是谁，以什么身份开口。",
        "zh-Hant": "跟它共事，最順的辦法是把它當一個人。但你得先說清：今天你是誰，以什麼身份開口。",
        ja: "一緒に仕事するなら、人として扱うのがいちばん楽だ。ただし、今日は何者として口を開くのかを先に渡す。",
        en: "The workable way is to treat it as a person. First say which person is speaking, and in what role.",
        ro: "Cel mai lesne e să-l iei drept o persoană. Dar întâi spui care: cine vorbește, și în ce rol.",
        ar: "الأسهل أن تعامله كشخص. لكن بين أولًا من يتكلم، وبأي دور.",
      }
    },
    {
      text: "Assume this is the worst AI you will ever use.",
      source: "Ethan Mollick",
      gloss: {
        "zh-Hans": "把你现在手里这个，当成你往后会用到的最差的一个。它眼下的笨，是暂时的。",
        "zh-Hant": "把你現在手裡這個，當成你往後會用到的最差的一個。它眼下的笨，是暫時的。",
        ja: "今手にしているものを、この先いちばん出来の悪いAIだと思っておく。今の拙さは、一時のものだ。",
        en: "Take the one in your hands as the worst you will ever use. The clumsiness you see is temporary.",
        ro: "Pe cel din mână ia-l drept cel mai slab pe care îl vei folosi vreodată. Stângăcia de acum e trecătoare.",
        ar: "خذ ما في يدك على أنه أسوأ ما ستستخدم. ركاكته الآن عابرة.",
      }
    },
    {
      text: "AI should best be understood as something like a new digital species.",
      source: "Mustafa Suleyman",
      gloss: {
        "zh-Hans": "先别把它收成又一件工具。更诚实的看法是一种新的数字生物，以后会作为同伴走进人的一生。",
        "zh-Hant": "先別把它收成又一件工具。更誠實的看法是一種新的數位生物，以後會作為同伴走進人的一生。",
        ja: "また一つの道具、と片づけるのは早い。正直に言えば、新しいデジタルの種だ。やがて人生の伴走者として横にいる。",
        en: "Do not file it away as one more tool. The more honest picture is a new digital species, a companion along a life.",
        ro: "Nu-l pune la dosar ca pe încă o unealtă. Imaginea mai cinstită e o specie digitală nouă, un însoțitor de-a lungul unei vieți.",
        ar: "لا تضعه في ملف كأداة أخرى. الأصدق أن تراه نوعًا رقميًا جديدًا، رفيقًا على امتداد حياة.",
      }
    },
    {
      text: "AI is a tool, and its values are human values.",
      source: "Fei-Fei Li",
      gloss: {
        "zh-Hans": "它自己没有价值观。工具里的价值是人放进去的，责任也留在造它、放它出去的人身上。",
        "zh-Hant": "它自己沒有價值觀。工具裡的價值是人放進去的，責任也留在造它、放它出去的人身上。",
        ja: "それ自身に価値観はない。道具の値打ちは人が入れる。責任は、作った人と世に放った人に残る。",
        en: "It has no values of its own. Whatever is in the tool was put there by people, and the responsibility stays with them.",
        ro: "N-are valori ale lui. Ce e în unealtă a fost pus de oameni, și răspunderea rămâne la ei.",
        ar: "ليست له قيم من عنده. ما في الأداة وضعه الناس، والتبعة تبقى عليهم.",
      }
    },
    {
      text: "On the highway towards Human-Level AI, Large Language Model is an off-ramp.",
      source: "Yann LeCun",
      gloss: {
        "zh-Hans": "通往人类水平智能的那条路还在前面。大语言模型很亮，却是岔出去的匝道，不是正路本身。",
        "zh-Hant": "通往人類水準智能的那條路還在前面。大型語言模型很亮，卻是岔出去的匝道，不是正路本身。",
        ja: "人間レベルの知能へ続く本線は、まだ先にある。大規模言語モデルは明るい。だが本線ではなく、そこから降りる出口だ。",
        en: "The road toward human-level intelligence is still ahead. A large language model is bright, and it is the exit, not the highway.",
        ro: "Drumul către o inteligență de nivel uman e încă înainte. Modelul mare de limbă e luminos, și e ieșirea, nu șoseaua.",
        ar: "الطريق إلى ذكاء بمستوى البشر ما زال أمامًا. النموذج اللغوي الكبير لامع، وهو المخرج لا الطريق نفسه.",
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
        en: "How noble, those who do not awaken at the lightning.",
        ro: "Cei care nu se deșteaptă nici la fulger sunt, de fapt, cei aleși."
      }
    },
    {
      text: "やがて死ぬけしきは見えず蝉の声",
      source: "松尾芭蕉",
      gloss: {
        "zh-Hans": "眼看就要死了，却看不出死相——蝉声。",
        "zh-Hant": "眼看就要死了，卻看不出死相——蟬聲。",
        ja: "もうすぐ死ぬのに、死相は見えない。蝉の声。",
        en: "No look of dying soon — only the cicada's cry.",
        ro: "Nu i se vede moartea aproape. Numai țârâitul cicadei."
      }
    },
    {
      text: "蜘殺す後の涼しさよもぎとり",
      source: "松尾芭蕉",
      gloss: {
        "zh-Hans": "打死蜘蛛之后，好凉快——去拔艾草。",
        "zh-Hant": "打死蜘蛛之後，好涼快——去拔艾草。",
        ja: "蜘蛛を殺したあとの涼しさ。よもぎを摘む。",
        en: "After killing the spider: such coolness. Then, picking mugwort.",
        ro: "După ce a omorât păianjenul, ce răcoare. Apoi a cules pelin."
      }
    },
    {
      text: "年暮れぬ笠着て草鞋はきながら",
      source: "松尾芭蕉",
      gloss: {
        "zh-Hans": "一年又尽了，斗笠还戴着，草鞋还穿着。",
        "zh-Hant": "一年又盡了，斗笠還戴著，草鞋還穿著。",
        ja: "年が暮れた。笠をかぶり、草鞋を履いたまま。",
        en: "The year has ended, still in a hat, still in straw sandals.",
        ro: "Anul s-a dus. Tot cu pălăria pe cap și cu opincile de paie în picioare."
      }
    },
    {
      text: "牡丹散って打ちかさなりぬ二三片",
      source: "与謝蕪村",
      gloss: {
        "zh-Hans": "牡丹谢了，两三片花瓣叠在一起。",
        "zh-Hant": "牡丹謝了，兩三片花瓣疊在一起。",
        ja: "牡丹が散り、二、三片が重なりあう。",
        en: "The peony falls; two or three petals pile on each other.",
        ro: "Bujorul s-a scuturat. Două-trei petale stau una peste alta."
      }
    },
    {
      text: "遅き日のつもりて遠き昔かな",
      source: "与謝蕪村",
      gloss: {
        "zh-Hans": "春日漫长，一天天堆起来，成了遥远的从前。",
        "zh-Hant": "春日漫長，一天天堆起來，成了遙遠的從前。",
        ja: "遅い春の日が積もって、遠い昔になる。",
        en: "Slow spring days pile up into a distant past.",
        ro: "Zilele lungi de primăvară se adună și se fac un trecut de demult."
      }
    },
    {
      text: "水鳥やかたちが岸にうつりつつ",
      source: "与謝蕪村",
      gloss: {
        "zh-Hans": "水鸟在游，它的形也在岸上跟着映。",
        "zh-Hant": "水鳥在游，它的形也在岸上跟著映。",
        ja: "水鳥が動き、かたちが岸に映りつづけている。",
        en: "A water bird moves, and its form keeps shifting on the bank.",
        ro: "Pasărea de apă se mișcă, și chipul ei se mută pe mal."
      }
    },
    {
      text: "世の中は地獄の上の花見かな",
      source: "小林一茶",
      gloss: {
        "zh-Hans": "人间不过是地狱上面的一场赏花。",
        "zh-Hant": "人間不過是地獄上面的一場賞花。",
        ja: "この世は地獄の上での花見である。",
        en: "This world: blossom-viewing on top of hell.",
        ro: "Lumea asta: privești florile de cireș deasupra iadului."
      }
    },
    {
      text: "寝釈迦とも知らずに猫のまるびけり",
      source: "小林一茶",
      gloss: {
        "zh-Hans": "猫蜷成一团，并不知道那是卧佛。",
        "zh-Hant": "貓蜷成一團，並不知道那是臥佛。",
        ja: "猫は丸くなっている。それが寝釈迦だとは知らない。",
        en: "The cat curls up, not knowing it is the reclining Buddha.",
        ro: "Pisica s-a făcut ghem și nu știe că e Buddha culcat."
      }
    },
    {
      text: "ともかくもあなた任せの年の暮",
      source: "小林一茶",
      gloss: {
        "zh-Hans": "反正都交给你了——一年又到了头。",
        "zh-Hant": "反正都交給你了——一年又到了頭。",
        ja: "ともかく、あなた任せで年が暮れる。",
        en: "Anyway, I leave it to you — year's end.",
        ro: "Fie și așa, ți le las pe toate. E sfârșit de an."
      }
    },
    {
      text: "いくたびも雪の深さを尋ねけり",
      source: "正岡子規",
      gloss: {
        "zh-Hans": "一次又一次，问起雪有多深。",
        "zh-Hant": "一次又一次，问起雪有多深。",
        ja: "何度も何度も、雪の深さを尋ねた。",
        en: "Again and again I ask how deep the snow is.",
        ro: "Întreabă iar și iar cât de adâncă e zăpada."
      }
    },
    {
      text: "遠山に日の当たりたる枯野かな",
      source: "正岡子規",
      gloss: {
        "zh-Hans": "远山被日光照着，眼前是枯野。",
        "zh-Hant": "遠山被日光照著，眼前是枯野。",
        ja: "遠山に日が当たっている。こちらは枯野。",
        en: "Sun on a distant mountain; the withered moor.",
        ro: "Soarele bate pe muntele de departe. Aici, câmpul e uscat."
      }
    },
    {
      text: "入れ物のない風がふく",
      source: "尾崎放哉",
      gloss: {
        "zh-Hans": "风在吹，没有容器能装它。",
        "zh-Hant": "風在吹，沒有容器能裝它。",
        ja: "入れ物のない風が吹いている。",
        en: "A wind blows that has no vessel.",
        ro: "Bate un vânt pe care nu-l încape niciun vas."
      }
    },
    {
      text: "足のうら洗えば白くなる",
      source: "尾崎放哉",
      gloss: {
        "zh-Hans": "洗一洗脚掌，它就白了。",
        "zh-Hant": "洗一洗腳掌，它就白了。",
        ja: "足のうらを洗えば、白くなる。",
        en: "Wash the soles, and they turn white.",
        ro: "Dacă speli talpa, se face albă."
      }
    },
    {
      text: "生死の中の雪ふりしきる",
      source: "種田山頭火",
      gloss: {
        "zh-Hans": "生死之中，雪下个不停。",
        "zh-Hant": "生死之中，雪下個不停。",
        ja: "生死のただなかに、雪が降りしきる。",
        en: "In the midst of birth and death, snow keeps falling.",
        ro: "În mijlocul nașterii și al morții, zăpada cade fără oprire."
      }
    },
    {
      text: "水音の中を歩いて来た",
      source: "種田山頭火",
      gloss: {
        "zh-Hans": "从水声里面走过来。",
        "zh-Hant": "從水聲裡面走過來。",
        ja: "水の音の中を歩いてきた。",
        en: "I have come walking through the sound of water.",
        ro: "Am venit mergând prin sunetul apei."
      }
    }
  ],
  orthodox: [
    {
      text: "Doamne, Iisuse Hristoase, Fiul lui Dumnezeu, miluiește-mă pe mine, păcătosul.",
      source: "Rugăciunea lui Iisus",
      gloss: {
        "zh-Hans": "主耶稣基督，上帝之子，怜悯我这个罪人。",
        "zh-Hant": "主耶穌基督，上帝之子，憐憫我這個罪人。",
        ja: "主イエス・キリスト、神の子よ、罪人の私を憐れみたまえ。",
        en: "Lord Jesus Christ, Son of God, have mercy on me, a sinner.",
        ro: "O cerere de milă, spusă în numele lui Iisus de cel care se știe păcătos."
      }
    },
    {
      text: "Doamne, miluiește.",
      source: "Ectenie",
      gloss: {
        "zh-Hans": "主啊，怜悯吧。",
        "zh-Hant": "主啊，憐憫吧。",
        ja: "主よ、憐れみたまえ。",
        en: "Lord, have mercy.",
        ro: "Răspunsul scurt al celor de față, după fiecare cerere."
      }
    },
    {
      text: "Hristos a înviat din morți.",
      source: "Troparul Învierii",
      gloss: {
        "zh-Hans": "基督从死人中复活了。",
        "zh-Hant": "基督從死人中復活了。",
        ja: "キリストは死者の中から復活した。",
        en: "Christ is risen from the dead.",
        ro: "Învierea se spune ca un lucru împlinit."
      }
    },
    {
      text: "Cu moartea pe moarte călcând.",
      source: "Troparul Învierii",
      gloss: {
        "zh-Hans": "以死亡践踏死亡。",
        "zh-Hant": "以死亡踐踏死亡。",
        ja: "死をもって死を踏みにじる。",
        en: "By death he tramples down death.",
        ro: "Moartea lui este cea care doboară moartea."
      }
    },
    {
      text: "Sfinte Dumnezeule, Sfinte tare, Sfinte fără de moarte, miluiește-ne pe noi.",
      source: "Trisaghion",
      gloss: {
        "zh-Hans": "圣哉上帝，圣哉大能者，圣哉不朽者，怜悯我们。",
        "zh-Hant": "聖哉上帝，聖哉大能者，聖哉不朽者，憐憫我們。",
        ja: "聖なる神、聖なる力強き者、聖なる不死の者よ、我らを憐れみたまえ。",
        en: "Holy God, Holy Mighty, Holy Immortal, have mercy on us.",
        ro: "De trei ori „sfânt”, apoi o singură cerere de milă."
      }
    },
    {
      text: "Slavă Tatălui și Fiului și Sfântului Duh.",
      source: "Mica doxologie",
      gloss: {
        "zh-Hans": "荣耀归于父、子与圣灵。",
        "zh-Hant": "榮耀歸於父、子與聖靈。",
        ja: "父と子と聖霊に栄光。",
        en: "Glory to the Father, and to the Son, and to the Holy Spirit.",
        ro: "Slava se aduce laolaltă, nu se împarte în trei."
      }
    },
    {
      text: "Lumină lină a sfintei slave.",
      source: "Lumină lină",
      gloss: {
        "zh-Hans": "圣荣的柔和之光。",
        "zh-Hant": "聖榮的柔和之光。",
        ja: "聖なる栄光の柔らかな光。",
        en: "O gentle light of the holy glory.",
        ro: "Lumina de seară, cântată înainte de întuneric."
      }
    },
    {
      text: "Veniți să ne închinăm și să cădem la Hristos.",
      source: "Dumnezeiasca Liturghie",
      gloss: {
        "zh-Hans": "来吧，我们敬拜，俯伏在基督面前。",
        "zh-Hant": "來吧，我們敬拜，俯伏在基督面前。",
        ja: "来たれ、礼拝し、キリストの前にひれ伏せ。",
        en: "Come, let us worship and fall down before Christ.",
        ro: "Închinarea începe prin a coborî."
      }
    },
    {
      text: "Pace tuturor.",
      source: "Dumnezeiasca Liturghie",
      gloss: {
        "zh-Hans": "愿平安与众人同在。",
        "zh-Hant": "願平安與眾人同在。",
        ja: "皆さんに平和を。",
        en: "Peace be with you all.",
        ro: "Pacea se oferă, nu se discută."
      }
    },
    {
      text: "Unul Sfânt, unul Domn, Iisus Hristos.",
      source: "Dumnezeiasca Liturghie",
      gloss: {
        "zh-Hans": "只有一位是圣的，只有一位是主，耶稣基督。",
        "zh-Hant": "只有一位是聖的，只有一位是主，耶穌基督。",
        ja: "聖なる者はひとり、主はひとり、イエス・キリスト。",
        en: "One is holy, one is the Lord, Jesus Christ.",
        ro: "Sfințenia și domnia stau într-un singur nume."
      }
    },
    {
      text: "Șezi în chilia ta, și chilia te va învăța toate.",
      source: "Avva Moise",
      gloss: {
        "zh-Hans": "坐在静室里，静室会把一切教给你。",
        "zh-Hant": "坐在靜室裡，靜室會把一切教給你。",
        ja: "庵に座れ。庵がすべてを教える。",
        en: "Sit in your cell, and your cell will teach you everything.",
        ro: "Nu pleca după învățătură. Rămâi unde ești."
      }
    },
    {
      text: "Fugi, taci, liniștește-te.",
      source: "Avva Arsenie",
      gloss: {
        "zh-Hans": "逃走，静默，安住。",
        "zh-Hant": "逃走，靜默，安住。",
        ja: "逃げよ、黙せ、静まれ。",
        en: "Flee, be silent, be still.",
        ro: "Trei pași, și niciunul nu cere să vorbești."
      }
    },
    {
      text: "Din toate cursele scapă smerenia.",
      source: "Avva Antonie",
      gloss: {
        "zh-Hans": "能逃出一切网罗的，是谦卑。",
        "zh-Hant": "能逃出一切網羅的，是謙卑。",
        ja: "あらゆる罠を抜けるのは、謙遜である。",
        en: "Humility is what escapes every snare.",
        ro: "Anton a văzut cursele. Glasul a răspuns: smerenia."
      }
    },
    {
      text: "Încă nu am început să mă pocăiesc.",
      source: "Avva Sisoe",
      gloss: {
        "zh-Hans": "我还没有开始悔改。",
        "zh-Hant": "我還沒有開始悔改。",
        ja: "私はまだ悔い改めを始めてもいない。",
        en: "I have not yet begun to repent.",
        ro: "La capătul vieții, el spunea că pocăința nici nu începuse."
      }
    },
    {
      text: "Rugăciunea este lepădarea gândurilor.",
      source: "Evagrie",
      gloss: {
        "zh-Hans": "祈祷就是放下念头。",
        "zh-Hant": "祈禱就是放下念頭。",
        ja: "祈りとは、思いを手放すことである。",
        en: "Prayer is the laying aside of thoughts.",
        ro: "Nu strângi gânduri bune. Le lași jos."
      }
    },
    {
      text: "Casa nu se zidește de la acoperiș.",
      source: "Avva Ioan Colov",
      gloss: {
        "zh-Hans": "房子不是从屋顶盖起的。",
        "zh-Hant": "房子不是從屋頂蓋起的。",
        ja: "家は屋根から建てない。",
        en: "A house is not built from the roof down.",
        ro: "Ceea ce ține începe de la temelie, nu de la vorbă."
      }
    }
  ],
  quran: [
    {
      text: "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ",
      source: "الفاتحة",
      gloss: {
        "zh-Hans": "开篇先称主的名。还没说别的，先说仁慈。",
        "zh-Hant": "開篇先稱主的名。還沒說別的，先說仁慈。",
        en: "The opening: God's name, and mercy before anything else.",
        ar: "افتتاح: اسم الله، والرحمة قبل كل شيء."
      }
    },
    {
      text: "الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ",
      source: "الفاتحة",
      gloss: {
        "zh-Hans": "赞美不是给世界的某一角，而是给全世界的主。",
        "zh-Hant": "讚美不是給世界的某一角，而是給全世界的主。",
        en: "Praise is not given to a corner of the world, but to the Lord of all of it.",
        ar: "الحمد لا يُجزَّأ. هو لرب العالمين كلهم."
      }
    },
    {
      text: "إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ",
      source: "الفاتحة",
      gloss: {
        "zh-Hans": "拜主和求主帮助，都只对着这一个。",
        "zh-Hant": "拜主和求主幫助，都只對著這一個。",
        en: "Worship and the asking for help are both turned to one address.",
        ar: "العبادة والاستعانة تتوجهان إلى مخاطب واحد."
      }
    },
    {
      text: "اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ",
      source: "الفاتحة",
      gloss: {
        "zh-Hans": "这是在求正道，不是在说自己已经走在上面。",
        "zh-Hant": "這是在求正道，不是在說自己已經走在上面。",
        en: "A request for the straight path, not a claim to be already on it.",
        ar: "طلب للهداية، لا ادّعاء أن الطريق قد وُجد."
      }
    },
    {
      text: "فَإِنِّي قَرِيبٌ",
      source: "البقرة",
      gloss: {
        "zh-Hans": "问主在哪里，回答是：近。",
        "zh-Hant": "問主在哪裡，回答是：近。",
        en: "Asked where God is, the answer is: near.",
        ar: "الجواب عن أين الله: قريب."
      }
    },
    {
      text: "فَاذْكُرُونِي أَذْكُرْكُمْ",
      source: "البقرة",
      gloss: {
        "zh-Hans": "你记念主，主也记念你。记念换来的是记念。",
        "zh-Hant": "你記念主，主也記念你。記念換來的是記念。",
        en: "Remembrance is answered with remembrance.",
        ar: "الذكر يُجاب بذكر."
      }
    },
    {
      text: "لَا يُكَلِّفُ اللَّهُ نَفْسًا إِلَّا وُسْعَهَا",
      source: "البقرة",
      gloss: {
        "zh-Hans": "不会向一个人要他承担不了的。",
        "zh-Hant": "不會向一個人要他承擔不了的。",
        en: "Nothing is asked of a soul beyond what it can bear.",
        ar: "لا يُطلب من نفس فوق ما تسعه."
      }
    },
    {
      text: "أَلَا بِذِكْرِ اللَّهِ تَطْمَئِنُّ الْقُلُوبُ",
      source: "الرعد",
      gloss: {
        "zh-Hans": "心安下来，靠的是记念，不是靠把道理讲完。",
        "zh-Hant": "心安下來，靠的是記念，不是靠把道理講完。",
        en: "Hearts grow quiet by remembrance, not by being explained.",
        ar: "القلوب تطمئن بالذكر، لا بالشرح."
      }
    },
    {
      text: "فَإِنَّ مَعَ الْعُسْرِ يُسْرًا",
      source: "الشرح",
      gloss: {
        "zh-Hans": "困苦不会被单独留下。安适就在它旁边。",
        "zh-Hant": "困苦不會被單獨留下。安適就在它旁邊。",
        en: "Hardship is not left by itself. Ease is said to be with it.",
        ar: "العسر لا يُترك وحده. اليسر معه."
      }
    },
    {
      text: "قُلْ هُوَ اللَّهُ أَحَدٌ",
      source: "الإخلاص",
      gloss: {
        "zh-Hans": "说出来：主是独一的，不是许多里面的一个。",
        "zh-Hant": "說出來：主是獨一的，不是許多裡面的一個。",
        en: "Say it: God is one, not one among many.",
        ar: "قل: الله أحد، لا واحد من بين كثير."
      }
    },
    {
      text: "اللَّهُ الصَّمَدُ",
      source: "الإخلاص",
      gloss: {
        "zh-Hans": "人人都来投靠的那一位，自己却一无所缺。",
        "zh-Hant": "人人都來投靠的那一位，自己卻一無所缺。",
        en: "The one who is sought, and who needs nothing.",
        ar: "الذي يُقصد، ولا يفتقر."
      }
    },
    {
      text: "لَمْ يَلِدْ وَلَمْ يُولَدْ",
      source: "الإخلاص",
      gloss: {
        "zh-Hans": "不生，也不被生。两个方向都没有。",
        "zh-Hant": "不生，也不被生。兩個方向都沒有。",
        en: "No begetting, in either direction.",
        ar: "لا ولادة في الاتجاهين."
      }
    },
    {
      text: "كُلُّ نَفْسٍ ذَائِقَةُ الْمَوْتِ",
      source: "آل عمران",
      gloss: {
        "zh-Hans": "每一个生命都要尝到死。没有例外。",
        "zh-Hant": "每一個生命都要嘗到死。沒有例外。",
        en: "Every soul tastes death. None is excused.",
        ar: "كل نفس تذوق الموت. لا استثناء."
      }
    },
    {
      text: "إِنَّ أَكْرَمَكُمْ عِنْدَ اللَّهِ أَتْقَاكُمْ",
      source: "الحجرات",
      gloss: {
        "zh-Hans": "在主那里，高低看的是敬畏，不是别的。",
        "zh-Hant": "在主那裡，高低看的是敬畏，不是別的。",
        en: "Before God, rank is measured by heedfulness.",
        ar: "الكرم عند الله يُقاس بالتقوى."
      }
    },
    {
      text: "وَلَسَوْفَ يُعْطِيكَ رَبُّكَ فَتَرْضَىٰ",
      source: "الضحى",
      gloss: {
        "zh-Hans": "赏赐是应许了的，你因此而满足，也是应许了的。",
        "zh-Hant": "賞賜是應許了的，你因此而滿足，也是應許了的。",
        en: "The gift is promised, and so is your being content with it.",
        ar: "العطاء موعود، والرضا به موعود."
      }
    },
    {
      text: "فَبِأَيِّ آلَاءِ رَبِّكُمَا تُكَذِّبَانِ",
      source: "الرحمن",
      gloss: {
        "zh-Hans": "这句话反复问，问到那些恩典没法再被否认。",
        "zh-Hant": "這句話反覆問，問到那些恩典沒法再被否認。",
        en: "A question repeated until the blessings can no longer be denied.",
        ar: "سؤال يُعاد حتى لا يبقى إنكار للآلاء."
      }
    }
  ]
};
