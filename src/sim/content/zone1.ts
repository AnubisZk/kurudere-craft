// Zone 1 — Kurudere Bozkırı (levels 1-7). The starter zone: Kurudere Hanı,
// bozkır wolves, scorpions, the bandit road, and Hoca Ali's Gravecaller chain
// leading to the Hollow Crypt.

import type { CampDef, GroundObjectDef, MobTemplate, NpcDef, QuestDef, ZoneDef, ZonePropsDef } from '../types';

export const TOWN_RADIUS = 26;
export const GRAVEYARD_POS = { x: -12, z: -14 };
// Basin carved into the heightfield. Pushed to the far northeast so its
// shoreline meets the fishing dock and the murloc camp instead of drowning them.
export const LAKE = { x: -92, z: 88, radius: 30 };

export const ZONE1_ZONE: ZoneDef = {
  id: 'kurudere_steppe',
  name: 'Kurudere Bozkırı',
  zMin: -180,
  zMax: 180,
  levelRange: [1, 7],
  biome: 'vale',
  hub: { x: 0, z: 0, radius: TOWN_RADIUS, name: 'Kurudere Hanı' },
  graveyard: GRAVEYARD_POS,
  lakes: [LAKE],
  pois: [
    { x: 0, z: -3, label: 'Kurudere Hanı' },
    { x: -2, z: 70, label: 'Kurt Geçidi' },
    { x: 65, z: 0, label: 'Kuru Çayır' },
    { x: -88, z: 82, label: 'Sessiz Kuyu' },
    { x: -60, z: 4, label: 'Akrep Taşlığı' },
    { x: -84, z: -64, label: 'Bakır Ocağı' },
    { x: 76, z: -76, label: 'Tozlu Yol Kampı' },
    { x: 80, z: 80, label: 'Eski Pınar' },
  ],
  welcome: 'Kurudere Hanı\'nda Şerif Zafer\'i bul — sana iş verecek.',
};

// ---------------------------------------------------------------------------
// Mobs
// ---------------------------------------------------------------------------

export const ZONE1_MOBS: Record<string, MobTemplate> = {
  forest_wolf: {
    id: 'forest_wolf', name: 'Bozkır Kurdu', minLevel: 1, maxLevel: 2, family: 'beast',
    hpBase: 28, hpPerLevel: 14, dmgBase: 3, dmgPerLevel: 1.6, attackSpeed: 2.0,
    armorPerLevel: 10, moveSpeed: 8, aggroRadius: 10,
    loot: [
      { copper: 8, chance: 1 },
      { itemId: 'wolf_fang', chance: 0.45 },
    ],
    scale: 0.9, color: 0x7f8c8d,
  },
  old_greyjaw: {
    id: 'old_greyjaw', name: 'Koca Tozçene', minLevel: 4, maxLevel: 4, family: 'beast', rare: true,
    hpBase: 110, hpPerLevel: 20, dmgBase: 5, dmgPerLevel: 2.0, attackSpeed: 1.8,
    armorPerLevel: 16, moveSpeed: 8.5, aggroRadius: 12,
    loot: [
      { copper: 60, chance: 1 },
      { itemId: 'greyjaw_fang', chance: 1, questId: 'q_greyjaw' },
      { itemId: 'wolf_fang', chance: 1 },
    ],
    scale: 1.25, color: 0x566061,
  },
  wild_boar: {
    id: 'wild_boar', name: 'Yaban Domuzu', minLevel: 2, maxLevel: 3, family: 'beast',
    hpBase: 34, hpPerLevel: 16, dmgBase: 4, dmgPerLevel: 1.8, attackSpeed: 2.2,
    armorPerLevel: 14, moveSpeed: 7.5, aggroRadius: 9,
    loot: [
      { copper: 12, chance: 1 },
      { itemId: 'boar_hide', chance: 0.6, questId: 'q_boars' },
      { itemId: 'tough_jerky', chance: 0.3 },
    ],
    scale: 0.85, color: 0x935116,
  },
  webwood_spider: {
    id: 'webwood_spider', name: 'Kum Akrebi', minLevel: 2, maxLevel: 4, family: 'spider',
    hpBase: 30, hpPerLevel: 15, dmgBase: 4, dmgPerLevel: 1.7, attackSpeed: 1.8,
    armorPerLevel: 8, moveSpeed: 8, aggroRadius: 10,
    loot: [
      { copper: 14, chance: 1 },
      { itemId: 'webwood_silk', chance: 0.55, questId: 'q_spiders' },
      { itemId: 'spider_leg', chance: 0.4 },
    ],
    scale: 0.9, color: 0x4a235a,
  },
  mudfin_murloc: {
    id: 'mudfin_murloc', name: 'Kuyu Yağmacısı', minLevel: 3, maxLevel: 5, family: 'murloc',
    hpBase: 36, hpPerLevel: 17, dmgBase: 5, dmgPerLevel: 1.9, attackSpeed: 1.9,
    armorPerLevel: 12, moveSpeed: 8, aggroRadius: 13, // murlocs aggro from far and bring friends
    loot: [
      { copper: 18, chance: 1 },
      { itemId: 'mudfin_scale', chance: 0.5 },
      { itemId: 'linen_scrap', chance: 0.2 },
    ],
    scale: 0.8, color: 0x52be80,
  },
  tunnel_rat: {
    id: 'tunnel_rat', name: 'Mum Kafalı Kazıcı', minLevel: 4, maxLevel: 6, family: 'kobold',
    hpBase: 42, hpPerLevel: 18, dmgBase: 6, dmgPerLevel: 2.0, attackSpeed: 2.1,
    armorPerLevel: 16, moveSpeed: 7, aggroRadius: 10,
    loot: [
      { copper: 22, chance: 1 },
      { itemId: 'tallow_candle', chance: 0.6 },
      { itemId: 'blessed_wax', chance: 0.45, questId: 'q_rite' },
      { itemId: 'linen_scrap', chance: 0.25 },
    ],
    scale: 0.85, color: 0x9c640c,
  },
  vale_bandit: {
    id: 'vale_bandit', name: 'Yol Kesici', minLevel: 3, maxLevel: 5, family: 'humanoid',
    hpBase: 40, hpPerLevel: 18, dmgBase: 5, dmgPerLevel: 2.0, attackSpeed: 2.0,
    armorPerLevel: 20, moveSpeed: 7, aggroRadius: 11,
    loot: [
      { copper: 25, chance: 1 },
      { itemId: 'bandit_bandana', chance: 0.5 },
      { itemId: 'linen_scrap', chance: 0.3 },
    ],
    scale: 1.0, color: 0x943126,
  },
  restless_bones: {
    id: 'restless_bones', name: 'Huzursuz Kemikler', minLevel: 5, maxLevel: 7, family: 'undead',
    hpBase: 46, hpPerLevel: 19, dmgBase: 7, dmgPerLevel: 2.1, attackSpeed: 2.3,
    armorPerLevel: 14, moveSpeed: 6.5, aggroRadius: 11,
    loot: [
      { copper: 30, chance: 1 },
      { itemId: 'bone_fragments', chance: 0.6 },
      { itemId: 'ghostly_essence', chance: 0.55, questId: 'q_rite' },
    ],
    scale: 1.0, color: 0xd5dbdb,
  },
  gorrak: {
    id: 'gorrak', name: 'Kervankıran Gorrak', minLevel: 6, maxLevel: 6, family: 'humanoid',
    hpBase: 160, hpPerLevel: 30, dmgBase: 8, dmgPerLevel: 2.4, attackSpeed: 2.4,
    armorPerLevel: 30, moveSpeed: 7, aggroRadius: 13, boss: true,
    loot: [
      { copper: 250, chance: 1 },
      { itemId: 'bandit_bandana', chance: 1 },
      { itemId: 'oiled_boots', chance: 0.5 },
      { itemId: 'quilted_trousers', chance: 0.5 },
    ],
    scale: 1.25, color: 0x6c3483,
  },
};

// ---------------------------------------------------------------------------
// NPCs
// ---------------------------------------------------------------------------

export const ZONE1_NPCS: Record<string, NpcDef> = {
  marshal_redbrook: {
    id: 'marshal_redbrook', name: 'Şerif Zafer', title: 'Han Şerifi',
    pos: { x: 4, z: 6 }, facing: Math.PI, color: 0xb7950b,
    questIds: ['q_wolves', 'q_greyjaw', 'q_bandits', 'q_ringleader'],
    greeting: 'Kılıcını yanından ayırma $C. Kurudere yolu artık eskisi gibi değil.',
  },
  trader_wilkes: {
    id: 'trader_wilkes', name: 'Tüccar Osman', title: 'Erzakçı',
    pos: { x: -7, z: 3 }, facing: Math.PI / 2, color: 0x1e8449,
    questIds: ['q_boars', 'q_supplies'],
    vendorItems: ['baked_bread', 'spring_water', 'roasted_boar', 'tough_jerky'],
    greeting: 'Taze ekmek az, temiz su kıymetli. Ne vereyim?',
  },
  apothecary_lin: {
    id: 'apothecary_lin', name: 'Eczacı Ayşegül', title: 'Otacı',
    pos: { x: 11, z: -3 }, facing: -Math.PI / 2, color: 0x7d3c98,
    questIds: ['q_spiders'],
    greeting: 'Akrep taşlığında adımına dikkat et dostum.',
  },
  brother_aldric: {
    id: 'brother_aldric', name: 'Hoca Ali', title: 'Bozkır Hocası',
    pos: { x: -14, z: -10 }, facing: 0.8, color: 0xf7f9f9,
    questIds: [
      'q_bones', 'q_whispers', 'q_names_of_the_dead', 'q_silence_the_call',
      'q_rite', 'q_sexton', 'q_hollow', 'q_gravecallers_trail', 'q_fenbridge_muster',
    ],
    greeting: 'Işık seni korusun. Son zamanlarda ölüler bile huzur bulamıyor burada.',
  },
  smith_haldren: {
    id: 'smith_haldren', name: 'Demirci Mehmet', title: 'Zırh ve Silah Ustası',
    pos: { x: 7, z: 16.5 }, facing: -2.7, color: 0x707b7c,
    questIds: [],
    vendorItems: [
      'eastbrook_arming_sword', 'bronzework_mace', 'vale_carving_knife', 'hickory_shortstaff',
      'eastbrook_chain_vest', 'valespun_robe', 'tanned_leather_jerkin',
      'hobnail_boots', 'eastbrook_wool_trousers',
    ],
    greeting: 'Kıvılcımlara dikkat $C. İyi çelik, yara iziyle mezar arasındaki farktır.',
  },
  fisherman_brandt: {
    id: 'fisherman_brandt', name: 'Kuyucu Osman', title: 'Eski Kuyu Bekçisi',
    // in town (east edge, glaring out at Mirror Lake) — his old spot by the
    // dock sat inside the Mudfin spawn radius and new players got ambushed
    // walking up to a quest giver
    pos: { x: -16, z: 6 }, facing: -0.75, color: 0x2471a3,
    questIds: ['q_murlocs'],
    greeting: 'Kuyu üç gündür susuyor. Taşın altından gelen ses de hiç hayra alamet değil.',
  },
  foreman_odell: {
    id: 'foreman_odell', name: 'Ustabaşı Zafer', title: 'Maden Ustabaşı',
    // in town (south edge, scowling toward his overrun dig) — his old spot
    // sat inside the Tunnel Rat spawn radius
    pos: { x: -4, z: -14 }, facing: -2.14, color: 0xa04000,
    questIds: ['q_mine'],
    greeting: 'Bütün ocak o mum kafalı haşeratla kaynıyor!',
  },
};

// ---------------------------------------------------------------------------
// Quests
// ---------------------------------------------------------------------------

export const ZONE1_QUESTS: Record<string, QuestDef> = {
  q_wolves: {
    id: 'q_wolves', name: 'Kapıdaki Kurtlar',
    giverNpcId: 'marshal_redbrook', turnInNpcId: 'marshal_redbrook',
    text: 'Bozkır kurtları susuzluktan hana kadar indi, kuzey yolundaki yolculara saldırıyorlar. Sayılarını azalt $N. 8 Bozkır Kurdu öldür ki Kurudere rahat bir nefes alsın.',
    completionText: 'İyi iş. Han kapısı şimdiden daha güvenli.',
    objectives: [{ type: 'kill', targetMobId: 'forest_wolf', count: 8, label: 'Bozkır Kurdu öldürüldü' }],
    xpReward: 250, copperReward: 75, itemRewards: {},
  },
  q_greyjaw: {
    id: 'q_greyjaw', name: 'Tozçene',
    giverNpcId: 'marshal_redbrook', turnInNpcId: 'marshal_redbrook',
    text: 'Hiçbir tuzağın tutamadığı tek bir kurt var: Koca Tozçene. Üç kervan köpeğini ve bir seyis çocuğunun kolunu aldı. Kurt geçitlerinin kuzeyindeki kuru çalılıkta dolanıyor. Bana dişini getir.',
    completionText: 'Demek koca şeytan sonunda öldü. Kervan yolu biraz daha sessiz uyuyacak — ben de öyle.',
    objectives: [{ type: 'collect', itemId: 'greyjaw_fang', count: 1, label: 'Koca Tozçene\'nin Dişi' }],
    xpReward: 450, copperReward: 150,
    itemRewards: { warrior: 'greyjaw_pelt_cloak', mage: 'greyjaw_pelt_cloak', rogue: 'greyjaw_pelt_cloak' },
    requiresQuest: 'q_wolves',
  },
  q_boars: {
    id: 'q_boars', name: 'Yol Çantası Postları',
    giverNpcId: 'trader_wilkes', turnInNpcId: 'trader_wilkes',
    text: 'En iyi yol çantaları sağlam domuz derisinden yapılır ve Kurudere\'nin kuru çayırı bu hayvanlarla kaynıyor. Bana 5 Kıllı Domuz Postu getir, zahmetine değsin.',
    completionText: 'Ah, ne güzel kıllı postlar! Bunlar iyi para eder.',
    objectives: [{ type: 'collect', itemId: 'boar_hide', count: 5, label: 'Kıllı Domuz Postu' }],
    xpReward: 350, copperReward: 120, itemRewards: {},
  },
  q_spiders: {
    id: 'q_spiders', name: 'Akrep Taşlığı',
    giverNpcId: 'apothecary_lin', turnInNpcId: 'apothecary_lin',
    text: 'Akrep taşlığındaki kum akrepleri kuyulara kadar indi. Zehirlerinden panzehir yapacağım. 6 Kum Akrebi öldür ve 4 akrep iğnesi getir.',
    completionText: 'Iyy, hâlâ seğiriyor. Mükemmel. Kurudere\'nin panzehiri çıkacak bundan.',
    objectives: [
      { type: 'kill', targetMobId: 'webwood_spider', count: 6, label: 'Kum Akrebi öldürüldü' },
      { type: 'collect', itemId: 'webwood_silk', count: 4, label: 'Akrep İğnesi' },
    ],
    xpReward: 420, copperReward: 140, itemRewards: {},
    minLevel: 2,
  },
  q_murlocs: {
    id: 'q_murlocs', name: 'Kuyudaki Sessizlik',
    giverNpcId: 'fisherman_brandt', turnInNpcId: 'fisherman_brandt',
    text: 'Yirmi yıldır Sessiz Kuyu\'ya bakarım; bu hafta kovalar boş dönüyor, taşların arasından yağmacılar çıkıyor. Kuyu Yağmacıları\'nı geri püskürt — 8 tanesini öldür.',
    completionText: 'Hah! Kuyu ağzı temizlendi. Su sesi hâlâ zayıf ama en azından nöbet tutabiliriz.',
    objectives: [{ type: 'kill', targetMobId: 'mudfin_murloc', count: 8, label: 'Kuyu Yağmacısı öldürüldü' }],
    xpReward: 520, copperReward: 180, itemRewards: {},
    minLevel: 3,
  },
  q_mine: {
    id: 'q_mine', name: 'Ocaktaki Kazıcılar',
    giverNpcId: 'foreman_odell', turnInNpcId: 'foreman_odell',
    text: 'Güzel bir bakır damarı bulmuştuk ki o mum kafalı kazıcılar yamaçtan fışkırıverdi. Ocak temizlenene kadar ekibim oraya adım atmaz. 10 Mum Kafalı Kazıcı\'nın işini bitir.',
    completionText: 'Ha! İşbaşına çocuklar! Teşekkürümü de paramı da hak ettin.',
    objectives: [{ type: 'kill', targetMobId: 'tunnel_rat', count: 10, label: 'Mum Kafalı Kazıcı öldürüldü' }],
    xpReward: 620, copperReward: 220, itemRewards: {},
    minLevel: 4,
  },
  q_bones: {
    id: 'q_bones', name: 'Huzursuz Ölüler',
    giverNpcId: 'brother_aldric', turnInNpcId: 'brother_aldric',
    text: 'Eski Pınar\'ın yanındaki harabe bir zamanlar yol şapeliydi, avlusu da kervancı mezarlığı. Bir şey ölüleri uykusundan uyandırdı. Onlara huzur ver $N — 8 Huzursuz Kemikler\'i toprağa geri gönder.',
    completionText: 'Artık huzur bulsunlar; onları uyandıran her neyse, Işık affetsin.',
    objectives: [{ type: 'kill', targetMobId: 'restless_bones', count: 8, label: 'Huzursuz Kemikler toprağa verildi' }],
    xpReward: 700, copperReward: 260, itemRewards: {},
    minLevel: 5,
  },
  q_supplies: {
    id: 'q_supplies', name: 'Çalınan Erzak',
    giverNpcId: 'trader_wilkes', turnInNpcId: 'trader_wilkes',
    text: 'O yol kesiciler son kervanımı vurup dört sandık malımı götürdüler — alet, tuz, has Kurudere keteni. Sandıklar Tozlu Yol kampında duruyor. Onları benim için geri çalar mısın?',
    completionText: 'Sandıklarım! Üstelik neredeyse çiziksiz. Sen bir harikasın.',
    objectives: [{ type: 'collect', itemId: 'supply_crate', count: 4, label: 'Çalınan Erzak Sandığı' }],
    xpReward: 550, copperReward: 250, itemRewards: {},
    minLevel: 3,
  },
  q_whispers: {
    id: 'q_whispers', name: 'Aşağıdan Gelen Fısıltılar',
    giverNpcId: 'brother_aldric', turnInNpcId: 'brother_aldric',
    text: 'Ölüleri toprağa verdin ama yerlerinde durmuyorlar — bir şey onları geri çağırıyor. Şapel harabesinde bu çağrıyı yapanın izini ara. Bir mühür ya da nişan bulursan, dokunmadan bana getir.',
    completionText: 'Bu mühür... üzerinde Mezarçağıranlar\'ın işareti var; soyunun tükendiğine dua ettiğim bir tarikat. Bu korktuğumdan da kötü $N.',
    objectives: [{ type: 'collect', itemId: 'gravecaller_sigil', count: 1, label: 'Mezarçağıran Mührü' }],
    xpReward: 400, copperReward: 150, itemRewards: {},
    requiresQuest: 'q_bones',
  },
  q_names_of_the_dead: {
    id: 'q_names_of_the_dead', name: 'Ölülerin Adları',
    giverNpcId: 'brother_aldric', turnInNpcId: 'brother_aldric',
    text: 'Mezarçağıranlar ölülerimizi dirilttiyse, kimlerin mezarını soyduklarını bilmeliyim. Şapel zangoçu bir defin defteri tutardı; rüzgâr sayfalarını şapel avlusuna savurmuş. Bana 3 tanesini topla $N — ölüler adlarıyla anılmayı hak eder.',
    completionText: 'Zavallı ruhlar... ve şuraya bak. Zangoç Marrow — şapelin kendi bekçisi — ilk bozulan mezar onunki. Morthen işe Kurudere\'nin ölülerini gömen adamın ta kendisiyle başlamış.',
    objectives: [{ type: 'collect', itemId: 'weathered_ledger_page', count: 3, label: 'Yıpranmış Defter Sayfası' }],
    xpReward: 600, copperReward: 250, itemRewards: {},
    requiresQuest: 'q_whispers',
  },
  q_silence_the_call: {
    id: 'q_silence_the_call', name: 'Çağrıyı Sustur',
    giverNpcId: 'brother_aldric', turnInNpcId: 'brother_aldric',
    text: 'O defterdeki her isim, Morthen\'in topraktan çekip çıkarmak istediği bir ruh; şapel avlusu çağırdıklarıyla şimdiden kaynıyor. 12 Huzursuz Kemikler\'i mezarlarına geri gönder $N — Mezarçağıran\'ın fısıltısı bir koroya dönüşmeden.',
    completionText: 'Avlu sakinleşiyor — ama çağrı durmadı. Artık aşağıdan yükseliyor $N. Mahzenin ta kendisinden.',
    objectives: [{ type: 'kill', targetMobId: 'restless_bones', count: 12, label: 'Huzursuz Kemikler susturuldu' }],
    xpReward: 750, copperReward: 300, itemRewards: {},
    requiresQuest: 'q_names_of_the_dead',
  },
  q_rite: {
    id: 'q_rite', name: 'Bağlama Ayini',
    giverNpcId: 'brother_aldric', turnInNpcId: 'brother_aldric',
    text: 'Mezarçağıran\'ı durduracaksak şapelin altındaki mahzenin mührü açılmalı — ama yaşayanların geçmesine ancak bir bağlama ayini izin verir. Bana 4 parça Kutsanmış Donyağı lazım — kobold kazıcılar mumları sandıkla istifler — bir de huzursuz ölülerden 6 Hayalet Özü.',
    completionText: 'Tamamdır. Aşağıya inen yol açık... onu açtığım için Işık beni affetsin. İnmeden önce en güçlü yoldaşlarını topla $N. Kimse Oyuk\'la tek başına yüzleşmemeli.',
    objectives: [
      { type: 'collect', itemId: 'blessed_wax', count: 4, label: 'Kutsanmış Donyağı' },
      { type: 'collect', itemId: 'ghostly_essence', count: 6, label: 'Hayalet Özü' },
    ],
    xpReward: 700, copperReward: 500, itemRewards: {},
    requiresQuest: 'q_whispers',
  },
  q_hollow: {
    id: 'q_hollow', name: 'Oyuk\'a İniş',
    giverNpcId: 'brother_aldric', turnInNpcId: 'brother_aldric',
    text: 'Mezarçağıran Morthen, Oyuk Mahzen\'in dibinde, dirilttiği seçkin ölülerle çevrili hâlde bekliyor. Tek bir kahramanın harcı değil — yanına dört yoldaş al, daha azı olmaz. Onun işini bitir ki Kurudere\'nin ölüleri nihayet uyusun.',
    completionText: 'Fısıltılar durdu. Bütün bozkırın yapamadığını yaptın $N — ölüler uyuyor ve Kurudere sana her şeyini borçlu.',
    objectives: [{ type: 'kill', targetMobId: 'morthen', count: 1, label: 'Mezarçağıran Morthen öldürüldü' }],
    xpReward: 1500, copperReward: 10000,
    itemRewards: { warrior: 'gravecaller_blade', rogue: 'widowfang_dirk', mage: 'gravecaller_staff' },
    requiresQuest: 'q_rite',
    suggestedPlayers: 5,
  },
  q_sexton: {
    id: 'q_sexton', name: 'Zangoçun Çanı',
    giverNpcId: 'brother_aldric', turnInNpcId: 'brother_aldric',
    text: 'Defter adını verdi, mahzen de onu saklıyor: Zangoç Marrow, şapelin bekçisi, Morthen\'in dirilttiği ilk adam — yaşarken şapeli koruduğu sadakatle, ölümünde efendisinin kapısını koruyor. Dört yoldaş al, Oyuk Mahzen\'e in ve yaşlı zangoça çalınan huzurunu geri ver $N.',
    completionText: 'Demek Marrow sonunda özgür. Onun için çan çalmayın — hayattayken yeterince duydu.',
    objectives: [{ type: 'kill', targetMobId: 'sexton_marrow', count: 1, label: 'Zangoç Marrow toprağa verildi' }],
    xpReward: 1000, copperReward: 600,
    itemRewards: { warrior: 'marrowtread_boots', mage: 'sextons_slippers', rogue: 'gravewalker_softboots' },
    requiresQuest: 'q_rite',
    suggestedPlayers: 5,
  },
  q_gravecallers_trail: {
    id: 'q_gravecallers_trail', name: 'Mezarçağıran\'ın İzi',
    giverNpcId: 'brother_aldric', turnInNpcId: 'brother_aldric',
    text: 'Morthen öldü ama içimi bir soru kemiriyor: bir asır boyunca saklanan bir tarikat kendini tek bir köy şapeline harcamaz. Bir büyü kitabı tutardı — ayinleri, yazışmaları. Bir şey kaldıysa, mahzenin üstündeki yıkık şapelin giysi odasındadır. Harabeyi ara ve yazılarından ne kaldıysa bana getir $N.',
    completionText: 'Morthen güneydeki bataklıktaki bir \'Sisçağıran\'a mektup yazmış. Tarikat ölmemiş $N — yalnızca sabırlıymış.',
    objectives: [{ type: 'collect', itemId: 'morthen_grimoire', count: 1, label: 'Morthen\'in Büyü Kitabı' }],
    xpReward: 900, copperReward: 400, itemRewards: {},
    requiresQuest: 'q_hollow',
  },
  q_bandits: {
    id: 'q_bandits', name: 'Tozlu Yolun Eskiyaları',
    giverNpcId: 'marshal_redbrook', turnInNpcId: 'marshal_redbrook',
    text: 'Bir sürü gözü dönmüş yol kesici Tozlu Yol\'a kamp kurmuş. Bu hafta üç kervan soydular. Onları def et — 10 Yol Kesici öldür.',
    completionText: 'Karanlıkta on bıçak eksildi. Al şunu — hak ettin.',
    objectives: [{ type: 'kill', targetMobId: 'vale_bandit', count: 10, label: 'Yol Kesici öldürüldü' }],
    xpReward: 550, copperReward: 200,
    itemRewards: { warrior: 'redbrook_blade', mage: 'apprentice_staff', rogue: 'keen_dirk' },
    requiresQuest: 'q_wolves',
  },
  q_ringleader: {
    id: 'q_ringleader', name: 'Elebaşı',
    giverNpcId: 'marshal_redbrook', turnInNpcId: 'marshal_redbrook',
    text: 'Yol kesiciler tek bir adama hesap verir: Kervankıran Gorrak. Başı kes, gövde dağılır. Kampının göbeğinde sinsice dolanıyor. İşini bitir $N.',
    completionText: 'Gorrak öldü mü? Öyleyse Kurudere onun gölgesinden kurtuldu. Hana büyük bir hizmette bulundun.',
    objectives: [{ type: 'kill', targetMobId: 'gorrak', count: 1, label: 'Kervankıran Gorrak öldürüldü' }],
    xpReward: 800, copperReward: 500,
    itemRewards: { warrior: 'militia_vest', mage: 'woven_robe', rogue: 'shadow_jerkin' },
    requiresQuest: 'q_bandits',
  },
};

export const ZONE1_QUEST_ORDER = [
  'q_wolves', 'q_boars', 'q_spiders', 'q_greyjaw', 'q_murlocs',
  'q_supplies', 'q_bandits', 'q_mine', 'q_bones', 'q_ringleader',
  'q_whispers', 'q_names_of_the_dead', 'q_silence_the_call',
  'q_rite', 'q_sexton', 'q_hollow', 'q_gravecallers_trail',
];

// ---------------------------------------------------------------------------
// World layout. Town sits at origin. +z north, +x WEST (east is -x:
// facing 0 looks along +z and turning right decreases facing, so the
// rendered world and the corrected map both put -x on your right).
// ---------------------------------------------------------------------------

export const ZONE1_CAMPS: CampDef[] = [
  // Wolves: north scrubland
  { mobId: 'forest_wolf', center: { x: -15, z: 55 }, radius: 22, count: 7 },
  { mobId: 'forest_wolf', center: { x: 20, z: 70 }, radius: 20, count: 6 },
  { mobId: 'old_greyjaw', center: { x: 0, z: 95 }, radius: 8, count: 1 },
  // Boars: dry meadow
  { mobId: 'wild_boar', center: { x: 55, z: 12 }, radius: 22, count: 6 },
  { mobId: 'wild_boar', center: { x: 80, z: -15 }, radius: 18, count: 5 },
  // Scorpions: western rock field
  { mobId: 'webwood_spider', center: { x: -60, z: 5 }, radius: 22, count: 7 },
  // Well raiders: dry well northwest
  { mobId: 'mudfin_murloc', center: { x: -75, z: 57 }, radius: 14, count: 8 },
  // Kobolds: mine southwest
  { mobId: 'tunnel_rat', center: { x: -82, z: -62 }, radius: 20, count: 9 },
  // Bandits: dusty road camp
  { mobId: 'vale_bandit', center: { x: 65, z: -65 }, radius: 24, count: 7 },
  { mobId: 'vale_bandit', center: { x: 90, z: -90 }, radius: 16, count: 5 },
  { mobId: 'gorrak', center: { x: 92, z: -92 }, radius: 2, count: 1 },
  // Undead: ruins northeast
  { mobId: 'restless_bones', center: { x: 80, z: 78 }, radius: 18, count: 8 },
];


export const ZONE1_OBJECTS: GroundObjectDef[] = [
  {
    itemId: 'supply_crate',
    name: 'Çalınan Erzak Sandığı',
    positions: [
      { x: 58, z: -58 }, { x: 73, z: -70 }, { x: 86, z: -82 }, { x: 95, z: -97 },
      { x: 64, z: -76 }, { x: 81, z: -94 },
    ],
  },
  {
    itemId: 'gravecaller_sigil',
    name: 'Mezarçağıran Mührü',
    positions: [{ x: 84, z: 88 }, { x: 76, z: 92 }],
  },
  {
    itemId: 'weathered_ledger_page',
    name: 'Yıpranmış Defter Sayfası',
    positions: [{ x: 78, z: 84 }, { x: 83, z: 88 }, { x: 86, z: 92 }],
  },
  {
    itemId: 'morthen_grimoire',
    name: 'Morthen\'in Büyü Kitabı',
    positions: [{ x: 78, z: 86 }],
  },
];

// Roads from town toward each hub — used for terrain painting and the map.
// Roads from town toward each hub — used for terrain painting and the map.
export const ZONE1_ROADS: { x: number; z: number }[][] = [
  [{ x: 0, z: 8 }, { x: -8, z: 30 }, { x: -15, z: 55 }, { x: -2, z: 78 }],          // north to wolves
  [{ x: 8, z: 2 }, { x: 30, z: 8 }, { x: 55, z: 12 }],                              // east to boars
  [{ x: 6, z: -6 }, { x: 30, z: -30 }, { x: 50, z: -50 }, { x: 65, z: -65 }],       // southeast to bandits
  [{ x: -8, z: 6 }, { x: -35, z: 25 }, { x: -58, z: 48 }, { x: -66, z: 58 }],       // northwest to lake
  [{ x: -6, z: -6 }, { x: -30, z: -28 }, { x: -55, z: -45 }, { x: -70, z: -55 }],   // southwest to mine
  [{ x: 6, z: 8 }, { x: 35, z: 35 }, { x: 60, z: 60 }, { x: 78, z: 74 }],           // northeast to ruins
];

// ---------------------------------------------------------------------------
// Static props (rendering + collision share this placement data)
// ---------------------------------------------------------------------------

export const ZONE1_PROPS: ZonePropsDef = {
  buildings: [
    { kind: 'house', x: 10, z: 12, w: 7, d: 6, rot: -0.4 },
    { kind: 'house', x: -10, z: 10, w: 6, d: 5, rot: 0.5 },
    { kind: 'inn', x: 12, z: -6, w: 6, d: 7, rot: 2.4 },
    { kind: 'chapel', x: -16, z: -8, w: 5, d: 7, rot: 0.9 },
  ],
  wells: [{ x: 0, z: 2, r: 1.5 }],
  stalls: [
    { x: -8.5, z: 3, rot: Math.PI / 2, r: 1.7 },
    { x: 9.5, z: 17.5, rot: -2.7, r: 1.7 }, // Demirci Mehmet's smithy stall
  ],
  mines: [{ x: -88, z: -68, rot: 0.8 }],
  docks: [{ x: -64, z: 60, rot: -2.2, hutLocal: { x: 2.8, z: 2.4, hw: 1.7, hd: 1.5 } }],
  tents: [
    { x: 62, z: -61, rot: 0.4, scale: 1 },
    { x: 69, z: -69, rot: 2.1, scale: 1 },
    { x: 88, z: -86, rot: 1.2, scale: 1.3 },
    { x: 95, z: -94, rot: -0.6, scale: 1 },
  ],
  crates: [[60, -63], [66, -67], [87, -88], [93, -90], [70, -72]],
  campfires: [[3, -4], [65, -65], [90, -90], [-80, -60], [-61, 56]],
  mudHuts: [[-73, 59], [-78, 54], [-69, 55]],
  ruinRings: [{ x: 80, z: 78, ringR: 7, columns: 7 }],
  fences: [
    { x1: 16, z1: 16, x2: 22, z2: 4 },
    { x1: -16, z1: 14, x2: -20, z2: 2 },
  ],
  graveyards: [{ x: -14, z: -14 }],
};
