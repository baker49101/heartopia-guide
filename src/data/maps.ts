import { heartopiaCollectionMap } from './heartopiaCollections';

export type MapLayerId =
  | 'npcs'
  | 'animals'
  | 'bus'
  | 'shops'
  | 'locations'
  | 'resources'
  | 'fish'
  | 'insects'
  | 'birds';

export type MapPinTone =
  | 'npc'
  | 'animal'
  | 'bus'
  | 'shop'
  | 'location'
  | 'resource'
  | 'fish'
  | 'insect'
  | 'bird';

export type MapPin = {
  id: string;
  layer: MapLayerId;
  name: string;
  englishName: string;
  x: number;
  y: number;
  tone: MapPinTone;
  summary: string;
  summaryEn: string;
  detail: string;
  detailEn: string;
  tags: string[];
};

export type MapZone = {
  id: string;
  name: string;
  englishName: string;
  type: '海域' | '湖泊' | '河流' | '功能区';
  typeEn: 'Sea' | 'Lake' | 'River' | 'Town';
  x: number;
  y: number;
  tone: 'sea' | 'lake' | 'river' | 'town';
  summary: string;
  summaryEn: string;
  focus: string[];
  focusEn: string[];
  routeTip: string;
  routeTipEn: string;
  status: '推荐' | '更新中';
  statusEn: 'Recommended' | 'Updating';
};

export type RoutePlan = {
  title: string;
  titleEn: string;
  minutes: string;
  tags: string[];
  tagsEn: string[];
  steps: string[];
  stepsEn: string[];
};

export type MapLayerSummary = {
  id: MapLayerId;
  label: string;
  labelKey: string;
  count: number;
  description: string;
  descriptionEn: string;
};

export const mapBackgroundImage = '/images/map/heartopia-map-background.webp';

export const mapLayerSummaries: MapLayerSummary[] = [
  { id: 'npcs', label: 'NPC', labelKey: 'maps.layer.npcs', count: 20, description: '居民、导师、商店角色和任务角色。', descriptionEn: 'Residents, mentors, vendors, and quest NPCs.' },
  { id: 'animals', label: '动物', labelKey: 'maps.layer.animals', count: 8, description: '野外动物刷新点和活动范围。', descriptionEn: 'Wild animal spawn areas and roaming zones.' },
  { id: 'bus', label: '公交', labelKey: 'maps.layer.bus', count: 8, description: '快速移动站点。', descriptionEn: 'Fast travel bus stops.' },
  { id: 'shops', label: '商店', labelKey: 'maps.layer.shops', count: 4, description: '常用功能商店。', descriptionEn: 'Core utility shops around town.' },
  { id: 'locations', label: '地点', labelKey: 'maps.layer.locations', count: 33, description: '城镇、水域和地标。', descriptionEn: 'Town hubs, waters, and landmarks.' },
  { id: 'resources', label: '资源', labelKey: 'maps.layer.resources', count: 11, description: '水果、蘑菇、树木和矿石资源。', descriptionEn: 'Fruit, mushrooms, trees, and ore routes.' },
  { id: 'fish', label: '鱼类', labelKey: 'maps.layer.fish', count: 82, description: '按图鉴地点定位鱼类。', descriptionEn: 'Fish collection anchors by location.' },
  { id: 'insects', label: '昆虫', labelKey: 'maps.layer.insects', count: 64, description: '按图鉴地点定位昆虫。', descriptionEn: 'Insect collection anchors by location.' },
  { id: 'birds', label: '鸟类', labelKey: 'maps.layer.birds', count: 80, description: '按图鉴地点定位鸟类。', descriptionEn: 'Bird collection anchors by location.' }
];

const titleize = (value: string) =>
  value
    .split('-')
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(' ');

const layerSummary = (layer: MapLayerId, name: string) => {
  switch (layer) {
    case 'npcs':
      return `${name} 的常驻互动位置。`;
    case 'animals':
      return `${name} 的野外刷新区域。`;
    case 'bus':
      return `${name} 巴士站，可用于快速移动。`;
    case 'shops':
      return `${name} 所在位置。`;
    case 'resources':
      return `${name} 的主要采集区域。`;
    case 'fish':
      return `${name} 的图鉴地点定位。`;
    case 'insects':
      return `${name} 的图鉴地点定位。`;
    case 'birds':
      return `${name} 的图鉴地点定位。`;
    default:
      return `${name} 地图点位。`;
  }
};

const layerSummaryEn = (layer: MapLayerId, name: string) => {
  switch (layer) {
    case 'npcs':
      return `${name}'s regular interaction point.`;
    case 'animals':
      return `${name}'s wild spawn area.`;
    case 'bus':
      return `${name} bus stop for fast travel.`;
    case 'shops':
      return `${name}'s shop location.`;
    case 'resources':
      return `${name}'s main gathering area.`;
    case 'fish':
      return `${name}'s collection location anchor.`;
    case 'insects':
      return `${name}'s collection location anchor.`;
    case 'birds':
      return `${name}'s collection location anchor.`;
    default:
      return `${name} map marker.`;
  }
};

const locationType = (name: string): MapZone['type'] => {
  if (/海|Sea|Beach|Dock|Pier|Lighthouse/.test(name)) return '海域';
  if (/湖|Lake/.test(name)) return '湖泊';
  if (/河|River/.test(name)) return '河流';
  return '功能区';
};

const zoneTone = (type: MapZone['type']): MapZone['tone'] => {
  if (type === '海域') return 'sea';
  if (type === '湖泊') return 'lake';
  if (type === '河流') return 'river';
  return 'town';
};

const zoneTypeEn = (type: MapZone['type']): MapZone['typeEn'] => {
  if (type === '海域') return 'Sea';
  if (type === '湖泊') return 'Lake';
  if (type === '河流') return 'River';
  return 'Town';
};

const tagTranslations: Record<string, string> = {
  NPC: 'NPC',
  商店: 'Shop',
  活动: 'Event',
  温泉山: 'Hot Spring Mountain',
  料理导师: 'Cooking Mentor',
  载具: 'Mounts',
  钓鱼导师: 'Fishing Mentor',
  捕虫导师: 'Bug Catching Mentor',
  宠物: 'Pets',
  灯塔: 'Lighthouse',
  森林: 'Forest',
  花田: 'Flower Fields',
  观鸟导师: 'Birdwatching Mentor',
  园艺导师: 'Gardening Mentor',
  收购: 'Buyback',
  海钓: 'Sea Fishing',
  天气: 'Weather',
  动物: 'Animals',
  公交: 'Bus',
  地点: 'Location',
  功能区: 'Town Hub',
  海域: 'Sea',
  湖泊: 'Lake',
  河流: 'River',
  资源: 'Resource',
  浆果: 'Berry',
  水果: 'Fruit',
  树木: 'Tree',
  矿石: 'Ore',
  蘑菇: 'Mushroom',
  鱼类: 'Fish',
  昆虫: 'Insects',
  鸟类: 'Birds',
  开荒: 'Unlock',
  低压力: 'Low Pressure',
  日常: 'Daily',
  采集: 'Foraging',
  钓鱼: 'Fishing',
  雨天: 'Rain',
  彩虹天: 'Rainbow',
  路线: 'Route',
  图鉴: 'Collection',
  海鱼: 'Sea Fish',
  功能解锁: 'Unlocks'
};

const translateTag = (value: string) => tagTranslations[value] ?? value;

const basePins: MapPin[] = [
  { id: 'npc-bob', layer: 'npcs', name: '鲍勃', englishName: 'Bob', x: 50.1, y: 47.1, tone: 'npc', tags: ['NPC', '商店'] },
  { id: 'npc-atara', layer: 'npcs', name: '阿塔拉', englishName: 'Atara', x: 49.9, y: 52.6, tone: 'npc', tags: ['NPC', '活动'] },
  { id: 'npc-collector', layer: 'npcs', name: '收藏家', englishName: 'The Collector', x: 49.3, y: 47.8, tone: 'npc', tags: ['NPC', '商店'] },
  { id: 'npc-dorothee', layer: 'npcs', name: '多萝西', englishName: 'Dorothee', x: 48.8, y: 46.9, tone: 'npc', tags: ['NPC', '商店'] },
  { id: 'npc-massimo', layer: 'npcs', name: '马西莫', englishName: 'Massimo', x: 49.3, y: 44.6, tone: 'npc', tags: ['NPC', '料理导师'] },
  { id: 'npc-ka-ching', layer: 'npcs', name: '卡钦', englishName: 'Ka Ching', x: 41.8, y: 41.2, tone: 'npc', tags: ['NPC', '商店'] },
  { id: 'npc-andrew', layer: 'npcs', name: '安德鲁', englishName: 'Andrew', x: 59.1, y: 39.9, tone: 'npc', tags: ['NPC', '载具'] },
  { id: 'npc-eric', layer: 'npcs', name: '埃里克', englishName: 'Eric', x: 52.2, y: 25.9, tone: 'npc', tags: ['NPC', '温泉山'] },
  { id: 'npc-vanya', layer: 'npcs', name: '瓦尼亚', englishName: 'Vanya', x: 54.9, y: 45.6, tone: 'npc', tags: ['NPC', '钓鱼导师'] },
  { id: 'npc-naniwa', layer: 'npcs', name: '纳尼瓦', englishName: 'Naniwa', x: 58.2, y: 50.2, tone: 'npc', tags: ['NPC', '捕虫导师'] },
  { id: 'npc-mrs-joan', layer: 'npcs', name: '琼太太', englishName: 'Mrs. Joan', x: 51.9, y: 50.2, tone: 'npc', tags: ['NPC', '宠物'] },
  { id: 'npc-will', layer: 'npcs', name: '威尔', englishName: 'Will', x: 41.9, y: 80.7, tone: 'npc', tags: ['NPC', '灯塔'] },
  { id: 'npc-patti', layer: 'npcs', name: '帕蒂', englishName: 'Patti', x: 80.9, y: 35.5, tone: 'npc', tags: ['NPC', '森林'] },
  { id: 'npc-vernie', layer: 'npcs', name: '维尔尼', englishName: 'Vernie', x: 22.5, y: 65.3, tone: 'npc', tags: ['NPC', '花田'] },
  { id: 'npc-bailey-j', layer: 'npcs', name: '贝利J', englishName: 'Bailey J', x: 52.6, y: 49.8, tone: 'npc', tags: ['NPC', '观鸟导师'] },
  { id: 'npc-blanc', layer: 'npcs', name: '布兰克', englishName: 'Blanc', x: 56.03, y: 52.83, tone: 'npc', tags: ['NPC', '园艺导师'] },
  { id: 'npc-annie', layer: 'npcs', name: '安妮', englishName: 'Annie', x: 49.9, y: 49.98, tone: 'npc', tags: ['NPC', '乐器'] },
  { id: 'npc-albert-jr', layer: 'npcs', name: '小艾伯特', englishName: 'Albert Jr.', x: 63.48, y: 53.24, tone: 'npc', tags: ['NPC', '收购'] },
  { id: 'npc-bill', layer: 'npcs', name: '比尔', englishName: 'Bill', x: 44.58, y: 73.48, tone: 'npc', tags: ['NPC', '海钓'] },
  { id: 'npc-doris', layer: 'npcs', name: '多丽丝', englishName: 'Doris', x: 41.4, y: 50.94, tone: 'npc', tags: ['NPC', '天气'] },

  { id: 'animal-panda', layer: 'animals', name: '熊猫', englishName: 'Panda', x: 78.3, y: 69.1, tone: 'animal', tags: ['动物'] },
  { id: 'animal-capybara', layer: 'animals', name: '水豚', englishName: 'Capybara', x: 29.1, y: 18.4, tone: 'animal', tags: ['动物'] },
  { id: 'animal-bunny', layer: 'animals', name: '兔子', englishName: 'Bunny', x: 34, y: 53.3, tone: 'animal', tags: ['动物'] },
  { id: 'animal-fox', layer: 'animals', name: '狐狸', englishName: 'Fox', x: 18.5, y: 64.9, tone: 'animal', tags: ['动物'] },
  { id: 'animal-sea-otter', layer: 'animals', name: '水獭', englishName: 'Sea Otter', x: 51.2, y: 73.7, tone: 'animal', tags: ['动物'] },
  { id: 'animal-ferret', layer: 'animals', name: '水貂', englishName: 'Ferret', x: 27.73, y: 35.43, tone: 'animal', tags: ['动物'] },
  { id: 'animal-deer', layer: 'animals', name: '鹿', englishName: 'Deer', x: 80.5, y: 53.1, tone: 'animal', tags: ['动物'] },
  { id: 'animal-llama', layer: 'animals', name: '羊驼', englishName: 'Llama', x: 20.8, y: 72.5, tone: 'animal', tags: ['动物'] },

  { id: 'bus-west-suburbs', layer: 'bus', name: '西郊', englishName: 'West Suburbs', x: 34, y: 53.3, tone: 'bus', tags: ['公交'] },
  { id: 'bus-suburb-village', layer: 'bus', name: '郊区村', englishName: 'Suburb Village', x: 63.9, y: 51.9, tone: 'bus', tags: ['公交'] },
  { id: 'bus-fisherman-village', layer: 'bus', name: '渔村', englishName: 'Fisherman Village', x: 47.9, y: 65.4, tone: 'bus', tags: ['公交'] },
  { id: 'bus-flower-fields', layer: 'bus', name: '花田', englishName: 'Flower Fields', x: 21.8, y: 53.2, tone: 'bus', tags: ['公交'] },
  { id: 'bus-hot-spring-mountain', layer: 'bus', name: '温泉山', englishName: 'Hot Spring Mountain', x: 51.2, y: 22.2, tone: 'bus', tags: ['公交'] },
  { id: 'bus-north-suburbs', layer: 'bus', name: '北郊', englishName: 'North Suburbs', x: 48, y: 37.3, tone: 'bus', tags: ['公交'] },
  { id: 'bus-central-plaza', layer: 'bus', name: '中央广场', englishName: 'Central Plaza', x: 48.1, y: 49.7, tone: 'bus', tags: ['公交'] },
  { id: 'bus-forest', layer: 'bus', name: '森林', englishName: 'Forest', x: 79.8, y: 50, tone: 'bus', tags: ['公交'] },

  { id: 'shop-clothes', layer: 'shops', name: '服装店', englishName: 'Clothes', x: 48.7, y: 47.2, tone: 'shop', tags: ['商店'] },
  { id: 'shop-furniture', layer: 'shops', name: '家具店', englishName: 'Furniture', x: 50.3, y: 47.4, tone: 'shop', tags: ['商店'] },
  { id: 'shop-pets', layer: 'shops', name: '宠物店', englishName: 'Pets', x: 52.06, y: 49.64, tone: 'shop', tags: ['商店'] },
  { id: 'shop-bookstore', layer: 'shops', name: '书店', englishName: 'Bookstore', x: 46.7, y: 44, tone: 'shop', tags: ['商店'] },

  { id: 'place-central-plaza', layer: 'locations', name: '中央广场', englishName: 'Central Plaza', x: 49.2, y: 53.8, tone: 'location', tags: ['地点', '功能区'] },
  { id: 'place-fisherman-village', layer: 'locations', name: '渔村', englishName: 'Fisherman Village', x: 50.6, y: 69.2, tone: 'location', tags: ['地点', '功能区'] },
  { id: 'place-townsfolk-street', layer: 'locations', name: '居民街', englishName: 'Townsfolk Street', x: 51.3, y: 43.8, tone: 'location', tags: ['地点', '功能区'] },
  { id: 'place-flower-fields', layer: 'locations', name: '花田', englishName: 'Flower Fields', x: 18.5, y: 64.9, tone: 'location', tags: ['地点', '功能区'] },
  { id: 'place-whale-mountain', layer: 'locations', name: '鲸鱼山', englishName: 'Whale Mountain', x: 18.4, y: 44, tone: 'location', tags: ['地点', '功能区'] },
  { id: 'place-the-ruins', layer: 'locations', name: '废墟', englishName: 'The Ruins', x: 29.1, y: 18.4, tone: 'location', tags: ['地点', '功能区'] },
  { id: 'place-hot-spring-mountain', layer: 'locations', name: '温泉山', englishName: 'Hot Spring Mountain', x: 50.1, y: 22.3, tone: 'location', tags: ['地点', '功能区'] },
  { id: 'place-rocky-cliff', layer: 'locations', name: '岩石悬崖', englishName: 'Rocky Cliff', x: 62.7, y: 22.8, tone: 'location', tags: ['地点', '功能区'] },
  { id: 'place-oak-forest', layer: 'locations', name: '橡树林', englishName: 'Oak Forest', x: 80.5, y: 53.1, tone: 'location', tags: ['地点', '功能区'] },
  { id: 'place-arts-street', layer: 'locations', name: '艺术街', englishName: 'Arts Street', x: 42.9, y: 49.4, tone: 'location', tags: ['地点', '功能区'] },
  { id: 'place-garden-street', layer: 'locations', name: '花园街', englishName: 'Garden Street', x: 55.8, y: 51, tone: 'location', tags: ['地点', '功能区'] },
  { id: 'place-east-dock', layer: 'locations', name: '东码头', englishName: 'East Dock', x: 60.2, y: 73.6, tone: 'location', tags: ['地点', '海域'] },
  { id: 'place-the-pier', layer: 'locations', name: '码头', englishName: 'The Pier', x: 40.2, y: 69, tone: 'location', tags: ['地点', '海域'] },
  { id: 'place-lighthouse', layer: 'locations', name: '灯塔', englishName: 'Lighthouse', x: 38.7, y: 78, tone: 'location', tags: ['地点', '海域'] },
  { id: 'place-diving-board', layer: 'locations', name: '跳水台', englishName: 'Diving Board', x: 78.3, y: 69.1, tone: 'location', tags: ['地点', '海域'] },
  { id: 'place-forest-island', layer: 'locations', name: '森林岛', englishName: 'Forest Island', x: 93.3, y: 33.8, tone: 'location', tags: ['地点', '海域'] },
  { id: 'place-suburbs', layer: 'locations', name: '郊区', englishName: 'Suburbs', x: 40.6, y: 58.7, tone: 'location', tags: ['地点', '功能区'] },
  { id: 'place-violet-beach', layer: 'locations', name: '紫罗兰海滩', englishName: 'Violet Beach', x: 20.8, y: 72.5, tone: 'location', tags: ['地点', '海域'] },
  { id: 'place-windmill-flower-field', layer: 'locations', name: '风车花田', englishName: 'Windmill Flower Field', x: 60, y: 60, tone: 'location', tags: ['地点', '功能区'] },
  { id: 'place-east-pontoon', layer: 'locations', name: '东浮桥', englishName: 'East Pontoon', x: 45, y: 67, tone: 'location', tags: ['地点', '海域'] },
  { id: 'place-calm-sea', layer: 'locations', name: '平静之海', englishName: 'Calm Sea', x: 47.8, y: 78.3, tone: 'location', tags: ['地点', '海域'] },
  { id: 'place-whale-sea', layer: 'locations', name: '鲸鱼海', englishName: 'Whale Sea', x: 9.2, y: 53.4, tone: 'location', tags: ['地点', '海域'] },
  { id: 'place-ancient-sea', layer: 'locations', name: '古老之海', englishName: 'Ancient Sea', x: 49.7, y: 6.8, tone: 'location', tags: ['地点', '海域'] },
  { id: 'place-meadow-lake', layer: 'locations', name: '草地湖', englishName: 'Meadow Lake', x: 23.2, y: 53.6, tone: 'location', tags: ['地点', '湖泊'] },
  { id: 'place-aurora-river', layer: 'locations', name: '极光河', englishName: 'Aurora River', x: 31.9, y: 33.7, tone: 'location', tags: ['地点', '河流'] },
  { id: 'place-volcano-lake', layer: 'locations', name: '火山湖', englishName: 'Volcano Lake', x: 39.4, y: 17.6, tone: 'location', tags: ['地点', '湖泊'] },
  { id: 'place-hot-spring-lake', layer: 'locations', name: '温泉湖', englishName: 'Hot Spring Lake', x: 53.7, y: 26.5, tone: 'location', tags: ['地点', '湖泊'] },
  { id: 'place-shallow-river', layer: 'locations', name: '浅水河', englishName: 'Shallow River', x: 65.2, y: 34.4, tone: 'location', tags: ['地点', '河流'] },
  { id: 'place-forest-lake', layer: 'locations', name: '森林湖', englishName: 'Forest Lake', x: 74.8, y: 59.8, tone: 'location', tags: ['地点', '湖泊'] },
  { id: 'place-upper-forest-lake', layer: 'locations', name: '上森林湖', englishName: 'Upper Forest Lake', x: 77.4, y: 43.1, tone: 'location', tags: ['地点', '湖泊'] },
  { id: 'place-suburb-lake', layer: 'locations', name: '郊区湖', englishName: 'Suburb Lake', x: 48.1, y: 60.8, tone: 'location', tags: ['地点', '湖泊'] },
  { id: 'place-quiet-river', layer: 'locations', name: '静谧河', englishName: 'Quiet River', x: 36.8, y: 66.9, tone: 'location', tags: ['地点', '河流'] },
  { id: 'place-giant-tree-river', layer: 'locations', name: '巨树河', englishName: 'Giant Tree River', x: 62.7, y: 67.4, tone: 'location', tags: ['地点', '河流'] },

  { id: 'resource-raspberry', layer: 'resources', name: '覆盆子', englishName: 'Raspberry', x: 26.45, y: 54.98, tone: 'resource', tags: ['资源', '浆果'] },
  { id: 'resource-blueberry', layer: 'resources', name: '蓝莓', englishName: 'Blueberry', x: 48.27, y: 44.55, tone: 'resource', tags: ['资源', '浆果'] },
  { id: 'resource-apple', layer: 'resources', name: '苹果', englishName: 'Apple', x: 63.86, y: 44.67, tone: 'resource', tags: ['资源', '水果'] },
  { id: 'resource-big-tree', layer: 'resources', name: '大树', englishName: 'Big Tree', x: 49.11, y: 51, tone: 'resource', tags: ['资源', '树木'] },
  { id: 'resource-stone', layer: 'resources', name: '石头', englishName: 'Stone', x: 49.22, y: 44.78, tone: 'resource', tags: ['资源', '矿石'] },
  { id: 'resource-orange', layer: 'resources', name: '橙子', englishName: 'Orange', x: 35.3, y: 46.49, tone: 'resource', tags: ['资源', '水果'] },
  { id: 'resource-porcini', layer: 'resources', name: '牛肝菌', englishName: 'Porcini', x: 78.64, y: 52.49, tone: 'resource', tags: ['资源', '蘑菇'] },
  { id: 'resource-black-truffle', layer: 'resources', name: '黑松露', englishName: 'Black Truffle', x: 93.15, y: 34.79, tone: 'resource', tags: ['资源', '蘑菇'] },
  { id: 'resource-shiitake', layer: 'resources', name: '香菇', englishName: 'Shiitake', x: 49.61, y: 71.13, tone: 'resource', tags: ['资源', '蘑菇'] },
  { id: 'resource-mousseron', layer: 'resources', name: '蘑菇', englishName: 'Mousseron', x: 22.96, y: 55.73, tone: 'resource', tags: ['资源', '蘑菇'] },
  { id: 'resource-oyster-mushroom', layer: 'resources', name: '平菇', englishName: 'Oyster Mushroom', x: 42.61, y: 19.45, tone: 'resource', tags: ['资源', '蘑菇'] }
].map((pin) => ({
  ...pin,
  summary: layerSummary(pin.layer, pin.name),
  summaryEn: layerSummaryEn(pin.layer, pin.englishName || titleize(pin.id)),
  detail: `地图坐标：${pin.x.toFixed(2)}%, ${pin.y.toFixed(2)}%。`,
  detailEn: `Map coordinates: ${pin.x.toFixed(2)}%, ${pin.y.toFixed(2)}%.`,
  englishName: pin.englishName || titleize(pin.id)
}));

const locationAnchors = Object.fromEntries(
  basePins
    .filter((pin) => pin.layer === 'locations')
    .flatMap((pin) => [
      [pin.name.toLowerCase(), pin],
      [pin.englishName.toLowerCase(), pin]
    ])
);

const anchorAliases: Record<string, string> = {
  'old sea': 'ancient sea',
  'ancient sea': 'ancient sea',
  'whale sea': 'whale sea',
  'zephyr sea': 'calm sea',
  'seaside': 'calm sea',
  'sea fishing': 'the pier',
  'east sea': 'east dock',
  'forest lake': 'forest lake',
  'upper forest lake': 'upper forest lake',
  'suburban lake': 'suburb lake',
  'suburb lake': 'suburb lake',
  'meadow lake': 'meadow lake',
  'hot spring lake': 'hot spring lake',
  'onsen mountain lake': 'hot spring lake',
  'volcano lake': 'volcano lake',
  'shallow river': 'shallow river',
  'quiet river': 'quiet river',
  'tranquil river': 'quiet river',
  'giant tree river': 'giant tree river',
  'aurora river': 'aurora river',
  'flower field': 'flower fields',
  'flower fields': 'flower fields',
  'forest island': 'forest island',
  'forest': 'oak forest',
  'onsen mountain': 'hot spring mountain',
  'hot spring mountain': 'hot spring mountain',
  'fishing village': 'fisherman village',
  'home': 'central plaza',
  'town': 'central plaza'
};

const fallbackAnchor = locationAnchors['central plaza'];

const resolveAnchor = (location: unknown) => {
  const text = String(location ?? '').toLowerCase();
  const alias = Object.keys(anchorAliases).find((key) => text.includes(key));
  return locationAnchors[anchorAliases[alias ?? ''] ?? ''] ?? fallbackAnchor;
};

const collectionLayerMap: Record<string, { layer: MapLayerId; tone: MapPinTone; label: string }> = {
  fish: { layer: 'fish', tone: 'fish', label: '鱼类' },
  insects: { layer: 'insects', tone: 'insect', label: '昆虫' },
  birds: { layer: 'birds', tone: 'bird', label: '鸟类' }
};

const creaturePins = Object.entries(collectionLayerMap).flatMap(([slug, config]) => {
  const collection = heartopiaCollectionMap[slug];
  if (!collection) return [];
  return collection.items.map((item) => {
    const anchor = resolveAnchor(item.location);
    const name = String(item.name ?? titleize(String(item.id)));
    const englishName = titleize(String(item.id ?? name));
    return {
      id: `${config.layer}-${item.id}`,
      layer: config.layer,
      name,
      englishName,
      x: anchor.x,
      y: anchor.y,
      tone: config.tone,
      summary: `${name}：${item.location ?? anchor.name}`,
      summaryEn: `${englishName}: ${String(item.location ?? anchor.englishName)}`,
      detail: [
        item.fishingLevel ? `Lv.${item.fishingLevel}` : '',
        item.catchingLevel ? `Lv.${item.catchingLevel}` : '',
        item.birdwatchLevel ? `Lv.${item.birdwatchLevel}` : '',
        item.weather ? `天气 ${item.weather}` : '',
        item.timeOfDay ? `时间 ${item.timeOfDay}` : ''
      ].filter(Boolean).join(' · '),
      detailEn: [
        item.fishingLevel ? `Lv.${item.fishingLevel}` : '',
        item.catchingLevel ? `Lv.${item.catchingLevel}` : '',
        item.birdwatchLevel ? `Lv.${item.birdwatchLevel}` : '',
        item.weather ? `Weather ${item.weather}` : '',
        item.timeOfDay ? `Time ${item.timeOfDay}` : ''
      ].filter(Boolean).join(' · '),
      tags: [config.label, String(item.location ?? ''), String(item.weather ?? ''), String(item.timeOfDay ?? '')].filter(Boolean)
    } satisfies MapPin;
  });
});

export const mapPins: MapPin[] = [...basePins, ...creaturePins];

export const mapZones: MapZone[] = basePins
  .filter((pin) => pin.layer === 'locations')
  .map((pin) => {
    const type = locationType(`${pin.name} ${pin.englishName}`);
    return {
      id: pin.id,
      name: pin.name,
      englishName: pin.englishName,
      type,
      typeEn: zoneTypeEn(type),
      x: pin.x,
      y: pin.y,
      tone: zoneTone(type),
      summary: `${pin.name} 的地图定位点。`,
      summaryEn: `${pin.englishName} map anchor.`,
      focus: pin.tags,
      focusEn: pin.tags.map(translateTag),
      routeTip: '点击地图或左侧条目可快速定位到这里。',
      routeTipEn: 'Use the map or layer list to jump here quickly.',
      status: '推荐',
      statusEn: 'Recommended'
    };
  });

export const routePlans: RoutePlan[] = [
  {
    title: '新手开图路线',
    titleEn: 'Starter Unlock Route',
    minutes: '15-25 分钟',
    tags: ['开荒', 'NPC', '功能解锁'],
    tagsEn: ['Unlock', 'NPC', 'Core Unlocks'],
    steps: [
      '从中央广场出发，确认导师、商店、活动入口和居民追踪。',
      '沿郊区湖熟悉湖泊钓点，再回到小镇中心整理背包。',
      '最后跑浅水河或静谧河，建立“河/湖/海”三类水域概念。'
    ],
    stepsEn: [
      'Start at Central Plaza and check mentors, shops, event entries, and resident tracking.',
      'Loop through Suburb Lake to learn the first lake fishing anchors, then return to town to sort your bag.',
      'Finish at Shallow River or Quiet River to build the sea, lake, and river mental map.'
    ]
  },
  {
    title: '每日采集短线',
    titleEn: 'Daily Gathering Loop',
    minutes: '8-12 分钟',
    tags: ['日常', '采集', '低压力'],
    tagsEn: ['Daily', 'Foraging', 'Low Pressure'],
    steps: [
      '先处理中央广场和居民街周边近点资源。',
      '接森林湖和巨树河，顺手记录观鸟、木材、花草、湖鱼。',
      '背包满了立刻回家整理，避免素材和任务物品混在一起。'
    ],
    stepsEn: [
      'Clear the easy resources around Central Plaza and Townsfolk Street first.',
      'Then swing through Forest Lake and Giant Tree River for birds, lumber, flowers, and lake fish.',
      'Head home as soon as the bag is full so materials and quest items stay organized.'
    ]
  },
  {
    title: '天气限定钓鱼线',
    titleEn: 'Weather Fish Route',
    minutes: '按天气决定',
    tags: ['钓鱼', '雨天', '彩虹天'],
    tagsEn: ['Fishing', 'Rain', 'Rainbow'],
    steps: [
      '雨天或彩虹天先打开图鉴确认目标鱼。',
      '湖鱼优先郊区湖、草地湖、森林湖；海鱼优先古老之海、平静之海、鲸鱼海。',
      '每次只追 2-3 个目标，记录时间段、天气和鱼影大小。'
    ],
    stepsEn: [
      'On rain or rainbow days, open the collection first and lock the target fish list.',
      'For lake fish, start with Suburb Lake, Meadow Lake, and Forest Lake. For sea fish, start with Ancient Sea, Calm Sea, and Whale Sea.',
      'Track only two or three fish at a time and note time, weather, and shadow size.'
    ]
  },
  {
    title: '海域补图鉴线',
    titleEn: 'Sea Collection Route',
    minutes: '20-30 分钟',
    tags: ['海鱼', '路线', '图鉴'],
    tagsEn: ['Sea Fish', 'Route', 'Collection'],
    steps: [
      '从古老之海开始补常见海鱼，遇到夜晚或彩虹条件鱼先标记。',
      '转鲸鱼海和平静之海，按鱼影大小筛选目标。',
      '最后检查码头是否有海钓出航机会，把出海鱼类单独记录。'
    ],
    stepsEn: [
      'Start in Ancient Sea to clear common sea fish, and mark any night-only or rainbow-only targets immediately.',
      'Move through Whale Sea and Calm Sea, filtering by shadow size as you go.',
      'Check the pier for sea fishing departures at the end and track offshore fish separately.'
    ]
  }
];

export const mapSourceLinks = [
  {
    label: 'Heartopia 官网',
    href: 'https://heartopia.xd.com/'
  },
  {
    label: 'Steam：Heartopia',
    href: 'https://store.steampowered.com/app/4025700/Heartopia/'
  },
  {
    label: 'TapTap：心动小镇',
    href: 'https://www.taptap.cn/app/45213'
  }
];
