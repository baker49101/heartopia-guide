import { heartopiaCollectionMap } from './heartopiaCollections';

export type DatabaseEntry = {
  name: string;
  category: string;
  location: string;
  condition: string;
  usage: string;
  status: '推荐' | '更新中' | '常用';
  sourceUrl: string;
  verifiedAt: string;
};

const collectionCount = (slug: string) => heartopiaCollectionMap[slug]?.items.length ?? 0;

export const fishEntries: DatabaseEntry[] = [
  {
    name: '旧海海鱼记录',
    category: '鱼类',
    location: '旧海',
    condition: '适合记录海鱼、天气和夜晚条件',
    usage: '海鱼图鉴、任务、烹饪素材',
    status: '更新中',
    sourceUrl: 'https://heartopia.xd.com/us',
    verifiedAt: '2026-05-12'
  },
  {
    name: '城郊湖鱼群',
    category: '鱼类',
    location: '城郊湖',
    condition: '湖泊路线起点，适合补基础湖鱼',
    usage: '湖鱼图鉴、日常钓鱼',
    status: '推荐',
    sourceUrl: 'https://www.wywyx.com/gonglue/202408/477276.html',
    verifiedAt: '2026-05-12'
  },
  {
    name: '静河鱼群',
    category: '鱼类',
    location: '静河',
    condition: '河流路线中段，可与霞光河、巨木河连跑',
    usage: '河鱼图鉴、路线补漏',
    status: '更新中',
    sourceUrl: 'https://www.wywyx.com/gonglue/202408/477276.html',
    verifiedAt: '2026-05-12'
  }
];

export const recipeEntries: DatabaseEntry[] = [
  {
    name: '基础料理记录',
    category: '食谱',
    location: '厨房',
    condition: '优先整理常用食材和居民喜好',
    usage: '日常恢复、赠礼、任务',
    status: '更新中',
    sourceUrl: 'https://heartopia.xd.com/us',
    verifiedAt: '2026-05-12'
  },
  {
    name: '鱼类料理',
    category: '食谱',
    location: '厨房',
    condition: '钓鱼后优先检查可烹饪组合',
    usage: '消耗鱼类、补充料理图鉴',
    status: '常用',
    sourceUrl: 'https://heartopia.xd.com/us',
    verifiedAt: '2026-05-12'
  }
];

export const npcEntries: DatabaseEntry[] = [
  {
    name: '居民礼物记录',
    category: 'NPC',
    location: 'Heartopia Town',
    condition: '记录生日、常驻位置、偏好礼物',
    usage: '好感、剧情、日常互动',
    status: '更新中',
    sourceUrl: 'https://store.steampowered.com/app/4025700/Heartopia/',
    verifiedAt: '2026-05-12'
  },
  {
    name: '每日拜访清单',
    category: 'NPC',
    location: '花园街',
    condition: '上线后先拜访常互动居民',
    usage: '好感、剧情、任务提醒',
    status: '推荐',
    sourceUrl: 'https://store.steampowered.com/app/4025700/Heartopia/',
    verifiedAt: '2026-05-12'
  }
];

export const databaseGroups = [
  {
    title: '鱼类图鉴',
    href: '/database/fish/',
    count: collectionCount('fish'),
    description: '地点、等级、天气、时间、鱼影和售价完整整理。'
  },
  {
    title: '食谱图鉴',
    href: '/database/recipes/',
    count: collectionCount('recipes'),
    description: '食材、解锁、成本、利润、售价和能量一页查询。'
  },
  {
    title: '角色图鉴',
    href: '/database/characters/',
    count: collectionCount('characters'),
    description: '记录角色位置、解锁、商店、礼物偏好和互动重点。'
  }
];

export const collectionGroups = [
  { title: '鱼类', titleKey: 'collection.fish', category: '收集', categoryKey: 'database.collecting', href: '/database/fish/', icon: 'Fish', count: collectionCount('fish'), description: '地点、等级、天气、时间、鱼影和售价。', descriptionKey: 'collection.desc.fish' },
  { title: '昆虫', titleKey: 'collection.insects', category: '收集', categoryKey: 'database.collecting', href: '/database/insects/', icon: 'Bug', count: collectionCount('insects'), description: '捕虫等级、地点、类型、天气、时间和售价。', descriptionKey: 'collection.desc.insects' },
  { title: '鸟类', titleKey: 'collection.birds', category: '收集', categoryKey: 'database.collecting', href: '/database/birds/', icon: 'Bird', count: collectionCount('birds'), description: '观鸟等级、地点、天气、时间和售价。', descriptionKey: 'collection.desc.birds' },
  { title: '农作物', titleKey: 'collection.crops', category: '生活', categoryKey: 'database.life', href: '/database/crops/', icon: 'Sprout', count: collectionCount('crops'), description: '成长时间、园艺等级、种子价格和成品售价。', descriptionKey: 'collection.desc.crops' },
  { title: '花卉', titleKey: 'collection.flowers', category: '生活', categoryKey: 'database.life', href: '/database/flowers/', icon: 'Flower2', count: collectionCount('flowers'), description: '成长时间、园艺等级、种子价格和花卉售价。', descriptionKey: 'collection.desc.flowers' },
  { title: '采集物', titleKey: 'collection.forage', category: '收集', categoryKey: 'database.collecting', href: '/database/forageables/', icon: 'Leaf', count: collectionCount('forageables'), description: '采集地点、售价、购买价和能量回复。', descriptionKey: 'collection.desc.forage' },
  { title: '食谱', titleKey: 'collection.recipes', category: '生活', categoryKey: 'database.life', href: '/database/recipes/', icon: 'CookingPot', count: collectionCount('recipes'), description: '食材、成本、售价、利润、能量和解锁方式。', descriptionKey: 'collection.desc.recipes' },
  { title: '角色', titleKey: 'collection.characters', category: '居民', categoryKey: 'database.social', href: '/database/characters/', icon: 'Users', count: collectionCount('characters'), description: '位置、解锁、商店、礼物和互动重点。', descriptionKey: 'collection.desc.characters' },
  { title: '野生动物', titleKey: 'collection.wildlife', category: '收集', categoryKey: 'database.collecting', href: '/database/wildlife/', icon: 'PawPrint', count: collectionCount('wildlife'), description: '出没区域、喜爱食物和喜爱天气。', descriptionKey: 'collection.desc.wildlife' },
  { title: '宠物', titleKey: 'collection.pets', category: '生活', categoryKey: 'database.life', href: '/database/pets/', icon: 'Heart', count: collectionCount('pets'), description: '猫狗品种、体型、喜爱食物和特殊能力。', descriptionKey: 'collection.desc.pets' },
  { title: '地图', titleKey: 'collection.map', category: '工具', categoryKey: 'database.tools', href: '/maps/', icon: 'Map', count: 13, description: '互动地图、区域筛选和跑图路线。', descriptionKey: 'collection.desc.map' },
  { title: '追踪器', titleKey: 'collection.tracker', category: '工具', categoryKey: 'database.tools', href: '/tracker/', icon: 'ClipboardCheck', count: 1, description: '把今日目标放进浏览器清单。', descriptionKey: 'collection.desc.tracker' },
  { title: '成就', titleKey: 'collection.achievements', category: '工具', categoryKey: 'database.tools', href: '/database/achievements/', icon: 'Trophy', count: collectionCount('achievements'), description: '分类、解锁条件、攻略技巧、隐藏线索和奖励头衔。', descriptionKey: 'collection.desc.achievements' },
  { title: '乐谱', titleKey: 'collection.music', category: '生活', categoryKey: 'database.life', href: '/database/music/', icon: 'Music', count: collectionCount('music'), description: '曲目、作者、乐器、BPM、难度和简谱音符。', descriptionKey: 'collection.desc.music' },
  { title: '礼包码', titleKey: 'collection.codes', category: '工具', categoryKey: 'database.tools', href: '/activities/', icon: 'Gift', count: 1, description: '活动兑换、奖励和有效期提醒。', descriptionKey: 'collection.desc.codes' }
];
