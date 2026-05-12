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
    count: fishEntries.length,
    description: '按海域、湖泊、河流整理，适合做收集路线。'
  },
  {
    title: '食谱图鉴',
    href: '/database/recipes/',
    count: recipeEntries.length,
    description: '整理常用料理、食材组合和赠礼用途。'
  },
  {
    title: 'NPC 好感',
    href: '/database/npcs/',
    count: npcEntries.length,
    description: '记录居民位置、礼物偏好和每日拜访顺序。'
  }
];

export const collectionGroups = [
  { title: '鱼类', titleKey: 'collection.fish', category: '收集', categoryKey: 'database.collecting', href: '/database/fish/', icon: 'Fish', count: 148, description: '海域、湖泊、河流和海钓路线。', descriptionKey: 'collection.desc.fish' },
  { title: '昆虫', titleKey: 'collection.insects', category: '收集', categoryKey: 'database.collecting', href: '/database/', icon: 'Bug', count: 88, description: '按天气、时间和出现区域整理。', descriptionKey: 'collection.desc.insects' },
  { title: '鸟类', titleKey: 'collection.birds', category: '收集', categoryKey: 'database.collecting', href: '/database/', icon: 'Bird', count: 54, description: '观鸟路线、刷新区域和拍摄提示。', descriptionKey: 'collection.desc.birds' },
  { title: '农作物', titleKey: 'collection.crops', category: '生活', categoryKey: 'database.life', href: '/database/', icon: 'Sprout', count: 42, description: '种植、成熟时间和料理用途。', descriptionKey: 'collection.desc.crops' },
  { title: '花卉', titleKey: 'collection.flowers', category: '生活', categoryKey: 'database.life', href: '/database/', icon: 'Flower2', count: 64, description: '颜色、杂交、装饰和赠礼用途。', descriptionKey: 'collection.desc.flowers' },
  { title: '采集物', titleKey: 'collection.forage', category: '收集', categoryKey: 'database.collecting', href: '/guides/foraging/', icon: 'Leaf', count: 76, description: '木材、矿物、花草和食材路线。', descriptionKey: 'collection.desc.forage' },
  { title: '食谱', titleKey: 'collection.recipes', category: '生活', categoryKey: 'database.life', href: '/database/recipes/', icon: 'CookingPot', count: 120, description: '食材组合、解锁方式和赠礼用途。', descriptionKey: 'collection.desc.recipes' },
  { title: '居民', titleKey: 'collection.characters', category: '居民', categoryKey: 'database.social', href: '/database/npcs/', icon: 'Users', count: 32, description: '生日、位置、礼物和互动重点。', descriptionKey: 'collection.desc.characters' },
  { title: '野生动物', titleKey: 'collection.wildlife', category: '收集', categoryKey: 'database.collecting', href: '/database/', icon: 'PawPrint', count: 36, description: '出没区域、互动方式和记录路线。', descriptionKey: 'collection.desc.wildlife' },
  { title: '宠物', titleKey: 'collection.pets', category: '生活', categoryKey: 'database.life', href: '/database/', icon: 'Heart', count: 28, description: '获取方式、照料和陪伴记录。', descriptionKey: 'collection.desc.pets' },
  { title: '地图', titleKey: 'collection.map', category: '工具', categoryKey: 'database.tools', href: '/maps/', icon: 'Map', count: 13, description: '互动地图、区域筛选和跑图路线。', descriptionKey: 'collection.desc.map' },
  { title: '追踪器', titleKey: 'collection.tracker', category: '工具', categoryKey: 'database.tools', href: '/tracker/', icon: 'ClipboardCheck', count: 1, description: '把今日目标放进浏览器清单。', descriptionKey: 'collection.desc.tracker' },
  { title: '成就', titleKey: 'collection.achievements', category: '工具', categoryKey: 'database.tools', href: '/database/', icon: 'Trophy', count: 80, description: '长期目标、阶段奖励和完成路线。', descriptionKey: 'collection.desc.achievements' },
  { title: '音乐', titleKey: 'collection.music', category: '生活', categoryKey: 'database.life', href: '/database/', icon: 'Music', count: 45, description: '曲目、获取方式和收藏进度。', descriptionKey: 'collection.desc.music' },
  { title: '礼包码', titleKey: 'collection.codes', category: '工具', categoryKey: 'database.tools', href: '/activities/', icon: 'Gift', count: 1, description: '活动兑换、奖励和有效期提醒。', descriptionKey: 'collection.desc.codes' }
];
