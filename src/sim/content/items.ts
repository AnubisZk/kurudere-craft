import type { ItemDef, PlayerClass } from '../types';

// Archetype groups for class-locked rewards (REWARD_ARCHETYPE hands warrior
// rewards to paladins/shamans etc., so the lock must admit the whole group).
const WAR: PlayerClass[] = ['warrior', 'paladin', 'shaman'];
const MAG: PlayerClass[] = ['mage', 'priest', 'warlock', 'druid'];
const ROG: PlayerClass[] = ['rogue', 'hunter'];

// ---------------------------------------------------------------------------
// Items
// ---------------------------------------------------------------------------

export const BASE_ITEMS: Record<string, ItemDef> = {
  // --- starting gear ---
  worn_sword: {
    id: 'worn_sword', name: 'Yıpranmış Kısa Kılıç', kind: 'weapon', slot: 'mainhand', quality: 'common',
    weapon: { min: 2, max: 5, speed: 2.0 }, sellValue: 10,
  },
  gnarled_staff: {
    id: 'gnarled_staff', name: 'Budaklı Asa', kind: 'weapon', slot: 'mainhand', quality: 'common',
    weapon: { min: 3, max: 6, speed: 2.9 }, stats: { int: 1 }, sellValue: 12,
  },
  rusty_dagger: {
    id: 'rusty_dagger', name: 'Paslı Hançer', kind: 'weapon', slot: 'mainhand', quality: 'common',
    weapon: { min: 2, max: 4, speed: 1.8, dagger: true }, sellValue: 10,
  },
  training_mace: {
    id: 'training_mace', name: 'Talim Topuzu', kind: 'weapon', slot: 'mainhand', quality: 'common',
    weapon: { min: 2, max: 5, speed: 2.6 }, sellValue: 10,
  },
  rusty_hatchet: {
    id: 'rusty_hatchet', name: 'Paslı Balta', kind: 'weapon', slot: 'mainhand', quality: 'common',
    weapon: { min: 2, max: 5, speed: 2.2 }, sellValue: 10,
  },
  recruit_tunic: {
    id: 'recruit_tunic', name: 'Acemi Yeleği', kind: 'armor', slot: 'chest', quality: 'common',
    stats: { armor: 20 }, sellValue: 5,
  },
  apprentice_robe: {
    id: 'apprentice_robe', name: 'Çırak Cübbesi', kind: 'armor', slot: 'chest', quality: 'common',
    stats: { armor: 8 }, sellValue: 5,
  },
  footpad_jerkin: {
    id: 'footpad_jerkin', name: 'Yankesici Yeleği', kind: 'armor', slot: 'chest', quality: 'common',
    stats: { armor: 14 }, sellValue: 5,
  },
  // --- quest reward gear ---
  redbrook_blade: {
    id: 'redbrook_blade', name: 'Kurudere Milis Kılıcı', kind: 'weapon', slot: 'mainhand', quality: 'uncommon',
    weapon: { min: 6, max: 11, speed: 2.2 }, stats: { str: 2 }, sellValue: 120, requiredClass: WAR,
  },
  apprentice_staff: {
    id: 'apprentice_staff', name: 'Vadi Çırak Asası', kind: 'weapon', slot: 'mainhand', quality: 'uncommon',
    weapon: { min: 7, max: 12, speed: 3.0 }, stats: { int: 3, sta: 1 }, sellValue: 120, requiredClass: MAG,
  },
  keen_dirk: {
    id: 'keen_dirk', name: 'Keskin Hançer', kind: 'weapon', slot: 'mainhand', quality: 'uncommon',
    weapon: { min: 4, max: 8, speed: 1.7, dagger: true }, stats: { agi: 2 }, sellValue: 120, requiredClass: ROG,
  },
  militia_vest: {
    id: 'militia_vest', name: 'Milis Zincir Yeleği', kind: 'armor', slot: 'chest', quality: 'uncommon',
    stats: { armor: 90, sta: 2 }, sellValue: 150, requiredClass: WAR,
  },
  woven_robe: {
    id: 'woven_robe', name: 'Vadi Dokuması Cübbe', kind: 'armor', slot: 'chest', quality: 'uncommon',
    stats: { armor: 30, int: 3, spi: 2 }, sellValue: 150, requiredClass: MAG,
  },
  shadow_jerkin: {
    id: 'shadow_jerkin', name: 'Gölgedikiş Yeleği', kind: 'armor', slot: 'chest', quality: 'uncommon',
    stats: { armor: 55, agi: 3 }, sellValue: 150, requiredClass: ROG,
  },
  oiled_boots: {
    id: 'oiled_boots', name: 'Yağlanmış Deri Çizme', kind: 'armor', slot: 'feet', quality: 'uncommon',
    stats: { armor: 25, agi: 1 }, sellValue: 80,
  },
  quilted_trousers: {
    id: 'quilted_trousers', name: 'Kapitone Pantolon', kind: 'armor', slot: 'legs', quality: 'uncommon',
    stats: { armor: 30, sta: 2 }, sellValue: 90,
  },
  greyjaw_pelt_cloak: {
    id: 'greyjaw_pelt_cloak', name: 'Tozçene Postu Tozluğu', kind: 'armor', slot: 'legs', quality: 'uncommon',
    stats: { armor: 35, sta: 1, agi: 1 }, sellValue: 110,
  },
  // --- food & drink (vendor) ---
  baked_bread: {
    id: 'baked_bread', name: 'Taze Pişmiş Ekmek', kind: 'food', quality: 'common',
    foodHp: 61, sellValue: 6, buyValue: 25,
  },
  spring_water: {
    id: 'spring_water', name: 'Ferahlatıcı Kaynak Suyu', kind: 'drink', quality: 'common',
    drinkMana: 76, sellValue: 6, buyValue: 25,
  },
  roasted_boar: {
    id: 'roasted_boar', name: 'Kızarmış Domuz Eti', kind: 'food', quality: 'common',
    foodHp: 117, sellValue: 12, buyValue: 100,
  },
  conjured_water: {
    id: 'conjured_water', name: 'Yaratılmış Kaynak Suyu', kind: 'drink', quality: 'common',
    drinkMana: 76, sellValue: 0,
  },
  conjured_water2: {
    id: 'conjured_water2', name: 'Yaratılmış Maden Suyu', kind: 'drink', quality: 'common',
    drinkMana: 288, sellValue: 0,
  },
  conjured_water3: {
    id: 'conjured_water3', name: 'Yaratılmış Soda', kind: 'drink', quality: 'common',
    drinkMana: 672, sellValue: 0,
  },
  // --- Demirci Mehmet's stock (common/white, levels 3-7) ---
  eastbrook_arming_sword: {
    id: 'eastbrook_arming_sword', name: 'Kurudere Savaş Kılıcı', kind: 'weapon', slot: 'mainhand', quality: 'common',
    weapon: { min: 5, max: 9, speed: 2.2 }, sellValue: 140, buyValue: 1400,
  },
  bronzework_mace: {
    id: 'bronzework_mace', name: 'Bronz İşi Topuz', kind: 'weapon', slot: 'mainhand', quality: 'common',
    weapon: { min: 6, max: 10, speed: 2.6 }, sellValue: 140, buyValue: 1400,
  },
  vale_carving_knife: {
    id: 'vale_carving_knife', name: 'Vadi Oyma Bıçağı', kind: 'weapon', slot: 'mainhand', quality: 'common',
    weapon: { min: 4, max: 7, speed: 1.8, dagger: true }, sellValue: 120, buyValue: 1200,
  },
  hickory_shortstaff: {
    id: 'hickory_shortstaff', name: 'Ceviz Ağacı Kısa Asa', kind: 'weapon', slot: 'mainhand', quality: 'common',
    weapon: { min: 6, max: 11, speed: 3.0 }, stats: { int: 1 }, sellValue: 150, buyValue: 1500,
  },
  eastbrook_chain_vest: {
    id: 'eastbrook_chain_vest', name: 'Kurudere Zincir Zırh Yeleği', kind: 'armor', slot: 'chest', quality: 'common',
    stats: { armor: 60 }, sellValue: 180, buyValue: 1800,
  },
  valespun_robe: {
    id: 'valespun_robe', name: 'Vadi Eğirmesi Cübbe', kind: 'armor', slot: 'chest', quality: 'common',
    stats: { armor: 22 }, sellValue: 140, buyValue: 1400,
  },
  tanned_leather_jerkin: {
    id: 'tanned_leather_jerkin', name: 'Tabaklanmış Deri Yelek', kind: 'armor', slot: 'chest', quality: 'common',
    stats: { armor: 40 }, sellValue: 160, buyValue: 1600,
  },
  hobnail_boots: {
    id: 'hobnail_boots', name: 'Kabaralı Çizme', kind: 'armor', slot: 'feet', quality: 'common',
    stats: { armor: 18 }, sellValue: 90, buyValue: 900,
  },
  eastbrook_wool_trousers: {
    id: 'eastbrook_wool_trousers', name: 'Kurudere Yün Pantolonu', kind: 'armor', slot: 'legs', quality: 'common',
    stats: { armor: 24 }, sellValue: 110, buyValue: 1100,
  },
  // --- Hollow Crypt rewards (rare/blue) ---
  gravecaller_blade: {
    id: 'gravecaller_blade', name: 'Mezarçağıran Pala Kılıcı', kind: 'weapon', slot: 'mainhand', quality: 'rare',
    weapon: { min: 9, max: 16, speed: 2.4 }, stats: { str: 3, sta: 2 }, sellValue: 800,
  },
  widowfang_dirk: {
    id: 'widowfang_dirk', name: 'Duldişi Hançeri', kind: 'weapon', slot: 'mainhand', quality: 'rare',
    weapon: { min: 6, max: 10, speed: 1.7, dagger: true }, stats: { agi: 3, sta: 2 }, sellValue: 800,
  },
  gravecaller_staff: {
    id: 'gravecaller_staff', name: 'Oyuk Asası', kind: 'weapon', slot: 'mainhand', quality: 'rare',
    weapon: { min: 10, max: 17, speed: 3.0 }, stats: { int: 4, spi: 2 }, sellValue: 800,
  },
  marrowtread_boots: {
    id: 'marrowtread_boots', name: 'İlikbasan Çizmesi', kind: 'armor', slot: 'feet', quality: 'rare',
    stats: { armor: 45, sta: 2, str: 1 }, sellValue: 500, requiredClass: WAR,
  },
  sextons_slippers: {
    id: 'sextons_slippers', name: 'Zangoç Terlikleri', kind: 'armor', slot: 'feet', quality: 'rare',
    stats: { armor: 20, int: 2, spi: 2 }, sellValue: 500, requiredClass: MAG,
  },
  gravewalker_softboots: {
    id: 'gravewalker_softboots', name: 'Mezargezer Yumuşak Çizmesi', kind: 'armor', slot: 'feet', quality: 'rare',
    stats: { armor: 32, agi: 3 }, sellValue: 500, requiredClass: ROG,
  },
  // --- quest items ---
  boar_hide: { id: 'boar_hide', name: 'Kıllı Domuz Postu', kind: 'quest', sellValue: 0, questId: 'q_boars' },
  gravecaller_sigil: { id: 'gravecaller_sigil', name: 'Mezarçağıran Mührü', kind: 'quest', sellValue: 0, questId: 'q_whispers' },
  blessed_wax: { id: 'blessed_wax', name: 'Kutsanmış Donyağı', kind: 'quest', sellValue: 0, questId: 'q_rite' },
  ghostly_essence: { id: 'ghostly_essence', name: 'Hayalet Özü', kind: 'quest', sellValue: 0, questId: 'q_rite' },
  webwood_silk: { id: 'webwood_silk', name: 'Akrep İğnesi', kind: 'quest', sellValue: 0, questId: 'q_spiders' },
  supply_crate: { id: 'supply_crate', name: 'Çalınan Erzak Sandığı', kind: 'quest', sellValue: 0, questId: 'q_supplies' },
  greyjaw_fang: { id: 'greyjaw_fang', name: "Koca Tozçene'nin Dişi", kind: 'quest', sellValue: 0, questId: 'q_greyjaw' },
  weathered_ledger_page: { id: 'weathered_ledger_page', name: 'Yıpranmış Defter Sayfası', kind: 'quest', sellValue: 0, questId: 'q_names_of_the_dead' },
  morthen_grimoire: { id: 'morthen_grimoire', name: "Morthen'in Büyü Kitabı", kind: 'quest', sellValue: 0, questId: 'q_gravecallers_trail' },
  // --- junk (gray) ---
  wolf_fang: { id: 'wolf_fang', name: 'Çatlak Kurt Dişi', kind: 'junk', quality: 'poor', sellValue: 4 },
  bandit_bandana: { id: 'bandit_bandana', name: 'Kırmızı Bandana', kind: 'junk', quality: 'poor', sellValue: 6 },
  tough_jerky: { id: 'tough_jerky', name: 'Sert Kurutulmuş Et', kind: 'food', quality: 'common', foodHp: 61, sellValue: 2, buyValue: 25 },
  mudfin_scale: { id: 'mudfin_scale', name: 'Sümüksü Murlok Pulu', kind: 'junk', quality: 'poor', sellValue: 5 },
  tallow_candle: { id: 'tallow_candle', name: 'Donyağı Mumu', kind: 'junk', quality: 'poor', sellValue: 5 },
  spider_leg: { id: 'spider_leg', name: 'Seğiren Örümcek Bacağı', kind: 'junk', quality: 'poor', sellValue: 4 },
  bone_fragments: { id: 'bone_fragments', name: 'Kemik Parçaları', kind: 'junk', quality: 'poor', sellValue: 7 },
  linen_scrap: { id: 'linen_scrap', name: 'Keten Parçası', kind: 'junk', quality: 'poor', sellValue: 3 },
};
