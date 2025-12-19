import { RelaySection } from './types';

// NOTE: Mapping runners based on the provided images.
// Images are assumed to be stored in the public/images folder.

export const RELAY_DATA: RelaySection[] = [
  {
    id: 1,
    section: "1区",
    label: "芦ノ湖 〜 小涌谷",
    runners: [
      { 
        name: "安部 陽乃", 
        image: "./images/haruno.jpg", 
        message: "走れば必ず仲間が増える、巻き込み力の持ち主。",
        instagramId: "haruno_run",
        hobby: "青山学院大学"
      },
      { 
        name: "岡 咲良", 
        image: "./images/sakura.jpg", 
        message: "美×知性×勢い×リーダー気質。NCAを体現する大阪美人。",
        instagramId: "sakura_oka",
        hobby: "国際基督教大学"
      }
    ],
    distance: "10.2km",
    timeEstimation: "7:30 - 8:40",
    description: "細道のぼり。箱根ホテル小涌園前・登りの様子に注意。",
    mapImage: "./images/map_sec1.jpg",
    coordinates: "35°13'24.281\"N 139°1'41.9801\"E",
    logistics: "【AB→車へ】スタート地点の公営駐車場を利用。TARO号が選手回収。"
  },
  {
    id: 2,
    section: "2区",
    label: "小涌谷 〜 風祭",
    runners: [
      { 
        name: "吉村 ゆい", 
        image: "./images/yui.jpg", 
        message: "走れば舞台、立てばパリ。ふわふわしてるのに時空すらマイペース。",
        instagramId: "yui_ballet",
        hobby: "津田塾大学"
      },
      { 
        name: "長妻 翔平", 
        image: "./images/shohei.jpg", 
        message: "知識量は博士級、困った時の頼れる兄さん。",
        instagramId: "shohei_sauna",
        targetTime: "42:00",
        hobby: "立教大学"
      }
    ],
    distance: "10.6km",
    timeEstimation: "8:40 - 9:40",
    description: "細道下りスリップ注意。宮ノ下/湯本の街並み・大平台ヘアピンカーブ。",
    mapImage: "./images/map_sec2.jpg",
    coordinates: "35°14'15.445\"N 139°6'59.8576\"E",
    logistics: "【CD→車へ】KODAI号、TARO号待機。"
  },
  {
    id: 3,
    section: "3区",
    label: "風祭 〜 国府津駅",
    runners: [
      { 
        name: "松本 美沙希", 
        image: "./images/misaki.jpg", 
        message: "笑顔とトークでみんなを虜にするおもろ大富豪タイプ。",
        instagramId: "misaki_smile",
        hobby: "立教大学"
      },
      { 
        name: "中島 愛", 
        image: "./images/ai.jpg", 
        message: "ショッキングピンク級の元気と笑顔で、愛に溢れた天然モンスター。",
        instagramId: "ai_pink",
        hobby: "青山学院大学"
      }
    ],
    distance: "9.5km",
    timeEstimation: "9:40 - 10:30",
    description: "3人のため歩行者注意。小田原城をバックに・酒匂橋。",
    mapImage: "./images/map_sec3.jpg",
    coordinates: "35°16'13.2362\"N 139°11'44.6456\"E",
    logistics: "【EF→車へ】3区であいみさきがKODAI号になる。（ふみ陸と交代させる）"
  },
  {
    id: 4,
    section: "4区",
    label: "国府津駅 〜 大磯駅",
    runners: [
      { 
        name: "山田 和史", 
        image: "./images/kazufumi.jpg", 
        message: "群馬からきた首のネックレスが本人説の、みんなに笑顔を届けるおしゃべりバスーカー。",
        instagramId: "kazufumi_gunma",
        hobby: "高崎経済大学"
      },
      { 
        name: "徳長 理彩", 
        image: "./images/risa.jpg", 
        message: "一年生とは思えないしっかり者美人、スタイルも髪色も完成度高め。",
        instagramId: "risa_style",
        hobby: "早稲田大学"
      }
    ],
    distance: "11.8km",
    timeEstimation: "10:30 - 11:40",
    description: "長者町信号左折。写真を通りに直進。",
    mapImage: "./images/map_sec4.jpg",
    coordinates: "35°19'19.3097\"N 139°13'41.6762\"E",
    logistics: "【GH→車へ】K, K、はるの、咲良、ふみ、りくはホテルで拾ってもらう。"
  },
  {
    id: 5,
    section: "5区",
    label: "大磯駅 〜 辻堂",
    runners: [
      { 
        name: "佐藤 希", 
        image: "./images/nozomi_sato.jpg", 
        message: "不思議生命体。ランを愛し、走りもファッションもレベル高めのレベチモンスター。",
        instagramId: "nozomi_monster",
        hobby: "中央学院大学"
      },
      { 
        name: "小林 陸", 
        image: "./images/riku.jpg", 
        message: "将来大物感漂うSFC高身長イケメン。実はNCA好きでかわいい一面もある。",
        instagramId: "riku_sfc",
        hobby: "慶應義塾大学"
      }
    ],
    distance: "13.0km",
    timeEstimation: "11:40 - 12:55",
    description: "写真通りに直進・浜須賀信号左。湘南大橋。",
    mapImage: "./images/map_sec5.jpg",
    coordinates: "35°19'13.9048\"N 139°25'36.7018\"E",
    logistics: "【IJ→車へ】T、あい、みさき、りさ、あきほはTAROさん号→3区に行ってもらう。"
  },
  {
    id: 6,
    section: "6区",
    label: "辻堂 〜 近くに駅なし",
    runners: [
      { 
        name: "小林 悠", 
        image: "./images/haruka.jpg", 
        message: "はーちゃんがいるだけで世界がハッピー。インド魂全開で無双しみんなを巻き込むママ的存在。",
        instagramId: "haruka_india",
        hobby: "国際基督教大学"
      },
      { 
        name: "松尾 玲奈", 
        image: "./images/rena.jpg", 
        message: "純ジャパ疑惑出るほどのオーラと強さを持つ存在。美人ライフセーバー。",
        instagramId: "rena_life",
        hobby: "国際基督教大学"
      }
    ],
    distance: "5.9km",
    timeEstimation: "12:55 - 13:40",
    description: "歩道橋を避けるために右側を長く走る・藤沢跨線橋（車は上、進行寺坂）。",
    mapImage: "./images/map_sec6.jpg",
    coordinates: "35°20'59.0971\"N 139°29'12.6809\"E",
    logistics: "【KL→車へ】シンジ号、こうすけ、はな、ふうか、拓巳、ノゾミ、さき、タイヨウ。"
  },
  {
    id: 7,
    section: "7区",
    label: "藤沢 〜 東戸塚駅",
    runners: [
      { 
        name: "菊池 康介", 
        image: "./images/kosuke.jpg", 
        message: "行動予測不能で声はソプラノ。ISTP(巨匠)。",
        instagramId: "kosuke_soprano",
        hobby: "神戸市外国語大学"
      },
      { 
        name: "田邊 晴人", 
        image: "./images/haruto.jpg", 
        message: "天才バカの狭間を駆ける。出会って3秒で友達になれるコミュ力の化身。",
        instagramId: "haruto_comm",
        hobby: "東洋大学"
      }
    ],
    distance: "8.1km",
    timeEstimation: "13:40 - 14:30",
    description: "一番心配な区間。給水所前（旧東海道）。",
    mapImage: "./images/map_sec7.jpg",
    coordinates: "35°24'10.5383\"N 139°31'3.086\"E",
    logistics: "【MN→車へ】りさ、SHOHEI、辻堂でK,Tシンジ号が合流。"
  },
  {
    id: 8,
    section: "8区",
    label: "東戸塚駅 〜 横浜駅",
    runners: [
      { 
        name: "川島 泰葉", 
        image: "./images/yasuha.jpg", 
        message: "なんでもやってみる素敵なポジティブガールは面白い！デビル天使。",
        instagramId: "yasuha_positive",
        hobby: "立教大学"
      },
      { 
        name: "笹鹿 はな", 
        image: "./images/hana.jpg", 
        message: "素直で可愛くてみんなに愛されるスポーツガールは、鳥取の星！",
        instagramId: "hana_tottori",
        hobby: "立教大学"
      }
    ],
    distance: "9.6km",
    timeEstimation: "14:30 - 15:30",
    description: "写真通りに直進。保土ヶ谷駅の街並み。",
    mapImage: "./images/map_sec8.jpg",
    coordinates: "35°26'19.788\"N 139°35'6.1012\"E",
    logistics: "【OP→車へ】8→9から、shinji号チームは全員電車。しんじは車を置きに帰る。"
  },
  {
    id: 9,
    section: "9区",
    label: "横浜駅 〜 川崎駅",
    runners: [
      { 
        name: "小川 拓海", 
        image: "./images/takumi.jpg", 
        message: "勢いと物語の渦中にいつもいる不死身のDJ。恋愛モンスター。",
        instagramId: "takumi_dj",
        hobby: "国際基督教大学"
      },
      { 
        name: "根岸 楓香", 
        image: "./images/fuka.jpg", 
        message: "明るくみんなを応援するチアガール。あの笑顔で応援されれば誰もイチコロ。",
        instagramId: "fuka_cheer",
        hobby: "立教大学"
      }
    ],
    distance: "11.0km",
    timeEstimation: "15:30 - 16:40",
    description: "青木通り信号歩道橋渡右・鶴見駅信号横断歩道進め。鶴見温泉、鶴見駅前あたり。",
    mapImage: "./images/map_sec9.jpg",
    coordinates: "35°31'42.9308\"N 139°42'6.5678\"E",
    logistics: "【QR→電車】9→10、新馬場駅に集合し、アンカーを見送ったら、みんな電車で日本橋へ。"
  },
  {
    id: 10,
    section: "10区",
    label: "川崎駅 〜 新馬場駅",
    runners: [
      { 
        name: "寺崎 希海", 
        image: "./images/nozomi_terasaki.jpg", 
        message: "才色兼備のスーパーエリート。マッチョと餃子のために今日も走る。",
        instagramId: "nozomi_gyoza",
        hobby: "慶應義塾大学"
      },
      { 
        name: "大野 真路", 
        image: "./images/shinji.jpg", 
        message: "クールそうに見えて、実は熱いハートの持ち主。和製ボンジョヴィ。",
        instagramId: "shinji_bonjovi",
        hobby: "国際基督教大学"
      }
    ],
    distance: "11.3km",
    timeEstimation: "16:40 - 17:50",
    description: "六郷橋を渡り階段下る・六郷橋北詰交差点左・大森警察署前。六郷橋。",
    mapImage: "./images/map_sec10.jpg",
    coordinates: "35°32'29.8417\"N 139°41'57.1405\"E",
    logistics: "電車で先回りで日本橋で下ろしてもらう。"
  },
  {
    id: 11,
    section: "Finish",
    label: "新馬場駅 〜 大手町",
    runners: [
      { 
        name: "西川 咲季", 
        image: "./images/saki.jpg", 
        message: "ホントは速いのにファンランを貫くNCAのマザー的存在。",
        instagramId: "saki_mother",
        hobby: "栄養士"
      },
      { 
        name: "山本 大洋", 
        image: "./images/taiyo.jpg", 
        message: "オシャレオーラ全開で、お兄ちゃんみたいな優しさも兼ね備えたNike隊長。",
        instagramId: "taiyo_nike",
        hobby: "獨協大学"
      },
      { 
        name: "山田 太陽", 
        image: "./images/tida.jpg", 
        message: "中身のギャップが魅力。奄美大島出身の人生何周目か不明な逸材。",
        instagramId: "tida_amami",
        hobby: "航空自衛隊"
      },
      { 
        name: "内田 奏音", 
        image: "./images/kanade.jpg", 
        message: "突如舞い降りた元天笑団キュートランナー。たまに出る方言がかわいい。",
        instagramId: "kanade_cute",
        hobby: "社会人"
      }
    ],
    distance: "1.0km",
    timeEstimation: "17:50 - 19:00",
    description: "新ハツ山橋直進。芝公園あたりで東京タワーをバックに。合流から一緒に走れたらありがたい。",
    mapImage: "./images/map_sec11.jpg",
    coordinates: "35°41'6.1454\"N 139°45'6.2754\"E",
    logistics: "日本橋から全員ジョイン。"
  }
];