const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function main() {
  // ユーザー情報
  const taro = await prisma.user.upsert({
    where: { email: "example1@rakus-partners.co.jp" },
    update: {},
    create: {
      firstName: "テスト",
      lastName: "太郎",
      email: "example1@rakus-partners.co.jp",
      password: "Example1",
      confirmPassword: "Example1",
      authId: "lx3GELGo9kbsM1NxkhaHMU08ISa2",
      isAdmin: true,
    },
  });

  const hanako = await prisma.user.upsert({
    where: { email: "example2@rakus-partners.co.jp" },
    update: {},
    create: {
      firstName: "テスト",
      lastName: "花子",
      email: "example2@rakus-partners.co.jp",
      password: "Example2",
      confirmPassword: "Example2",
      authId: "WzbFGHPVSqO8JwOfOr89xD6JsDH2",
      isAdmin: false,
    },
  });
  //投票
  await prisma.questionnaire.create({
    data: {
      id:1,
      name:"テストテスト",
      description:"テストです。",
      createdAt:new Date(),
      category:1,
      startDate:"2023-05-10T08:16:34.851Z",
      endDate:"2023-05-30T08:16:34.851Z",
      author:1,
    },
  });
  await prisma.questionnaire.create({
    data: {
      id:2,
      name:"テストテスト2",
      description:"テストです。",
      createdAt:new Date(),
      category:2,
      startDate:"2023-06-01T08:16:34.851Z",
      endDate:"2023-06-30T08:16:34.851Z",
      author:1,
    },
  });
  await prisma.questionnaire.create({
    data: {
      id:3,
      name:"テストテスト3",
      description:"テストです。",
      createdAt:new Date(),
      category:1,
      startDate:"2023-06-01T08:16:34.851Z",
      endDate:"2023-06-30T08:16:34.851Z",
      author:1,
    },
  });
  await prisma.questionnaire.create({
    data: {
      id:4,
      name:"テストテスト4",
      description:"テストです。",
      createdAt:new Date(),
      category:1,
      startDate:"2023-07-01T08:16:34.851Z",
      endDate:"2023-07-30T08:16:34.851Z",
      author:1,
    },
  });
  await prisma.questionnaire.create({
    data: {
      id:5,
      name:"テストテスト5",
      description:"テストです。",
      createdAt:new Date(),
      category:2,
      startDate:"2023-07-01T08:16:34.851Z",
      endDate:"2023-07-30T08:16:34.851Z",
      author:1,
    },
  });
  await prisma.questionnaire.create({
    data: {
      id:6,
      name:"テストテスト6",
      description:"テストです。",
      createdAt:new Date(),
      category:2,
      startDate:"2023-08-01T08:16:34.851Z",
      endDate:"2023-08-30T08:16:34.851Z",
      author:1,
    },
  });
  await prisma.questionnaire.create({
    data: {
      id:7,
      name:"テストテスト7",
      description:"テストです。",
      createdAt:new Date(),
      category:2,
      startDate:"2023-10-01T08:16:34.851Z",
      endDate:"2023-10-30T08:16:34.851Z",
      author:1,
    },
  });
  await prisma.polledItem.create({
    data: {
      id:1,
      itemId:4,//既存itemIdに後で変更
      questionnairId:3
    },
  });
  await prisma.polledItem.create({
    data: {
      id:2,
      itemId:5,//既存itemIdに後で変更
      questionnairId:2
    },
  });
  await prisma.polledItem.create({
    data: {
      id:3,
      itemId:5,//既存itemIdに後で変更
      questionnairId:3
    },
  });
  await prisma.polledItem.create({
    data: {
      id:4,
      itemId:4,//既存itemIdに後で変更
      questionnairId:2
    },
  });
  await prisma.polledItem.create({
    data: {
      id:5,
      itemId:5,//既存itemIdに後で変更
      questionnairId:1
    },
  });
  await prisma.polledItem.create({
    data: {
      id:6,
      itemId:4,//既存itemIdに後で変更
      questionnairId:1
    },
  });
  await prisma.poll.create({
    data: {
      userId:2,
      questionnaireId:2,
      result:4,
      category:1,
      createdAt:new Date()
    },
  });
  await prisma.poll.create({
    data: {
      userId:2,
      questionnaireId:2,
      result:5,
      category:1,
      createdAt:new Date()
    },
  });
  await prisma.poll.create({
    data: {
      userId:2,
      questionnaireId:1,
      result:4,
      category:1,
      createdAt:new Date()
    },
  });
  await prisma.poll.create({
    data: {
      userId:2,
      questionnaireId:1,
      result:5,
      category:1,
      createdAt:new Date()
    },
  });
//


  // 商品カテゴリー
  await prisma.itemCategory.upsert({
    where: { name: "コーヒー/ダーク(深煎り)" },
    update: {},
    create: {
      name: "コーヒー/ダーク(深煎り)",
    },
  });

  await prisma.ItemCategory.upsert({
    where: { name: "コーヒー/ダーク(中煎り)" },
    update: {},
    create: {
      name: "コーヒー/ダーク(中煎り)",
    },
  });

  await prisma.ItemCategory.upsert({
    where: { name: "コーヒー/ダーク(浅煎り)" },
    update: {},
    create: {
      name: "コーヒー/ダーク(浅煎り)",
    },
  });

  await prisma.ItemCategory.upsert({
    where: { name: "コーヒー/(カフェインレス)" },
    update: {},
    create: {
      name: "コーヒー/カフェインレス",
    },
  });

  await prisma.ItemCategory.upsert({
    where: { name: "ティー" },
    update: {},
    create: {
      name: "ティー",
    },
  });

  await prisma.ItemCategory.upsert({
    where: { name: "ココア" },
    update: {},
    create: {
      name: "ココア",
    },
  });

  await prisma.ItemCategory.upsert({
    where: { name: "ウォーターサーバー" },
    update: {},
    create: {
      name: "ウォーターサーバー",
    },
  });

  await prisma.ItemCategory.upsert({
    where: { name: "お菓子" },
    update: {},
    create: {
      name: "お菓子",
    },
  });

  await prisma.ItemCategory.upsert({
    where: { name: "その他" },
    update: {},
    create: {
      name: "その他",
    },
  });


  // 商品情報
  await prisma.item.upsert({
    where: { name: "ブライトブレンド" },
    update: {},
    create: {
      name: "ブライトブレンド",
      description: "ミディアムローストの豆をブレンドしたブライトブレンドは、キャラメル、ベリー、はちみつのバランスのとれたほんのり甘い香りが楽しめる一杯です。",
      itemCategory: 2,
      inTheOffice: true,
      author: 1,
      approval: true,
      pollItem: false,
      isDiscontinued: false
    },
  });

  await prisma.item.upsert({
    where: { name: "LAVAZZA CLASSICO" },
    update: {},
    create: {
      name: "LAVAZZA CLASSICO",
      description: "しっかりとした珈琲感とドライフルーツの風味が特徴のミディアムローストコーヒー。バランスのとれたリッチな味わいがお好みの方へオススメです。",
      itemCategory: 2,
      inTheOffice: false,
      author: 1,
      approval: true,
      pollItem: false,
      isDiscontinued: false
    },
  });

  await prisma.item.upsert({
    where: { name: "LAVAZZA INTENSO" },
    update: {},
    create: {
      name: "LAVAZZA INTENSO",
      description: "スモーキーで香ばしい力強いフレーバーのダークローストコーヒー。キャラメリゼしたような風味と濃厚な味わいはリアルミルクフロスとも相性抜群です。",
      itemCategory: 1,
      inTheOffice: false,
      author: 1,
      approval: true,
      pollItem: false,
      isDiscontinued: false
    },
  });

  await prisma.item.upsert({
    where: { name: "プレミアム スムースロースト" },
    update: {},
    create: {
      name: "プレミアム スムースロースト",
      description: "ほど良いコクと軽やかで優しいアフターテイスト。一日のどんな気分にも寄り添う、プレミアムにスムーズな一杯です。",
      itemCategory: 3,
      inTheOffice: false,
      author: 1,
      approval: true,
      pollItem: false,
      isDiscontinued: false
    },
  });
  
  await prisma.item.upsert({
    where: { name: "アメリカンロースト" },
    update: {},
    create: {
      name: "アメリカンロースト",
      description: "口当たりの良い さわやかな酸味。ほのかな甘いノートが最後に残ります。",
      itemCategory: 3,
      inTheOffice: false,
      author: 1,
      approval: true,
      pollItem: false,
      isDiscontinued: false
    },
  });

  await prisma.item.upsert({
    where: { name: "コロンビア" },
    update: {},
    create: {
      name: "コロンビア",
      description: "100%南米コロンビア産の生豆使用。香ばしい香りと酸味・甘味・コクのバランスはマイルドそのものです。",
      itemCategory: 2,
      inTheOffice: false,
      author: 1,
      approval: true,
      pollItem: false,
      isDiscontinued: false
    },
  });

  await prisma.item.upsert({
    where: { name: "スマトラ" },
    update: {},
    create: {
      name: "スマトラ",
      description: "100%スマトラ島産アラビカ豆。火山性土で育った豆からの力強い個性的なアロマは、複雑で深いコク、そしてほのかな甘みへと続きます。",
      itemCategory: 1,
      inTheOffice: false,
      author: 1,
      approval: true,
      pollItem: false,
      isDiscontinued: false
    },
  });

  await prisma.item.upsert({
    where: { name: "プレミアスムースデカフ" },
    update: {},
    create: {
      name: "プレミアスムースデカフ",
      description: "市場のニーズが高まっているデカフェコーヒー。フルーティーな軽さの中に程よいコクがアフターテイストを満たします。",
      itemCategory: 4,
      inTheOffice: false,
      author: 1,
      approval: true,
      pollItem: false,
      isDiscontinued: false
    },
  });

  await prisma.item.upsert({
    where: { name: "イングリッシュブレックファスト" },
    update: {},
    create: {
      name: "イングリッシュブレックファスト",
      description: "バランスのよい渋味。しっかりとした味わい豊かな紅茶。",
      itemCategory: 5,
      inTheOffice: false,
      author: 1,
      approval: true,
      pollItem: false,
      isDiscontinued: false
    },
  });

  await prisma.item.upsert({
    where: { name: "アールグレイ" },
    update: {},
    create: {
      name: "アールグレイ",
      description: "爽やかなベルガモットの香りとほどよい風味が特徴的なお茶。シトラスとフルーツの香りとほのかに感じるスモーキーな香りのブレンドを楽しんでいただけます。",
      itemCategory: 5,
      inTheOffice: false,
      author: 1,
      approval: true,
      pollItem: false,
      isDiscontinued: false
    },
  });

  await prisma.item.upsert({
    where: { name: "レモンハーブ" },
    update: {},
    create: {
      name: "レモンハーブ",
      description: "軽やかなレモンと柑橘系の香りに、フローラルなハチミツの風味が華を添えるノンカフェインのハーブティーです。",
      itemCategory: 5,
      inTheOffice: false,
      author: 1,
      approval: true,
      pollItem: false,
      isDiscontinued: false
    },
  });

  await prisma.item.upsert({
    where: { name: "ジャスミン茶" },
    update: {},
    create: {
      name: "ジャスミン茶",
      description: "ジャスミンの芳香を採りいれた渋みの少ないさっぱりとした緑茶です。",
      itemCategory: 5,
      inTheOffice: false,
      author: 1,
      approval: true,
      pollItem: false,
      isDiscontinued: false
    },
  });

  await prisma.item.upsert({
    where: { name: "緑茶" },
    update: {},
    create: {
      name: "緑茶",
      description: "豊かな香りとコク、まろやかな風味。深蒸し煎茶から引き出される ほど良い渋味と旨味は日本人の好みにぴったり。 国産茶葉100%使用。",
      itemCategory: 5,
      inTheOffice: false,
      author: 1,
      approval: true,
      pollItem: false,
      isDiscontinued: false
    },
  });

  await prisma.item.upsert({
    where: { name: "ホットココア" },
    update: {},
    create: {
      name: "ホットココア",
      description: "口当たりがよく、滑らかな舌触りのココアです。コク深いミルクチョコレートの風味は、ほっと一息つくリラックスタイムにピッタリです。女性にうれしい低カロリードリンク。（1杯あたり66.1kcal）",
      itemCategory: 6,
      inTheOffice: false,
      author: 1,
      approval: true,
      pollItem: false,
      isDiscontinued: false
    },
  });

  await prisma.item.upsert({
    where: { name: "煎茶" },
    update: {},
    create: {
      name: "煎茶",
      description: "緑茶の説明が入ります",
      itemCategory: 7,
      inTheOffice: true,
      author: 1,
      approval: true,
      pollItem: false,
      isDiscontinued: false
    },
  });

  await prisma.item.upsert({
    where: { name: "紅茶" },
    update: {},
    create: {
      name: "紅茶",
      description: "紅茶の説明が入ります",
      itemCategory: 7,
      inTheOffice: true,
      author: 1,
      approval: true,
      pollItem: false,
      isDiscontinued: false
    },
  });

  await prisma.item.upsert({
    where: { name: "コーンポタージュ" },
    update: {},
    create: {
      name: "コーンポタージュ",
      description: "コーンポタージュの説明が入ります",
      itemCategory: 7,
      inTheOffice: true,
      author: 1,
      approval: true,
      pollItem: false,
      isDiscontinued: false
    },
  });

  await prisma.item.upsert({
    where: { name: "さわやかドリンクヨーグルト風味" },
    update: {},
    create: {
      name: "さわやかドリンクヨーグルト風味",
      description: "さわやかドリンクヨーグルト風味の説明が入ります",
      itemCategory: 7,
      inTheOffice: true,
      author: 1,
      approval: true,
      pollItem: false,
      isDiscontinued: false
    },
  });

  await prisma.item.upsert({
    where: { name: "コンソメスープ" },
    update: {},
    create: {
      name: "コンソメスープ",
      description: "コンソメスープの説明が入ります",
      itemCategory: 7,
      inTheOffice: false,
      author: 1,
      approval: true,
      pollItem: false,
      isDiscontinued: false
    },
  });

  await prisma.item.upsert({
    where: { name: "アップルジュース" },
    update: {},
    create: {
      name: "アップルジュース",
      description: "アップルジュースの説明が入ります",
      itemCategory: 7,
      inTheOffice: false,
      author: 1,
      approval: true,
      pollItem: false,
      isDiscontinued: false
    },
  });

  await prisma.item.upsert({
    where: { name: "おっとっと" },
    update: {},
    create: {
      name: "おっとっと",
      description: "おっとっとは、ポテト生地を軽く焼き上げたノンフライスナック。",
      itemCategory: 8,
      inTheOffice: false,
      author: 1,
      approval: true,
      pollItem: true,
      isDiscontinued: false
    },
  });

  await prisma.item.upsert({
    where: { name: "ポテロング" },
    update: {},
    create: {
      name: "ポテロング",
      description: "サックサク ノンフライ しお味 塩味が効いたポテトの旨味とサックサク食感がくせになる！おいしくて、ながーいノンフライスナック！！",
      itemCategory: 8,
      inTheOffice: false,
      author: 1,
      approval: true,
      pollItem: true,
      isDiscontinued: false
    },
  });

  await prisma.item.upsert({
    where: { name: "じゃがりこ" },
    update: {},
    create: {
      name: "じゃがりこ",
      description: "独自の製法で「はじめカリッとあとからサクサク」の心地よい食感が楽しめます。にんじんとパセリのつぶつぶがおいしそうなじゃがりこの定番、サラダ味です。",
      itemCategory: 8,
      inTheOffice: false,
      author: 1,
      approval: true,
      pollItem: true,
      isDiscontinued: false
    },
  });

  await prisma.item.upsert({
    where: { name: "堅あげポテト" },
    update: {},
    create: {
      name: "堅あげポテト",
      description: "噛むほどうまい！厚切りじゃがいもをゆっくり丁寧にフライしました。堅い食感で噛むほどにじゃがいもの味わいが楽しめるポテトチップスです。",
      itemCategory: 8,
      inTheOffice: false,
      author: 1,
      approval: true,
      pollItem: true,
      isDiscontinued: false
    },
  });

  await prisma.item.upsert({
    where: { name: "ポテトチップス のりしお" },
    update: {},
    create: {
      name: "ポテトチップス のりしお",
      description: "ふわっと香る「青のり」が、じゃがいものおいしさをいっそう引き立てます。",
      itemCategory: 8,
      inTheOffice: false,
      author: 1,
      approval: true,
      pollItem: true,
      isDiscontinued: false
    },
  });

  await prisma.item.upsert({
    where: { name: "ビスコ" },
    update: {},
    create: {
      name: "ビスコ",
      description: "みんなにやさしい、クリームサンドビスケット♪●ほんのりレモン風味のクリームを、あっさりプレーンなビスケットでサンドしました。●どこか懐かしい、素朴な味わいです。",
      itemCategory: 8,
      inTheOffice: false,
      author: 1,
      approval: true,
      pollItem: true,
      isDiscontinued: false
    },
  });

  await prisma.item.upsert({
    where: { name: "ラムネ" },
    update: {},
    create: {
      name: "ラムネ",
      description: "シュワシュワとしたラムネ飲料を菓子で再現した森永ラムネです。爽やかな甘さなので、おやつだけでなく仕事や勉強中のリフレッシュにもぴったりです。",
      itemCategory: 8,
      manufacturer: "森永",
      purchaseLocation: "ローソン",
      author: 1,
      approval: true,
      pollItem: true,
      isDiscontinued: false
    },
  });

  await prisma.item.upsert({
    where: { name: "アルフォート" },
    update: {},
    create: {
      name: "アルフォート",
      description: "まろやかなミルクチョコレートと香ばしい全粒粉入りビスケットを組み合わせました。",
      itemCategory: 8,
      manufacturer: "ブルボン",
      purchaseLocation: "セブンイレブン",
      author: 1,
      approval: true,
      pollItem: true,
      isDiscontinued: false
    },
  });


  // 画像
  await prisma.itemImage.createMany({
    data: [
      {
        itemId: 1,
        imagePath: "/bright.png"
      },
      {
        itemId: 1,
        imagePath: "/item.png"
      },
      {
        itemId: 1,
        imagePath: "/item.png"
      },
      {
        itemId: 2,
        imagePath: "/crassico.png"
      },
      {
        itemId: 2,
        imagePath: "/item.png"
      },
      {
        itemId: 2,
        imagePath: "/coffee.png"
      },
      {
        itemId: 3,
        imagePath: "/item.png"
      },
      {
        itemId: 4,
        imagePath: "/premiam.jpg"
      },
      {
        itemId: 4,
        imagePath: "/item.png"
      },
      {
        itemId: 4,
        imagePath: "/s4.png"
      },
      {
        itemId: 5,
        imagePath: "/american.jpg"
      },
      {
        itemId: 5,
        imagePath: "/item.png"
      },
      {
        itemId: 6,
        imagePath: "/colombia.png"
      },
      {
        itemId: 6,
        imagePath: "/item.png"
      },
      {
        itemId: 7,
        imagePath: "/sumatra.png"
      },
      {
        itemId: 8,
        imagePath: "/decaf.jpg"
      },
      {
        itemId: 8,
        imagePath: "/item.png"
      },
      {
        itemId: 9,
        imagePath: "/brught.jpg"
      },
      {
        itemId: 9,
        imagePath: "/item.png"
      },
      {
        itemId: 10,
        imagePath: "/argray.png"
      },
      {
        itemId: 10,
        imagePath: "/item.png"
      },
      {
        itemId: 11,
        imagePath: "/lemon.png"
      },
      {
        itemId:  11,
        imagePath: "/item.png"
      },
      {
        itemId: 12,
        imagePath: "/jasmin.jpg"
      },
      {
        itemId: 12,
        imagePath: "/item.png"
      },
      {
        itemId: 13,
        imagePath: "/green.jpg"
      },
      {
        itemId: 13,
        imagePath: "/item.png"
      },
      {
        itemId: 14,
        imagePath: "/cocoa.png"
      },
      {
        itemId: 14,
        imagePath: "/item.png"
      },
      {
        itemId: 21,
        imagePath: "https://firebasestorage.googleapis.com/v0/b/drink-manager-app-4df85.appspot.com/o/ef763e81-7fe6-47d2-803b-6be7d881a6f3?alt=media&token=c7bfe8e1-0763-448f-bb44-1e809d9e301f"
      },
      {
        itemId: 22,
        imagePath: "https://firebasestorage.googleapis.com/v0/b/drink-manager-app-4df85.appspot.com/o/ac92f318-dc06-49fb-8712-cef5a2de1792?alt=media&token=d8332ad8-8bbd-4bc2-a6c2-09b9969ac933"
      },
      {
        itemId: 23,
        imagePath: "https://firebasestorage.googleapis.com/v0/b/drink-manager-app-4df85.appspot.com/o/c5447b51-2010-4e21-aa16-6042f7e20abe?alt=media&token=71113bdd-b9ef-4ea2-b0d4-7e78bc1db231"
      },
      {
        itemId: 24,
        imagePath: "https://firebasestorage.googleapis.com/v0/b/drink-manager-app-4df85.appspot.com/o/e50d97a1-4bfc-4f49-82d5-ee51b0e473b5?alt=media&token=f297c75b-9e84-4eb4-8db5-6a22e38eade2"
      },
      {
        itemId: 25,
        imagePath: "https://firebasestorage.googleapis.com/v0/b/drink-manager-app-4df85.appspot.com/o/8b4f2c9d-a9d6-45f0-bf8f-b5bd96ec4461?alt=media&token=96f2cbda-a7ba-45e5-aba7-70cfe8fbcd5f"
      },
      {
        itemId: 26,
        imagePath: "https://firebasestorage.googleapis.com/v0/b/drink-manager-app-4df85.appspot.com/o/8b4f2c9d-a9d6-45f0-bf8f-b5bd96ec4461?alt=media&token=96f2cbda-a7ba-45e5-aba7-70cfe8fbcd5f"
      },
      {
        itemId: 27,
        imagePath: "/item.png"
      },
      {
        itemId: 28,
        imagePath: "/item.png"
      },
      {
        itemId: 29,
        imagePath: "/item.png"
      },
      {
        itemId: 30,
        imagePath: "/item.png"
      },
      {
        itemId: 31,
        imagePath: "/item.png"
      },
      {
        itemId: 32,
        imagePath: "/item.png"
      },
    ],
})
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.log(e);
    await prisma.$disconnect();
    process.exit(1);
  });
