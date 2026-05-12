export type DatabaseEntry = {
  name: string;
  category: string;
  location: string;
  condition: string;
  usage: string;
  status: '已核验' | '待核验' | '模板';
  sourceUrl: string;
  verifiedAt: string;
};

export const fishEntries: DatabaseEntry[] = [
  {
    name: '鱼类资料模板',
    category: '鱼类',
    location: '待补充',
    condition: '记录时间、天气、季节与水域',
    usage: '收集、任务、烹饪或出售',
    status: '模板',
    sourceUrl: 'https://heartopia.xd.com/us',
    verifiedAt: '2026-05-12'
  }
];

export const recipeEntries: DatabaseEntry[] = [
  {
    name: '食谱资料模板',
    category: '食谱',
    location: '待补充',
    condition: '记录食材、厨具、解锁方式',
    usage: '恢复、赠礼、任务或收藏',
    status: '模板',
    sourceUrl: 'https://heartopia.xd.com/us',
    verifiedAt: '2026-05-12'
  }
];

export const npcEntries: DatabaseEntry[] = [
  {
    name: '居民资料模板',
    category: 'NPC',
    location: 'Heartopia Town',
    condition: '记录生日、常驻位置、偏好礼物',
    usage: '好感、剧情、日常互动',
    status: '模板',
    sourceUrl: 'https://store.steampowered.com/app/4025700/Heartopia/',
    verifiedAt: '2026-05-12'
  }
];

export const databaseGroups = [
  {
    title: '鱼类图鉴',
    href: '/database/fish/',
    count: fishEntries.length,
    description: '先把字段搭好，后续逐条补充并标注来源。'
  },
  {
    title: '食谱图鉴',
    href: '/database/recipes/',
    count: recipeEntries.length,
    description: '适合沉淀食材组合、解锁条件和居民喜好。'
  },
  {
    title: 'NPC 好感',
    href: '/database/npcs/',
    count: npcEntries.length,
    description: '用于整理居民互动、礼物和剧情节点。'
  }
];
