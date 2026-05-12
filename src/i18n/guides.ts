import type { LanguageCode } from './ui';

type GuideCopy = {
  title: string;
  description: string;
  category: string;
  source: string;
  html: string;
};

type GuideKey = 'beginner' | 'daily' | 'fishing' | 'map' | 'foraging' | 'about';

export const guideTranslations: Record<GuideKey, Record<LanguageCode, GuideCopy>> = {
  beginner: {
    zh: {
      title: '新手第一天路线',
      description: '先熟悉小镇中心、水域、背包和日常节奏。',
      category: '新手',
      source: 'Steam 官方介绍',
      html: `<h2>第一天先做什么</h2><p>第一天不要急着全收集。先跟主线开功能，再认识小镇中心、城郊湖、河流和海域。</p><h2>推荐路线</h2><ol><li>花园街：确认商店、导师和活动入口。</li><li>城郊湖：熟悉湖泊钓点。</li><li>霞光河或静河：熟悉河流路线。</li><li>旧海或东海：建立海鱼概念。</li><li>回家整理背包，列出明天要查的内容。</li></ol><h2>小提醒</h2><p>先建立方向感，再补图鉴。背包按任务物品、食材、装饰、暂存物品分开会轻松很多。</p>`
    },
    en: {
      title: 'First Day Route',
      description: 'Learn the town center, waters, bag flow, and daily rhythm.',
      category: 'Beginner',
      source: 'Official Steam page',
      html: `<h2>What to do first</h2><p>Do not chase every collection on day one. Unlock core features, then learn the town center, lake, rivers, and sea routes.</p><h2>Suggested route</h2><ol><li>Flower Street: shops, mentors, and event entrances.</li><li>Suburban Lake: basic lake fishing.</li><li>Sunset River or Quiet River: river route basics.</li><li>Old Sea or East Sea: sea fishing basics.</li><li>Return home, sort your bag, and list tomorrow’s goals.</li></ol><h2>Tip</h2><p>Build a sense of direction first. Sort items into quests, food, decor, and temporary storage.</p>`
    },
    th: {
      title: 'เส้นทางวันแรก',
      description: 'รู้จักศูนย์เมือง แหล่งน้ำ กระเป๋า และจังหวะรายวัน',
      category: 'เริ่มต้น',
      source: 'หน้า Steam ทางการ',
      html: `<h2>เริ่มจากอะไร</h2><p>วันแรกไม่ต้องเก็บทุกอย่าง เปิดระบบหลักก่อน แล้วรู้จักเมือง ทะเลสาบ แม่น้ำ และทะเล</p><h2>เส้นทางแนะนำ</h2><ol><li>Flower Street: ร้านค้า ครู และกิจกรรม</li><li>Suburban Lake: จุดตกปลาทะเลสาบ</li><li>Sunset River หรือ Quiet River: เส้นทางแม่น้ำ</li><li>Old Sea หรือ East Sea: พื้นฐานปลาทะเล</li><li>กลับบ้าน จัดกระเป๋า และจดเป้าหมายพรุ่งนี้</li></ol><h2>เคล็ดลับ</h2><p>จำทิศก่อนค่อยไล่คอลเลกชัน แยกของเป็นภารกิจ อาหาร ของตกแต่ง และของพักไว้</p>`
    },
    pt: {
      title: 'Rota do primeiro dia',
      description: 'Conheça o centro, águas, mochila e ritmo diário.',
      category: 'Iniciante',
      source: 'Página oficial da Steam',
      html: `<h2>Primeiros passos</h2><p>No primeiro dia, não tente coletar tudo. Libere funções, conheça o centro, lagos, rios e mar.</p><h2>Rota sugerida</h2><ol><li>Flower Street: lojas, mentores e eventos.</li><li>Suburban Lake: pesca básica em lago.</li><li>Sunset River ou Quiet River: rios.</li><li>Old Sea ou East Sea: pesca marítima.</li><li>Volte para casa, organize a mochila e anote metas.</li></ol><h2>Dica</h2><p>Primeiro ganhe senso de direção. Separe itens por missão, comida, decoração e reserva.</p>`
    },
    id: {
      title: 'Rute Hari Pertama',
      description: 'Kenali pusat kota, perairan, tas, dan ritme harian.',
      category: 'Pemula',
      source: 'Halaman Steam resmi',
      html: `<h2>Mulai dari mana</h2><p>Hari pertama jangan mengejar semua koleksi. Buka fitur utama, lalu kenali pusat kota, danau, sungai, dan laut.</p><h2>Rute saran</h2><ol><li>Flower Street: toko, mentor, event.</li><li>Suburban Lake: dasar memancing danau.</li><li>Sunset River atau Quiet River: rute sungai.</li><li>Old Sea atau East Sea: dasar ikan laut.</li><li>Pulang, rapikan tas, catat target besok.</li></ol><h2>Tip</h2><p>Bangun arah dulu. Pisahkan item misi, makanan, dekorasi, dan simpanan.</p>`
    },
    es: {
      title: 'Ruta del primer día',
      description: 'Conoce el centro, aguas, mochila y ritmo diario.',
      category: 'Inicio',
      source: 'Página oficial de Steam',
      html: `<h2>Primeros pasos</h2><p>No intentes coleccionarlo todo el primer día. Desbloquea funciones y aprende centro, lagos, ríos y mar.</p><h2>Ruta sugerida</h2><ol><li>Flower Street: tiendas, mentores y eventos.</li><li>Suburban Lake: pesca básica de lago.</li><li>Sunset River o Quiet River: rutas de río.</li><li>Old Sea o East Sea: pesca marítima.</li><li>Vuelve a casa, ordena la mochila y apunta metas.</li></ol><h2>Consejo</h2><p>Primero gana orientación. Separa misión, comida, decoración y reserva.</p>`
    },
    fr: {
      title: 'Route du premier jour',
      description: 'Découvre le centre, les eaux, le sac et le rythme quotidien.',
      category: 'Débutant',
      source: 'Page Steam officielle',
      html: `<h2>Par où commencer</h2><p>Le premier jour, ne cherche pas tout. Débloque les fonctions, puis apprends centre, lacs, rivières et mer.</p><h2>Route conseillée</h2><ol><li>Flower Street : boutiques, mentors, événements.</li><li>Suburban Lake : pêche de lac.</li><li>Sunset River ou Quiet River : routes de rivière.</li><li>Old Sea ou East Sea : pêche en mer.</li><li>Rentre, range ton sac et note les objectifs.</li></ol><h2>Astuce</h2><p>Gagne d’abord tes repères. Sépare quêtes, nourriture, décoration et réserve.</p>`
    },
    de: {
      title: 'Route für Tag eins',
      description: 'Lerne Zentrum, Gewässer, Tasche und Tagesrhythmus kennen.',
      category: 'Anfänger',
      source: 'Offizielle Steam-Seite',
      html: `<h2>Womit beginnen</h2><p>Sammle am ersten Tag nicht alles. Schalte Funktionen frei und lerne Zentrum, Seen, Flüsse und Meer kennen.</p><h2>Empfohlene Route</h2><ol><li>Flower Street: Läden, Mentoren, Events.</li><li>Suburban Lake: Seeangeln.</li><li>Sunset River oder Quiet River: Flussrouten.</li><li>Old Sea oder East Sea: Meerangeln.</li><li>Nach Hause, Tasche sortieren, Ziele notieren.</li></ol><h2>Tipp</h2><p>Erst Orientierung, dann Sammlung. Sortiere Quest-, Essens-, Deko- und Reserveitems.</p>`
    }
  },
  daily: {
    zh: { title: '每日小镇清单', description: '上线后先看清单，再决定今天的路线。', category: '日常', source: '官方玩法介绍', html: `<h2>10 分钟清单</h2><ol><li>看公告和活动入口。</li><li>打开地图确认目标路线。</li><li>跑小镇中心附近资源点。</li><li>按天气挑一个水域钓鱼。</li><li>拜访 1-2 位重点居民。</li><li>回家清背包，列出明天目标。</li></ol><h2>天气优先级</h2><p>普通晴天补基础图鉴。雨天和彩虹天优先看条件鱼和特殊采集。</p>` },
    en: { title: 'Daily Town Checklist', description: 'Check the list before choosing today’s route.', category: 'Daily', source: 'Official gameplay info', html: `<h2>10-minute list</h2><ol><li>Check notices and events.</li><li>Open the map and pick a route.</li><li>Collect around the town center.</li><li>Choose one water area by weather.</li><li>Visit one or two key residents.</li><li>Sort your bag and list tomorrow’s goals.</li></ol><h2>Weather priority</h2><p>Use sunny days for basic collections. Rain and rainbow weather are for special fish and gathering.</p>` },
    th: { title: 'รายการรายวัน', description: 'เช็กรายการก่อนเลือกเส้นทางวันนี้', category: 'รายวัน', source: 'ข้อมูลเกมทางการ', html: `<h2>รายการ 10 นาที</h2><ol><li>ดูประกาศและกิจกรรม</li><li>เปิดแผนที่เลือกเส้นทาง</li><li>เก็บของรอบศูนย์เมือง</li><li>เลือกแหล่งน้ำตามอากาศ</li><li>เยี่ยมชาวเมืองสำคัญ 1-2 คน</li><li>จัดกระเป๋าและจดเป้าหมายพรุ่งนี้</li></ol><h2>สภาพอากาศ</h2><p>วันแดดดีเหมาะเก็บพื้นฐาน ฝนและรุ้งเหมาะปลาและของพิเศษ</p>` },
    pt: { title: 'Lista diária', description: 'Veja a lista antes de escolher a rota.', category: 'Diário', source: 'Informações oficiais', html: `<h2>Lista de 10 minutos</h2><ol><li>Veja avisos e eventos.</li><li>Abra o mapa e escolha rota.</li><li>Colete perto do centro.</li><li>Escolha uma água pelo clima.</li><li>Visite 1-2 moradores.</li><li>Organize a mochila e anote metas.</li></ol><h2>Clima</h2><p>Dias claros são para coleções básicas. Chuva e arco-íris para peixes especiais.</p>` },
    id: { title: 'Daftar Harian', description: 'Cek daftar sebelum memilih rute.', category: 'Harian', source: 'Info gameplay resmi', html: `<h2>Daftar 10 menit</h2><ol><li>Cek pengumuman dan event.</li><li>Buka peta dan pilih rute.</li><li>Ambil resource dekat pusat kota.</li><li>Pilih satu perairan sesuai cuaca.</li><li>Kunjungi 1-2 warga penting.</li><li>Rapikan tas dan catat target besok.</li></ol><h2>Prioritas cuaca</h2><p>Hari cerah untuk koleksi dasar. Hujan dan pelangi untuk ikan khusus.</p>` },
    es: { title: 'Lista diaria', description: 'Mira la lista antes de elegir ruta.', category: 'Diario', source: 'Información oficial', html: `<h2>Lista de 10 minutos</h2><ol><li>Revisa avisos y eventos.</li><li>Abre el mapa y elige ruta.</li><li>Recoge cerca del centro.</li><li>Elige un agua según clima.</li><li>Visita 1-2 residentes.</li><li>Ordena la mochila y apunta metas.</li></ol><h2>Clima</h2><p>Días claros para colecciones básicas. Lluvia y arcoíris para peces especiales.</p>` },
    fr: { title: 'Liste quotidienne', description: 'Consulte la liste avant de choisir la route.', category: 'Quotidien', source: 'Infos officielles', html: `<h2>Liste en 10 minutes</h2><ol><li>Regarde annonces et événements.</li><li>Ouvre la carte et choisis une route.</li><li>Collecte près du centre.</li><li>Choisis une eau selon la météo.</li><li>Visite 1-2 habitants.</li><li>Range le sac et note les objectifs.</li></ol><h2>Météo</h2><p>Temps clair pour les bases. Pluie et arc-en-ciel pour les poissons spéciaux.</p>` },
    de: { title: 'Tägliche Liste', description: 'Prüfe die Liste vor der Route.', category: 'Täglich', source: 'Offizielle Infos', html: `<h2>10-Minuten-Liste</h2><ol><li>Hinweise und Events prüfen.</li><li>Karte öffnen und Route wählen.</li><li>Rund ums Zentrum sammeln.</li><li>Ein Gewässer nach Wetter wählen.</li><li>1-2 wichtige Bewohner besuchen.</li><li>Tasche sortieren und Ziele notieren.</li></ol><h2>Wetter</h2><p>Sonnige Tage für Basics. Regen und Regenbogen für Spezialfische.</p>` }
  },
  fishing: {
    zh: { title: '钓鱼路线与水域分布', description: '按海域、湖泊、河流规划目标鱼。', category: '钓鱼', source: '鱼类攻略参考', html: `<h2>三类水域</h2><p>先分海鱼、湖鱼、河鱼，再看时间、天气、鱼影和等级。</p><h2>推荐顺序</h2><ol><li>湖鱼：城郊湖、草原湖、温泉山湖、森林湖。</li><li>河鱼：霞光河、静河、巨木河、潜水河。</li><li>海鱼：旧海、鲸鱼海、缓风海、东海。</li></ol><p>雨天和彩虹天优先追条件鱼，普通鱼留到晴天补。</p>` },
    en: { title: 'Fishing Routes', description: 'Plan fish by sea, lake, and river.', category: 'Fishing', source: 'Fishing references', html: `<h2>Three water types</h2><p>Start with sea, lake, and river fish, then check time, weather, shadow, and level.</p><h2>Route order</h2><ol><li>Lakes: Suburban, Grassland, Hot Spring, Forest.</li><li>Rivers: Sunset, Quiet, Giant Tree, Diving.</li><li>Sea: Old, Whale, Breeze, East.</li></ol><p>Rain and rainbow days are for condition fish. Save normal fish for sunny days.</p>` },
    th: { title: 'เส้นทางตกปลา', description: 'วางแผนปลาตามทะเล ทะเลสาบ และแม่น้ำ', category: 'ตกปลา', source: 'คู่มือตกปลา', html: `<h2>น้ำสามแบบ</h2><p>แยกปลาเป็นทะเล ทะเลสาบ และแม่น้ำ แล้วดูเวลา อากาศ เงา และเลเวล</p><h2>ลำดับเส้นทาง</h2><ol><li>ทะเลสาบ: Suburban, Grassland, Hot Spring, Forest</li><li>แม่น้ำ: Sunset, Quiet, Giant Tree, Diving</li><li>ทะเล: Old, Whale, Breeze, East</li></ol><p>ฝนและรุ้งให้ไล่ปลาพิเศษ ปกติค่อยเก็บวันแดด</p>` },
    pt: { title: 'Rotas de pesca', description: 'Planeje por mar, lago e rio.', category: 'Pesca', source: 'Referências de pesca', html: `<h2>Três águas</h2><p>Separe peixe de mar, lago e rio; depois veja hora, clima, sombra e nível.</p><h2>Ordem</h2><ol><li>Lagos: Suburban, Grassland, Hot Spring, Forest.</li><li>Rios: Sunset, Quiet, Giant Tree, Diving.</li><li>Mar: Old, Whale, Breeze, East.</li></ol><p>Chuva e arco-íris são para peixes condicionais.</p>` },
    id: { title: 'Rute Memancing', description: 'Rencanakan ikan laut, danau, dan sungai.', category: 'Memancing', source: 'Referensi memancing', html: `<h2>Tiga jenis air</h2><p>Pisahkan ikan laut, danau, sungai; lalu cek waktu, cuaca, bayangan, level.</p><h2>Urutan</h2><ol><li>Danau: Suburban, Grassland, Hot Spring, Forest.</li><li>Sungai: Sunset, Quiet, Giant Tree, Diving.</li><li>Laut: Old, Whale, Breeze, East.</li></ol><p>Hujan dan pelangi untuk ikan kondisi khusus.</p>` },
    es: { title: 'Rutas de pesca', description: 'Planifica por mar, lago y río.', category: 'Pesca', source: 'Referencias de pesca', html: `<h2>Tres aguas</h2><p>Separa peces de mar, lago y río; luego mira hora, clima, sombra y nivel.</p><h2>Orden</h2><ol><li>Lagos: Suburban, Grassland, Hot Spring, Forest.</li><li>Ríos: Sunset, Quiet, Giant Tree, Diving.</li><li>Mar: Old, Whale, Breeze, East.</li></ol><p>Lluvia y arcoíris son para peces condicionados.</p>` },
    fr: { title: 'Routes de pêche', description: 'Planifie mer, lac et rivière.', category: 'Pêche', source: 'Références pêche', html: `<h2>Trois eaux</h2><p>Sépare mer, lac et rivière, puis vérifie heure, météo, ombre et niveau.</p><h2>Ordre</h2><ol><li>Lacs : Suburban, Grassland, Hot Spring, Forest.</li><li>Rivières : Sunset, Quiet, Giant Tree, Diving.</li><li>Mer : Old, Whale, Breeze, East.</li></ol><p>Pluie et arc-en-ciel servent aux poissons conditionnels.</p>` },
    de: { title: 'Angelrouten', description: 'Plane Meer, See und Fluss.', category: 'Angeln', source: 'Angelreferenzen', html: `<h2>Drei Gewässer</h2><p>Trenne Meer-, See- und Flussfische; prüfe Zeit, Wetter, Schatten und Level.</p><h2>Reihenfolge</h2><ol><li>Seen: Suburban, Grassland, Hot Spring, Forest.</li><li>Flüsse: Sunset, Quiet, Giant Tree, Diving.</li><li>Meer: Old, Whale, Breeze, East.</li></ol><p>Regen und Regenbogen sind für bedingte Fische.</p>` }
  },
  map: {
    zh: { title: '地图跑图路线', description: '用地图组织开荒、采集、钓鱼和活动。', category: '地图', source: '地图路线整理', html: `<h2>跑图原则</h2><p>每次上线只选一个目标：开图、采集、钓鱼、活动或居民互动。</p><h2>路线</h2><ol><li>新手：花园街、城郊湖、霞光河、旧海。</li><li>采集：小镇中心、森林湖、巨木河。</li><li>钓鱼：按湖泊、河流、海域分开跑。</li></ol><p>打开互动地图，用筛选器快速定位目标区域。</p>` },
    en: { title: 'Map Routing', description: 'Use the map for exploration, gathering, fishing, and events.', category: 'Map', source: 'Route notes', html: `<h2>Routing rule</h2><p>Pick one goal per session: exploration, gathering, fishing, events, or residents.</p><h2>Routes</h2><ol><li>Beginner: Flower Street, Suburban Lake, Sunset River, Old Sea.</li><li>Gathering: town center, Forest Lake, Giant Tree River.</li><li>Fishing: split lakes, rivers, and sea.</li></ol><p>Use the interactive map filters to jump to a zone.</p>` },
    th: { title: 'เส้นทางแผนที่', description: 'ใช้แผนที่สำหรับสำรวจ เก็บของ ตกปลา และกิจกรรม', category: 'แผนที่', source: 'บันทึกเส้นทาง', html: `<h2>หลักการ</h2><p>เลือกเป้าหมายเดียวต่อครั้ง: สำรวจ เก็บของ ตกปลา กิจกรรม หรือชาวเมือง</p><h2>เส้นทาง</h2><ol><li>เริ่มต้น: Flower Street, Suburban Lake, Sunset River, Old Sea</li><li>เก็บของ: ศูนย์เมือง, Forest Lake, Giant Tree River</li><li>ตกปลา: แยกทะเลสาบ แม่น้ำ ทะเล</li></ol><p>ใช้ตัวกรองแผนที่เพื่อไปยังพื้นที่</p>` },
    pt: { title: 'Rotas do mapa', description: 'Use o mapa para explorar, coletar, pescar e eventos.', category: 'Mapa', source: 'Notas de rota', html: `<h2>Regra</h2><p>Escolha uma meta por sessão: explorar, coletar, pescar, eventos ou moradores.</p><h2>Rotas</h2><ol><li>Iniciante: Flower Street, Suburban Lake, Sunset River, Old Sea.</li><li>Coleta: centro, Forest Lake, Giant Tree River.</li><li>Pesca: lagos, rios e mar separados.</li></ol><p>Use filtros do mapa interativo para achar zonas.</p>` },
    id: { title: 'Rute Peta', description: 'Gunakan peta untuk eksplorasi, gathering, memancing, event.', category: 'Peta', source: 'Catatan rute', html: `<h2>Aturan rute</h2><p>Pilih satu tujuan: eksplorasi, gathering, memancing, event, atau warga.</p><h2>Rute</h2><ol><li>Pemula: Flower Street, Suburban Lake, Sunset River, Old Sea.</li><li>Gathering: pusat kota, Forest Lake, Giant Tree River.</li><li>Memancing: pisah danau, sungai, laut.</li></ol><p>Gunakan filter peta interaktif untuk menemukan zona.</p>` },
    es: { title: 'Rutas de mapa', description: 'Usa el mapa para explorar, recolectar, pescar y eventos.', category: 'Mapa', source: 'Notas de ruta', html: `<h2>Regla</h2><p>Elige un objetivo por sesión: explorar, recolectar, pescar, eventos o residentes.</p><h2>Rutas</h2><ol><li>Inicio: Flower Street, Suburban Lake, Sunset River, Old Sea.</li><li>Recolección: centro, Forest Lake, Giant Tree River.</li><li>Pesca: separa lagos, ríos y mar.</li></ol><p>Usa filtros del mapa interactivo para localizar zonas.</p>` },
    fr: { title: 'Routes de carte', description: 'Utilise la carte pour explorer, collecter, pêcher et événements.', category: 'Carte', source: 'Notes de route', html: `<h2>Règle</h2><p>Choisis un objectif : exploration, collecte, pêche, événements ou habitants.</p><h2>Routes</h2><ol><li>Débutant : Flower Street, Suburban Lake, Sunset River, Old Sea.</li><li>Collecte : centre, Forest Lake, Giant Tree River.</li><li>Pêche : sépare lacs, rivières et mer.</li></ol><p>Utilise les filtres de la carte interactive.</p>` },
    de: { title: 'Kartenrouten', description: 'Nutze die Karte für Erkunden, Sammeln, Angeln und Events.', category: 'Karte', source: 'Routennotizen', html: `<h2>Regel</h2><p>Wähle pro Runde ein Ziel: Erkunden, Sammeln, Angeln, Events oder Bewohner.</p><h2>Routen</h2><ol><li>Anfänger: Flower Street, Suburban Lake, Sunset River, Old Sea.</li><li>Sammeln: Zentrum, Forest Lake, Giant Tree River.</li><li>Angeln: Seen, Flüsse und Meer trennen.</li></ol><p>Nutze Filter der interaktiven Karte.</p>` }
  },
  foraging: {
    zh: { title: '采集与背包整理', description: '把采集路线和背包整理合并成轻量流程。', category: '采集', source: '采集攻略参考', html: `<h2>采集思路</h2><p>不要一次清全图。每天固定短线更容易坚持。</p><h2>分类</h2><ul><li>食材：烹饪、赠礼、任务。</li><li>花草：颜色、位置、刷新感受。</li><li>木材矿物：路线和消耗。</li><li>活动材料：单独放。</li></ul><p>短线从小镇中心、城郊湖、花园街周边开始。</p>` },
    en: { title: 'Foraging & Bag Sorting', description: 'Keep gathering routes and bag sorting simple.', category: 'Foraging', source: 'Foraging references', html: `<h2>Approach</h2><p>Do not clear the entire map. A short daily route is easier to keep.</p><h2>Sort items</h2><ul><li>Food: cooking, gifts, quests.</li><li>Flowers: color, place, respawn feel.</li><li>Wood and ore: route and use.</li><li>Event items: keep separate.</li></ul><p>Start near town center, Suburban Lake, and Flower Street.</p>` },
    th: { title: 'เก็บของและจัดกระเป๋า', description: 'ทำเส้นทางเก็บของและกระเป๋าให้ง่าย', category: 'เก็บของ', source: 'คู่มือเก็บของ', html: `<h2>แนวคิด</h2><p>ไม่ต้องเคลียร์ทั้งแผนที่ เส้นทางสั้นรายวันทำได้ง่ายกว่า</p><h2>แยกของ</h2><ul><li>อาหาร: ทำอาหาร ของขวัญ ภารกิจ</li><li>ดอกไม้: สี จุด และการเกิดใหม่</li><li>ไม้และแร่: เส้นทางและการใช้</li><li>ของกิจกรรม: แยกไว้</li></ul><p>เริ่มจากศูนย์เมือง Suburban Lake และ Flower Street</p>` },
    pt: { title: 'Coleta e mochila', description: 'Rotas de coleta e mochila simples.', category: 'Coleta', source: 'Referências de coleta', html: `<h2>Ideia</h2><p>Não limpe o mapa inteiro. Uma rota curta diária é mais fácil.</p><h2>Separe itens</h2><ul><li>Comida: cozinha, presentes, missões.</li><li>Flores: cor, local, respawn.</li><li>Madeira e minério: rota e uso.</li><li>Eventos: separado.</li></ul><p>Comece pelo centro, Suburban Lake e Flower Street.</p>` },
    id: { title: 'Foraging & Tas', description: 'Rute gathering dan tas tetap sederhana.', category: 'Foraging', source: 'Referensi foraging', html: `<h2>Prinsip</h2><p>Jangan bersihkan seluruh peta. Rute pendek harian lebih mudah.</p><h2>Pilah item</h2><ul><li>Makanan: memasak, hadiah, quest.</li><li>Bunga: warna, tempat, respawn.</li><li>Kayu dan ore: rute dan guna.</li><li>Event: pisahkan.</li></ul><p>Mulai dari pusat kota, Suburban Lake, dan Flower Street.</p>` },
    es: { title: 'Recolección y mochila', description: 'Rutas y mochila simples.', category: 'Recolección', source: 'Referencias de recolección', html: `<h2>Idea</h2><p>No limpies todo el mapa. Una ruta diaria corta es más fácil.</p><h2>Ordena</h2><ul><li>Comida: cocina, regalos, misiones.</li><li>Flores: color, lugar, respawn.</li><li>Madera y mineral: ruta y uso.</li><li>Eventos: separado.</li></ul><p>Empieza por centro, Suburban Lake y Flower Street.</p>` },
    fr: { title: 'Collecte et sac', description: 'Routes de collecte et rangement simples.', category: 'Collecte', source: 'Références collecte', html: `<h2>Idée</h2><p>Ne vide pas toute la carte. Une courte route quotidienne est plus simple.</p><h2>Trier</h2><ul><li>Nourriture : cuisine, cadeaux, quêtes.</li><li>Fleurs : couleur, lieu, réapparition.</li><li>Bois et minerais : route et usage.</li><li>Événements : à part.</li></ul><p>Commence par le centre, Suburban Lake et Flower Street.</p>` },
    de: { title: 'Sammeln und Tasche', description: 'Sammelrouten und Tasche einfach halten.', category: 'Sammeln', source: 'Sammelreferenzen', html: `<h2>Ansatz</h2><p>Leere nicht die ganze Karte. Eine kurze Tagesroute ist leichter.</p><h2>Sortieren</h2><ul><li>Essen: Kochen, Geschenke, Quests.</li><li>Blumen: Farbe, Ort, Respawn.</li><li>Holz und Erz: Route und Nutzen.</li><li>Events: getrennt.</li></ul><p>Beginne beim Zentrum, Suburban Lake und Flower Street.</p>` }
  },
  about: {
    zh: { title: '阅读说明', description: '了解本站内容、参考资料和使用方式。', category: '说明', source: '官方与公开资料', html: `<h2>怎么用</h2><p>开荒看新手和每日；补图鉴看地图和数据库；做日常看清单和追踪器。</p><h2>参考</h2><p>本站参考官方页面、Steam 公告和常用攻略。具体活动时间和位置以游戏内显示为准。</p><h2>版权</h2><p>本站是非官方粉丝站。游戏名称、截图与公开资料归原权利方所有。</p>` },
    en: { title: 'How to Read', description: 'Content, references, and usage notes.', category: 'Info', source: 'Official and public info', html: `<h2>How to use</h2><p>For beginner flow, read beginner and daily guides. For collections, use map and database. For daily play, use checklist and tracker.</p><h2>References</h2><p>This site refers to official pages, Steam posts, and useful guides. In-game info always wins.</p><h2>Copyright</h2><p>This is an unofficial fan site. Game names, screenshots, and public materials belong to their owners.</p>` },
    th: { title: 'วิธีอ่าน', description: 'เนื้อหา อ้างอิง และวิธีใช้', category: 'ข้อมูล', source: 'ข้อมูลทางการและสาธารณะ', html: `<h2>วิธีใช้</h2><p>เริ่มเกมอ่านคู่มือเริ่มต้นและรายวัน คอลเลกชันใช้แผนที่และฐานข้อมูล รายวันใช้เช็กลิสต์และตัวติดตาม</p><h2>อ้างอิง</h2><p>อ้างอิงหน้าอย่างเป็นทางการ Steam และคู่มือที่มีประโยชน์ ข้อมูลในเกมเป็นหลัก</p><h2>ลิขสิทธิ์</h2><p>เว็บไซต์แฟนไกด์ไม่เป็นทางการ ทุกชื่อ รูป และข้อมูลเป็นของเจ้าของเดิม</p>` },
    pt: { title: 'Como ler', description: 'Conteúdo, referências e uso.', category: 'Info', source: 'Informações oficiais e públicas', html: `<h2>Como usar</h2><p>Iniciante: guias iniciais e diário. Coleções: mapa e banco. Rotina: lista e rastreador.</p><h2>Referências</h2><p>Usamos páginas oficiais, posts Steam e guias úteis. O jogo sempre prevalece.</p><h2>Direitos</h2><p>Site de fã não oficial. Nomes, imagens e materiais pertencem aos donos.</p>` },
    id: { title: 'Cara Membaca', description: 'Konten, referensi, dan cara pakai.', category: 'Info', source: 'Info resmi dan publik', html: `<h2>Cara pakai</h2><p>Pemula baca beginner dan daily. Koleksi pakai peta dan database. Harian pakai checklist dan tracker.</p><h2>Referensi</h2><p>Mengacu pada halaman resmi, post Steam, dan panduan berguna. Info dalam game utama.</p><h2>Hak cipta</h2><p>Situs fan tidak resmi. Nama, gambar, dan materi milik pemiliknya.</p>` },
    es: { title: 'Cómo leer', description: 'Contenido, referencias y uso.', category: 'Info', source: 'Información oficial y pública', html: `<h2>Uso</h2><p>Inicio: guías iniciales y diaria. Colecciones: mapa y base. Rutina: lista y rastreador.</p><h2>Referencias</h2><p>Usamos páginas oficiales, Steam y guías útiles. La información del juego manda.</p><h2>Derechos</h2><p>Sitio fan no oficial. Nombres, imágenes y materiales pertenecen a sus dueños.</p>` },
    fr: { title: 'Mode d’emploi', description: 'Contenu, références et usage.', category: 'Info', source: 'Infos officielles et publiques', html: `<h2>Utilisation</h2><p>Début : guides débutant et quotidien. Collections : carte et base. Routine : liste et suivi.</p><h2>Références</h2><p>Pages officielles, Steam et guides utiles. Les infos en jeu priment.</p><h2>Droits</h2><p>Site de fans non officiel. Noms, images et ressources appartiennent à leurs propriétaires.</p>` },
    de: { title: 'Hinweise', description: 'Inhalte, Referenzen und Nutzung.', category: 'Info', source: 'Offizielle und öffentliche Infos', html: `<h2>Nutzung</h2><p>Anfang: Anfänger- und Tagesguide. Sammlungen: Karte und Datenbank. Alltag: Liste und Tracker.</p><h2>Referenzen</h2><p>Offizielle Seiten, Steam und nützliche Guides. Spielinfos haben Vorrang.</p><h2>Rechte</h2><p>Inoffizielle Fan-Seite. Namen, Bilder und Materialien gehören ihren Eigentümern.</p>` }
  }
};
