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
