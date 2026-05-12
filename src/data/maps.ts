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
