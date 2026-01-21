// frogs.js
// 台灣兩棲類資料庫 - 本機音效版

const amphibians = [
    // --- 蟾蜍科 ---
    { 
        name: "盤古蟾蜍", 
        eng: "Bufo bankorensis", 
        cat: "蟾蜍", 
        status: "特有種/常見", 
        wikiTerm: "盤古蟾蜍",
        sound: "sounds/bufo_bankorensis.mp3" 
    },
    { 
        name: "黑眶蟾蜍", 
        eng: "Duttaphrynus melanostictus", 
        cat: "蟾蜍", 
        status: "常見/有毒",
        sound: "sounds/duttaphrynus_melanostictus.mp3" 
    },

    // --- 樹蟾科 ---
    { 
        name: "中國樹蟾", 
        eng: "Hyla chinensis", 
        cat: "樹蟾", 
        status: "原生/雨怪",
        sound: "sounds/hyla_chinensis.mp3" 
    },

    // --- 樹蛙科 ---
    { 
        name: "臺北樹蛙", 
        eng: "Zhangixalus taipeianus", 
        cat: "樹蛙", 
        status: "特有種/保育/冬季", 
        wikiTerm: "台北樹蛙",
        sound: "sounds/zhangixalus_taipeianus.mp3" 
    },
    { name: "翡翠樹蛙", eng: "Zhangixalus prasinatus", cat: "樹蛙", status: "特有種/保育", sound: "sounds/zhangixalus_prasinatus.mp3" },
    { name: "莫氏樹蛙", eng: "Zhangixalus moltrechti", cat: "樹蛙", status: "特有種/常見/紅眼", sound: "sounds/zhangixalus_moltrechti.mp3" },
    { name: "諸羅樹蛙", eng: "Zhangixalus arvalis", cat: "樹蛙", status: "特有種/保育/竹林", sound: "sounds/zhangixalus_arvalis.mp3" },
    { name: "橙腹樹蛙", eng: "Zhangixalus aurantiventris", cat: "樹蛙", status: "特有種/保育/稀有", sound: "sounds/zhangixalus_aurantiventris.mp3" },
    { name: "褐樹蛙", eng: "Buergeria robusta", cat: "樹蛙", status: "特有種/常見/溪流", sound: "sounds/buergeria_robusta.mp3" },
    { name: "太田樹蛙", eng: "Buergeria otai", cat: "樹蛙", status: "原生/溪流/叫聲", sound: "sounds/buergeria_otai.mp3" },
    { name: "艾氏樹蛙", eng: "Kurixalus eiffingeri", cat: "樹蛙", status: "原生/竹筒/護卵", sound: "sounds/kurixalus_eiffingeri.mp3" },
    { 
        name: "面天樹蛙", 
        eng: "Kurixalus idiootocus", 
        cat: "樹蛙", 
        status: "特有種/小型/逼逼",
        sound: "sounds/kurixalus_idiootocus.mp3" 
    },
    { name: "碧眼樹蛙", eng: "Kurixalus berylliniris", cat: "樹蛙", status: "特有種/綠眼", sound: "sounds/kurixalus_berylliniris.mp3" },
    { name: "王氏樹蛙", eng: "Kurixalus wangi", cat: "樹蛙", status: "特有種/屏東", sound: "sounds/kurixalus_wangi.mp3" },
    { name: "布氏樹蛙", eng: "Polypedates braueri", cat: "樹蛙", status: "原生/白頷/常見", wikiTerm: "布氏樹蛙", sound: "sounds/polypedates_braueri.mp3" },

    // --- 赤蛙科 ---
    { 
        name: "斯文豪氏赤蛙", 
        eng: "Odorrana swinhoana", 
        cat: "赤蛙", 
        status: "特有種/叫聲鳥鳴",
        sound: "sounds/odorrana_swinhoana.mp3" 
    },
    { name: "梭德氏赤蛙", eng: "Rana sauteri", cat: "赤蛙", status: "特有種/急流", sound: "sounds/rana_sauteri.mp3" },
    { name: "長腳赤蛙", eng: "Rana longicrus", cat: "赤蛙", status: "原生/紅大腿/冬季", sound: "sounds/rana_longicrus.mp3" },
    { name: "金線蛙", eng: "Pelophylax fukienensis", cat: "赤蛙", status: "保育/綠色/水草", wikiTerm: "福建側褶蛙", sound: "sounds/pelophylax_fukienensis.mp3" },
    { name: "拉都希氏赤蛙", eng: "Hylarana latouchii", cat: "赤蛙", status: "常見/闊褶蛙/拉肚子", sound: "sounds/hylarana_latouchii.mp3" },
    { name: "貢德氏赤蛙", eng: "Hylarana guentheri", cat: "赤蛙", status: "常見/狗叫聲", sound: "sounds/hylarana_guentheri.mp3" },
    { name: "臺北赤蛙", eng: "Hylarana taipehensis", cat: "赤蛙", status: "保育/稀有/單黃線", wikiTerm: "台北赤蛙", sound: "sounds/hylarana_taipehensis.mp3" },
    { name: "腹斑蛙", eng: "Babina adenopleura", cat: "赤蛙", status: "常見/給給給", sound: "sounds/babina_adenopleura.mp3" },
    { name: "豎琴蛙", eng: "Nidirana okinavana", cat: "赤蛙", status: "保育/稀有/登登登", sound: "sounds/nidirana_okinavana.mp3" },

    // --- 叉舌蛙科 ---
    { name: "澤蛙", eng: "Fejervarya kawamurai", cat: "赤蛙", status: "常見/田蛙/脊線", wikiTerm: "澤蛙", sound: "sounds/fejervarya_kawamurai.mp3" },
    { name: "海蛙", eng: "Fejervarya cancrivora", cat: "赤蛙", status: "稀有/耐鹽/紅樹林", sound: "sounds/fejervarya_cancrivora.mp3" },
    { name: "虎皮蛙", eng: "Hoplobatrachus rugulosus", cat: "赤蛙", status: "保育/水雞/大嗓門", sound: "sounds/hoplobatrachus_rugulosus.mp3" },
    { name: "福建大頭蛙", eng: "Limnonectes fujianensis", cat: "赤蛙", status: "常見/古氏赤蛙/水溝", sound: "sounds/limnonectes_fujianensis.mp3" },

    // --- 狹口蛙科 ---
    { name: "小雨蛙", eng: "Microhyla fissipes", cat: "狹口蛙", status: "常見/幾何紋/大聲", sound: "sounds/microhyla_fissipes.mp3" },
    { name: "黑蒙西氏小雨蛙", eng: "Microhyla heymonsi", cat: "狹口蛙", status: "原生/黑背線", sound: "sounds/microhyla_heymonsi.mp3" },
    { name: "巴氏小雨蛙", eng: "Microhyla butleri", cat: "狹口蛙", status: "原生/稀有", sound: "sounds/microhyla_butleri.mp3" },
    { name: "史丹吉氏小雨蛙", eng: "Micryletta steinegeri", cat: "狹口蛙", status: "特有種/落葉堆", sound: "sounds/micryletta_steinegeri.mp3" },
    { name: "亞洲錦蛙", eng: "Kaloula pulchra", cat: "外來種", status: "外來種/花狹口蛙", sound: "sounds/kaloula_pulchra.mp3" },

    // --- 山椒魚科 (無聲) ---
    { name: "阿里山山椒魚", eng: "Hynobius arisanensis", cat: "山椒魚", status: "特有種/保育/高山", sound: null },
    { name: "臺灣山椒魚", eng: "Hynobius formosanus", cat: "山椒魚", status: "特有種/保育/高山", wikiTerm: "臺灣山椒魚", sound: null },
    { name: "觀霧山椒魚", eng: "Hynobius fucus", cat: "山椒魚", status: "特有種/保育/雪霸", sound: null },
    { name: "南湖山椒魚", eng: "Hynobius glacialis", cat: "山椒魚", status: "特有種/保育/冰河孑遺", sound: null },
    { name: "楚南氏山椒魚", eng: "Hynobius sonani", cat: "山椒魚", status: "特有種/保育/針闊葉林", sound: null },

    // --- 其他外來種 ---
    { name: "斑腿樹蛙", eng: "Polypedates megacephalus", cat: "外來種", status: "外來種/強勢/似布氏", sound: "sounds/polypedates_megacephalus.mp3" },
    { name: "美洲牛蛙", eng: "Lithobates catesbeianus", cat: "外來種", status: "外來種/食肉/巨大", sound: "sounds/lithobates_catesbeianus.mp3" },
    { name: "海蟾蜍", eng: "Rhinella marina", cat: "外來種", status: "外來種/劇毒/世界百大", sound: "sounds/rhinella_marina.mp3" }
];