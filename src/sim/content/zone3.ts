// Zone 3 — Thornpeak Heights (levels 13-20). The Gravecallers serve Korzul
// the Gravewyrm, an ancient dragon sealed beneath the peaks. Highwatch holds
// the wall against ogres, waking elementals, and the open chanting of the
// Wyrmcult at the Gravewyrm Sanctum gates.

import type {
  CampDef, GroundObjectDef, ItemDef, MobTemplate, NpcDef, QuestDef, ZoneDef, ZonePropsDef,
} from '../types';

export const ZONE3_ZONE: ZoneDef = {
  id: 'thornpeak_heights',
  name: 'Dikenzirve Tepeleri',
  zMin: 540,
  zMax: 900,
  levelRange: [13, 20],
  biome: 'peaks',
  hub: { x: 0, z: 660, radius: 20, name: 'Gözcütepe' },
  graveyard: { x: 15, z: 645 },
  lakes: [{ x: -70, z: 760, radius: 18 }],
  pois: [
    { x: 0, z: 660, label: 'Gözcütepe' },
    { x: -50, z: 590, label: 'Avcı Sırtı' },
    { x: 85, z: 615, label: 'Derinkaya Yuvaları' },
    { x: -90, z: 700, label: 'Ogre Etekleri' },
    { x: -130, z: 740, label: "Drogmar'ın Savaş Kampı" },
    { x: 110, z: 760, label: 'Fırtınakayası' },
    { x: 55, z: 820, label: 'Ejder Tarikatı Çadırları' },
    { x: -40, z: 830, label: 'Hortlak Tarlaları' },
    { x: 0, z: 880, label: 'Mezarejderi Tapınağı' },
  ],
  welcome: "Yüzbaşı Ayşegül Gözcütepe'deki suru tutuyor — kıl payı.",
};

// Mountain road from Fenbridge up to Highwatch, then spokes.
export const ZONE3_ROADS: { x: number; z: number }[][] = [
  [{ x: 0, z: 320 }, { x: 10, z: 450 }, { x: 0, z: 540 }, { x: 0, z: 660 }],        // Fenbridge -> Highwatch
  [{ x: -6, z: 666 }, { x: -60, z: 700 }, { x: -110, z: 735 }],                     // -> ogre war-camp
  [{ x: 6, z: 668 }, { x: 70, z: 720 }, { x: 110, z: 760 }],                        // -> Stormcrag
  [{ x: 0, z: 676 }, { x: 0, z: 780 }, { x: 0, z: 860 }],                           // -> Sanctum Approach
];

// ---------------------------------------------------------------------------
// Mobs (overworld only — the Gravewyrm Sanctum mobs live in content/dungeons)
// ---------------------------------------------------------------------------

export const ZONE3_MOBS: Record<string, MobTemplate> = {
  ridge_stalker: {
    id: 'ridge_stalker', name: 'Sırt Avcısı', minLevel: 13, maxLevel: 14, family: 'beast',
    hpBase: 58, hpPerLevel: 21, dmgBase: 10, dmgPerLevel: 2.5, attackSpeed: 1.9,
    armorPerLevel: 14, moveSpeed: 8, aggroRadius: 11,
    loot: [
      { copper: 60, chance: 1 },
      { itemId: 'ridge_stalker_pelt', chance: 0.6, questId: 'q_stalker_pelts' },
    ],
    scale: 0.95, color: 0x8c8270,
  },
  deeprock_kobold: {
    id: 'deeprock_kobold', name: 'Derinkaya Tünelcisi', minLevel: 14, maxLevel: 15, family: 'kobold',
    hpBase: 60, hpPerLevel: 22, dmgBase: 10, dmgPerLevel: 2.5, attackSpeed: 2.1,
    armorPerLevel: 18, moveSpeed: 7, aggroRadius: 10,
    loot: [
      { copper: 65, chance: 1 },
      { itemId: 'glowing_wax', chance: 0.5, questId: 'q_glowing_wax' },
      { itemId: 'tallow_candle', chance: 0.4 },
    ],
    scale: 0.85, color: 0x9c7a3c,
  },
  thornpeak_ogre: {
    id: 'thornpeak_ogre', name: 'Dikenzirve Ogresi', minLevel: 15, maxLevel: 16, family: 'ogre',
    hpBase: 66, hpPerLevel: 23, dmgBase: 11, dmgPerLevel: 2.6, attackSpeed: 2.6,
    armorPerLevel: 22, moveSpeed: 7, aggroRadius: 11,
    loot: [
      { copper: 75, chance: 1 },
      { itemId: 'ogre_toe_ring', chance: 0.35 },
    ],
    scale: 1.3, color: 0x9e7b53,
  },
  ogre_crusher: {
    id: 'ogre_crusher', name: 'Dikenzirve Ezicisi', minLevel: 16, maxLevel: 17, family: 'ogre', elite: true,
    hpBase: 64, hpPerLevel: 23, dmgBase: 11, dmgPerLevel: 2.6, attackSpeed: 2.6,
    armorPerLevel: 24, moveSpeed: 7, aggroRadius: 12,
    loot: [
      { copper: 200, chance: 1 },
      { itemId: 'ogre_toe_ring', chance: 0.5 },
    ],
    scale: 1.35, color: 0x7e5c3e,
  },
  warlord_drogmar: {
    id: 'warlord_drogmar', name: 'Savaş Lordu Drogmar', minLevel: 17, maxLevel: 17, family: 'ogre',
    elite: true, boss: true,
    hpBase: 200, hpPerLevel: 30, dmgBase: 12, dmgPerLevel: 2.7, attackSpeed: 2.6,
    armorPerLevel: 28, moveSpeed: 7, aggroRadius: 14,
    aoePulse: { min: 22, max: 30, radius: 10, every: 12, name: 'Yer Sarsıntısı' },
    loot: [{ copper: 2000, chance: 1 }],
    scale: 1.5, color: 0x8c3b2e,
  },
  stormcrag_elemental: {
    id: 'stormcrag_elemental', name: 'Fırtınakayası Elementali', minLevel: 17, maxLevel: 18, family: 'elemental',
    hpBase: 62, hpPerLevel: 22, dmgBase: 12, dmgPerLevel: 2.7, attackSpeed: 2.2,
    armorPerLevel: 20, moveSpeed: 6.5, aggroRadius: 11,
    loot: [
      { copper: 80, chance: 1 },
      { itemId: 'storm_core', chance: 0.55, questId: 'q_shard_cores' },
      { itemId: 'blessed_embers', chance: 0.55, questId: 'q_breaking_the_seal' },
      { itemId: 'inert_storm_shard', chance: 0.4 },
    ],
    scale: 1.1, color: 0x5dade2,
  },
  shardlord_kazzix: {
    id: 'shardlord_kazzix', name: 'Kıymık Lordu Kazzix', minLevel: 18, maxLevel: 18, family: 'elemental', rare: true,
    hpBase: 160, hpPerLevel: 28, dmgBase: 13, dmgPerLevel: 2.8, attackSpeed: 2.2,
    armorPerLevel: 24, moveSpeed: 7, aggroRadius: 12,
    loot: [
      { copper: 500, chance: 1 },
      { itemId: 'kazzix_heartshard', chance: 1, questId: 'q_kazzix' },
      { itemId: 'inert_storm_shard', chance: 1 },
    ],
    scale: 1.3, color: 0xaed6f1,
  },
  wyrmcult_zealot: {
    id: 'wyrmcult_zealot', name: 'Ejder Tarikatı Bağnazı', minLevel: 17, maxLevel: 19, family: 'humanoid',
    hpBase: 62, hpPerLevel: 22, dmgBase: 12, dmgPerLevel: 2.7, attackSpeed: 2.0,
    armorPerLevel: 20, moveSpeed: 7, aggroRadius: 11,
    loot: [
      { copper: 90, chance: 1 },
      { itemId: 'wyrmcult_orders', chance: 0.5, questId: 'q_cult_orders' },
      { itemId: 'frayed_prayer_beads', chance: 0.35 },
    ],
    scale: 1.0, color: 0x76448a,
  },
  wyrmcult_necromancer: {
    id: 'wyrmcult_necromancer', name: 'Ejder Tarikatı Nekromantı', minLevel: 18, maxLevel: 19, family: 'humanoid',
    hpBase: 58, hpPerLevel: 21, dmgBase: 13, dmgPerLevel: 2.8, attackSpeed: 2.0,
    armorPerLevel: 16, moveSpeed: 7, aggroRadius: 11,
    loot: [
      { copper: 100, chance: 1 },
      { itemId: 'ritual_phylactery', chance: 0.55, questId: 'q_necromancers' },
      { itemId: 'linen_scrap', chance: 0.3 },
    ],
    scale: 1.0, color: 0x533566,
  },
  boneclad_revenant: {
    id: 'boneclad_revenant', name: 'Kemik Zırhlı Hortlak', minLevel: 18, maxLevel: 19, family: 'undead',
    hpBase: 66, hpPerLevel: 23, dmgBase: 12, dmgPerLevel: 2.7, attackSpeed: 2.3,
    armorPerLevel: 18, moveSpeed: 6.5, aggroRadius: 11,
    loot: [
      { copper: 100, chance: 1 },
      { itemId: 'bone_fragments', chance: 0.6 },
    ],
    scale: 1.05, color: 0xcacfd2,
  },
};

// ---------------------------------------------------------------------------
// NPCs (Highwatch hub)
// ---------------------------------------------------------------------------

export const ZONE3_NPCS: Record<string, NpcDef> = {
  captain_thessaly: {
    id: 'captain_thessaly', name: 'Yüzbaşı Ayşegül', title: 'Gözcütepe Yüzbaşısı',
    pos: { x: 4, z: 664 }, facing: -2.0, color: 0x85929e,
    questIds: ['q_highwatch_summons', 'q_stalkers', 'q_ogre_bounty', 'q_crushers', 'q_drogmar', 'q_revenants', 'q_revenant_vanguard'],
    greeting: 'İki yüz yıldır bu sur ayakta $C. Benim nöbetimde yıkılmayacak — ama inliyor.',
  },
  brother_aldric_highwatch: {
    id: 'brother_aldric_highwatch', name: 'Hoca Ali', title: 'Vadi Hocası',
    pos: { x: -10, z: 656 }, facing: 0.8, color: 0xf7f9f9,
    questIds: [
      'q_zealots', 'q_cult_orders', 'q_necromancers', 'q_wyrm_sigils', 'q_breaking_the_seal',
      'q_voice_below', 'q_sanctum_gate', 'q_velkhar', 'q_gravewyrm',
    ],
    greeting: 'Vadideki bir şapel avlusundan dünyanın çatısına... izini sürdüğümüz yol burada bitiyor. Dağın dinlediğini hissedebiliyorum.',
  },
  scout_maren_highwatch: {
    id: 'scout_maren_highwatch', name: 'İzci Zeynep', title: 'Şerifin İzcisi',
    pos: { x: 7, z: 670 }, facing: -2.4, color: 0x6e8b3d,
    questIds: ['q_ogre_edges', 'q_ogre_totems', 'q_korgath'],
    greeting: 'Bataklıkta yanında tarikatçı izi sürdüm ve iz buraya çıktı. Zirveler daha beter $C. Tetikte ol.',
  },
  quartermaster_bree: {
    id: 'quartermaster_bree', name: 'Levazımcı Emine', title: 'Gözcütepe Levazımcısı',
    pos: { x: -5, z: 668 }, facing: 1.6, color: 0xca8a2a,
    questIds: ['q_stalker_pelts', 'q_glowing_wax'],
    vendorItems: [
      'trail_hardtack', 'meltwater_flask', 'roast_mountain_goat', 'glacier_melt',
      'highwatch_breastplate', 'peakwool_robe', 'stalkerhide_jerkin', 'cragwalker_boots', 'windguard_leggings',
    ],
    greeting: 'Yün, peksimet ve çelik burunlu çizme — Gözcütepe bu üçüyle döner ve bende hepsi eksik.',
  },
  armorer_hode: {
    id: 'armorer_hode', name: 'Zırhçı Mehmet', title: 'Usta Zırhçı',
    pos: { x: -2, z: 672 }, facing: 2.8, color: 0x717d7e,
    questIds: [],
    vendorItems: ['highwatch_warblade', 'craghorn_staff', 'icevein_dirk'],
    greeting: 'Ocak sıcak, bileği taşı dönüyor. Kesiyorsa satarım.',
  },
  loremaster_caddis: {
    id: 'loremaster_caddis', name: 'Bilgi Üstadı Osman', title: 'Bilgi Üstadı',
    pos: { x: 12, z: 655 }, facing: -1.2, color: 0x3b6ea5,
    questIds: ['q_kobold_tunnels', 'q_elementals', 'q_shard_cores', 'q_kazzix'],
    greeting: 'Gevşek kayalara dikkat et $C. Dağ son zamanlarda... huzursuz. Nedenini öğrenmeye niyetliyim.',
  },
};

// ---------------------------------------------------------------------------
// Quests
// ---------------------------------------------------------------------------

export const ZONE3_QUESTS: Record<string, QuestDef> = {
  q_highwatch_summons: {
    id: 'q_highwatch_summons', name: 'Zirvelerdeki Nöbet',
    giverNpcId: 'brother_aldric_fen', turnInNpcId: 'captain_thessaly',
    text: "Vael'in son sözleri aklımdan çıkmıyor $N: Ejder, zirvelerin altında kıpırdanıyor. Kuzeydeki dağ yolunun başında, Gözcütepe surunu Yüzbaşı Ayşegül komuta ediyor. Kapısında asılı bir çağrı emri var — onu al ve Hoca Ali'nin dağa senin ardından tırmandığını söyle.",
    completionText: "Ali'nin sözü uzaklara ulaşır. Vadi'nin hocası dağa bizzat tırmanıyorsa, durum korktuğum kadar kötü demektir. Gözcütepe'ye hoş geldin $N.",
    objectives: [{ type: 'collect', itemId: 'highwatch_summons', count: 1, label: 'Gözcütepe Çağrısı' }],
    xpReward: 500, copperReward: 500, itemRewards: {},
    minLevel: 12,
  },
  q_stalkers: {
    id: 'q_stalkers', name: 'Sırttaki Avcılar',
    giverNpcId: 'captain_thessaly', turnInNpcId: 'captain_thessaly',
    text: 'Sırt kedileri yüksek karlardan aç indi ve bunun bedelini devriyelerim kanla ödüyor. Yere serdiğin her avcı, surda tutabildiğim bir asker demek. Sayılarını azalt $N — başlangıç olarak on iki.',
    completionText: 'Sırtta on iki gölge eksildi. Devriyeler bu gece daha rahat nefes alacak.',
    objectives: [{ type: 'kill', targetMobId: 'ridge_stalker', count: 12, label: 'Sırt Avcısı öldürüldü' }],
    xpReward: 2200, copperReward: 1000, itemRewards: {},
  },
  q_stalker_pelts: {
    id: 'q_stalker_pelts', name: "Gözcütepe'ye Kış Geliyor",
    giverNpcId: 'quartermaster_bree', turnInNpcId: 'quartermaster_bree',
    text: 'Bu dağda kış kapıyı çalmaz $N — kapıyı tekmeleyip girer. Sekiz sırt avcısı postu, suru ilk karlardan geçirecek kadar pelerini astarlar. Hayvanlar güney yolunun iki yanındaki sırtlarda dolanıyor.',
    completionText: 'Kolum kadar kalın bunlar. Nöbetçiler bu yıl donmayacak — zahmetine karşılık şu postalları al.',
    objectives: [{ type: 'collect', itemId: 'ridge_stalker_pelt', count: 8, label: 'Sırt Avcısı Postu' }],
    xpReward: 2300, copperReward: 1000,
    itemRewards: { warrior: 'ridgestalker_treads', mage: 'ridgestalker_treads', rogue: 'ridgestalker_treads' },
  },
  q_kobold_tunnels: {
    id: 'q_kobold_tunnels', name: 'Derinkaya Belası',
    giverNpcId: 'loremaster_caddis', turnInNpcId: 'loremaster_caddis',
    text: 'Derinkaya Yuvaları\'ndaki koboldlar, hiçbir mum sıçanının inmemesi gereken derinliğe kazıyor — dümdüz aşağı, sanki bir şey onları çağırıyormuş gibi. Tünelleri surumuzun altından geçiyor $N. Meseleyi kökünden çöz: on iki Derinkaya Tünelcisi öldür.',
    completionText: 'Her kuyu dümdüz aşağı iniyor — koboldlar kendi başlarına böyle kazmaz. Kitaplarıma bakmalıyım.',
    objectives: [{ type: 'kill', targetMobId: 'deeprock_kobold', count: 12, label: 'Derinkaya Tünelcisi öldürüldü' }],
    xpReward: 2500, copperReward: 1200, itemRewards: {},
    minLevel: 14,
  },
  q_glowing_wax: {
    id: 'q_glowing_wax', name: 'Tuhaf Balmumu',
    giverNpcId: 'quartermaster_bree', turnInNpcId: 'quartermaster_bree',
    text: 'Osman bana o tünelcilerin birinden alınan bir mum gösterdi — balmumu ışıldıyor $N ve kalp atışı gibi sıcak. O incelemek için daha fazlasını istiyor, ben de bunu talep listemden silmek istiyorum. Altı parça ışıldayan balmumu getir.',
    completionText: 'Hâlâ sıcak. Bilgi Üstadı bu ışıltının bildiği hiçbir aleve benzemediğini söylüyor. Bense buna dağ belası diyorum, hem de kibarca.',
    objectives: [{ type: 'collect', itemId: 'glowing_wax', count: 6, label: 'Işıldayan Balmumu' }],
    xpReward: 2500, copperReward: 1200, itemRewards: {},
    requiresQuest: 'q_kobold_tunnels',
  },
  q_ogre_edges: {
    id: 'q_ogre_edges', name: 'Eteklerdeki Ogreler',
    giverNpcId: 'scout_maren_highwatch', turnInNpcId: 'scout_maren_highwatch',
    text: 'Dikenzirve klanları bu kadar doğuya hiç inmezdi — ama işte buradalar, doğu eteklerinde savaş boyalarıyla kamp kurmuşlar. Birisi onlara para ödüyor $N ve ogreler vaatle çalışmaz. Ben kesenin kimde olduğunu bulana kadar sen on iki tanesini yere ser.',
    completionText: 'On ikisi yerde ama hâlâ geri çekilmiyorlar. Onları satın alan her kimse, altından daha ağır bir şeyle ödemiş.',
    objectives: [{ type: 'kill', targetMobId: 'thornpeak_ogre', count: 12, label: 'Dikenzirve Ogresi öldürüldü' }],
    xpReward: 2900, copperReward: 1400, itemRewards: {},
    minLevel: 15,
  },
  q_ogre_totems: {
    id: 'q_ogre_totems', name: 'Savaş Totemleri',
    giverNpcId: 'scout_maren_highwatch', turnInNpcId: 'scout_maren_highwatch',
    text: 'Ogreler savaş kampının çevresine totemler dikti — deri ve kafatasından kaba şeyler ama bir baskını değil, bir seferberliği işaret ediyorlar. Altısını sök ve bana getir. Çevredeki ezicilere dikkat et $N.',
    completionText: 'Kafatası, deri... ve şuraya bak — ejder pulu bağlar. Bu totemler hediyeymiş $N. Tarikat klanları silahlandırıyor.',
    objectives: [{ type: 'collect', itemId: 'ogre_war_totem', count: 6, label: 'Ogre Savaş Totemi' }],
    xpReward: 2800, copperReward: 1400, itemRewards: {},
    requiresQuest: 'q_ogre_edges',
  },
  q_ogre_bounty: {
    id: 'q_ogre_bounty', name: 'Yüzbaşının Ödülü',
    giverNpcId: 'captain_thessaly', turnInNpcId: 'captain_thessaly',
    text: "Zeynep'in totemleri bilmem gereken her şeyi söylüyor: klanlar satın alınmış ve ilk görevleri benim surum. Toplanmalarını beklemeyeceğim. On dört Dikenzirve Ogresi daha $N — her biri için ödül ödeyeceğim.",
    completionText: 'Ödül eksiksiz ödendi. Etekler daha sessiz — şimdi sıra parayı verenlerde.',
    objectives: [{ type: 'kill', targetMobId: 'thornpeak_ogre', count: 14, label: 'Dikenzirve Ogresi öldürüldü' }],
    xpReward: 3000, copperReward: 1500, itemRewards: {},
    requiresQuest: 'q_ogre_totems',
  },
  q_crushers: {
    id: 'q_crushers', name: 'Savaş Kampını Kır',
    giverNpcId: 'captain_thessaly', turnInNpcId: 'captain_thessaly',
    text: "Drogmar'ın savaş kampı doğu kayalıklarına çökmüş durumda ve ezicileri kampın belkemiği — her biri benim üç askerime bedel. Yanına yoldaş al; bu tek kılıçlık iş değil. On eziciyi kır, savaş lordunun seferberliği de onlarla birlikte kırılsın.",
    completionText: 'On ezici yerde. Savaş kampı artık belkemiği olmayan bir gövde — şimdi kafayı alma vakti.',
    objectives: [{ type: 'kill', targetMobId: 'ogre_crusher', count: 10, label: 'Dikenzirve Ezicisi öldürüldü' }],
    xpReward: 3600, copperReward: 2000, itemRewards: {},
    minLevel: 16, suggestedPlayers: 3,
  },
  q_drogmar: {
    id: 'q_drogmar', name: 'Savaş Lordu Drogmar',
    giverNpcId: 'captain_thessaly', turnInNpcId: 'captain_thessaly',
    text: "Savaş Lordu Drogmar, Ejder Tarikatı'nın parasını aldı ve klanları dağın uyanışına yemin ettirdi. Suruma savuracakları çekiç o — ve yere vurduğunda $N, sakın yanında durma. Yoldaşlarını al, savaş kampına gir ve Gözcütepe için işini bitir.",
    completionText: 'Drogmar, kendi kampında ölü. Klanlar yüksek geçitlere dağılacak — suruma bir kış kazandırdın $N.',
    objectives: [{ type: 'kill', targetMobId: 'warlord_drogmar', count: 1, label: 'Savaş Lordu Drogmar öldürüldü' }],
    xpReward: 4000, copperReward: 2500,
    itemRewards: { warrior: 'drogmars_skullcleaver', mage: 'ogre_bonecharm_staff', rogue: 'gutripper_shiv' },
    requiresQuest: 'q_crushers', suggestedPlayers: 3,
  },
  q_elementals: {
    id: 'q_elementals', name: 'Dağ Uyanıyor',
    giverNpcId: 'loremaster_caddis', turnInNpcId: 'loremaster_caddis',
    text: 'Fırtınakayası bin yıldır sessiz dururdu; şimdi taşları kalkıp yürüyor. Elementaller durduk yere uyanmaz $N — bu dağın altında bir şey uykusunda dönüyor. On ikisini yere ser ki kalanları inceleyebileyim.',
    completionText: 'Parçalar, çalınmış çanlar gibi uğulduyor. Dağ öfkeli değil $N... rahatsız ediliyor.',
    objectives: [{ type: 'kill', targetMobId: 'stormcrag_elemental', count: 12, label: 'Fırtınakayası Elementali öldürüldü' }],
    xpReward: 3600, copperReward: 1800, itemRewards: {},
    minLevel: 16,
  },
  q_shard_cores: {
    id: 'q_shard_cores', name: 'Fırtınanın Çekirdekleri',
    giverNpcId: 'loremaster_caddis', turnInNpcId: 'loremaster_caddis',
    text: "Her elementalin kalbinde bir fırtına çekirdeği yatar — taşa bağlanmış bir yıldırım düğümü. Altısı yan yana dizildiğinde, rahatsızlığın merkezini gösterecektir. Sanırım cevabı zaten biliyorum $N ve yanılıyor olmayı yürekten diliyorum.",
    completionText: 'Her çekirdek aynı yöne meylediyor, mıknatısa kapılan demir tozu gibi. Güneyi gösteriyorlar $N. Tapınağı.',
    objectives: [{ type: 'collect', itemId: 'storm_core', count: 6, label: 'Fırtına Çekirdeği' }],
    xpReward: 3700, copperReward: 1800, itemRewards: {},
    requiresQuest: 'q_elementals',
  },
  q_kazzix: {
    id: 'q_kazzix', name: 'Kıymık Lordu',
    giverNpcId: 'loremaster_caddis', turnInNpcId: 'loremaster_caddis',
    text: 'Elementallerin arasında biri diğerlerinden parlak yanıyor: Kıymık Lordu Kazzix, omuz verilmiş bir fırtına. Kalp kıymığı, aldığım bütün ölçümleri sabitleyecektir — tabii onu o şeyden söküp alabilirsen. Fırtınakayası\'nın batısındaki uzak kayalıklarda, ikinci kampın ötesinde dolaşıyor.',
    completionText: 'Kalp kıymığı! Hâlâ çıtırdıyor — muhteşem. Şu tozlukları al; ölçüsünü tahmin ve duayla tutturdum.',
    objectives: [{ type: 'collect', itemId: 'kazzix_heartshard', count: 1, label: "Kazzix'in Kalp Kıymığı" }],
    xpReward: 3800, copperReward: 2000,
    itemRewards: { warrior: 'stormshard_leggings', mage: 'stormshard_leggings', rogue: 'stormshard_leggings' },
    minLevel: 17,
  },
  q_zealots: {
    id: 'q_zealots', name: 'Rüzgârdaki İlahiler',
    giverNpcId: 'brother_aldric_highwatch', turnInNpcId: 'brother_aldric_highwatch',
    text: 'Rüzgâr güney zirvelerinden estiğinde $N, ilahi sesleri taşıyor. Ejder Tarikatı artık saklanmıyor — Tapınağın altına çadır kurdular ve altında uyuyana şarkı söylüyorlar. On iki bağnazı sustur. Susturulan her ses, dağa bir gecelik uyku daha kazandırır.',
    completionText: 'Rüzgâr daha sessiz. Ama beni asıl rahatsız eden ilahiler değil $N — bir şeyin karşılık veriyor olabileceği.',
    objectives: [{ type: 'kill', targetMobId: 'wyrmcult_zealot', count: 12, label: 'Ejder Tarikatı Bağnazı öldürüldü' }],
    xpReward: 4000, copperReward: 2000, itemRewards: {},
    minLevel: 17,
  },
  q_cult_orders: {
    id: 'q_cult_orders', name: 'Aşağıdan Gelen Emirler',
    giverNpcId: 'brother_aldric_highwatch', turnInNpcId: 'brother_aldric_highwatch',
    text: 'Bağnazlar artık amaçla hareket ediyor — nöbetler kurulmuş, erzak sayılmış; kuşatma öncesi askerler gibi. Örgütlenen tarikatçı, emir alan tarikatçıdır $N. Sekiz tane daha öldür ve bana yazılı emirlerinden dört takım getir. Onlara komuta eden eli bilmek istiyorum.',
    completionText: "Bu el yazısı... Benzerini en son Kurudere'de, Morthen'in büyü kitabında görmüştüm. Uğruna savaştığımız her mezarı aynı el yönetmiş $N.",
    objectives: [
      { type: 'kill', targetMobId: 'wyrmcult_zealot', count: 8, label: 'Ejder Tarikatı Bağnazı öldürüldü' },
      { type: 'collect', itemId: 'wyrmcult_orders', count: 4, label: 'Ejder Tarikatı Emirleri' },
    ],
    xpReward: 3800, copperReward: 1800, itemRewards: {},
    requiresQuest: 'q_zealots',
  },
  q_necromancers: {
    id: 'q_necromancers', name: 'Mahfaza Halkası',
    giverNpcId: 'brother_aldric_highwatch', turnInNpcId: 'brother_aldric_highwatch',
    text: 'Emirler bir "mahfaza halkasından" söz ediyor — ruh kapları $N, Tapınağı beslemek için çevresine dizilmiş. Tarikatın nekromantları onları kutsal emanet gibi taşıyor. Sekiz nekromant öldür ve bana üç mahfazayı kırılmamış hâlde getir. İçlerinde hangi ruhların olduğunu bilmeliyim.',
    completionText: 'Işık bizi affetsin. Bunlar Vadi\'nin ve bataklığın ölülerini tutuyor — Mezarçağıranlar\'ın dirilttiği her ceset, hasat edilmiş. Hiçbir zaman ordu kurmuyorlardı $N. Haraç topluyorlardı.',
    objectives: [
      { type: 'kill', targetMobId: 'wyrmcult_necromancer', count: 8, label: 'Ejder Tarikatı Nekromantı öldürüldü' },
      { type: 'collect', itemId: 'ritual_phylactery', count: 3, label: 'Ayin Mahfazası' },
    ],
    xpReward: 4200, copperReward: 2200, itemRewards: {},
    requiresQuest: 'q_cult_orders', minLevel: 18,
  },
  q_revenants: {
    id: 'q_revenants', name: 'Hortlak Tarlaları',
    giverNpcId: 'captain_thessaly', turnInNpcId: 'captain_thessaly',
    text: 'Tapınak yolunun doğusunda eski bir savaş alanı yatar — bu dağı almaya çalışan son ordunun öncüleri, iki yüz yıldır gömülü. Tarikat onları çağırdı; paslı zırhlar içinde kemikler. On iki hortlağı toprağa geri gönder $N.',
    completionText: 'Bir zamanlar onlar da askerdi, benimkiler gibi. Onları çağıran her neyse ölülere saygısı yok — ya da öğrenmek istemediğim bir kullanım alanı var.',
    objectives: [{ type: 'kill', targetMobId: 'boneclad_revenant', count: 12, label: 'Kemik Zırhlı Hortlak öldürüldü' }],
    xpReward: 4300, copperReward: 2200, itemRewards: {},
    minLevel: 18,
  },
  q_revenant_vanguard: {
    id: 'q_revenant_vanguard', name: 'Öncü Birliğin Kemikleri',
    giverNpcId: 'captain_thessaly', turnInNpcId: 'captain_thessaly',
    text: 'Hortlaklar saf tutuyor $N — gerçek saflar, kalkan hatları ve kollar, davulcusuz talim. Tapınak kapısı için seferber ediliyorlar. O yürüyüş başlamadan on dört tane daha kır; Gözcütepe sana en iyi çeliğini borçlansın.',
    completionText: 'Tarlalar yeniden sessiz. Al şunu — surun savunucuları için yapılmıştı ve kimse senden daha çok hak etmedi.',
    objectives: [{ type: 'kill', targetMobId: 'boneclad_revenant', count: 14, label: 'Kemik Zırhlı Hortlak öldürüldü' }],
    xpReward: 4500, copperReward: 2400,
    itemRewards: { warrior: 'boneplate_vest', mage: 'revenant_silk_robe', rogue: 'nightwalk_jerkin' },
    requiresQuest: 'q_revenants',
  },
  q_wyrm_sigils: {
    id: 'q_wyrm_sigils', name: 'Ejderin Mühürleri',
    giverNpcId: 'brother_aldric_highwatch', turnInNpcId: 'brother_aldric_highwatch',
    text: 'Artık her şeyi bilme vaktin geldi $N. Mezarçağıranlar, Mezarejderi Korzul\'a hizmet ediyor — bu dağın altına mühürlenmiş kadim bir ejderhaya — ve Kurudere\'den beri çaldıkları her ruh, onun uyanışına dökülen bir haraç. Tapınak yaklaşımına tarikat, mührü inceltmek için işaretler döşedi. Bana üç tane getir; işledikleri ayini okumak istiyorum.',
    completionText: 'Evet... nesiller boyu yazılmış bir uyandırma duası. Yaklaştılar $N. Korkmaya cesaret ettiğimden de yakınlar.',
    objectives: [{ type: 'collect', itemId: 'gravewyrm_sigil', count: 3, label: 'Mezarejderi Mührü' }],
    xpReward: 3600, copperReward: 2000, itemRewards: {},
    requiresQuest: 'q_necromancers', minLevel: 18,
  },
  q_breaking_the_seal: {
    id: 'q_breaking_the_seal', name: 'Mührü Kırmak',
    giverNpcId: 'brother_aldric_highwatch', turnInNpcId: 'brother_aldric_highwatch',
    text: 'Tapınağın mührü dağ ateşiyle dövüldü ve onu ardına kadar yırtmadan geçmemizi yalnızca dağ ateşi sağlar. Fırtınakayası elementalleri o ilk dövümün korlarını çekirdeklerinde taşır. Bana beş Kutsanmış Kor getir $N — çünkü o kapıyı önce tarikat açarsa dikkatli davranmayacaklar ve Ejder nazikçe uyanmayacak.',
    completionText: 'Mavi ve temiz yanıyorlar — dağ eski yeminini hatırlıyor. Bunlarla kapıyı yalnızca bizim için çözebilirim.',
    objectives: [{ type: 'collect', itemId: 'blessed_embers', count: 5, label: 'Kutsanmış Korlar' }],
    xpReward: 4200, copperReward: 2200, itemRewards: {},
    requiresQuest: 'q_wyrm_sigils',
  },
  q_voice_below: {
    id: 'q_voice_below', name: 'Aşağıdaki Ses',
    giverNpcId: 'brother_aldric_highwatch', turnInNpcId: 'brother_aldric_highwatch',
    text: 'Dün gece bütün tarikat kampı aynı anda diz çöktü $N — her bağnaz, her nekromant, hepsi Tapınağa dönük. Korzul artık uykularında onlarla konuşuyor; aynı sesi bataklıkta Vael, ondan önce de Morthen duymuştu. Cemaati kes — on bağnaz, altı nekromant — o ses kapıyı kendi başına açacak kadar el bulmadan.',
    completionText: 'Diz çökmeler durdu. Sesi susturamadık $N — yalnızca korosunu inceltebildik. Bu yetmek zorunda.',
    objectives: [
      { type: 'kill', targetMobId: 'wyrmcult_zealot', count: 10, label: 'Ejder Tarikatı Bağnazı öldürüldü' },
      { type: 'kill', targetMobId: 'wyrmcult_necromancer', count: 6, label: 'Ejder Tarikatı Nekromantı öldürüldü' },
    ],
    xpReward: 4400, copperReward: 2400,
    itemRewards: { warrior: 'zealotsbane_blade', mage: 'emberwood_staff', rogue: 'cultist_flayer' },
    requiresQuest: 'q_breaking_the_seal',
  },
  q_sanctum_gate: {
    id: 'q_sanctum_gate', name: 'Tapınak Kapısı',
    giverNpcId: 'brother_aldric_highwatch', turnInNpcId: 'brother_aldric_highwatch',
    text: 'Bu son eşik $N. Mezarejderi Tapınağı\'nın kapısı bir kilit taşıyla kilitlenmişti; tarikat onun kendilerine karşı kullanılmasındansa parçalara ayrılmasını seçti. Parçalar kapı meydanına saçılmış, kemik zırhlı ölülerin gözleri önünde duruyor. Bana üç tane getir, yolu Işık\'ın istediği gibi açayım — sessizce.',
    completionText: 'Parçalar yerine oturuyor... ve kapı anahtarını tanıyor. Aşağıya inen yol açık $N. Bulabildiğin en güçlü yoldaşları topla — bundan sonrasıyla kimse tek başına yüzleşmemeli.',
    objectives: [{ type: 'collect', itemId: 'sanctum_key_shard', count: 3, label: 'Tapınak Anahtar Parçası' }],
    xpReward: 4000, copperReward: 2000, itemRewards: {},
    requiresQuest: 'q_voice_below',
  },
  q_korgath: {
    id: 'q_korgath', name: 'Zincirli Muhafız',
    giverNpcId: 'scout_maren_highwatch', turnInNpcId: 'scout_maren_highwatch',
    text: "Tapınağın ağzında yaptığım son keşifte zincirler buldum $N — gemi direği kalınlığında zincirler ve içlerinde gerilen ogre biçimli bir şey. Tarikat eşiğe bir şampiyon bağlamış: Korgath, ikimizin ömründen daha uzun süredir öfkeyle beslenen. Dört yoldaş al ve onu yere ser — zincirler çözüldüğünde de sakın seni köşeye sıkıştırmasına izin verme.",
    completionText: 'Korgath sonunda kırıldı. Zincirleri bile bundan daha nazik bir son hak ediyordu. Sargılar senin — onları, beklediği eşiğin ötesinde giy.',
    objectives: [{ type: 'kill', targetMobId: 'korgath_the_bound', count: 1, label: 'Zincirli Korgath öldürüldü' }],
    xpReward: 4200, copperReward: 2500,
    itemRewards: { warrior: 'korgaths_chainwraps', mage: 'korgaths_chainwraps', rogue: 'korgaths_chainwraps' },
    requiresQuest: 'q_sanctum_gate', minLevel: 18, suggestedPlayers: 5,
  },
  q_velkhar: {
    id: 'q_velkhar', name: 'Baş Nekromant',
    giverNpcId: 'brother_aldric_highwatch', turnInNpcId: 'brother_aldric_highwatch',
    text: 'İzini sürdüğümüz her iplik — Morthen, Vael, mahfazalar — tek bir el tarafından eğrildi: Baş Nekromant Velkhar, Mezarçağıranlar\'ın ilki, uyandırma ayininin bekçisi. Aşağıdaki ayin mahzeninde durmuş, iki diyarın çalınmış ruhlarını Ejder\'e döküyor. İşini bitir $N, haraç da onunla bitsin.',
    completionText: 'Velkhar öldü ve ayin başsız kaldı. Ama sen de orada hissettin, değil mi? Ruhlar çoktan harcanmış — Ejder artık uyumuyor.',
    objectives: [{ type: 'kill', targetMobId: 'grand_necromancer_velkhar', count: 1, label: 'Baş Nekromant Velkhar öldürüldü' }],
    xpReward: 4500, copperReward: 3000,
    itemRewards: { warrior: 'boneguard_breastplate', mage: 'staff_of_velkhar', rogue: 'shadowmeld_tunic' },
    requiresQuest: 'q_sanctum_gate', minLevel: 18, suggestedPlayers: 5,
  },
  q_gravewyrm: {
    id: 'q_gravewyrm', name: 'Mezarejderi Korzul',
    giverNpcId: 'brother_aldric_highwatch', turnInNpcId: 'brother_aldric_highwatch',
    text: 'Durduracak ayin kalmadı $N — yalnızca Ejder\'in kendisi kaldı; kovuğunda yarı uyanmış, bozkırın ve bataklığın ölüleriyle doymuş. Yükselirse sur, bataklık, Kurudere — savunduğumuz her şey tek bir gecede düşer. Yoldaşlarını al, Ejder Kovuğu\'na in ve uzun zaman önce bir şapel avlusunda başlattığımızı bitir. Işık seni buraya kadar taşıdı; yolun kalanında onu sen taşı.',
    completionText: 'Bitti. Üç diyarın ölüleri artık dinlenebilir, dağ musallatsız uyuyor — ve bu gece buradan Kurudere\'ye kadar her çanın çaldığı isim seninki $N.',
    objectives: [{ type: 'kill', targetMobId: 'korzul_the_gravewyrm', count: 1, label: 'Mezarejderi Korzul öldürüldü' }],
    xpReward: 5300, copperReward: 25000,
    itemRewards: { warrior: 'gravewyrm_scale_hauberk', mage: 'wyrmcult_grand_robe', rogue: 'wyrmscale_jerkin' },
    requiresQuest: 'q_velkhar', minLevel: 18, suggestedPlayers: 5,
  },
};

export const ZONE3_QUEST_ORDER = [
  'q_highwatch_summons', 'q_stalkers', 'q_stalker_pelts', 'q_kobold_tunnels', 'q_glowing_wax',
  'q_ogre_edges', 'q_ogre_totems', 'q_ogre_bounty', 'q_crushers', 'q_drogmar',
  'q_elementals', 'q_shard_cores', 'q_kazzix', 'q_zealots', 'q_cult_orders',
  'q_necromancers', 'q_revenants', 'q_revenant_vanguard', 'q_wyrm_sigils', 'q_breaking_the_seal',
  'q_voice_below', 'q_sanctum_gate', 'q_korgath', 'q_velkhar', 'q_gravewyrm',
];

// ---------------------------------------------------------------------------
// World layout
// ---------------------------------------------------------------------------

export const ZONE3_CAMPS: CampDef[] = [
  // Ridge stalkers: the ridge flanking the road from the pass
  { mobId: 'ridge_stalker', center: { x: -50, z: 590 }, radius: 22, count: 7 },
  { mobId: 'ridge_stalker', center: { x: 45, z: 600 }, radius: 20, count: 6 },
  // Kobolds: Deeprock Burrows, west
  { mobId: 'deeprock_kobold', center: { x: 75, z: 625 }, radius: 18, count: 8 },
  { mobId: 'deeprock_kobold', center: { x: 105, z: 600 }, radius: 14, count: 6 },
  // Ogres: eastern foothills rising to Drogmar's war-camp
  { mobId: 'thornpeak_ogre', center: { x: -90, z: 700 }, radius: 22, count: 7 },
  { mobId: 'thornpeak_ogre', center: { x: -60, z: 730 }, radius: 18, count: 6 },
  { mobId: 'ogre_crusher', center: { x: -125, z: 740 }, radius: 18, count: 8 },
  { mobId: 'warlord_drogmar', center: { x: -132, z: 748 }, radius: 2, count: 1 },
  // Elementals: Stormcrag, far west
  { mobId: 'stormcrag_elemental', center: { x: 110, z: 760 }, radius: 20, count: 8 },
  { mobId: 'stormcrag_elemental', center: { x: 135, z: 795 }, radius: 16, count: 6 },
  { mobId: 'shardlord_kazzix', center: { x: 145, z: 815 }, radius: 8, count: 1 },
  // Wyrmcult: tents below the Sanctum
  { mobId: 'wyrmcult_zealot', center: { x: 55, z: 820 }, radius: 20, count: 8 },
  { mobId: 'wyrmcult_zealot', center: { x: 25, z: 845 }, radius: 16, count: 6 },
  { mobId: 'wyrmcult_necromancer', center: { x: 40, z: 855 }, radius: 14, count: 5 },
  // Revenants: the old battlefield and the Sanctum gate plaza
  { mobId: 'boneclad_revenant', center: { x: -40, z: 830 }, radius: 20, count: 8 },
  { mobId: 'boneclad_revenant', center: { x: -15, z: 860 }, radius: 16, count: 6 },
];

export const ZONE3_OBJECTS: GroundObjectDef[] = [
  {
    itemId: 'highwatch_summons',
    name: 'Gözcütepe Çağrısı',
    positions: [{ x: 1, z: 654 }, { x: -2, z: 657 }],
  },
  {
    itemId: 'ogre_war_totem',
    name: 'Ogre Savaş Totemi',
    positions: [
      { x: -116, z: 726 }, { x: -122, z: 733 }, { x: -129, z: 727 }, { x: -136, z: 738 },
      { x: -140, z: 747 }, { x: -133, z: 753 }, { x: -124, z: 750 },
    ],
  },
  {
    itemId: 'gravewyrm_sigil',
    name: 'Mezarejderi Mührü',
    positions: [{ x: -8, z: 852 }, { x: -3, z: 857 }, { x: 3, z: 861 }, { x: 8, z: 866 }],
  },
  {
    itemId: 'sanctum_key_shard',
    name: 'Tapınak Anahtar Parçası',
    positions: [{ x: -6, z: 872 }, { x: -2, z: 876 }, { x: 2, z: 873 }, { x: 6, z: 878 }],
  },
];

// ---------------------------------------------------------------------------
// Items
// ---------------------------------------------------------------------------

export const ZONE3_ITEMS: Record<string, ItemDef> = {
  // --- quest items ---
  highwatch_summons: { id: 'highwatch_summons', name: 'Gözcütepe Çağrısı', kind: 'quest', sellValue: 0, questId: 'q_highwatch_summons' },
  ridge_stalker_pelt: { id: 'ridge_stalker_pelt', name: 'Sırt Avcısı Postu', kind: 'quest', sellValue: 0, questId: 'q_stalker_pelts' },
  glowing_wax: { id: 'glowing_wax', name: 'Işıldayan Balmumu', kind: 'quest', sellValue: 0, questId: 'q_glowing_wax' },
  ogre_war_totem: { id: 'ogre_war_totem', name: 'Ogre Savaş Totemi', kind: 'quest', sellValue: 0, questId: 'q_ogre_totems' },
  storm_core: { id: 'storm_core', name: 'Fırtına Çekirdeği', kind: 'quest', sellValue: 0, questId: 'q_shard_cores' },
  kazzix_heartshard: { id: 'kazzix_heartshard', name: "Kazzix'in Kalp Kıymığı", kind: 'quest', sellValue: 0, questId: 'q_kazzix' },
  wyrmcult_orders: { id: 'wyrmcult_orders', name: 'Ejder Tarikatı Emirleri', kind: 'quest', sellValue: 0, questId: 'q_cult_orders' },
  ritual_phylactery: { id: 'ritual_phylactery', name: 'Ayin Mahfazası', kind: 'quest', sellValue: 0, questId: 'q_necromancers' },
  gravewyrm_sigil: { id: 'gravewyrm_sigil', name: 'Mezarejderi Mührü', kind: 'quest', sellValue: 0, questId: 'q_wyrm_sigils' },
  blessed_embers: { id: 'blessed_embers', name: 'Kutsanmış Korlar', kind: 'quest', sellValue: 0, questId: 'q_breaking_the_seal' },
  sanctum_key_shard: { id: 'sanctum_key_shard', name: 'Tapınak Anahtar Parçası', kind: 'quest', sellValue: 0, questId: 'q_sanctum_gate' },
  // --- quest greens (uncommon) ---
  ridgestalker_treads: {
    id: 'ridgestalker_treads', name: 'Sırt Avcısı Postalları', kind: 'armor', slot: 'feet', quality: 'uncommon',
    stats: { armor: 50, agi: 3, sta: 2 }, sellValue: 600,
  },
  boneplate_vest: {
    id: 'boneplate_vest', name: 'Kemik Plaka Yeleği', kind: 'armor', slot: 'chest', quality: 'uncommon',
    stats: { armor: 170, sta: 6, str: 3 }, sellValue: 800, requiredClass: ['warrior', 'paladin', 'shaman'],
  },
  revenant_silk_robe: {
    id: 'revenant_silk_robe', name: 'Hortlak İpeği Cübbesi', kind: 'armor', slot: 'chest', quality: 'uncommon',
    stats: { armor: 60, int: 7, spi: 4 }, sellValue: 800, requiredClass: ['mage', 'priest', 'warlock', 'druid'],
  },
  nightwalk_jerkin: {
    id: 'nightwalk_jerkin', name: 'Gecegezer Yeleği', kind: 'armor', slot: 'chest', quality: 'uncommon',
    stats: { armor: 105, agi: 7, sta: 2 }, sellValue: 800, requiredClass: ['rogue', 'hunter'],
  },
  zealotsbane_blade: {
    id: 'zealotsbane_blade', name: 'Bağnazkıran Kılıç', kind: 'weapon', slot: 'mainhand', quality: 'uncommon',
    weapon: { min: 18, max: 29, speed: 2.3 }, stats: { str: 6, sta: 2 }, sellValue: 900, requiredClass: ['warrior', 'paladin', 'shaman'],
  },
  emberwood_staff: {
    id: 'emberwood_staff', name: 'Korağacı Asası', kind: 'weapon', slot: 'mainhand', quality: 'uncommon',
    weapon: { min: 20, max: 33, speed: 3.0 }, stats: { int: 8, spi: 3 }, sellValue: 900, requiredClass: ['mage', 'priest', 'warlock', 'druid'],
  },
  cultist_flayer: {
    id: 'cultist_flayer', name: 'Tarikatçı Yüzme Bıçağı', kind: 'weapon', slot: 'mainhand', quality: 'uncommon',
    weapon: { min: 12, max: 19, speed: 1.7, dagger: true }, stats: { agi: 7 }, sellValue: 900, requiredClass: ['rogue', 'hunter'],
  },
  // --- quest & dungeon blues (rare) ---
  drogmars_skullcleaver: {
    id: 'drogmars_skullcleaver', name: "Drogmar'ın Kafatası Yarıcısı", kind: 'weapon', slot: 'mainhand', quality: 'rare',
    weapon: { min: 22, max: 35, speed: 2.6 }, stats: { str: 7, sta: 4 }, sellValue: 2000, requiredClass: ['warrior', 'paladin', 'shaman'],
  },
  ogre_bonecharm_staff: {
    id: 'ogre_bonecharm_staff', name: 'Ogre Kemik Tılsımı Asası', kind: 'weapon', slot: 'mainhand', quality: 'rare',
    weapon: { min: 24, max: 38, speed: 3.0 }, stats: { int: 9, spi: 4 }, sellValue: 2000, requiredClass: ['mage', 'priest', 'warlock', 'druid'],
  },
  gutripper_shiv: {
    id: 'gutripper_shiv', name: 'Karındeşen Şiş', kind: 'weapon', slot: 'mainhand', quality: 'rare',
    weapon: { min: 14, max: 22, speed: 1.7, dagger: true }, stats: { agi: 8, sta: 3 }, sellValue: 2000, requiredClass: ['rogue', 'hunter'],
  },
  stormshard_leggings: {
    id: 'stormshard_leggings', name: 'Fırtına Kıymığı Tozluğu', kind: 'armor', slot: 'legs', quality: 'rare',
    stats: { armor: 110, sta: 5 }, sellValue: 1800,
  },
  korgaths_chainwraps: {
    id: 'korgaths_chainwraps', name: "Korgath'ın Zincir Sargıları", kind: 'armor', slot: 'legs', quality: 'rare',
    stats: { armor: 125, sta: 6 }, sellValue: 2200,
  },
  boneguard_breastplate: {
    id: 'boneguard_breastplate', name: 'Kemik Muhafız Göğüslüğü', kind: 'armor', slot: 'chest', quality: 'rare',
    stats: { armor: 210, sta: 7, str: 4 }, sellValue: 2500, requiredClass: ['warrior', 'paladin', 'shaman'],
  },
  staff_of_velkhar: {
    id: 'staff_of_velkhar', name: 'Velkhar\'ın Asası', kind: 'weapon', slot: 'mainhand', quality: 'rare',
    weapon: { min: 27, max: 43, speed: 3.0 }, stats: { int: 10, spi: 5 }, sellValue: 2500, requiredClass: ['mage', 'priest', 'warlock', 'druid'],
  },
  shadowmeld_tunic: {
    id: 'shadowmeld_tunic', name: 'Gölge Tuniği', kind: 'armor', slot: 'chest', quality: 'rare',
    stats: { armor: 130, agi: 9, sta: 4 }, sellValue: 2500, requiredClass: ['rogue', 'hunter'],
  },
  gravewyrm_scale_hauberk: {
    id: 'gravewyrm_scale_hauberk', name: 'Mezarejderi Pulu Zırh Gömleği', kind: 'armor', slot: 'chest', quality: 'rare',
    stats: { armor: 230, sta: 8, str: 5 }, sellValue: 3000, requiredClass: ['warrior', 'paladin', 'shaman'],
  },
  wyrmcult_grand_robe: {
    id: 'wyrmcult_grand_robe', name: 'Ejder Tarikatı Baş Cübbesi', kind: 'armor', slot: 'chest', quality: 'rare',
    stats: { armor: 75, int: 11, spi: 5 }, sellValue: 3000, requiredClass: ['mage', 'priest', 'warlock', 'druid'],
  },
  wyrmscale_jerkin: {
    id: 'wyrmscale_jerkin', name: 'Ejderpulu Yeleği', kind: 'armor', slot: 'chest', quality: 'rare',
    stats: { armor: 145, agi: 10, sta: 5 }, sellValue: 3000, requiredClass: ['rogue', 'hunter'],
  },
  // --- the three epics (Korzul drops) ---
  wyrmfang_greatblade: {
    id: 'wyrmfang_greatblade', name: 'Ejderdişi Büyük Kılıcı', kind: 'weapon', slot: 'mainhand', quality: 'epic',
    weapon: { min: 30, max: 48, speed: 2.6 }, stats: { str: 10, sta: 6 }, sellValue: 8000, requiredClass: ['warrior', 'paladin', 'shaman'],
  },
  staff_of_the_gravewyrm: {
    id: 'staff_of_the_gravewyrm', name: 'Mezarejderi Asası', kind: 'weapon', slot: 'mainhand', quality: 'epic',
    weapon: { min: 32, max: 52, speed: 3.0 }, stats: { int: 12, spi: 6 }, sellValue: 8000, requiredClass: ['mage', 'priest', 'warlock', 'druid'],
  },
  fang_of_korzul: {
    id: 'fang_of_korzul', name: 'Korzul\'un Dişi', kind: 'weapon', slot: 'mainhand', quality: 'epic',
    weapon: { min: 19, max: 30, speed: 1.7, dagger: true }, stats: { agi: 11, sta: 5 }, sellValue: 8000, requiredClass: ['rogue', 'hunter'],
  },
  // --- vendor food & drink (Levazımcı Emine) ---
  trail_hardtack: {
    id: 'trail_hardtack', name: 'Gözcütepe Yol Peksimeti', kind: 'food', quality: 'common',
    foodHp: 552, sellValue: 75, buyValue: 1200,
  },
  meltwater_flask: {
    id: 'meltwater_flask', name: 'Kar Suyu Matarası', kind: 'drink', quality: 'common',
    drinkMana: 672, sellValue: 75, buyValue: 1200,
  },
  roast_mountain_goat: {
    id: 'roast_mountain_goat', name: 'Kızarmış Dağ Keçisi', kind: 'food', quality: 'common',
    foodHp: 874, sellValue: 150, buyValue: 2500,
  },
  glacier_melt: {
    id: 'glacier_melt', name: 'Buzul Suyu', kind: 'drink', quality: 'common',
    drinkMana: 900, sellValue: 150, buyValue: 2500,
  },
  // --- vendor whites (Zırhçı Mehmet + Levazımcı Emine) ---
  highwatch_warblade: {
    id: 'highwatch_warblade', name: 'Gözcütepe Savaş Kılıcı', kind: 'weapon', slot: 'mainhand', quality: 'common',
    weapon: { min: 15, max: 24, speed: 2.3 }, sellValue: 600, buyValue: 6000,
  },
  craghorn_staff: {
    id: 'craghorn_staff', name: 'Kayaboynuz Asası', kind: 'weapon', slot: 'mainhand', quality: 'common',
    weapon: { min: 16, max: 27, speed: 3.0 }, stats: { int: 2 }, sellValue: 600, buyValue: 6000,
  },
  icevein_dirk: {
    id: 'icevein_dirk', name: 'Buzdamarı Hançeri', kind: 'weapon', slot: 'mainhand', quality: 'common',
    weapon: { min: 10, max: 16, speed: 1.8, dagger: true }, sellValue: 600, buyValue: 6000,
  },
  highwatch_breastplate: {
    id: 'highwatch_breastplate', name: 'Gözcütepe Göğüslüğü', kind: 'armor', slot: 'chest', quality: 'common',
    stats: { armor: 160 }, sellValue: 700, buyValue: 7000,
  },
  peakwool_robe: {
    id: 'peakwool_robe', name: 'Zirve Yünü Cübbesi', kind: 'armor', slot: 'chest', quality: 'common',
    stats: { armor: 50 }, sellValue: 500, buyValue: 5000,
  },
  stalkerhide_jerkin: {
    id: 'stalkerhide_jerkin', name: 'Avcı Derisi Yeleği', kind: 'armor', slot: 'chest', quality: 'common',
    stats: { armor: 95 }, sellValue: 600, buyValue: 6000,
  },
  cragwalker_boots: {
    id: 'cragwalker_boots', name: 'Kayagezer Çizmesi', kind: 'armor', slot: 'feet', quality: 'common',
    stats: { armor: 55 }, sellValue: 400, buyValue: 4000,
  },
  windguard_leggings: {
    id: 'windguard_leggings', name: 'Rüzgârsiperi Tozluğu', kind: 'armor', slot: 'legs', quality: 'common',
    stats: { armor: 70 }, sellValue: 450, buyValue: 4500,
  },
  // --- junk (gray) ---
  ogre_toe_ring: { id: 'ogre_toe_ring', name: 'Ogre Ayak Yüzüğü', kind: 'junk', quality: 'poor', sellValue: 25 },
  inert_storm_shard: { id: 'inert_storm_shard', name: 'Sönmüş Fırtına Kıymığı', kind: 'junk', quality: 'poor', sellValue: 28 },
  frayed_prayer_beads: { id: 'frayed_prayer_beads', name: 'Yıpranmış Tespih', kind: 'junk', quality: 'poor', sellValue: 30 },
  cracked_wyrm_scale: { id: 'cracked_wyrm_scale', name: 'Çatlak Ejder Pulu', kind: 'junk', quality: 'poor', sellValue: 35 },
};

// ---------------------------------------------------------------------------
// Static props (rendering + collision share this placement data). Highwatch
// sits on a high plateau (~9 elevation); the lake at (-70,760) stays clear.
// ---------------------------------------------------------------------------

export const ZONE3_PROPS: ZonePropsDef = {
  buildings: [
    { kind: 'house', x: 14, z: 671, w: 7, d: 6, rot: -0.5 },
    { kind: 'house', x: 8, z: 650, w: 6, d: 5, rot: 0.4 },
    { kind: 'house', x: 18, z: 660, w: 6, d: 5, rot: 1.2 },
    { kind: 'inn', x: -15, z: 666, w: 6, d: 7, rot: 0.6 },
    { kind: 'chapel', x: -16, z: 650, w: 5, d: 7, rot: 0.9 },
  ],
  wells: [{ x: 0, z: 662, r: 1.5 }],
  stalls: [
    { x: -7.5, z: 667, rot: Math.PI / 2, r: 1.7 },   // Levazımcı Emine
    { x: -4.5, z: 673.5, rot: -0.6, r: 1.7 },        // Zırhçı Mehmet
  ],
  mines: [{ x: 88, z: 612, rot: -2.0 }],             // Deeprock Burrows
  docks: [],
  tents: [
    // Drogmar's war-camp
    { x: -120, z: 733, rot: 0.5, scale: 1.3 },
    { x: -128, z: 744, rot: 2.0, scale: 1.3 },
    { x: -136, z: 752, rot: 1.0, scale: 1.5 },
    // Wyrmcult tents below the Sanctum
    { x: 50, z: 815, rot: 0.8, scale: 1 },
    { x: 58, z: 823, rot: -0.5, scale: 1 },
    { x: 60, z: 812, rot: 2.2, scale: 1 },
    { x: 28, z: 848, rot: 1.5, scale: 1 },
  ],
  crates: [[-118, 728], [-124, 735], [-130, 742], [52, 818], [57, 820]],
  campfires: [[2, 658], [-122, 736], [-136, 743], [52, 817], [28, 847]],
  mudHuts: [],
  ruinRings: [
    { x: -40, z: 830, ringR: 7, columns: 6 },        // Revenant Fields battlefield
    { x: -12, z: 862, ringR: 6, columns: 5 },        // Sanctum Approach ruins
    { x: 12, z: 858, ringR: 6, columns: 5 },
  ],
  fences: [
    { x1: -14, z1: 649, x2: -4, z2: 647 },           // south gate, east run
    { x1: 4, z1: 647, x2: 14, z2: 649 },             // south gate, west run
  ],
  graveyards: [{ x: 15, z: 645 }],
};
