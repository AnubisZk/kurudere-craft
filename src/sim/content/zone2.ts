// Zone 2 — Mirefen Marsh (levels 6-13). Hoca Ali follows the
// Gravecaller trail south of the causeway: drowned dead rise from the fen,
// trolls dig into barrow-mounds, and Vael the Mistcaller waits in the
// Sunken Bastion.

import type {
  CampDef, GroundObjectDef, ItemDef, MobTemplate, NpcDef, PlayerClass, QuestDef, ZoneDef, ZonePropsDef,
} from '../types';

export const ZONE2_ZONE: ZoneDef = {
  id: 'mirefen_marsh',
  name: 'Sazbatak Bataklığı',
  zMin: 180,
  zMax: 540,
  levelRange: [6, 13],
  biome: 'marsh',
  hub: { x: 0, z: 300, radius: 20, name: 'Batakköprü' },
  graveyard: { x: -18, z: 286 },
  lakes: [
    { x: -110, z: 310, radius: 35 },
    { x: 60, z: 380, radius: 25 },
    { x: -40, z: 450, radius: 20 },
  ],
  pois: [
    { x: 0, z: 300, label: 'Batakköprü' },
    { x: -40, z: 230, label: 'Avcı Sazlıkları' },
    { x: -105, z: 300, label: 'Derinbatak Sığlıkları' },
    { x: 80, z: 315, label: 'Dul Çalılığı' },
    { x: 100, z: 435, label: 'Batık Şapel' },
    { x: -95, z: 440, label: 'Trol Höyükleri' },
    { x: 0, z: 485, label: 'Mezarçağıran Kampı' },
    { x: 45, z: 515, label: 'Batık Burç' },
  ],
  welcome: "Batakköprü kapısındaki Muhafız Zafer'e rapor ver.",
};

// Causeway north from Kurudere to Fenbridge, then spokes to each hub.
// The Drowned Chapel spoke rounds the lake at (60,380) along its western
// shore via Widow Thicket — the whole polyline stays clear of the lake carve
// so the road never dips under the waterline (tests/progression.test.ts
// samples every road against the heightfield to lock this in).
export const ZONE2_ROADS: { x: number; z: number }[][] = [
  [{ x: 0, z: 80 }, { x: 0, z: 180 }, { x: -8, z: 240 }, { x: 0, z: 300 }],         // Kurudere -> Fenbridge
  [{ x: 4, z: 308 }, { x: 45, z: 336 }, { x: 92, z: 350 }, { x: 102, z: 392 }, { x: 90, z: 420 }], // -> Drowned Chapel
  [{ x: -6, z: 308 }, { x: -40, z: 370 }, { x: -80, z: 420 }],                      // -> Troll Mounds
  [{ x: 2, z: 312 }, { x: 10, z: 400 }, { x: 20, z: 470 }, { x: 45, z: 515 }],      // -> cult camp -> Bastion
];

// ---------------------------------------------------------------------------
// Mobs (overworld only — the Sunken Bastion's mobs live in content/dungeons)
// ---------------------------------------------------------------------------

export const ZONE2_MOBS: Record<string, MobTemplate> = {
  mire_prowler: {
    id: 'mire_prowler', name: 'Batak Avcısı', minLevel: 7, maxLevel: 8, family: 'beast',
    hpBase: 46, hpPerLevel: 19, dmgBase: 7, dmgPerLevel: 2.1, attackSpeed: 2.0,
    armorPerLevel: 12, moveSpeed: 8.5, aggroRadius: 11,
    loot: [
      { copper: 30, chance: 1 },
      { itemId: 'mire_prowler_pelt', chance: 0.6, questId: 'q_prowler_pelts' },
      { itemId: 'soggy_moccasin', chance: 0.3 },
    ],
    scale: 0.95, color: 0x4d5656,
  },
  deepfen_murloc: {
    id: 'deepfen_murloc', name: 'Derinbatak Isırganı', minLevel: 8, maxLevel: 9, family: 'murloc',
    hpBase: 48, hpPerLevel: 19, dmgBase: 7, dmgPerLevel: 2.2, attackSpeed: 1.9,
    armorPerLevel: 12, moveSpeed: 8, aggroRadius: 14, // deepfen packs swarm from far out
    loot: [
      { copper: 35, chance: 1 },
      { itemId: 'waterlogged_idol', chance: 0.5, questId: 'q_idols' },
      { itemId: 'mudfin_scale', chance: 0.4 },
    ],
    scale: 0.85, color: 0x45b39d,
  },
  mire_widow: {
    id: 'mire_widow', name: 'Sazbatak Dulu', minLevel: 8, maxLevel: 10, family: 'spider',
    hpBase: 48, hpPerLevel: 19, dmgBase: 8, dmgPerLevel: 2.2, attackSpeed: 1.8,
    armorPerLevel: 10, moveSpeed: 8, aggroRadius: 10,
    loot: [
      { copper: 38, chance: 1 },
      { itemId: 'widow_venom_sac', chance: 0.65, questId: 'q_widows' },
      { itemId: 'spider_leg', chance: 0.4 },
    ],
    scale: 1.0, color: 0x283747,
  },
  mirefen_broodmother: {
    id: 'mirefen_broodmother', name: 'Kuluçka Ana', minLevel: 10, maxLevel: 10, family: 'spider',
    hpBase: 150, hpPerLevel: 26, dmgBase: 9, dmgPerLevel: 2.4, attackSpeed: 1.8,
    armorPerLevel: 16, moveSpeed: 8, aggroRadius: 14, boss: true,
    loot: [
      { copper: 300, chance: 1 },
      { itemId: 'marshstrider_boots', chance: 0.4 },
      { itemId: 'spider_leg', chance: 1 },
    ],
    scale: 1.4, color: 0x641e16,
  },
  drowned_dead: {
    id: 'drowned_dead', name: 'Boğulmuş Ölüler', minLevel: 9, maxLevel: 11, family: 'undead',
    hpBase: 52, hpPerLevel: 20, dmgBase: 8, dmgPerLevel: 2.3, attackSpeed: 2.3,
    armorPerLevel: 14, moveSpeed: 6.5, aggroRadius: 11,
    loot: [
      { copper: 42, chance: 1 },
      { itemId: 'bone_fragments', chance: 0.5 },
      { itemId: 'cracked_fetish', chance: 0.3 },
    ],
    scale: 1.0, color: 0x7fb3d5,
  },
  fen_troll: {
    id: 'fen_troll', name: 'Sazbatak Trolü', minLevel: 10, maxLevel: 12, family: 'troll',
    hpBase: 56, hpPerLevel: 21, dmgBase: 9, dmgPerLevel: 2.4, attackSpeed: 2.2,
    armorPerLevel: 18, moveSpeed: 7.5, aggroRadius: 11,
    loot: [
      { copper: 50, chance: 1 },
      { itemId: 'troll_fetish', chance: 0.6, questId: 'q_troll_fetishes' },
      { itemId: 'chipped_tusk', chance: 0.4 },
      { itemId: 'bogiron_nugget', chance: 0.3 },
    ],
    scale: 1.15, color: 0x229954,
  },
  grubjaw: {
    id: 'grubjaw', name: 'Obur Kurtçene', minLevel: 12, maxLevel: 12, family: 'troll', rare: true,
    hpBase: 130, hpPerLevel: 26, dmgBase: 10, dmgPerLevel: 2.5, attackSpeed: 2.2,
    armorPerLevel: 20, moveSpeed: 7.5, aggroRadius: 13,
    loot: [
      { copper: 200, chance: 1 },
      { itemId: 'grubjaw_tusk', chance: 1, questId: 'q_grubjaw' },
      { itemId: 'chipped_tusk', chance: 1 },
    ],
    scale: 1.3, color: 0x145a32,
  },
  gravecaller_cultist: {
    id: 'gravecaller_cultist', name: 'Mezarçağıran Tarikatçısı', minLevel: 10, maxLevel: 12, family: 'humanoid',
    hpBase: 50, hpPerLevel: 20, dmgBase: 9, dmgPerLevel: 2.4, attackSpeed: 2.0,
    armorPerLevel: 20, moveSpeed: 7, aggroRadius: 11,
    loot: [
      { copper: 55, chance: 1 },
      { itemId: 'linen_scrap', chance: 0.3 },
      { itemId: 'tallow_candle', chance: 0.3 },
    ],
    scale: 1.0, color: 0x6c3483,
  },
  gravecaller_summoner: {
    id: 'gravecaller_summoner', name: 'Mezarçağıran Çağırıcısı', minLevel: 11, maxLevel: 12, family: 'humanoid',
    hpBase: 46, hpPerLevel: 19, dmgBase: 10, dmgPerLevel: 2.5, attackSpeed: 2.0,
    armorPerLevel: 16, moveSpeed: 7, aggroRadius: 12,
    loot: [
      { copper: 60, chance: 1 },
      { itemId: 'cult_cipher', chance: 0.6, questId: 'q_summoners' },
    ],
    scale: 1.0, color: 0x884ea0,
  },
  deacon_voss: {
    id: 'deacon_voss', name: 'Diyakoz Voss', minLevel: 12, maxLevel: 12, family: 'humanoid',
    hpBase: 200, hpPerLevel: 30, dmgBase: 11, dmgPerLevel: 2.5, attackSpeed: 2.4,
    armorPerLevel: 26, moveSpeed: 7, aggroRadius: 14, boss: true,
    aoePulse: { min: 10, max: 14, radius: 10, every: 12, name: 'Boğulma İlahisi' },
    loot: [
      { copper: 600, chance: 1 },
      { itemId: 'tallow_candle', chance: 1 },
    ],
    scale: 1.3, color: 0x512e5f,
  },
};

// ---------------------------------------------------------------------------
// NPCs (Fenbridge hub)
// ---------------------------------------------------------------------------

export const ZONE2_NPCS: Record<string, NpcDef> = {
  warden_fenwick: {
    id: 'warden_fenwick', name: 'Muhafız Zafer', title: 'Batakköprü Muhafızı',
    pos: { x: 3, z: 304 }, facing: Math.PI, color: 0x7e5109,
    questIds: ['q_fenbridge_muster', 'q_prowlers', 'q_deepfen', 'q_deepfen_purge', 'q_trolls', 'q_deacon'],
    greeting: 'Kapıda dur $C. Şu sazların ötesinde öldürme işini bizim yerimize bataklık yapar.',
  },
  brother_aldric_fen: {
    id: 'brother_aldric_fen', name: 'Hoca Ali', title: 'Vadi Hocası',
    pos: { x: -8, z: 296 }, facing: 0.8, color: 0xf7f9f9,
    questIds: [
      'q_idols', 'q_drowned', 'q_drowned_censers', 'q_no_rest', 'q_summoners',
      'q_bastion_door', 'q_mistcaller', 'q_highwatch_summons',
    ],
    greeting: 'Işık seni suyun üstünde tutsun $N. Bu bataklıkta ölüler uyumaz — suda yürür.',
  },
  provisioner_hale: {
    id: 'provisioner_hale', name: 'Erzakçı Emine', title: 'Erzakçı',
    pos: { x: -4, z: 308 }, facing: Math.PI / 2, color: 0x1e8449,
    questIds: ['q_prowler_pelts', 'q_fen_supplies', 'q_grubjaw'],
    vendorItems: [
      'fenbridge_rye', 'marsh_mint_tea', 'smoked_eel', 'silvermist_cordial',
      'bogiron_mace', 'fenreed_staff', 'mirefen_skinner', 'bogiron_hauberk',
      'marshcloth_robe', 'reedwoven_jerkin', 'fenwalker_boots', 'reedwoven_trousers',
    ],
    greeting: "Kuru çizme, kuru ekmek, kuru barut — Batakköprü'de iyi bir günde üçünden ikisini bulursun.",
  },
  herbalist_yara: {
    id: 'herbalist_yara', name: 'Otacı Zeynep', title: 'Otacı',
    pos: { x: 10, z: 295 }, facing: -Math.PI / 2, color: 0x7d3c98,
    questIds: ['q_widows', 'q_broodmother'],
    greeting: 'Yolun batısındaki çalılığa dikkat et. Ağlar bu mevsim yelken bezi kadar kalın.',
  },
  scout_maren: {
    id: 'scout_maren', name: 'İzci Ayşegül', title: 'Şerifin İzcisi',
    pos: { x: 6, z: 312 }, facing: -0.6, color: 0x7d6608,
    questIds: ['q_troll_fetishes', 'q_cult_camp', 'q_olen'],
    greeting: 'Burada seni hayatta tutan sessiz adımlar ve kısa bir bıçaktır. Çabuk konuş — sazlara dönmem gerek.',
  },
};

// ---------------------------------------------------------------------------
// Quests
// ---------------------------------------------------------------------------

export const ZONE2_QUESTS: Record<string, QuestDef> = {
  q_fenbridge_muster: {
    id: 'q_fenbridge_muster', name: "Batakköprü'de Seferberlik",
    giverNpcId: 'brother_aldric', turnInNpcId: 'warden_fenwick',
    text: "Morthen'in yazıları güney bataklığında bir efendiden söz ediyordu — bir 'Sisçağıran'dan. Şimdi de Muhafız Zafer Batakköprü'de seferberlik borusunu öttürdü; ben tesadüfe inanmam $N. Güneydeki geçit yolunu tut, kapı direğindeki seferberlik emrini al ve Muhafız'a sun.",
    completionText: "Ali'nin mührü demek? Öyleyse işe yararsın. Bataklık devriyelerimi bütün bütün yutuyor; suda durabilen her kılıca ihtiyacım var.",
    objectives: [{ type: 'collect', itemId: 'fen_muster_order', count: 1, label: 'Batakköprü Seferberlik Emri' }],
    xpReward: 300, copperReward: 200, itemRewards: {},
    minLevel: 6,
  },
  q_prowlers: {
    id: 'q_prowlers', name: 'Bataklığın Dişleri',
    giverNpcId: 'warden_fenwick', turnInNpcId: 'warden_fenwick',
    text: 'Batak avcıları yük katırının sesini öğrendi; artık geçit yolunun kendisini avlıyorlar. Geçen hafta bir ulağı şu kapıdan elli adım ötede sazların içine sürüklediler. Sayılarını azalt $N — on iki ölü avcı, kalanlara korkuyu öğretir.',
    completionText: 'On iki tane, üstünde tek diş izi yok ha? Geçit yolu bu gece daha rahat nefes alacak.',
    objectives: [{ type: 'kill', targetMobId: 'mire_prowler', count: 12, label: 'Batak Avcısı öldürüldü' }],
    xpReward: 800, copperReward: 300, itemRewards: {},
  },
  q_prowler_pelts: {
    id: 'q_prowler_pelts', name: 'Geçit Yolu İçin Postlar',
    giverNpcId: 'provisioner_hale', turnInNpcId: 'provisioner_hale',
    text: "O geçit yolunun her kalası, yağlanmış avcı derisine sarılı kazıkların üstünde durur — çürümenin kemiremediği tek şey budur. Stoğum bitti ve güney açıklıkları şimdiden batıyor. Bana 8 sağlam post getir $N, yoksa hepimiz Kurudere'ye yüzerek gideceğiz.",
    completionText: 'Kalın, sağlam postlar bunlar. Geçit yolu artık ikimizden de uzun yaşar.',
    objectives: [{ type: 'collect', itemId: 'mire_prowler_pelt', count: 8, label: 'Batak Avcısı Postu' }],
    xpReward: 850, copperReward: 350, itemRewards: {},
  },
  q_fen_supplies: {
    id: 'q_fen_supplies', name: 'Kayıp Kervan',
    giverNpcId: 'provisioner_hale', turnInNpcId: 'provisioner_hale',
    text: "Üç gün önce Kurudere'den çıkan bir kervan sise girdi ve kapı çanını bir daha çalmadı. Enkaz geçit yolu boyunca saçılmış — sandıklar, fıçılar, ne varsa, yavaş yavaş batıyor. Bataklık işini bitirmeden 5 yük mal kurtar.",
    completionText: 'Su yutmuş ama sağlam. Zavallı sürücüler... bataklık yakaladığını bırakmaz $N. Bunu unutma.',
    objectives: [{ type: 'collect', itemId: 'lost_caravan_goods', count: 5, label: 'Kayıp Kervan Malları' }],
    xpReward: 900, copperReward: 350, itemRewards: {},
    minLevel: 7,
  },
  q_deepfen: {
    id: 'q_deepfen', name: 'Derinbatak Kıpırdanıyor',
    giverNpcId: 'warden_fenwick', turnInNpcId: 'warden_fenwick',
    text: 'Derinbatak murlokları yirmi yıl sığlıklarından çıkmadı. Şimdiyse leşe üşüşen sinekler gibi doğu kıyısını sarıyorlar — muhafızlarım da göl yatağından bir şeyler çıkardıklarını söylüyor. Onları kışkırtan her neyse, durdurulmasını istiyorum. 12 ısırganın işini bitir.',
    completionText: 'Bu onları bir süreliğine çamura geri iter. Ama bir şey onları kazmaya itti ve ne olduğunu öğrenmeye kararlıyım.',
    objectives: [{ type: 'kill', targetMobId: 'deepfen_murloc', count: 12, label: 'Derinbatak Isırganı öldürüldü' }],
    xpReward: 1000, copperReward: 400, itemRewards: {},
    minLevel: 7,
  },
  q_idols: {
    id: 'q_idols', name: 'Derinlerin Putları',
    giverNpcId: 'brother_aldric_fen', turnInNpcId: 'brother_aldric_fen',
    text: "Zafer'in muhafızları, balık adamların göl dibinden putlar çıkarıp kutsal emanet gibi bağırlarına bastığını söylüyor. O putlar korktuğum şeyse, kendi gözlerimle görmeliyim. Derinbatak ısırganlarından 5 tane al — kolay kolay vermeyeceklerdir.",
    completionText: "Mezarçağıran işi — Morthen'den de eski, benden de. Tarikat Kurudere'de doğmamış $N. Burada doğmuş ve göl sırlarını saklıyormuş.",
    objectives: [{ type: 'collect', itemId: 'waterlogged_idol', count: 5, label: 'Su Yutmuş Put' }],
    xpReward: 1050, copperReward: 400, itemRewards: {},
    requiresQuest: 'q_deepfen',
  },
  q_deepfen_purge: {
    id: 'q_deepfen_purge', name: 'Sığlıklara Dönüş',
    giverNpcId: 'warden_fenwick', turnInNpcId: 'warden_fenwick',
    text: 'Ali o putların tarikat yapımı olduğunu söylüyor — demek ki murloklar bataklığın eski kötülüğünü kucak kucak yukarı taşıyor. Bunun geçit yoluma vurmasına izin vermem. Sığlıklara geri dön ve bu tarama işini kökünden bitir: 14 ısırgan daha.',
    completionText: 'Acımasız ve titiz. Bu bataklık bir gün kurursa, seni bekleyen bir muhafızlık var.',
    objectives: [{ type: 'kill', targetMobId: 'deepfen_murloc', count: 14, label: 'Derinbatak Isırganı öldürüldü' }],
    xpReward: 1100, copperReward: 450, itemRewards: {},
    requiresQuest: 'q_idols',
  },
  q_widows: {
    id: 'q_widows', name: 'İpek ve Zehir',
    giverNpcId: 'herbalist_yara', turnInNpcId: 'herbalist_yara',
    text: 'Yaradan batak çürümesini çeken tek şey dul zehridir — daha bu sabah bir adamı onunla kurtardım. Ama yolun batısındaki çalılık beladan dehşete dönüştü; ağlar artık geyikleri bütün hâlde yutuyor. 10 dul öldür ve bana 6 zehir kesesi kes — sağlam, patlamamış.',
    completionText: 'Hepsi de sapasağlam. Güneydeki cerrahların yarısından daha sağlam ellerin var $N.',
    objectives: [
      { type: 'kill', targetMobId: 'mire_widow', count: 10, label: 'Sazbatak Dulu öldürüldü' },
      { type: 'collect', itemId: 'widow_venom_sac', count: 6, label: 'Dul Zehir Kesesi' },
    ],
    xpReward: 1200, copperReward: 450, itemRewards: {},
    minLevel: 8,
  },
  q_broodmother: {
    id: 'q_broodmother', name: 'Kuluçka Ana',
    giverNpcId: 'herbalist_yara', turnInNpcId: 'herbalist_yara',
    text: "Ağları gördün — şimdi kendine sor, bilek kalınlığında halatları ne örer? Muhafızlar ona Kuluçka Ana diyor ve yumurtaları Dul Çalılığı'nın üzerinde ikinci bir çatı gibi asılı duruyor. 8 dul daha kes ve o yumurtalar açılmadan koca anayı yere ser.",
    completionText: 'Öldü mü? Gerçekten öldü mü? Öyleyse çalılık yine sadece ağaçlık. Işık kılıcını kutsasın $N.',
    objectives: [
      { type: 'kill', targetMobId: 'mire_widow', count: 8, label: 'Sazbatak Dulu öldürüldü' },
      { type: 'kill', targetMobId: 'mirefen_broodmother', count: 1, label: 'Kuluçka Ana öldürüldü' },
    ],
    xpReward: 1250, copperReward: 500, itemRewards: {},
    requiresQuest: 'q_widows',
  },
  q_drowned: {
    id: 'q_drowned', name: 'Boğulmuş Ölüler',
    giverNpcId: 'brother_aldric_fen', turnInNpcId: 'brother_aldric_fen',
    text: "Geçit yolunda boğulan yolcular göllerden yürüyerek çıkıyor $N — içinde öldükleri yosunlar hâlâ üstlerinde. Bu sıradan bir musallat değil. Boğulma iz bırakmaz; itaatkâr cesetler bırakır. Birisi bu bataklığı bağış kutusu gibi dolduruyor. 12 Boğulmuş Ölü'yü huzuruna kavuştur.",
    completionText: 'Düşürdüğün her biri, özgür kalan çalınmış bir ruh. Ama onları boğan, hâlâ su dökmeye devam ediyor.',
    objectives: [{ type: 'kill', targetMobId: 'drowned_dead', count: 12, label: 'Boğulmuş Ölüler toprağa verildi' }],
    xpReward: 1400, copperReward: 500, itemRewards: {},
    minLevel: 9,
  },
  q_drowned_censers: {
    id: 'q_drowned_censers', name: 'Derinlerden Buhurdanlar',
    giverNpcId: 'brother_aldric_fen', turnInNpcId: 'brother_aldric_fen',
    text: 'Dul gölünün güneyinde, bataklık yükseldiğinde cemaatiyle birlikte boğulan bir şapel durur. Oradaki ölüler paslı buhurdanlar taşıyor — cenaze buhurdanları, Mezarçağıran ayinlerinde sallanan türden. Şapel avlusundan 4 tane topla, o suyun üstünde hangi ayinin söylendiğini okuyayım.',
    completionText: "Korktuğum gibi. Bu buhurdanlarda tütsü değil mezar külü yakılmış. Birisi o şapeli boğulmaya adamış — ve ayinin altında 'Voss' imzası var.",
    objectives: [{ type: 'collect', itemId: 'rusted_censer', count: 4, label: 'Paslı Buhurdan' }],
    xpReward: 1300, copperReward: 500, itemRewards: {},
    requiresQuest: 'q_drowned',
  },
  q_no_rest: {
    id: 'q_no_rest', name: 'Sazlarda Huzur Yok',
    giverNpcId: 'brother_aldric_fen', turnInNpcId: 'brother_aldric_fen',
    text: "O buhurdanlardaki ayin, boğulanları bataklığın değdiği her yerde dirilmeye bağlıyor — ve bataklık her yere değiyor. Ölüler yaşayanlardan çok olana dek bu sazlarda huzur olmayacak. Ayini henüz bozamayız ama askerlerini eksiltebiliriz. 14 Boğulmuş Ölü'yü daha toprağa ver.",
    completionText: 'Ölülere, efendilerinin gösterdiğinden çok daha fazla merhamet gösteriyorsun. Al şunu — fazlasıyla hak ettin.',
    objectives: [{ type: 'kill', targetMobId: 'drowned_dead', count: 14, label: 'Boğulmuş Ölüler toprağa verildi' }],
    xpReward: 1500, copperReward: 550,
    itemRewards: { warrior: 'drownedguard_breastplate', mage: 'fenmist_robe', rogue: 'eelskin_tunic' },
    requiresQuest: 'q_drowned_censers',
  },
  q_trolls: {
    id: 'q_trolls', name: 'Sazbatak Höyükleri',
    giverNpcId: 'warden_fenwick', turnInNpcId: 'warden_fenwick',
    text: 'Sazbatak trolleri uzak gölün doğusundaki eski höyükleri deşti — mezar höyükleri $N, insanoğlunun her krallığından eski. Aşağıda ne altını bulacaklarını sanıyorlarsa, dışarı SALDIKLARI şey çok daha beter. Onları höyüklerden sür: 12 ölü trol yeter de artar.',
    completionText: 'Troller sebepsiz kazmaz. Birisi onlara nereyi kazacaklarını söyledi — ve bahse girerim gri bir cübbe giyiyordur.',
    objectives: [{ type: 'kill', targetMobId: 'fen_troll', count: 12, label: 'Sazbatak Trolü öldürüldü' }],
    xpReward: 1600, copperReward: 600, itemRewards: {},
    minLevel: 10,
  },
  q_troll_fetishes: {
    id: 'q_troll_fetishes', name: 'Tılsım ve Kemik',
    giverNpcId: 'scout_maren', turnInNpcId: 'scout_maren',
    text: "İki gece önce trol höyüklerinde süründüm. Diktikleri o tılsımlar trol işi değil — düğümler yanlış, kemikler insan kemiği ve her biri açık mezarları yol tabelası gibi gösteriyor. Bana 8 tanesini getir, bu kazının parasını gerçekte kimin ödediğini Zafer'e kanıtlayayım.",
    completionText: 'Tarikat kampındaki sancaklarla aynı elin işi. Troller kiralık kürek, başka bir şey değil. İyi iş $N.',
    objectives: [{ type: 'collect', itemId: 'troll_fetish', count: 8, label: 'Sazbatak Trol Tılsımı' }],
    xpReward: 1650, copperReward: 600,
    itemRewards: { warrior: 'trollhide_leggings', mage: 'trollhide_leggings', rogue: 'trollhide_leggings' },
    requiresQuest: 'q_trolls',
  },
  q_grubjaw: {
    id: 'q_grubjaw', name: 'Obur',
    giverNpcId: 'provisioner_hale', turnInNpcId: 'provisioner_hale',
    text: 'Diğer trollerin yanında kazmaya yanaşmadığı bir trol var — Obur Kurtçene. Son iki yük katırımı koşum takımıyla birlikte yedi; sigortacım da yıllar önce boğuldu. En doğudaki höyüklerde dolanıyor $N. Bana azı dişini getir, seni adam gibi donatayım.',
    completionText: 'Bu diş kolum kadar uzun! Katırların öcü alındı; Batakköprü sana bir kadeh borçlu.',
    objectives: [{ type: 'collect', itemId: 'grubjaw_tusk', count: 1, label: "Kurtçene'nin Azı Dişi" }],
    xpReward: 1700, copperReward: 700,
    itemRewards: { warrior: 'marshstrider_boots', mage: 'marshstrider_boots', rogue: 'marshstrider_boots' },
    minLevel: 11,
  },
  q_cult_camp: {
    id: 'q_cult_camp', name: 'Sazlardaki Cübbeler',
    giverNpcId: 'scout_maren', turnInNpcId: 'scout_maren',
    text: 'İşte orada — üçüncü gölün güneyinde, sisin hiç kalkmadığı yerde. Gri cübbeler, gri sancaklar: Mezarçağıranlar, bataklık çoktan onlarınmış gibi açıkta kamp kurmuşlar. Saklanmayı bıraktılar $N; bu da kazandıklarını sandıkları anlamına gelir. Yanıldıklarını kanıtla. 12 tarikatçılarını kes.',
    completionText: 'On iki cübbe yüzüstü çamurda. Artık bataklığın da onları izlediğini biliyorlar.',
    objectives: [{ type: 'kill', targetMobId: 'gravecaller_cultist', count: 12, label: 'Mezarçağıran Tarikatçısı öldürüldü' }],
    xpReward: 1800, copperReward: 700, itemRewards: {},
    minLevel: 11,
  },
  q_summoners: {
    id: 'q_summoners', name: 'Çağrıyı Durdurmak',
    giverNpcId: 'brother_aldric_fen', turnInNpcId: 'brother_aldric_fen',
    text: "Ayşegül'ün raporları tarikatçıların arasında çağırıcılardan söz ediyor — boğulmuşları, ıslıkla çağrılan tazılar gibi sudan çıkaran sesler. Şifreleri, emir zincirini ortaya dökecektir. 8 çağırıcıyı sustur ve bana şifrelerinden 4 tane getir.",
    completionText: "Her şifrenin altında 'Diyakoz Voss' imzası var — ve hepsi Burç'taki bir 'Sisçağıran'a yönlendirilmiş. Morthen'in efendisi $N. Onu bulduk.",
    objectives: [
      { type: 'kill', targetMobId: 'gravecaller_summoner', count: 8, label: 'Mezarçağıran Çağırıcısı öldürüldü' },
      { type: 'collect', itemId: 'cult_cipher', count: 4, label: 'Mezarçağıran Şifresi' },
    ],
    xpReward: 1900, copperReward: 750, itemRewards: {},
    requiresQuest: 'q_cult_camp',
  },
  q_deacon: {
    id: 'q_deacon', name: 'Bataklığın Diyakozu',
    giverNpcId: 'warden_fenwick', turnInNpcId: 'warden_fenwick',
    text: "Demek o kampın göbeğinde bir Mezarçağıran diyakozu duruyor ve boğulan muhafızlarımı göllerden çıkarıp kendine hizmet ettiriyor. İlahisi bugün bitiyor. Kamp yolunu güneye tut $N ve Diyakoz Voss'u toprağa göm — kimsenin onu geri çağıramayacağı kadar derine.",
    completionText: 'Voss öldü ve kampın üstündeki sis şimdiden inceliyor. Bataklıktaki seslerini kırdın — geriye yalnızca Burç kaldı.',
    objectives: [{ type: 'kill', targetMobId: 'deacon_voss', count: 1, label: 'Diyakoz Voss öldürüldü' }],
    xpReward: 2200, copperReward: 1000,
    itemRewards: { warrior: 'deacons_cleaver', mage: 'staff_of_drowned_prayers', rogue: 'mistbinder_kris' },
    requiresQuest: 'q_summoners',
  },
  q_bastion_door: {
    id: 'q_bastion_door', name: 'Batık Burç',
    giverNpcId: 'brother_aldric_fen', turnInNpcId: 'brother_aldric_fen',
    text: "Batık Burç — bir asır önce bataklığa gömülen bir şövalye kalesi — Voss'un mektuplarının gösterdiği yer ve bu Sisçağıran'ın boğulma ilahilerini söylediği yuva. Tarikat, kapısını mezar taşlarıyla mühürlemiş. Bana koruma taşlarından birini getir $N, mührü çözeyim.",
    completionText: 'Koruma, çürük halat gibi dağılıyor. Kapı açık... ve altındaki karanlık dinliyor.',
    objectives: [{ type: 'collect', itemId: 'bastion_ward_stone', count: 1, label: 'Burç Koruma Taşı' }],
    xpReward: 1200, copperReward: 500, itemRewards: {},
    requiresQuest: 'q_deacon',
    minLevel: 12,
  },
  q_olen: {
    id: 'q_olen', name: 'Şövalye Kumandanın Utancı',
    giverNpcId: 'scout_maren', turnInNpcId: 'scout_maren',
    text: "Burç battığında onu Şövalye Kumandan Olen tutuyordu — kaleyi terk etmektense görev başında boğuldu. Her muhafız adını gururla öğrenir. Şimdi Sisçağıran onu, uğruna öldüğü kapıyı koruyan bir kuklaya çevirdi. Bu utanç bugün bitiyor $N. Dört yoldaş al, aşağı in ve Olen'e hak ettiği huzuru ver.",
    completionText: 'Demek nöbeti nihayet sona erdi. Adını kapıya kendi ellerimle kazıtacağım. Teşekkürler $N.',
    objectives: [{ type: 'kill', targetMobId: 'knight_commander_olen', count: 1, label: 'Şövalye Kumandan Olen toprağa verildi' }],
    xpReward: 1800, copperReward: 800,
    itemRewards: { warrior: 'knight_commanders_greaves', mage: 'knight_commanders_greaves', rogue: 'knight_commanders_greaves' },
    requiresQuest: 'q_bastion_door',
    minLevel: 12,
    suggestedPlayers: 5,
  },
  q_mistcaller: {
    id: 'q_mistcaller', name: 'Sisçağıran',
    giverNpcId: 'brother_aldric_fen', turnInNpcId: 'brother_aldric_fen',
    text: "Burç'un dibinde Sisçağıran Vael bekliyor — Morthen'in efendisi, Voss'un efendisi, kendine ordu dikmek için yüz yolcuyu boğan ses. Tek bir kahramanın harcı değil: yanına dört yoldaş al, daha azı olmaz. İşini bitir $N ki bataklığın ölüleri nihayet yerinde yatabilsin.",
    completionText: "Vael öldü ve sis yıllardır ilk kez dağılıyor. Ama Ayşegül son sözlerini duydu ve kanımı donduruyor: 'Ejder, zirvelerin altında kıpırdanıyor.' Tarikat, tahmin ettiğimizden çok daha eski bir şeye hizmet ediyor $N. Dinlenebiliyorken dinlen — sırada dağlar var.",
    objectives: [{ type: 'kill', targetMobId: 'vael_the_mistcaller', count: 1, label: 'Sisçağıran Vael öldürüldü' }],
    xpReward: 2800, copperReward: 2500,
    itemRewards: { warrior: 'mistcallers_edge', mage: 'vaels_mist_staff', rogue: 'riptide_dirk' },
    requiresQuest: 'q_bastion_door',
    minLevel: 12,
    suggestedPlayers: 5,
  },
};

export const ZONE2_QUEST_ORDER = [
  'q_fenbridge_muster', 'q_prowlers', 'q_prowler_pelts', 'q_fen_supplies',
  'q_deepfen', 'q_idols', 'q_deepfen_purge', 'q_widows', 'q_broodmother',
  'q_drowned', 'q_drowned_censers', 'q_no_rest', 'q_trolls', 'q_troll_fetishes',
  'q_grubjaw', 'q_cult_camp', 'q_summoners', 'q_deacon', 'q_bastion_door',
  'q_olen', 'q_mistcaller',
];

// ---------------------------------------------------------------------------
// World layout. Fenbridge sits at (0,300); +z north (deeper fen), +x west
// (east is -x — see the zone1 layout note).
// ---------------------------------------------------------------------------

export const ZONE2_CAMPS: CampDef[] = [
  // Prowlers: reed beds flanking the causeway south of town
  { mobId: 'mire_prowler', center: { x: -40, z: 230 }, radius: 22, count: 7 },
  { mobId: 'mire_prowler', center: { x: 35, z: 225 }, radius: 20, count: 6 },
  // Murlocs: shores of the big east lake — camps straddle the waterline
  { mobId: 'deepfen_murloc', center: { x: -82, z: 273 }, radius: 15, count: 8 },
  { mobId: 'deepfen_murloc', center: { x: -120, z: 350 }, radius: 13, count: 6 },
  // Widows: thicket west of Fenbridge
  { mobId: 'mire_widow', center: { x: 70, z: 300 }, radius: 20, count: 7 },
  { mobId: 'mire_widow', center: { x: 95, z: 340 }, radius: 16, count: 6 },
  { mobId: 'mirefen_broodmother', center: { x: 98, z: 348 }, radius: 3, count: 1 },
  // Drowned dead: the Drowned Chapel and the shallows beyond
  { mobId: 'drowned_dead', center: { x: 90, z: 420 }, radius: 20, count: 8 },
  { mobId: 'drowned_dead', center: { x: 115, z: 450 }, radius: 16, count: 6 },
  // Trolls: barrow-mounds in the southeast
  { mobId: 'fen_troll', center: { x: -80, z: 420 }, radius: 22, count: 7 },
  { mobId: 'fen_troll', center: { x: -105, z: 455 }, radius: 18, count: 6 },
  { mobId: 'grubjaw', center: { x: -120, z: 480 }, radius: 8, count: 1 },
  // Gravecaller encampment: deep fen, before the Bastion
  { mobId: 'gravecaller_cultist', center: { x: 15, z: 470 }, radius: 20, count: 7 },
  { mobId: 'gravecaller_cultist', center: { x: -25, z: 490 }, radius: 16, count: 6 },
  { mobId: 'gravecaller_summoner', center: { x: -5, z: 500 }, radius: 12, count: 4 },
  { mobId: 'deacon_voss', center: { x: 0, z: 510 }, radius: 2, count: 1 },
];

export const ZONE2_OBJECTS: GroundObjectDef[] = [
  {
    itemId: 'fen_muster_order',
    name: 'Batakköprü Seferberlik Emri',
    positions: [{ x: 1, z: 294 }, { x: -2, z: 297 }],
  },
  {
    itemId: 'lost_caravan_goods',
    name: 'Kayıp Kervan Malları',
    positions: [
      { x: 1, z: 192 }, { x: -3, z: 206 }, { x: -6, z: 221 }, { x: -8, z: 237 },
      { x: -7, z: 252 }, { x: -3, z: 268 }, { x: 2, z: 283 },
    ],
  },
  {
    itemId: 'rusted_censer',
    name: 'Paslı Buhurdan',
    positions: [
      { x: 96, z: 429 }, { x: 103, z: 430 }, { x: 99, z: 434 },
      { x: 106, z: 437 }, { x: 97, z: 440 }, { x: 104, z: 441 },
    ],
  },
  {
    itemId: 'bastion_ward_stone',
    name: 'Burç Koruma Taşı',
    positions: [{ x: 43, z: 512 }, { x: 48, z: 517 }],
  },
];

// ---------------------------------------------------------------------------
// Items
// ---------------------------------------------------------------------------

// Archetype groups for class-locked rewards (REWARD_ARCHETYPE hands warrior
// rewards to paladins/shamans etc., so the lock must admit the whole group).
const WAR: PlayerClass[] = ['warrior', 'paladin', 'shaman'];
const MAG: PlayerClass[] = ['mage', 'priest', 'warlock', 'druid'];
const ROG: PlayerClass[] = ['rogue', 'hunter'];

export const ZONE2_ITEMS: Record<string, ItemDef> = {
  // --- quest items ---
  fen_muster_order: { id: 'fen_muster_order', name: 'Batakköprü Seferberlik Emri', kind: 'quest', sellValue: 0, questId: 'q_fenbridge_muster' },
  mire_prowler_pelt: { id: 'mire_prowler_pelt', name: 'Batak Avcısı Postu', kind: 'quest', sellValue: 0, questId: 'q_prowler_pelts' },
  lost_caravan_goods: { id: 'lost_caravan_goods', name: 'Kayıp Kervan Malları', kind: 'quest', sellValue: 0, questId: 'q_fen_supplies' },
  waterlogged_idol: { id: 'waterlogged_idol', name: 'Su Yutmuş Put', kind: 'quest', sellValue: 0, questId: 'q_idols' },
  widow_venom_sac: { id: 'widow_venom_sac', name: 'Dul Zehir Kesesi', kind: 'quest', sellValue: 0, questId: 'q_widows' },
  rusted_censer: { id: 'rusted_censer', name: 'Paslı Buhurdan', kind: 'quest', sellValue: 0, questId: 'q_drowned_censers' },
  troll_fetish: { id: 'troll_fetish', name: 'Sazbatak Trol Tılsımı', kind: 'quest', sellValue: 0, questId: 'q_troll_fetishes' },
  grubjaw_tusk: { id: 'grubjaw_tusk', name: "Kurtçene'nin Azı Dişi", kind: 'quest', sellValue: 0, questId: 'q_grubjaw' },
  cult_cipher: { id: 'cult_cipher', name: 'Mezarçağıran Şifresi', kind: 'quest', sellValue: 0, questId: 'q_summoners' },
  bastion_ward_stone: { id: 'bastion_ward_stone', name: 'Burç Koruma Taşı', kind: 'quest', sellValue: 0, questId: 'q_bastion_door' },
  // --- quest reward gear (uncommon) ---
  deacons_cleaver: {
    id: 'deacons_cleaver', name: 'Diyakoz Satırı', kind: 'weapon', slot: 'mainhand', quality: 'uncommon',
    weapon: { min: 11, max: 18, speed: 2.4 }, stats: { str: 4 }, sellValue: 300, requiredClass: WAR,
  },
  staff_of_drowned_prayers: {
    id: 'staff_of_drowned_prayers', name: 'Boğulmuş Dualar Asası', kind: 'weapon', slot: 'mainhand', quality: 'uncommon',
    weapon: { min: 12, max: 20, speed: 3.0 }, stats: { int: 5, spi: 2 }, sellValue: 300, requiredClass: MAG,
  },
  mistbinder_kris: {
    id: 'mistbinder_kris', name: 'Sisbağlayan Kama', kind: 'weapon', slot: 'mainhand', quality: 'uncommon',
    weapon: { min: 7, max: 12, speed: 1.7, dagger: true }, stats: { agi: 4 }, sellValue: 300, requiredClass: ROG,
  },
  drownedguard_breastplate: {
    id: 'drownedguard_breastplate', name: 'Batık Muhafız Göğüslüğü', kind: 'armor', slot: 'chest', quality: 'uncommon',
    stats: { armor: 130, sta: 4 }, sellValue: 350, requiredClass: WAR,
  },
  fenmist_robe: {
    id: 'fenmist_robe', name: 'Bataksis Cübbesi', kind: 'armor', slot: 'chest', quality: 'uncommon',
    stats: { armor: 45, int: 5, spi: 3 }, sellValue: 350, requiredClass: MAG,
  },
  eelskin_tunic: {
    id: 'eelskin_tunic', name: 'Yılanbalığı Derisi Yelek', kind: 'armor', slot: 'chest', quality: 'uncommon',
    stats: { armor: 80, agi: 5 }, sellValue: 350, requiredClass: ROG,
  },
  trollhide_leggings: {
    id: 'trollhide_leggings', name: 'Trol Derisi Tozluğu', kind: 'armor', slot: 'legs', quality: 'uncommon',
    stats: { armor: 55, sta: 3, str: 2 }, sellValue: 280,
  },
  marshstrider_boots: {
    id: 'marshstrider_boots', name: 'Batakgezer Çizmesi', kind: 'armor', slot: 'feet', quality: 'uncommon',
    stats: { armor: 40, agi: 2, sta: 2 }, sellValue: 250,
  },
  // --- Sunken Bastion blues (rare) ---
  mistcallers_edge: {
    id: 'mistcallers_edge', name: 'Sisçağıranın Keskini', kind: 'weapon', slot: 'mainhand', quality: 'rare',
    weapon: { min: 14, max: 23, speed: 2.3 }, stats: { str: 4, sta: 3 }, sellValue: 1200, requiredClass: WAR,
  },
  vaels_mist_staff: {
    id: 'vaels_mist_staff', name: "Vael'in Sis Asası", kind: 'weapon', slot: 'mainhand', quality: 'rare',
    weapon: { min: 15, max: 26, speed: 3.0 }, stats: { int: 6, spi: 3 }, sellValue: 1200, requiredClass: MAG,
  },
  riptide_dirk: {
    id: 'riptide_dirk', name: 'Anafor Hançeri', kind: 'weapon', slot: 'mainhand', quality: 'rare',
    weapon: { min: 9, max: 15, speed: 1.7, dagger: true }, stats: { agi: 5, sta: 2 }, sellValue: 1200, requiredClass: ROG,
  },
  knight_commanders_greaves: {
    id: 'knight_commanders_greaves', name: 'Şövalye Kumandan Dizlikleri', kind: 'armor', slot: 'legs', quality: 'rare',
    stats: { armor: 95, sta: 4 }, sellValue: 1000,
  },
  tidescale_vest: {
    id: 'tidescale_vest', name: 'Dalgapul Yeleği', kind: 'armor', slot: 'chest', quality: 'rare',
    stats: { armor: 90, sta: 3, agi: 2 }, sellValue: 1100,
  },
  // --- vendor food & drink (Erzakçı Emine) ---
  fenbridge_rye: {
    id: 'fenbridge_rye', name: 'Batakköprü Çavdar Ekmeği', kind: 'food', quality: 'common',
    foodHp: 243, sellValue: 25, buyValue: 400,
  },
  marsh_mint_tea: {
    id: 'marsh_mint_tea', name: 'Batak Nane Çayı', kind: 'drink', quality: 'common',
    drinkMana: 288, sellValue: 25, buyValue: 400,
  },
  smoked_eel: {
    id: 'smoked_eel', name: 'Tütsülenmiş Sazbatak Yılanbalığı', kind: 'food', quality: 'common',
    foodHp: 432, sellValue: 60, buyValue: 1000,
  },
  silvermist_cordial: {
    id: 'silvermist_cordial', name: 'Gümüşsis Likörü', kind: 'drink', quality: 'common',
    drinkMana: 436, sellValue: 60, buyValue: 1000,
  },
  // --- vendor white gear (Erzakçı Emine) ---
  bogiron_mace: {
    id: 'bogiron_mace', name: 'Batakdemir Topuzu', kind: 'weapon', slot: 'mainhand', quality: 'common',
    weapon: { min: 8, max: 14, speed: 2.6 }, sellValue: 250, buyValue: 2500,
  },
  fenreed_staff: {
    id: 'fenreed_staff', name: 'Batak Kamışı Asası', kind: 'weapon', slot: 'mainhand', quality: 'common',
    weapon: { min: 9, max: 16, speed: 3.0 }, stats: { int: 1 }, sellValue: 250, buyValue: 2500,
  },
  mirefen_skinner: {
    id: 'mirefen_skinner', name: 'Sazbatak Yüzme Bıçağı', kind: 'weapon', slot: 'mainhand', quality: 'common',
    weapon: { min: 6, max: 10, speed: 1.8, dagger: true }, sellValue: 250, buyValue: 2500,
  },
  bogiron_hauberk: {
    id: 'bogiron_hauberk', name: 'Batakdemir Zırh Gömleği', kind: 'armor', slot: 'chest', quality: 'common',
    stats: { armor: 100 }, sellValue: 300, buyValue: 3000,
  },
  marshcloth_robe: {
    id: 'marshcloth_robe', name: 'Batakbezi Cübbesi', kind: 'armor', slot: 'chest', quality: 'common',
    stats: { armor: 32 }, sellValue: 200, buyValue: 2000,
  },
  reedwoven_jerkin: {
    id: 'reedwoven_jerkin', name: 'Saz Örgü Yeleği', kind: 'armor', slot: 'chest', quality: 'common',
    stats: { armor: 62 }, sellValue: 250, buyValue: 2500,
  },
  fenwalker_boots: {
    id: 'fenwalker_boots', name: 'Batakyürür Çizmesi', kind: 'armor', slot: 'feet', quality: 'common',
    stats: { armor: 30 }, sellValue: 150, buyValue: 1500,
  },
  reedwoven_trousers: {
    id: 'reedwoven_trousers', name: 'Saz Örgü Pantolonu', kind: 'armor', slot: 'legs', quality: 'common',
    stats: { armor: 40 }, sellValue: 180, buyValue: 1800,
  },
  // --- junk (gray) ---
  bogiron_nugget: { id: 'bogiron_nugget', name: 'Batakdemir Külçesi', kind: 'junk', quality: 'poor', sellValue: 12 },
  soggy_moccasin: { id: 'soggy_moccasin', name: 'Sırılsıklam Makosen', kind: 'junk', quality: 'poor', sellValue: 9 },
  cracked_fetish: { id: 'cracked_fetish', name: 'Çatlak Tılsım', kind: 'junk', quality: 'poor', sellValue: 14 },
  chipped_tusk: { id: 'chipped_tusk', name: 'Kırık Azı Dişi', kind: 'junk', quality: 'poor', sellValue: 15 },
  deepfen_pearl: { id: 'deepfen_pearl', name: 'Derinbatak İncisi', kind: 'junk', quality: 'poor', sellValue: 600 },
};

// ---------------------------------------------------------------------------
// Static props (rendering + collision share this placement data)
// ---------------------------------------------------------------------------

export const ZONE2_PROPS: ZonePropsDef = {
  buildings: [
    { kind: 'inn', x: 13, z: 306, w: 6, d: 7, rot: -1.0 },
    { kind: 'house', x: -13, z: 308, w: 7, d: 6, rot: 0.5 },
    { kind: 'house', x: -12, z: 291, w: 6, d: 5, rot: 2.6 },
    { kind: 'house', x: 11, z: 316, w: 6, d: 5, rot: 0.3 },
  ],
  wells: [{ x: 0, z: 302, r: 1.5 }],
  stalls: [{ x: -5, z: 310.5, rot: Math.PI / 2, r: 1.7 }],
  mines: [],
  // fishing dock on the east shore of the big west lake
  docks: [{ x: -66, z: 305, rot: 1.68, hutLocal: { x: 2.8, z: 2.4, hw: 1.7, hd: 1.5 } }],
  tents: [
    // Gravecaller encampment
    { x: 12, z: 474, rot: 0.5, scale: 1 },
    { x: 20, z: 466, rot: 2.1, scale: 1 },
    { x: -22, z: 486, rot: 1.2, scale: 1 },
    { x: -28, z: 494, rot: -0.7, scale: 1 },
    { x: -3, z: 505, rot: 2.9, scale: 1.3 },
  ],
  crates: [[14, 468], [18, 471], [-23, 491], [2, 504]],
  campfires: [[4, 299], [-2, 293], [16, 470], [-25, 489], [0, 506]],
  // mud-hut clusters at the murloc shallows
  mudHuts: [[-78, 269], [-83, 266], [-74, 275], [-117, 346], [-123, 354]],
  ruinRings: [{ x: 100, z: 435, ringR: 7, columns: 7 }],
  fences: [
    { x1: 16, z1: 311, x2: 21, z2: 299 },
    { x1: -18, z1: 313, x2: -22, z2: 300 },
  ],
  graveyards: [{ x: -18, z: 286 }],
};
