export type MapZone = {
  id: string;
  name: string;
  type: '海域' | '湖泊' | '河流' | '功能区';
  x: number;
  y: number;
  tone: 'sea' | 'lake' | 'river' | 'town';
  summary: string;
  focus: string[];
  routeTip: string;
  status: '推荐' | '更新中';
  sourceUrl: string;
};

export type RoutePlan = {
  title: string;
  minutes: string;
  tags: string[];
  steps: string[];
};

export type MapLayerSummary = {
  id: string;
  label: string;
  count: number;
  description: string;
};

export const sourceInteractiveMapUrl = 'https://webresources.cc/heartopia/zh.html';

export const mapLayerSummaries: MapLayerSummary[] = [
  { id: 'locations', label: '地点', count: 34, description: '城镇、地标、水域与可导航区域。' },
  { id: 'npcs', label: '角色', count: 20, description: '角色位置、导师、商店与互动对象。' },
  { id: 'animals', label: '野生动物', count: 8, description: '野生动物刷新位置、天气和食物偏好。' },
  { id: 'bus', label: '巴士站', count: 8, description: '快速移动节点，适合规划长路线。' },
  { id: 'shops', label: '商店', count: 4, description: '服装、家具、宠物、书店等功能点。' },
  { id: 'resources', label: '资源', count: 11, description: '浆果、水果、蘑菇、树木、石头等采集类资源。' },
  { id: 'creatures', label: '生物图鉴', count: 206, description: '鱼类、昆虫和鸟类位置条件，用于收集补漏。' }
];

export const mapZones: MapZone[] = [
  {
    id: 'flower-street',
    name: '花园街',
    type: '功能区',
    x: 46,
    y: 49,
    tone: 'town',
    summary: '小镇日常起点，适合查看 NPC、商店、导师和活动入口。',
    focus: ['NPC 追踪', '商店', '活动入口'],
    routeTip: '上线后先从这里确认公告、居民位置和今日任务，再决定跑图方向。',
    status: '推荐',
    sourceUrl: 'https://www.wywyx.com/gonglue/202408/477276.html'
  },
  {
    id: 'old-sea',
    name: '旧海',
    type: '海域',
    x: 20,
    y: 68,
    tone: 'sea',
    summary: '海鱼路线起点之一，适合记录夜晚、彩虹天和特殊鱼影。',
    focus: ['海鱼', '夜晚条件', '彩虹天'],
    routeTip: '做海鱼图鉴时，把旧海和东海放在同一轮，减少跨图切换。',
    status: '更新中',
    sourceUrl: 'https://www.wywyx.com/gonglue/202408/477276.html'
  },
  {
    id: 'whale-sea',
    name: '鲸鱼海',
    type: '海域',
    x: 50,
    y: 74,
    tone: 'sea',
    summary: '常用海域钓点，适合补普通海鱼和海马类记录。',
    focus: ['海鱼', '海马', '蓝闪'],
    routeTip: '适合作为海钓前的补图鉴点，顺手记录时间段和天气。',
    status: '更新中',
    sourceUrl: 'https://www.taptap.cn/app/45213/strategy/entity-collection/265532'
  },
  {
    id: 'breeze-sea',
    name: '缓风海',
    type: '海域',
    x: 78,
    y: 62,
    tone: 'sea',
    summary: '海域路线东侧节点，适合整理中大型海鱼和天气条件。',
    focus: ['海鱼', '雨天', '大型鱼影'],
    routeTip: '彩虹天或雨天优先检查该区域，再补普通全天鱼。',
    status: '更新中',
    sourceUrl: 'https://www.taptap.cn/app/45213/strategy/entity-collection/265532'
  },
  {
    id: 'east-sea',
    name: '东海',
    type: '海域',
    x: 86,
    y: 36,
    tone: 'sea',
    summary: '适合记录下午、雨天、彩虹天差异的海域点位。',
    focus: ['海虾', '时间段', '天气限制'],
    routeTip: '和缓风海连跑，按天气筛选目标鱼，避免盲钓。',
    status: '更新中',
    sourceUrl: 'https://www.wywyx.com/gonglue/202408/477276.html'
  },
  {
    id: 'suburban-lake',
    name: '城郊湖',
    type: '湖泊',
    x: 32,
    y: 38,
    tone: 'lake',
    summary: '湖鱼路线起点，适合补基础湖鱼和雨天记录。',
    focus: ['湖鱼', '雨天', '贻贝'],
    routeTip: '湖鱼收集从城郊湖开始，再转草原湖和森林湖，路线更顺。',
    status: '推荐',
    sourceUrl: 'https://www.wywyx.com/gonglue/202408/477276.html'
  },
  {
    id: 'grassland-lake',
    name: '草原湖',
    type: '湖泊',
    x: 55,
    y: 28,
    tone: 'lake',
    summary: '适合整理草原侧湖鱼、全天鱼和特殊天气鱼。',
    focus: ['湖鱼', '草原路线', '彩虹天'],
    routeTip: '晴天补普通图鉴，雨天和彩虹天只盯条件鱼。',
    status: '更新中',
    sourceUrl: 'https://www.wywyx.com/gonglue/202408/477276.html'
  },
  {
    id: 'hot-spring-lake',
    name: '温泉山湖',
    type: '湖泊',
    x: 72,
    y: 24,
    tone: 'lake',
    summary: '山地区域湖泊，适合和温泉山采集路线合并记录。',
    focus: ['湖鱼', '山地采集', '凌晨条件'],
    routeTip: '跑山地采集时顺手钓几竿，记录鱼影大小更省时间。',
    status: '更新中',
    sourceUrl: 'https://www.wywyx.com/gonglue/202408/477276.html'
  },
  {
    id: 'forest-lake',
    name: '森林湖',
    type: '湖泊',
    x: 68,
    y: 48,
    tone: 'lake',
    summary: '森林区域湖泊，适合放森林采集、鸟类观察和湖鱼记录。',
    focus: ['湖鱼', '森林采集', '观鸟'],
    routeTip: '森林湖适合放在傍晚路线里，钓鱼和观鸟一起做。',
    status: '更新中',
    sourceUrl: 'https://www.wywyx.com/gonglue/202408/477276.html'
  },
  {
    id: 'sunset-river',
    name: '霞光河',
    type: '河流',
    x: 27,
    y: 51,
    tone: 'river',
    summary: '河鱼点位之一，适合记录常见河鱼与蓝闪条件。',
    focus: ['河鱼', '蓝闪', '日常补图鉴'],
    routeTip: '河流路线建议从西侧往小镇中心走，遇到鱼影就记录位置。',
    status: '更新中',
    sourceUrl: 'https://www.wywyx.com/gonglue/202408/477276.html'
  },
  {
    id: 'quiet-river',
    name: '静河',
    type: '河流',
    x: 44,
    y: 58,
    tone: 'river',
    summary: '公开资料中列为河鱼区域，适合补中低等级河鱼。',
    focus: ['河鱼', '彩虹天', '青虾'],
    routeTip: '如果目标是河鱼，静河可以和霞光河、巨木河连成一条短线。',
    status: '更新中',
    sourceUrl: 'https://www.wywyx.com/gonglue/202408/477276.html'
  },
  {
    id: 'giant-tree-river',
    name: '巨木河',
    type: '河流',
    x: 62,
    y: 56,
    tone: 'river',
    summary: '森林/巨木方向河流，适合记录河鱼与周边采集点。',
    focus: ['河鱼', '森林路线', '彩虹天'],
    routeTip: '森林湖之后接巨木河，能把湖鱼、河鱼、采集压进一轮。',
    status: '更新中',
    sourceUrl: 'https://www.wywyx.com/gonglue/202408/477276.html'
  },
  {
    id: 'diving-river',
    name: '潜水河',
    type: '河流',
    x: 76,
    y: 43,
    tone: 'river',
    summary: '公开资料中出现的河流点位，适合标注特殊天气和补漏鱼。',
    focus: ['河鱼', '雨天', '补漏'],
    routeTip: '只在目标鱼需要时专门前往，普通日常可放在长路线末尾。',
    status: '更新中',
    sourceUrl: 'https://www.wywyx.com/gonglue/202408/477276.html'
  },
  {
    id: 'sea-party',
    name: '海钓出航',
    type: '功能区',
    x: 39,
    y: 84,
    tone: 'town',
    summary: '适合单独整理出海鱼类和海钓收获。',
    focus: ['海钓', '派对', '金色鱼影'],
    routeTip: '每天先确认海钓时间，再决定普通海域路线是否缩短。',
    status: '更新中',
    sourceUrl: 'https://www.wywyx.com/gonglue/202408/477276.html'
  }
];

export const mapPins = [
  ...mapZones.map((zone) => ({
    id: zone.id,
    name: zone.name,
    layer: 'locations',
    x: zone.x,
    y: zone.y,
    tone: zone.tone,
    summary: zone.summary,
    detail: zone.routeTip,
    tags: [zone.type, ...zone.focus]
  })),
  { id: 'npc-vanya', name: '瓦尼亚', layer: 'npcs', x: 53, y: 76, tone: 'npc', summary: '钓鱼导师，提供钓鱼相关教学和海钓入口。', detail: '适合与海钓、旧海和码头路线一起查看。', tags: ['角色', '导师', '钓鱼'] },
  { id: 'npc-blanc', name: '布兰克', layer: 'npcs', x: 44, y: 45, tone: 'npc', summary: '园艺导师，关联种子、花卉和农作物路线。', detail: '跑花田或农田前先确认园艺目标。', tags: ['角色', '导师', '园艺'] },
  { id: 'npc-bob', name: '鲍勃', layer: 'npcs', x: 49, y: 49, tone: 'npc', summary: '小镇中心常见居民点位。', detail: '适合放进每日拜访和礼物清单。', tags: ['角色', '居民'] },
  { id: 'npc-alara', name: '阿塔拉', layer: 'npcs', x: 59, y: 49, tone: 'npc', summary: '中心区附近角色点位。', detail: '和中央广场、居民街一起跑更顺。', tags: ['角色', '居民'] },
  { id: 'npc-joan', name: '琼女士', layer: 'npcs', x: 52, y: 54, tone: 'shop', summary: '宠物店相关角色，关联猫狗领养。', detail: '查询宠物图鉴后，可从这里安排领养目标。', tags: ['角色', '宠物店'] },
  { id: 'npc-will', name: 'Will', layer: 'npcs', x: 43, y: 87, tone: 'npc', summary: '灯塔守护者，位于渔村灯塔方向。', detail: '和旧海、灯塔、海钓路线放在同一轮。', tags: ['角色', '灯塔'] },
  { id: 'shop-fashion', name: '服装店', layer: 'shops', x: 50, y: 48, tone: 'shop', summary: '小镇中心功能商店。', detail: '适合和角色拜访、活动入口一起查看。', tags: ['商店', '小镇'] },
  { id: 'shop-furniture', name: '家具店', layer: 'shops', x: 56, y: 50, tone: 'shop', summary: '家具和装饰相关功能点。', detail: '做家园布置或家具采购时优先查看。', tags: ['商店', '家具'] },
  { id: 'shop-pet', name: '宠物店', layer: 'shops', x: 53, y: 56, tone: 'shop', summary: '猫咪、狗狗与宠物家具相关功能点。', detail: '宠物品种每日刷新，可和宠物图鉴一起使用。', tags: ['商店', '宠物'] },
  { id: 'shop-book', name: '书店', layer: 'shops', x: 48, y: 52, tone: 'shop', summary: '书籍和生活功能相关商店。', detail: '经过中央广场时顺手确认。', tags: ['商店'] },
  { id: 'bus-onsen', name: '温泉山巴士', layer: 'bus', x: 63, y: 18, tone: 'bus', summary: '温泉山方向快速移动点。', detail: '适合温泉山湖、岩石悬崖和山地采集。', tags: ['巴士', '温泉山'] },
  { id: 'bus-forest', name: '森林巴士', layer: 'bus', x: 78, y: 43, tone: 'bus', summary: '森林与上森林湖方向快速移动点。', detail: '跑森林湖、巨木河和森林采集时优先使用。', tags: ['巴士', '森林'] },
  { id: 'bus-ranch', name: '牧场巴士', layer: 'bus', x: 27, y: 62, tone: 'bus', summary: '西南草地和花田方向快速移动点。', detail: '适合花田、草地湖和西侧海岸路线。', tags: ['巴士', '花田'] },
  { id: 'bus-village', name: '渔村巴士', layer: 'bus', x: 48, y: 80, tone: 'bus', summary: '渔村与灯塔方向快速移动点。', detail: '适合旧海、灯塔和海钓前置路线。', tags: ['巴士', '渔村'] },
  { id: 'resource-berries', name: '浆果群', layer: 'resources', x: 35, y: 35, tone: 'resource', summary: '日常采集资源点。', detail: '适合补料理素材或低压力日常采集。', tags: ['资源', '采集'] },
  { id: 'resource-mushroom', name: '蘑菇带', layer: 'resources', x: 68, y: 53, tone: 'resource', summary: '森林附近常见采集目标。', detail: '和森林湖、巨木河、观鸟路线合并。', tags: ['资源', '森林'] },
  { id: 'resource-rocks', name: '石头矿点', layer: 'resources', x: 66, y: 20, tone: 'resource', summary: '山地区域资源点。', detail: '温泉山路线中顺路检查。', tags: ['资源', '矿物'] },
  { id: 'animal-capybara', name: '水豚', layer: 'animals', x: 58, y: 62, tone: 'animal', summary: '野生动物图鉴记录点。', detail: '雨天偏好目标，可搭配静谧河路线。', tags: ['野生动物', '雨天'] },
  { id: 'animal-deer', name: '鹿', layer: 'animals', x: 72, y: 41, tone: 'animal', summary: '森林方向野生动物。', detail: '晴天优先检查森林和鹿塔附近。', tags: ['野生动物', '晴天'] },
  { id: 'animal-ferret', name: '雪貂', layer: 'animals', x: 25, y: 72, tone: 'animal', summary: '桥边与河岸附近野生动物。', detail: '彩虹天优先加入路线。', tags: ['野生动物', '彩虹天'] },
  { id: 'creature-fish', name: '鱼类点位', layer: 'creatures', x: 38, y: 84, tone: 'creature', summary: '鱼类图鉴共 90 条，按水域、天气、时间和鱼影筛选。', detail: '点击图鉴鱼类可查完整售价和条件。', tags: ['生物', '鱼类'] },
  { id: 'creature-insect', name: '昆虫点位', layer: 'creatures', x: 68, y: 33, tone: 'creature', summary: '昆虫图鉴共 69 条，重点看天气、时间和出现区域。', detail: '彩虹和雨天限定目标建议单独追踪。', tags: ['生物', '昆虫'] },
  { id: 'creature-bird', name: '鸟类点位', layer: 'creatures', x: 80, y: 28, tone: 'creature', summary: '鸟类图鉴共 66 条，适合与采集路线合并。', detail: '观鸟路线可从温泉山、森林湖和花田开始。', tags: ['生物', '鸟类'] }
];

export const routePlans: RoutePlan[] = [
  {
    title: '新手开图路线',
    minutes: '15-25 分钟',
    tags: ['开荒', 'NPC', '功能解锁'],
    steps: [
      '从花园街出发，先确认导师、商店、活动入口和居民追踪。',
      '沿城郊湖熟悉湖泊钓点，再回到小镇中心整理背包。',
      '最后跑一段霞光河或静河，建立“河/湖/海”三类水域概念。'
    ]
  },
  {
    title: '每日采集短线',
    minutes: '8-12 分钟',
    tags: ['日常', '采集', '低压力'],
    steps: [
      '先处理小镇中心周边的近点资源，不追求全图清空。',
      '接森林湖和巨木河，顺手记录观鸟、木材、花草、湖鱼。',
      '背包满了立刻回家整理，避免素材和任务物品混在一起。'
    ]
  },
  {
    title: '天气限定钓鱼线',
    minutes: '按天气决定',
    tags: ['钓鱼', '雨天', '彩虹天'],
    steps: [
      '雨天或彩虹天先打开图鉴确认目标鱼，不盲跑所有区域。',
      '湖鱼优先城郊湖、草原湖、森林湖；海鱼优先旧海、缓风海、东海。',
      '每次只追 2-3 个目标，记录时间段、天气和鱼影大小。'
    ]
  },
  {
    title: '海域补图鉴线',
    minutes: '20-30 分钟',
    tags: ['海鱼', '路线', '图鉴'],
    steps: [
      '从旧海开始补常见海鱼，遇到夜晚或彩虹条件鱼先标记。',
      '转鲸鱼海和缓风海，按鱼影大小筛选目标。',
      '最后检查是否有海钓出航机会，把出海鱼类单独记录。'
    ]
  }
];

export const mapSourceLinks = [
  {
    label: 'Heartopia.live：高清互动地图',
    href: 'https://www.heartopia.live/zh/world-map/'
  },
  {
    label: '玩一玩：心动小镇鱼类分布图',
    href: 'https://www.wywyx.com/gonglue/202408/477276.html'
  },
  {
    label: 'TapTap：钓鱼-鱼类观察',
    href: 'https://www.taptap.cn/app/45213/strategy/entity-collection/265532'
  },
  {
    label: 'Heartopia.live：采集攻略',
    href: 'https://www.heartopia.live/zh/forageables/'
  }
];
