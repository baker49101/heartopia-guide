export type HeartopiaFieldConfig = {
  key: string;
  label: string;
  kind?: 'stars' | 'long';
  prefix?: string;
};

export type HeartopiaFacetConfig = {
  key: string;
  label: string;
};

export type HeartopiaCollection = {
  slug: string;
  title: string;
  navTitle: string;
  icon: string;
  category: string;
  countLabel: string;
  sourcePath: string;
  sourceUrl: string;
  sourceFetchedAt: string;
  description: string;
  tip: string;
  facets: HeartopiaFacetConfig[];
  sortKeys: HeartopiaFacetConfig[];
  fields: HeartopiaFieldConfig[];
  items: Record<string, any>[];
};

export const HEARTOPIA_LIVE_BASE = "https://www.heartopia.live";

export const heartopiaCollections = [
  {
    "slug": "fish",
    "title": "鱼类图鉴",
    "navTitle": "鱼类",
    "icon": "Fish",
    "category": "收集",
    "countLabel": "种鱼类",
    "sourcePath": "/zh/fish/",
    "sourceUrl": "https://www.heartopia.live/zh/fish/",
    "sourceFetchedAt": "2026-05-12",
    "description": "完整鱼类数据库，按地点、等级、鱼类类型、鱼影大小、天气、时间与 1-5 星售价整理。",
    "tip": "先按天气与时间筛目标，再用鱼影大小减少无效钓点；活动鱼建议单独追踪。",
    "facets": [
      {
        "key": "location",
        "label": "地点"
      },
      {
        "key": "fishType",
        "label": "类型"
      },
      {
        "key": "shadowSize",
        "label": "鱼影"
      },
      {
        "key": "activity",
        "label": "活动"
      }
    ],
    "sortKeys": [
      {
        "key": "name",
        "label": "名称"
      },
      {
        "key": "fishingLevel",
        "label": "等级"
      },
      {
        "key": "location",
        "label": "地点"
      }
    ],
    "fields": [
      {
        "key": "fishingLevel",
        "label": "钓鱼等级",
        "prefix": "Lv."
      },
      {
        "key": "fishType",
        "label": "类型"
      },
      {
        "key": "location",
        "label": "地点"
      },
      {
        "key": "shadowSize",
        "label": "鱼影大小"
      },
      {
        "key": "weather",
        "label": "天气"
      },
      {
        "key": "timeOfDay",
        "label": "时间"
      },
      {
        "key": "activity",
        "label": "活动"
      },
      {
        "key": "prices",
        "label": "售价",
        "kind": "stars"
      }
    ],
    "items": [
      {
        "id": "anglerfish",
        "name": "安康鱼",
        "location": "Sea Fishing",
        "fishingLevel": 2,
        "fishType": "Sea",
        "shadowSize": "Golden",
        "activity": "Daily",
        "weather": "🌞, 🌧️, 🌈",
        "timeOfDay": "🌙, 🌅, ☀️, 🌇",
        "prices": {
          "1star": 320,
          "2star": 480,
          "3star": 640,
          "4star": 1280,
          "5star": 2560
        },
        "_meta": {
          "source": "Excel Guide Jan 12",
          "confidence": "high",
          "translationSource": "existing"
        },
        "sourceUrl": "https://www.heartopia.live/zh/fish/"
      },
      {
        "id": "arctic-char",
        "name": "北极红点鲑",
        "location": "Forest Lake",
        "fishingLevel": 10,
        "fishType": "Lake",
        "shadowSize": "M",
        "activity": "Daily ",
        "weather": "🌧️, 🌈",
        "timeOfDay": "☀️, 🌇",
        "prices": {
          "1star": 610,
          "2star": 915,
          "3star": 1220,
          "4star": 2440,
          "5star": 4880
        },
        "_meta": {
          "source": "Excel Guide Jan 12",
          "confidence": "high",
          "translationSource": "existing"
        },
        "sourceUrl": "https://www.heartopia.live/zh/fish/"
      },
      {
        "id": "atlantic-mackerel",
        "name": "大西洋鲭鱼",
        "location": "Whale Sea",
        "fishingLevel": 5,
        "fishType": "Sea",
        "shadowSize": "S",
        "activity": "Daily",
        "weather": "🌈, 🌞",
        "timeOfDay": "☀️, 🌇",
        "prices": {
          "1star": 150,
          "2star": 225,
          "3star": 300,
          "4star": 600,
          "5star": 1200
        },
        "_meta": {
          "source": "Excel Guide Jan 12",
          "confidence": "high",
          "translationSource": "existing"
        },
        "sourceUrl": "https://www.heartopia.live/zh/fish/"
      },
      {
        "id": "atlantic-pygmy-octopus",
        "name": "大西洋侏儒章鱼",
        "location": "Zephyr Sea",
        "fishingLevel": 2,
        "fishType": "Sea",
        "shadowSize": "S",
        "activity": "Daily",
        "weather": "🌞, 🌧️, 🌈",
        "timeOfDay": "🌙, 🌅, ☀️, 🌇",
        "prices": {
          "1star": 150,
          "2star": 225,
          "3star": 300,
          "4star": 600,
          "5star": 1200
        },
        "_meta": {
          "source": "Excel Guide Jan 12",
          "confidence": "high",
          "translationSource": "existing"
        },
        "sourceUrl": "https://www.heartopia.live/zh/fish/"
      },
      {
        "id": "atlantic-salmon",
        "name": "大西洋鲑",
        "location": "Whale Sea",
        "fishingLevel": 3,
        "fishType": "Sea",
        "shadowSize": "M",
        "activity": "Daily",
        "weather": "🌞, 🌧️, 🌈",
        "timeOfDay": "☀️, 🌇, 🌙",
        "prices": {
          "1star": 155,
          "2star": 232,
          "3star": 310,
          "4star": 620,
          "5star": 1240
        },
        "_meta": {
          "source": "Excel Guide Jan 12",
          "confidence": "high",
          "translationSource": "existing"
        },
        "sourceUrl": "https://www.heartopia.live/zh/fish/"
      },
      {
        "id": "beltfish",
        "name": "带鱼",
        "location": "Zephyr Sea",
        "fishingLevel": 1,
        "fishType": "Sea",
        "shadowSize": "L",
        "activity": "Daily",
        "weather": "🌞, 🌧️, 🌈",
        "timeOfDay": "🌙, 🌅, ☀️, 🌇",
        "prices": {
          "1star": 105,
          "2star": 157,
          "3star": 210,
          "4star": 420,
          "5star": 840
        },
        "_meta": {
          "source": "Excel Guide Jan 12",
          "confidence": "high",
          "translationSource": "existing"
        },
        "sourceUrl": "https://www.heartopia.live/zh/fish/"
      },
      {
        "id": "blackspot-seabream",
        "name": "佛罗伦萨鲷",
        "location": "Zephyr Sea",
        "fishingLevel": 7,
        "fishType": "Sea",
        "shadowSize": "M",
        "activity": "Daily",
        "weather": "🌧️, 🌈",
        "timeOfDay": "🌙, 🌇",
        "prices": {
          "1star": 230,
          "2star": 345,
          "3star": 460,
          "4star": 920,
          "5star": 1840
        },
        "_meta": {
          "source": "Excel Guide Jan 12",
          "confidence": "high",
          "translationSource": "existing"
        },
        "sourceUrl": "https://www.heartopia.live/zh/fish/"
      },
      {
        "id": "bluegill",
        "name": "蓝鳃太阳鱼",
        "location": "Onsen Mountain Lake",
        "fishingLevel": 10,
        "fishType": "Lake",
        "shadowSize": "S",
        "activity": "Daily",
        "weather": "🌞, 🌈",
        "timeOfDay": "🌙, 🌇",
        "prices": {
          "1star": 395,
          "3star": 790,
          "2star": 592,
          "4star": 1580,
          "5star": 3160
        },
        "_meta": {
          "source": "Excel Guide Jan 12",
          "confidence": "high",
          "translationSource": "existing"
        },
        "sourceUrl": "https://www.heartopia.live/zh/fish/"
      },
      {
        "id": "blue-ero-crayfish",
        "name": "蓝螯虾",
        "location": "Forest Lake",
        "fishingLevel": 8,
        "fishType": "Lake",
        "shadowSize": "S",
        "activity": "Daily",
        "weather": "🌞, 🌧️, 🌈",
        "timeOfDay": "🌇, 🌙",
        "prices": {
          "1star": 250,
          "2star": 375,
          "3star": 500,
          "4star": 1000,
          "5star": 2000
        },
        "_meta": {
          "source": "Excel Guide Jan 12",
          "confidence": "high",
          "translationSource": "existing"
        },
        "sourceUrl": "https://www.heartopia.live/zh/fish/"
      },
      {
        "id": "bluefin-tuna",
        "name": "蓝鳍金枪鱼",
        "location": "Zephyr Sea",
        "fishingLevel": 9,
        "fishType": "Sea",
        "shadowSize": "L",
        "activity": "Daily",
        "weather": "🌈",
        "timeOfDay": "🌅, ☀️",
        "prices": {
          "1star": 850,
          "2star": 1275,
          "3star": 1700,
          "4star": 3400,
          "5star": 6800
        },
        "_meta": {
          "source": "Excel Guide Jan 12",
          "confidence": "high",
          "translationSource": "existing"
        },
        "sourceUrl": "https://www.heartopia.live/zh/fish/"
      },
      {
        "id": "burbot",
        "name": "江鳕",
        "location": "Tranquil River",
        "fishingLevel": 4,
        "fishType": "River",
        "shadowSize": "L",
        "activity": "Daily",
        "weather": "🌞, 🌧️, 🌈",
        "timeOfDay": "☀️, 🌇",
        "prices": {
          "1star": 230,
          "2star": 345,
          "3star": 460,
          "4star": 920,
          "5star": 1840
        },
        "_meta": {
          "source": "Excel Guide Jan 12",
          "confidence": "high",
          "translationSource": "existing"
        },
        "sourceUrl": "https://www.heartopia.live/zh/fish/"
      },
      {
        "id": "butterfly-koi",
        "name": "蝴蝶锦鲤",
        "location": "Meadow Lake",
        "fishingLevel": 4,
        "fishType": "Lake",
        "shadowSize": "L",
        "activity": "Daily",
        "weather": "🌧️, 🌈",
        "timeOfDay": "🌙, 🌅, ☀️, 🌇",
        "prices": {
          "1star": 320,
          "2star": 480,
          "3star": 640,
          "4star": 1280,
          "5star": 2560
        },
        "_meta": {
          "source": "Excel Guide Jan 12",
          "confidence": "high",
          "translationSource": "existing"
        },
        "sourceUrl": "https://www.heartopia.live/zh/fish/"
      },
      {
        "id": "chum-salmon",
        "name": "大马哈鱼",
        "location": "Tranquil River",
        "fishingLevel": 6,
        "fishType": "River",
        "shadowSize": "S",
        "activity": "Daily",
        "weather": "🌈",
        "timeOfDay": "🌙, 🌅, ☀️, 🌇",
        "prices": {
          "1star": 150,
          "2star": 225,
          "3star": 300,
          "4star": 600,
          "5star": 1200
        },
        "_meta": {
          "source": "Excel Guide Jan 12",
          "confidence": "high",
          "translationSource": "existing"
        },
        "sourceUrl": "https://www.heartopia.live/zh/fish/"
      },
      {
        "id": "clownfish",
        "name": "小丑鱼",
        "location": "Old Sea",
        "fishingLevel": 3,
        "fishType": "Sea",
        "shadowSize": "S",
        "activity": "Daily",
        "weather": "🌞, 🌧️, 🌈",
        "timeOfDay": "🌙, 🌅, ☀️, 🌇",
        "prices": {
          "1star": 100,
          "2star": 150,
          "3star": 200,
          "4star": 400,
          "5star": 800
        },
        "_meta": {
          "source": "Excel Guide Feb 22",
          "confidence": "high",
          "translationSource": "existing"
        },
        "notes": "hard to catch until lvl 5",
        "sourceUrl": "https://www.heartopia.live/zh/fish/"
      },
      {
        "id": "barbel",
        "name": "鲃鱼",
        "location": "Shallow River",
        "fishingLevel": 1,
        "fishType": "River",
        "shadowSize": "M",
        "activity": "Daily",
        "weather": "🌞, 🌧️, 🌈",
        "timeOfDay": "🌙, 🌅, ☀️, 🌇",
        "prices": {
          "1star": 75,
          "2star": 112,
          "3star": 150,
          "4star": 300,
          "5star": 600
        },
        "_meta": {
          "source": "Excel Guide Feb 22",
          "confidence": "high",
          "translationSource": "llm"
        },
        "sourceUrl": "https://www.heartopia.live/zh/fish/"
      },
      {
        "id": "common-bleak",
        "name": "欧鲌",
        "location": "Lake",
        "fishingLevel": 1,
        "fishType": "Lake",
        "shadowSize": "S",
        "activity": "Daily",
        "weather": "🌞, 🌧️, 🌈",
        "timeOfDay": "🌙, 🌅, ☀️, 🌇",
        "prices": {
          "1star": 50,
          "2star": 75,
          "3star": 100,
          "4star": 200,
          "5star": 400
        },
        "_meta": {
          "source": "Excel Guide Jan 12",
          "confidence": "high",
          "translationSource": "existing"
        },
        "sourceUrl": "https://www.heartopia.live/zh/fish/"
      },
      {
        "id": "common-carp",
        "name": "鲤鱼",
        "location": "Rosy River",
        "fishingLevel": 4,
        "fishType": "River",
        "shadowSize": "M",
        "activity": "Daily",
        "weather": "🌞, 🌈",
        "timeOfDay": "☀️, 🌇",
        "prices": {
          "1star": 230,
          "2star": 345,
          "3star": 460,
          "4star": 920,
          "5star": 1840
        },
        "_meta": {
          "source": "Excel Guide Jan 12",
          "confidence": "high",
          "translationSource": "existing"
        },
        "sourceUrl": "https://www.heartopia.live/zh/fish/"
      },
      {
        "id": "common-chub",
        "name": "欧白鱼",
        "location": "Lake",
        "fishingLevel": 1,
        "fishType": "Lake",
        "shadowSize": "M",
        "activity": "Daily",
        "weather": "🌞, 🌧️, 🌈",
        "timeOfDay": "🌙, 🌅, ☀️, 🌇",
        "prices": {
          "1star": 75,
          "2star": 112,
          "3star": 150,
          "4star": 300,
          "5star": 600
        },
        "_meta": {
          "source": "Excel Guide Jan 12",
          "confidence": "high",
          "translationSource": "existing"
        },
        "sourceUrl": "https://www.heartopia.live/zh/fish/"
      },
      {
        "id": "common-octopus",
        "name": "章鱼",
        "location": "Sea Fishing",
        "fishingLevel": 2,
        "fishType": "Sea",
        "shadowSize": "M, Golden",
        "activity": "Daily",
        "weather": "🌞, 🌧️, 🌈",
        "timeOfDay": "🌙, 🌅, ☀️, 🌇",
        "prices": {
          "1star": 320,
          "2star": 480,
          "3star": 640,
          "4star": 1280,
          "5star": 2560
        },
        "_meta": {
          "source": "Excel Guide Jan 12",
          "confidence": "high",
          "translationSource": "existing"
        },
        "sourceUrl": "https://www.heartopia.live/zh/fish/"
      },
      {
        "id": "common-rudd",
        "name": "红鳍鱼",
        "location": "Suburban Lake",
        "fishingLevel": 5,
        "fishType": "Lake",
        "shadowSize": "M",
        "activity": "Daily",
        "weather": "🌞, 🌧️, 🌈",
        "timeOfDay": "🌙, 🌅, ☀️, 🌇",
        "prices": {
          "1star": 150,
          "2star": 225,
          "3star": 300,
          "4star": 600,
          "5star": 1200
        },
        "_meta": {
          "source": "Excel Guide Jan 12",
          "confidence": "high",
          "translationSource": "existing"
        },
        "sourceUrl": "https://www.heartopia.live/zh/fish/"
      },
      {
        "id": "common-prawn",
        "name": "普通对虾",
        "location": "East Sea",
        "fishingLevel": 1,
        "fishType": "Sea",
        "shadowSize": "S",
        "activity": "Daily",
        "weather": "🌞, 🌧️, 🌈",
        "timeOfDay": "🌙, 🌅, ☀️, 🌇",
        "prices": {
          "1star": 50,
          "2star": 75,
          "3star": 100,
          "4star": 200,
          "5star": 400
        },
        "_meta": {
          "source": "Excel Guide Feb 22",
          "confidence": "high",
          "translationSource": "llm"
        },
        "sourceUrl": "https://www.heartopia.live/zh/fish/"
      },
      {
        "id": "common-whitefish",
        "name": "费拉鱼",
        "location": "Onsen Mountain Lake",
        "fishingLevel": 1,
        "fishType": "Lake",
        "shadowSize": "M",
        "activity": "Daily",
        "weather": "🌞, 🌧️, 🌈",
        "timeOfDay": "🌙, 🌅, ☀️, 🌇",
        "prices": {
          "1star": 105,
          "2star": 157,
          "3star": 210,
          "4star": 420,
          "5star": 840
        },
        "_meta": {
          "source": "Excel Guide Jan 12",
          "confidence": "high",
          "translationSource": "existing"
        },
        "sourceUrl": "https://www.heartopia.live/zh/fish/"
      },
      {
        "id": "crucian-carp",
        "name": "鲫鱼",
        "location": "Suburban Lake",
        "fishingLevel": 1,
        "fishType": "Lake",
        "shadowSize": "M",
        "activity": "Daily",
        "weather": "🌞, 🌧️, 🌈",
        "timeOfDay": "🌙, 🌅, ☀️, 🌇",
        "prices": {
          "1star": 75,
          "2star": 112,
          "3star": 150,
          "4star": 300,
          "5star": 600
        },
        "_meta": {
          "source": "Excel Guide Jan 12",
          "confidence": "high",
          "translationSource": "existing"
        },
        "sourceUrl": "https://www.heartopia.live/zh/fish/"
      },
      {
        "id": "edible-frog",
        "name": "食用蛙",
        "location": "Lake",
        "fishingLevel": 3,
        "fishType": "Lake",
        "shadowSize": "Blue",
        "activity": "Daily",
        "weather": "🌞, 🌧️, 🌈",
        "timeOfDay": "🌙, 🌅, ☀️, 🌇",
        "prices": {
          "1star": 320,
          "2star": 480,
          "3star": 640,
          "4star": 1280,
          "5star": 2560
        },
        "_meta": {
          "source": "Excel Guide Feb 22",
          "confidence": "high",
          "translationSource": "existing"
        },
        "notes": "Mermaid Attractor Req",
        "sourceUrl": "https://www.heartopia.live/zh/fish/"
      },
      {
        "id": "european-crayfish",
        "name": "欧洲螯虾",
        "location": "Forest Lake",
        "fishingLevel": 3,
        "fishType": "Lake",
        "shadowSize": "S",
        "activity": "Daily",
        "weather": "🌞, 🌧️, 🌈",
        "timeOfDay": "🌇, 🌙, 🌅",
        "prices": {
          "1star": 100,
          "2star": 150,
          "3star": 200,
          "4star": 400,
          "5star": 800
        },
        "_meta": {
          "source": "Excel Guide Jan 12",
          "confidence": "high",
          "translationSource": "existing"
        },
        "sourceUrl": "https://www.heartopia.live/zh/fish/"
      },
      {
        "id": "european-eel",
        "name": "欧洲鳗鲡",
        "location": "Old Sea",
        "fishingLevel": 7,
        "fishType": "Sea",
        "shadowSize": "M",
        "activity": "Daily",
        "weather": "🌈",
        "timeOfDay": "🌅, ☀️, 🌇",
        "prices": {
          "1star": 380,
          "2star": 570,
          "3star": 760,
          "4star": 1520,
          "5star": 3040
        },
        "_meta": {
          "source": "Excel Guide Jan 12",
          "confidence": "high",
          "translationSource": "existing"
        },
        "sourceUrl": "https://www.heartopia.live/zh/fish/"
      },
      {
        "id": "european-flying-squid",
        "name": "欧洲飞鱿",
        "location": "Sea Fishing",
        "fishingLevel": 5,
        "fishType": "Sea",
        "shadowSize": "Golden",
        "activity": "Daily",
        "weather": "🌞, 🌧️, 🌈",
        "timeOfDay": "🌙, 🌅, ☀️, 🌇",
        "prices": {
          "1star": 320,
          "2star": 480,
          "3star": 640,
          "4star": 1280,
          "5star": 2560
        },
        "_meta": {
          "source": "Excel Guide Jan 12",
          "confidence": "high",
          "translationSource": "existing"
        },
        "sourceUrl": "https://www.heartopia.live/zh/fish/"
      },
      {
        "id": "european-lobster",
        "name": "欧洲龙虾",
        "location": "Zephyr Sea",
        "fishingLevel": 5,
        "fishType": "Sea",
        "shadowSize": "M",
        "activity": "Daily",
        "weather": "🌞, 🌧️, 🌈",
        "timeOfDay": "🌇, 🌙",
        "prices": {
          "1star": 230,
          "2star": 345,
          "3star": 460,
          "4star": 920,
          "5star": 1840
        },
        "_meta": {
          "source": "Excel Guide Jan 12",
          "confidence": "high",
          "translationSource": "existing"
        },
        "sourceUrl": "https://www.heartopia.live/zh/fish/"
      },
      {
        "id": "european-mudminnow",
        "name": "米诺鱼",
        "location": "Suburban Lake",
        "fishingLevel": 8,
        "fishType": "Lake",
        "shadowSize": "S",
        "activity": "Daily",
        "weather": "🌞, 🌈",
        "timeOfDay": "🌙, 🌅",
        "prices": {
          "1star": 250,
          "2star": 375,
          "3star": 500,
          "4star": 1000,
          "5star": 2000
        },
        "_meta": {
          "source": "Excel Guide Jan 12",
          "confidence": "high",
          "translationSource": "existing"
        },
        "sourceUrl": "https://www.heartopia.live/zh/fish/"
      },
      {
        "id": "european-perch",
        "name": "欧洲鲈鱼",
        "location": "River",
        "fishingLevel": 1,
        "fishType": "River",
        "shadowSize": "M",
        "activity": "Daily",
        "weather": "🌞, 🌧️, 🌈",
        "timeOfDay": "🌙, 🌅, ☀️, 🌇",
        "prices": {
          "1star": 75,
          "2star": 112,
          "3star": 150,
          "4star": 300,
          "5star": 600
        },
        "_meta": {
          "source": "Excel Guide Jan 12",
          "confidence": "high",
          "translationSource": "existing"
        },
        "sourceUrl": "https://www.heartopia.live/zh/fish/"
      },
      {
        "id": "european-plaice",
        "name": "欧鲽",
        "location": "Old Sea",
        "fishingLevel": 4,
        "fishType": "Sea",
        "shadowSize": "M",
        "activity": "Daily",
        "weather": "🌞, 🌧️, 🌈",
        "timeOfDay": "🌇, 🌙, 🌅",
        "prices": {
          "1star": 230,
          "2star": 345,
          "3star": 460,
          "4star": 920,
          "5star": 1840
        },
        "_meta": {
          "source": "Excel Guide Jan 12",
          "confidence": "high",
          "translationSource": "existing"
        },
        "sourceUrl": "https://www.heartopia.live/zh/fish/"
      },
      {
        "id": "european-smelt",
        "name": "胡瓜鱼",
        "location": "Meadow Lake",
        "fishingLevel": 1,
        "fishType": "Lake",
        "shadowSize": "S",
        "activity": "Daily",
        "weather": "🌞, 🌧️, 🌈",
        "timeOfDay": "🌙, 🌅, ☀️, 🌇",
        "prices": {
          "1star": 100,
          "2star": 150,
          "3star": 200,
          "4star": 400,
          "5star": 800
        },
        "_meta": {
          "source": "Excel Guide Jan 12",
          "confidence": "high",
          "translationSource": "existing"
        },
        "sourceUrl": "https://www.heartopia.live/zh/fish/"
      },
      {
        "id": "false-scad",
        "name": "假竹荚鱼",
        "location": "Zephyr Sea",
        "fishingLevel": 2,
        "fishType": "Sea",
        "shadowSize": "M",
        "activity": "Daily",
        "weather": "🌞, 🌧️, 🌈",
        "timeOfDay": "🌙, 🌅, ☀️, 🌇",
        "prices": {
          "1star": 155,
          "2star": 232,
          "3star": 310,
          "4star": 620,
          "5star": 1240
        },
        "_meta": {
          "source": "Excel Guide Jan 12",
          "confidence": "high",
          "translationSource": "existing"
        },
        "sourceUrl": "https://www.heartopia.live/zh/fish/"
      },
      {
        "id": "freshwater-blenny",
        "name": "淡水鳚",
        "location": "Rosy River",
        "fishingLevel": 5,
        "fishType": "River",
        "shadowSize": "S",
        "activity": "Daily",
        "weather": "🌞, 🌧️, 🌈",
        "timeOfDay": "🌙, 🌅, ☀️, 🌇",
        "prices": {
          "1star": 150,
          "2star": 225,
          "3star": 300,
          "4star": 600,
          "5star": 1200
        },
        "_meta": {
          "source": "Excel Guide Jan 12",
          "confidence": "high",
          "translationSource": "existing"
        },
        "sourceUrl": "https://www.heartopia.live/zh/fish/"
      },
      {
        "id": "giant-oarfish",
        "name": "皇带鱼",
        "location": "Sea Fishing",
        "fishingLevel": 7,
        "fishType": "Sea",
        "shadowSize": "Golden",
        "activity": "Daily",
        "weather": "🌞, 🌧️, 🌈",
        "timeOfDay": "🌅, ☀️",
        "prices": {
          "1star": 535,
          "2star": 802,
          "3star": 1070,
          "4star": 2140,
          "5star": 4280
        },
        "_meta": {
          "source": "Excel Guide Jan 12",
          "confidence": "high",
          "translationSource": "existing"
        },
        "sourceUrl": "https://www.heartopia.live/zh/fish/"
      },
      {
        "id": "goby",
        "name": "虾虎鱼",
        "location": "East Sea",
        "fishingLevel": 4,
        "fishType": "Sea",
        "shadowSize": "S",
        "activity": "Daily",
        "weather": "🌞, 🌧️, 🌈",
        "timeOfDay": "🌅, ☀️",
        "prices": {
          "1star": 150,
          "2star": 225,
          "3star": 300,
          "4star": 600,
          "5star": 1200
        },
        "_meta": {
          "source": "User Feedback Jan 30 2026",
          "confidence": "high",
          "translationSource": "existing"
        },
        "sourceUrl": "https://www.heartopia.live/zh/fish/"
      },
      {
        "id": "golden-king-crab",
        "name": "金帝王蟹",
        "location": "Sea Fishing",
        "fishingLevel": 8,
        "fishType": "Sea",
        "shadowSize": "Golden",
        "activity": "Daily",
        "weather": "🌈",
        "timeOfDay": "🌙, 🌅, ☀️, 🌇",
        "prices": {
          "1star": 850,
          "2star": 1275,
          "3star": 1700,
          "4star": 3400,
          "5star": 6400
        },
        "_meta": {
          "source": "Excel Guide Jan 12",
          "confidence": "high",
          "translationSource": "existing"
        },
        "sourceUrl": "https://www.heartopia.live/zh/fish/"
      },
      {
        "id": "goldfish",
        "name": "金鱼",
        "location": "Meadow Lake",
        "fishingLevel": 8,
        "fishType": "Lake",
        "shadowSize": "S",
        "activity": "Daily",
        "weather": "🌧️, 🌈",
        "timeOfDay": "🌅, ☀️, 🌇",
        "prices": {
          "1star": 250,
          "2star": 375,
          "3star": 500,
          "4star": 1000,
          "5star": 2000
        },
        "_meta": {
          "source": "Excel Guide Jan 12",
          "confidence": "high",
          "translationSource": "existing"
        },
        "sourceUrl": "https://www.heartopia.live/zh/fish/"
      },
      {
        "id": "grayling",
        "name": "茴鱼",
        "location": "Suburban Lake",
        "fishingLevel": 6,
        "fishType": "Lake",
        "shadowSize": "S",
        "activity": "Daily",
        "weather": "🌞, 🌧️, 🌈",
        "timeOfDay": "🌙, 🌅, ☀️, 🌇",
        "prices": {
          "1star": 230,
          "2star": 345,
          "3star": 460,
          "4star": 920,
          "5star": 1840
        },
        "_meta": {
          "source": "Excel Guide Jan 12",
          "confidence": "high",
          "translationSource": "existing"
        },
        "sourceUrl": "https://www.heartopia.live/zh/fish/"
      },
      {
        "id": "haddock",
        "name": "黑线鳕",
        "location": "East Sea",
        "fishingLevel": 8,
        "fishType": "Sea",
        "shadowSize": "M",
        "activity": "Daily",
        "weather": "🌞, 🌈",
        "timeOfDay": "☀️, 🌇, 🌙",
        "prices": {
          "1star": 230,
          "2star": 345,
          "3star": 460,
          "4star": 920,
          "5star": 1840
        },
        "_meta": {
          "source": "Excel Guide Jan 12",
          "confidence": "high",
          "translationSource": "existing"
        },
        "sourceUrl": "https://www.heartopia.live/zh/fish/"
      },
      {
        "id": "hermit-crab",
        "name": "寄居蟹",
        "location": "East Sea",
        "fishingLevel": 3,
        "fishType": "Sea",
        "shadowSize": "S",
        "activity": "Daily",
        "weather": "🌞, 🌧️, 🌈",
        "timeOfDay": "🌙, 🌅, ☀️, 🌇",
        "prices": {
          "1star": 100,
          "2star": 150,
          "3star": 200,
          "4star": 400,
          "5star": 800
        },
        "_meta": {
          "source": "Excel Guide Jan 12",
          "confidence": "high",
          "translationSource": "existing"
        },
        "sourceUrl": "https://www.heartopia.live/zh/fish/"
      },
      {
        "id": "scad",
        "name": "竹荚鱼",
        "location": "Whale Sea",
        "fishingLevel": 1,
        "fishType": "Sea",
        "shadowSize": "S",
        "activity": "Daily",
        "weather": "🌞, 🌧️, 🌈",
        "timeOfDay": "🌙, 🌅, ☀️, 🌇",
        "prices": {
          "1star": 50,
          "2star": 75,
          "3star": 100,
          "4star": 200,
          "5star": 400
        },
        "_meta": {
          "source": "Excel Guide Feb 22",
          "confidence": "high",
          "translationSource": "llm"
        },
        "sourceUrl": "https://www.heartopia.live/zh/fish/"
      },
      {
        "id": "huchen",
        "name": "多瑙哲罗鱼",
        "location": "Giantwood River",
        "fishingLevel": 9,
        "fishType": "River",
        "shadowSize": "M",
        "activity": "Daily",
        "weather": "🌈",
        "timeOfDay": "🌙, ☀️, 🌇",
        "prices": {
          "2star": 570,
          "1star": 380,
          "3star": 760,
          "4star": 1520,
          "5star": 3040
        },
        "_meta": {
          "source": "User Feedback Jan 30 2026",
          "confidence": "high",
          "translationSource": "existing"
        },
        "sourceUrl": "https://www.heartopia.live/zh/fish/"
      },
      {
        "id": "king-crab",
        "name": "帝王蟹",
        "location": "Whale Sea",
        "fishingLevel": 8,
        "fishType": "Sea",
        "shadowSize": "L",
        "activity": "Daily",
        "weather": "🌈",
        "timeOfDay": "🌅, ☀️, 🌇",
        "prices": {
          "1star": 535,
          "2star": 802,
          "3star": 1070,
          "4star": 2140,
          "5star": 4280
        },
        "_meta": {
          "source": "Excel Guide Jan 12",
          "confidence": "high",
          "translationSource": "existing"
        },
        "sourceUrl": "https://www.heartopia.live/zh/fish/"
      },
      {
        "id": "large-pearl-mussel",
        "name": "贻贝",
        "location": "Forest Lake",
        "fishingLevel": 6,
        "fishType": "Lake",
        "shadowSize": "M",
        "activity": "Daily",
        "weather": "🌈",
        "timeOfDay": "🌙, 🌅, ☀️, 🌇",
        "prices": {
          "1star": 380,
          "2star": 570,
          "3star": 760,
          "4star": 1520,
          "5star": 3040
        },
        "_meta": {
          "source": "Excel Guide Jan 12",
          "confidence": "high",
          "translationSource": "existing"
        },
        "sourceUrl": "https://www.heartopia.live/zh/fish/"
      },
      {
        "id": "largemouth-bass",
        "name": "大口黑鲈",
        "location": "Forest Lake",
        "fishingLevel": 2,
        "fishType": "Lake",
        "shadowSize": "M",
        "activity": "Daily",
        "weather": "🌞, 🌈",
        "timeOfDay": "🌙, 🌅, ☀️, 🌇",
        "prices": {
          "1star": 230,
          "2star": 345,
          "3star": 460,
          "4star": 920,
          "5star": 1840
        },
        "_meta": {
          "source": "Excel Guide Jan 12",
          "confidence": "high",
          "translationSource": "existing"
        },
        "sourceUrl": "https://www.heartopia.live/zh/fish/"
      },
      {
        "id": "mediterranean-killifish",
        "name": "地中海鳉鱼",
        "location": "Suburban Lake",
        "fishingLevel": 7,
        "fishType": "Lake",
        "shadowSize": "S",
        "activity": "Daily",
        "weather": "🌞, 🌈",
        "timeOfDay": "☀️, 🌇, 🌙",
        "prices": {
          "1star": 150,
          "2star": 225,
          "3star": 300,
          "4star": 600,
          "5star": 1200
        },
        "_meta": {
          "source": "Excel Guide Jan 12",
          "confidence": "high",
          "translationSource": "existing"
        },
        "sourceUrl": "https://www.heartopia.live/zh/fish/"
      },
      {
        "id": "minnow",
        "name": "米诺鱼",
        "location": "Tranquil River",
        "fishingLevel": 1,
        "fishType": "River",
        "shadowSize": "S",
        "activity": "Daily",
        "weather": "🌞, 🌧️, 🌈",
        "timeOfDay": "🌙, 🌅, ☀️, 🌇",
        "prices": {
          "1star": 50,
          "2star": 75,
          "3star": 100,
          "4star": 200,
          "5star": 400
        },
        "_meta": {
          "source": "Excel Guide Jan 12",
          "confidence": "high",
          "translationSource": "existing"
        },
        "sourceUrl": "https://www.heartopia.live/zh/fish/"
      },
      {
        "id": "moonfish",
        "name": "月鱼",
        "location": "Sea Fishing",
        "fishingLevel": 9,
        "fishType": "Sea",
        "shadowSize": "Golden",
        "activity": "Daily",
        "weather": "🌞, 🌧️, 🌈",
        "timeOfDay": "🌙, 🌇",
        "prices": {
          "1star": 850,
          "2star": 1275,
          "3star": 1700,
          "4star": 3400,
          "5star": 6800
        },
        "_meta": {
          "source": "Excel Guide Jan 12",
          "confidence": "high",
          "translationSource": "existing"
        },
        "sourceUrl": "https://www.heartopia.live/zh/fish/"
      },
      {
        "id": "mottled-sculpin",
        "name": "杜父鱼",
        "location": "Onsen Mountain Lake",
        "fishingLevel": 7,
        "fishType": "Lake",
        "shadowSize": "S",
        "activity": "Daily",
        "weather": "🌧️, 🌈",
        "timeOfDay": "🌅, ☀️, 🌇",
        "prices": {
          "1star": 150,
          "2star": 225,
          "3star": 300,
          "4star": 600,
          "5star": 1200
        },
        "_meta": {
          "source": "Excel Guide Jan 12",
          "confidence": "high",
          "translationSource": "existing"
        },
        "sourceUrl": "https://www.heartopia.live/zh/fish/"
      },
      {
        "id": "mud-sunfish",
        "name": "泥太阳鱼",
        "location": "Forest Lake",
        "fishingLevel": 3,
        "fishType": "Lake",
        "shadowSize": "S",
        "activity": "Daily",
        "weather": "🌞, 🌧️, 🌈",
        "timeOfDay": "🌅, ☀️, 🌇",
        "prices": {
          "1star": 100,
          "2star": 150,
          "3star": 200,
          "4star": 400,
          "5star": 800
        },
        "_meta": {
          "source": "Excel Guide Jan 12",
          "confidence": "high",
          "translationSource": "existing"
        },
        "sourceUrl": "https://www.heartopia.live/zh/fish/"
      },
      {
        "id": "mussel",
        "name": "贻贝",
        "location": "Suburban Lake",
        "fishingLevel": 3,
        "fishType": "Lake",
        "shadowSize": "S",
        "activity": "Daily",
        "weather": "🌧️, 🌈",
        "timeOfDay": "🌙, 🌅, ☀️, 🌇",
        "prices": {
          "1star": 100,
          "2star": 150,
          "3star": 200,
          "4star": 400,
          "5star": 800
        },
        "_meta": {
          "source": "Excel Guide Jan 12",
          "confidence": "high",
          "translationSource": "existing"
        },
        "sourceUrl": "https://www.heartopia.live/zh/fish/"
      },
      {
        "id": "northern-pike",
        "name": "白斑狗鱼",
        "location": "Suburban Lake",
        "fishingLevel": 9,
        "fishType": "Lake",
        "shadowSize": "M",
        "activity": "Daily",
        "weather": "🌧️, 🌈",
        "timeOfDay": "🌙, 🌇",
        "prices": {
          "1star": 610,
          "2star": 915,
          "4star": 2440,
          "3star": 1220,
          "5star": 4880
        },
        "_meta": {
          "source": "User Feedback Jan 30 2026",
          "confidence": "high",
          "translationSource": "existing"
        },
        "sourceUrl": "https://www.heartopia.live/zh/fish/"
      },
      {
        "id": "nursehound",
        "name": "小斑猫鲨",
        "location": "Sea Fishing",
        "fishingLevel": 6,
        "fishType": "Sea",
        "shadowSize": "L, Golden",
        "activity": "Daily",
        "weather": "🌞, 🌧️, 🌈",
        "timeOfDay": "🌙, 🌅, ☀️, 🌇",
        "prices": {
          "1star": 535,
          "2star": 802,
          "3star": 1070,
          "4star": 2140,
          "5star": 4280
        },
        "_meta": {
          "source": "Excel Guide Jan 12",
          "confidence": "high",
          "translationSource": "existing"
        },
        "sourceUrl": "https://www.heartopia.live/zh/fish/"
      },
      {
        "id": "ocean-sunfish",
        "name": "翻车鱼",
        "location": "East Sea",
        "fishingLevel": 9,
        "fishType": "Sea",
        "shadowSize": "L",
        "activity": "Daily",
        "weather": "🌞, 🌧️, 🌈",
        "timeOfDay": "🌙, 🌅",
        "prices": {
          "1star": 850,
          "2star": 1275,
          "3star": 1700,
          "4star": 3400,
          "5star": 6800
        },
        "_meta": {
          "source": "User Feedback Jan 30 2026",
          "confidence": "high",
          "translationSource": "existing"
        },
        "sourceUrl": "https://www.heartopia.live/zh/fish/"
      },
      {
        "id": "oriental-shrimp",
        "name": "东方虾",
        "location": "River",
        "fishingLevel": 1,
        "fishType": "River",
        "shadowSize": "S",
        "activity": "Daily",
        "weather": "🌞, 🌧️, 🌈",
        "timeOfDay": "🌙, 🌅, ☀️, 🌇",
        "prices": {
          "1star": 50,
          "2star": 75,
          "3star": 100,
          "4star": 200,
          "5star": 400
        },
        "_meta": {
          "source": "Excel Guide Jan 12",
          "confidence": "high",
          "translationSource": "existing"
        },
        "sourceUrl": "https://www.heartopia.live/zh/fish/"
      },
      {
        "id": "puffer-fish",
        "name": "河豚",
        "location": "Old Sea",
        "fishingLevel": 6,
        "fishType": "Sea",
        "shadowSize": "M",
        "activity": "Daily",
        "weather": "🌞, 🌧️, 🌈",
        "timeOfDay": "☀️, 🌇",
        "prices": {
          "1star": 230,
          "2star": 345,
          "3star": 460,
          "4star": 920,
          "5star": 1840
        },
        "_meta": {
          "source": "User Feedback Jan 30 2026",
          "confidence": "high",
          "translationSource": "existing"
        },
        "sourceUrl": "https://www.heartopia.live/zh/fish/"
      },
      {
        "id": "pumpkinseed",
        "name": "南瓜籽太阳鱼",
        "location": "Onsen Mountain Lake",
        "fishingLevel": 9,
        "fishType": "Lake",
        "shadowSize": "S",
        "activity": "Daily",
        "weather": "🌞, 🌈",
        "timeOfDay": "🌅, ☀️, 🌇",
        "prices": {
          "1star": 250,
          "2star": 375,
          "3star": 500,
          "4star": 1000,
          "5star": 2000
        },
        "_meta": {
          "source": "User Feedback Jan 30 2026",
          "confidence": "high",
          "translationSource": "existing"
        },
        "sourceUrl": "https://www.heartopia.live/zh/fish/"
      },
      {
        "id": "rabbit-fish",
        "name": "兔子鱼",
        "location": "Ocean",
        "fishingLevel": 4,
        "fishType": "Sea",
        "shadowSize": "M, Blue",
        "activity": "Daily",
        "weather": "🌞, 🌧️, 🌈",
        "timeOfDay": "🌙, 🌅, ☀️, 🌇",
        "prices": {
          "1star": 320,
          "2star": 480,
          "3star": 640,
          "4star": 1280,
          "5star": 2560
        },
        "_meta": {
          "source": "Excel Guide Feb 22",
          "confidence": "high",
          "translationSource": "existing"
        },
        "notes": "Mermaid Attractor Recc.",
        "sourceUrl": "https://www.heartopia.live/zh/fish/"
      },
      {
        "id": "red-bellied-piranha",
        "name": "红腹食人鱼",
        "location": "Giantwood River",
        "fishingLevel": 4,
        "fishType": "River",
        "shadowSize": "M",
        "activity": "Daily",
        "weather": "🌞, 🌧️, 🌈",
        "timeOfDay": "🌙, 🌅, ☀️, 🌇",
        "prices": {
          "1star": 230,
          "2star": 345,
          "3star": 460,
          "4star": 920,
          "5star": 1840
        },
        "_meta": {
          "source": "Excel Guide Jan 12",
          "confidence": "high",
          "translationSource": "existing"
        },
        "sourceUrl": "https://www.heartopia.live/zh/fish/"
      },
      {
        "id": "river-crab",
        "name": "溪蟹",
        "location": "Suburban Lake",
        "fishingLevel": 4,
        "fishType": "Lake",
        "shadowSize": "S",
        "activity": "Daily",
        "weather": "🌞, 🌧️, 🌈",
        "timeOfDay": "🌙, 🌅, ☀️, 🌇",
        "prices": {
          "1star": 100,
          "2star": 150,
          "3star": 200,
          "4star": 400,
          "5star": 800
        },
        "_meta": {
          "source": "Excel Guide Jan 12",
          "confidence": "high",
          "translationSource": "existing"
        },
        "sourceUrl": "https://www.heartopia.live/zh/fish/"
      },
      {
        "id": "ruffe",
        "name": "梅花鲈",
        "location": "Onsen Mountain Lake",
        "fishingLevel": 3,
        "fishType": "Lake",
        "shadowSize": "S",
        "activity": "Daily",
        "weather": "🌞, 🌧️, 🌈",
        "timeOfDay": "☀️, 🌇",
        "prices": {
          "1star": 100,
          "2star": 150,
          "3star": 200,
          "4star": 400,
          "5star": 800
        },
        "_meta": {
          "source": "User Feedback Jan 30 2026",
          "confidence": "high",
          "translationSource": "existing"
        },
        "sourceUrl": "https://www.heartopia.live/zh/fish/"
      },
      {
        "id": "sardine",
        "name": "沙丁鱼",
        "location": "Ocean",
        "fishingLevel": 1,
        "fishType": "Sea",
        "shadowSize": "S",
        "activity": "Daily",
        "weather": "🌞, 🌧️, 🌈",
        "timeOfDay": "🌙, 🌅, ☀️, 🌇",
        "prices": {
          "1star": 50,
          "2star": 75,
          "3star": 100,
          "4star": 200,
          "5star": 400
        },
        "_meta": {
          "source": "Excel Guide Jan 12",
          "confidence": "high",
          "translationSource": "existing"
        },
        "sourceUrl": "https://www.heartopia.live/zh/fish/"
      },
      {
        "id": "schneider",
        "name": "施奈德鱼",
        "location": "Suburban Lake",
        "fishingLevel": 1,
        "fishType": "Lake",
        "shadowSize": "S",
        "activity": "Daily",
        "weather": "🌞, 🌧️, 🌈",
        "timeOfDay": "🌙, 🌅, ☀️, 🌇",
        "prices": {
          "1star": 50,
          "2star": 75,
          "3star": 100,
          "4star": 200,
          "5star": 400
        },
        "_meta": {
          "source": "Excel Guide Jan 12",
          "confidence": "high",
          "translationSource": "existing"
        },
        "sourceUrl": "https://www.heartopia.live/zh/fish/"
      },
      {
        "id": "sea-bass",
        "name": "海鲈",
        "location": "Ocean",
        "fishingLevel": 1,
        "fishType": "Sea",
        "shadowSize": "M",
        "activity": "Daily",
        "weather": "🌞, 🌧️, 🌈",
        "timeOfDay": "🌙, 🌅, ☀️, 🌇",
        "prices": {
          "1star": 75,
          "2star": 112,
          "3star": 150,
          "4star": 300,
          "5star": 600
        },
        "_meta": {
          "source": "Excel Guide Jan 12",
          "confidence": "high",
          "translationSource": "existing"
        },
        "sourceUrl": "https://www.heartopia.live/zh/fish/"
      },
      {
        "id": "sea-stickleback",
        "name": "刺鱼",
        "location": "Old Sea",
        "fishingLevel": 1,
        "fishType": "Sea",
        "shadowSize": "S",
        "activity": "Daily",
        "weather": "🌞, 🌧️, 🌈",
        "timeOfDay": "🌙, 🌅, ☀️, 🌇",
        "prices": {
          "1star": 50,
          "2star": 75,
          "3star": 100,
          "4star": 200,
          "5star": 400
        },
        "_meta": {
          "source": "Excel Guide Jan 12",
          "confidence": "high",
          "translationSource": "existing"
        },
        "sourceUrl": "https://www.heartopia.live/zh/fish/"
      },
      {
        "id": "seabream",
        "name": "佛罗伦萨鲷",
        "location": "Zephyr Sea",
        "fishingLevel": 10,
        "fishType": "Sea",
        "shadowSize": null,
        "activity": "Daily",
        "weather": "🌧️, 🌈",
        "timeOfDay": "🌇, 🌙",
        "prices": {},
        "_meta": {
          "source": "Excel Guide Jan 12",
          "confidence": "high",
          "translationSource": "existing"
        },
        "sourceUrl": "https://www.heartopia.live/zh/fish/"
      },
      {
        "id": "seahorse",
        "name": "海马",
        "location": "Whale Sea",
        "fishingLevel": 1,
        "fishType": "Sea",
        "shadowSize": "S",
        "activity": "Daily",
        "weather": "🌞, 🌧️, 🌈",
        "timeOfDay": "🌙, 🌅, ☀️",
        "prices": {
          "1star": 100,
          "2star": 150,
          "3star": 200,
          "4star": 400,
          "5star": 800
        },
        "_meta": {
          "source": "Excel Guide Jan 12",
          "confidence": "high",
          "translationSource": "existing"
        },
        "sourceUrl": "https://www.heartopia.live/zh/fish/"
      },
      {
        "id": "shortfin-mako-shark",
        "name": "灰鲭鲨",
        "location": "Sea Fishing",
        "fishingLevel": 10,
        "fishType": "Sea",
        "shadowSize": "L",
        "activity": "Daily",
        "weather": "🌈",
        "timeOfDay": "🌅, ☀️",
        "prices": {
          "1star": 850,
          "2star": 1275,
          "3star": 1700,
          "4star": 3400,
          "5star": 6800
        },
        "_meta": {
          "source": "User Feedback Jan 30 2026",
          "confidence": "high",
          "translationSource": "existing"
        },
        "sourceUrl": "https://www.heartopia.live/zh/fish/"
      },
      {
        "id": "skipjack-tuna",
        "name": "鲣鱼",
        "location": "Ocean",
        "fishingLevel": 1,
        "fishType": "Sea",
        "shadowSize": "L",
        "activity": "Daily",
        "weather": "🌞, 🌧️, 🌈",
        "timeOfDay": "🌙, 🌅, ☀️, 🌇",
        "prices": {
          "1star": 210,
          "2star": 315,
          "3star": 420,
          "4star": 840,
          "5star": 1680
        },
        "_meta": {
          "source": "Excel Guide Jan 12",
          "confidence": "high",
          "translationSource": "existing"
        },
        "sourceUrl": "https://www.heartopia.live/zh/fish/"
      },
      {
        "id": "smooth-hammerhead",
        "name": "无沟双髻鲨",
        "location": "Old Sea",
        "fishingLevel": 10,
        "fishType": "Sea",
        "shadowSize": "L",
        "activity": "Daily",
        "weather": "🌈",
        "timeOfDay": "🌙, 🌇",
        "prices": {
          "1star": 850,
          "2star": 1275,
          "3star": 1700,
          "4star": 3500,
          "5star": 7000
        },
        "_meta": {
          "source": "User Feedback Jan 30 2026",
          "confidence": "high",
          "translationSource": "existing"
        },
        "sourceUrl": "https://www.heartopia.live/zh/fish/"
      },
      {
        "id": "spined-loach",
        "name": "刺泥鳅",
        "location": "Giantwood River",
        "fishingLevel": 1,
        "fishType": "River",
        "shadowSize": "S",
        "activity": "Daily",
        "weather": "🌞, 🌧️, 🌈",
        "timeOfDay": "🌙, 🌅, ☀️, 🌇",
        "prices": {
          "1star": 50,
          "2star": 75,
          "3star": 100,
          "4star": 200,
          "5star": 400
        },
        "_meta": {
          "source": "Excel Guide Jan 12",
          "confidence": "high",
          "translationSource": "existing"
        },
        "sourceUrl": "https://www.heartopia.live/zh/fish/"
      },
      {
        "id": "stone-loach",
        "name": "岩鳅",
        "location": "Suburban Lake",
        "fishingLevel": 2,
        "fishType": "Lake",
        "shadowSize": "S",
        "activity": "Daily",
        "weather": "🌞, 🌧️, 🌈",
        "timeOfDay": "🌙, 🌅, ☀️, 🌇",
        "prices": {
          "1star": 100,
          "2star": 150,
          "3star": 200,
          "4star": 400,
          "5star": 800
        },
        "_meta": {
          "source": "Excel Guide Jan 12",
          "confidence": "high",
          "translationSource": "existing"
        },
        "sourceUrl": "https://www.heartopia.live/zh/fish/"
      },
      {
        "id": "streber",
        "name": "斯特雷伯鱼",
        "location": "Rosy River",
        "fishingLevel": 3,
        "fishType": "River",
        "shadowSize": "S",
        "activity": "Daily",
        "weather": "🌞, 🌧️, 🌈",
        "timeOfDay": "🌙, 🌅, ☀️, 🌇",
        "prices": {
          "1star": 50,
          "2star": 75,
          "3star": 100,
          "4star": 200,
          "5star": 400
        },
        "_meta": {
          "source": "Excel Guide Jan 12",
          "confidence": "high",
          "translationSource": "existing"
        },
        "sourceUrl": "https://www.heartopia.live/zh/fish/"
      },
      {
        "id": "striped-red-mullet",
        "name": "羊鱼",
        "location": "Sea Fishing",
        "fishingLevel": 1,
        "fishType": "Sea",
        "shadowSize": "Golden",
        "activity": "Daily",
        "weather": "🌞, 🌧️, 🌈",
        "timeOfDay": "🌙, 🌅, ☀️, 🌇",
        "prices": {
          "1star": 320,
          "2star": 480,
          "3star": 640,
          "4star": 1280,
          "5star": 2560
        },
        "_meta": {
          "source": "Excel Guide Jan 12",
          "confidence": "high",
          "translationSource": "existing"
        },
        "sourceUrl": "https://www.heartopia.live/zh/fish/"
      },
      {
        "id": "swordfish",
        "name": "剑鱼",
        "location": "Whale Sea",
        "fishingLevel": 10,
        "fishType": "Sea",
        "shadowSize": "L",
        "activity": "Daily",
        "weather": "🌈",
        "timeOfDay": "🌅, ☀️",
        "prices": {
          "1star": 850,
          "2star": 1275,
          "3star": 1700,
          "4star": 3400,
          "5star": 6800
        },
        "_meta": {
          "source": "User Feedback Jan 30 2026",
          "confidence": "high",
          "translationSource": "existing"
        },
        "sourceUrl": "https://www.heartopia.live/zh/fish/"
      },
      {
        "id": "tadpole",
        "name": "蝌蚪",
        "location": "Onsen Mountain Lake",
        "fishingLevel": 3,
        "fishType": "Lake",
        "shadowSize": "S",
        "activity": "Daily",
        "weather": "🌧️, 🌈",
        "timeOfDay": "🌙, 🌅, ☀️, 🌇",
        "prices": {
          "1star": 100,
          "2star": 150,
          "3star": 200,
          "4star": 400,
          "5star": 800
        },
        "_meta": {
          "source": "Excel Guide Jan 12",
          "confidence": "high",
          "translationSource": "existing"
        },
        "sourceUrl": "https://www.heartopia.live/zh/fish/"
      },
      {
        "id": "tench",
        "name": "金丁鱥",
        "location": "Forest Lake",
        "fishingLevel": 1,
        "fishType": "Lake",
        "shadowSize": "S",
        "activity": "Daily",
        "weather": "🌞, 🌧️, 🌈",
        "timeOfDay": "🌙, 🌅, ☀️, 🌇",
        "prices": {
          "1star": 50,
          "2star": 75,
          "3star": 100,
          "4star": 200,
          "5star": 400
        },
        "_meta": {
          "source": "Excel Guide Jan 12",
          "confidence": "high",
          "translationSource": "existing"
        },
        "sourceUrl": "https://www.heartopia.live/zh/fish/"
      },
      {
        "id": "three-spined-stickleback",
        "name": "刺鱼",
        "location": "Shallow River",
        "fishingLevel": 7,
        "fishType": "River",
        "shadowSize": "S",
        "activity": "Daily",
        "weather": "🌧️, 🌈",
        "timeOfDay": "🌙, 🌅, ☀️, 🌇",
        "prices": {
          "1star": 150,
          "2star": 225,
          "3star": 300,
          "4star": 600,
          "5star": 1200
        },
        "_meta": {
          "source": "Excel Guide Jan 12",
          "confidence": "high",
          "translationSource": "existing"
        },
        "sourceUrl": "https://www.heartopia.live/zh/fish/"
      },
      {
        "id": "tilapia",
        "name": "罗非鱼",
        "location": "River",
        "fishingLevel": 3,
        "fishType": "River",
        "shadowSize": "M, Blue",
        "activity": "Daily",
        "weather": "🌞, 🌧️, 🌈",
        "timeOfDay": "🌙, 🌅, ☀️, 🌇",
        "prices": {
          "1star": 320,
          "2star": 480,
          "3star": 640,
          "4star": 1280,
          "5star": 2560
        },
        "_meta": {
          "source": "Excel Guide Feb 22",
          "confidence": "high",
          "translationSource": "existing"
        },
        "notes": "Mermaid Attractor Req",
        "sourceUrl": "https://www.heartopia.live/zh/fish/"
      },
      {
        "id": "trout",
        "name": "鳟鱼",
        "location": "Meadow Lake",
        "fishingLevel": 5,
        "fishType": "Lake",
        "shadowSize": "M",
        "activity": "Daily",
        "weather": "🌞, 🌈",
        "timeOfDay": "🌙, 🌇",
        "prices": {
          "1star": 230,
          "2star": 345,
          "3star": 460,
          "4star": 920,
          "5star": 1840
        },
        "_meta": {
          "source": "User Feedback Jan 30 2026",
          "confidence": "high",
          "translationSource": "existing"
        },
        "sourceUrl": "https://www.heartopia.live/zh/fish/"
      },
      {
        "id": "tub-gurnard",
        "name": "鲂鮄",
        "location": "East Sea",
        "fishingLevel": 6,
        "fishType": "Sea",
        "shadowSize": "M",
        "activity": "Daily",
        "weather": "🌈",
        "timeOfDay": "🌙, 🌅, ☀️, 🌇",
        "prices": {
          "1star": 380,
          "2star": 570,
          "3star": 760,
          "4star": 1520,
          "5star": 3040
        },
        "_meta": {
          "source": "Excel Guide Jan 12",
          "confidence": "high",
          "translationSource": "existing"
        },
        "sourceUrl": "https://www.heartopia.live/zh/fish/"
      },
      {
        "id": "turbot",
        "name": "大菱鲆",
        "location": "Sea Fishing",
        "fishingLevel": 4,
        "fishType": "Sea",
        "shadowSize": "M",
        "activity": "Daily",
        "weather": "🌞, 🌧️, 🌈",
        "timeOfDay": "🌙, 🌅, ☀️, 🌇",
        "prices": {
          "1star": 320,
          "2star": 480,
          "3star": 640,
          "4star": 1280,
          "5star": 2560
        },
        "_meta": {
          "source": "Excel Guide Jan 12",
          "confidence": "high",
          "translationSource": "existing"
        },
        "sourceUrl": "https://www.heartopia.live/zh/fish/"
      },
      {
        "id": "wels-catfish",
        "name": "欧洲巨鲶",
        "location": "Meadow Lake",
        "fishingLevel": 10,
        "fishType": "Lake",
        "shadowSize": "M",
        "activity": "Daily",
        "weather": "🌞, 🌈",
        "timeOfDay": "🌙, 🌇",
        "prices": {
          "1star": 610,
          "2star": 915,
          "3star": 1220,
          "4star": 2440,
          "5star": 4880
        },
        "_meta": {
          "source": "Excel Guide Jan 12",
          "confidence": "high",
          "translationSource": "existing"
        },
        "sourceUrl": "https://www.heartopia.live/zh/fish/"
      },
      {
        "id": "zander",
        "name": "白梭鲈",
        "location": "Giantwood River",
        "fishingLevel": 3,
        "fishType": "River",
        "shadowSize": "M",
        "activity": "Daily",
        "weather": "🌞, 🌈",
        "timeOfDay": "🌙, 🌅, ☀️, 🌇",
        "prices": {
          "1star": 230,
          "2star": 345,
          "3star": 460,
          "4star": 920,
          "5star": 1840
        },
        "_meta": {
          "source": "Excel Guide Jan 12",
          "confidence": "high",
          "translationSource": "existing"
        },
        "sourceUrl": "https://www.heartopia.live/zh/fish/"
      },
      {
        "id": "winter-frost-season-frostspore-king-crab",
        "name": "冬霜季: 霜孢帝王蟹",
        "fishingLevel": 1,
        "fishType": "Sea",
        "shadowSize": "L",
        "location": "Old Sea",
        "weather": "🌞, 🌧️, 🌈",
        "timeOfDay": "🌙, 🌅, ☀️, 🌇",
        "activity": "Winter Frost Season",
        "prices": {
          "1star": 215,
          "2star": 322,
          "3star": 440,
          "4star": 860,
          "5star": 1720
        },
        "_meta": {
          "source": "Excel Guide Feb 22",
          "confidence": "high",
          "translationSource": "llm"
        },
        "sourceUrl": "https://www.heartopia.live/zh/fish/"
      },
      {
        "id": "winter-frost-season-frostspore-ocean-sunfish",
        "name": "冬霜季: 霜孢翻车鱼",
        "fishingLevel": 1,
        "fishType": "Sea",
        "shadowSize": "L",
        "location": "Old Sea",
        "weather": "🌞, 🌧️, 🌈",
        "timeOfDay": "🌙, 🌅, ☀️, 🌇",
        "activity": "Winter Frost Season",
        "prices": {
          "1star": 215,
          "2star": 322,
          "3star": 440,
          "4star": 860,
          "5star": 1720
        },
        "_meta": {
          "source": "Excel Guide Feb 22",
          "confidence": "high",
          "translationSource": "llm"
        },
        "sourceUrl": "https://www.heartopia.live/zh/fish/"
      },
      {
        "id": "winter-frost-season-frostspore-puffer-fish",
        "name": "冬霜季: 霜孢河豚",
        "fishingLevel": 1,
        "fishType": "Sea",
        "shadowSize": "M",
        "location": "Old Sea",
        "weather": "🌞, 🌧️, 🌈",
        "timeOfDay": "🌙, 🌅, ☀️, 🌇",
        "activity": "Winter Frost Season",
        "prices": {
          "1star": 155,
          "2star": 120,
          "3star": 310,
          "4star": 620,
          "5star": 1240
        },
        "_meta": {
          "source": "Excel Guide Feb 22",
          "confidence": "high",
          "translationSource": "llm"
        },
        "sourceUrl": "https://www.heartopia.live/zh/fish/"
      },
      {
        "id": "winter-frost-season-frostspore-seahorse",
        "name": "冬霜季: 霜孢海马",
        "fishingLevel": 1,
        "fishType": "Sea",
        "shadowSize": "S",
        "location": "Old Sea",
        "weather": "🌞, 🌧️, 🌈",
        "timeOfDay": "🌙, 🌅, ☀️, 🌇",
        "activity": "Winter Frost Season",
        "prices": {
          "1star": 100,
          "2star": 150,
          "3star": 300,
          "4star": 400,
          "5star": 800
        },
        "_meta": {
          "source": "Excel Guide Feb 22",
          "confidence": "high",
          "translationSource": "llm"
        },
        "sourceUrl": "https://www.heartopia.live/zh/fish/"
      },
      {
        "id": "winter-frost-season-frostspore-whale-shark",
        "name": "冬霜季: 霜孢鲸鲨",
        "fishingLevel": 1,
        "fishType": "Sea",
        "shadowSize": "L",
        "location": "Old Sea",
        "weather": "🌞, 🌧️, 🌈",
        "timeOfDay": "🌙, 🌅, ☀️, 🌇",
        "activity": "Winter Frost Season: Special Hidden Fishing Event",
        "prices": {
          "1star": 320,
          "2star": 480,
          "3star": 640,
          "4star": 1280,
          "5star": 2560
        },
        "_meta": {
          "source": "Excel Guide Feb 22",
          "confidence": "high",
          "translationSource": "llm"
        },
        "sourceUrl": "https://www.heartopia.live/zh/fish/"
      }
    ]
  },
  {
    "slug": "insects",
    "title": "昆虫图鉴",
    "navTitle": "昆虫",
    "icon": "Bug",
    "category": "收集",
    "countLabel": "种昆虫",
    "sourcePath": "/zh/bugs/",
    "sourceUrl": "https://www.heartopia.live/zh/bugs/",
    "sourceFetchedAt": "2026-05-12",
    "description": "按捕虫等级、地点、昆虫类型、天气、时间与售价整理，适合补全季节和天气限定记录。",
    "tip": "捕虫优先看地点与天气，彩虹/雨天目标可以加入今日追踪，避免反复翻表。",
    "facets": [
      {
        "key": "location",
        "label": "地点"
      },
      {
        "key": "insectType",
        "label": "类型"
      },
      {
        "key": "activity",
        "label": "活动"
      }
    ],
    "sortKeys": [
      {
        "key": "name",
        "label": "名称"
      },
      {
        "key": "catchingLevel",
        "label": "等级"
      },
      {
        "key": "location",
        "label": "地点"
      }
    ],
    "fields": [
      {
        "key": "catchingLevel",
        "label": "捕虫等级",
        "prefix": "Lv."
      },
      {
        "key": "insectType",
        "label": "类型"
      },
      {
        "key": "location",
        "label": "地点"
      },
      {
        "key": "weather",
        "label": "天气"
      },
      {
        "key": "timeOfDay",
        "label": "时间"
      },
      {
        "key": "activity",
        "label": "活动"
      },
      {
        "key": "notes",
        "label": "备注"
      },
      {
        "key": "prices",
        "label": "售价",
        "kind": "stars"
      }
    ],
    "items": [
      {
        "id": "alpine-longhorn-beetle",
        "name": "高山天牛",
        "location": "Forest Island",
        "catchingLevel": 5,
        "insectType": "Beetle",
        "activity": "Daily",
        "weather": "🌈",
        "timeOfDay": "🌙, 🌅, ☀️, 🌇",
        "prices": {
          "1star": 165,
          "2star": 247,
          "3star": 330,
          "4star": 660,
          "5star": 1320
        },
        "notes": null,
        "_meta": {
          "source": "Excel Guide Jan 12",
          "confidence": "high",
          "translationSource": "existing"
        },
        "sourceUrl": "https://www.heartopia.live/zh/bugs/"
      },
      {
        "id": "amethyst-flower-beetle",
        "name": "紫晶花金龟",
        "location": "Home (Rocks)",
        "catchingLevel": 2,
        "insectType": "Beetle",
        "activity": "Daily",
        "weather": "🌧️, 🌈",
        "timeOfDay": "🌙, 🌅, ☀️, 🌇",
        "prices": {
          "1star": 165,
          "2star": 247,
          "3star": 330,
          "4star": 660,
          "5star": 1320
        },
        "notes": null,
        "_meta": {
          "source": "Excel Guide Jan 12",
          "confidence": "high",
          "translationSource": "existing"
        },
        "sourceUrl": "https://www.heartopia.live/zh/bugs/"
      },
      {
        "id": "ant",
        "name": "蚂蚁",
        "location": "Fishing Village (Fishing Village Square)",
        "catchingLevel": 3,
        "insectType": "Bug",
        "activity": "Daily",
        "weather": "🌞, 🌧️, 🌈",
        "timeOfDay": "🌙, 🌅, ☀️, 🌇",
        "prices": {
          "1star": 220,
          "2star": 330,
          "4star": 880,
          "3star": 440,
          "5star": 1760
        },
        "notes": null,
        "_meta": {
          "source": "Excel Guide Jan 12",
          "confidence": "high",
          "translationSource": "existing"
        },
        "sourceUrl": "https://www.heartopia.live/zh/bugs/"
      },
      {
        "id": "apollo",
        "name": "绢蝶",
        "location": "Bait the Insects Event",
        "catchingLevel": 1,
        "insectType": "Butterfly",
        "activity": "Daily",
        "weather": "🌞, 🌧️, 🌈",
        "timeOfDay": "🌙, 🌅, ☀️, 🌇",
        "prices": {
          "1star": 30,
          "2star": 45,
          "3star": 60,
          "4star": 120,
          "5star": 240
        },
        "notes": null,
        "_meta": {
          "source": "Excel Guide Jan 12",
          "confidence": "high",
          "translationSource": "existing"
        },
        "sourceUrl": "https://www.heartopia.live/zh/bugs/"
      },
      {
        "id": "asian-lady-beetle",
        "name": "异色瓢虫",
        "location": "Forest (Deer Tower)",
        "catchingLevel": 5,
        "insectType": "Beetle",
        "activity": "Daily",
        "weather": "🌧️, 🌈",
        "timeOfDay": "☀️, 🌇, 🌙",
        "prices": {
          "1star": 165,
          "2star": 247,
          "3star": 330,
          "4star": 660,
          "5star": 1320
        },
        "notes": null,
        "_meta": {
          "source": "Excel Guide Jan 12",
          "confidence": "high",
          "translationSource": "existing"
        },
        "sourceUrl": "https://www.heartopia.live/zh/bugs/"
      },
      {
        "id": "asparagus-beetle",
        "name": "芦笋叶甲",
        "location": "Flower Field",
        "catchingLevel": 1,
        "insectType": "Beetle",
        "activity": "Daily",
        "weather": "🌞, 🌧️, 🌈",
        "timeOfDay": "🌙, 🌅, ☀️, 🌇",
        "prices": {
          "1star": 55,
          "2star": 82,
          "3star": 110,
          "4star": 220,
          "5star": 440
        },
        "notes": null,
        "_meta": {
          "source": "Excel Guide Jan 12",
          "confidence": "high",
          "translationSource": "existing"
        },
        "sourceUrl": "https://www.heartopia.live/zh/bugs/"
      },
      {
        "id": "bagworm-moth",
        "name": "袋蛾",
        "location": "Forest (Deer Tower)",
        "catchingLevel": 10,
        "insectType": "Butterfly",
        "activity": "Daily",
        "weather": "🌞, 🌈",
        "timeOfDay": "🌙, 🌇",
        "prices": {
          "1star": 440,
          "2star": 660,
          "3star": 880,
          "4star": 1760,
          "5star": 3520
        },
        "notes": null,
        "_meta": {
          "source": "Excel Guide Jan 12",
          "confidence": "high",
          "translationSource": "existing"
        },
        "sourceUrl": "https://www.heartopia.live/zh/bugs/"
      },
      {
        "id": "beautiful-demoiselle",
        "name": "美丽豆娘",
        "location": "Forest Lake Shore",
        "catchingLevel": 6,
        "insectType": "Dragonfly",
        "activity": "Daily",
        "weather": "🌧️, 🌈",
        "timeOfDay": "🌙, 🌅, ☀️, 🌇",
        "prices": {
          "1star": 110,
          "2star": 165,
          "3star": 220,
          "4star": 440,
          "5star": 880
        },
        "notes": null,
        "_meta": {
          "source": "Excel Guide Jan 12",
          "confidence": "high",
          "translationSource": "existing"
        },
        "sourceUrl": "https://www.heartopia.live/zh/bugs/"
      },
      {
        "id": "beautiful-leopard",
        "name": "美丽豹蛱蝶",
        "location": "Fishing Village (Wharf)",
        "catchingLevel": 4,
        "insectType": "Butterfly",
        "activity": "Daily",
        "weather": "🌧️, 🌈",
        "timeOfDay": "🌙, 🌅, 🌇",
        "prices": {
          "1star": 90,
          "2star": 135,
          "3star": 180,
          "4star": 360,
          "5star": 720
        },
        "notes": null,
        "_meta": {
          "source": "Excel Guide Jan 12",
          "confidence": "high",
          "translationSource": "existing"
        },
        "sourceUrl": "https://www.heartopia.live/zh/bugs/"
      },
      {
        "id": "blue-morpho",
        "name": "蓝闪蝶",
        "location": "Forest (Spirit Oak Pine Forest)",
        "catchingLevel": 7,
        "insectType": "Butterfly",
        "activity": "Daily",
        "weather": "🌞, 🌈",
        "timeOfDay": "🌅, ☀️, 🌇",
        "prices": {
          "1star": 150,
          "3star": 300,
          "2star": 225,
          "4star": 600,
          "5star": 1200
        },
        "notes": null,
        "_meta": {
          "source": "Excel Guide Jan 12",
          "confidence": "high",
          "translationSource": "existing"
        },
        "sourceUrl": "https://www.heartopia.live/zh/bugs/"
      },
      {
        "id": "blue-shieldbug",
        "name": "蓝盾蝽",
        "location": "Fishing Village (Lighthouse)",
        "catchingLevel": 6,
        "insectType": "Bug",
        "activity": "Daily",
        "weather": "🌞, 🌧️, 🌈",
        "timeOfDay": "🌅, ☀️",
        "prices": {
          "1star": 110,
          "2star": 165,
          "3star": 220,
          "4star": 440,
          "5star": 880
        },
        "notes": null,
        "_meta": {
          "source": "Excel Guide Jan 12",
          "confidence": "high",
          "translationSource": "existing"
        },
        "sourceUrl": "https://www.heartopia.live/zh/bugs/"
      },
      {
        "id": "bumblebee",
        "name": "熊蜂",
        "location": "Flower Field",
        "catchingLevel": 2,
        "insectType": "Bee",
        "activity": "Daily",
        "weather": "🌞, 🌧️, 🌈",
        "timeOfDay": "🌙, 🌅, ☀️, 🌇",
        "prices": {
          "1star": 110,
          "2star": 165,
          "3star": 220,
          "4star": 440,
          "5star": 880
        },
        "notes": null,
        "_meta": {
          "source": "Excel Guide Jan 12",
          "confidence": "high",
          "translationSource": "existing"
        },
        "sourceUrl": "https://www.heartopia.live/zh/bugs/"
      },
      {
        "id": "cabbage-white",
        "name": "菜粉蝶",
        "location": "Fishing Village",
        "catchingLevel": 1,
        "insectType": "Butterfly",
        "activity": "Daily",
        "weather": "🌞, 🌧️, 🌈",
        "timeOfDay": "🌙, 🌅, ☀️, 🌇",
        "prices": {
          "1star": 30,
          "2star": 45,
          "3star": 60,
          "4star": 120,
          "5star": 240
        },
        "notes": null,
        "_meta": {
          "source": "Excel Guide Jan 12",
          "confidence": "high",
          "translationSource": "existing"
        },
        "sourceUrl": "https://www.heartopia.live/zh/bugs/"
      },
      {
        "id": "cerulean-carpenter",
        "name": "蔚蓝木蜂",
        "location": "Fishing Village (Fishing Village Square)",
        "catchingLevel": 9,
        "insectType": "Bee",
        "activity": "Daily",
        "weather": "🌈",
        "timeOfDay": "🌙, 🌇",
        "prices": {
          "1star": 440,
          "2star": 660,
          "3star": 880,
          "4star": 1760,
          "5star": 3520
        },
        "notes": null,
        "_meta": {
          "source": "Excel Guide Jan 12",
          "confidence": "high",
          "translationSource": "existing"
        },
        "sourceUrl": "https://www.heartopia.live/zh/bugs/"
      },
      {
        "id": "chestnut-tiger",
        "name": "大绢斑蝶",
        "location": "Bait the Insects Event",
        "catchingLevel": 7,
        "insectType": "Butterfly",
        "activity": "Daily",
        "weather": "🌞, 🌧️, 🌈",
        "timeOfDay": "🌙, 🌅, ☀️, 🌇",
        "prices": {
          "1star": 150,
          "2star": 225,
          "3star": 300,
          "4star": 600,
          "5star": 1200
        },
        "notes": null,
        "_meta": {
          "source": "Excel Guide Jan 12",
          "confidence": "high",
          "translationSource": "existing"
        },
        "sourceUrl": "https://www.heartopia.live/zh/bugs/"
      },
      {
        "id": "cicada",
        "name": "蝉",
        "location": "Forest (Spirit Oak Pine Forest)",
        "catchingLevel": 4,
        "insectType": "Bug",
        "activity": "Daily",
        "weather": "🌞, 🌧️, 🌈",
        "timeOfDay": "🌙, ☀️, 🌇",
        "prices": {
          "1star": 220,
          "2star": 330,
          "4star": 880,
          "3star": 440,
          "5star": 1760
        },
        "notes": null,
        "_meta": {
          "source": "Excel Guide Jan 12",
          "confidence": "high",
          "translationSource": "existing"
        },
        "sourceUrl": "https://www.heartopia.live/zh/bugs/"
      },
      {
        "id": "comet-moth",
        "name": "彗星蛾",
        "location": "Suburbs",
        "catchingLevel": 8,
        "insectType": "Butterfly",
        "activity": "Daily",
        "weather": "🌞, 🌈",
        "timeOfDay": "🌇, 🌙",
        "prices": {
          "1star": 240,
          "2star": 360,
          "3star": 480,
          "4star": 960,
          "5star": 1920
        },
        "notes": null,
        "_meta": {
          "source": "Excel Guide Jan 12",
          "confidence": "high",
          "translationSource": "existing"
        },
        "sourceUrl": "https://www.heartopia.live/zh/bugs/"
      },
      {
        "id": "common-blue-butterfly",
        "name": "普通蓝灰蝶",
        "location": "Central Area",
        "catchingLevel": 2,
        "insectType": "Butterfly",
        "activity": "Daily",
        "weather": "🌞, 🌧️, 🌈",
        "timeOfDay": "🌙, 🌅, ☀️, 🌇",
        "prices": {
          "1star": 105,
          "2star": 157,
          "3star": 210,
          "4star": 300,
          "5star": 840
        },
        "notes": null,
        "_meta": {
          "source": "Excel Guide Jan 12",
          "confidence": "high",
          "translationSource": "existing"
        },
        "sourceUrl": "https://www.heartopia.live/zh/bugs/"
      },
      {
        "id": "common-brimstone",
        "name": "钩粉蝶",
        "location": "Suburbs",
        "catchingLevel": 1,
        "insectType": "Beetle",
        "activity": "Daily",
        "weather": "🌞, 🌧️, 🌈",
        "timeOfDay": "🌙, 🌅, ☀️, 🌇",
        "prices": {
          "1star": 30,
          "2star": 45,
          "3star": 60,
          "4star": 120,
          "5star": 240
        },
        "notes": null,
        "_meta": {
          "source": "Excel Guide Jan 12",
          "confidence": "high",
          "translationSource": "existing"
        },
        "sourceUrl": "https://www.heartopia.live/zh/bugs/"
      },
      {
        "id": "common-whitetail",
        "name": "白尾蜻蜓",
        "location": "River Bank",
        "catchingLevel": 4,
        "insectType": "Dragonfly",
        "activity": "Daily",
        "weather": "🌧️, 🌈",
        "timeOfDay": "🌙, 🌅, ☀️, 🌇",
        "prices": {
          "1star": 75,
          "2star": 112,
          "3star": 150,
          "4star": 300,
          "5star": 600
        },
        "notes": null,
        "_meta": {
          "source": "Excel Guide Jan 12",
          "confidence": "high",
          "translationSource": "existing"
        },
        "sourceUrl": "https://www.heartopia.live/zh/bugs/"
      },
      {
        "id": "conehead-mantis",
        "name": "锥头螳螂",
        "location": "Onsen Mountain (Ruins)",
        "catchingLevel": 9,
        "insectType": "Grasshopper",
        "activity": "Daily",
        "weather": "🌧️, 🌈",
        "timeOfDay": "☀️, 🌇",
        "prices": {
          "1star": 515,
          "4star": 2060,
          "2star": 772,
          "3star": 1030,
          "5star": 4120
        },
        "notes": null,
        "_meta": {
          "source": "Excel Guide Jan 12",
          "confidence": "high",
          "translationSource": "existing"
        },
        "sourceUrl": "https://www.heartopia.live/zh/bugs/"
      },
      {
        "id": "crimson-marsh-glider",
        "name": "深红沼蜻",
        "location": "Onsen Mountain",
        "catchingLevel": 7,
        "insectType": "Dragonfly",
        "activity": "Daily",
        "weather": "🌈",
        "timeOfDay": "🌙, ☀️, 🌇",
        "prices": {
          "1star": 185,
          "2star": 277,
          "3star": 370,
          "4star": 740,
          "5star": 1480
        },
        "notes": null,
        "_meta": {
          "source": "Excel Guide Jan 12",
          "confidence": "high",
          "translationSource": "existing"
        },
        "sourceUrl": "https://www.heartopia.live/zh/bugs/"
      },
      {
        "id": "elegant-flower-beetle",
        "name": "优雅花金龟",
        "location": "Flower Field (Whale Mountain)",
        "catchingLevel": 7,
        "insectType": "Beetle",
        "activity": "Daily",
        "weather": "🌧️, 🌈",
        "timeOfDay": "🌅, ☀️",
        "prices": {
          "1star": 275,
          "2star": 412,
          "3star": 550,
          "4star": 1100,
          "5star": 2200
        },
        "notes": null,
        "_meta": {
          "source": "Excel Guide Jan 12",
          "confidence": "high",
          "translationSource": "existing"
        },
        "sourceUrl": "https://www.heartopia.live/zh/bugs/"
      },
      {
        "id": "european-firebug",
        "name": "红蝽",
        "location": "Home (Rocks)",
        "catchingLevel": 1,
        "insectType": "Beetle",
        "activity": "Daily",
        "weather": "🌞, 🌧️, 🌈",
        "timeOfDay": "🌙, 🌅, ☀️, 🌇",
        "prices": {
          "1star": 35,
          "2star": 52,
          "3star": 70,
          "4star": 140,
          "5star": 280
        },
        "notes": null,
        "_meta": {
          "source": "Excel Guide Jan 12",
          "confidence": "high",
          "translationSource": "existing"
        },
        "sourceUrl": "https://www.heartopia.live/zh/bugs/"
      },
      {
        "id": "fire-colored-beetle",
        "name": "火色甲虫",
        "location": "Onsen Mountain (Onsen)",
        "catchingLevel": 3,
        "insectType": "Beetle",
        "activity": "Daily",
        "weather": "🌞, 🌧️, 🌈",
        "timeOfDay": "🌙, 🌅, ☀️, 🌇",
        "prices": {
          "1star": 110,
          "2star": 165,
          "3star": 220,
          "4star": 440,
          "5star": 880
        },
        "notes": null,
        "_meta": {
          "source": "Excel Guide Jan 12",
          "confidence": "high",
          "translationSource": "existing"
        },
        "sourceUrl": "https://www.heartopia.live/zh/bugs/"
      },
      {
        "id": "four-spotted-ladybug",
        "name": "四星瓢虫",
        "location": "Onsen Mountain (Crater Lake)",
        "catchingLevel": 4,
        "insectType": "Beetle",
        "activity": "Daily",
        "weather": "🌧️, 🌈",
        "timeOfDay": "🌙, 🌅, ☀️, 🌇",
        "prices": {
          "1star": 165,
          "2star": 247,
          "3star": 330,
          "4star": 660,
          "5star": 1320
        },
        "notes": null,
        "_meta": {
          "source": "Excel Guide Jan 12",
          "confidence": "high",
          "translationSource": "existing"
        },
        "sourceUrl": "https://www.heartopia.live/zh/bugs/"
      },
      {
        "id": "four-spotted-skimmer",
        "name": "四斑蜻蜓",
        "location": "Suburban Lakeshore",
        "catchingLevel": 2,
        "insectType": "Dragonfly",
        "activity": "Daily",
        "weather": "🌧️, 🌈",
        "timeOfDay": "🌙, 🌅, ☀️, 🌇",
        "prices": {
          "1star": 75,
          "2star": 112,
          "3star": 150,
          "4star": 300,
          "5star": 600
        },
        "notes": null,
        "_meta": {
          "source": "Excel Guide Jan 12",
          "confidence": "high",
          "translationSource": "existing"
        },
        "sourceUrl": "https://www.heartopia.live/zh/bugs/"
      },
      {
        "id": "giant-asian-mantis",
        "name": "中华大刀螳",
        "location": "Onsen Mountain (Ruins)",
        "catchingLevel": 5,
        "insectType": "Grasshopper",
        "activity": "Daily",
        "weather": "🌞, 🌈",
        "timeOfDay": "🌙, 🌅, ☀️, 🌇",
        "prices": {
          "1star": 390,
          "2star": 585,
          "4star": 1560,
          "3star": 780,
          "5star": 3120
        },
        "notes": "*⚠️This bug sits in bushes (NOT ON TOP) and makes the bush rustle and leaves to kind of shoot out of it, \n  UNTIL you walk up to the bush that's when it jumps out and you can catch it",
        "_meta": {
          "source": "Excel Guide Jan 12",
          "confidence": "high",
          "translationSource": "existing"
        },
        "sourceUrl": "https://www.heartopia.live/zh/bugs/"
      },
      {
        "id": "gold-grasshopper",
        "name": "金色蚱蜢",
        "location": "Onsen Mountain",
        "catchingLevel": 1,
        "insectType": "Grasshopper",
        "activity": "Daily",
        "weather": "🌞, 🌧️, 🌈",
        "timeOfDay": "🌙, 🌅, ☀️, 🌇",
        "prices": {
          "1star": 45,
          "2star": 67,
          "3star": 90,
          "4star": 180,
          "5star": 360
        },
        "notes": null,
        "_meta": {
          "source": "Excel Guide Jan 12",
          "confidence": "high",
          "translationSource": "existing"
        },
        "sourceUrl": "https://www.heartopia.live/zh/bugs/"
      },
      {
        "id": "golden-jewel-scarab",
        "name": "金宝石金龟",
        "location": "Forest (Jump Puzzle)",
        "catchingLevel": 7,
        "insectType": "Beetle",
        "activity": "Daily",
        "weather": "🌞, 🌈",
        "timeOfDay": "☀️, 🌇",
        "prices": {
          "1star": 275,
          "2star": 412,
          "3star": 550,
          "4star": 1100,
          "5star": 2200
        },
        "notes": null,
        "_meta": {
          "source": "Excel Guide Jan 12",
          "confidence": "high",
          "translationSource": "existing"
        },
        "sourceUrl": "https://www.heartopia.live/zh/bugs/"
      },
      {
        "id": "golden-stag-beetle",
        "name": "金色锹甲",
        "location": "Forest (Spirit Oak Pine Forest)",
        "catchingLevel": 9,
        "insectType": "Beetle",
        "activity": "Daily",
        "weather": "🌧️, 🌈",
        "timeOfDay": "🌙, 🌇",
        "prices": {
          "1star": 440,
          "2star": 660,
          "3star": 880,
          "4star": 1760,
          "5star": 3520
        },
        "notes": null,
        "_meta": {
          "source": "Excel Guide Jan 12",
          "confidence": "high",
          "translationSource": "existing"
        },
        "sourceUrl": "https://www.heartopia.live/zh/bugs/"
      },
      {
        "id": "green-birdwing",
        "name": "绿裳凤蝶",
        "location": "Suburbs",
        "catchingLevel": 6,
        "insectType": "Butterfly",
        "activity": "Daily",
        "weather": "🌞, 🌧️, 🌈",
        "timeOfDay": "🌅, ☀️, 🌇",
        "prices": {
          "1star": 150,
          "2star": 225,
          "3star": 300,
          "4star": 600,
          "5star": 1200
        },
        "notes": null,
        "_meta": {
          "source": "Excel Guide Jan 12",
          "confidence": "high",
          "translationSource": "existing"
        },
        "sourceUrl": "https://www.heartopia.live/zh/bugs/"
      },
      {
        "id": "green-tiger-beetle",
        "name": "绿虎甲",
        "location": "Onsen Mountain",
        "catchingLevel": 2,
        "insectType": "Beetle",
        "activity": "Daily",
        "weather": "🌞, 🌧️, 🌈",
        "timeOfDay": "🌙, 🌅, ☀️, 🌇",
        "prices": {
          "1star": 110,
          "2star": 165,
          "3star": 220,
          "4star": 440,
          "5star": 880
        },
        "notes": null,
        "_meta": {
          "source": "Excel Guide Jan 12",
          "confidence": "high",
          "translationSource": "existing"
        },
        "sourceUrl": "https://www.heartopia.live/zh/bugs/"
      },
      {
        "id": "hercules-beetle",
        "name": "长戟大兜虫",
        "location": "Onsen Mountain (Crater Lake)",
        "catchingLevel": 10,
        "insectType": "Beetle",
        "activity": "Daily",
        "weather": "🌞, 🌈",
        "timeOfDay": "☀️, 🌇",
        "prices": {
          "1star": 440,
          "2star": 660,
          "3star": 880,
          "4star": 1760,
          "5star": 3520
        },
        "notes": null,
        "_meta": {
          "source": "Excel Guide Jan 12",
          "confidence": "high",
          "translationSource": "existing"
        },
        "sourceUrl": "https://www.heartopia.live/zh/bugs/"
      },
      {
        "id": "horned-beetle",
        "name": "角甲虫",
        "location": "Fishing Village (East Pier)",
        "catchingLevel": 8,
        "insectType": "Beetle",
        "activity": "Daily",
        "weather": "🌞, 🌈",
        "timeOfDay": "🌙, 🌇",
        "prices": {
          "1star": 275,
          "2star": 412,
          "3star": 550,
          "4star": 1100,
          "5star": 2200
        },
        "notes": null,
        "_meta": {
          "source": "Excel Guide Jan 12",
          "confidence": "high",
          "translationSource": "existing"
        },
        "sourceUrl": "https://www.heartopia.live/zh/bugs/"
      },
      {
        "id": "katydid",
        "name": "螽斯",
        "location": "Flower Field (Amethyst Beach)",
        "catchingLevel": 3,
        "insectType": "Grasshopper",
        "activity": "Daily",
        "weather": "🌞, 🌧️, 🌈",
        "timeOfDay": "🌙, 🌅, ☀️, 🌇",
        "prices": {
          "1star": 180,
          "3star": 360,
          "2star": 270,
          "4star": 720,
          "5star": 1440
        },
        "notes": null,
        "_meta": {
          "source": "Excel Guide Jan 12",
          "confidence": "high",
          "translationSource": "existing"
        },
        "sourceUrl": "https://www.heartopia.live/zh/bugs/"
      },
      {
        "id": "large-banded-grasshopper",
        "name": "大带蚱蜢",
        "location": "Suburbs",
        "catchingLevel": 4,
        "insectType": "Grasshopper",
        "activity": "Daily",
        "weather": "🌞, 🌈",
        "timeOfDay": "🌇, 🌙",
        "prices": {
          "1star": 140,
          "2star": 210,
          "3star": 280,
          "4star": 560,
          "5star": 1120
        },
        "notes": null,
        "_meta": {
          "source": "Excel Guide Jan 12",
          "confidence": "high",
          "translationSource": "existing"
        },
        "sourceUrl": "https://www.heartopia.live/zh/bugs/"
      },
      {
        "id": "large-red-damselfly",
        "name": "大红豆娘",
        "location": "Waterside",
        "catchingLevel": 1,
        "insectType": "Dragonfly",
        "activity": "Daily",
        "weather": "🌞, 🌧️, 🌈",
        "timeOfDay": "🌙, 🌅, ☀️, 🌇",
        "prices": {
          "1star": 35,
          "2star": 52,
          "3star": 70,
          "4star": 140,
          "5star": 280
        },
        "notes": null,
        "_meta": {
          "source": "Excel Guide Jan 12",
          "confidence": "high",
          "translationSource": "existing"
        },
        "sourceUrl": "https://www.heartopia.live/zh/bugs/"
      },
      {
        "id": "mediterranean-mantis",
        "name": "地中海螳螂",
        "location": "Onsen Mountain (Stone Cliff)",
        "catchingLevel": 4,
        "insectType": "Grasshopper",
        "activity": "Daily",
        "weather": "🌞, 🌈",
        "timeOfDay": "☀️, 🌇, 🌙",
        "prices": {
          "1star": 195,
          "2star": 292,
          "3star": 390,
          "4star": 780,
          "5star": 1560
        },
        "notes": null,
        "_meta": {
          "source": "Excel Guide Jan 12",
          "confidence": "high",
          "translationSource": "existing"
        },
        "sourceUrl": "https://www.heartopia.live/zh/bugs/"
      },
      {
        "id": "mini-moon-moth",
        "name": "小月蛾",
        "location": "Suburbs",
        "catchingLevel": 3,
        "insectType": "Butterfly",
        "activity": "Daily",
        "weather": "🌞, 🌈",
        "timeOfDay": "🌅, ☀️, 🌇",
        "prices": {
          "1star": 105,
          "2star": 157,
          "3star": 210,
          "4star": 300,
          "5star": 840
        },
        "notes": null,
        "_meta": {
          "source": "Excel Guide Jan 12",
          "confidence": "high",
          "translationSource": "existing"
        },
        "sourceUrl": "https://www.heartopia.live/zh/bugs/"
      },
      {
        "id": "minotaur-beetle",
        "name": "牛头粪金龟",
        "location": "Onsen Mountain (Ruins)",
        "catchingLevel": 7,
        "insectType": "Beetle",
        "activity": "Daily",
        "weather": "🌞, 🌧️, 🌈",
        "timeOfDay": "🌙, 🌅, ☀️",
        "prices": {
          "1star": 275,
          "2star": 412,
          "3star": 550,
          "4star": 1100,
          "5star": 2200
        },
        "notes": null,
        "_meta": {
          "source": "Excel Guide Jan 12",
          "confidence": "high",
          "translationSource": "existing"
        },
        "sourceUrl": "https://www.heartopia.live/zh/bugs/"
      },
      {
        "id": "morpho-helena",
        "name": "海伦娜闪蝶",
        "location": "Flower Field (Amethyst Beach)",
        "catchingLevel": 10,
        "insectType": "Butterfly",
        "activity": "Daily",
        "weather": "🌈",
        "timeOfDay": "🌅, ☀️",
        "prices": {
          "1star": 240,
          "2star": 360,
          "3star": 480,
          "4star": 960,
          "5star": 1920
        },
        "notes": null,
        "_meta": {
          "source": "Excel Guide Jan 12",
          "confidence": "high",
          "translationSource": "existing"
        },
        "sourceUrl": "https://www.heartopia.live/zh/bugs/"
      },
      {
        "id": "mother-of-pearl",
        "name": "珠母贝蛱蝶",
        "location": "Flower Field (Windmill Flower Field)",
        "catchingLevel": 9,
        "insectType": "Butterfly",
        "activity": "Daily",
        "weather": "🌧️, 🌈",
        "timeOfDay": "🌙, 🌅",
        "prices": {
          "1star": 240,
          "2star": 360,
          "3star": 480,
          "4star": 960,
          "5star": 1920
        },
        "notes": null,
        "_meta": {
          "source": "Excel Guide Jan 12",
          "confidence": "high",
          "translationSource": "existing"
        },
        "sourceUrl": "https://www.heartopia.live/zh/bugs/"
      },
      {
        "id": "mourning-cloak",
        "name": "哀悼蛱蝶",
        "location": "Onsen Mountain (Onsen)",
        "catchingLevel": 5,
        "insectType": "Butterfly",
        "activity": "Daily",
        "weather": "🌞, 🌈",
        "timeOfDay": "🌙, 🌅, ☀️",
        "prices": {
          "1star": 90,
          "2star": 135,
          "3star": 180,
          "4star": 360,
          "5star": 720
        },
        "notes": null,
        "_meta": {
          "source": "Excel Guide Jan 12",
          "confidence": "high",
          "translationSource": "existing"
        },
        "sourceUrl": "https://www.heartopia.live/zh/bugs/"
      },
      {
        "id": "old-world-swallowtail",
        "name": "金凤蝶",
        "location": "Forest",
        "catchingLevel": 1,
        "insectType": "Butterfly",
        "activity": "Daily",
        "weather": "🌞, 🌧️, 🌈",
        "timeOfDay": "🌙, 🌅, ☀️, 🌇",
        "prices": {
          "1star": 30,
          "2star": 45,
          "3star": 60,
          "4star": 120,
          "5star": 240
        },
        "notes": null,
        "_meta": {
          "source": "Excel Guide Jan 12",
          "confidence": "high",
          "translationSource": "existing"
        },
        "sourceUrl": "https://www.heartopia.live/zh/bugs/"
      },
      {
        "id": "orange-tip",
        "name": "橙端粉蝶",
        "location": "Central Area",
        "catchingLevel": 1,
        "insectType": "Butterfly",
        "activity": "Daily",
        "weather": "🌞, 🌧️, 🌈",
        "timeOfDay": "🌙, 🌅, ☀️, 🌇",
        "prices": {
          "1star": 30,
          "2star": 45,
          "3star": 60,
          "4star": 120,
          "5star": 240
        },
        "notes": null,
        "_meta": {
          "source": "Excel Guide Jan 12",
          "confidence": "high",
          "translationSource": "existing"
        },
        "sourceUrl": "https://www.heartopia.live/zh/bugs/"
      },
      {
        "id": "peacock-butterfly",
        "name": "孔雀蛱蝶",
        "location": "Flower Field (Windmill Flower Field)",
        "catchingLevel": 5,
        "insectType": "Butterfly",
        "activity": "Daily",
        "weather": "🌞, 🌧️, 🌈",
        "timeOfDay": "🌙, 🌅, ☀️, 🌇",
        "prices": {
          "1star": 90,
          "2star": 135,
          "3star": 180,
          "4star": 360,
          "5star": 720
        },
        "notes": null,
        "_meta": {
          "source": "Excel Guide Jan 12",
          "confidence": "high",
          "translationSource": "existing"
        },
        "sourceUrl": "https://www.heartopia.live/zh/bugs/"
      },
      {
        "id": "picasso-bug",
        "name": "毕加索虫",
        "location": "Flower Field (Amethyst Beach)",
        "catchingLevel": 8,
        "insectType": "Beetle",
        "activity": "Daily",
        "weather": "🌞, 🌈",
        "timeOfDay": "🌙, 🌇",
        "prices": {
          "1star": 185,
          "2star": 277,
          "3star": 370,
          "4star": 740,
          "5star": 1480
        },
        "notes": null,
        "_meta": {
          "source": "Excel Guide Jan 12",
          "confidence": "high",
          "translationSource": "existing"
        },
        "sourceUrl": "https://www.heartopia.live/zh/bugs/"
      },
      {
        "id": "pink-katydid",
        "name": "粉色螽斯",
        "location": "Bait the Insects Event",
        "catchingLevel": 3,
        "insectType": "Grasshopper",
        "activity": "Daily",
        "weather": "🌞, 🌧️, 🌈",
        "timeOfDay": "🌙, 🌅, ☀️, 🌇",
        "prices": {
          "1star": 90,
          "2star": 135,
          "3star": 180,
          "4star": 360,
          "5star": 720
        },
        "notes": null,
        "_meta": {
          "source": "Excel Guide Jan 12",
          "confidence": "high",
          "translationSource": "existing"
        },
        "sourceUrl": "https://www.heartopia.live/zh/bugs/"
      },
      {
        "id": "postman-butterfly",
        "name": "邮差蝶",
        "location": "Bait the Insects Event",
        "catchingLevel": 1,
        "insectType": "Butterfly",
        "activity": "Daily",
        "weather": "🌞, 🌧️, 🌈",
        "timeOfDay": "🌙, 🌅, ☀️, 🌇",
        "prices": {
          "1star": 30,
          "2star": 45,
          "3star": 60,
          "4star": 120,
          "5star": 240
        },
        "notes": null,
        "_meta": {
          "source": "Excel Guide Jan 12",
          "confidence": "high",
          "translationSource": "existing"
        },
        "sourceUrl": "https://www.heartopia.live/zh/bugs/"
      },
      {
        "id": "purple-emperor",
        "name": "紫蛱蝶",
        "location": "Flower Field (Whale Mountain)",
        "catchingLevel": 3,
        "insectType": "Butterfly",
        "activity": "Daily",
        "weather": "🌞, 🌈",
        "timeOfDay": "🌙, ☀️, 🌇",
        "prices": {
          "1star": 90,
          "2star": 135,
          "3star": 180,
          "4star": 360,
          "5star": 720
        },
        "notes": null,
        "_meta": {
          "source": "Excel Guide Jan 12",
          "confidence": "high",
          "translationSource": "existing"
        },
        "sourceUrl": "https://www.heartopia.live/zh/bugs/"
      },
      {
        "id": "rainbow-stag-beetle",
        "name": "彩虹锹甲",
        "location": "Bait the Insects Event (Ruins)",
        "catchingLevel": 9,
        "insectType": "Beetle",
        "activity": "Daily",
        "weather": "🌞, 🌧️, 🌈",
        "timeOfDay": "🌙, 🌅, ☀️, 🌇",
        "prices": {
          "1star": 440,
          "2star": 660,
          "3star": 880,
          "4star": 1760,
          "5star": 3520
        },
        "notes": null,
        "_meta": {
          "source": "Excel Guide Jan 12",
          "confidence": "high",
          "translationSource": "existing"
        },
        "sourceUrl": "https://www.heartopia.live/zh/bugs/"
      },
      {
        "id": "rajah-brooke-s-birdwing",
        "name": "翠叶凤蝶",
        "location": "Home",
        "catchingLevel": 3,
        "insectType": "Butterfly",
        "activity": "Daily",
        "weather": "🌞, 🌧️, 🌈",
        "timeOfDay": "🌙, 🌅, 🌇",
        "prices": {
          "1star": 90,
          "2star": 135,
          "3star": 180,
          "4star": 360,
          "5star": 720
        },
        "notes": null,
        "_meta": {
          "source": "Excel Guide Jan 12",
          "confidence": "high",
          "translationSource": "existing"
        },
        "sourceUrl": "https://www.heartopia.live/zh/bugs/"
      },
      {
        "id": "seven-spotted-ladybug",
        "name": "七星瓢虫",
        "location": "Suburbs",
        "catchingLevel": 2,
        "insectType": "Beetle",
        "activity": "Daily",
        "weather": "🌧️, 🌈",
        "timeOfDay": "🌙, 🌅, ☀️, 🌇",
        "prices": {
          "1star": 110,
          "2star": 165,
          "3star": 220,
          "4star": 440,
          "5star": 880
        },
        "notes": null,
        "_meta": {
          "source": "Excel Guide Jan 12",
          "confidence": "high",
          "translationSource": "existing"
        },
        "sourceUrl": "https://www.heartopia.live/zh/bugs/"
      },
      {
        "id": "siberian-grasshopper",
        "name": "西伯利亚蚱蜢",
        "location": "Fishing Village",
        "catchingLevel": 2,
        "insectType": "Grasshopper",
        "activity": "Daily",
        "weather": "🌞, 🌧️, 🌈",
        "timeOfDay": "🌙, 🌅, ☀️, 🌇",
        "prices": {
          "1star": 90,
          "2star": 135,
          "3star": 180,
          "4star": 360,
          "5star": 720
        },
        "notes": null,
        "_meta": {
          "source": "Excel Guide Jan 12",
          "confidence": "high",
          "translationSource": "existing"
        },
        "sourceUrl": "https://www.heartopia.live/zh/bugs/"
      },
      {
        "id": "silver-jewel-scarab",
        "name": "银宝石金龟",
        "location": "Onsen Stone Cliff (Side of trees)",
        "catchingLevel": 6,
        "insectType": "Beetle",
        "activity": "Daily",
        "weather": "🌞, 🌈",
        "timeOfDay": "🌙, 🌅, ☀️",
        "prices": {
          "1star": 165,
          "2star": 247,
          "3star": 330,
          "4star": 660,
          "5star": 1320
        },
        "notes": null,
        "_meta": {
          "source": "Excel Guide Jan 12",
          "confidence": "high",
          "translationSource": "existing"
        },
        "sourceUrl": "https://www.heartopia.live/zh/bugs/"
      },
      {
        "id": "spanish-moon-moth",
        "name": "西班牙月蛾",
        "location": "Forest (Spirit Oak Pine Forest)",
        "catchingLevel": 8,
        "insectType": "Butterfly",
        "activity": "Daily",
        "weather": "🌞, 🌈",
        "timeOfDay": "☀️, 🌇",
        "prices": {
          "1star": 150,
          "2star": 225,
          "3star": 300,
          "4star": 600,
          "5star": 1200
        },
        "notes": null,
        "_meta": {
          "source": "Excel Guide Jan 12",
          "confidence": "high",
          "translationSource": "existing"
        },
        "sourceUrl": "https://www.heartopia.live/zh/bugs/"
      },
      {
        "id": "splay-footed-carpenter",
        "name": "扁足木蜂",
        "location": "Flower Field (Whale Mountain)",
        "catchingLevel": 5,
        "insectType": "Bee",
        "activity": "Daily",
        "weather": "🌞, 🌈",
        "timeOfDay": "🌙, 🌅, ☀️, 🌇",
        "prices": {
          "1star": 165,
          "2star": 247,
          "3star": 330,
          "4star": 660,
          "5star": 1320
        },
        "notes": null,
        "_meta": {
          "source": "Excel Guide Jan 12",
          "confidence": "high",
          "translationSource": "existing"
        },
        "sourceUrl": "https://www.heartopia.live/zh/bugs/"
      },
      {
        "id": "stag-beetle",
        "name": "锹甲",
        "location": "Forest (Jump Puzzle)",
        "catchingLevel": 6,
        "insectType": "Beetle",
        "activity": "Daily",
        "weather": "🌧️, 🌈",
        "timeOfDay": "🌅, ☀️, 🌇",
        "prices": {
          "1star": 275,
          "2star": 412,
          "3star": 550,
          "4star": 1100,
          "5star": 2200
        },
        "notes": null,
        "_meta": {
          "source": "Excel Guide Jan 12",
          "confidence": "high",
          "translationSource": "existing"
        },
        "sourceUrl": "https://www.heartopia.live/zh/bugs/"
      },
      {
        "id": "sulkowsky-s-morpho",
        "name": "苏尔科夫斯基闪蝶",
        "location": "Inflatable Insect Attractor Specialty",
        "catchingLevel": 1,
        "insectType": "Butterfly",
        "activity": "Daily",
        "weather": "🌞, 🌧️, 🌈",
        "timeOfDay": "🌙, 🌅, ☀️, 🌇",
        "prices": {
          "1star": 90,
          "2star": 135,
          "3star": 180,
          "4star": 360,
          "5star": 720
        },
        "notes": null,
        "_meta": {
          "source": "Excel Guide Jan 12",
          "confidence": "high",
          "translationSource": "existing"
        },
        "sourceUrl": "https://www.heartopia.live/zh/bugs/"
      },
      {
        "id": "sunset-morpho",
        "name": "日落闪蝶",
        "location": "Forest (Deer Tower)",
        "catchingLevel": 10,
        "insectType": "Butterfly",
        "activity": "Daily",
        "weather": "🌈",
        "timeOfDay": "🌅, ☀️",
        "prices": {
          "1star": 240,
          "2star": 360,
          "3star": 480,
          "4star": 960,
          "5star": 1920
        },
        "notes": null,
        "_meta": {
          "source": "Excel Guide Jan 12",
          "confidence": "high",
          "translationSource": "existing"
        },
        "sourceUrl": "https://www.heartopia.live/zh/bugs/"
      },
      {
        "id": "waroona-cuckoo-bee",
        "name": "瓦鲁纳杜鹃蜂",
        "location": "Forest (Deer Tower)",
        "catchingLevel": 3,
        "insectType": "Bee",
        "activity": "Daily",
        "weather": "🌞, 🌧️, 🌈",
        "timeOfDay": "🌙, 🌅, ☀️, 🌇",
        "prices": {
          "1star": 165,
          "2star": 247,
          "3star": 330,
          "4star": 660,
          "5star": 1320
        },
        "notes": null,
        "_meta": {
          "source": "Excel Guide Jan 12",
          "confidence": "high",
          "translationSource": "existing"
        },
        "sourceUrl": "https://www.heartopia.live/zh/bugs/"
      },
      {
        "id": "wasp-beetle",
        "name": "黄蜂甲",
        "location": "Forest",
        "catchingLevel": 2,
        "insectType": "Beetle",
        "activity": "Daily",
        "weather": "🌞, 🌧️, 🌈",
        "timeOfDay": "🌙, 🌅, ☀️, 🌇",
        "prices": {
          "1star": 110,
          "2star": 165,
          "3star": 220,
          "4star": 440,
          "5star": 880
        },
        "notes": null,
        "_meta": {
          "source": "Excel Guide Jan 12",
          "confidence": "high",
          "translationSource": "existing"
        },
        "sourceUrl": "https://www.heartopia.live/zh/bugs/"
      },
      {
        "id": "white-witch",
        "name": "白巫师夜蛾",
        "location": "Bait the Insects Event",
        "catchingLevel": 5,
        "insectType": "Butterfly",
        "activity": "Daily",
        "weather": "🌞, 🌈",
        "timeOfDay": "🌙, 🌅, ☀️, 🌇",
        "prices": {
          "1star": 90,
          "2star": 135,
          "3star": 180,
          "4star": 360,
          "5star": 720
        },
        "notes": null,
        "_meta": {
          "source": "Excel Guide Jan 12",
          "confidence": "high",
          "translationSource": "existing"
        },
        "sourceUrl": "https://www.heartopia.live/zh/bugs/"
      },
      {
        "id": "winter-frost-season-frostspore-mother-of-pearl",
        "name": "冬霜季: 霜孢珍珠蝶",
        "location": "Forest (Jump Puzzle)",
        "weather": "🌞, 🌧️, 🌈",
        "timeOfDay": "🌙, 🌅, ☀️, 🌇",
        "activity": "Winter Frost Season",
        "catchingLevel": 1,
        "insectType": "Butterfly",
        "prices": {
          "1star": 60,
          "2star": 90,
          "3star": 120,
          "4star": 240,
          "5star": 480
        },
        "_meta": {
          "source": "Excel Guide Feb 22",
          "confidence": "high",
          "translationSource": "llm"
        },
        "sourceUrl": "https://www.heartopia.live/zh/bugs/"
      },
      {
        "id": "winter-frost-season-frostspore-postman-butterfly",
        "name": "冬霜季: 霜孢邮差蝶",
        "location": "Forest",
        "weather": "🌞, 🌧️, 🌈",
        "timeOfDay": "🌙, 🌅, ☀️, 🌇",
        "activity": "Winter Frost Season - Hidden Phase ONLY",
        "catchingLevel": 1,
        "insectType": "Butterfly",
        "prices": {
          "1star": 90,
          "2star": 135,
          "3star": 180,
          "4star": 360,
          "5star": 720
        },
        "_meta": {
          "source": "Excel Guide Feb 22",
          "confidence": "high",
          "translationSource": "llm"
        },
        "sourceUrl": "https://www.heartopia.live/zh/bugs/"
      },
      {
        "id": "winter-frost-season-frostspore-purple-spotted-swallowtail",
        "name": "冬霜季: 霜孢紫斑凤蝶",
        "location": "Forest (Spirit Oak Pine Forest)",
        "weather": "🌞, 🌧️, 🌈",
        "timeOfDay": "🌙, 🌅, ☀️, 🌇",
        "activity": "Winter Frost Season",
        "catchingLevel": 1,
        "insectType": "Butterfly",
        "prices": {
          "1star": 60,
          "2star": 90,
          "3star": 120,
          "4star": 240,
          "5star": 480
        },
        "_meta": {
          "source": "Excel Guide Feb 22",
          "confidence": "high",
          "translationSource": "llm"
        },
        "sourceUrl": "https://www.heartopia.live/zh/bugs/"
      },
      {
        "id": "winter-frost-season-frostspore-queen-alexandras-birdwing",
        "name": "冬霜季: 霜孢亚历山大女王鸟翼蝶",
        "location": "Forest (Deer Tower)",
        "weather": "🌞, 🌧️, 🌈",
        "timeOfDay": "🌙, 🌅, ☀️, 🌇",
        "activity": "Winter Frost Season",
        "catchingLevel": 1,
        "insectType": "Butterfly",
        "prices": {
          "1star": 60,
          "2star": 90,
          "3star": 120,
          "4star": 240,
          "5star": 480
        },
        "_meta": {
          "source": "Excel Guide Feb 22",
          "confidence": "high",
          "translationSource": "llm"
        },
        "sourceUrl": "https://www.heartopia.live/zh/bugs/"
      },
      {
        "id": "winter-frost-season-frostspore-sulkowskys-morpho",
        "name": "冬霜季: 霜孢苏尔科夫斯基闪蝶",
        "location": "Forest (Deer Tower)",
        "weather": "🌞, 🌧️, 🌈",
        "timeOfDay": "🌙, 🌅, ☀️, 🌇",
        "activity": "Winter Frost Season",
        "catchingLevel": 1,
        "insectType": "Butterfly",
        "prices": {
          "1star": 60,
          "2star": 90,
          "3star": 120,
          "4star": 240,
          "5star": 480
        },
        "_meta": {
          "source": "Excel Guide Feb 22",
          "confidence": "high",
          "translationSource": "llm"
        },
        "sourceUrl": "https://www.heartopia.live/zh/bugs/"
      }
    ]
  },
  {
    "slug": "birds",
    "title": "鸟类图鉴",
    "navTitle": "鸟类",
    "icon": "Bird",
    "category": "收集",
    "countLabel": "种鸟类",
    "sourcePath": "/zh/birds/",
    "sourceUrl": "https://www.heartopia.live/zh/birds/",
    "sourceFetchedAt": "2026-05-12",
    "description": "按观鸟等级、出没地点、天气、时间和售价整理，适合规划观鸟路线。",
    "tip": "观鸟路线适合和森林湖、温泉山、花田等采集路线合并，一次解决多个目标。",
    "facets": [
      {
        "key": "location",
        "label": "地点"
      },
      {
        "key": "activity",
        "label": "活动"
      },
      {
        "key": "weather",
        "label": "天气"
      }
    ],
    "sortKeys": [
      {
        "key": "name",
        "label": "名称"
      },
      {
        "key": "birdwatchLevel",
        "label": "等级"
      },
      {
        "key": "location",
        "label": "地点"
      }
    ],
    "fields": [
      {
        "key": "birdwatchLevel",
        "label": "观鸟等级",
        "prefix": "Lv."
      },
      {
        "key": "location",
        "label": "地点"
      },
      {
        "key": "weather",
        "label": "天气"
      },
      {
        "key": "timeOfDay",
        "label": "时间"
      },
      {
        "key": "activity",
        "label": "活动"
      },
      {
        "key": "prices",
        "label": "售价",
        "kind": "stars"
      }
    ],
    "items": [
      {
        "id": "african-olive-pigeon",
        "name": "非洲橄榄鸽",
        "location": "Onsen Mountain (Onsen)",
        "birdwatchLevel": 5,
        "activity": "Daily",
        "weather": "🌞, 🌧️, 🌈",
        "timeOfDay": "🌙, 🌅, ☀️, 🌇",
        "prices": {
          "1star": 27,
          "2star": 110,
          "3star": 220,
          "4star": 440,
          "5star": 880
        },
        "_meta": {
          "source": "Excel Guide Jan 12",
          "confidence": "high",
          "translationSource": "existing"
        },
        "sourceUrl": "https://www.heartopia.live/zh/birds/"
      },
      {
        "id": "american-flamingo",
        "name": "美洲红鹳",
        "location": "Flower Field",
        "birdwatchLevel": 9,
        "activity": "Daily",
        "weather": "🌈",
        "timeOfDay": "☀️",
        "prices": {
          "1star": 55,
          "2star": 220,
          "3star": 440,
          "4star": 880,
          "5star": 1760
        },
        "_meta": {
          "source": "Excel Guide Jan 12",
          "confidence": "high",
          "translationSource": "existing"
        },
        "sourceUrl": "https://www.heartopia.live/zh/birds/"
      },
      {
        "id": "audouins-gull",
        "name": "奥杜因鸥",
        "location": "Whale Sea (seaside & beaches)",
        "birdwatchLevel": 3,
        "activity": "Daily",
        "weather": "🌞, 🌧️, 🌈",
        "timeOfDay": "🌙, 🌅, ☀️, 🌇",
        "prices": {
          "1star": 17,
          "2star": 70,
          "3star": 140,
          "4star": 280,
          "5star": 560
        },
        "_meta": {
          "source": "Excel Guide Jan 12",
          "confidence": "high",
          "translationSource": "existing"
        },
        "sourceUrl": "https://www.heartopia.live/zh/birds/"
      },
      {
        "id": "azure-tit",
        "name": "蓝山雀",
        "location": "Flower Field (Windmill Flower Field)",
        "birdwatchLevel": 7,
        "activity": "Daily",
        "weather": "🌞, 🌧️, 🌈",
        "timeOfDay": "🌙, 🌅, ☀️, 🌇",
        "prices": {
          "1star": 22,
          "2star": 90,
          "3star": 180,
          "4star": 360,
          "5star": 720
        },
        "_meta": {
          "source": "Excel Guide Jan 12",
          "confidence": "high",
          "translationSource": "existing"
        },
        "sourceUrl": "https://www.heartopia.live/zh/birds/"
      },
      {
        "id": "bearded-reedling",
        "name": "文须雀",
        "location": "Onsen Mountain",
        "birdwatchLevel": 1,
        "activity": "Daily",
        "weather": "🌞, 🌧️, 🌈",
        "timeOfDay": "🌙, 🌅, ☀️, 🌇",
        "prices": {
          "1star": 10,
          "2star": 40,
          "3star": 80,
          "4star": 160,
          "5star": 320
        },
        "_meta": {
          "source": "Excel Guide Jan 12",
          "confidence": "high",
          "translationSource": "existing"
        },
        "sourceUrl": "https://www.heartopia.live/zh/birds/"
      },
      {
        "id": "blue-peafowl",
        "name": "蓝孔雀",
        "location": "Nest of Hundreds Event",
        "birdwatchLevel": null,
        "activity": "Daily",
        "weather": "🌞, 🌧️, 🌈",
        "timeOfDay": "🌙, 🌅, ☀️, 🌇",
        "prices": {
          "1star": 10,
          "2star": 40,
          "3star": 80,
          "4star": 160,
          "5star": 320
        },
        "_meta": {
          "source": "Excel Guide Jan 12",
          "confidence": "high",
          "translationSource": "existing"
        },
        "sourceUrl": "https://www.heartopia.live/zh/birds/"
      },
      {
        "id": "blue-and-yellow-macaw",
        "name": "蓝黄金刚鹦鹉",
        "location": "Nest of Hundreds Event",
        "birdwatchLevel": null,
        "activity": "Daily",
        "weather": "🌞, 🌧️, 🌈",
        "timeOfDay": "🌙, 🌅, ☀️, 🌇",
        "prices": {
          "1star": 7,
          "2star": 30,
          "3star": 60,
          "4star": 120,
          "5star": 240
        },
        "_meta": {
          "source": "Excel Guide Jan 12",
          "confidence": "high",
          "translationSource": "existing"
        },
        "sourceUrl": "https://www.heartopia.live/zh/birds/"
      },
      {
        "id": "brown-noddy",
        "name": "褐憨鸥",
        "location": "Old Ocean Seaside",
        "birdwatchLevel": 5,
        "activity": "Daily",
        "weather": "🌞, 🌧️, 🌈",
        "timeOfDay": "🌙, 🌅, ☀️, 🌇",
        "prices": {
          "1star": 22,
          "2star": 90,
          "3star": 180,
          "4star": 360,
          "5star": 720
        },
        "_meta": {
          "source": "Excel Guide Jan 12",
          "confidence": "high",
          "translationSource": "existing"
        },
        "sourceUrl": "https://www.heartopia.live/zh/birds/"
      },
      {
        "id": "cinnamon-ground-dove",
        "name": "肉桂地鸠",
        "location": "Fishing Village (East Pier)",
        "birdwatchLevel": 6,
        "activity": "Daily",
        "weather": "🌞, 🌧️, 🌈",
        "timeOfDay": "🌙, 🌅, ☀️, 🌇",
        "prices": {
          "1star": 27,
          "2star": 110,
          "3star": 220,
          "4star": 440,
          "5star": 880
        },
        "_meta": {
          "source": "Excel Guide Jan 12",
          "confidence": "high",
          "translationSource": "existing"
        },
        "sourceUrl": "https://www.heartopia.live/zh/birds/"
      },
      {
        "id": "common-kestrel",
        "name": "红隼",
        "location": "Forest (Deer Tower)",
        "birdwatchLevel": 7,
        "activity": "Daily",
        "weather": "🌞, 🌈",
        "timeOfDay": "🌙, 🌅, ☀️, 🌇",
        "prices": {
          "1star": 47,
          "2star": 190,
          "3star": 380,
          "4star": 760,
          "5star": 1520
        },
        "_meta": {
          "source": "Excel Guide Jan 12",
          "confidence": "high",
          "translationSource": "existing"
        },
        "sourceUrl": "https://www.heartopia.live/zh/birds/"
      },
      {
        "id": "double-barred-finch",
        "name": "雀鸟",
        "location": "Fishing Village (Lighthouse)",
        "birdwatchLevel": 3,
        "activity": "Daily",
        "weather": "🌞, 🌧️, 🌈",
        "timeOfDay": "🌙, 🌅, ☀️, 🌇",
        "prices": {
          "1star": 10,
          "2star": 40,
          "3star": 80,
          "4star": 160,
          "5star": 320
        },
        "_meta": {
          "source": "Excel Guide Jan 12",
          "confidence": "high",
          "translationSource": "existing"
        },
        "sourceUrl": "https://www.heartopia.live/zh/birds/"
      },
      {
        "id": "eastern-bluebird",
        "name": "东蓝鸲",
        "location": "Suburbs",
        "birdwatchLevel": 7,
        "activity": "Daily",
        "weather": "🌧️, 🌈",
        "timeOfDay": "🌙, 🌅, ☀️, 🌇",
        "prices": {
          "2star": 120,
          "1star": 30,
          "3star": 240,
          "4star": 480,
          "5star": 960
        },
        "_meta": {
          "source": "Excel Guide Jan 12",
          "confidence": "high",
          "translationSource": "existing"
        },
        "sourceUrl": "https://www.heartopia.live/zh/birds/"
      },
      {
        "id": "eurasian-bullfinch",
        "name": "红腹灰雀",
        "location": "Suburbs",
        "birdwatchLevel": 2,
        "activity": "Daily",
        "weather": "🌞, 🌧️, 🌈",
        "timeOfDay": "🌙, 🌅, ☀️, 🌇",
        "prices": {
          "1star": 7,
          "2star": 30,
          "3star": 60,
          "4star": 120,
          "5star": 240
        },
        "_meta": {
          "source": "Excel Guide Jan 12",
          "confidence": "high",
          "translationSource": "existing"
        },
        "sourceUrl": "https://www.heartopia.live/zh/birds/"
      },
      {
        "id": "eurasian-chaffinch",
        "name": "苍头燕雀",
        "location": "Flower Field",
        "birdwatchLevel": 2,
        "activity": "Daily",
        "weather": "🌞, 🌧️, 🌈",
        "timeOfDay": "🌙, 🌅, ☀️, 🌇",
        "prices": {
          "1star": 7,
          "2star": 30,
          "3star": 60,
          "4star": 120,
          "5star": 240
        },
        "_meta": {
          "source": "Excel Guide Jan 12",
          "confidence": "high",
          "translationSource": "existing"
        },
        "sourceUrl": "https://www.heartopia.live/zh/birds/"
      },
      {
        "id": "eurasian-collared-dove",
        "name": "灰斑鸠",
        "location": "Home",
        "birdwatchLevel": 1,
        "activity": "Daily",
        "weather": "🌞, 🌧️, 🌈",
        "timeOfDay": "🌙, 🌅, ☀️, 🌇",
        "prices": {
          "1star": 10,
          "2star": 40,
          "3star": 80,
          "4star": 160,
          "5star": 320
        },
        "_meta": {
          "source": "Excel Guide Jan 12",
          "confidence": "high",
          "translationSource": "existing"
        },
        "sourceUrl": "https://www.heartopia.live/zh/birds/"
      },
      {
        "id": "eurasian-golden-oriole",
        "name": "金黄鹂",
        "location": "Home",
        "birdwatchLevel": 3,
        "activity": "Daily",
        "weather": "🌞, 🌧️, 🌈",
        "timeOfDay": "🌙, 🌅, ☀️, 🌇",
        "prices": {
          "1star": 15,
          "2star": 60,
          "3star": 120,
          "4star": 240,
          "5star": 480
        },
        "_meta": {
          "source": "Excel Guide Jan 12",
          "confidence": "high",
          "translationSource": "existing"
        },
        "sourceUrl": "https://www.heartopia.live/zh/birds/"
      },
      {
        "id": "eurasian-nuthatch",
        "name": "䴓",
        "location": "Fishing Village",
        "birdwatchLevel": 2,
        "activity": "Daily",
        "weather": "🌞, 🌧️, 🌈",
        "timeOfDay": "🌙, 🌅, ☀️, 🌇",
        "prices": {
          "1star": 10,
          "2star": 40,
          "3star": 80,
          "4star": 160,
          "5star": 320
        },
        "_meta": {
          "source": "Excel Guide Jan 12",
          "confidence": "high",
          "translationSource": "existing"
        },
        "sourceUrl": "https://www.heartopia.live/zh/birds/"
      },
      {
        "id": "eurasian-wigeon",
        "name": "赤颈鸭",
        "location": "River",
        "birdwatchLevel": 2,
        "activity": "Daily",
        "weather": "🌞, 🌧️, 🌈",
        "timeOfDay": "🌙, 🌅, ☀️, 🌇",
        "prices": {
          "1star": 17,
          "2star": 70,
          "3star": 140,
          "4star": 280,
          "5star": 560
        },
        "_meta": {
          "source": "Excel Guide Jan 12",
          "confidence": "high",
          "translationSource": "existing"
        },
        "sourceUrl": "https://www.heartopia.live/zh/birds/"
      },
      {
        "id": "eurasian-wren",
        "name": "鹪鹩",
        "location": "Forest",
        "birdwatchLevel": 1,
        "activity": "Daily",
        "weather": "🌞, 🌧️, 🌈",
        "timeOfDay": "🌙, 🌅, ☀️, 🌇",
        "prices": {
          "1star": 7,
          "2star": 30,
          "3star": 60,
          "4star": 120,
          "5star": 240
        },
        "_meta": {
          "source": "Excel Guide Jan 12",
          "confidence": "high",
          "translationSource": "existing"
        },
        "sourceUrl": "https://www.heartopia.live/zh/birds/"
      },
      {
        "id": "european-bee-eater",
        "name": "黄喉蜂虎",
        "location": "Onsen Mountain Lake Shore",
        "birdwatchLevel": 5,
        "activity": "Daily",
        "weather": "🌧️, 🌈",
        "timeOfDay": "🌙, 🌅, ☀️, 🌇",
        "prices": {
          "1star": 22,
          "2star": 90,
          "3star": 180,
          "4star": 360,
          "5star": 720
        },
        "_meta": {
          "source": "Excel Guide Jan 12",
          "confidence": "high",
          "translationSource": "existing"
        },
        "sourceUrl": "https://www.heartopia.live/zh/birds/"
      },
      {
        "id": "european-robin",
        "name": "知更鸟",
        "location": "Central Area",
        "birdwatchLevel": 1,
        "activity": "Daily",
        "weather": "🌞, 🌧️, 🌈",
        "timeOfDay": "🌙, 🌅, ☀️, 🌇",
        "prices": {
          "1star": 7,
          "2star": 30,
          "3star": 60,
          "4star": 120,
          "5star": 240
        },
        "_meta": {
          "source": "Excel Guide Jan 12",
          "confidence": "high",
          "translationSource": "existing"
        },
        "sourceUrl": "https://www.heartopia.live/zh/birds/"
      },
      {
        "id": "european-shag",
        "name": "欧洲绿鸬鹚",
        "location": "Below Forest Island/around lighthouse",
        "birdwatchLevel": 3,
        "activity": "Daily",
        "weather": "🌞, 🌧️, 🌈",
        "timeOfDay": "🌙, 🌅, ☀️, 🌇",
        "prices": {
          "1star": 17,
          "2star": 70,
          "3star": 140,
          "4star": 280,
          "5star": 560
        },
        "_meta": {
          "source": "Excel Guide Jan 12",
          "confidence": "high",
          "translationSource": "existing"
        },
        "sourceUrl": "https://www.heartopia.live/zh/birds/"
      },
      {
        "id": "great-tit",
        "name": "大山雀",
        "location": "Onsen Mountain",
        "birdwatchLevel": 2,
        "activity": "Daily",
        "weather": "🌞, 🌧️, 🌈",
        "timeOfDay": "🌙, 🌅, ☀️, 🌇",
        "prices": {
          "1star": 7,
          "2star": 30,
          "3star": 60,
          "4star": 120,
          "5star": 240
        },
        "_meta": {
          "source": "Excel Guide Jan 12",
          "confidence": "high",
          "translationSource": "existing"
        },
        "sourceUrl": "https://www.heartopia.live/zh/birds/"
      },
      {
        "id": "great-green-macaw",
        "name": "大绿金刚鹦鹉",
        "location": "Nest of Hundreds Event",
        "birdwatchLevel": null,
        "activity": "Daily",
        "weather": "🌞, 🌈",
        "timeOfDay": "🌙, 🌅, ☀️, 🌇",
        "prices": {
          "1star": 15,
          "2star": 60,
          "3star": 120,
          "4star": 240,
          "5star": 480
        },
        "_meta": {
          "source": "Excel Guide Jan 12",
          "confidence": "high",
          "translationSource": "existing"
        },
        "sourceUrl": "https://www.heartopia.live/zh/birds/"
      },
      {
        "id": "greater-flamingo",
        "name": "大红鹳",
        "location": "Waterside",
        "birdwatchLevel": 1,
        "activity": "Daily",
        "weather": "🌞, 🌧️, 🌈",
        "timeOfDay": "🌙, 🌅, ☀️, 🌇",
        "prices": {
          "1star": 15,
          "2star": 60,
          "3star": 120,
          "4star": 240,
          "5star": 480
        },
        "_meta": {
          "source": "Excel Guide Jan 12",
          "confidence": "high",
          "translationSource": "existing"
        },
        "sourceUrl": "https://www.heartopia.live/zh/birds/"
      },
      {
        "id": "hawfinch",
        "name": "锡嘴雀",
        "location": "Onsen Mountain (Crater Lake)",
        "birdwatchLevel": 6,
        "activity": "Daily",
        "weather": "🌞, 🌧️, 🌈",
        "timeOfDay": "🌇",
        "prices": {
          "1star": 15,
          "2star": 60,
          "3star": 120,
          "4star": 240,
          "5star": 480
        },
        "_meta": {
          "source": "Excel Guide Jan 12",
          "confidence": "high",
          "translationSource": "existing"
        },
        "sourceUrl": "https://www.heartopia.live/zh/birds/"
      },
      {
        "id": "imperial-shag",
        "name": "帝王鸬鹚",
        "location": "East Sea/Zephyr Sea",
        "birdwatchLevel": 9,
        "activity": "Daily",
        "weather": "🌞, 🌧️, 🌈",
        "timeOfDay": "🌙, 🌅, ☀️, 🌇",
        "prices": {
          "1star": 45,
          "2star": 180,
          "3star": 360,
          "4star": 720,
          "5star": 1440
        },
        "_meta": {
          "source": "Excel Guide Jan 12",
          "confidence": "high",
          "translationSource": "existing"
        },
        "sourceUrl": "https://www.heartopia.live/zh/birds/"
      },
      {
        "id": "invalid",
        "name": "无效",
        "location": "",
        "birdwatchLevel": null,
        "activity": null,
        "weather": "🌞, 🌧️, 🌈",
        "timeOfDay": "🌙, 🌅, ☀️, 🌇",
        "prices": {
          "1star": 1
        },
        "_meta": {
          "source": "Excel Guide Jan 12",
          "confidence": "high",
          "translationSource": "existing"
        },
        "sourceUrl": "https://www.heartopia.live/zh/birds/"
      },
      {
        "id": "jambu-fruit-dove",
        "name": "粉头果鸠",
        "location": "Suburbs",
        "birdwatchLevel": 7,
        "activity": "Daily",
        "weather": "🌞, 🌧️, 🌈",
        "timeOfDay": "🌙, 🌅, ☀️, 🌇",
        "prices": {
          "1star": 27,
          "2star": 110,
          "3star": 220,
          "4star": 440,
          "5star": 880
        },
        "_meta": {
          "source": "Excel Guide Jan 12",
          "confidence": "high",
          "translationSource": "existing"
        },
        "sourceUrl": "https://www.heartopia.live/zh/birds/"
      },
      {
        "id": "king-eider",
        "name": "王绒鸭",
        "location": "River",
        "birdwatchLevel": 3,
        "activity": "Daily",
        "weather": "🌞, 🌧️, 🌈",
        "timeOfDay": "🌙, 🌅, ☀️, 🌇",
        "prices": {
          "1star": 17,
          "2star": 70,
          "3star": 140,
          "4star": 280,
          "5star": 560
        },
        "_meta": {
          "source": "Excel Guide Jan 12",
          "confidence": "high",
          "translationSource": "existing"
        },
        "sourceUrl": "https://www.heartopia.live/zh/birds/"
      },
      {
        "id": "lady-amherst-pheasant",
        "name": "白腹锦鸡",
        "location": "Onsen Mountain (Ruins)",
        "birdwatchLevel": null,
        "activity": "Daily",
        "weather": "🌞, 🌧️, 🌈",
        "timeOfDay": "🌙, 🌅, ☀️, 🌇",
        "prices": {
          "1star": 17,
          "2star": 70,
          "3star": 140,
          "4star": 280,
          "5star": 560
        },
        "_meta": {
          "source": "Excel Guide Jan 12",
          "confidence": "high",
          "translationSource": "existing"
        },
        "sourceUrl": "https://www.heartopia.live/zh/birds/"
      },
      {
        "id": "lesser-flamingo",
        "name": "小红鹳",
        "location": "Forest Lake Shore",
        "birdwatchLevel": 5,
        "activity": "Daily",
        "weather": "🌧️, 🌈",
        "timeOfDay": "🌙, 🌅, ☀️, 🌇",
        "prices": {
          "1star": 27,
          "2star": 110,
          "3star": 220,
          "4star": 440,
          "5star": 880
        },
        "_meta": {
          "source": "Excel Guide Jan 12",
          "confidence": "high",
          "translationSource": "existing"
        },
        "sourceUrl": "https://www.heartopia.live/zh/birds/"
      },
      {
        "id": "long-eared-owl",
        "name": "长耳鸮",
        "location": "Onsen Mountain (Stone Cliff)",
        "birdwatchLevel": 6,
        "activity": "Daily",
        "weather": "🌞, 🌈",
        "timeOfDay": "🌙, 🌅, ☀️, 🌇",
        "prices": {
          "1star": 47,
          "2star": 190,
          "3star": 380,
          "4star": 760,
          "5star": 1520
        },
        "_meta": {
          "source": "Excel Guide Jan 12",
          "confidence": "high",
          "translationSource": "existing"
        },
        "sourceUrl": "https://www.heartopia.live/zh/birds/"
      },
      {
        "id": "long-tailed-tit",
        "name": "北长尾山雀",
        "location": "On Blanc's Head",
        "birdwatchLevel": 1,
        "activity": "Daily",
        "weather": "🌞, 🌧️, 🌈",
        "timeOfDay": "🌙, 🌅, ☀️, 🌇",
        "prices": {
          "1star": 2,
          "2star": 8,
          "3star": 16,
          "4star": 32,
          "5star": 64
        },
        "_meta": {
          "source": "Excel Guide Jan 12",
          "confidence": "high",
          "translationSource": "existing"
        },
        "sourceUrl": "https://www.heartopia.live/zh/birds/"
      },
      {
        "id": "mallard",
        "name": "绿头鸭",
        "location": "Lake",
        "birdwatchLevel": 1,
        "activity": "Daily",
        "weather": "🌞, 🌧️, 🌈",
        "timeOfDay": "🌙, 🌅, ☀️, 🌇",
        "prices": {
          "1star": 12,
          "2star": 50,
          "3star": 100,
          "4star": 200,
          "5star": 400
        },
        "_meta": {
          "source": "Excel Guide Jan 12",
          "confidence": "high",
          "translationSource": "existing"
        },
        "sourceUrl": "https://www.heartopia.live/zh/birds/"
      },
      {
        "id": "paradise-tanager",
        "name": "天堂唐纳雀",
        "location": "Suburbs",
        "birdwatchLevel": 9,
        "activity": "Daily",
        "weather": "🌈",
        "timeOfDay": "🌙, 🌅, ☀️, 🌇",
        "prices": {
          "1star": 30,
          "2star": 120,
          "3star": 240,
          "4star": 480,
          "5star": 960
        },
        "_meta": {
          "source": "Excel Guide Jan 12",
          "confidence": "high",
          "translationSource": "existing"
        },
        "sourceUrl": "https://www.heartopia.live/zh/birds/"
      },
      {
        "id": "peregrine-falcon",
        "name": "游隼",
        "location": "Onsen Mountain (Onsen)",
        "birdwatchLevel": 7,
        "activity": "Daily",
        "weather": "🌧️, 🌈",
        "timeOfDay": "🌙, 🌅, ☀️, 🌇",
        "prices": {
          "1star": 65,
          "2star": 260,
          "4star": 1040,
          "5star": 2080,
          "3star": 520
        },
        "_meta": {
          "source": "Excel Guide Jan 12",
          "confidence": "high",
          "translationSource": "existing"
        },
        "sourceUrl": "https://www.heartopia.live/zh/birds/"
      },
      {
        "id": "pied-imperial-pigeon",
        "name": "斑皇鸠",
        "location": "Fishing Village",
        "birdwatchLevel": 1,
        "activity": "Daily",
        "weather": "🌞, 🌧️, 🌈",
        "timeOfDay": "🌙, 🌅, ☀️, 🌇",
        "prices": {
          "1star": 10,
          "2star": 40,
          "3star": 80,
          "4star": 160,
          "5star": 320
        },
        "_meta": {
          "source": "Excel Guide Jan 12",
          "confidence": "high",
          "translationSource": "existing"
        },
        "sourceUrl": "https://www.heartopia.live/zh/birds/"
      },
      {
        "id": "pine-grosbeak",
        "name": "松雀",
        "location": "Forest Island",
        "birdwatchLevel": 4,
        "activity": "Daily",
        "weather": "🌞, 🌧️, 🌈",
        "timeOfDay": "🌙, 🌅, ☀️, 🌇",
        "prices": {
          "1star": 15,
          "2star": 60,
          "3star": 120,
          "4star": 240,
          "5star": 480
        },
        "_meta": {
          "source": "Excel Guide Jan 12",
          "confidence": "high",
          "translationSource": "existing"
        },
        "sourceUrl": "https://www.heartopia.live/zh/birds/"
      },
      {
        "id": "pink-pigeon",
        "name": "粉红鸽",
        "location": "Flower Field (Whale Mountain)",
        "birdwatchLevel": 7,
        "activity": "Daily",
        "weather": "🌞, 🌧️, 🌈",
        "timeOfDay": "🌙, 🌅, ☀️, 🌇",
        "prices": {
          "1star": 27,
          "2star": 110,
          "3star": 220,
          "4star": 440,
          "5star": 880
        },
        "_meta": {
          "source": "Excel Guide Jan 12",
          "confidence": "high",
          "translationSource": "existing"
        },
        "sourceUrl": "https://www.heartopia.live/zh/birds/"
      },
      {
        "id": "pink-necked-green-pigeon",
        "name": "粉颈绿鸠",
        "location": "Flower Field",
        "birdwatchLevel": 1,
        "activity": "Daily",
        "weather": "🌞, 🌧️, 🌈",
        "timeOfDay": "🌙, 🌅, ☀️, 🌇",
        "prices": {
          "1star": 15,
          "2star": 60,
          "3star": 120,
          "4star": 240,
          "5star": 480
        },
        "_meta": {
          "source": "Excel Guide Jan 12",
          "confidence": "high",
          "translationSource": "existing"
        },
        "sourceUrl": "https://www.heartopia.live/zh/birds/"
      },
      {
        "id": "przevalskis-parrotbill",
        "name": "灰冠鸦雀",
        "location": "Fishing Village Square",
        "birdwatchLevel": 4,
        "activity": "Daily",
        "weather": "🌞, 🌈",
        "timeOfDay": "🌙, 🌅, ☀️, 🌇",
        "prices": {
          "1star": 15,
          "2star": 60,
          "3star": 120,
          "4star": 240,
          "5star": 480
        },
        "_meta": {
          "source": "Excel Guide Jan 12",
          "confidence": "high",
          "translationSource": "existing"
        },
        "sourceUrl": "https://www.heartopia.live/zh/birds/"
      },
      {
        "id": "red-faced-cormorant",
        "name": "红脸鸬鹚",
        "location": "Old Sea/Whale Sea",
        "birdwatchLevel": 6,
        "activity": "Daily",
        "weather": "🌞, 🌧️, 🌈",
        "timeOfDay": "🌙, 🌅, ☀️, 🌇",
        "prices": {
          "1star": 22,
          "2star": 90,
          "3star": 180,
          "4star": 360,
          "5star": 720
        },
        "_meta": {
          "source": "Excel Guide Jan 12",
          "confidence": "high",
          "translationSource": "existing"
        },
        "sourceUrl": "https://www.heartopia.live/zh/birds/"
      },
      {
        "id": "redpolis",
        "name": "朱顶雀",
        "location": "Forest (Spirit Oak Pine Forest)",
        "birdwatchLevel": 7,
        "activity": "Daily",
        "weather": "🌞, 🌧️, 🌈",
        "timeOfDay": "🌙, 🌅, ☀️, 🌇",
        "prices": {},
        "_meta": {
          "source": "Excel Guide Jan 12",
          "confidence": "high",
          "translationSource": "existing"
        },
        "sourceUrl": "https://www.heartopia.live/zh/birds/"
      },
      {
        "id": "red-and-green-macaw",
        "name": "红绿金刚鹦鹉",
        "location": "Nest of Hundreds Event ",
        "birdwatchLevel": null,
        "activity": "Daily",
        "weather": "🌞, 🌧️, 🌈",
        "timeOfDay": "🌙, 🌅, ☀️, 🌇",
        "prices": {
          "1star": 10,
          "2star": 40,
          "3star": 80,
          "4star": 160,
          "5star": 320
        },
        "_meta": {
          "source": "Excel Guide Jan 12",
          "confidence": "high",
          "translationSource": "existing"
        },
        "sourceUrl": "https://www.heartopia.live/zh/birds/"
      },
      {
        "id": "regent-bowerbird",
        "name": "丽色园丁鸟",
        "location": "Forest (Spirit Oak Pine Forest)",
        "birdwatchLevel": 4,
        "activity": "Daily",
        "weather": "🌞, 🌧️, 🌈",
        "timeOfDay": "🌙, 🌅, ☀️, 🌇",
        "prices": {
          "1star": 15,
          "2star": 60,
          "3star": 120,
          "4star": 240,
          "5star": 480
        },
        "_meta": {
          "source": "Excel Guide Jan 12",
          "confidence": "high",
          "translationSource": "existing"
        },
        "sourceUrl": "https://www.heartopia.live/zh/birds/"
      },
      {
        "id": "ruddy-shelduck",
        "name": "赤麻鸭",
        "location": "Suburban Lake",
        "birdwatchLevel": 3,
        "activity": "Daily",
        "weather": "🌞, 🌧️, 🌈",
        "timeOfDay": "🌙, 🌅, ☀️, 🌇",
        "prices": {
          "1star": 17,
          "2star": 70,
          "3star": 140,
          "4star": 280,
          "5star": 560
        },
        "_meta": {
          "source": "Excel Guide Jan 12",
          "confidence": "high",
          "translationSource": "existing"
        },
        "sourceUrl": "https://www.heartopia.live/zh/birds/"
      },
      {
        "id": "seagull",
        "name": "海鸥",
        "location": "Seaside",
        "birdwatchLevel": null,
        "activity": "Daily",
        "weather": "🌞, 🌧️, 🌈",
        "timeOfDay": "🌙, 🌅, ☀️, 🌇",
        "prices": {
          "1star": 17,
          "2star": 70,
          "3star": 140,
          "4star": 280,
          "5star": 560
        },
        "_meta": {
          "source": "Excel Guide Jan 12",
          "confidence": "high",
          "translationSource": "existing"
        },
        "sourceUrl": "https://www.heartopia.live/zh/birds/"
      },
      {
        "id": "silver-throated-tit",
        "name": "银喉长尾山雀",
        "location": "Forest (Jump Puzzle)",
        "birdwatchLevel": 3,
        "activity": "Daily",
        "weather": "🌞, 🌧️, 🌈",
        "timeOfDay": "🌙, 🌅, ☀️, 🌇",
        "prices": {
          "1star": 10,
          "2star": 40,
          "3star": 80,
          "4star": 160,
          "5star": 320
        },
        "_meta": {
          "source": "Excel Guide Jan 12",
          "confidence": "high",
          "translationSource": "existing"
        },
        "sourceUrl": "https://www.heartopia.live/zh/birds/"
      },
      {
        "id": "smew",
        "name": "斑头秋沙鸭",
        "location": "Forest Lake",
        "birdwatchLevel": 4,
        "activity": "Daily",
        "weather": "🌞, 🌧️, 🌈",
        "timeOfDay": "🌙, 🌅, ☀️, 🌇",
        "prices": {
          "1star": 22,
          "2star": 90,
          "3star": 180,
          "4star": 360,
          "5star": 720
        },
        "_meta": {
          "source": "Excel Guide Jan 12",
          "confidence": "high",
          "translationSource": "existing"
        },
        "sourceUrl": "https://www.heartopia.live/zh/birds/"
      },
      {
        "id": "stock-dove",
        "name": "欧鸽",
        "location": "Central Area",
        "birdwatchLevel": 2,
        "activity": "Daily",
        "weather": "🌞, 🌧️, 🌈",
        "timeOfDay": "🌙, 🌅, ☀️, 🌇",
        "prices": {
          "1star": 10,
          "2star": 40,
          "3star": 80,
          "4star": 160,
          "5star": 320
        },
        "_meta": {
          "source": "Excel Guide Jan 12",
          "confidence": "high",
          "translationSource": "existing"
        },
        "sourceUrl": "https://www.heartopia.live/zh/birds/"
      },
      {
        "id": "tern",
        "name": "燕鸥",
        "location": "East Side Seaside",
        "birdwatchLevel": 7,
        "activity": "Daily",
        "weather": "🌈",
        "timeOfDay": "🌙, 🌅, ☀️, 🌇",
        "prices": {
          "1star": 35,
          "3star": 280,
          "2star": 140,
          "4star": 560,
          "5star": 1120
        },
        "_meta": {
          "source": "Excel Guide Jan 12",
          "confidence": "high",
          "translationSource": "existing"
        },
        "sourceUrl": "https://www.heartopia.live/zh/birds/"
      },
      {
        "id": "wallace-fruit-dove",
        "name": "华莱士果鸠",
        "location": "Flower Field (Windmill Flower Field)",
        "birdwatchLevel": null,
        "activity": "Daily",
        "weather": "🌞, 🌧️, 🌈",
        "timeOfDay": "🌙, 🌅, ☀️, 🌇",
        "prices": {
          "1star": 17,
          "2star": 70,
          "3star": 140,
          "4star": 280,
          "5star": 560
        },
        "_meta": {
          "source": "Excel Guide Jan 12",
          "confidence": "high",
          "translationSource": "existing"
        },
        "sourceUrl": "https://www.heartopia.live/zh/birds/"
      },
      {
        "id": "white-wagtail",
        "name": "白鹡鸰",
        "location": "Amethyst Beach",
        "birdwatchLevel": 4,
        "activity": "Daily",
        "weather": "🌞, 🌧️, 🌈",
        "timeOfDay": "🌙, 🌅, ☀️, 🌇",
        "prices": {
          "1star": 15,
          "2star": 60,
          "3star": 120,
          "4star": 240,
          "5star": 480
        },
        "_meta": {
          "source": "Excel Guide Jan 12",
          "confidence": "high",
          "translationSource": "existing"
        },
        "sourceUrl": "https://www.heartopia.live/zh/birds/"
      },
      {
        "id": "white-headed-duck",
        "name": "白头硬尾鸭",
        "location": "Onsen Mountain Lake",
        "birdwatchLevel": 9,
        "activity": "Daily",
        "weather": "🌧️, 🌈",
        "timeOfDay": "🌙, 🌅, ☀️, 🌇",
        "prices": {
          "1star": 45,
          "2star": 180,
          "3star": 360,
          "4star": 720
        },
        "_meta": {
          "source": "Excel Guide Jan 12",
          "confidence": "high",
          "translationSource": "existing"
        },
        "sourceUrl": "https://www.heartopia.live/zh/birds/"
      },
      {
        "id": "wonga-pigeon",
        "name": "翁加鸽",
        "location": "Forest",
        "birdwatchLevel": 1,
        "activity": "Daily",
        "weather": "🌞, 🌧️, 🌈",
        "timeOfDay": "🌙, 🌅, ☀️, 🌇",
        "prices": {
          "1star": 15,
          "2star": 60,
          "3star": 120,
          "4star": 240,
          "5star": 480
        },
        "_meta": {
          "source": "Excel Guide Jan 12",
          "confidence": "high",
          "translationSource": "existing"
        },
        "sourceUrl": "https://www.heartopia.live/zh/birds/"
      },
      {
        "id": "woodchat-shrike",
        "name": "林䳭伯劳",
        "location": "Suburbs",
        "birdwatchLevel": 2,
        "activity": "Daily",
        "weather": "🌞, 🌧️, 🌈",
        "timeOfDay": "🌙, 🌅, ☀️, 🌇",
        "prices": {
          "1star": 10,
          "2star": 40,
          "3star": 80,
          "4star": 160,
          "5star": 320
        },
        "_meta": {
          "source": "Excel Guide Jan 12",
          "confidence": "high",
          "translationSource": "existing"
        },
        "sourceUrl": "https://www.heartopia.live/zh/birds/"
      },
      {
        "id": "yellow-bellied-flycatcher",
        "name": "黄腹鹟",
        "location": "Fishing Village (Wharf)",
        "birdwatchLevel": 5,
        "activity": "Daily",
        "weather": "🌞, 🌧️, 🌈",
        "timeOfDay": "🌙, 🌅, ☀️, 🌇",
        "prices": {
          "1star": 15,
          "2star": 60,
          "3star": 120,
          "4star": 240,
          "5star": 480
        },
        "_meta": {
          "source": "Excel Guide Jan 12",
          "confidence": "high",
          "translationSource": "existing"
        },
        "sourceUrl": "https://www.heartopia.live/zh/birds/"
      },
      {
        "id": "amur-falcon",
        "name": "阿穆尔隼",
        "activity": "Daily",
        "birdwatchLevel": 10,
        "_meta": {
          "source": "Excel Guide Feb 22",
          "confidence": "high",
          "translationSource": "llm"
        },
        "location": "Onsen Mountain (Ruins)",
        "weather": "🌞, 🌧️, 🌈",
        "timeOfDay": "🌙, 🌅, ☀️, 🌇",
        "prices": {
          "1star": 65,
          "2star": 260,
          "3star": 520,
          "4star": 1040,
          "5star": 2080
        },
        "sourceUrl": "https://www.heartopia.live/zh/birds/"
      },
      {
        "id": "azores-bullfinch",
        "name": "亚速尔群岛灰雀",
        "activity": "Daily",
        "birdwatchLevel": 10,
        "_meta": {
          "source": "Excel Guide Feb 22",
          "confidence": "high",
          "translationSource": "llm"
        },
        "location": "Fishing Village (East Pier)",
        "weather": "🌈",
        "timeOfDay": "🌙, 🌅, ☀️, 🌇",
        "prices": {
          "1star": 30,
          "2star": 120,
          "3star": 240,
          "4star": 480,
          "5star": 960
        },
        "sourceUrl": "https://www.heartopia.live/zh/birds/"
      },
      {
        "id": "lears-macaw",
        "name": "李尔金刚鹦鹉",
        "location": "Nest of Hundreds Event",
        "weather": "🌧️, 🌈",
        "timeOfDay": "🌙, 🌅, ☀️, 🌇",
        "activity": "Daily",
        "birdwatchLevel": 7,
        "prices": {
          "1star": 22,
          "2star": 90,
          "3star": 180,
          "4star": 360,
          "5star": 720
        },
        "_meta": {
          "source": "Excel Guide Feb 22",
          "confidence": "high",
          "translationSource": "llm"
        },
        "sourceUrl": "https://www.heartopia.live/zh/birds/"
      },
      {
        "id": "winter-frost-season-winter-eurasian-wigeon",
        "name": "冬霜季: 冬季赤颈鸭",
        "location": "Suburban Lake",
        "weather": "🌞, 🌧️, 🌈",
        "timeOfDay": "🌙, 🌅, ☀️, 🌇",
        "activity": "Winter Frost Season",
        "birdwatchLevel": 1,
        "prices": {
          "1star": 17,
          "2star": 70,
          "3star": 140,
          "4star": 280,
          "5star": 560
        },
        "_meta": {
          "source": "Excel Guide Feb 22",
          "confidence": "high",
          "translationSource": "llm"
        },
        "sourceUrl": "https://www.heartopia.live/zh/birds/"
      },
      {
        "id": "winter-frost-season-winter-greater-flamingo",
        "name": "冬霜季: 冬季大火烈鸟",
        "location": "Suburban Lake",
        "weather": "🌞, 🌧️, 🌈",
        "timeOfDay": "🌙, 🌅, ☀️, 🌇",
        "activity": "Winter Frost Season",
        "birdwatchLevel": 1,
        "prices": {
          "1star": 20,
          "2star": 80,
          "3star": 160,
          "4star": 320,
          "5star": 640
        },
        "_meta": {
          "source": "Excel Guide Feb 22",
          "confidence": "high",
          "translationSource": "llm"
        },
        "sourceUrl": "https://www.heartopia.live/zh/birds/"
      },
      {
        "id": "winter-frost-season-winter-mallard",
        "name": "冬霜季: 冬季绿头鸭",
        "location": "Suburban Lake",
        "weather": "🌞, 🌧️, 🌈",
        "timeOfDay": "🌙, 🌅, ☀️, 🌇",
        "activity": "Winter Frost Season",
        "birdwatchLevel": 1,
        "prices": {
          "1star": 17,
          "2star": 70,
          "3star": 140,
          "4star": 280,
          "5star": 560
        },
        "_meta": {
          "source": "Excel Guide Feb 22",
          "confidence": "high",
          "translationSource": "llm"
        },
        "sourceUrl": "https://www.heartopia.live/zh/birds/"
      },
      {
        "id": "winter-frost-season-winter-mandarin-duck",
        "name": "冬霜季: 冬季鸳鸯",
        "location": "Suburban Lake",
        "weather": "🌞, 🌧️, 🌈",
        "timeOfDay": "🌙, 🌅, ☀️, 🌇",
        "activity": "Winter Frost Season - Hidden Phase ONLY",
        "birdwatchLevel": 1,
        "prices": {
          "1star": 22,
          "2star": 90,
          "3star": 180,
          "4star": 360,
          "5star": 720
        },
        "_meta": {
          "source": "Excel Guide Feb 22",
          "confidence": "high",
          "translationSource": "llm"
        },
        "sourceUrl": "https://www.heartopia.live/zh/birds/"
      },
      {
        "id": "winter-frost-season-winter-smew",
        "name": "冬霜季: 冬季白秋沙鸭",
        "location": "Suburban Lake",
        "weather": "🌞, 🌧️, 🌈",
        "timeOfDay": "🌙, 🌅, ☀️, 🌇",
        "activity": "Winter Frost Season",
        "birdwatchLevel": 1,
        "prices": {
          "1star": 17,
          "2star": 70,
          "3star": 140,
          "4star": 280,
          "5star": 560
        },
        "_meta": {
          "source": "Excel Guide Feb 22",
          "confidence": "high",
          "translationSource": "llm"
        },
        "sourceUrl": "https://www.heartopia.live/zh/birds/"
      }
    ]
  },
  {
    "slug": "crops",
    "title": "农作物图鉴",
    "navTitle": "农作物",
    "icon": "Sprout",
    "category": "生活",
    "countLabel": "种农作物",
    "sourcePath": "/zh/crops/",
    "sourceUrl": "https://www.heartopia.live/zh/crops/",
    "sourceFetchedAt": "2026-05-12",
    "description": "整理作物成长时间、园艺等级、种子买卖价格和成品 1-5 星售价。",
    "tip": "短成长作物适合补日常与烹饪，长成长作物适合提前排进农田计划。",
    "facets": [
      {
        "key": "gardeningLevel",
        "label": "园艺等级"
      },
      {
        "key": "growthTime",
        "label": "成长时间"
      }
    ],
    "sortKeys": [
      {
        "key": "name",
        "label": "名称"
      },
      {
        "key": "gardeningLevel",
        "label": "等级"
      },
      {
        "key": "growthTime",
        "label": "成长时间"
      }
    ],
    "fields": [
      {
        "key": "gardeningLevel",
        "label": "园艺等级",
        "prefix": "Lv."
      },
      {
        "key": "growthTime",
        "label": "成长时间"
      },
      {
        "key": "seedPurchasePrice",
        "label": "种子购买价"
      },
      {
        "key": "seedSellPrice",
        "label": "种子售价"
      },
      {
        "key": "prices",
        "label": "成品售价",
        "kind": "stars"
      }
    ],
    "items": [
      {
        "id": "potatoes",
        "name": "Potatoes",
        "growthTime": "60 min",
        "gardeningLevel": 1,
        "seedSellPrice": 15,
        "seedPurchasePrice": 30,
        "prices": {
          "1star": 90,
          "2star": 120,
          "3star": 150,
          "4star": 180,
          "5star": 210
        },
        "_meta": {
          "source": "Excel Guide Jan 12",
          "confidence": "high"
        },
        "sourceUrl": "https://www.heartopia.live/zh/crops/"
      },
      {
        "id": "tomato",
        "name": "Tomato",
        "growthTime": "15 min",
        "gardeningLevel": 1,
        "seedSellPrice": 5,
        "seedPurchasePrice": 10,
        "prices": {
          "1star": 30,
          "2star": 40,
          "3star": 50,
          "4star": 60,
          "5star": 70
        },
        "_meta": {
          "source": "Excel Guide Jan 12",
          "confidence": "high",
          "translationSource": "synced"
        },
        "sourceUrl": "https://www.heartopia.live/zh/crops/"
      },
      {
        "id": "wheat",
        "name": "Wheat",
        "growthTime": "4 hours",
        "gardeningLevel": 2,
        "seedSellPrice": 47,
        "seedPurchasePrice": 95,
        "prices": {
          "1star": 285,
          "2star": 381,
          "3star": 475,
          "4star": 570,
          "5star": 855
        },
        "_meta": {
          "source": "Excel Guide Jan 12",
          "confidence": "high",
          "translationSource": "synced"
        },
        "sourceUrl": "https://www.heartopia.live/zh/crops/"
      },
      {
        "id": "lettuce",
        "name": "Lettuce",
        "growthTime": "8 hours",
        "gardeningLevel": 3,
        "seedSellPrice": 72,
        "seedPurchasePrice": 145,
        "prices": {
          "1star": 435,
          "2star": 582,
          "3star": 726,
          "5star": 1305,
          "4star": 870
        },
        "_meta": {
          "source": "Excel Guide Jan 12",
          "confidence": "high",
          "translationSource": "synced"
        },
        "sourceUrl": "https://www.heartopia.live/zh/crops/"
      },
      {
        "id": "pineapple",
        "name": "Pineapple",
        "growthTime": "30 min",
        "gardeningLevel": 4,
        "seedSellPrice": 7,
        "seedPurchasePrice": 15,
        "prices": {
          "1star": 52,
          "3star": 86,
          "4star": 104,
          "2star": "69",
          "5star": 156
        },
        "_meta": {
          "source": "Excel Guide Jan 12",
          "confidence": "high",
          "translationSource": "synced"
        },
        "sourceUrl": "https://www.heartopia.live/zh/crops/"
      },
      {
        "id": "carrot",
        "name": "Carrot",
        "growthTime": "2 hours",
        "gardeningLevel": 5,
        "seedSellPrice": 25,
        "seedPurchasePrice": 50,
        "prices": {
          "1star": 155,
          "2star": 207,
          "3star": 258,
          "4star": 310,
          "5star": 465
        },
        "_meta": {
          "source": "Excel Guide Jan 12",
          "confidence": "high"
        },
        "sourceUrl": "https://www.heartopia.live/zh/crops/"
      },
      {
        "id": "corn",
        "name": "Corn",
        "growthTime": "12 hours",
        "gardeningLevel": 6,
        "seedSellPrice": null,
        "seedPurchasePrice": 170,
        "prices": {
          "2star": 690,
          "1star": 515,
          "3star": 860,
          "5star": 1545,
          "4star": 1030
        },
        "_meta": {
          "source": "Excel Guide Jan 12",
          "confidence": "high",
          "translationSource": "synced"
        },
        "sourceUrl": "https://www.heartopia.live/zh/crops/"
      },
      {
        "id": "strawberry",
        "name": "Strawberry",
        "growthTime": "6 hours",
        "gardeningLevel": 6,
        "seedSellPrice": null,
        "seedPurchasePrice": 125,
        "prices": {
          "1star": 375,
          "2star": 502,
          "3star": 626,
          "4star": 750,
          "5star": 1125
        },
        "_meta": {
          "source": "Excel Guide Jan 12",
          "confidence": "high",
          "translationSource": "synced"
        },
        "sourceUrl": "https://www.heartopia.live/zh/crops/"
      },
      {
        "id": "grape",
        "name": "Grape",
        "growthTime": "10 hours",
        "gardeningLevel": 7,
        "seedSellPrice": null,
        "seedPurchasePrice": 160,
        "prices": {
          "1star": 480,
          "2star": 643,
          "3star": 801,
          "4star": 960,
          "5star": 1440
        },
        "_meta": {
          "source": "Excel Guide Jan 12",
          "confidence": "high",
          "translationSource": "synced"
        },
        "sourceUrl": "https://www.heartopia.live/zh/crops/"
      },
      {
        "id": "eggplant",
        "name": "Eggplant",
        "growthTime": "7 hours",
        "gardeningLevel": 8,
        "seedSellPrice": null,
        "seedPurchasePrice": 135,
        "prices": {
          "1star": 406,
          "2star": 544,
          "3star": 678,
          "4star": 812,
          "5star": 1218
        },
        "_meta": {
          "source": "Excel Guide Jan 12",
          "confidence": "high"
        },
        "sourceUrl": "https://www.heartopia.live/zh/crops/"
      },
      {
        "id": "tea-tree",
        "name": "Tea Tree",
        "growthTime": "45 min",
        "gardeningLevel": 11,
        "seedSellPrice": null,
        "seedPurchasePrice": 25,
        "prices": {
          "1star": 75,
          "2star": 100,
          "3star": 125,
          "4star": 150,
          "5star": 225
        },
        "_meta": {
          "source": "Excel Guide Jan 12",
          "confidence": "high"
        },
        "sourceUrl": "https://www.heartopia.live/zh/crops/"
      },
      {
        "id": "cacao",
        "name": "Cacao",
        "growthTime": "5 hours",
        "gardeningLevel": 12,
        "seedSellPrice": null,
        "seedPurchasePrice": 110,
        "prices": {
          "1star": 75,
          "2star": 100,
          "3star": 125,
          "4star": 660,
          "5star": 900
        },
        "_meta": {
          "source": "Excel Guide Jan 12",
          "confidence": "high"
        },
        "sourceUrl": "https://www.heartopia.live/zh/crops/"
      },
      {
        "id": "avocado",
        "name": "Avocado",
        "growthTime": "13 hours",
        "gardeningLevel": 13,
        "seedSellPrice": null,
        "seedPurchasePrice": 180,
        "prices": {
          "1star": 330,
          "2star": 442,
          "3star": 551,
          "4star": 1098,
          "5star": 1647
        },
        "_meta": {
          "source": "Excel Guide Jan 12",
          "confidence": "high"
        },
        "sourceUrl": "https://www.heartopia.live/zh/crops/"
      },
      {
        "id": "winter-frost-season-white-radish",
        "name": "冬霜季: 白萝卜",
        "growthTime": "15 min",
        "seedSellPrice": 5,
        "seedPurchasePrice": 10,
        "gardeningLevel": 1,
        "prices": {
          "1star": 30,
          "2star": 40,
          "3star": 50,
          "4star": 60,
          "5star": 70
        },
        "_meta": {
          "source": "Excel Guide Feb 22",
          "confidence": "high",
          "translationSource": "llm"
        },
        "sourceUrl": "https://www.heartopia.live/zh/crops/"
      }
    ]
  },
  {
    "slug": "flowers",
    "title": "花卉图鉴",
    "navTitle": "花卉",
    "icon": "Flower2",
    "category": "生活",
    "countLabel": "种花卉",
    "sourcePath": "/zh/flowers/",
    "sourceUrl": "https://www.heartopia.live/zh/flowers/",
    "sourceFetchedAt": "2026-05-12",
    "description": "整理花卉成长时间、园艺等级、种子价格和 1-5 星售价，用于装饰、赠礼和园艺计划。",
    "tip": "花卉周期更长，建议按园艺等级解锁顺序准备种子与空地。",
    "facets": [
      {
        "key": "gardeningLevel",
        "label": "园艺等级"
      },
      {
        "key": "growthTime",
        "label": "成长时间"
      }
    ],
    "sortKeys": [
      {
        "key": "name",
        "label": "名称"
      },
      {
        "key": "gardeningLevel",
        "label": "等级"
      },
      {
        "key": "growthTime",
        "label": "成长时间"
      }
    ],
    "fields": [
      {
        "key": "gardeningLevel",
        "label": "园艺等级",
        "prefix": "Lv."
      },
      {
        "key": "growthTime",
        "label": "成长时间"
      },
      {
        "key": "seedPurchasePrice",
        "label": "种子购买价"
      },
      {
        "key": "seedSellPrice",
        "label": "种子售价"
      },
      {
        "key": "prices",
        "label": "花卉售价",
        "kind": "stars"
      }
    ],
    "items": [
      {
        "id": "daisy",
        "name": "Daisy",
        "growthTime": "18 hours",
        "gardeningLevel": 3,
        "seedSellPrice": 15,
        "seedPurchasePrice": 30,
        "prices": {
          "1star": 100,
          "2star": 150,
          "3star": 200,
          "4star": 250,
          "5star": 400
        },
        "_meta": {
          "source": "Excel Guide Jan 12",
          "confidence": "high",
          "translationSource": "synced"
        },
        "sourceUrl": "https://www.heartopia.live/zh/flowers/"
      },
      {
        "id": "pansy",
        "name": "Pansy",
        "growthTime": "18 hours",
        "gardeningLevel": 4,
        "seedSellPrice": 15,
        "seedPurchasePrice": 30,
        "prices": {
          "1star": 100,
          "2star": 150,
          "3star": 200,
          "4star": 250,
          "5star": 400
        },
        "_meta": {
          "source": "Excel Guide Jan 12",
          "confidence": "high",
          "translationSource": "synced"
        },
        "sourceUrl": "https://www.heartopia.live/zh/flowers/"
      },
      {
        "id": "anthurium",
        "name": "Anthurium",
        "growthTime": null,
        "gardeningLevel": 5,
        "seedSellPrice": 30,
        "seedPurchasePrice": 60,
        "prices": {
          "1star": 185
        },
        "_meta": {
          "source": "Excel Guide Jan 12",
          "confidence": "high"
        },
        "sourceUrl": "https://www.heartopia.live/zh/flowers/"
      },
      {
        "id": "corn-poppy",
        "name": "Corn Poppy",
        "growthTime": "1 day",
        "gardeningLevel": 5,
        "seedSellPrice": 30,
        "seedPurchasePrice": 60,
        "prices": {
          "1star": 185,
          "2star": 280,
          "3star": 370,
          "4star": 465,
          "5star": 740
        },
        "_meta": {
          "source": "Excel Guide Jan 12",
          "confidence": "high",
          "translationSource": "synced"
        },
        "sourceUrl": "https://www.heartopia.live/zh/flowers/"
      },
      {
        "id": "laceleaf",
        "name": "Laceleaf",
        "growthTime": "1 day",
        "gardeningLevel": 5,
        "seedSellPrice": null,
        "seedPurchasePrice": 60,
        "prices": {
          "1star": 185,
          "2star": 280,
          "3star": 370,
          "4star": 465,
          "5star": 740
        },
        "_meta": {
          "source": "Excel Guide Jan 12",
          "confidence": "high",
          "translationSource": "synced"
        },
        "sourceUrl": "https://www.heartopia.live/zh/flowers/"
      },
      {
        "id": "calla-lily",
        "name": "Calla Lily",
        "growthTime": "1 day 6 hours",
        "gardeningLevel": 6,
        "seedSellPrice": null,
        "seedPurchasePrice": 90,
        "prices": {
          "1star": 250,
          "2star": 375,
          "3star": 500,
          "4star": 625,
          "5star": 1000
        },
        "_meta": {
          "source": "Excel Guide Jan 12",
          "confidence": "high",
          "translationSource": "synced"
        },
        "sourceUrl": "https://www.heartopia.live/zh/flowers/"
      },
      {
        "id": "morning-glory",
        "name": "Morning Glory",
        "growthTime": "1 day 6 hours",
        "gardeningLevel": 6,
        "seedSellPrice": null,
        "seedPurchasePrice": 90,
        "prices": {
          "1star": 250,
          "2star": 375,
          "3star": 500,
          "4star": 625,
          "5star": 1000
        },
        "_meta": {
          "source": "Excel Guide Jan 12",
          "confidence": "high",
          "translationSource": "synced"
        },
        "sourceUrl": "https://www.heartopia.live/zh/flowers/"
      },
      {
        "id": "carnation",
        "name": "Carnation",
        "growthTime": "1 day 6 hours",
        "gardeningLevel": 7,
        "seedSellPrice": null,
        "seedPurchasePrice": 120,
        "prices": {
          "1star": 305,
          "2star": 460,
          "3star": 610,
          "4star": 765,
          "5star": 1220
        },
        "_meta": {
          "source": "Excel Guide Jan 12",
          "confidence": "high",
          "translationSource": "synced"
        },
        "sourceUrl": "https://www.heartopia.live/zh/flowers/"
      },
      {
        "id": "tulip",
        "name": "Tulip",
        "growthTime": "2 days",
        "gardeningLevel": 8,
        "seedSellPrice": null,
        "seedPurchasePrice": 150,
        "prices": {
          "1star": 415,
          "2star": 625,
          "3star": 830,
          "4star": 1040,
          "5star": 1660
        },
        "_meta": {
          "source": "Excel Guide Jan 12",
          "confidence": "high"
        },
        "sourceUrl": "https://www.heartopia.live/zh/flowers/"
      },
      {
        "id": "lily",
        "name": "Lily",
        "growthTime": "2 days",
        "gardeningLevel": 9,
        "seedSellPrice": null,
        "seedPurchasePrice": 200,
        "prices": {
          "1star": 485,
          "2star": 730,
          "3star": 970,
          "4star": 1215,
          "5star": 1940
        },
        "_meta": {
          "source": "Excel Guide Jan 12",
          "confidence": "high"
        },
        "sourceUrl": "https://www.heartopia.live/zh/flowers/"
      },
      {
        "id": "rose",
        "name": "Rose",
        "growthTime": "3 days",
        "gardeningLevel": 10,
        "seedSellPrice": null,
        "seedPurchasePrice": 300,
        "prices": {
          "1star": 765,
          "2star": 1150,
          "3star": 1530,
          "4star": 1915,
          "5star": 3060
        },
        "_meta": {
          "source": "Excel Guide Jan 12",
          "confidence": "high"
        },
        "sourceUrl": "https://www.heartopia.live/zh/flowers/"
      },
      {
        "id": "hyacinth",
        "name": "Hyacinth",
        "growthTime": "3 days",
        "gardeningLevel": 11,
        "seedSellPrice": null,
        "seedPurchasePrice": 300,
        "prices": {
          "1star": 785,
          "2star": 1180,
          "3star": 1570,
          "4star": 1965,
          "5star": 3140
        },
        "_meta": {
          "source": "Excel Guide Jan 12",
          "confidence": "high"
        },
        "sourceUrl": "https://www.heartopia.live/zh/flowers/"
      },
      {
        "id": "moth-orchid",
        "name": "Moth Orchid",
        "growthTime": "3 days",
        "gardeningLevel": 12,
        "seedSellPrice": null,
        "seedPurchasePrice": 300,
        "prices": {
          "1star": 805,
          "2star": 1210,
          "3star": 1610,
          "4star": 2015,
          "5star": 3220
        },
        "_meta": {
          "source": "Excel Guide Jan 12",
          "confidence": "high"
        },
        "sourceUrl": "https://www.heartopia.live/zh/flowers/"
      },
      {
        "id": "cranesbill",
        "name": "Cranesbill",
        "growthTime": "3 days",
        "gardeningLevel": 13,
        "seedSellPrice": null,
        "seedPurchasePrice": 300,
        "prices": {
          "1star": 825,
          "2star": 1240,
          "3star": 1650,
          "4star": 2065,
          "5star": 3300
        },
        "_meta": {
          "source": "Excel Guide Jan 12",
          "confidence": "high"
        },
        "sourceUrl": "https://www.heartopia.live/zh/flowers/"
      }
    ]
  },
  {
    "slug": "forageables",
    "title": "采集物图鉴",
    "navTitle": "采集物",
    "icon": "Leaf",
    "category": "收集",
    "countLabel": "种采集物",
    "sourcePath": "/zh/forageables/",
    "sourceUrl": "https://www.heartopia.live/zh/forageables/",
    "sourceFetchedAt": "2026-05-12",
    "description": "按采集地点、售价、购买价与能量回复整理，适合做每日素材路线。",
    "tip": "采集物路线适合和钓鱼/观鸟同路合并，背包满时先回家清理再继续。",
    "facets": [
      {
        "key": "location",
        "label": "地点"
      }
    ],
    "sortKeys": [
      {
        "key": "name",
        "label": "名称"
      },
      {
        "key": "location",
        "label": "地点"
      },
      {
        "key": "sellPrice",
        "label": "售价"
      }
    ],
    "fields": [
      {
        "key": "location",
        "label": "地点"
      },
      {
        "key": "sellPrice",
        "label": "售价"
      },
      {
        "key": "buyPrice",
        "label": "购买价"
      },
      {
        "key": "energyGain",
        "label": "能量"
      }
    ],
    "items": [
      {
        "id": "branch",
        "name": "树枝",
        "location": "Bushes",
        "sellPrice": 5,
        "energyGain": null,
        "buyPrice": null,
        "_meta": {
          "source": "Excel Guide Jan 12",
          "confidence": "high"
        },
        "sourceUrl": "https://www.heartopia.live/zh/forageables/"
      },
      {
        "id": "timber",
        "name": "木材",
        "location": "Tree",
        "sellPrice": 6,
        "energyGain": null,
        "buyPrice": null,
        "_meta": {
          "source": "Excel Guide Jan 12",
          "confidence": "high"
        },
        "sourceUrl": "https://www.heartopia.live/zh/forageables/"
      },
      {
        "id": "quality-timber",
        "name": "优质木材",
        "location": "Tree",
        "sellPrice": 12,
        "energyGain": null,
        "buyPrice": null,
        "_meta": {
          "source": "Excel Guide Jan 12",
          "confidence": "high"
        },
        "sourceUrl": "https://www.heartopia.live/zh/forageables/"
      },
      {
        "id": "rare-timber",
        "name": "稀有木材",
        "location": "Gigantic Tree in the Suburb",
        "sellPrice": 50,
        "energyGain": null,
        "buyPrice": null,
        "_meta": {
          "source": "Excel Guide Jan 12",
          "confidence": "high"
        },
        "sourceUrl": "https://www.heartopia.live/zh/forageables/"
      },
      {
        "id": "roaming-oak-timber",
        "name": "漫游橡木木材",
        "location": "Roaming Oak-Oak",
        "sellPrice": 150,
        "energyGain": null,
        "buyPrice": null,
        "_meta": {
          "source": "Excel Guide Jan 12",
          "confidence": "high"
        },
        "sourceUrl": "https://www.heartopia.live/zh/forageables/"
      },
      {
        "id": "bamboo",
        "name": "竹子",
        "location": "Bamboo",
        "sellPrice": 7,
        "energyGain": null,
        "buyPrice": null,
        "_meta": {
          "source": "Excel Guide Jan 12",
          "confidence": "high"
        },
        "sourceUrl": "https://www.heartopia.live/zh/forageables/"
      },
      {
        "id": "stone",
        "name": "石头",
        "location": "Home",
        "sellPrice": 8,
        "energyGain": null,
        "buyPrice": null,
        "_meta": {
          "source": "Excel Guide Jan 12",
          "confidence": "high"
        },
        "sourceUrl": "https://www.heartopia.live/zh/forageables/"
      },
      {
        "id": "ore",
        "name": "矿石",
        "location": "Home",
        "sellPrice": 14,
        "energyGain": null,
        "buyPrice": null,
        "_meta": {
          "source": "Excel Guide Jan 12",
          "confidence": "high"
        },
        "sourceUrl": "https://www.heartopia.live/zh/forageables/"
      },
      {
        "id": "flawless-fluorite",
        "name": "完美萤石",
        "location": "Fluorite Mine",
        "sellPrice": 150,
        "energyGain": null,
        "buyPrice": null,
        "_meta": {
          "source": "Excel Guide Jan 12",
          "confidence": "high"
        },
        "sourceUrl": "https://www.heartopia.live/zh/forageables/"
      },
      {
        "id": "starfall-shard",
        "name": "流星碎片",
        "location": "Meteor Shower (Meteorite Ore)",
        "sellPrice": 150,
        "energyGain": null,
        "buyPrice": null,
        "_meta": {
          "source": "Excel Guide Jan 12",
          "confidence": "high"
        },
        "sourceUrl": "https://www.heartopia.live/zh/forageables/"
      },
      {
        "id": "apple",
        "name": "苹果",
        "location": "Home",
        "sellPrice": 28,
        "energyGain": 8,
        "buyPrice": null,
        "_meta": {
          "source": "Excel Guide Jan 12",
          "confidence": "high"
        },
        "sourceUrl": "https://www.heartopia.live/zh/forageables/"
      },
      {
        "id": "mandarin",
        "name": "柑橘",
        "location": "Home",
        "sellPrice": 28,
        "energyGain": 8,
        "buyPrice": null,
        "_meta": {
          "source": "Excel Guide Jan 12",
          "confidence": "high"
        },
        "sourceUrl": "https://www.heartopia.live/zh/forageables/"
      },
      {
        "id": "blueberry",
        "name": "蓝莓",
        "location": "Home",
        "sellPrice": 16,
        "energyGain": 5,
        "buyPrice": null,
        "_meta": {
          "source": "Excel Guide Jan 12",
          "confidence": "high"
        },
        "sourceUrl": "https://www.heartopia.live/zh/forageables/"
      },
      {
        "id": "raspberry",
        "name": "覆盆子",
        "location": "Home",
        "sellPrice": 26,
        "energyGain": 7,
        "buyPrice": null,
        "_meta": {
          "source": "Excel Guide Jan 12",
          "confidence": "high"
        },
        "sourceUrl": "https://www.heartopia.live/zh/forageables/"
      },
      {
        "id": "shiitake",
        "name": "香菇",
        "location": "Fishing Village",
        "sellPrice": 16,
        "energyGain": 5,
        "buyPrice": null,
        "_meta": {
          "source": "Excel Guide Jan 12",
          "confidence": "high"
        },
        "sourceUrl": "https://www.heartopia.live/zh/forageables/"
      },
      {
        "id": "bizzare-shiitake-black",
        "name": "奇异香菇（黑色）",
        "location": "Fishing Village",
        "sellPrice": 16,
        "energyGain": null,
        "buyPrice": null,
        "_meta": {
          "source": "Excel Guide Jan 12",
          "confidence": "high"
        },
        "sourceUrl": "https://www.heartopia.live/zh/forageables/"
      },
      {
        "id": "bizarre-shiitake-red",
        "name": "奇异香菇（红色）",
        "location": "Fishing Village",
        "sellPrice": 16,
        "energyGain": null,
        "buyPrice": null,
        "_meta": {
          "source": "Excel Guide Jan 12",
          "confidence": "high"
        },
        "sourceUrl": "https://www.heartopia.live/zh/forageables/"
      },
      {
        "id": "bizarre-shiitake-blue",
        "name": "奇异香菇（蓝色）",
        "location": "Fishing Village",
        "sellPrice": 16,
        "energyGain": null,
        "buyPrice": null,
        "_meta": {
          "source": "Excel Guide Jan 12",
          "confidence": "high"
        },
        "sourceUrl": "https://www.heartopia.live/zh/forageables/"
      },
      {
        "id": "button-mushroom",
        "name": "口蘑",
        "location": "Flower Field",
        "sellPrice": 16,
        "energyGain": 5,
        "buyPrice": null,
        "_meta": {
          "source": "Excel Guide Jan 12",
          "confidence": "high"
        },
        "sourceUrl": "https://www.heartopia.live/zh/forageables/"
      },
      {
        "id": "bizzare-button-mushroom-blue",
        "name": "奇异口蘑（蓝色）",
        "location": "Flower Field",
        "sellPrice": 16,
        "energyGain": null,
        "buyPrice": null,
        "_meta": {
          "source": "Excel Guide Jan 12",
          "confidence": "high"
        },
        "sourceUrl": "https://www.heartopia.live/zh/forageables/"
      },
      {
        "id": "bizarre-button-mushroom-pink",
        "name": "奇异口蘑（粉色）",
        "location": "Flower Field",
        "sellPrice": 16,
        "energyGain": null,
        "buyPrice": null,
        "_meta": {
          "source": "Excel Guide Jan 12",
          "confidence": "high"
        },
        "sourceUrl": "https://www.heartopia.live/zh/forageables/"
      },
      {
        "id": "bizarre-button-mushroom-green",
        "name": "奇异口蘑（绿色）",
        "location": "Flower Field",
        "sellPrice": 16,
        "energyGain": null,
        "buyPrice": null,
        "_meta": {
          "source": "Excel Guide Jan 12",
          "confidence": "high"
        },
        "sourceUrl": "https://www.heartopia.live/zh/forageables/"
      },
      {
        "id": "penny-bun",
        "name": "牛肝菌",
        "location": "Forest",
        "sellPrice": 16,
        "energyGain": 5,
        "buyPrice": null,
        "_meta": {
          "source": "Excel Guide Jan 12",
          "confidence": "high"
        },
        "sourceUrl": "https://www.heartopia.live/zh/forageables/"
      },
      {
        "id": "bizzare-penny-bun-purple",
        "name": "奇异牛肝菌（紫色）",
        "location": "Forest",
        "sellPrice": 16,
        "energyGain": null,
        "buyPrice": null,
        "_meta": {
          "source": "Excel Guide Jan 12",
          "confidence": "high"
        },
        "sourceUrl": "https://www.heartopia.live/zh/forageables/"
      },
      {
        "id": "bizzare-penny-bun-red",
        "name": "奇异牛肝菌（红色）",
        "location": "Forest",
        "sellPrice": 16,
        "energyGain": null,
        "buyPrice": null,
        "_meta": {
          "source": "Excel Guide Jan 12",
          "confidence": "high"
        },
        "sourceUrl": "https://www.heartopia.live/zh/forageables/"
      },
      {
        "id": "bizzare-penny-bun-pink",
        "name": "奇异牛肝菌（粉色）",
        "location": "Forest",
        "sellPrice": 16,
        "energyGain": null,
        "buyPrice": null,
        "_meta": {
          "source": "Excel Guide Jan 12",
          "confidence": "high"
        },
        "sourceUrl": "https://www.heartopia.live/zh/forageables/"
      },
      {
        "id": "oyster-mushroom",
        "name": "平菇",
        "location": "Onsen Mountain",
        "sellPrice": 16,
        "energyGain": 5,
        "buyPrice": null,
        "_meta": {
          "source": "Excel Guide Jan 12",
          "confidence": "high"
        },
        "sourceUrl": "https://www.heartopia.live/zh/forageables/"
      },
      {
        "id": "bizarre-oyster-mushroom-pink",
        "name": "奇异平菇（粉色）",
        "location": "Onsen Mountain",
        "sellPrice": 16,
        "energyGain": null,
        "buyPrice": null,
        "_meta": {
          "source": "Excel Guide Jan 12",
          "confidence": "high"
        },
        "sourceUrl": "https://www.heartopia.live/zh/forageables/"
      },
      {
        "id": "bizarre-oyster-mushroom-purple",
        "name": "奇异平菇（紫色）",
        "location": "Onsen Mountain",
        "sellPrice": 16,
        "energyGain": null,
        "buyPrice": null,
        "_meta": {
          "source": "Excel Guide Jan 12",
          "confidence": "high"
        },
        "sourceUrl": "https://www.heartopia.live/zh/forageables/"
      },
      {
        "id": "bizarre-oyster-mushroom-orange",
        "name": "奇异平菇（橙色）",
        "location": "Onsen Mountain",
        "sellPrice": 16,
        "energyGain": null,
        "buyPrice": null,
        "_meta": {
          "source": "Excel Guide Jan 12",
          "confidence": "high"
        },
        "sourceUrl": "https://www.heartopia.live/zh/forageables/"
      },
      {
        "id": "black-truffle",
        "name": "黑松露",
        "location": "Forest (Forest Island)",
        "sellPrice": 99,
        "energyGain": 25,
        "buyPrice": null,
        "_meta": {
          "source": "Excel Guide Jan 12",
          "confidence": "high"
        },
        "sourceUrl": "https://www.heartopia.live/zh/forageables/"
      },
      {
        "id": "matsutake",
        "name": "松茸",
        "location": "Forest (Spirit Oak Pine)",
        "sellPrice": null,
        "energyGain": 5,
        "buyPrice": null,
        "_meta": {
          "source": "Excel Guide Jan 12",
          "confidence": "high"
        },
        "sourceUrl": "https://www.heartopia.live/zh/forageables/"
      }
    ]
  },
  {
    "slug": "wildlife",
    "title": "野生动物图鉴",
    "navTitle": "野生动物",
    "icon": "PawPrint",
    "category": "收集",
    "countLabel": "种野生动物",
    "sourcePath": "/zh/wild-animals/",
    "sourceUrl": "https://www.heartopia.live/zh/wild-animals/",
    "sourceFetchedAt": "2026-05-12",
    "description": "整理野生动物出没地点、喜爱食物与喜爱天气，适合安排互动和投喂路线。",
    "tip": "投喂前先看天气偏好；同一片区域的动物、采集和观鸟可以一起跑。",
    "facets": [
      {
        "key": "location",
        "label": "地点"
      },
      {
        "key": "weatherLikes",
        "label": "喜爱天气"
      }
    ],
    "sortKeys": [
      {
        "key": "name",
        "label": "名称"
      },
      {
        "key": "location",
        "label": "地点"
      }
    ],
    "fields": [
      {
        "key": "location",
        "label": "地点"
      },
      {
        "key": "foodLikes",
        "label": "喜爱食物"
      },
      {
        "key": "weatherLikes",
        "label": "喜爱天气"
      }
    ],
    "items": [
      {
        "id": "capybara",
        "name": "水豚",
        "location": "Ruins in the circle area",
        "foodLikes": "🔴🍅🍇",
        "weatherLikes": "🌧️",
        "_meta": {
          "source": "Excel Guide Jan 12",
          "confidence": "high",
          "translationSource": "existing"
        },
        "sourceUrl": "https://www.heartopia.live/zh/wild-animals/"
      },
      {
        "id": "deer",
        "name": "鹿",
        "location": "Between Deer Tower & Spirit Oak Pine Forest",
        "foodLikes": "🥬🥗🪓",
        "weatherLikes": "🌞",
        "_meta": {
          "source": "Excel Guide Jan 12",
          "confidence": "high",
          "translationSource": "existing"
        },
        "sourceUrl": "https://www.heartopia.live/zh/wild-animals/"
      },
      {
        "id": "panda",
        "name": "熊猫",
        "location": "Jump Puzzle",
        "foodLikes": "🎋🍎🌽",
        "weatherLikes": "🌧️",
        "_meta": {
          "source": "Excel Guide Jan 12",
          "confidence": "high",
          "translationSource": "existing"
        },
        "sourceUrl": "https://www.heartopia.live/zh/wild-animals/"
      },
      {
        "id": "sea-otter",
        "name": "水獭",
        "location": "Fishing Village Square Harbor",
        "foodLikes": "🦪🍤🦐",
        "weatherLikes": "🌧️",
        "_meta": {
          "source": "Excel Guide Jan 12",
          "confidence": "high",
          "translationSource": "existing"
        },
        "sourceUrl": "https://www.heartopia.live/zh/wild-animals/"
      },
      {
        "id": "alpaca",
        "name": "羊驼",
        "location": "Amethyst near wooden bridge",
        "foodLikes": "🔵🍍🌾",
        "weatherLikes": "🌞",
        "_meta": {
          "source": "Excel Guide Feb 22",
          "confidence": "high",
          "translationSource": "llm"
        },
        "sourceUrl": "https://www.heartopia.live/zh/wild-animals/"
      },
      {
        "id": "fox",
        "name": "狐狸",
        "location": "Below Meadow Lake",
        "foodLikes": "🥩🐟🐟",
        "weatherLikes": "🌈",
        "_meta": {
          "source": "Excel Guide Jan 12",
          "confidence": "high",
          "translationSource": "existing"
        },
        "sourceUrl": "https://www.heartopia.live/zh/wild-animals/"
      },
      {
        "id": "bunny",
        "name": "兔子",
        "location": "Road that leads from Art Street into the suburbs where one road diverges into two",
        "foodLikes": "🌿🥕🍓",
        "weatherLikes": "🌞",
        "_meta": {
          "source": "Excel Guide Jan 12",
          "confidence": "high",
          "translationSource": "existing"
        },
        "sourceUrl": "https://www.heartopia.live/zh/wild-animals/"
      },
      {
        "id": "ferret",
        "name": "雪貂",
        "location": "Below Rosy River near wooden bridge",
        "foodLikes": "🥚🐟🐟",
        "weatherLikes": "🌈",
        "_meta": {
          "source": "Excel Guide Jan 12",
          "confidence": "high",
          "translationSource": "existing"
        },
        "sourceUrl": "https://www.heartopia.live/zh/wild-animals/"
      }
    ]
  },
  {
    "slug": "pets",
    "title": "宠物图鉴",
    "navTitle": "宠物",
    "icon": "Heart",
    "category": "生活",
    "countLabel": "种猫狗",
    "sourcePath": "/zh/pets/",
    "sourceUrl": "https://www.heartopia.live/zh/pets/",
    "sourceFetchedAt": "2026-05-12",
    "description": "合并猫咪与狗狗品种，整理喜爱食物、体型、特殊能力与来源页面。",
    "tip": "猫咪偏好鱼类，狗狗偏好农作物；特殊能力宠物可以优先加入领养计划。",
    "facets": [
      {
        "key": "petKind",
        "label": "宠物类型"
      },
      {
        "key": "size",
        "label": "体型"
      },
      {
        "key": "favoriteFood",
        "label": "喜爱食物"
      }
    ],
    "sortKeys": [
      {
        "key": "name",
        "label": "名称"
      },
      {
        "key": "petKind",
        "label": "类型"
      },
      {
        "key": "size",
        "label": "体型"
      }
    ],
    "fields": [
      {
        "key": "petKind",
        "label": "类型"
      },
      {
        "key": "size",
        "label": "体型"
      },
      {
        "key": "favoriteFood",
        "label": "喜爱食物"
      },
      {
        "key": "specialAbility",
        "label": "特殊能力"
      },
      {
        "key": "imageCount",
        "label": "图片记录"
      }
    ],
    "items": [
      {
        "id": "siamese",
        "name": "暹罗猫",
        "images": [
          "/images/cats/siamese-1.webp"
        ],
        "favoriteFood": "鱼类",
        "specialAbility": null,
        "_meta": {
          "source": "TheGamer, GamingOnPhone Jan 2026",
          "confidence": "high"
        },
        "petKind": "猫咪",
        "imageCount": 1,
        "sourceUrl": "https://www.heartopia.live/zh/pets/cats/"
      },
      {
        "id": "blue-cat",
        "name": "蓝猫",
        "images": [
          "/images/cats/blue-cat-1.webp",
          "/images/cats/blue-cat-2.webp",
          "/images/cats/blue-cat-3.webp",
          "/images/cats/blue-cat-4.webp"
        ],
        "favoriteFood": "鱼类",
        "specialAbility": null,
        "_meta": {
          "source": "TheGamer, GamingOnPhone Jan 2026",
          "confidence": "high"
        },
        "petKind": "猫咪",
        "imageCount": 4,
        "sourceUrl": "https://www.heartopia.live/zh/pets/cats/"
      },
      {
        "id": "black-cat",
        "name": "黑猫",
        "images": [
          "/images/cats/black-cat-1.webp"
        ],
        "favoriteFood": "鱼类",
        "specialAbility": null,
        "_meta": {
          "source": "TheGamer, GamingOnPhone Jan 2026",
          "confidence": "high"
        },
        "petKind": "猫咪",
        "imageCount": 1,
        "sourceUrl": "https://www.heartopia.live/zh/pets/cats/"
      },
      {
        "id": "white-cat",
        "name": "白猫",
        "images": [
          "/images/cats/white-cat-1.webp"
        ],
        "favoriteFood": "鱼类",
        "specialAbility": null,
        "_meta": {
          "source": "TheGamer, GamingOnPhone Jan 2026",
          "confidence": "high"
        },
        "petKind": "猫咪",
        "imageCount": 1,
        "sourceUrl": "https://www.heartopia.live/zh/pets/cats/"
      },
      {
        "id": "raccoon-cat",
        "name": "狸花猫",
        "images": [
          "/images/cats/raccoon-cat-1.webp"
        ],
        "favoriteFood": "鱼类",
        "specialAbility": null,
        "_meta": {
          "source": "TheGamer, GamingOnPhone Jan 2026",
          "confidence": "high"
        },
        "petKind": "猫咪",
        "imageCount": 1,
        "sourceUrl": "https://www.heartopia.live/zh/pets/cats/"
      },
      {
        "id": "silver-tabby",
        "name": "银虎斑",
        "images": [
          "/images/cats/silver-tabby-1.webp"
        ],
        "favoriteFood": "鱼类",
        "specialAbility": null,
        "_meta": {
          "source": "TheGamer, GamingOnPhone Jan 2026",
          "confidence": "high"
        },
        "petKind": "猫咪",
        "imageCount": 1,
        "sourceUrl": "https://www.heartopia.live/zh/pets/cats/"
      },
      {
        "id": "orange-tabby",
        "name": "橘猫",
        "images": [
          "/images/cats/orange-tabby-1.webp",
          "/images/cats/orange-tabby-2.webp",
          "/images/cats/orange-tabby-3.webp",
          "/images/cats/orange-tabby-4.webp",
          "/images/cats/orange-tabby-5.webp"
        ],
        "favoriteFood": "鱼类",
        "specialAbility": "有机会带回金币袋",
        "_meta": {
          "source": "TheGamer, GamingOnPhone, ScreenHype Jan 2026",
          "confidence": "high"
        },
        "petKind": "猫咪",
        "imageCount": 5,
        "sourceUrl": "https://www.heartopia.live/zh/pets/cats/"
      },
      {
        "id": "brown-tabby",
        "name": "棕虎斑",
        "images": [
          "/images/cats/brown-tabby-1.webp"
        ],
        "favoriteFood": "鱼类",
        "specialAbility": null,
        "_meta": {
          "source": "TheGamer, GamingOnPhone Jan 2026",
          "confidence": "high"
        },
        "petKind": "猫咪",
        "imageCount": 1,
        "sourceUrl": "https://www.heartopia.live/zh/pets/cats/"
      },
      {
        "id": "calico",
        "name": "三花猫",
        "images": [
          "/images/cats/calico-1.webp"
        ],
        "favoriteFood": "鱼类",
        "specialAbility": null,
        "_meta": {
          "source": "TheGamer, GamingOnPhone Jan 2026",
          "confidence": "high"
        },
        "petKind": "猫咪",
        "imageCount": 1,
        "sourceUrl": "https://www.heartopia.live/zh/pets/cats/"
      },
      {
        "id": "piebald-cat",
        "name": "花斑猫",
        "images": [
          "/images/cats/piebald-cat-1.webp",
          "/images/cats/piebald-cat-2.webp",
          "/images/cats/piebald-cat-3.webp"
        ],
        "favoriteFood": "鱼类",
        "specialAbility": null,
        "_meta": {
          "source": "TheGamer, GamingOnPhone Jan 2026",
          "confidence": "high"
        },
        "petKind": "猫咪",
        "imageCount": 3,
        "sourceUrl": "https://www.heartopia.live/zh/pets/cats/"
      },
      {
        "id": "panda-cat",
        "name": "熊猫猫",
        "images": [
          "/images/cats/panda-cat-1.webp"
        ],
        "favoriteFood": "鱼类",
        "specialAbility": null,
        "_meta": {
          "source": "TheGamer, GamingOnPhone Jan 2026",
          "confidence": "high"
        },
        "petKind": "猫咪",
        "imageCount": 1,
        "sourceUrl": "https://www.heartopia.live/zh/pets/cats/"
      },
      {
        "id": "golden-spotted-cat",
        "name": "金点猫",
        "images": [
          "/images/cats/golden-spotted-cat-1.webp"
        ],
        "favoriteFood": "鱼类",
        "specialAbility": null,
        "_meta": {
          "source": "TheGamer, GamingOnPhone Jan 2026",
          "confidence": "high"
        },
        "petKind": "猫咪",
        "imageCount": 1,
        "sourceUrl": "https://www.heartopia.live/zh/pets/cats/"
      },
      {
        "id": "tortoiseshell-cat",
        "name": "玳瑁猫",
        "images": [
          "/images/cats/tortoiseshell-cat-1.webp"
        ],
        "favoriteFood": "鱼类",
        "specialAbility": null,
        "_meta": {
          "source": "TheGamer, GamingOnPhone Jan 2026",
          "confidence": "high"
        },
        "petKind": "猫咪",
        "imageCount": 1,
        "sourceUrl": "https://www.heartopia.live/zh/pets/cats/"
      },
      {
        "id": "tuxedo-cat",
        "name": "燕尾服猫",
        "images": [
          "/images/cats/tuxedo-cat-1.webp"
        ],
        "favoriteFood": "鱼类",
        "specialAbility": null,
        "_meta": {
          "source": "TheGamer, GamingOnPhone Jan 2026",
          "confidence": "high"
        },
        "petKind": "猫咪",
        "imageCount": 1,
        "sourceUrl": "https://www.heartopia.live/zh/pets/cats/"
      },
      {
        "id": "golden-british-shorthair",
        "name": "金渐层英短",
        "images": [
          "/images/cats/golden-british-shorthair-1.webp"
        ],
        "favoriteFood": "鱼类",
        "specialAbility": null,
        "_meta": {
          "source": "User provided image Jan 2026",
          "confidence": "medium"
        },
        "petKind": "猫咪",
        "imageCount": 1,
        "sourceUrl": "https://www.heartopia.live/zh/pets/cats/"
      },
      {
        "id": "silver-british-shorthair",
        "name": "银渐层英短",
        "images": [
          "/images/cats/silver-british-shorthair-1.webp"
        ],
        "favoriteFood": "鱼类",
        "specialAbility": null,
        "_meta": {
          "source": "User provided image Jan 2026",
          "confidence": "medium"
        },
        "petKind": "猫咪",
        "imageCount": 1,
        "sourceUrl": "https://www.heartopia.live/zh/pets/cats/"
      },
      {
        "id": "classic-silver-spotted-cat",
        "name": "银点猫",
        "images": [
          "/images/cats/classic-silver-spotted-cat-1.webp",
          "/images/cats/classic-silver-spotted-cat-2.webp",
          "/images/cats/classic-silver-spotted-cat-3.webp",
          "/images/cats/classic-silver-spotted-cat-4.webp"
        ],
        "favoriteFood": "鱼类",
        "specialAbility": null,
        "_meta": {
          "source": "User provided image Jan 2026",
          "confidence": "medium"
        },
        "petKind": "猫咪",
        "imageCount": 4,
        "sourceUrl": "https://www.heartopia.live/zh/pets/cats/"
      },
      {
        "id": "golden-leopard-cat",
        "name": "金豹猫",
        "images": [
          "/images/cats/golden-leopard-cat-1.webp"
        ],
        "favoriteFood": "鱼类",
        "specialAbility": null,
        "_meta": {
          "source": "User provided image Jan 2026",
          "confidence": "medium"
        },
        "petKind": "猫咪",
        "imageCount": 1,
        "sourceUrl": "https://www.heartopia.live/zh/pets/cats/"
      },
      {
        "id": "chihuahua",
        "name": "吉娃娃",
        "size": "小型",
        "images": [],
        "favoriteFood": "农作物",
        "specialAbility": null,
        "_meta": {
          "source": "Gamezebo, TheGamer Jan 2026",
          "confidence": "high"
        },
        "petKind": "狗狗",
        "imageCount": 0,
        "sourceUrl": "https://www.heartopia.live/zh/pets/dogs/"
      },
      {
        "id": "pomeranian",
        "name": "博美",
        "size": "小型",
        "images": [],
        "favoriteFood": "农作物",
        "specialAbility": null,
        "_meta": {
          "source": "Gamezebo, TheGamer Jan 2026",
          "confidence": "high"
        },
        "petKind": "狗狗",
        "imageCount": 0,
        "sourceUrl": "https://www.heartopia.live/zh/pets/dogs/"
      },
      {
        "id": "poodle",
        "name": "贵宾犬",
        "size": "小型",
        "images": [
          "/images/dogs/poodle-1.webp"
        ],
        "favoriteFood": "农作物",
        "specialAbility": null,
        "_meta": {
          "source": "Gamezebo, TheGamer, User image Jan 2026",
          "confidence": "high"
        },
        "petKind": "狗狗",
        "imageCount": 1,
        "sourceUrl": "https://www.heartopia.live/zh/pets/dogs/"
      },
      {
        "id": "corgi",
        "name": "柯基",
        "size": "小型",
        "images": [
          "/images/dogs/corgi-1.webp",
          "/images/dogs/corgi-2.webp",
          "/images/dogs/corgi-3.webp"
        ],
        "favoriteFood": "农作物",
        "specialAbility": null,
        "_meta": {
          "source": "Gamezebo, TheGamer, User image Jan 2026",
          "confidence": "high"
        },
        "petKind": "狗狗",
        "imageCount": 3,
        "sourceUrl": "https://www.heartopia.live/zh/pets/dogs/"
      },
      {
        "id": "bichon-frise",
        "name": "比熊",
        "size": "小型",
        "images": [],
        "favoriteFood": "农作物",
        "specialAbility": null,
        "_meta": {
          "source": "Gamezebo, TheGamer Jan 2026",
          "confidence": "high"
        },
        "petKind": "狗狗",
        "imageCount": 0,
        "sourceUrl": "https://www.heartopia.live/zh/pets/dogs/"
      },
      {
        "id": "west-highland-terrier",
        "name": "西高地白梗",
        "size": "小型",
        "images": [],
        "favoriteFood": "农作物",
        "specialAbility": null,
        "_meta": {
          "source": "Gamezebo, TheGamer Jan 2026",
          "confidence": "high"
        },
        "petKind": "狗狗",
        "imageCount": 0,
        "sourceUrl": "https://www.heartopia.live/zh/pets/dogs/"
      },
      {
        "id": "yorkshire-terrier",
        "name": "约克夏",
        "size": "小型",
        "images": [],
        "favoriteFood": "农作物",
        "specialAbility": null,
        "_meta": {
          "source": "Gamezebo, TheGamer Jan 2026",
          "confidence": "high"
        },
        "petKind": "狗狗",
        "imageCount": 0,
        "sourceUrl": "https://www.heartopia.live/zh/pets/dogs/"
      },
      {
        "id": "papillon",
        "name": "蝴蝶犬",
        "size": "小型",
        "images": [],
        "favoriteFood": "农作物",
        "specialAbility": null,
        "_meta": {
          "source": "Gamezebo, TheGamer Jan 2026",
          "confidence": "high"
        },
        "petKind": "狗狗",
        "imageCount": 0,
        "sourceUrl": "https://www.heartopia.live/zh/pets/dogs/"
      },
      {
        "id": "pug",
        "name": "巴哥",
        "size": "小型",
        "images": [],
        "favoriteFood": "农作物",
        "specialAbility": null,
        "_meta": {
          "source": "Gamezebo, TheGamer Jan 2026",
          "confidence": "high"
        },
        "petKind": "狗狗",
        "imageCount": 0,
        "sourceUrl": "https://www.heartopia.live/zh/pets/dogs/"
      },
      {
        "id": "dachshund",
        "name": "腊肠犬",
        "size": "小型",
        "images": [],
        "favoriteFood": "农作物",
        "specialAbility": null,
        "_meta": {
          "source": "Gamezebo, TheGamer Jan 2026",
          "confidence": "high"
        },
        "petKind": "狗狗",
        "imageCount": 0,
        "sourceUrl": "https://www.heartopia.live/zh/pets/dogs/"
      },
      {
        "id": "french-bulldog",
        "name": "法斗",
        "size": "小型",
        "images": [],
        "favoriteFood": "农作物",
        "specialAbility": null,
        "_meta": {
          "source": "Gamezebo, TheGamer Jan 2026",
          "confidence": "high"
        },
        "petKind": "狗狗",
        "imageCount": 0,
        "sourceUrl": "https://www.heartopia.live/zh/pets/dogs/"
      },
      {
        "id": "maltese",
        "name": "马尔济斯",
        "size": "小型",
        "images": [],
        "favoriteFood": "农作物",
        "specialAbility": null,
        "_meta": {
          "source": "Gamezebo, TheGamer Jan 2026",
          "confidence": "high"
        },
        "petKind": "狗狗",
        "imageCount": 0,
        "sourceUrl": "https://www.heartopia.live/zh/pets/dogs/"
      },
      {
        "id": "husky",
        "name": "哈士奇",
        "size": "中型",
        "images": [
          "/images/dogs/husky-1.webp",
          "/images/dogs/husky-2.webp",
          "/images/dogs/husky-3.webp",
          "/images/dogs/husky-4.webp",
          "/images/dogs/husky-5.webp"
        ],
        "favoriteFood": "农作物",
        "specialAbility": null,
        "_meta": {
          "source": "Gamezebo, TheGamer, User image Jan 2026",
          "confidence": "high"
        },
        "petKind": "狗狗",
        "imageCount": 5,
        "sourceUrl": "https://www.heartopia.live/zh/pets/dogs/"
      },
      {
        "id": "shiba-inu",
        "name": "柴犬",
        "size": "中型",
        "images": [
          "/images/dogs/shiba-inu-1.webp",
          "/images/dogs/shiba-inu-2.webp",
          "/images/dogs/shiba-inu-3.webp",
          "/images/dogs/shiba-inu-4.webp"
        ],
        "favoriteFood": "农作物",
        "specialAbility": null,
        "_meta": {
          "source": "Gamezebo, TheGamer, User image Jan 2026",
          "confidence": "high"
        },
        "petKind": "狗狗",
        "imageCount": 4,
        "sourceUrl": "https://www.heartopia.live/zh/pets/dogs/"
      },
      {
        "id": "labrador",
        "name": "拉布拉多",
        "size": "中型",
        "images": [
          "/images/dogs/labrador-1.webp"
        ],
        "favoriteFood": "农作物",
        "specialAbility": null,
        "_meta": {
          "source": "Gamezebo, TheGamer, User image Jan 2026",
          "confidence": "high"
        },
        "petKind": "狗狗",
        "imageCount": 1,
        "sourceUrl": "https://www.heartopia.live/zh/pets/dogs/"
      },
      {
        "id": "samoyed",
        "name": "萨摩耶",
        "size": "中型",
        "images": [],
        "favoriteFood": "农作物",
        "specialAbility": null,
        "_meta": {
          "source": "Gamezebo, TheGamer Jan 2026",
          "confidence": "high"
        },
        "petKind": "狗狗",
        "imageCount": 0,
        "sourceUrl": "https://www.heartopia.live/zh/pets/dogs/"
      },
      {
        "id": "border-collie",
        "name": "边牧",
        "size": "中型",
        "images": [],
        "favoriteFood": "农作物",
        "specialAbility": null,
        "_meta": {
          "source": "Gamezebo, TheGamer Jan 2026",
          "confidence": "high"
        },
        "petKind": "狗狗",
        "imageCount": 0,
        "sourceUrl": "https://www.heartopia.live/zh/pets/dogs/"
      },
      {
        "id": "bull-terrier",
        "name": "牛头梗",
        "size": "中型",
        "images": [],
        "favoriteFood": "农作物",
        "specialAbility": null,
        "_meta": {
          "source": "Gamezebo, TheGamer Jan 2026",
          "confidence": "high"
        },
        "petKind": "狗狗",
        "imageCount": 0,
        "sourceUrl": "https://www.heartopia.live/zh/pets/dogs/"
      },
      {
        "id": "schnauzer",
        "name": "雪纳瑞",
        "size": "中型",
        "images": [],
        "favoriteFood": "农作物",
        "specialAbility": null,
        "_meta": {
          "source": "Gamezebo, TheGamer Jan 2026",
          "confidence": "high"
        },
        "petKind": "狗狗",
        "imageCount": 0,
        "sourceUrl": "https://www.heartopia.live/zh/pets/dogs/"
      },
      {
        "id": "beagle",
        "name": "比格犬",
        "size": "中型",
        "images": [
          "/images/dogs/beagle-1.webp"
        ],
        "favoriteFood": "农作物",
        "specialAbility": null,
        "_meta": {
          "source": "Gamezebo, TheGamer, User image Jan 2026",
          "confidence": "high"
        },
        "petKind": "狗狗",
        "imageCount": 1,
        "sourceUrl": "https://www.heartopia.live/zh/pets/dogs/"
      },
      {
        "id": "english-bulldog",
        "name": "英斗",
        "size": "中型",
        "images": [],
        "favoriteFood": "农作物",
        "specialAbility": null,
        "_meta": {
          "source": "Gamezebo, TheGamer Jan 2026",
          "confidence": "high"
        },
        "petKind": "狗狗",
        "imageCount": 0,
        "sourceUrl": "https://www.heartopia.live/zh/pets/dogs/"
      },
      {
        "id": "australian-shepherd",
        "name": "澳洲牧羊犬",
        "size": "中型",
        "images": [],
        "favoriteFood": "农作物",
        "specialAbility": null,
        "_meta": {
          "source": "Gamezebo, TheGamer Jan 2026",
          "confidence": "high"
        },
        "petKind": "狗狗",
        "imageCount": 0,
        "sourceUrl": "https://www.heartopia.live/zh/pets/dogs/"
      },
      {
        "id": "dalmatian",
        "name": "斑点狗",
        "size": "中型",
        "images": [
          "/images/dogs/dalmatian-1.webp"
        ],
        "favoriteFood": "农作物",
        "specialAbility": null,
        "_meta": {
          "source": "Gamezebo, TheGamer, User image Jan 2026",
          "confidence": "high"
        },
        "petKind": "狗狗",
        "imageCount": 1,
        "sourceUrl": "https://www.heartopia.live/zh/pets/dogs/"
      },
      {
        "id": "shar-pei",
        "name": "沙皮犬",
        "size": "中型",
        "images": [],
        "favoriteFood": "农作物",
        "specialAbility": null,
        "_meta": {
          "source": "Gamezebo, TheGamer Jan 2026",
          "confidence": "high"
        },
        "petKind": "狗狗",
        "imageCount": 0,
        "sourceUrl": "https://www.heartopia.live/zh/pets/dogs/"
      },
      {
        "id": "golden-retriever",
        "name": "金毛",
        "size": "大型",
        "images": [
          "/images/dogs/golden-retriever-1.webp"
        ],
        "favoriteFood": "农作物",
        "specialAbility": "有机会带回金币袋",
        "_meta": {
          "source": "Gamezebo, TheGamer, ScreenHype, User image Jan 2026",
          "confidence": "high"
        },
        "petKind": "狗狗",
        "imageCount": 1,
        "sourceUrl": "https://www.heartopia.live/zh/pets/dogs/"
      },
      {
        "id": "alaskan-malamute",
        "name": "阿拉斯加",
        "size": "大型",
        "images": [],
        "favoriteFood": "农作物",
        "specialAbility": null,
        "_meta": {
          "source": "Gamezebo, TheGamer Jan 2026",
          "confidence": "high"
        },
        "petKind": "狗狗",
        "imageCount": 0,
        "sourceUrl": "https://www.heartopia.live/zh/pets/dogs/"
      },
      {
        "id": "german-shepherd",
        "name": "德牧",
        "size": "大型",
        "images": [
          "/images/dogs/german-shepherd-1.webp"
        ],
        "favoriteFood": "农作物",
        "specialAbility": null,
        "_meta": {
          "source": "Gamezebo, TheGamer, User image Jan 2026",
          "confidence": "high"
        },
        "petKind": "狗狗",
        "imageCount": 1,
        "sourceUrl": "https://www.heartopia.live/zh/pets/dogs/"
      },
      {
        "id": "st-bernard",
        "name": "圣伯纳",
        "size": "大型",
        "images": [],
        "favoriteFood": "农作物",
        "specialAbility": null,
        "_meta": {
          "source": "Gamezebo, TheGamer Jan 2026",
          "confidence": "high"
        },
        "petKind": "狗狗",
        "imageCount": 0,
        "sourceUrl": "https://www.heartopia.live/zh/pets/dogs/"
      },
      {
        "id": "great-pyrenees",
        "name": "大白熊",
        "size": "大型",
        "images": [],
        "favoriteFood": "农作物",
        "specialAbility": null,
        "_meta": {
          "source": "Gamezebo, TheGamer Jan 2026",
          "confidence": "high"
        },
        "petKind": "狗狗",
        "imageCount": 0,
        "sourceUrl": "https://www.heartopia.live/zh/pets/dogs/"
      },
      {
        "id": "akita",
        "name": "秋田犬",
        "size": "大型",
        "images": [],
        "favoriteFood": "农作物",
        "specialAbility": null,
        "_meta": {
          "source": "Gamezebo, TheGamer Jan 2026",
          "confidence": "high"
        },
        "petKind": "狗狗",
        "imageCount": 0,
        "sourceUrl": "https://www.heartopia.live/zh/pets/dogs/"
      },
      {
        "id": "great-dane",
        "name": "大丹犬",
        "size": "大型",
        "images": [],
        "favoriteFood": "农作物",
        "specialAbility": null,
        "_meta": {
          "source": "Gamezebo, TheGamer Jan 2026",
          "confidence": "high"
        },
        "petKind": "狗狗",
        "imageCount": 0,
        "sourceUrl": "https://www.heartopia.live/zh/pets/dogs/"
      },
      {
        "id": "rottweiler",
        "name": "罗威纳",
        "size": "大型",
        "images": [
          "/images/dogs/rottweiler-1.webp"
        ],
        "favoriteFood": "农作物",
        "specialAbility": null,
        "_meta": {
          "source": "Gamezebo, TheGamer, User image Jan 2026",
          "confidence": "high"
        },
        "petKind": "狗狗",
        "imageCount": 1,
        "sourceUrl": "https://www.heartopia.live/zh/pets/dogs/"
      },
      {
        "id": "tibetan-mastiff",
        "name": "藏獒",
        "size": "大型",
        "images": [],
        "favoriteFood": "农作物",
        "specialAbility": null,
        "_meta": {
          "source": "Gamezebo, TheGamer Jan 2026",
          "confidence": "high"
        },
        "petKind": "狗狗",
        "imageCount": 0,
        "sourceUrl": "https://www.heartopia.live/zh/pets/dogs/"
      },
      {
        "id": "bernese-mountain-dog",
        "name": "伯恩山",
        "size": "大型",
        "images": [],
        "favoriteFood": "农作物",
        "specialAbility": null,
        "_meta": {
          "source": "Gamezebo, TheGamer Jan 2026",
          "confidence": "high"
        },
        "petKind": "狗狗",
        "imageCount": 0,
        "sourceUrl": "https://www.heartopia.live/zh/pets/dogs/"
      },
      {
        "id": "newfoundland",
        "name": "纽芬兰犬",
        "size": "大型",
        "images": [],
        "favoriteFood": "农作物",
        "specialAbility": null,
        "_meta": {
          "source": "Gamezebo, TheGamer Jan 2026",
          "confidence": "high"
        },
        "petKind": "狗狗",
        "imageCount": 0,
        "sourceUrl": "https://www.heartopia.live/zh/pets/dogs/"
      },
      {
        "id": "caucasian-shepherd",
        "name": "高加索",
        "size": "大型",
        "images": [],
        "favoriteFood": "农作物",
        "specialAbility": null,
        "_meta": {
          "source": "Gamezebo, TheGamer Jan 2026",
          "confidence": "high"
        },
        "petKind": "狗狗",
        "imageCount": 0,
        "sourceUrl": "https://www.heartopia.live/zh/pets/dogs/"
      },
      {
        "id": "country-dog",
        "name": "田园犬",
        "size": "中型",
        "images": [
          "/images/dogs/country-dog-1.webp",
          "/images/dogs/country-dog-2.webp",
          "/images/dogs/country-dog-3.webp",
          "/images/dogs/country-dog-4.webp",
          "/images/dogs/country-dog-5.webp"
        ],
        "favoriteFood": "农作物",
        "specialAbility": null,
        "_meta": {
          "source": "User provided image Jan 2026",
          "confidence": "medium"
        },
        "petKind": "狗狗",
        "imageCount": 5,
        "sourceUrl": "https://www.heartopia.live/zh/pets/dogs/"
      }
    ]
  },
  {
    "slug": "achievements",
    "title": "成就图鉴",
    "navTitle": "成就",
    "icon": "Trophy",
    "category": "工具",
    "countLabel": "个成就",
    "sourcePath": "/zh/achievements/",
    "sourceUrl": "https://www.heartopia.live/zh/achievements/",
    "sourceFetchedAt": "2026-05-12",
    "description": "整理成就分类、解锁条件、攻略技巧、奖励头衔和隐藏线索。",
    "tip": "隐藏成就先看线索与分类，长期目标可以按钓鱼、烹饪、园艺等系统拆开推进。",
    "facets": [
      {
        "key": "categoryLabel",
        "label": "分类"
      },
      {
        "key": "hiddenLabel",
        "label": "状态"
      },
      {
        "key": "rewardTitle",
        "label": "奖励头衔"
      }
    ],
    "sortKeys": [
      {
        "key": "name",
        "label": "名称"
      },
      {
        "key": "categoryLabel",
        "label": "分类"
      },
      {
        "key": "hiddenLabel",
        "label": "状态"
      }
    ],
    "fields": [
      {
        "key": "categoryLabel",
        "label": "分类"
      },
      {
        "key": "hiddenLabel",
        "label": "状态"
      },
      {
        "key": "howToUnlock",
        "label": "解锁条件"
      },
      {
        "key": "tips",
        "label": "攻略技巧"
      },
      {
        "key": "rewardTitle",
        "label": "奖励头衔"
      },
      {
        "key": "clue",
        "label": "线索"
      }
    ],
    "items": [
      {
        "id": "never-empty-handed",
        "name": "满载而归",
        "category": "fishing",
        "howToUnlock": "钓鱼爱好达到10级。",
        "tips": "参加钓鱼活动可以更快地提升等级。",
        "rewardTitle": "钓鱼高手",
        "isHidden": false,
        "clue": null,
        "image": "never-empty-handed.webp",
        "_meta": {
          "source": "thegamer.com Guide Jan 2026",
          "confidence": "high"
        },
        "categoryLabel": "钓鱼",
        "hiddenLabel": "可见",
        "sourceUrl": "https://www.heartopia.live/zh/achievements/"
      },
      {
        "id": "mystic-fisher",
        "name": "神秘渔夫",
        "category": "fishing",
        "howToUnlock": "在多次钓鱼活动中累计触发10次隐藏阶段。",
        "tips": "尝试组织或参加人数较多的钓鱼活动以增加触发机会。",
        "rewardTitle": "渔夫",
        "isHidden": false,
        "clue": null,
        "image": "mystic-fisher.webp",
        "_meta": {
          "source": "thegamer.com Guide Jan 2026",
          "confidence": "high"
        },
        "categoryLabel": "钓鱼",
        "hiddenLabel": "可见",
        "sourceUrl": "https://www.heartopia.live/zh/achievements/"
      },
      {
        "id": "shoals-blessing",
        "name": "鱼群祝福",
        "category": "fishing",
        "howToUnlock": "在多次钓鱼活动中累计触发100次鱼群。",
        "tips": "尝试组织或参加人数较多的钓鱼活动以增加触发机会。",
        "rewardTitle": "祝福",
        "isHidden": false,
        "clue": null,
        "image": "shoals-blessing.webp",
        "_meta": {
          "source": "thegamer.com Guide Jan 2026",
          "confidence": "high"
        },
        "categoryLabel": "钓鱼",
        "hiddenLabel": "可见",
        "sourceUrl": "https://www.heartopia.live/zh/achievements/"
      },
      {
        "id": "strong-sailor",
        "name": "强壮水手",
        "category": "fishing",
        "howToUnlock": "连续两次钓到超过100公斤的鱼。",
        "tips": "在钓鱼活动中优先选择较大的鱼影。",
        "rewardTitle": "钓鱼线",
        "isHidden": false,
        "clue": null,
        "image": "strong-sailor.webp",
        "_meta": {
          "source": "thegamer.com Guide Jan 2026",
          "confidence": "high"
        },
        "categoryLabel": "钓鱼",
        "hiddenLabel": "可见",
        "sourceUrl": "https://www.heartopia.live/zh/achievements/"
      },
      {
        "id": "twin-fish-fortune",
        "name": "双鱼好运",
        "category": "fishing",
        "howToUnlock": "在1分钟内钓到2条5星鱼。",
        "tips": "在钓鱼活动期间更容易完成，但需要较高的钓鱼爱好等级。",
        "rewardTitle": "鱼鹰",
        "isHidden": false,
        "clue": null,
        "image": "twin-fish-fortune.webp",
        "_meta": {
          "source": "thegamer.com Guide Jan 2026",
          "confidence": "high"
        },
        "categoryLabel": "钓鱼",
        "hiddenLabel": "可见",
        "sourceUrl": "https://www.heartopia.live/zh/achievements/"
      },
      {
        "id": "fishing-machine",
        "name": "钓鱼机器",
        "category": "fishing",
        "howToUnlock": "累计钓到50条超过100公斤的鱼。",
        "tips": "这是累计统计的，所以在钓鱼时寻找较大的鱼影。",
        "rewardTitle": "鱼篓",
        "isHidden": false,
        "clue": null,
        "image": "fishing-machine.webp",
        "_meta": {
          "source": "thegamer.com Guide Jan 2026",
          "confidence": "high"
        },
        "categoryLabel": "钓鱼",
        "hiddenLabel": "可见",
        "sourceUrl": "https://www.heartopia.live/zh/achievements/"
      },
      {
        "id": "shark-frenzy",
        "name": "鲨鱼狂潮",
        "category": "fishing",
        "howToUnlock": "在单次海钓活动中从金色鱼影中钓到3条鲨鱼。",
        "tips": "继续提升你的钓鱼爱好等级，并在海钓活动中优先选择金色鱼影。",
        "rewardTitle": "鲨鱼笼",
        "isHidden": false,
        "clue": null,
        "image": "shark-frenzy.webp",
        "_meta": {
          "source": "thegamer.com Guide Jan 2026",
          "confidence": "high"
        },
        "categoryLabel": "钓鱼",
        "hiddenLabel": "可见",
        "sourceUrl": "https://www.heartopia.live/zh/achievements/"
      },
      {
        "id": "shoal-caller",
        "name": "鱼群召唤者",
        "category": "fishing",
        "howToUnlock": "在单次钓鱼活动中触发3次鱼群。",
        "tips": "你可以单人触发，但如果有更多人一起参加钓鱼活动，触发机会会更大。",
        "rewardTitle": "鱼群召唤者",
        "isHidden": false,
        "clue": null,
        "image": "shoal-caller.webp",
        "_meta": {
          "source": "thegamer.com Guide Jan 2026",
          "confidence": "high"
        },
        "categoryLabel": "钓鱼",
        "hiddenLabel": "可见",
        "sourceUrl": "https://www.heartopia.live/zh/achievements/"
      },
      {
        "id": "starlight-fisher",
        "name": "星光渔夫",
        "category": "fishing",
        "howToUnlock": "在单次钓鱼活动中钓到4条5星鱼。",
        "tips": "提升你的钓鱼爱好等级以便能钓到5星鱼。",
        "rewardTitle": "钓鱼狂人",
        "isHidden": false,
        "clue": null,
        "image": "starlight-fisher.webp",
        "_meta": {
          "source": "thegamer.com Guide Jan 2026",
          "confidence": "high"
        },
        "categoryLabel": "钓鱼",
        "hiddenLabel": "可见",
        "sourceUrl": "https://www.heartopia.live/zh/achievements/"
      },
      {
        "id": "sea-fishing-master",
        "name": "海钓大师",
        "category": "fishing",
        "howToUnlock": "在每日海钓活动中获得所有称号。包括：最快钓手、海钓话痨、海上大厨、海上音乐家、先拍照后钓鱼、钓鱼大师、满载而归、泡泡表演者。",
        "tips": "你不需要在单次活动中获得所有称号。可以在多天内累计获得。与其他玩家组队可以更容易完成。",
        "rewardTitle": "海钓者",
        "isHidden": true,
        "clue": "你将赢得瓦尼亚和钓鱼爱好者的尊重。",
        "image": null,
        "_meta": {
          "source": "thegamer.com Guide Jan 2026",
          "confidence": "high"
        },
        "categoryLabel": "钓鱼",
        "hiddenLabel": "隐藏",
        "sourceUrl": "https://www.heartopia.live/zh/achievements/"
      },
      {
        "id": "town-cooking-legend",
        "name": "小镇烹饪传奇",
        "category": "cooking",
        "howToUnlock": "烹饪爱好达到10级。",
        "tips": "尝试使用不同的食材来创造新的食谱变体。如果没有新食谱，可以做果酱或其他快速料理。",
        "rewardTitle": "大厨",
        "isHidden": false,
        "clue": null,
        "image": "town-cooking-legend.webp",
        "_meta": {
          "source": "thegamer.com Guide Jan 2026",
          "confidence": "high"
        },
        "categoryLabel": "烹饪",
        "hiddenLabel": "可见",
        "sourceUrl": "https://www.heartopia.live/zh/achievements/"
      },
      {
        "id": "fast-and-flawless",
        "name": "又快又好",
        "category": "cooking",
        "howToUnlock": "在60秒内制作2道5星料理。",
        "tips": "提升你的烹饪爱好等级以便能制作5星料理。",
        "rewardTitle": "厨房时钟",
        "isHidden": false,
        "clue": null,
        "image": "fast-and-flawless.webp",
        "_meta": {
          "source": "thegamer.com Guide Jan 2026",
          "confidence": "high"
        },
        "categoryLabel": "烹饪",
        "hiddenLabel": "可见",
        "sourceUrl": "https://www.heartopia.live/zh/achievements/"
      },
      {
        "id": "green-touch",
        "name": "绿手指",
        "category": "gardening",
        "howToUnlock": "园艺爱好达到10级。",
        "tips": "确保作物成熟后立即收获并重新播种。别忘了在需要时浇水。",
        "rewardTitle": "园艺师",
        "isHidden": false,
        "clue": null,
        "image": "green-touch.webp",
        "_meta": {
          "source": "thegamer.com Guide Jan 2026",
          "confidence": "high"
        },
        "categoryLabel": "园艺",
        "hiddenLabel": "可见",
        "sourceUrl": "https://www.heartopia.live/zh/achievements/"
      },
      {
        "id": "plentiful-harvest",
        "name": "丰收",
        "category": "gardening",
        "howToUnlock": "在丰收加成期间收获5星作物。",
        "tips": "提升你的园艺爱好等级以增加几率。丰收加成活动在彩虹天气时发生。",
        "rewardTitle": "丰收",
        "isHidden": false,
        "clue": null,
        "image": "plentiful-harvest.webp",
        "_meta": {
          "source": "thegamer.com Guide Jan 2026",
          "confidence": "high"
        },
        "categoryLabel": "园艺",
        "hiddenLabel": "可见",
        "sourceUrl": "https://www.heartopia.live/zh/achievements/"
      },
      {
        "id": "rainbow-luck",
        "name": "彩虹幸运",
        "category": "gardening",
        "howToUnlock": "在单次多区域浇水中触发2次彩虹杂交祝福。",
        "tips": "彩虹是罕见现象，所以记得查看手表上的天气预报，别错过下一次彩虹。",
        "rewardTitle": "彩虹幸运",
        "isHidden": false,
        "clue": null,
        "image": "rainbow-luck.webp",
        "_meta": {
          "source": "thegamer.com Guide Jan 2026",
          "confidence": "high"
        },
        "categoryLabel": "园艺",
        "hiddenLabel": "可见",
        "sourceUrl": "https://www.heartopia.live/zh/achievements/"
      },
      {
        "id": "ace-cat-servant",
        "name": "顶级猫奴",
        "category": "cat-caring",
        "howToUnlock": "养猫爱好达到10级。",
        "tips": "确保每天喂食、训练并与你的猫玩耍。",
        "rewardTitle": "爱猫人士",
        "isHidden": false,
        "clue": null,
        "image": "ace-cat-servant.webp",
        "_meta": {
          "source": "thegamer.com Guide Jan 2026",
          "confidence": "high"
        },
        "categoryLabel": "猫咪养护",
        "hiddenLabel": "可见",
        "sourceUrl": "https://www.heartopia.live/zh/achievements/"
      },
      {
        "id": "meow-meow-canteen",
        "name": "喵喵食堂",
        "category": "cat-caring",
        "howToUnlock": "用它们喜欢的食物喂养5只猫。",
        "tips": "用你的宠物猫喜欢的食物喂它，避免直接使用宠物店出售的普通猫粮。",
        "rewardTitle": "猫粮",
        "isHidden": false,
        "clue": null,
        "image": "meow-meow-canteen.webp",
        "_meta": {
          "source": "thegamer.com Guide Jan 2026",
          "confidence": "high"
        },
        "categoryLabel": "猫咪养护",
        "hiddenLabel": "可见",
        "sourceUrl": "https://www.heartopia.live/zh/achievements/"
      },
      {
        "id": "ace-dog-trainer",
        "name": "顶级驯狗师",
        "category": "dog-caring",
        "howToUnlock": "养狗爱好达到10级。",
        "tips": "确保每天喂食、训练并与你的狗玩耍。",
        "rewardTitle": "狗友",
        "isHidden": false,
        "clue": null,
        "image": "ace-dog-trainer.webp",
        "_meta": {
          "source": "thegamer.com Guide Jan 2026",
          "confidence": "high"
        },
        "categoryLabel": "狗狗养护",
        "hiddenLabel": "可见",
        "sourceUrl": "https://www.heartopia.live/zh/achievements/"
      },
      {
        "id": "doggie-canteen",
        "name": "汪汪食堂",
        "category": "dog-caring",
        "howToUnlock": "用它们喜欢的食物喂养3只狗。",
        "tips": "用你的宠物狗喜欢的食物喂它，避免直接使用宠物店出售的普通狗粮。",
        "rewardTitle": "狗粮",
        "isHidden": false,
        "clue": null,
        "image": "doggie-canteen.webp",
        "_meta": {
          "source": "thegamer.com Guide Jan 2026",
          "confidence": "high"
        },
        "categoryLabel": "狗狗养护",
        "hiddenLabel": "可见",
        "sourceUrl": "https://www.heartopia.live/zh/achievements/"
      },
      {
        "id": "insect-commander",
        "name": "昆虫指挥官",
        "category": "insect-catching",
        "howToUnlock": "捕虫爱好达到10级。",
        "tips": "每天捕捉昆虫并参加捕虫活动以加快进度。",
        "rewardTitle": "昆虫大师",
        "isHidden": false,
        "clue": null,
        "image": "insect-commander.webp",
        "_meta": {
          "source": "thegamer.com Guide Jan 2026",
          "confidence": "high"
        },
        "categoryLabel": "捕虫",
        "hiddenLabel": "可见",
        "sourceUrl": "https://www.heartopia.live/zh/achievements/"
      },
      {
        "id": "mystic-tracker",
        "name": "神秘追踪者",
        "category": "insect-catching",
        "howToUnlock": "在多次捕虫活动中累计触发10次隐藏阶段。",
        "tips": "与更多人一起参加捕虫活动。",
        "rewardTitle": "探索",
        "isHidden": false,
        "clue": null,
        "image": "mystic-tracker.webp",
        "_meta": {
          "source": "thegamer.com Guide Jan 2026",
          "confidence": "high"
        },
        "categoryLabel": "捕虫",
        "hiddenLabel": "可见",
        "sourceUrl": "https://www.heartopia.live/zh/achievements/"
      },
      {
        "id": "swarm-commander",
        "name": "虫群指挥官",
        "category": "insect-catching",
        "howToUnlock": "在捕虫活动中累计触发100次虫群。",
        "tips": "与更多人一起参加捕虫活动。",
        "rewardTitle": "虫群",
        "isHidden": false,
        "clue": null,
        "image": "swarm-commander.webp",
        "_meta": {
          "source": "thegamer.com Guide Jan 2026",
          "confidence": "high"
        },
        "categoryLabel": "捕虫",
        "hiddenLabel": "可见",
        "sourceUrl": "https://www.heartopia.live/zh/achievements/"
      },
      {
        "id": "insect-harvester",
        "name": "昆虫收割者",
        "category": "insect-catching",
        "howToUnlock": "用单个捕虫泡泡一次捕获3只昆虫。",
        "tips": "在池塘附近，你通常能找到大群的蜻蜓或蝴蝶。尝试瞄准以一次命中多只。",
        "rewardTitle": "三连捕",
        "isHidden": false,
        "clue": null,
        "image": "insect-harvester.webp",
        "_meta": {
          "source": "thegamer.com Guide Jan 2026",
          "confidence": "high"
        },
        "categoryLabel": "捕虫",
        "hiddenLabel": "可见",
        "sourceUrl": "https://www.heartopia.live/zh/achievements/"
      },
      {
        "id": "five-insects-blessing",
        "name": "五虫祝福",
        "category": "insect-catching",
        "howToUnlock": "在单次捕虫活动中捕获5只5星昆虫。",
        "tips": "提升你的捕虫爱好等级以增加几率。",
        "rewardTitle": "昆虫领主",
        "isHidden": false,
        "clue": null,
        "image": "five-insects-blessing.webp",
        "_meta": {
          "source": "thegamer.com Guide Jan 2026",
          "confidence": "high"
        },
        "categoryLabel": "捕虫",
        "hiddenLabel": "可见",
        "sourceUrl": "https://www.heartopia.live/zh/achievements/"
      },
      {
        "id": "human-insect-attractor",
        "name": "人形捕虫器",
        "category": "insect-catching",
        "howToUnlock": "在单次捕虫活动中触发4次虫群。",
        "tips": "与更多人一起参加捕虫活动。",
        "rewardTitle": "昆虫吸引器",
        "isHidden": false,
        "clue": null,
        "image": "human-insect-attractor.webp",
        "_meta": {
          "source": "thegamer.com Guide Jan 2026",
          "confidence": "high"
        },
        "categoryLabel": "捕虫",
        "hiddenLabel": "可见",
        "sourceUrl": "https://www.heartopia.live/zh/achievements/"
      },
      {
        "id": "onsen-mountain-insect-king",
        "name": "温泉山捕虫王",
        "category": "insect-catching",
        "howToUnlock": "在捕虫活动中获得所有称号。",
        "tips": "你不需要在单次活动中获得所有称号。与其他玩家组队可以更容易完成。",
        "rewardTitle": "未知",
        "isHidden": true,
        "clue": "所有昆虫都将涌出向你致敬。",
        "image": null,
        "_meta": {
          "source": "thegamer.com Guide Jan 2026",
          "confidence": "medium"
        },
        "categoryLabel": "捕虫",
        "hiddenLabel": "隐藏",
        "sourceUrl": "https://www.heartopia.live/zh/achievements/"
      },
      {
        "id": "bird-whisperer",
        "name": "鸟语者",
        "category": "birdwatching",
        "howToUnlock": "观鸟爱好达到10级。",
        "tips": "参加观鸟活动以更快地提升等级。",
        "rewardTitle": "鸟语者",
        "isHidden": false,
        "clue": null,
        "image": "bird-whisperer.webp",
        "_meta": {
          "source": "thegamer.com Guide Jan 2026",
          "confidence": "high"
        },
        "categoryLabel": "观鸟",
        "hiddenLabel": "可见",
        "sourceUrl": "https://www.heartopia.live/zh/achievements/"
      },
      {
        "id": "cloud-walker",
        "name": "云中漫步者",
        "category": "birdwatching",
        "howToUnlock": "在多次观鸟活动中累计触发10次隐藏阶段。",
        "tips": "与更多人一起参加观鸟活动。",
        "rewardTitle": "天空",
        "isHidden": false,
        "clue": null,
        "image": "cloud-walker.webp",
        "_meta": {
          "source": "thegamer.com Guide Jan 2026",
          "confidence": "high"
        },
        "categoryLabel": "观鸟",
        "hiddenLabel": "可见",
        "sourceUrl": "https://www.heartopia.live/zh/achievements/"
      },
      {
        "id": "harmony-with-breeze",
        "name": "与风共鸣",
        "category": "birdwatching",
        "howToUnlock": "在观鸟活动中累计触发100次鸟群。",
        "tips": "与更多人一起参加观鸟活动。",
        "rewardTitle": "共鸣",
        "isHidden": false,
        "clue": null,
        "image": "harmony-with-breeze.webp",
        "_meta": {
          "source": "thegamer.com Guide Jan 2026",
          "confidence": "high"
        },
        "categoryLabel": "观鸟",
        "hiddenLabel": "可见",
        "sourceUrl": "https://www.heartopia.live/zh/achievements/"
      },
      {
        "id": "joyful-chorus",
        "name": "欢乐合唱",
        "category": "birdwatching",
        "howToUnlock": "在单次观鸟活动中触发3次鸟群。",
        "tips": "与更多人一起参加观鸟活动。",
        "rewardTitle": "羽毛",
        "isHidden": false,
        "clue": null,
        "image": "joyful-chorus.webp",
        "_meta": {
          "source": "thegamer.com Guide Jan 2026",
          "confidence": "high"
        },
        "categoryLabel": "观鸟",
        "hiddenLabel": "可见",
        "sourceUrl": "https://www.heartopia.live/zh/achievements/"
      },
      {
        "id": "decisive-moment",
        "name": "决定性瞬间",
        "category": "birdwatching",
        "howToUnlock": "在单次观鸟活动中获得10张5星信息卡。",
        "tips": "提升你的观鸟爱好等级以增加获得5星卡的几率。此外，寻找观鸟时的独特动作。",
        "rewardTitle": "瞬间",
        "isHidden": false,
        "clue": null,
        "image": "decisive-moment.webp",
        "_meta": {
          "source": "thegamer.com Guide Jan 2026",
          "confidence": "high"
        },
        "categoryLabel": "观鸟",
        "hiddenLabel": "可见",
        "sourceUrl": "https://www.heartopia.live/zh/achievements/"
      },
      {
        "id": "sand-sculpture-artist",
        "name": "沙雕艺术家",
        "category": "seasonal",
        "howToUnlock": "沙雕爱好达到5级。",
        "tips": "季节性爱好，仅在一年中的特定时期可用。",
        "rewardTitle": "沙雕师",
        "isHidden": false,
        "clue": null,
        "image": "sand-sculpture-artist.webp",
        "_meta": {
          "source": "thegamer.com Guide Jan 2026",
          "confidence": "high"
        },
        "categoryLabel": "季节活动",
        "hiddenLabel": "可见",
        "sourceUrl": "https://www.heartopia.live/zh/achievements/"
      },
      {
        "id": "pumpkinarchy",
        "name": "南瓜王国",
        "category": "seasonal",
        "howToUnlock": "南瓜雕刻爱好达到5级。",
        "tips": "季节性爱好，仅在一年中的特定时期可用。",
        "rewardTitle": "南瓜头",
        "isHidden": false,
        "clue": null,
        "image": "pumpkinarchy.webp",
        "_meta": {
          "source": "thegamer.com Guide Jan 2026",
          "confidence": "high"
        },
        "categoryLabel": "季节活动",
        "hiddenLabel": "可见",
        "sourceUrl": "https://www.heartopia.live/zh/achievements/"
      },
      {
        "id": "snow-king",
        "name": "雪王",
        "category": "seasonal",
        "howToUnlock": "雪雕爱好达到5级。",
        "tips": "季节性爱好，仅在一年中的特定时期可用。",
        "rewardTitle": "雪王",
        "isHidden": false,
        "clue": null,
        "image": "snow-king.webp",
        "_meta": {
          "source": "thegamer.com Guide Jan 2026",
          "confidence": "high"
        },
        "categoryLabel": "季节活动",
        "hiddenLabel": "可见",
        "sourceUrl": "https://www.heartopia.live/zh/achievements/"
      },
      {
        "id": "collector",
        "name": "收藏家",
        "category": "general",
        "howToUnlock": "成为专家级收藏家。",
        "tips": "打开手表上的收藏图标查看你当前的收藏家状态。专家级收藏家是最高等级。",
        "rewardTitle": "收藏家",
        "isHidden": false,
        "clue": null,
        "image": "collector.webp",
        "_meta": {
          "source": "thegamer.com Guide Jan 2026",
          "confidence": "high"
        },
        "categoryLabel": "通用",
        "hiddenLabel": "可见",
        "sourceUrl": "https://www.heartopia.live/zh/achievements/"
      },
      {
        "id": "rocket-sponsor",
        "name": "火箭赞助商",
        "category": "general",
        "howToUnlock": "通过向艾伯特小子出售物品累计赚取500,000金币。",
        "tips": "向艾伯特小子出售高价值物品，如烹饪好的菜肴或制作的物品。",
        "rewardTitle": "火箭",
        "isHidden": false,
        "clue": null,
        "image": "rocket-sponsor.webp",
        "_meta": {
          "source": "thegamer.com Guide Jan 2026",
          "confidence": "high"
        },
        "categoryLabel": "通用",
        "hiddenLabel": "可见",
        "sourceUrl": "https://www.heartopia.live/zh/achievements/"
      },
      {
        "id": "dg-member",
        "name": "建设者协会成员",
        "category": "general",
        "howToUnlock": "建设者协会等级达到30级。",
        "tips": "继续完成每日请求以提升你的建设者协会等级。",
        "rewardTitle": "建设者协会成员",
        "isHidden": false,
        "clue": null,
        "image": "builder.webp",
        "_meta": {
          "source": "thegamer.com Guide Jan 2026",
          "confidence": "high"
        },
        "categoryLabel": "通用",
        "hiddenLabel": "可见",
        "sourceUrl": "https://www.heartopia.live/zh/achievements/"
      },
      {
        "id": "puzzle-artist",
        "name": "拼图艺术家",
        "category": "general",
        "howToUnlock": "拼图梦想达到最高等级。",
        "tips": "从卡庆那里购买新拼图并完成它们。",
        "rewardTitle": "拼图",
        "isHidden": false,
        "clue": null,
        "image": "puzzle-artist.webp",
        "_meta": {
          "source": "thegamer.com Guide Jan 2026",
          "confidence": "high"
        },
        "categoryLabel": "通用",
        "hiddenLabel": "可见",
        "sourceUrl": "https://www.heartopia.live/zh/achievements/"
      },
      {
        "id": "persistent-quill",
        "name": "持之以恒的羽毛笔",
        "category": "general",
        "howToUnlock": "写作梦想达到大师等级。",
        "tips": "使用写字台写书并发布供他人阅读。",
        "rewardTitle": "写作",
        "isHidden": false,
        "clue": null,
        "image": null,
        "_meta": {
          "source": "thegamer.com Guide Jan 2026",
          "confidence": "high"
        },
        "categoryLabel": "通用",
        "hiddenLabel": "可见",
        "sourceUrl": "https://www.heartopia.live/zh/achievements/"
      },
      {
        "id": "golden-music-cd",
        "name": "金唱片",
        "category": "general",
        "howToUnlock": "音乐梦想达到金唱片等级。",
        "tips": "演奏、录制并发布音乐供他人欣赏。",
        "rewardTitle": "音乐",
        "isHidden": false,
        "clue": null,
        "image": null,
        "_meta": {
          "source": "thegamer.com Guide Jan 2026",
          "confidence": "high"
        },
        "categoryLabel": "通用",
        "hiddenLabel": "可见",
        "sourceUrl": "https://www.heartopia.live/zh/achievements/"
      },
      {
        "id": "animal-neighbor",
        "name": "动物邻居",
        "category": "general",
        "howToUnlock": "与8个不同的动物群体亲密度达到10级。",
        "tips": "继续检查动物食槽并每天与它们互动。优先放入它们喜欢的食物。",
        "rewardTitle": "新邻居",
        "isHidden": false,
        "clue": null,
        "image": "animal-neighbors.webp",
        "_meta": {
          "source": "thegamer.com Guide Jan 2026",
          "confidence": "high"
        },
        "categoryLabel": "通用",
        "hiddenLabel": "可见",
        "sourceUrl": "https://www.heartopia.live/zh/achievements/"
      },
      {
        "id": "stardust-collector",
        "name": "星尘收藏家",
        "category": "general",
        "howToUnlock": "收集60个流星碎片。",
        "tips": "流星碎片可以在流星雨期间收集，你可以通过查看手表上的天气预报来预测流星雨。",
        "rewardTitle": "摘星者",
        "isHidden": false,
        "clue": null,
        "image": "stardust-collector.webp",
        "_meta": {
          "source": "thegamer.com Guide Jan 2026",
          "confidence": "high"
        },
        "categoryLabel": "通用",
        "hiddenLabel": "可见",
        "sourceUrl": "https://www.heartopia.live/zh/achievements/"
      },
      {
        "id": "animal-keeper",
        "name": "动物管理员",
        "category": "general",
        "howToUnlock": "发现所有8个动物群体的最爱食物。",
        "tips": "尝试你背包中的各种物品来发现动物喜欢什么。发现后，在填充食槽时会显示爱心。",
        "rewardTitle": "美味",
        "isHidden": false,
        "clue": null,
        "image": "animal-sitter.webp",
        "_meta": {
          "source": "thegamer.com Guide Jan 2026",
          "confidence": "high"
        },
        "categoryLabel": "通用",
        "hiddenLabel": "可见",
        "sourceUrl": "https://www.heartopia.live/zh/achievements/"
      },
      {
        "id": "ice-elf",
        "name": "冰雪精灵",
        "category": "general",
        "howToUnlock": "花样滑冰梦想达到冰雪精灵等级。",
        "tips": "定期练习花样滑冰以提升你的梦想等级。",
        "rewardTitle": "滑冰",
        "isHidden": false,
        "clue": null,
        "image": null,
        "_meta": {
          "source": "thegamer.com Guide Jan 2026",
          "confidence": "medium"
        },
        "categoryLabel": "通用",
        "hiddenLabel": "可见",
        "sourceUrl": "https://www.heartopia.live/zh/achievements/"
      },
      {
        "id": "gastronomic-diplomat",
        "name": "美食外交官",
        "category": "social",
        "howToUnlock": "累计与100名建设者协会成员分享食物。",
        "tips": "当你看到其他玩家时主动分享食物。食物分享会在玩家之间建立无形的纽带。",
        "rewardTitle": "未知",
        "isHidden": true,
        "clue": "双手奉上食物会建立无形的纽带。",
        "image": "gastronomic-diplomat.webp",
        "_meta": {
          "source": "thegamer.com Guide Jan 2026",
          "confidence": "medium"
        },
        "categoryLabel": "社交",
        "hiddenLabel": "隐藏",
        "sourceUrl": "https://www.heartopia.live/zh/achievements/"
      },
      {
        "id": "repair-expert",
        "name": "修理专家",
        "category": "social",
        "howToUnlock": "累计与100名建设者协会成员分享修理包。",
        "tips": "随身携带修理包，与需要的其他玩家分享。",
        "rewardTitle": "修理",
        "isHidden": true,
        "clue": "修好的工具给大家带来欢乐，让每一天都更顺畅。",
        "image": "repair-expert.webp",
        "_meta": {
          "source": "thegamer.com Guide Jan 2026",
          "confidence": "high"
        },
        "categoryLabel": "社交",
        "hiddenLabel": "隐藏",
        "sourceUrl": "https://www.heartopia.live/zh/achievements/"
      },
      {
        "id": "pop-star",
        "name": "明星",
        "category": "social",
        "howToUnlock": "你的家累计获得100个赞。",
        "tips": "把你的家装饰得漂亮，邀请其他玩家来参观。",
        "rewardTitle": "冉冉新星",
        "isHidden": true,
        "clue": "你的善良或个性赢得了许多建设者协会成员的赞赏。",
        "image": "star.webp",
        "_meta": {
          "source": "thegamer.com Guide Jan 2026",
          "confidence": "high"
        },
        "categoryLabel": "社交",
        "hiddenLabel": "隐藏",
        "sourceUrl": "https://www.heartopia.live/zh/achievements/"
      },
      {
        "id": "onsen-buddy",
        "name": "温泉伙伴",
        "category": "social",
        "howToUnlock": "与朋友一起泡温泉。",
        "tips": "最简单的地点是在捕虫声波装置旁边。只需与朋友一起跳入水中，确保你能看到能量条下方的温泉图标。",
        "rewardTitle": "温泉",
        "isHidden": true,
        "clue": "在袅袅蒸汽中，友谊悄然加深。",
        "image": "friends-of-the-hot-springs.webp",
        "_meta": {
          "source": "thegamer.com Guide Jan 2026",
          "confidence": "high"
        },
        "categoryLabel": "社交",
        "hiddenLabel": "隐藏",
        "sourceUrl": "https://www.heartopia.live/zh/achievements/"
      },
      {
        "id": "beneath-the-meteor-shower",
        "name": "流星雨下",
        "category": "social",
        "howToUnlock": "与朋友一起在流星雨下许愿。",
        "tips": "在流星雨活动期间，你和至少一位朋友需要一起使用「向流星许愿」表情（从朵莉丝那里购买）。你们必须是好友关系。",
        "rewardTitle": "双子座",
        "isHidden": true,
        "clue": "据说在流星雨下许的愿望都会成真。",
        "image": null,
        "_meta": {
          "source": "thegamer.com Guide Jan 2026",
          "confidence": "high"
        },
        "categoryLabel": "社交",
        "hiddenLabel": "隐藏",
        "sourceUrl": "https://www.heartopia.live/zh/achievements/"
      },
      {
        "id": "inflatable-attractor-share",
        "name": "充气诱虫器分享者",
        "category": "social",
        "howToUnlock": "累计与100名建设者协会成员分享充气诱虫器。",
        "tips": "当其他玩家在附近时使用充气诱虫器以分享好处。",
        "rewardTitle": "未知",
        "isHidden": true,
        "clue": "当使用充气诱虫器时，不仅昆虫注意到了，很多人也看到了。",
        "image": null,
        "_meta": {
          "source": "thegamer.com Guide Jan 2026",
          "confidence": "low"
        },
        "categoryLabel": "社交",
        "hiddenLabel": "隐藏",
        "sourceUrl": "https://www.heartopia.live/zh/achievements/"
      },
      {
        "id": "bush-wholesaler",
        "name": "灌木批发商",
        "category": "social",
        "howToUnlock": "累计与100名建设者协会成员分享伪装灌木。",
        "tips": "在活动期间与其他玩家分享伪装灌木。",
        "rewardTitle": "未知",
        "isHidden": true,
        "clue": "绿意悄然蔓延，鸟儿在枝头歌唱。",
        "image": null,
        "_meta": {
          "source": "French wiki",
          "confidence": "medium"
        },
        "categoryLabel": "社交",
        "hiddenLabel": "隐藏",
        "sourceUrl": "https://www.heartopia.live/zh/achievements/"
      },
      {
        "id": "rainbow-bouquet-volunteer",
        "name": "彩虹花束志愿者",
        "category": "social",
        "howToUnlock": "累计与50名建设者协会成员分享彩虹花束。",
        "tips": "与其他玩家分享彩虹花束，帮助他们在爱好活动中提升星级。",
        "rewardTitle": "未知",
        "isHidden": true,
        "clue": "即使没有彩虹天，生活因你而依然多彩绚丽。",
        "image": null,
        "_meta": {
          "source": "French wiki",
          "confidence": "medium"
        },
        "categoryLabel": "社交",
        "hiddenLabel": "隐藏",
        "sourceUrl": "https://www.heartopia.live/zh/achievements/"
      },
      {
        "id": "book-reader-astralis",
        "name": "阅读者（星刃）",
        "category": "social",
        "howToUnlock": "让许多建设者协会成员购买并阅读你发布的书籍。",
        "tips": "写作并发布其他玩家想要阅读的书籍。",
        "rewardTitle": "未知",
        "isHidden": true,
        "clue": "一千个读者眼中有一千个不同的星刃。",
        "image": null,
        "_meta": {
          "source": "thegamer.com Guide Jan 2026",
          "confidence": "low"
        },
        "categoryLabel": "社交",
        "hiddenLabel": "隐藏",
        "sourceUrl": "https://www.heartopia.live/zh/achievements/"
      },
      {
        "id": "bestseller-author",
        "name": "畅销书作者",
        "category": "social",
        "howToUnlock": "发布多本畅销书。",
        "tips": "写作并发布多本受其他建设者协会成员欢迎的书籍。",
        "rewardTitle": "未知",
        "isHidden": true,
        "clue": "这些书都是畅销书！",
        "image": null,
        "_meta": {
          "source": "thegamer.com Guide Jan 2026",
          "confidence": "low"
        },
        "categoryLabel": "社交",
        "hiddenLabel": "隐藏",
        "sourceUrl": "https://www.heartopia.live/zh/achievements/"
      },
      {
        "id": "book-collector",
        "name": "藏书家",
        "category": "social",
        "howToUnlock": "购买一定数量其他建设者协会成员写的书籍。",
        "tips": "访问其他玩家的家并购买他们发布的书籍。",
        "rewardTitle": "未知",
        "isHidden": true,
        "clue": "家里的书架快要满了！",
        "image": null,
        "_meta": {
          "source": "thegamer.com Guide Jan 2026",
          "confidence": "low"
        },
        "categoryLabel": "社交",
        "hiddenLabel": "隐藏",
        "sourceUrl": "https://www.heartopia.live/zh/achievements/"
      },
      {
        "id": "ice-romance",
        "name": "冰上浪漫",
        "category": "social",
        "howToUnlock": "与朋友一起表演同步滑冰舞蹈。",
        "tips": "找一位朋友，在滑冰季节一起练习花样滑冰。",
        "rewardTitle": "未知",
        "isHidden": true,
        "clue": "地平线上的流光与冰上同步起舞的身影，共同书写「浪漫」二字。",
        "image": null,
        "_meta": {
          "source": "thegamer.com Guide Jan 2026",
          "confidence": "low"
        },
        "categoryLabel": "社交",
        "hiddenLabel": "隐藏",
        "sourceUrl": "https://www.heartopia.live/zh/achievements/"
      }
    ]
  },
  {
    "slug": "music",
    "title": "乐谱图鉴",
    "navTitle": "乐谱",
    "icon": "Music",
    "category": "生活",
    "countLabel": "首乐谱",
    "sourcePath": "/zh/songs/",
    "sourceUrl": "https://www.heartopia.live/zh/songs/",
    "sourceFetchedAt": "2026-05-12",
    "description": "整理曲目、作者、类别、难度、乐器、BPM 与简谱音符。",
    "tip": "先按乐器和难度筛选；长乐谱可以在练习前复制到追踪器当今日目标。",
    "facets": [
      {
        "key": "categoryLabel",
        "label": "类别"
      },
      {
        "key": "difficulty",
        "label": "难度"
      },
      {
        "key": "instrumentText",
        "label": "乐器"
      }
    ],
    "sortKeys": [
      {
        "key": "name",
        "label": "名称"
      },
      {
        "key": "difficulty",
        "label": "难度"
      },
      {
        "key": "artist",
        "label": "作者"
      }
    ],
    "fields": [
      {
        "key": "artist",
        "label": "作者"
      },
      {
        "key": "categoryLabel",
        "label": "类别"
      },
      {
        "key": "difficulty",
        "label": "难度"
      },
      {
        "key": "instrumentText",
        "label": "乐器"
      },
      {
        "key": "bpm",
        "label": "BPM"
      },
      {
        "key": "notes",
        "label": "音符",
        "kind": "long"
      }
    ],
    "items": [
      {
        "id": "twinkle-twinkle-little-star",
        "name": "Twinkle Twinkle Little Star",
        "artist": "Traditional",
        "category": "classic",
        "difficulty": 1,
        "instruments": [
          "piano",
          "lute"
        ],
        "bpm": 90,
        "notes": "1 1 5 5 | 6 6 5 - | 4 4 3 3 | 2 2 1 - | 5 5 4 4 | 3 3 2 - | 5 5 4 4 | 3 3 2 - | 1 1 5 5 | 6 6 5 - | 4 4 3 3 | 2 2 1 -",
        "_meta": {
          "source": "YouTube community",
          "confidence": "high"
        },
        "categoryLabel": "经典",
        "instrumentText": "piano, lute",
        "sourceUrl": "https://www.heartopia.live/zh/songs/"
      },
      {
        "id": "ode-to-joy",
        "name": "Ode to Joy",
        "artist": "Beethoven",
        "category": "classic",
        "difficulty": 2,
        "instruments": [
          "piano",
          "lute"
        ],
        "bpm": 108,
        "notes": "3 3 4 5 | 5 4 3 2 | 1 1 2 3 | 3 2 2 - | 3 3 4 5 | 5 4 3 2 | 1 1 2 3 | 2 1 1 - | 2 2 3 1 | 2 3 4 3 1 | 2 3 4 3 2 | 1 2 5 - | 3 3 4 5 | 5 4 3 2 | 1 1 2 3 | 2 1 1 -",
        "_meta": {
          "source": "YouTube community",
          "confidence": "high"
        },
        "categoryLabel": "经典",
        "instrumentText": "piano, lute",
        "sourceUrl": "https://www.heartopia.live/zh/songs/"
      },
      {
        "id": "river-flows-in-you",
        "name": "River Flows In You",
        "artist": "Yiruma",
        "category": "pop",
        "difficulty": 4,
        "instruments": [
          "piano"
        ],
        "bpm": 68,
        "notes": "6 7 ¹ 7 ¹ ³ 7 - | 3 6 7 ¹ 7 ¹ ³ ³ | 6 5 3 2 3 5 6 | ¹ 7 6 7 - - | 6 7 ¹ 7 ¹ ³ 7 - | 3 6 7 ¹ 7 ¹ ³ ³ | 6 5 3 2 3 5 6 | ¹ 7 6 5 6 - -",
        "_meta": {
          "source": "YouTube community",
          "confidence": "medium"
        },
        "categoryLabel": "流行",
        "instrumentText": "piano",
        "sourceUrl": "https://www.heartopia.live/zh/songs/"
      },
      {
        "id": "a-thousand-years",
        "name": "A Thousand Years",
        "artist": "Christina Perri",
        "category": "pop",
        "difficulty": 3,
        "instruments": [
          "piano",
          "lute"
        ],
        "bpm": 67,
        "notes": "5 6 ¹ 7 6 | 5 6 ¹ 7 - | 6 ¹ ² ¹ 7 | 6 7 ¹ - - | 5 6 ¹ 7 6 | 5 6 ¹ ² - | ³ ² ¹ 7 ¹ | 7 6 5 - -",
        "_meta": {
          "source": "YouTube community",
          "confidence": "high"
        },
        "categoryLabel": "流行",
        "instrumentText": "piano, lute",
        "sourceUrl": "https://www.heartopia.live/zh/songs/"
      },
      {
        "id": "canon-in-d",
        "name": "Canon in D",
        "artist": "Pachelbel",
        "category": "classic",
        "difficulty": 3,
        "instruments": [
          "piano",
          "lute"
        ],
        "bpm": 72,
        "notes": "5 3 4 5 | 3 4 5 6 5 4 3 | 1 3 2 3 4 3 2 1 | ₇ 2 3 2 1 ₇ ₆ ₇ | 1 ₇ 1 2 3 4 5 3 | 5 3 4 5 6 5 6 7 | ¹ 5 6 ¹ 7 6 5 4 | 3 1 2 3 4 3 2 1",
        "_meta": {
          "source": "YouTube community",
          "confidence": "medium"
        },
        "categoryLabel": "经典",
        "instrumentText": "piano, lute",
        "sourceUrl": "https://www.heartopia.live/zh/songs/"
      },
      {
        "id": "my-heart-will-go-on",
        "name": "My Heart Will Go On",
        "artist": "Celine Dion",
        "category": "pop",
        "difficulty": 3,
        "instruments": [
          "piano",
          "lute"
        ],
        "bpm": 100,
        "notes": "1 2 2 - 2 3 | 3 - 2 1 2 - - | 1 2 2 - 2 3 | 3 - 2 3 5 - - | 5 - 5 6 5 3 | 3 2 - - 1 2 | 2 - 2 5 3 - | 2 1 - - - -",
        "_meta": {
          "source": "YouTube community",
          "confidence": "high"
        },
        "categoryLabel": "流行",
        "instrumentText": "piano, lute",
        "sourceUrl": "https://www.heartopia.live/zh/songs/"
      },
      {
        "id": "perfect",
        "name": "Perfect",
        "artist": "Ed Sheeran",
        "category": "pop",
        "difficulty": 2,
        "instruments": [
          "piano",
          "lute"
        ],
        "bpm": 63,
        "notes": "3 3 5 5 | 5 6 5 - | 3 3 4 4 | 4 5 4 - | 3 3 5 5 | 5 ¹ 7 - | 6 5 6 ¹ | 7 6 5 - | 3 3 5 5 | 5 6 5 - | 3 3 4 4 | 4 5 4 - | 3 3 5 5 | 5 ¹ 7 5 | 6 5 6 ¹ | 5 - - -",
        "_meta": {
          "source": "YouTube community",
          "confidence": "high"
        },
        "categoryLabel": "流行",
        "instrumentText": "piano, lute",
        "sourceUrl": "https://www.heartopia.live/zh/songs/"
      },
      {
        "id": "golden-hour",
        "name": "Golden Hour",
        "artist": "JVKE",
        "category": "pop",
        "difficulty": 3,
        "instruments": [
          "piano"
        ],
        "bpm": 98,
        "notes": "5 3 5 ¹ | 7 5 3 2 | 3 5 6 ¹ | 7 5 - - | 5 3 5 ¹ | ² ¹ 7 5 | 6 ¹ 7 5 | 6 5 3 - | ¹ ¹ 7 5 | 6 5 3 2 | 3 5 6 ¹ | 7 - - -",
        "_meta": {
          "source": "YouTube community",
          "confidence": "medium"
        },
        "categoryLabel": "流行",
        "instrumentText": "piano",
        "sourceUrl": "https://www.heartopia.live/zh/songs/"
      },
      {
        "id": "hallelujah",
        "name": "Hallelujah",
        "artist": "Leonard Cohen",
        "category": "pop",
        "difficulty": 2,
        "instruments": [
          "piano",
          "lute"
        ],
        "bpm": 56,
        "notes": "₅ ₆ 1 1 1 1 | 1 2 - 2 - | ₅ ₆ 1 1 1 1 | 1 ₇ - - - | 4 4 4 4 | 5 6 - - | 4 4 3 3 | 2 2 - - | 2 3 4 4 4 4 | 4 5 3 - 1 - | 2 1 2 1 | 1 - - -",
        "_meta": {
          "source": "YouTube community",
          "confidence": "high"
        },
        "categoryLabel": "流行",
        "instrumentText": "piano, lute",
        "sourceUrl": "https://www.heartopia.live/zh/songs/"
      },
      {
        "id": "sparkle",
        "name": "Sparkle",
        "artist": "RADWIMPS",
        "category": "anime",
        "difficulty": 4,
        "instruments": [
          "piano"
        ],
        "bpm": 78,
        "notes": "¹ 7 ¹ ² | ³ ² ¹ 7 | 6 7 ¹ 7 | 6 5 - - | ¹ 7 ¹ ² | ³ ² ¹ 7 | ¹ ² ³ ² | ¹ 7 6 - | 3 5 6 ¹ | 7 6 5 3 | 6 7 ¹ ² | ¹ - - -",
        "_meta": {
          "source": "YouTube community",
          "confidence": "medium"
        },
        "categoryLabel": "anime",
        "instrumentText": "piano",
        "sourceUrl": "https://www.heartopia.live/zh/songs/"
      },
      {
        "id": "happy-birthday",
        "name": "Happy Birthday",
        "artist": "Traditional",
        "category": "folk",
        "difficulty": 1,
        "instruments": [
          "piano",
          "lute"
        ],
        "bpm": 100,
        "notes": "5 5 6 5 ¹ 7 | 5 5 6 5 ² ¹ | 5 5 ⁵ ³ ¹ 7 6 | ⁴ ⁴ ³ ¹ ² ¹",
        "_meta": {
          "source": "YouTube community",
          "confidence": "high"
        },
        "categoryLabel": "民谣",
        "instrumentText": "piano, lute",
        "sourceUrl": "https://www.heartopia.live/zh/songs/"
      },
      {
        "id": "fur-elise",
        "name": "Für Elise",
        "artist": "Beethoven",
        "category": "classic",
        "difficulty": 3,
        "instruments": [
          "piano"
        ],
        "bpm": 72,
        "notes": "³ ² ³ ² ³ 7 ² ¹ | 6 - 1 3 6 7 | - 3 ² 7 ¹ - | ³ ² ³ ² ³ 7 ² ¹ | 6 - 1 3 6 7 | - 3 ¹ 7 6 -",
        "_meta": {
          "source": "YouTube community",
          "confidence": "high"
        },
        "categoryLabel": "经典",
        "instrumentText": "piano",
        "sourceUrl": "https://www.heartopia.live/zh/songs/"
      },
      {
        "id": "megalovania",
        "name": "Megalovania",
        "artist": "Toby Fox",
        "category": "game-ost",
        "difficulty": 4,
        "instruments": [
          "piano"
        ],
        "bpm": 120,
        "notes": "2 2 ² - 7 - - 6 - 5 - 3 5 3 | 2 2 ² - 7 - - 6 - 5 - 3 5 3",
        "_meta": {
          "source": "YouTube community",
          "confidence": "medium"
        },
        "categoryLabel": "game-ost",
        "instrumentText": "piano",
        "sourceUrl": "https://www.heartopia.live/zh/songs/"
      },
      {
        "id": "merry-go-round-of-life",
        "name": "Merry-Go-Round of Life",
        "artist": "Joe Hisaishi",
        "category": "anime",
        "difficulty": 4,
        "instruments": [
          "piano"
        ],
        "bpm": 84,
        "notes": "3 - 7 ¹ | ² - ¹ 7 | ¹ - 5 6 | 7 - - - | 6 - 3 5 | 6 7 ¹ ² | 7 - - - | - - 3 - | 7 ¹ ² - | ¹ 7 ¹ - | 5 6 7 - | 6 5 3 -",
        "_meta": {
          "source": "YouTube community",
          "confidence": "medium"
        },
        "categoryLabel": "anime",
        "instrumentText": "piano",
        "sourceUrl": "https://www.heartopia.live/zh/songs/"
      },
      {
        "id": "hedwigs-theme",
        "name": "Hedwig's Theme",
        "artist": "John Williams",
        "category": "classic",
        "difficulty": 3,
        "instruments": [
          "piano"
        ],
        "bpm": 78,
        "notes": "3 - 6 ¹ 7 | 6 - ³ ² | 7 - - - | 5 - - - | 3 - 6 ¹ 7 | 6 - ² ³ | ⁵ - ⁴ ² | ³ - - -",
        "_meta": {
          "source": "YouTube community",
          "confidence": "high"
        },
        "categoryLabel": "经典",
        "instrumentText": "piano",
        "sourceUrl": "https://www.heartopia.live/zh/songs/"
      },
      {
        "id": "super-mario-theme",
        "name": "Super Mario Bros Theme",
        "artist": "Koji Kondo",
        "category": "game-ost",
        "difficulty": 3,
        "instruments": [
          "piano"
        ],
        "bpm": 100,
        "notes": "³ ³ - ³ | - ¹ ³ - | ⁵ - - - | ₅ - - - | ¹ - - 5 | - 3 - - | 5 6 7 - | 6 5 -",
        "_meta": {
          "source": "YouTube community",
          "confidence": "medium"
        },
        "categoryLabel": "game-ost",
        "instrumentText": "piano",
        "sourceUrl": "https://www.heartopia.live/zh/songs/"
      },
      {
        "id": "see-you-again",
        "name": "See You Again",
        "artist": "Wiz Khalifa ft. Charlie Puth",
        "category": "pop",
        "difficulty": 3,
        "instruments": [
          "piano",
          "lute"
        ],
        "bpm": 80,
        "notes": "5 3 5 ¹ | 7 5 - 3 | 5 3 5 ¹ | ² ¹ - - | 5 3 5 ¹ | 7 5 - 3 | 6 5 3 2 | 1 - - -",
        "_meta": {
          "source": "YouTube community",
          "confidence": "high"
        },
        "categoryLabel": "流行",
        "instrumentText": "piano, lute",
        "sourceUrl": "https://www.heartopia.live/zh/songs/"
      },
      {
        "id": "gurenge",
        "name": "Gurenge (紅蓮華)",
        "artist": "LiSA",
        "category": "anime",
        "difficulty": 4,
        "instruments": [
          "piano"
        ],
        "bpm": 136,
        "notes": "6 6 ¹ ¹ | ² ¹ 7 ¹ | 6 - - - | 6 6 ¹ ¹ | ² ³ ² ¹ | ² - - - | ¹ ² ³ ² ¹ 7 | ¹ 7 6 5 6 -",
        "_meta": {
          "source": "YouTube community",
          "confidence": "medium"
        },
        "categoryLabel": "anime",
        "instrumentText": "piano",
        "sourceUrl": "https://www.heartopia.live/zh/songs/"
      },
      {
        "id": "animal-crossing-theme",
        "name": "Animal Crossing Main Theme",
        "artist": "Kazumi Totaka",
        "category": "game-ost",
        "difficulty": 2,
        "instruments": [
          "piano",
          "lute"
        ],
        "bpm": 110,
        "notes": "1 3 5 ¹ | 7 5 3 1 | 2 4 6 ¹ | 7 5 - - | 1 3 5 ¹ | ² ¹ 7 5 | 6 5 3 2 | 1 - - -",
        "_meta": {
          "source": "YouTube community",
          "confidence": "medium"
        },
        "categoryLabel": "game-ost",
        "instrumentText": "piano, lute",
        "sourceUrl": "https://www.heartopia.live/zh/songs/"
      },
      {
        "id": "let-it-go",
        "name": "Let It Go",
        "artist": "Idina Menzel",
        "category": "pop",
        "difficulty": 3,
        "instruments": [
          "piano",
          "lute"
        ],
        "bpm": 68,
        "notes": "5 6 ¹ ¹ ¹ ¹ | ¹ 7 6 7 ¹ | ¹ 7 6 5 - | 5 6 ¹ ¹ ¹ ¹ | ¹ 7 ¹ ² - | ¹ - - -",
        "_meta": {
          "source": "YouTube community",
          "confidence": "high"
        },
        "categoryLabel": "流行",
        "instrumentText": "piano, lute",
        "sourceUrl": "https://www.heartopia.live/zh/songs/"
      },
      {
        "id": "unravel",
        "name": "Unravel",
        "artist": "TK from Ling Tosite Sigure",
        "category": "anime",
        "difficulty": 5,
        "instruments": [
          "piano"
        ],
        "bpm": 95,
        "notes": "¹ ² ³ ² ¹ | 7 ¹ ² ¹ 7 | 6 7 ¹ 7 6 | 5 - - - | ¹ ² ³ ² ¹ | ³ ² ¹ 7 ¹ | ² ¹ 7 6 5 | 6 - - -",
        "_meta": {
          "source": "YouTube community",
          "confidence": "medium"
        },
        "categoryLabel": "anime",
        "instrumentText": "piano",
        "sourceUrl": "https://www.heartopia.live/zh/songs/"
      },
      {
        "id": "moonlight-sonata",
        "name": "Moonlight Sonata",
        "artist": "Beethoven",
        "category": "classic",
        "difficulty": 3,
        "instruments": [
          "piano"
        ],
        "bpm": 56,
        "notes": "3 6 ¹ 3 6 ¹ | 3 6 ¹ 3 6 ¹ | 2 6 7 2 6 7 | 3 6 ¹ 3 6 ¹ | 4 6 ¹ 4 6 ¹ | 3 5 ¹ 3 5 7 | 2 6 7 - - -",
        "_meta": {
          "source": "YouTube community",
          "confidence": "high"
        },
        "categoryLabel": "经典",
        "instrumentText": "piano",
        "sourceUrl": "https://www.heartopia.live/zh/songs/"
      },
      {
        "id": "yesterday",
        "name": "Yesterday",
        "artist": "The Beatles",
        "category": "pop",
        "difficulty": 2,
        "instruments": [
          "piano",
          "lute"
        ],
        "bpm": 96,
        "notes": "5 - ¹ 7 6 5 | 6 7 ¹ ² ¹ - | 5 - ¹ 7 6 5 | 4 3 2 1 - -",
        "_meta": {
          "source": "YouTube community",
          "confidence": "high"
        },
        "categoryLabel": "流行",
        "instrumentText": "piano, lute",
        "sourceUrl": "https://www.heartopia.live/zh/songs/"
      },
      {
        "id": "counting-stars",
        "name": "Counting Stars",
        "artist": "OneRepublic",
        "category": "pop",
        "difficulty": 3,
        "instruments": [
          "piano"
        ],
        "bpm": 122,
        "notes": "5 5 5 5 3 | 5 5 5 5 6 | 5 5 5 5 3 | 2 1 - - | 5 5 5 5 3 | 5 5 5 5 6 | ¹ ¹ ¹ 7 6 | 5 - - -",
        "_meta": {
          "source": "YouTube community",
          "confidence": "medium"
        },
        "categoryLabel": "流行",
        "instrumentText": "piano",
        "sourceUrl": "https://www.heartopia.live/zh/songs/"
      },
      {
        "id": "spring-vivaldi",
        "name": "Spring (Vivaldi)",
        "artist": "Vivaldi",
        "category": "classic",
        "difficulty": 3,
        "instruments": [
          "piano"
        ],
        "bpm": 120,
        "notes": "¹ 7 ¹ - | ¹ 7 ¹ - | ¹ 7 ¹ ² ³ | ² ¹ 7 ¹ | 6 - 5 - | 6 7 ¹ 7 | 6 5 3 5 | 6 - - -",
        "_meta": {
          "source": "YouTube community",
          "confidence": "high"
        },
        "categoryLabel": "经典",
        "instrumentText": "piano",
        "sourceUrl": "https://www.heartopia.live/zh/songs/"
      }
    ]
  },
  {
    "slug": "recipes",
    "title": "食谱图鉴",
    "navTitle": "食谱",
    "icon": "CookingPot",
    "category": "生活",
    "countLabel": "个食谱",
    "sourcePath": "/zh/recipes/",
    "sourceUrl": "https://www.heartopia.live/zh/recipes/",
    "sourceFetchedAt": "2026-05-12",
    "description": "完整食谱数据库，包含食材、烹饪等级、解锁/购买信息、成本、售价、利润和能量。",
    "tip": "优先看成本、利润和能量；冬霜季食谱带有特殊解锁条件，建议单独筛选。",
    "facets": [
      {
        "key": "cookingLevel",
        "label": "烹饪等级"
      },
      {
        "key": "tool",
        "label": "工具"
      },
      {
        "key": "recipePrice",
        "label": "解锁/价格"
      }
    ],
    "sortKeys": [
      {
        "key": "name",
        "label": "名称"
      },
      {
        "key": "cookingLevel",
        "label": "等级"
      },
      {
        "key": "costToMake",
        "label": "成本"
      }
    ],
    "fields": [
      {
        "key": "cookingLevel",
        "label": "烹饪等级",
        "prefix": "Lv."
      },
      {
        "key": "ingredientsText",
        "label": "食材",
        "kind": "long"
      },
      {
        "key": "ingredientsRaw",
        "label": "原始食材说明",
        "kind": "long"
      },
      {
        "key": "recipePrice",
        "label": "食谱价格/解锁",
        "kind": "long"
      },
      {
        "key": "tool",
        "label": "工具"
      },
      {
        "key": "costToMake",
        "label": "成本"
      },
      {
        "key": "prices",
        "label": "售价",
        "kind": "stars"
      },
      {
        "key": "profit",
        "label": "利润",
        "kind": "stars"
      },
      {
        "key": "energy",
        "label": "获得能量",
        "kind": "stars"
      }
    ],
    "items": [
      {
        "id": "bizzare-drink",
        "name": "奇异饮品",
        "ingredientsRaw": "Missed Stove Heat Adjust. & Early Collect",
        "ingredients": [],
        "cookingLevel": 1,
        "recipePrice": null,
        "prices": {
          "1star": 30
        },
        "energy": {
          "1star": 10
        },
        "costToMake": null,
        "profit": {},
        "_meta": {
          "source": "Excel Guide Feb 22",
          "confidence": "high",
          "translationSource": "llm"
        },
        "ingredientsText": "",
        "sourceUrl": "https://www.heartopia.live/zh/recipes/"
      },
      {
        "id": "bizarre-food",
        "name": "Bizarre Food",
        "ingredientsRaw": "Missed Stove Heat Adjust.",
        "ingredients": [
          {
            "id": "special",
            "name": "Any food recipe but let it burn",
            "qty": 1
          }
        ],
        "cookingLevel": 1,
        "recipePrice": null,
        "prices": {
          "1star": 30
        },
        "energy": {
          "1star": "+10"
        },
        "costToMake": null,
        "profit": {},
        "_meta": {
          "source": "Excel Guide Jan 12",
          "confidence": "high",
          "translationSource": "synced"
        },
        "tool": "Stove",
        "ingredientsText": "Any food recipe but let it burn x1",
        "sourceUrl": "https://www.heartopia.live/zh/recipes/"
      },
      {
        "id": "tomato-sauce",
        "name": "Tomato Sauce",
        "ingredientsRaw": "🍅🍅🍅🍅",
        "ingredients": [
          {
            "id": "tomatoes",
            "name": "tomatoes",
            "qty": 4
          }
        ],
        "cookingLevel": 1,
        "recipePrice": null,
        "prices": {
          "1star": 180,
          "2star": 270,
          "3star": 360,
          "4star": 720,
          "5star": 1440
        },
        "energy": {
          "1star": "+35",
          "2star": "+42",
          "3star": "+49",
          "4star": "+56",
          "5star": "+70"
        },
        "costToMake": 120,
        "profit": {
          "1star": 60,
          "2star": 230,
          "3star": 320,
          "4star": 680,
          "5star": 1400
        },
        "_meta": {
          "source": "Excel Guide Jan 12",
          "confidence": "high",
          "translationSource": "synced"
        },
        "tool": "Stove",
        "ingredientsText": "tomatoes x4",
        "sourceUrl": "https://www.heartopia.live/zh/recipes/"
      },
      {
        "id": "blueberry-jam",
        "name": "Blueberry Jam",
        "ingredientsRaw": "🔵🔵🔵🔵",
        "ingredients": [
          {
            "id": "blueberries",
            "name": "blueberries",
            "qty": 4
          }
        ],
        "cookingLevel": 1,
        "recipePrice": null,
        "prices": {
          "1star": 170,
          "2star": 255,
          "3star": 340,
          "4star": 680,
          "5star": 1360
        },
        "energy": {
          "1star": "+22",
          "2star": "+26",
          "3star": "+31",
          "4star": "+35",
          "5star": "+44"
        },
        "costToMake": null,
        "profit": {
          "1star": 106,
          "2star": 191,
          "3star": 276,
          "4star": 680,
          "5star": 1360
        },
        "_meta": {
          "source": "Excel Guide Jan 12",
          "confidence": "high",
          "translationSource": "synced"
        },
        "tool": "Stove",
        "ingredientsText": "blueberries x4",
        "sourceUrl": "https://www.heartopia.live/zh/recipes/"
      },
      {
        "id": "raspberry-jam",
        "name": "Raspberry Jam",
        "ingredientsRaw": "🔴🔴🔴🔴",
        "ingredients": [
          {
            "id": "raspberries",
            "name": "raspberries",
            "qty": 4
          }
        ],
        "cookingLevel": 1,
        "recipePrice": null,
        "prices": {
          "1star": 250,
          "2star": 375,
          "3star": 500,
          "4star": 1000,
          "5star": 2000
        },
        "energy": {
          "1star": "+30",
          "2star": "+36",
          "3star": "+42",
          "4star": "+48",
          "5star": "+60"
        },
        "costToMake": null,
        "profit": {
          "1star": 146,
          "2star": 375,
          "3star": 500,
          "4star": 1000,
          "5star": 2000
        },
        "_meta": {
          "source": "Excel Guide Jan 12",
          "confidence": "high",
          "translationSource": "synced"
        },
        "tool": "Stove",
        "ingredientsText": "raspberries x4",
        "sourceUrl": "https://www.heartopia.live/zh/recipes/"
      },
      {
        "id": "mandarin-jam",
        "name": "Mandarin Jam",
        "ingredientsRaw": "🍊🍊🍊🍊",
        "ingredients": [
          {
            "id": "mandarins",
            "name": "mandarins",
            "qty": 4
          }
        ],
        "cookingLevel": 1,
        "recipePrice": null,
        "prices": {
          "1star": 270,
          "2star": 405,
          "3star": 540,
          "5star": 2160,
          "4star": 1080
        },
        "energy": {
          "1star": "+35",
          "2star": "+42",
          "3star": "+49",
          "4star": "+56",
          "5star": "+70"
        },
        "costToMake": null,
        "profit": {
          "1star": 158,
          "2star": 405,
          "3star": 540,
          "4star": 1080,
          "5star": 2160
        },
        "_meta": {
          "source": "Excel Guide Jan 12",
          "confidence": "high",
          "translationSource": "synced"
        },
        "tool": "Stove",
        "ingredientsText": "mandarins x4",
        "sourceUrl": "https://www.heartopia.live/zh/recipes/"
      },
      {
        "id": "apple-jam",
        "name": "Apple Jam",
        "ingredientsRaw": "🍎🍎🍎🍎",
        "ingredients": [
          {
            "id": "apples",
            "name": "apples",
            "qty": 4
          }
        ],
        "cookingLevel": 1,
        "recipePrice": null,
        "prices": {
          "1star": 270,
          "2star": 405,
          "3star": 540,
          "4star": 1080,
          "5star": 2160
        },
        "energy": {
          "1star": "+35",
          "2star": "+42",
          "3star": "+49",
          "4star": "+56",
          "5star": "+70"
        },
        "costToMake": null,
        "profit": {
          "1star": 158,
          "2star": 405,
          "3star": 540,
          "4star": 1080,
          "5star": 2160
        },
        "_meta": {
          "source": "Excel Guide Jan 12",
          "confidence": "high",
          "translationSource": "synced"
        },
        "tool": "Stove",
        "ingredientsText": "apples x4",
        "sourceUrl": "https://www.heartopia.live/zh/recipes/"
      },
      {
        "id": "strawberry-jam",
        "name": "Strawberry Jam",
        "ingredientsRaw": "🍓🍓🍓🍓",
        "ingredients": [],
        "cookingLevel": 1,
        "recipePrice": null,
        "prices": {
          "1star": 1580,
          "2star": 2370,
          "5star": 12640,
          "3star": 3160,
          "4star": 6320
        },
        "energy": {
          "1star": "+40",
          "2star": "+48",
          "3star": "+56",
          "4star": "+56",
          "5star": "+80"
        },
        "costToMake": 1500,
        "profit": {
          "1star": 80,
          "4star": 4820,
          "2star": 870,
          "3star": 1660,
          "5star": 11140
        },
        "_meta": {
          "source": "Excel Guide Jan 12",
          "confidence": "high",
          "translationSource": "synced"
        },
        "ingredientsText": "",
        "sourceUrl": "https://www.heartopia.live/zh/recipes/"
      },
      {
        "id": "pineapple-jam",
        "name": "Pineapple Jam",
        "ingredientsRaw": "🍍🍍🍍🍍",
        "ingredients": [],
        "cookingLevel": 1,
        "recipePrice": null,
        "prices": {
          "1star": 280,
          "2star": 420,
          "3star": 560,
          "4star": 1120,
          "5star": 2240
        },
        "energy": {
          "1star": "+40",
          "2star": "+48",
          "3star": "+56",
          "4star": "+64",
          "5star": "+80"
        },
        "costToMake": 60,
        "profit": {
          "1star": 220,
          "2star": 360,
          "3star": 500,
          "4star": 1060,
          "5star": 2180
        },
        "_meta": {
          "source": "Excel Guide Jan 12",
          "confidence": "high",
          "translationSource": "synced"
        },
        "ingredientsText": "",
        "sourceUrl": "https://www.heartopia.live/zh/recipes/"
      },
      {
        "id": "grape-jam",
        "name": "Grape Jam",
        "ingredientsRaw": "🍇🍇🍇🍇",
        "ingredients": [],
        "cookingLevel": 1,
        "recipePrice": null,
        "prices": {
          "1star": 2020,
          "2star": 3030,
          "3star": 4040,
          "5star": 16160,
          "4star": 8080
        },
        "energy": {
          "1star": "+40",
          "2star": "+48",
          "3star": "+56",
          "4star": "+64",
          "5star": "+80"
        },
        "costToMake": 640,
        "profit": {
          "1star": 1380,
          "2star": 2390,
          "3star": 3400,
          "4star": 8080,
          "5star": 15520
        },
        "_meta": {
          "source": "Excel Guide Jan 12",
          "confidence": "high",
          "translationSource": "synced"
        },
        "ingredientsText": "",
        "sourceUrl": "https://www.heartopia.live/zh/recipes/"
      },
      {
        "id": "chocolate-sauce",
        "name": "Chocolate Sauce",
        "ingredientsRaw": "🍫🍫🍫🍫",
        "ingredients": [
          {
            "id": "cocoa",
            "name": "cocoa",
            "qty": 4
          }
        ],
        "cookingLevel": 1,
        "recipePrice": null,
        "prices": {
          "1star": 1400,
          "2star": 2100,
          "3star": 2800,
          "4star": 5600,
          "5star": 11200
        },
        "energy": {},
        "costToMake": 440,
        "profit": {
          "1star": 960,
          "2star": 1660,
          "3star": 2360,
          "4star": 5160,
          "5star": 10760
        },
        "_meta": {
          "source": "Excel Guide Jan 12",
          "confidence": "high"
        },
        "tool": "Stove",
        "ingredientsText": "cocoa x4",
        "sourceUrl": "https://www.heartopia.live/zh/recipes/"
      },
      {
        "id": "coffee",
        "name": "Coffee",
        "ingredientsRaw": "🟤🟤🟤🟤",
        "ingredients": [
          {
            "id": "coffee",
            "name": "coffee",
            "qty": 4
          }
        ],
        "cookingLevel": 1,
        "recipePrice": null,
        "prices": {
          "1star": 290,
          "2star": 435,
          "3star": 580,
          "4star": 1160,
          "5star": 2320
        },
        "energy": {
          "1star": "+40",
          "2star": "+48",
          "3star": "+56",
          "4star": "+56",
          "5star": "+80"
        },
        "costToMake": 200,
        "profit": {
          "1star": 90,
          "2star": 235,
          "3star": 380,
          "4star": 960,
          "5star": 2120
        },
        "_meta": {
          "source": "Excel Guide Jan 12",
          "confidence": "high",
          "translationSource": "synced"
        },
        "tool": "Stove",
        "ingredientsText": "coffee x4",
        "sourceUrl": "https://www.heartopia.live/zh/recipes/"
      },
      {
        "id": "coffee-latte",
        "name": "Coffee Latte",
        "ingredientsRaw": "🟤🟤🥛🥛",
        "ingredients": [
          {
            "id": "coffee",
            "name": "Coffee",
            "qty": 2
          },
          {
            "id": "milk",
            "name": "Milk",
            "qty": 2
          }
        ],
        "cookingLevel": 1,
        "recipePrice": null,
        "prices": {
          "1star": 300,
          "2star": 450,
          "3star": 600,
          "4star": 1200,
          "5star": 2400
        },
        "energy": {
          "1star": "+40",
          "2star": "+48",
          "3star": "+56",
          "4star": "+56",
          "5star": "+80"
        },
        "costToMake": 200,
        "profit": {
          "1star": 100,
          "2star": 250,
          "3star": 400,
          "4star": 1000,
          "5star": 2200
        },
        "_meta": {
          "source": "Excel Guide Jan 12",
          "confidence": "high",
          "translationSource": "synced"
        },
        "ingredientsText": "Coffee x2, Milk x2",
        "sourceUrl": "https://www.heartopia.live/zh/recipes/"
      },
      {
        "id": "original-roll-cake",
        "name": "Original Roll Cake",
        "ingredientsRaw": "🥚🥛⚪⚪ [any sugar]",
        "ingredients": [],
        "cookingLevel": 1,
        "recipePrice": 50,
        "prices": {
          "1star": 550,
          "2star": 825,
          "3star": 1100,
          "5star": 4400,
          "4star": 2200
        },
        "energy": {
          "1star": "+35",
          "2star": "+42",
          "3star": "+49",
          "4star": "+56",
          "5star": "+70"
        },
        "costToMake": 450,
        "profit": {
          "1star": 100,
          "2star": 375,
          "3star": 650,
          "5star": 3950,
          "4star": 1830
        },
        "_meta": {
          "source": "Excel Guide Jan 12",
          "confidence": "high",
          "translationSource": "synced"
        },
        "ingredientsText": "",
        "sourceUrl": "https://www.heartopia.live/zh/recipes/"
      },
      {
        "id": "red-roll-cake",
        "name": "Red Roll Cake",
        "ingredientsRaw": "🥚🥛❤️❤️",
        "ingredients": [],
        "cookingLevel": 1,
        "recipePrice": null,
        "prices": {
          "1star": 670,
          "2star": 1005,
          "4star": 2680,
          "3star": 1340,
          "5star": 5360
        },
        "energy": {
          "1star": "+48",
          "2star": "+58",
          "3star": "+67",
          "4star": "+77",
          "5star": "+96"
        },
        "costToMake": 450,
        "profit": {
          "1star": 220,
          "2star": 555,
          "3star": 890,
          "4star": 2230,
          "5star": 4810
        },
        "_meta": {
          "source": "Excel Guide Jan 12",
          "confidence": "high",
          "translationSource": "synced"
        },
        "ingredientsText": "",
        "sourceUrl": "https://www.heartopia.live/zh/recipes/"
      },
      {
        "id": "orange-roll-cake",
        "name": "Orange Roll Cake",
        "ingredientsRaw": "🥚🥛🧡🧡",
        "ingredients": [],
        "cookingLevel": 1,
        "recipePrice": null,
        "prices": {
          "1star": 670,
          "2star": 1005,
          "3star": 1340,
          "4star": 2680,
          "5star": 5360
        },
        "energy": {
          "1star": "+48",
          "2star": "+58",
          "3star": "+67",
          "4star": "+77",
          "5star": "+96"
        },
        "costToMake": 550,
        "profit": {
          "1star": 120,
          "2star": 455,
          "3star": 790,
          "4star": 2130,
          "5star": 4810
        },
        "_meta": {
          "source": "Excel Guide Jan 12",
          "confidence": "high",
          "translationSource": "synced"
        },
        "ingredientsText": "",
        "sourceUrl": "https://www.heartopia.live/zh/recipes/"
      },
      {
        "id": "yellow-roll-cake",
        "name": "Yellow Roll Cake",
        "ingredientsRaw": "🥚🥛💛💛",
        "ingredients": [],
        "cookingLevel": 1,
        "recipePrice": null,
        "prices": {
          "1star": 670,
          "2star": 1005,
          "3star": 1340,
          "4star": 2680,
          "5star": 5360
        },
        "energy": {
          "1star": "+48",
          "2star": "+58",
          "3star": "+67",
          "4star": "+77",
          "5star": "+96"
        },
        "costToMake": 450,
        "profit": {
          "1star": 220,
          "2star": 555,
          "3star": 890,
          "4star": 2230,
          "5star": 4910
        },
        "_meta": {
          "source": "Excel Guide Jan 12",
          "confidence": "high",
          "translationSource": "synced"
        },
        "ingredientsText": "",
        "sourceUrl": "https://www.heartopia.live/zh/recipes/"
      },
      {
        "id": "violet-roll-cake",
        "name": "Violet Roll Cake",
        "ingredientsRaw": "🥚🥛💜💜",
        "ingredients": [],
        "cookingLevel": 1,
        "recipePrice": null,
        "prices": {
          "1star": 570,
          "2star": 855,
          "3star": 1140,
          "4star": 2280,
          "5star": 4560
        },
        "energy": {
          "1star": "+48",
          "2star": "+58",
          "3star": "+67",
          "4star": "+77",
          "5star": "+96"
        },
        "costToMake": 450,
        "profit": {
          "1star": 120,
          "2star": 405,
          "3star": 690,
          "4star": 1830,
          "5star": 4110
        },
        "_meta": {
          "source": "Excel Guide Jan 12",
          "confidence": "high",
          "translationSource": "synced"
        },
        "ingredientsText": "",
        "sourceUrl": "https://www.heartopia.live/zh/recipes/"
      },
      {
        "id": "green-roll-cake",
        "name": "Green Roll Cake",
        "ingredientsRaw": "🥚🥛💚💚",
        "ingredients": [],
        "cookingLevel": 1,
        "recipePrice": null,
        "prices": {
          "1star": 670,
          "2star": 1005,
          "3star": 1340,
          "4star": 2680,
          "5star": 5360
        },
        "energy": {
          "1star": "+48",
          "2star": "+58",
          "3star": "+67",
          "4star": "+77",
          "5star": "+96"
        },
        "costToMake": 550,
        "profit": {
          "1star": 120,
          "2star": 455,
          "3star": 790,
          "4star": 2130,
          "5star": 4810
        },
        "_meta": {
          "source": "Excel Guide Jan 12",
          "confidence": "high",
          "translationSource": "synced"
        },
        "ingredientsText": "",
        "sourceUrl": "https://www.heartopia.live/zh/recipes/"
      },
      {
        "id": "blue-roll-cake",
        "name": "Blue Roll Cake",
        "ingredientsRaw": "🥚🥛💙💙",
        "ingredients": [],
        "cookingLevel": 1,
        "recipePrice": null,
        "prices": {
          "1star": 570,
          "2star": 855,
          "3star": 1140,
          "4star": 2280,
          "5star": 4560
        },
        "energy": {
          "1star": "+48",
          "2star": "+58",
          "3star": "+67",
          "4star": "+77",
          "5star": "+96"
        },
        "costToMake": 450,
        "profit": {
          "1star": 120,
          "2star": 405,
          "3star": 690,
          "4star": 1830,
          "5star": 4110
        },
        "_meta": {
          "source": "Excel Guide Jan 12",
          "confidence": "high",
          "translationSource": "synced"
        },
        "ingredientsText": "",
        "sourceUrl": "https://www.heartopia.live/zh/recipes/"
      },
      {
        "id": "indigo-roll-cake",
        "name": "Indigo Roll Cake",
        "ingredientsRaw": "🥚🥛🖤🖤",
        "ingredients": [],
        "cookingLevel": 1,
        "recipePrice": null,
        "prices": {
          "1star": 570,
          "2star": 855,
          "3star": 1140,
          "4star": 2280,
          "5star": 4560
        },
        "energy": {
          "1star": "+48",
          "2star": "+58",
          "3star": "+67",
          "4star": "+77",
          "5star": "+96"
        },
        "costToMake": 450,
        "profit": {
          "1star": 120,
          "2star": 405,
          "3star": 690,
          "4star": 1830,
          "5star": 4110
        },
        "_meta": {
          "source": "Excel Guide Jan 12",
          "confidence": "high",
          "translationSource": "synced"
        },
        "ingredientsText": "",
        "sourceUrl": "https://www.heartopia.live/zh/recipes/"
      },
      {
        "id": "shiitake-pie",
        "name": "Shiitake Pie",
        "ingredientsRaw": "🍄🍄🌾🥚",
        "ingredients": [
          {
            "id": "shiitake",
            "name": "Shiitake",
            "qty": 2
          },
          {
            "id": "wheat",
            "name": "wheat",
            "qty": 1
          },
          {
            "id": "egg",
            "name": "egg",
            "qty": 1
          }
        ],
        "cookingLevel": 1,
        "recipePrice": null,
        "prices": {
          "1star": 500,
          "2star": 750,
          "3star": 1000,
          "4star": 2000,
          "5star": 4000
        },
        "energy": {
          "1star": "+35",
          "3star": "+49",
          "2star": "+42",
          "4star": "+56",
          "5star": "+70"
        },
        "costToMake": 195,
        "profit": {
          "1star": 305,
          "2star": 555,
          "3star": 805,
          "4star": 1805,
          "5star": 3805
        },
        "_meta": {
          "source": "Excel Guide Jan 12",
          "confidence": "high",
          "translationSource": "synced"
        },
        "tool": "Stove",
        "ingredientsText": "Shiitake x2, wheat x1, egg x1",
        "sourceUrl": "https://www.heartopia.live/zh/recipes/"
      },
      {
        "id": "button-mushroom-pie",
        "name": "Button Mushroom Pie",
        "ingredientsRaw": "🍄🍄🌾🥚",
        "ingredients": [
          {
            "id": "button-mushrooms",
            "name": "button mushrooms",
            "qty": 2
          },
          {
            "id": "wheat",
            "name": "wheat",
            "qty": 1
          },
          {
            "id": "egg",
            "name": "egg",
            "qty": 1
          }
        ],
        "cookingLevel": 1,
        "recipePrice": null,
        "prices": {
          "1star": 500,
          "2star": 750,
          "3star": 1000,
          "4star": 2000,
          "5star": 4000
        },
        "energy": {
          "1star": "+35",
          "3star": "+49",
          "2star": "+42",
          "4star": "+56",
          "5star": "+70"
        },
        "costToMake": 195,
        "profit": {
          "1star": 305,
          "2star": 555,
          "3star": 805,
          "4star": 1805,
          "5star": 3805
        },
        "_meta": {
          "source": "Excel Guide Jan 12",
          "confidence": "high",
          "translationSource": "synced"
        },
        "tool": "Stove",
        "ingredientsText": "button mushrooms x2, wheat x1, egg x1",
        "sourceUrl": "https://www.heartopia.live/zh/recipes/"
      },
      {
        "id": "penny-bun-pie",
        "name": "Penny Bun Pie",
        "ingredientsRaw": "🍄🍄🌾🥚",
        "ingredients": [],
        "cookingLevel": 1,
        "recipePrice": null,
        "prices": {
          "1star": 500,
          "2star": 750,
          "4star": 2000,
          "3star": 1000,
          "5star": 4000
        },
        "energy": {
          "1star": "+35",
          "3star": "+49",
          "2star": "+42",
          "4star": "+56",
          "5star": "+70"
        },
        "costToMake": 195,
        "profit": {
          "1star": 305,
          "2star": 555,
          "3star": 805,
          "4star": 1805,
          "5star": 3805
        },
        "_meta": {
          "source": "Excel Guide Jan 12",
          "confidence": "high",
          "translationSource": "synced"
        },
        "ingredientsText": "",
        "sourceUrl": "https://www.heartopia.live/zh/recipes/"
      },
      {
        "id": "black-truffle-pie",
        "name": "黑松露派",
        "ingredientsRaw": "🍄🍄🌾🥚",
        "ingredients": [
          {
            "id": "black-truffles",
            "name": "black truffles",
            "qty": 2
          },
          {
            "id": "wheat",
            "name": "wheat",
            "qty": 1
          },
          {
            "id": "egg",
            "name": "egg",
            "qty": 1
          }
        ],
        "cookingLevel": 1,
        "recipePrice": null,
        "prices": {
          "1star": 830,
          "2star": 1245,
          "3star": 1660,
          "4star": 3320,
          "5star": 6640
        },
        "energy": {
          "1star": 80,
          "2star": 96,
          "3star": 112,
          "4star": 128,
          "5star": 160
        },
        "costToMake": 195,
        "profit": {
          "1star": 635,
          "2star": 1050,
          "3star": 1465,
          "4star": 3125,
          "5star": 6445
        },
        "_meta": {
          "source": "Excel Guide Feb 22",
          "confidence": "high",
          "translationSource": "llm"
        },
        "tool": "Stove",
        "ingredientsText": "black truffles x2, wheat x1, egg x1",
        "sourceUrl": "https://www.heartopia.live/zh/recipes/"
      },
      {
        "id": "oyster-mushroom-pie",
        "name": "Oyster Mushroom Pie",
        "ingredientsRaw": "🍄🍄🌾🥚",
        "ingredients": [
          {
            "id": "oyster-mushrooms",
            "name": "oyster mushrooms",
            "qty": 2
          },
          {
            "id": "wheat",
            "name": "wheat",
            "qty": 1
          },
          {
            "id": "egg",
            "name": "egg",
            "qty": 1
          }
        ],
        "cookingLevel": 1,
        "recipePrice": null,
        "prices": {
          "1star": 500,
          "2star": 750,
          "3star": 1000,
          "4star": 2000,
          "5star": 4000
        },
        "energy": {
          "1star": "+35",
          "3star": "+49",
          "2star": "+42",
          "4star": "+56",
          "5star": "+70"
        },
        "costToMake": 195,
        "profit": {
          "1star": 305,
          "2star": 555,
          "3star": 805,
          "4star": 1805,
          "5star": 3805
        },
        "_meta": {
          "source": "Excel Guide Jan 12",
          "confidence": "high",
          "translationSource": "synced"
        },
        "tool": "Stove",
        "ingredientsText": "oyster mushrooms x2, wheat x1, egg x1",
        "sourceUrl": "https://www.heartopia.live/zh/recipes/"
      },
      {
        "id": "mushroom-pie",
        "name": "Mushroom Pie",
        "ingredientsRaw": "🍄🍄🌾🥚",
        "ingredients": [
          {
            "id": "any-mushrooms",
            "name": "any mushrooms",
            "qty": 2
          },
          {
            "id": "wheat",
            "name": "wheat",
            "qty": 1
          },
          {
            "id": "egg",
            "name": "egg",
            "qty": 1
          }
        ],
        "cookingLevel": 1,
        "recipePrice": null,
        "prices": {
          "1star": 500,
          "2star": 750,
          "3star": 1000,
          "4star": 2000,
          "5star": 4000
        },
        "energy": {
          "1star": "+35",
          "3star": "+49",
          "2star": "+42",
          "4star": "+56",
          "5star": "+70"
        },
        "costToMake": 195,
        "profit": {
          "1star": 305,
          "2star": 555,
          "3star": 805,
          "4star": 1805,
          "5star": 3805
        },
        "_meta": {
          "source": "Excel Guide Jan 12",
          "confidence": "high",
          "translationSource": "synced"
        },
        "tool": "Stove",
        "ingredientsText": "any mushrooms x2, wheat x1, egg x1",
        "sourceUrl": "https://www.heartopia.live/zh/recipes/"
      },
      {
        "id": "grilled-mushrooms",
        "name": "烤蘑菇",
        "ingredientsRaw": "🍄🍄🍄🍄 [any]",
        "ingredients": [],
        "cookingLevel": 1,
        "recipePrice": null,
        "prices": {
          "1star": 180,
          "2star": 270,
          "3star": 360,
          "4star": 720,
          "5star": 1440
        },
        "energy": {
          "1star": 15,
          "2star": 18,
          "3star": 21,
          "4star": 24,
          "5star": 30
        },
        "costToMake": 64,
        "profit": {
          "1star": 180,
          "2star": 270,
          "3star": 360,
          "4star": 720,
          "5star": 1440
        },
        "_meta": {
          "source": "Excel Guide Feb 22",
          "confidence": "high",
          "translationSource": "llm"
        },
        "ingredientsText": "",
        "sourceUrl": "https://www.heartopia.live/zh/recipes/"
      },
      {
        "id": "grilled-oyster-mushroom",
        "name": "Grilled Oyster Mushroom",
        "ingredientsRaw": "🍄🍄🍄🍄 ",
        "ingredients": [
          {
            "id": "oyster-mushrooms",
            "name": "Oyster mushrooms",
            "qty": 4
          }
        ],
        "cookingLevel": 1,
        "recipePrice": null,
        "prices": {
          "1star": 180,
          "2star": 270,
          "3star": 360,
          "4star": 720,
          "5star": 1440
        },
        "energy": {
          "1star": "+15",
          "2star": "+18",
          "3star": "+21",
          "4star": "+24",
          "5star": "+30"
        },
        "costToMake": 64,
        "profit": {
          "1star": 116,
          "2star": 206,
          "3star": 296,
          "4star": 656,
          "5star": 1376
        },
        "_meta": {
          "source": "Excel Guide Jan 12",
          "confidence": "high",
          "translationSource": "synced"
        },
        "tool": "Stove",
        "ingredientsText": "Oyster mushrooms x4",
        "sourceUrl": "https://www.heartopia.live/zh/recipes/"
      },
      {
        "id": "grilled-shiitake-mushroom",
        "name": "Grilled Shiitake Mushroom",
        "ingredientsRaw": "🍄🍄🍄🍄",
        "ingredients": [
          {
            "id": "shiitake",
            "name": "Shiitake",
            "qty": 4
          }
        ],
        "cookingLevel": 1,
        "recipePrice": null,
        "prices": {
          "1star": 180,
          "2star": 270,
          "3star": 360,
          "4star": 720,
          "5star": 1440
        },
        "energy": {
          "1star": "+15",
          "2star": "+18",
          "3star": "+21",
          "4star": "+24",
          "5star": "+30"
        },
        "costToMake": 64,
        "profit": {
          "1star": 116,
          "2star": 206,
          "3star": 296,
          "4star": 656,
          "5star": 1376
        },
        "_meta": {
          "source": "Excel Guide Jan 12",
          "confidence": "high",
          "translationSource": "synced"
        },
        "ingredientsText": "Shiitake x4",
        "sourceUrl": "https://www.heartopia.live/zh/recipes/"
      },
      {
        "id": "grilled-button-mushroom",
        "name": "Grilled Button Mushroom",
        "ingredientsRaw": "🍄🍄🍄🍄 ",
        "ingredients": [
          {
            "id": "button-mushrooms",
            "name": "button mushrooms",
            "qty": 4
          }
        ],
        "cookingLevel": 1,
        "recipePrice": null,
        "prices": {
          "1star": 180,
          "2star": 270,
          "3star": 360,
          "4star": 720,
          "5star": 1440
        },
        "energy": {
          "1star": "+15",
          "2star": "+18",
          "3star": "+21",
          "4star": "+24",
          "5star": "+30"
        },
        "costToMake": 64,
        "profit": {
          "1star": 116,
          "2star": 206,
          "3star": 296,
          "4star": 656,
          "5star": 1376
        },
        "_meta": {
          "source": "Excel Guide Jan 12",
          "confidence": "high",
          "translationSource": "synced"
        },
        "tool": "Stove",
        "ingredientsText": "button mushrooms x4",
        "sourceUrl": "https://www.heartopia.live/zh/recipes/"
      },
      {
        "id": "grilled-penny-bun",
        "name": "烤牛肝菌",
        "ingredientsRaw": "🍄🍄🍄🍄",
        "ingredients": [],
        "cookingLevel": 1,
        "recipePrice": null,
        "prices": {
          "1star": 180,
          "2star": 270,
          "3star": 360,
          "4star": 720,
          "5star": 1440
        },
        "energy": {
          "1star": 15,
          "2star": 18,
          "3star": 21,
          "4star": 24,
          "5star": 30
        },
        "costToMake": 64,
        "profit": {
          "1star": 180,
          "2star": 270,
          "3star": 360,
          "4star": 720,
          "5star": 1440
        },
        "_meta": {
          "source": "Excel Guide Feb 22",
          "confidence": "high",
          "translationSource": "llm"
        },
        "ingredientsText": "",
        "sourceUrl": "https://www.heartopia.live/zh/recipes/"
      },
      {
        "id": "fish-n-chips",
        "name": "Fish N Chips",
        "ingredientsRaw": "🐟🐟🥔🥔",
        "ingredients": [
          {
            "id": "any-fish",
            "name": "any fish",
            "qty": 2
          },
          {
            "id": "potatoes",
            "name": "potatoes",
            "qty": 2
          }
        ],
        "cookingLevel": 1,
        "recipePrice": 200,
        "prices": {
          "1star": 310,
          "2star": 465,
          "3star": 620,
          "5star": 2480,
          "4star": 1240
        },
        "energy": {
          "1star": "+40",
          "2star": "+48",
          "3star": "+56",
          "4star": "+56",
          "5star": "+80"
        },
        "costToMake": 280,
        "profit": {
          "1star": 30,
          "2star": 185,
          "3star": 340,
          "4star": 1180,
          "5star": 2420
        },
        "_meta": {
          "source": "Excel Guide Jan 12",
          "confidence": "high",
          "translationSource": "synced"
        },
        "tool": "Stove",
        "ingredientsText": "any fish x2, potatoes x2",
        "sourceUrl": "https://www.heartopia.live/zh/recipes/"
      },
      {
        "id": "house-salad",
        "name": "House Salad",
        "ingredientsRaw": "🥕🥕",
        "ingredients": [
          {
            "id": "any-vegetable",
            "name": "any vegetable",
            "qty": 2
          }
        ],
        "cookingLevel": 1,
        "recipePrice": 200,
        "prices": {
          "1star": 90,
          "2star": 135,
          "3star": 180,
          "4star": 360,
          "5star": 720
        },
        "energy": {
          "1star": "+15",
          "2star": "+18",
          "3star": "+21",
          "4star": "+24",
          "5star": "+30"
        },
        "costToMake": 20,
        "profit": {
          "1star": 70,
          "2star": 115,
          "3star": 160,
          "4star": 340,
          "5star": 700
        },
        "_meta": {
          "source": "Excel Guide Jan 12",
          "confidence": "high",
          "translationSource": "synced"
        },
        "tool": "Stove",
        "ingredientsText": "any vegetable x2",
        "sourceUrl": "https://www.heartopia.live/zh/recipes/"
      },
      {
        "id": "cheese-cake",
        "name": "Cheese Cake",
        "ingredientsRaw": "🧀🌾🥛",
        "ingredients": [
          {
            "id": "cheese",
            "name": "cheese",
            "qty": 1
          },
          {
            "id": "milk",
            "name": "milk",
            "qty": 1
          },
          {
            "id": "wheat",
            "name": "wheat",
            "qty": 1
          }
        ],
        "cookingLevel": 2,
        "recipePrice": 200,
        "prices": {
          "1star": 480,
          "2star": 720,
          "3star": 960,
          "4star": 1920,
          "5star": 3840
        },
        "energy": {
          "1star": "+50",
          "2star": "+60",
          "3star": "+70",
          "4star": "+80",
          "5star": "+90"
        },
        "costToMake": 435,
        "profit": {
          "1star": 45,
          "2star": 285,
          "3star": 715,
          "4star": 1675,
          "5star": 3595
        },
        "_meta": {
          "source": "Excel Guide Jan 12",
          "confidence": "high",
          "translationSource": "synced"
        },
        "tool": "Stove",
        "ingredientsText": "cheese x1, milk x1, wheat x1",
        "sourceUrl": "https://www.heartopia.live/zh/recipes/"
      },
      {
        "id": "smoked-fish-bagel",
        "name": "Smoked Fish Bagel",
        "ingredientsRaw": "🐟🧀🥕🌾",
        "ingredients": [
          {
            "id": "any-fish",
            "name": "any fish",
            "qty": 1
          },
          {
            "id": "any-vegetable",
            "name": "any vegetable",
            "qty": 1
          },
          {
            "id": "cheese",
            "name": "cheese",
            "qty": 1
          },
          {
            "id": "wheat",
            "name": "wheat",
            "qty": 1
          }
        ],
        "cookingLevel": 2,
        "recipePrice": 200,
        "prices": {
          "1star": 520,
          "2star": 780,
          "3star": 1040,
          "4star": 2080,
          "5star": 4160
        },
        "energy": {
          "1star": "+50",
          "2star": "+60",
          "3star": "+70",
          "4star": "+80",
          "5star": "+100"
        },
        "costToMake": 245,
        "profit": {
          "1star": 275,
          "2star": 535,
          "3star": 795,
          "4star": 1875,
          "5star": 3955
        },
        "_meta": {
          "source": "Excel Guide Jan 12",
          "confidence": "high",
          "translationSource": "synced"
        },
        "tool": "Stove",
        "ingredientsText": "any fish x1, any vegetable x1, cheese x1, wheat x1",
        "sourceUrl": "https://www.heartopia.live/zh/recipes/"
      },
      {
        "id": "seafood-risotto",
        "name": "Seafood Risotto",
        "ingredientsRaw": "🦞🦞🌾🍅",
        "ingredients": [],
        "cookingLevel": 3,
        "recipePrice": 800,
        "prices": {
          "1star": 490,
          "2star": 735,
          "4star": 1960,
          "3star": 980,
          "5star": 3920
        },
        "energy": {
          "1star": "+40",
          "2star": "+48",
          "3star": "+56",
          "4star": "+64",
          "5star": "+80"
        },
        "costToMake": 105,
        "profit": {
          "1star": 385,
          "2star": 630,
          "4star": 1855,
          "3star": 875,
          "5star": 3815
        },
        "_meta": {
          "source": "Excel Guide Jan 12",
          "confidence": "high",
          "translationSource": "synced"
        },
        "ingredientsText": "",
        "sourceUrl": "https://www.heartopia.live/zh/recipes/"
      },
      {
        "id": "rustic-ratatouille",
        "name": "Rustic Ratatouille",
        "ingredientsRaw": "🍅🥔🥬",
        "ingredients": [],
        "cookingLevel": 3,
        "recipePrice": 800,
        "prices": {
          "1star": 640,
          "2star": 960,
          "3star": 1280,
          "4star": 2560,
          "5star": 5120
        },
        "energy": {
          "2star": "+72",
          "1star": "+60",
          "3star": "+84",
          "4star": "+96",
          "5star": "+120"
        },
        "costToMake": 185,
        "profit": {
          "2star": 775,
          "1star": 455,
          "3star": 1095,
          "4star": 2375,
          "5star": 4935
        },
        "_meta": {
          "source": "Excel Guide Jan 12",
          "confidence": "high",
          "translationSource": "synced"
        },
        "ingredientsText": "",
        "sourceUrl": "https://www.heartopia.live/zh/recipes/"
      },
      {
        "id": "black-truffle-cream-pasta",
        "name": "Black Truffle Cream Pasta",
        "ingredientsRaw": "🌰🌾🌾🥛",
        "ingredients": [],
        "cookingLevel": 3,
        "recipePrice": 800,
        "prices": {
          "1star": 900,
          "2star": 1350,
          "3star": 1800,
          "4star": 3600,
          "5star": 7200
        },
        "energy": {
          "1star": "+90",
          "2star": "+108",
          "3star": "+126",
          "4star": "+144",
          "5star": "+180"
        },
        "costToMake": 719,
        "profit": {
          "1star": 181,
          "2star": 1110,
          "3star": 1560,
          "4star": 3360,
          "5star": 6960
        },
        "_meta": {
          "source": "Excel Guide Jan 12",
          "confidence": "high",
          "translationSource": "synced"
        },
        "ingredientsText": "",
        "sourceUrl": "https://www.heartopia.live/zh/recipes/"
      },
      {
        "id": "seafood-pizza",
        "name": "Seafood Pizza",
        "ingredientsRaw": "🧀🥫🌾🐟",
        "ingredients": [],
        "cookingLevel": 4,
        "recipePrice": 800,
        "prices": {
          "1star": 780,
          "2star": 1170,
          "3star": 1560,
          "4star": 3120,
          "5star": 6240
        },
        "energy": {
          "1star": "+70",
          "2star": "+84",
          "3star": "+98",
          "4star": "+112",
          "5star": "+140"
        },
        "costToMake": 240,
        "profit": {
          "1star": 540,
          "2star": 930,
          "3star": 1320,
          "4star": 2880,
          "5star": 6000
        },
        "_meta": {
          "source": "Excel Guide Jan 12",
          "confidence": "high",
          "translationSource": "synced"
        },
        "ingredientsText": "",
        "sourceUrl": "https://www.heartopia.live/zh/recipes/"
      },
      {
        "id": "meat-sauce-pasta",
        "name": "Meat Sauce Pasta",
        "ingredientsRaw": "🥩🌾🍅🧀",
        "ingredients": [],
        "cookingLevel": 4,
        "recipePrice": 800,
        "prices": {
          "1star": 670,
          "2star": 1005,
          "3star": 1340,
          "4star": 2680,
          "5star": 5360
        },
        "energy": {
          "1star": "+80",
          "2star": "+96",
          "3star": "+112",
          "4star": "+128",
          "5star": "+160"
        },
        "costToMake": 405,
        "profit": {
          "1star": 265,
          "2star": 600,
          "3star": 935,
          "4star": 2275,
          "5star": 4955
        },
        "_meta": {
          "source": "Excel Guide Jan 12",
          "confidence": "high",
          "translationSource": "synced"
        },
        "ingredientsText": "",
        "sourceUrl": "https://www.heartopia.live/zh/recipes/"
      },
      {
        "id": "apple-pie",
        "name": "Apple Pie",
        "ingredientsRaw": "🍎🌾🥚🧈",
        "ingredients": [],
        "cookingLevel": 5,
        "recipePrice": 1600,
        "prices": {
          "1star": 730,
          "2star": 1095,
          "3star": 1460,
          "4star": 2920,
          "5star": 5840
        },
        "energy": {
          "1star": "+70",
          "2star": "+84",
          "3star": "+98",
          "4star": "+112",
          "5star": "+140"
        },
        "costToMake": 345,
        "profit": {
          "1star": 385,
          "2star": 750,
          "3star": 1115,
          "4star": 2575,
          "5star": 5495
        },
        "_meta": {
          "source": "Excel Guide Jan 12",
          "confidence": "high",
          "translationSource": "synced"
        },
        "ingredientsText": "",
        "sourceUrl": "https://www.heartopia.live/zh/recipes/"
      },
      {
        "id": "carrot-cake",
        "name": "Carrot Cake",
        "ingredientsRaw": "🥕🥕🌾🥛",
        "ingredients": [
          {
            "id": "carrots",
            "name": "carrots",
            "qty": 2
          },
          {
            "id": "egg",
            "name": "egg",
            "qty": 1
          },
          {
            "id": "wheat",
            "name": "wheat",
            "qty": 1
          }
        ],
        "cookingLevel": 5,
        "recipePrice": 1600,
        "prices": {
          "1star": 840,
          "2star": 1260,
          "3star": 1680,
          "4star": 3360,
          "5star": 6720
        },
        "energy": {
          "1star": "+55",
          "2star": "+66",
          "3star": "+77",
          "4star": "+88",
          "5star": "+110"
        },
        "costToMake": 695,
        "profit": {
          "1star": 595,
          "2star": 1015,
          "3star": 1435,
          "4star": 3115,
          "5star": 6475
        },
        "_meta": {
          "source": "Excel Guide Jan 12",
          "confidence": "high",
          "translationSource": "synced"
        },
        "tool": "Stove",
        "ingredientsText": "carrots x2, egg x1, wheat x1",
        "sourceUrl": "https://www.heartopia.live/zh/recipes/"
      },
      {
        "id": "corn-soup",
        "name": "Corn Soup",
        "ingredientsRaw": "🥛🧈🌽🌽",
        "ingredients": [],
        "cookingLevel": 5,
        "recipePrice": 1600,
        "prices": {
          "1star": 1340,
          "2star": 2010,
          "3star": 2680,
          "4star": 5360,
          "5star": 10720
        },
        "energy": {
          "1star": "+80",
          "2star": "+96",
          "3star": "+112",
          "4star": "+128",
          "5star": "+160"
        },
        "costToMake": 540,
        "profit": {
          "1star": 800,
          "2star": 1470,
          "3star": 2140,
          "4star": 4820,
          "5star": 10180
        },
        "_meta": {
          "source": "Excel Guide Jan 12",
          "confidence": "high",
          "translationSource": "synced"
        },
        "ingredientsText": "",
        "sourceUrl": "https://www.heartopia.live/zh/recipes/"
      },
      {
        "id": "tiramisu",
        "name": "Tiramisu",
        "ingredientsRaw": "🟤🥚🥛🧀",
        "ingredients": [],
        "cookingLevel": 6,
        "recipePrice": 1600,
        "prices": {
          "1star": 530,
          "2star": 795,
          "3star": 1060,
          "4star": 2120,
          "5star": 4240
        },
        "energy": {
          "1star": "+65",
          "2star": "+78",
          "3star": "+91",
          "4star": "+104",
          "5star": "+130"
        },
        "costToMake": 300,
        "profit": {
          "1star": 530,
          "2star": 495,
          "3star": 760,
          "4star": 1820,
          "5star": 3940
        },
        "_meta": {
          "source": "Excel Guide Jan 12",
          "confidence": "high",
          "translationSource": "synced"
        },
        "ingredientsText": "",
        "sourceUrl": "https://www.heartopia.live/zh/recipes/"
      },
      {
        "id": "deluxe-seafood-platter",
        "name": "Deluxe Seafood Platter",
        "ingredientsRaw": "🦞🦞🐟🐟",
        "ingredients": [],
        "cookingLevel": 6,
        "recipePrice": 1600,
        "prices": {
          "2star": 615,
          "4star": 1640,
          "1star": 410,
          "3star": 820,
          "5star": 3280
        },
        "energy": {
          "1star": "+65",
          "2star": "+75",
          "3star": "+91",
          "4star": "+104",
          "5star": "+130"
        },
        "costToMake": null,
        "profit": {
          "1star": 410,
          "2star": 615,
          "3star": 820,
          "4star": 1640,
          "5star": 3280
        },
        "_meta": {
          "source": "Excel Guide Jan 12",
          "confidence": "high",
          "translationSource": "synced"
        },
        "ingredientsText": "",
        "sourceUrl": "https://www.heartopia.live/zh/recipes/"
      },
      {
        "id": "afternoon-tea",
        "name": "Afternoon Tea",
        "ingredientsRaw": "(Tiramisu; any fruit/vegetables)",
        "ingredients": [],
        "cookingLevel": 7,
        "recipePrice": 3200,
        "prices": {
          "1star": 710,
          "2star": 1065,
          "3star": 1420,
          "4star": 2840,
          "5star": 5680
        },
        "energy": {
          "1star": "+20",
          "2star": "+30",
          "3star": "+35",
          "4star": "+40",
          "5star": "+50"
        },
        "costToMake": "300-460",
        "profit": {
          "1star": 410,
          "2star": 765,
          "3star": 1120,
          "4star": 2540,
          "5star": 5380
        },
        "_meta": {
          "source": "Excel Guide Jan 12",
          "confidence": "high",
          "translationSource": "synced"
        },
        "ingredientsText": "",
        "sourceUrl": "https://www.heartopia.live/zh/recipes/"
      },
      {
        "id": "picnic-set",
        "name": "Picnic Set",
        "ingredientsRaw": "(seafood pizza, apple pie, fish n chips, any drink)",
        "ingredients": [],
        "cookingLevel": 7,
        "recipePrice": 3200,
        "prices": {
          "2star": 3390,
          "3star": 4520,
          "1star": 2260,
          "4star": 9040,
          "5star": 18080
        },
        "energy": {
          "3star": "+140",
          "4star": "+160",
          "1star": "+100",
          "5star": "+200",
          "2star": "+120"
        },
        "costToMake": 845,
        "profit": {
          "1star": 1415,
          "2star": 2545,
          "3star": 3675,
          "4star": 8195,
          "5star": 17235
        },
        "_meta": {
          "source": "Excel Guide Jan 12",
          "confidence": "high",
          "translationSource": "synced"
        },
        "ingredientsText": "",
        "sourceUrl": "https://www.heartopia.live/zh/recipes/"
      },
      {
        "id": "crayfish-sashimi",
        "name": "Crayfish Sashimi",
        "ingredientsRaw": "🦞🦞🦞🥬",
        "ingredients": [],
        "cookingLevel": 8,
        "recipePrice": 3200,
        "prices": {
          "1star": 850,
          "2star": 1275,
          "3star": 1700,
          "4star": 3400,
          "5star": 6800
        },
        "energy": {
          "1star": "+30",
          "2star": "+36",
          "3star": "+42",
          "4star": "+48",
          "5star": "+60"
        },
        "costToMake": 145,
        "profit": {
          "1star": 705,
          "2star": 1130,
          "3star": 1555,
          "4star": 3255,
          "5star": 6655
        },
        "_meta": {
          "source": "Excel Guide Jan 12",
          "confidence": "high",
          "translationSource": "synced"
        },
        "ingredientsText": "",
        "sourceUrl": "https://www.heartopia.live/zh/recipes/"
      },
      {
        "id": "meat-burger",
        "name": "Meat Burger",
        "ingredientsRaw": "🌾🥬🥩🥫",
        "ingredients": [],
        "cookingLevel": 8,
        "recipePrice": 3200,
        "prices": {
          "1star": 1350,
          "2star": 2025,
          "3star": 2700,
          "4star": 5400,
          "5star": 10800
        },
        "energy": {
          "1star": "+75",
          "2star": "+90",
          "3star": "+105",
          "4star": "+120",
          "5star": "+150"
        },
        "costToMake": 480,
        "profit": {
          "1star": 870,
          "2star": 1545,
          "3star": 2220,
          "4star": 4920,
          "5star": 10320
        },
        "_meta": {
          "source": "Excel Guide Jan 12",
          "confidence": "high",
          "translationSource": "synced"
        },
        "ingredientsText": "",
        "sourceUrl": "https://www.heartopia.live/zh/recipes/"
      },
      {
        "id": "candlelight-dinner",
        "name": "Candlelight Dinner",
        "ingredientsRaw": "(House salad, smoked fish bagel, seafood risotto, tiramisu)",
        "ingredients": [],
        "cookingLevel": 9,
        "recipePrice": 6400,
        "prices": {
          "1star": 1760,
          "2star": 2640,
          "3star": 3520,
          "4star": 7040,
          "5star": 14080
        },
        "energy": {
          "1star": "+75",
          "2star": "+90",
          "3star": "+105",
          "4star": "+120",
          "5star": "+150"
        },
        "costToMake": 670,
        "profit": {
          "1star": 1000,
          "2star": 1970,
          "4star": 6370,
          "5star": 13410,
          "3star": 2850
        },
        "_meta": {
          "source": "Excel Guide Jan 12",
          "confidence": "high",
          "translationSource": "synced"
        },
        "ingredientsText": "",
        "sourceUrl": "https://www.heartopia.live/zh/recipes/"
      },
      {
        "id": "baked-eggplant-w-meat",
        "name": "Baked Eggplant w/ Meat",
        "ingredientsRaw": "🍆🥩🛢️🥫",
        "ingredients": [],
        "cookingLevel": 9,
        "recipePrice": 6400,
        "prices": {
          "1star": 1230,
          "2star": 1845,
          "3star": 2460,
          "4star": 4920,
          "5star": 9840
        },
        "energy": {
          "1star": "+75",
          "2star": "+90",
          "3star": "+105",
          "4star": "+120",
          "5star": "+150"
        },
        "costToMake": 475,
        "profit": {
          "1star": 755,
          "2star": 1370,
          "3star": 1985,
          "4star": 4445,
          "5star": 9365
        },
        "_meta": {
          "source": "Excel Guide Jan 12",
          "confidence": "high",
          "translationSource": "synced"
        },
        "ingredientsText": "",
        "sourceUrl": "https://www.heartopia.live/zh/recipes/"
      },
      {
        "id": "steamed-king-crab",
        "name": "Steamed King Crab",
        "ingredientsRaw": "🦞🦞🦞(King Crab only)🧈",
        "ingredients": [],
        "cookingLevel": 10,
        "recipePrice": 6400,
        "prices": {
          "2star": 2985,
          "1star": 1990,
          "3star": 3980,
          "4star": 7960,
          "5star": 15920
        },
        "energy": {
          "1star": "+90",
          "2star": "+108",
          "3star": "+126",
          "4star": "+144",
          "5star": "+180"
        },
        "costToMake": 150,
        "profit": {
          "1star": 1840,
          "2star": 2835,
          "3star": 3830,
          "4star": 7810,
          "5star": 15770
        },
        "_meta": {
          "source": "Excel Guide Jan 12",
          "confidence": "high"
        },
        "ingredientsText": "",
        "sourceUrl": "https://www.heartopia.live/zh/recipes/"
      },
      {
        "id": "mellow-black-tea",
        "name": "Mellow Black Tea",
        "ingredientsRaw": "🍵🍵",
        "ingredients": [],
        "cookingLevel": 11,
        "recipePrice": 6400,
        "prices": {
          "1star": 840,
          "2star": 1260,
          "3star": 1680,
          "4star": 3360,
          "5star": 6720
        },
        "energy": {},
        "costToMake": 500,
        "profit": {
          "1star": 340,
          "2star": 760,
          "3star": 1180,
          "4star": 2860,
          "5star": 6220
        },
        "_meta": {
          "source": "Excel Guide Jan 12",
          "confidence": "high"
        },
        "ingredientsText": "",
        "sourceUrl": "https://www.heartopia.live/zh/recipes/"
      },
      {
        "id": "milkshake",
        "name": "Milkshake",
        "ingredientsRaw": null,
        "ingredients": [],
        "cookingLevel": 11,
        "recipePrice": 6400,
        "prices": {},
        "energy": {},
        "costToMake": null,
        "profit": {},
        "_meta": {
          "source": "Excel Guide Jan 12",
          "confidence": "high"
        },
        "ingredientsText": "",
        "sourceUrl": "https://www.heartopia.live/zh/recipes/"
      },
      {
        "id": "refreshing-green-tea",
        "name": "Refreshing Green Tea",
        "ingredientsRaw": "🌲🌲",
        "ingredients": [],
        "cookingLevel": 12,
        "recipePrice": 6400,
        "prices": {
          "1star": 500,
          "2star": 750,
          "3star": 1000,
          "4star": 2000,
          "5star": 4000
        },
        "energy": {},
        "costToMake": 50,
        "profit": {
          "1star": 450,
          "2star": 700,
          "3star": 950,
          "4star": 1950,
          "5star": 3950
        },
        "_meta": {
          "source": "Excel Guide Jan 12",
          "confidence": "high"
        },
        "ingredientsText": "",
        "sourceUrl": "https://www.heartopia.live/zh/recipes/"
      },
      {
        "id": "exquisite-afternoon-tea",
        "name": "Exquisite Afternoon Tea",
        "ingredientsRaw": "2 cheesecake, 2 mellow black tea",
        "ingredients": [],
        "cookingLevel": 12,
        "recipePrice": 6400,
        "prices": {
          "1star": 2970,
          "2star": 4455,
          "3star": 5940,
          "4star": 11880,
          "5star": 23760
        },
        "energy": {},
        "costToMake": 1490,
        "profit": {
          "1star": 1480,
          "2star": 2965,
          "3star": 4450,
          "4star": 17310,
          "5star": 22270
        },
        "_meta": {
          "source": "Excel Guide Jan 12",
          "confidence": "high"
        },
        "ingredientsText": "",
        "sourceUrl": "https://www.heartopia.live/zh/recipes/"
      },
      {
        "id": "shrimp-avocado-cup",
        "name": "Shrimp Avocado Cup",
        "ingredientsRaw": "🦐🦐🥑🥑",
        "ingredients": [],
        "cookingLevel": 13,
        "recipePrice": 6400,
        "prices": {
          "1star": 1560,
          "2star": 2340,
          "3star": 3120,
          "4star": 6240,
          "5star": 12480
        },
        "energy": {},
        "costToMake": 360,
        "profit": {
          "1star": 1200,
          "2star": 1980,
          "3star": 2760,
          "4star": 5880,
          "5star": 12120
        },
        "_meta": {
          "source": "Excel Guide Jan 12",
          "confidence": "high"
        },
        "ingredientsText": "",
        "sourceUrl": "https://www.heartopia.live/zh/recipes/"
      },
      {
        "id": "cheese-shrimp-stuffed-crab",
        "name": "Cheese Shrimp Stuffed Crab",
        "ingredientsRaw": "🦞🦞(King Crab only)🦐🦐",
        "ingredients": [],
        "cookingLevel": 13,
        "recipePrice": 6400,
        "prices": {
          "1star": 1440,
          "2star": 2160,
          "3star": 3120,
          "4star": 5760,
          "5star": 11520
        },
        "energy": {},
        "costToMake": null,
        "profit": {
          "1star": 1440,
          "2star": 2160,
          "3star": 2880,
          "4star": 5760,
          "5star": 11520
        },
        "_meta": {
          "source": "Excel Guide Jan 12",
          "confidence": "high"
        },
        "ingredientsText": "",
        "sourceUrl": "https://www.heartopia.live/zh/recipes/"
      },
      {
        "id": "mixed-jam-using-apples",
        "name": "混合果酱（苹果）",
        "cookingLevel": 1,
        "ingredientsRaw": "Any of the four        🍎🔵🍇🍊🍍🔴🍓🍅",
        "prices": {
          "1star": 160,
          "2star": 240,
          "3star": 320,
          "4star": 640,
          "5star": 1280
        },
        "energy": {
          "1star": 22,
          "2star": 26,
          "3star": 31,
          "4star": 35,
          "5star": "+40"
        },
        "profit": {
          "1star": 160,
          "2star": 240,
          "3star": 320,
          "4star": 640,
          "5star": 1280
        },
        "_meta": {
          "source": "Excel Guide Feb 22",
          "confidence": "high",
          "translationSource": "llm"
        },
        "ingredientsText": "",
        "sourceUrl": "https://www.heartopia.live/zh/recipes/"
      },
      {
        "id": "mixed-jam-using-blueberries",
        "name": "混合果酱（蓝莓）",
        "cookingLevel": 1,
        "ingredientsRaw": "Any of the four        🍎🔵🍇🍊🍍🔴🍓🍅",
        "prices": {
          "1star": 160,
          "2star": 240,
          "3star": 320,
          "4star": 640,
          "5star": 1280
        },
        "energy": {
          "1star": 22,
          "2star": 26,
          "3star": 31,
          "4star": 35,
          "5star": "+40"
        },
        "profit": {
          "1star": 96,
          "2star": 240,
          "3star": 320,
          "4star": 640,
          "5star": 1280
        },
        "_meta": {
          "source": "Excel Guide Feb 22",
          "confidence": "high",
          "translationSource": "llm"
        },
        "ingredientsText": "",
        "sourceUrl": "https://www.heartopia.live/zh/recipes/"
      },
      {
        "id": "mixed-jam-using-mandarins",
        "name": "混合果酱（柑橘）",
        "cookingLevel": 1,
        "ingredientsRaw": "Any of the four        🍎🔵🍇🍊🍍🔴🍓🍅",
        "prices": {
          "1star": 160,
          "2star": 240,
          "3star": 320,
          "4star": 640,
          "5star": 1280
        },
        "energy": {
          "1star": 22,
          "2star": 26,
          "3star": 31,
          "4star": 35,
          "5star": "+40"
        },
        "profit": {
          "1star": 48,
          "2star": 240,
          "3star": 320,
          "4star": 640,
          "5star": 1280
        },
        "_meta": {
          "source": "Excel Guide Feb 22",
          "confidence": "high",
          "translationSource": "llm"
        },
        "ingredientsText": "",
        "sourceUrl": "https://www.heartopia.live/zh/recipes/"
      },
      {
        "id": "mixed-jam-using-raspberries",
        "name": "混合果酱（覆盆子）",
        "cookingLevel": 1,
        "ingredientsRaw": "Any of the four        🍎🔵🍇🍊🍍🔴🍓🍅",
        "prices": {
          "1star": 160,
          "2star": 240,
          "3star": 320,
          "4star": 640,
          "5star": 1280
        },
        "energy": {
          "1star": 22,
          "2star": 26,
          "3star": 31,
          "4star": 35,
          "5star": "+40"
        },
        "profit": {
          "1star": 56,
          "2star": 240,
          "3star": 320,
          "4star": 640,
          "5star": 1280
        },
        "_meta": {
          "source": "Excel Guide Feb 22",
          "confidence": "high",
          "translationSource": "llm"
        },
        "ingredientsText": "",
        "sourceUrl": "https://www.heartopia.live/zh/recipes/"
      },
      {
        "id": "mixed-jam-using-tomatoes",
        "name": "混合果酱（番茄）",
        "cookingLevel": 1,
        "costToMake": 10,
        "ingredientsRaw": "Any of the four        🍎🔵🍇🍊🍍🔴🍓🍅",
        "prices": {
          "1star": 160,
          "2star": 240,
          "3star": 320,
          "4star": 640,
          "5star": 1280
        },
        "energy": {
          "1star": 22,
          "2star": 26,
          "3star": 31,
          "4star": 35,
          "5star": "+40"
        },
        "profit": {
          "1star": 150,
          "2star": 230,
          "3star": 310,
          "4star": 630,
          "5star": 1270
        },
        "_meta": {
          "source": "Excel Guide Feb 22",
          "confidence": "high",
          "translationSource": "llm"
        },
        "ingredientsText": "",
        "sourceUrl": "https://www.heartopia.live/zh/recipes/"
      },
      {
        "id": "winter-frost-season-iced-coffee",
        "name": "冬霜季: 冰咖啡",
        "cookingLevel": 1,
        "recipePrice": "Winter Frost Recipe- Requires Penguin Stove",
        "costToMake": 200,
        "ingredientsRaw": "❄️🟤🟤🟤",
        "prices": {
          "1star": 280,
          "2star": 420,
          "3star": 560,
          "4star": 1120,
          "5star": 2240
        },
        "energy": {
          "1star": 20,
          "2star": 24,
          "3star": 28,
          "5star": 40,
          "4star": "+32"
        },
        "profit": {
          "1star": 280,
          "3star": 360,
          "4star": 920,
          "2star": 220,
          "5star": 2040
        },
        "_meta": {
          "source": "Excel Guide Feb 22",
          "confidence": "high",
          "translationSource": "llm"
        },
        "ingredientsText": "",
        "sourceUrl": "https://www.heartopia.live/zh/recipes/"
      },
      {
        "id": "winter-frost-season-iced-latte",
        "name": "冬霜季: 冰拿铁",
        "cookingLevel": 1,
        "recipePrice": "Winter Frost Recipe- Requires Penguin Stove",
        "costToMake": 200,
        "ingredientsRaw": "❄️🟤🥛🥛",
        "prices": {
          "1star": 280,
          "2star": 420,
          "3star": 560,
          "4star": 1120,
          "5star": 2240
        },
        "energy": {
          "1star": 20,
          "2star": 24,
          "3star": 28,
          "5star": 40,
          "4star": "+32"
        },
        "profit": {
          "3star": 360,
          "1star": 80,
          "2star": 220,
          "4star": 920,
          "5star": 2040
        },
        "_meta": {
          "source": "Excel Guide Feb 22",
          "confidence": "high",
          "translationSource": "llm"
        },
        "ingredientsText": "",
        "sourceUrl": "https://www.heartopia.live/zh/recipes/"
      },
      {
        "id": "winter-frost-season-original-frosted-pancake",
        "name": "冬霜季: 原味霜冻薄饼",
        "cookingLevel": 1,
        "recipePrice": "Winter Frost Recipe- Requires Penguin Stove",
        "costToMake": 200,
        "ingredientsRaw": "❄️🥚🥛+(any of 🍎🔵🍇🍊🍍🔴🍓)",
        "prices": {
          "1star": 330,
          "2star": 495,
          "3star": 660,
          "4star": 1320,
          "5star": 2640
        },
        "energy": {
          "1star": 25,
          "2star": 30,
          "3star": 35,
          "4star": 40,
          "5star": 50
        },
        "_meta": {
          "source": "Excel Guide Feb 22",
          "confidence": "high",
          "translationSource": "llm"
        },
        "profit": {
          "1star": 130,
          "2star": 295,
          "3star": 460,
          "4star": 1120,
          "5star": 2440
        },
        "ingredientsText": "",
        "sourceUrl": "https://www.heartopia.live/zh/recipes/"
      },
      {
        "id": "winter-frost-season-blueberry-frosted-pancake",
        "name": "冬霜季: 蓝莓霜冻薄饼",
        "cookingLevel": 1,
        "recipePrice": "Winter Frost Recipe- Requires Penguin Stove",
        "costToMake": 200,
        "ingredientsRaw": "❄️🥚🥛🔵",
        "prices": {
          "1star": 330,
          "2star": 495,
          "3star": 660,
          "4star": 1320,
          "5star": 2640
        },
        "energy": {
          "1star": 25,
          "2star": 30,
          "3star": 35,
          "4star": 40,
          "5star": 50
        },
        "_meta": {
          "source": "Excel Guide Feb 22",
          "confidence": "high",
          "translationSource": "llm"
        },
        "profit": {
          "1star": 130,
          "2star": 295,
          "3star": 460,
          "4star": 1200,
          "5star": 2600
        },
        "ingredientsText": "",
        "sourceUrl": "https://www.heartopia.live/zh/recipes/"
      },
      {
        "id": "winter-frost-season-raspberry-frosted-pancake",
        "name": "冬霜季: 覆盆子霜冻薄饼",
        "cookingLevel": 1,
        "recipePrice": "Winter Frost Recipe- Requires Penguin Stove",
        "costToMake": 200,
        "ingredientsRaw": "❄️🥚🥛🔴",
        "prices": {
          "1star": 350,
          "2star": 525,
          "3star": 700,
          "4star": 1400,
          "5star": 2800
        },
        "energy": {
          "1star": 25,
          "2star": 30,
          "3star": 35,
          "4star": 40,
          "5star": 50
        },
        "_meta": {
          "source": "Excel Guide Feb 22",
          "confidence": "high",
          "translationSource": "llm"
        },
        "profit": {
          "1star": 150,
          "2star": 325,
          "3star": 500,
          "4star": 1200,
          "5star": 2600
        },
        "ingredientsText": "",
        "sourceUrl": "https://www.heartopia.live/zh/recipes/"
      },
      {
        "id": "winter-frost-season-apple-frosted-pancake",
        "name": "冬霜季: 苹果霜冻薄饼",
        "cookingLevel": 1,
        "recipePrice": "Winter Frost Recipe- Requires Penguin Stove",
        "costToMake": 200,
        "ingredientsRaw": "❄️🥚🥛🍎",
        "prices": {
          "1star": 360,
          "2star": 540,
          "3star": 720,
          "4star": 1440,
          "5star": 2880
        },
        "energy": {
          "1star": 25,
          "2star": 30,
          "3star": 35,
          "4star": 40,
          "5star": 50
        },
        "profit": {
          "1star": 360,
          "2star": 540,
          "3star": 720,
          "4star": 1240,
          "5star": 2680
        },
        "_meta": {
          "source": "Excel Guide Feb 22",
          "confidence": "high",
          "translationSource": "llm"
        },
        "ingredientsText": "",
        "sourceUrl": "https://www.heartopia.live/zh/recipes/"
      },
      {
        "id": "winter-frost-season-mandarin-frosted-pancake",
        "name": "冬霜季: 柑橘霜冻薄饼",
        "cookingLevel": 1,
        "recipePrice": "Winter Frost Recipe- Requires Penguin Stove",
        "costToMake": 200,
        "ingredientsRaw": "❄️🥚🥛🍊",
        "prices": {
          "1star": 360,
          "2star": 540,
          "3star": 720,
          "4star": 1440,
          "5star": 2880
        },
        "energy": {
          "1star": 25,
          "2star": 30,
          "3star": 35,
          "4star": 40,
          "5star": 50
        },
        "_meta": {
          "source": "Excel Guide Feb 22",
          "confidence": "high",
          "translationSource": "llm"
        },
        "profit": {
          "1star": 160,
          "2star": 340,
          "3star": 720,
          "4star": 1240,
          "5star": 2680
        },
        "ingredientsText": "",
        "sourceUrl": "https://www.heartopia.live/zh/recipes/"
      },
      {
        "id": "winter-frost-season-steak-w-mashed-white-radish",
        "name": "冬霜季: 牛排配白萝卜泥",
        "cookingLevel": 1,
        "recipePrice": "Winter Frost Recipe- Requires Penguin Stove",
        "costToMake": 560,
        "ingredientsRaw": "🥩🥩🧈⬜",
        "prices": {
          "1star": 630,
          "2star": 945,
          "3star": 1260,
          "4star": 2520,
          "5star": 5040
        },
        "energy": {
          "1star": 40,
          "2star": 48,
          "3star": 56,
          "4star": 64,
          "5star": "+80"
        },
        "profit": {
          "1star": 630,
          "2star": 385,
          "3star": 700,
          "4star": 1960,
          "5star": 4480
        },
        "_meta": {
          "source": "Excel Guide Feb 22",
          "confidence": "high",
          "translationSource": "llm"
        },
        "ingredientsText": "",
        "sourceUrl": "https://www.heartopia.live/zh/recipes/"
      },
      {
        "id": "winter-frost-season-creamy-white-radish-soup",
        "name": "冬霜季: 奶油白萝卜汤",
        "cookingLevel": 1,
        "recipePrice": "Winter Frost Recipe- Requires Penguin Stove",
        "costToMake": 220,
        "ingredientsRaw": "🥛🧈⬜⬜",
        "prices": {
          "1star": 340,
          "2star": 510,
          "3star": 680,
          "4star": 1360,
          "5star": 2720
        },
        "energy": {
          "1star": 25,
          "2star": 30,
          "3star": "+35",
          "4star": "+40",
          "5star": "+50"
        },
        "profit": {
          "1star": 340
        },
        "_meta": {
          "source": "Excel Guide Feb 22",
          "confidence": "high",
          "translationSource": "llm"
        },
        "ingredientsText": "",
        "sourceUrl": "https://www.heartopia.live/zh/recipes/"
      },
      {
        "id": "winter-frost-season-aurora-banquet",
        "name": "冬霜季: 极光盛宴",
        "cookingLevel": 1,
        "recipePrice": "Winter Frost Recipe- Requires Penguin Stove",
        "costToMake": "1580+",
        "ingredientsRaw": "Steak w/ Mashed White Radish, Creamy White Radish Soup, Iced Coffee/Iced Latte, Any Frosted Pancake",
        "prices": {
          "1star": 1630,
          "2star": 2445,
          "3star": 3260,
          "4star": 6520,
          "5star": 13040
        },
        "energy": {
          "1star": 40,
          "2star": 48,
          "3star": 56,
          "4star": "+64",
          "5star": "+80"
        },
        "_meta": {
          "source": "Excel Guide Feb 22",
          "confidence": "high",
          "translationSource": "llm"
        },
        "ingredientsText": "",
        "sourceUrl": "https://www.heartopia.live/zh/recipes/"
      },
      {
        "id": "onsen-egg",
        "name": "温泉蛋",
        "cookingLevel": 1,
        "recipePrice": "Winter Frost 16 Egg Collection - Use Baskets in Onsen Lake near Bus Stop",
        "costToMake": 100,
        "ingredientsRaw": "One Onsen Egg",
        "prices": {
          "1star": 130,
          "2star": 195,
          "3star": 260,
          "4star": 520,
          "5star": 1040
        },
        "energy": {
          "1star": 15,
          "2star": 18,
          "3star": 21,
          "4star": 24,
          "5star": 30
        },
        "profit": {
          "1star": 30,
          "2star": 95,
          "3star": 160,
          "4star": 420,
          "5star": 940
        },
        "_meta": {
          "source": "Excel Guide Feb 22",
          "confidence": "high",
          "translationSource": "llm"
        },
        "ingredientsText": "",
        "sourceUrl": "https://www.heartopia.live/zh/recipes/"
      }
    ]
  },
  {
    "slug": "characters",
    "title": "角色图鉴",
    "navTitle": "角色",
    "icon": "Users",
    "category": "居民",
    "countLabel": "位角色",
    "sourcePath": "/zh/characters/",
    "sourceUrl": "https://www.heartopia.live/zh/characters/",
    "sourceFetchedAt": "2026-05-12",
    "description": "整理角色身份、常驻位置、解锁条件、教授爱好、商店物品和礼物偏好。",
    "tip": "导师类角色适合放进每日拜访清单；商店物品和礼物偏好可以按当前目标查询。",
    "facets": [
      {
        "key": "category",
        "label": "分类"
      },
      {
        "key": "role",
        "label": "身份"
      },
      {
        "key": "location",
        "label": "地点"
      }
    ],
    "sortKeys": [
      {
        "key": "name",
        "label": "名称"
      },
      {
        "key": "category",
        "label": "分类"
      },
      {
        "key": "location",
        "label": "地点"
      }
    ],
    "fields": [
      {
        "key": "role",
        "label": "身份"
      },
      {
        "key": "location",
        "label": "地点"
      },
      {
        "key": "unlock_requirements",
        "label": "解锁条件",
        "kind": "long"
      },
      {
        "key": "teaches_hobby",
        "label": "教授爱好"
      },
      {
        "key": "description",
        "label": "说明",
        "kind": "long"
      },
      {
        "key": "shopItemsText",
        "label": "商店物品",
        "kind": "long"
      },
      {
        "key": "lovedGiftsText",
        "label": "喜爱礼物"
      },
      {
        "key": "dislikedGiftsText",
        "label": "不喜欢礼物"
      }
    ],
    "items": [
      {
        "id": "vanya",
        "name": "瓦尼亚",
        "role": "钓鱼导师",
        "location": "河边码头",
        "unlock_requirements": "教程阶段（首次小睡后）",
        "teaches_hobby": "fishing",
        "category": "mentor",
        "description": "蓝发钓鱼专家，游戏初期会来拜访你。提供你的第一根钓竿和爱好扩展券。在他的商店可以找到展示鱼类的物品。",
        "image": "/images/npcs/vanya.webp",
        "shop": {
          "items": [
            "鱼竿",
            "鱼饵",
            "鱼类展示道具"
          ]
        },
        "events": [
          {
            "name": "海钓",
            "description": "最多6人同船的刺激钓鱼之旅",
            "players": 6
          }
        ],
        "lovedGifts": [
          "鱼",
          "海鲜",
          "钓具"
        ],
        "dislikedGifts": [
          "垃圾",
          "矿石"
        ],
        "_meta": {
          "last_verified": "2026-01-14",
          "confidence": "high",
          "source": "heartopia.gg, manual document"
        },
        "shopItemsText": "鱼竿, 鱼饵, 鱼类展示道具",
        "lovedGiftsText": "鱼, 海鲜, 钓具",
        "dislikedGiftsText": "垃圾, 矿石",
        "sourceUrl": "https://www.heartopia.live/zh/characters/"
      },
      {
        "id": "blanc",
        "name": "布兰克",
        "role": "园艺导师",
        "location": "园艺商店",
        "unlock_requirements": "教程阶段（自动解锁）",
        "teaches_hobby": "gardening",
        "category": "mentor",
        "description": "园艺和花卉大师。随着园艺热情等级提升，他的商店会解锁各种种子。小贴士：他头上的鸟不会动，可以用来早期刷观鸟经验！",
        "image": "/images/npcs/blanc.webp",
        "shop": {
          "items": [
            "种子",
            "园艺工具",
            "肥料"
          ]
        },
        "lovedGifts": [
          "稀有花卉",
          "种子",
          "昆虫"
        ],
        "_meta": {
          "last_verified": "2026-01-14",
          "confidence": "high",
          "source": "heartopia.gg, manual document"
        },
        "shopItemsText": "种子, 园艺工具, 肥料",
        "lovedGiftsText": "稀有花卉, 种子, 昆虫",
        "dislikedGiftsText": "",
        "sourceUrl": "https://www.heartopia.live/zh/characters/"
      },
      {
        "id": "massimo",
        "name": "马西莫",
        "role": "烹饪导师",
        "location": "咖啡馆",
        "unlock_requirements": "开发者等级6 + 爱好扩展券",
        "teaches_hobby": "cooking",
        "category": "mentor",
        "description": "我们的大厨会教你烹饪的热情！就像园艺一样，你需要自己种植食材。在他的商店可以找到食材、食谱和家具。小贴士：可以同时用多个炉子，但别烧焦了！",
        "image": "/images/npcs/massimo.webp",
        "shop": {
          "items": [
            "食谱",
            "香料",
            "烹饪家具"
          ]
        },
        "lovedGifts": [
          "料理",
          "稀有食材"
        ],
        "_meta": {
          "last_verified": "2026-01-14",
          "confidence": "high",
          "source": "heartopia.gg, manual document"
        },
        "shopItemsText": "食谱, 香料, 烹饪家具",
        "lovedGiftsText": "料理, 稀有食材",
        "dislikedGiftsText": "",
        "sourceUrl": "https://www.heartopia.live/zh/characters/"
      },
      {
        "id": "naniwa",
        "name": "纳尼瓦",
        "role": "捕虫导师",
        "location": "森林",
        "unlock_requirements": "开发者等级6 + 爱好扩展券",
        "teaches_hobby": "bug_catching",
        "category": "mentor",
        "description": "心动小镇的昆虫学家会教你如何吹泡泡捕虫。他的商店有捕虫爱好和生态缸所需的一切！",
        "image": "/images/npcs/naniwa.webp",
        "shop": {
          "items": [
            "捕虫网",
            "虫笼",
            "生态缸"
          ]
        },
        "events": [
          {
            "name": "捕虫大赛",
            "description": "最多6人比赛捕捉昆虫",
            "players": 6
          }
        ],
        "lovedGifts": [
          "独角仙",
          "金锹甲",
          "稀有昆虫"
        ],
        "dislikedGifts": [
          "加工品",
          "工业材料"
        ],
        "_meta": {
          "last_verified": "2026-01-14",
          "confidence": "high",
          "source": "heartopia.gg, manual document"
        },
        "shopItemsText": "捕虫网, 虫笼, 生态缸",
        "lovedGiftsText": "独角仙, 金锹甲, 稀有昆虫",
        "dislikedGiftsText": "加工品, 工业材料",
        "sourceUrl": "https://www.heartopia.live/zh/characters/"
      },
      {
        "id": "bailey-j",
        "name": "贝利J",
        "role": "观鸟导师",
        "location": "宠物店（楼上）/ 公园",
        "unlock_requirements": "开发者等级6 + 爱好扩展券",
        "teaches_hobby": "birdwatching",
        "category": "mentor",
        "description": "观鸟女王！她会给你奖励。商店出售望远镜和鸟食！",
        "image": "/images/npcs/bailey-j.webp",
        "shop": {
          "items": [
            "望远镜",
            "鸟食"
          ]
        },
        "events": [
          {
            "name": "归巢活动",
            "description": "6人拍摄尽可能多的不同鸟类，是获取经验的好方法！",
            "players": 6
          }
        ],
        "lovedGifts": [
          "高质量鸟类照片"
        ],
        "_meta": {
          "last_verified": "2026-01-14",
          "confidence": "high",
          "source": "heartopia.gg, manual document"
        },
        "shopItemsText": "望远镜, 鸟食",
        "lovedGiftsText": "高质量鸟类照片",
        "dislikedGiftsText": "",
        "sourceUrl": "https://www.heartopia.live/zh/characters/"
      },
      {
        "id": "mrs-joan",
        "name": "琼太太",
        "role": "宠物护理导师",
        "location": "宠物店",
        "unlock_requirements": "开发者等级12 + 爱好扩展券",
        "teaches_hobby": "cat_care",
        "category": "mentor",
        "description": "爱猫爱狗的宠物店老板。每天查看她的商店，有宠物食品和四脚朋友的配饰。你会找到想要的，耐心等待！",
        "image": "/images/npcs/mrs-joan.webp",
        "shop": {
          "items": [
            "宠物",
            "宠物食品",
            "宠物配饰"
          ],
          "refresh": "daily",
          "refreshNote": "每日更新商品"
        },
        "lovedGifts": [
          "海鲜拼盘"
        ],
        "dislikedGifts": [
          "垃圾"
        ],
        "_meta": {
          "last_verified": "2026-01-14",
          "confidence": "high",
          "source": "heartopia.gg, manual document"
        },
        "shopItemsText": "宠物, 宠物食品, 宠物配饰",
        "lovedGiftsText": "海鲜拼盘",
        "dislikedGiftsText": "垃圾",
        "sourceUrl": "https://www.heartopia.live/zh/characters/"
      },
      {
        "id": "bob",
        "name": "鲍勃",
        "role": "家具商人",
        "location": "镇中心",
        "unlock_requirements": "教程阶段",
        "teaches_hobby": null,
        "category": "shop",
        "description": "我们的手工爷爷！家具展示每周六早6点更新，持续一周。与他交谈可获取地块的天然建材。",
        "image": "/images/npcs/bob.webp",
        "shop": {
          "items": [
            "家具",
            "建材"
          ],
          "refresh": "weekly",
          "refreshNote": "每周六早6点更新"
        },
        "lovedGifts": [
          "工具",
          "建材"
        ],
        "_meta": {
          "last_verified": "2026-01-14",
          "confidence": "high",
          "source": "heartopia.gg, manual document"
        },
        "shopItemsText": "家具, 建材",
        "lovedGiftsText": "工具, 建材",
        "dislikedGiftsText": "",
        "sourceUrl": "https://www.heartopia.live/zh/characters/"
      },
      {
        "id": "annie",
        "name": "安妮",
        "role": "音乐与表情商店",
        "location": "起始位置附近",
        "unlock_requirements": "游戏开始即可遇见",
        "teaches_hobby": null,
        "category": "shop",
        "description": "音乐和友情与她对话！她的商店有乐器、表情和动画。小贴士：每天有新品，别错过！",
        "image": "/images/npcs/annie.webp",
        "shop": {
          "items": [
            "乐器",
            "表情",
            "动画"
          ],
          "refresh": "daily",
          "refreshNote": "每日更新"
        },
        "_meta": {
          "last_verified": "2026-01-14",
          "confidence": "high",
          "source": "heartopia.gg, manual document"
        },
        "shopItemsText": "乐器, 表情, 动画",
        "lovedGiftsText": "",
        "dislikedGiftsText": "",
        "sourceUrl": "https://www.heartopia.live/zh/characters/"
      },
      {
        "id": "dorothee",
        "name": "多萝西",
        "role": "时尚缪斯 / 鞋店",
        "location": "小镇",
        "unlock_requirements": "游戏开始即可",
        "teaches_hobby": null,
        "category": "shop",
        "description": "时尚缪斯！在她的商店能找到完美的鞋子。服装每天更新，去看看吧！",
        "image": "/images/npcs/dorothee.webp",
        "shop": {
          "items": [
            "鞋子",
            "服装"
          ],
          "refresh": "daily",
          "refreshNote": "每日轮换"
        },
        "_meta": {
          "last_verified": "2026-01-14",
          "confidence": "high",
          "source": "heartopia.gg, manual document"
        },
        "shopItemsText": "鞋子, 服装",
        "lovedGiftsText": "",
        "dislikedGiftsText": "",
        "sourceUrl": "https://www.heartopia.live/zh/characters/"
      },
      {
        "id": "ka-ching",
        "name": "卡钦",
        "role": "收藏品商人",
        "location": "城市（郊区湖附近）",
        "unlock_requirements": "前往城市区域",
        "teaches_hobby": null,
        "category": "shop",
        "description": "出售拼图收藏品的小店！",
        "image": "/images/npcs/ka-ching.webp",
        "shop": {
          "items": [
            "拼图收藏品"
          ]
        },
        "_meta": {
          "last_verified": "2026-01-14",
          "confidence": "high",
          "source": "heartopia.gg, manual document"
        },
        "shopItemsText": "拼图收藏品",
        "lovedGiftsText": "",
        "dislikedGiftsText": "",
        "sourceUrl": "https://www.heartopia.live/zh/characters/"
      },
      {
        "id": "collector",
        "name": "收藏家",
        "role": "开服商店",
        "location": "小镇",
        "unlock_requirements": "游戏开始即可",
        "teaches_hobby": null,
        "category": "shop",
        "description": "开服商店有各种特卖商品！服装、家具、装饰，应有尽有！",
        "image": "/images/npcs/collector.webp",
        "shop": {
          "items": [
            "服装",
            "家具",
            "装饰"
          ]
        },
        "_meta": {
          "last_verified": "2026-01-14",
          "confidence": "high",
          "source": "manual document"
        },
        "shopItemsText": "服装, 家具, 装饰",
        "lovedGiftsText": "",
        "dislikedGiftsText": "",
        "sourceUrl": "https://www.heartopia.live/zh/characters/"
      },
      {
        "id": "doris",
        "name": "多丽丝",
        "role": "天气商人",
        "location": "根据天气变化",
        "unlock_requirements": "特殊天气条件",
        "teaches_hobby": null,
        "category": "special",
        "description": "只在特定天气出现的特殊商人。她出售独家物品如蛋糕卷食谱、彩色糖和限定表情！",
        "image": "/images/npcs/doris-rain.webp",
        "spawnConditions": [
          {
            "weather": "雨天",
            "location": "艺术街（镇广场）",
            "items": [
              "蛋糕卷食谱",
              "彩色糖（每人不同颜色）",
              "雨伞",
              "明信片"
            ]
          },
          {
            "weather": "下雪",
            "location": "艺术街（镇广场）",
            "items": [
              "冬季限定物品"
            ]
          },
          {
            "weather": "流星雨",
            "location": "温泉区域（捕虫活动附近）",
            "items": [
              "陨石家具（用陨石碎片兑换）",
              "许愿动作表情"
            ]
          },
          {
            "weather": "彩虹",
            "location": "彩虹尽头",
            "items": [
              "彩虹表情"
            ]
          }
        ],
        "_meta": {
          "last_verified": "2026-01-14",
          "confidence": "high",
          "source": "gamezebo, manual document"
        },
        "shopItemsText": "",
        "lovedGiftsText": "",
        "dislikedGiftsText": "",
        "sourceUrl": "https://www.heartopia.live/zh/characters/"
      },
      {
        "id": "albert-jr",
        "name": "小艾伯特",
        "role": "流动收购商",
        "location": "郊区漫游",
        "unlock_requirements": "随机遇见",
        "teaches_hobby": null,
        "category": "special",
        "description": "通过这个NPC，你可以卖掉几乎任何东西——从多余的鱼到收获的作物。金币在心动小镇非常重要，收集家具和服装需要很多！",
        "image": "/images/npcs/albert-jr.webp",
        "_meta": {
          "last_verified": "2026-01-14",
          "confidence": "high",
          "source": "gamerant, manual document"
        },
        "shopItemsText": "",
        "lovedGiftsText": "",
        "dislikedGiftsText": "",
        "sourceUrl": "https://www.heartopia.live/zh/characters/"
      },
      {
        "id": "andrew",
        "name": "安德鲁",
        "role": "车辆商人",
        "location": "小镇（主线任务后）",
        "unlock_requirements": "完成主线任务",
        "teaches_hobby": null,
        "category": "special",
        "description": "心动小镇的骑手！有了他，你可以骑车而不是走路，毫无疑问更快！",
        "image": "/images/npcs/andrew.webp",
        "shop": {
          "items": [
            "自行车",
            "摩托车",
            "其他载具"
          ]
        },
        "_meta": {
          "last_verified": "2026-01-14",
          "confidence": "high",
          "source": "selphie1999gaming, manual document"
        },
        "shopItemsText": "自行车, 摩托车, 其他载具",
        "lovedGiftsText": "",
        "dislikedGiftsText": "",
        "sourceUrl": "https://www.heartopia.live/zh/characters/"
      },
      {
        "id": "bill",
        "name": "比尔",
        "role": "海钓活动主持",
        "location": "钓鱼村",
        "unlock_requirements": "解锁钓鱼爱好",
        "teaches_hobby": null,
        "category": "event",
        "description": "如果你想和朋友或陌生人一起参加海钓活动，找比尔就对了！",
        "image": "/images/npcs/bill.webp",
        "events": [
          {
            "name": "海钓",
            "description": "多人船上钓鱼活动",
            "players": 6
          }
        ],
        "_meta": {
          "last_verified": "2026-01-14",
          "confidence": "high",
          "source": "manual document"
        },
        "shopItemsText": "",
        "lovedGiftsText": "",
        "dislikedGiftsText": "",
        "sourceUrl": "https://www.heartopia.live/zh/characters/"
      },
      {
        "id": "atara",
        "name": "阿塔拉",
        "role": "村长",
        "location": "镇政厅",
        "unlock_requirements": "游戏开始即可",
        "teaches_hobby": null,
        "category": "event",
        "description": "村长每周给我们一个任务……就这样！目前他没什么太大用处。",
        "image": "/images/npcs/atara.webp",
        "events": [
          {
            "name": "每周任务",
            "description": "完成每周目标获得奖励"
          }
        ],
        "_meta": {
          "last_verified": "2026-01-14",
          "confidence": "high",
          "source": "intoindiegames, manual document"
        },
        "shopItemsText": "",
        "lovedGiftsText": "",
        "dislikedGiftsText": "",
        "sourceUrl": "https://www.heartopia.live/zh/characters/"
      },
      {
        "id": "eric",
        "name": "Eric",
        "role": "前主题乐园经理",
        "location": "温泉山",
        "unlock_requirements": "推进阿斯特拉利斯故事线",
        "teaches_hobby": null,
        "category": "event",
        "description": "一位前主题乐园经理，希望将温泉山振兴为旅游胜地。他发起「温泉山的阿斯特拉利斯」任务，你需要帮助重新安置鼹鼠。完成任务后解锁每日完美萤石采集。",
        "image": "/images/npcs/eric.webp",
        "_meta": {
          "last_verified": "2026-01-24",
          "confidence": "high",
          "source": "intoindiegames, mobi.gg, noleep"
        },
        "shopItemsText": "",
        "lovedGiftsText": "",
        "dislikedGiftsText": "",
        "sourceUrl": "https://www.heartopia.live/zh/characters/"
      },
      {
        "id": "patti",
        "name": "Patti",
        "role": "艺术家/森林护林员",
        "location": "护林站（森林入口附近）",
        "unlock_requirements": "前往森林区域",
        "teaches_hobby": null,
        "category": "special",
        "description": "一位驻守在森林入口附近护林站的艺术家。她提供探索指南，帮助定位采集点，并负责资源监测，追踪野生动物数量和资源。也是阿斯特拉利斯故事线的一部分，你需要从她的观察台拍摄森林照片。",
        "image": "/images/npcs/patti.webp",
        "lovedGifts": [
          "玩具",
          "糖果",
          "美术用品"
        ],
        "_meta": {
          "last_verified": "2026-01-24",
          "confidence": "high",
          "source": "heartopia.gg, gamesolusi"
        },
        "shopItemsText": "",
        "lovedGiftsText": "玩具, 糖果, 美术用品",
        "dislikedGiftsText": "",
        "sourceUrl": "https://www.heartopia.live/zh/characters/"
      },
      {
        "id": "vernie",
        "name": "Vernie",
        "role": "花田管理员",
        "location": "花田（风车山丘）",
        "unlock_requirements": "推进阿斯特拉利斯故事线",
        "teaches_hobby": null,
        "category": "event",
        "description": "管理花田并在风车附近山丘上露营的女孩。她是阿斯特拉利斯主线故事的一部分，会请你找到两个青少年并为他们演奏音乐。也参与寻宝八卦任务，提供登山杖位置的线索。",
        "image": "/images/npcs/vernie.webp",
        "_meta": {
          "last_verified": "2026-01-24",
          "confidence": "high",
          "source": "intoindiegames, thegamer"
        },
        "shopItemsText": "",
        "lovedGiftsText": "",
        "dislikedGiftsText": "",
        "sourceUrl": "https://www.heartopia.live/zh/characters/"
      },
      {
        "id": "will",
        "name": "Will",
        "role": "灯塔守护者",
        "location": "渔村灯塔",
        "unlock_requirements": "前往渔村",
        "teaches_hobby": null,
        "category": "special",
        "description": "渔村灯塔的守护者。他守望着海岸，引导水手安全靠岸。",
        "image": "/images/npcs/will.webp",
        "_meta": {
          "last_verified": "2026-01-24",
          "confidence": "medium",
          "source": "steam community guide"
        },
        "shopItemsText": "",
        "lovedGiftsText": "",
        "dislikedGiftsText": "",
        "sourceUrl": "https://www.heartopia.live/zh/characters/"
      }
    ]
  }
] satisfies HeartopiaCollection[];

export const heartopiaCollectionMap = Object.fromEntries(
  heartopiaCollections.map((collection) => [collection.slug, collection])
) as Record<string, HeartopiaCollection>;

export const getHeartopiaCollection = (slug: string) => heartopiaCollectionMap[slug];

export const heartopiaCollectionSlugs = heartopiaCollections.map((collection) => collection.slug);
