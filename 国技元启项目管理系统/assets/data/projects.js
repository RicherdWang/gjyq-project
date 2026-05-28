const PROJECT_TYPES = {
  type_1: { name: '漫剧/短剧制作OPC订单', color: '#3b82f6' },
  type_2: { name: '漫剧/短剧出海OPC订单', color: '#8b5cf6' },
  type_3: { name: '企事业单位福利OPC订单', color: '#10b981' },
  type_4: { name: '企事业单位智能体服务OPC订单', color: '#f59e0b' },
  type_5: { name: '其他', color: '#6b7280' }
};

const PROJECT_STATUS = {
  status_1: { name: '待启动', color: '#6b7280' },
  status_2: { name: '进行中', color: '#3b82f6' },
  status_3: { name: '已完成', color: '#10b981' },
  status_4: { name: '已结算', color: '#f59e0b' }
};

const PRIORITY = {
  priority_high: { name: '高', color: '#ef4444' },
  priority_medium: { name: '中', color: '#eab308' },
  priority_low: { name: '低', color: '#22c55e' }
};

const projectsData = [
  {
    id: 'PROJ0080',
    name: '杭州魔方元启-AI宣传片制作',
    type: 'type_1',
    client: '杭州魔方元启',
    priority: 'priority_high',
    duration: 5,
    budget: 0.5,
    deadline: '2026-06-05',
    status: 'status_2',
    createdAt: '2026-05-28',
    description: 'AI宣传片90秒成片制作',
    detail: '宣传片创意执行、AI画面生成、基础视频合成、基础剪辑、画面节奏调整、基础字幕/片名/落版处理、基础音乐及音效匹配、成片导出等。成片时长：90秒。成片规格：分辨率1920×1080；画幅比例16:9；交付格式MP4/MOV。'
  },
  {
    id: 'PROJ0079',
    name: '广州快创网络-企业品牌AI宣传片',
    type: 'type_1',
    client: '广州快创网络',
    priority: 'priority_high',
    duration: 7,
    budget: 0.8,
    deadline: '2026-06-10',
    status: 'status_1',
    createdAt: '2026-05-27',
    description: '企业品牌AI宣传片120秒成片',
    detail: '企业品牌故事脚本策划、AI场景画面生成、人物角色AI绘制、视频剪辑合成、企业LOGO动画制作、专业配音配乐、字幕特效处理、多版本输出（横版/竖版）。成片规格：4K分辨率3840×2160及1080P双版本。'
  },
  {
    id: 'PROJ0078',
    name: '深圳云智科技-产品发布AI短片',
    type: 'type_1',
    client: '深圳云智科技',
    priority: 'priority_medium',
    duration: 4,
    budget: 0.45,
    deadline: '2026-06-03',
    status: 'status_2',
    createdAt: '2026-05-26',
    description: '智能硬件产品AI发布短片60秒',
    detail: '产品卖点梳理、AI产品渲染图生成、动态展示效果制作、科技感背景设计、节奏感剪辑、电子音乐配乐、产品参数动态展示、结尾品牌落版。交付格式MP4，适配抖音/视频号/小红书多平台。'
  },
  {
    id: 'PROJ0077',
    name: '成都创意无限-文旅宣传AI视频',
    type: 'type_1',
    client: '成都创意无限',
    priority: 'priority_medium',
    duration: 6,
    budget: 0.6,
    deadline: '2026-06-08',
    status: 'status_3',
    createdAt: '2026-05-25',
    description: '成都文旅AI宣传片90秒',
    detail: '成都特色景点AI画面创作、美食文化场景生成、人文风情元素融入、动态转场设计、川味背景音乐、方言配音（可选）、景点介绍字幕、旅游攻略引导结尾。分辨率1920×1080，适配户外大屏及线上传播。'
  },
  {
    id: 'PROJ0076',
    name: '武汉新锐传媒-电商促销AI短片',
    type: 'type_1',
    client: '武汉新锐传媒',
    priority: 'priority_high',
    duration: 3,
    budget: 0.35,
    deadline: '2026-06-01',
    status: 'status_4',
    createdAt: '2026-05-24',
    description: '618电商促销AI短片30秒',
    detail: '促销信息策划、AI产品场景图生成、动态价格标签设计、紧迫感节奏剪辑、促销音乐配合、平台水印处理、多尺寸适配（9:16竖版/16:9横版/1:1方形）、快速交付用于投放测试。'
  },
  {
    id: 'PROJ0075',
    name: '南京蓝海文化-教育机构AI宣传片',
    type: 'type_1',
    client: '南京蓝海文化',
    priority: 'priority_medium',
    duration: 8,
    budget: 0.9,
    deadline: '2026-06-12',
    status: 'status_2',
    createdAt: '2026-05-23',
    description: '少儿教育机构品牌AI宣传片150秒',
    detail: '教育理念脚本撰写、温馨校园场景AI创作、师生互动画面生成、学习成果展示、家长见证模拟、轻快背景音乐、儿童友好字幕设计、品牌LOGO动画。交付4K及1080P双版本，适配电视广告及新媒体。'
  },
  {
    id: 'PROJ0074',
    name: '西安古韵坊-非遗文化AI纪录片',
    type: 'type_1',
    client: '西安古韵坊',
    priority: 'priority_low',
    duration: 10,
    budget: 1.2,
    deadline: '2026-06-15',
    status: 'status_1',
    createdAt: '2026-05-22',
    description: '陕西非遗文化AI纪录短片180秒',
    detail: '非遗项目调研整理、历史场景AI还原、传统工艺制作过程可视化、传承人故事创作、古风配乐制作、文化解说字幕、博物馆展陈版及网络传播版双版本制作、文化授权书处理。'
  },
  {
    id: 'PROJ0073',
    name: '厦门海风传媒-房地产AI宣传片',
    type: 'type_1',
    client: '厦门海风传媒',
    priority: 'priority_high',
    duration: 6,
    budget: 0.75,
    deadline: '2026-06-07',
    status: 'status_3',
    createdAt: '2026-05-21',
    description: '海景楼盘AI概念宣传片90秒',
    detail: '楼盘卖点提炼、AI建筑外观渲染、室内精装场景生成、海景景观创作、生活方式场景模拟、高端大气配乐、销售信息动态展示、售楼处大屏适配。分辨率4K，适配展厅大屏幕播放。'
  },
  {
    id: 'PROJ0072',
    name: '长沙星城创意-餐饮品牌AI短片',
    type: 'type_1',
    client: '长沙星城创意',
    priority: 'priority_medium',
    duration: 4,
    budget: 0.4,
    deadline: '2026-06-04',
    status: 'status_4',
    createdAt: '2026-05-20',
    description: '连锁餐饮品牌AI美食短片60秒',
    detail: '招牌菜品AI视觉创作、食材新鲜度表现、烹饪过程艺术化处理、餐厅氛围场景生成、食欲感调色、轻快流行音乐、团购信息引导、多平台尺寸适配。用于抖音/美团/大众点评推广。'
  },
  {
    id: 'PROJ0071',
    name: '郑州中原传媒-制造业AI宣传片',
    type: 'type_1',
    client: '郑州中原传媒',
    priority: 'priority_high',
    duration: 7,
    budget: 0.85,
    deadline: '2026-06-09',
    status: 'status_2',
    createdAt: '2026-05-19',
    description: '智能制造企业AI宣传片120秒',
    detail: '企业实力脚本策划、工厂车间AI场景创作、生产线流程可视化、技术研发场景生成、品质管控展示、大气企业配乐、数据图表动态呈现、企业荣誉展示。4K高清制作，适配展会及官网展示。'
  },
  {
    id: 'PROJ0070',
    name: '青岛蓝海影视-健身品牌AI推广片',
    type: 'type_1',
    client: '青岛蓝海影视',
    priority: 'priority_medium',
    duration: 5,
    budget: 0.55,
    deadline: '2026-06-06',
    status: 'status_1',
    createdAt: '2026-05-18',
    description: '健身连锁品牌AI推广片90秒',
    detail: '健身场景AI创作、运动人物动态表现、器械训练画面生成、团课氛围展示、减脂/增肌效果可视化、动感电子音乐、会员权益展示、门店信息引导。适配抖音/小红书/视频号投放。'
  },
  {
    id: 'PROJ0069',
    name: '沈阳东北文创-冰雪旅游AI宣传片',
    type: 'type_1',
    client: '沈阳东北文创',
    priority: 'priority_low',
    duration: 6,
    budget: 0.65,
    deadline: '2026-06-11',
    status: 'status_3',
    createdAt: '2026-05-17',
    description: '东北冰雪旅游AI宣传片100秒',
    detail: '冰雪景观AI创作、滑雪运动场景生成、民俗文化元素融入、温泉度假场景、冬季美食展示、欢快东北风音乐、旅游路线推荐、预订信息引导。横竖双版本，适配OTA平台及社交媒体。'
  },
  {
    id: 'PROJ0068',
    name: '苏州江南传媒-丝绸品牌AI故事片',
    type: 'type_1',
    client: '苏州江南传媒',
    priority: 'priority_medium',
    duration: 8,
    budget: 0.95,
    deadline: '2026-06-13',
    status: 'status_2',
    createdAt: '2026-05-16',
    description: '丝绸品牌文化AI故事片120秒',
    detail: '丝绸历史文化脚本、古代织造场景AI还原、现代工艺展示、丝绸产品美学创作、江南园林场景生成、古典优雅配乐、品牌故事叙述、购买渠道引导。高清制作，适配品牌官网及门店播放。'
  },
  {
    id: 'PROJ0067',
    name: '杭州魔方元启-产品功能演示AI视频',
    type: 'type_1',
    client: '杭州魔方元启',
    priority: 'priority_high',
    duration: 4,
    budget: 0.42,
    deadline: '2026-06-02',
    status: 'status_4',
    createdAt: '2026-05-15',
    description: 'SaaS产品功能AI演示视频60秒',
    detail: '产品功能脚本梳理、UI界面AI美化展示、操作流程动画演示、数据可视化呈现、使用场景模拟、轻快科技配乐、功能亮点字幕、免费试用引导。多尺寸适配，用于产品官网及推广投放。'
  },
  {
    id: 'PROJ0066',
    name: '广州快创网络-招聘宣传AI短片',
    type: 'type_1',
    client: '广州快创网络',
    priority: 'priority_medium',
    duration: 5,
    budget: 0.48,
    deadline: '2026-06-05',
    status: 'status_1',
    createdAt: '2026-05-14',
    description: '企业招聘AI宣传短片90秒',
    detail: '企业环境AI场景创作、团队氛围展示、岗位需求可视化、员工成长故事模拟、福利待遇呈现、年轻化流行音乐、招聘信息动态展示、投递方式引导。适配BOSS直聘/智联招聘及社交媒体。'
  }
];

function calculateStats() {
  const typeStats = { type_1: 0, type_2: 0, type_3: 0, type_4: 0, type_5: 0 };
  const statusStats = { status_1: 0, status_2: 0, status_3: 0, status_4: 0 };
  let totalBudget = 0;

  projectsData.forEach(project => {
    typeStats[project.type]++;
    statusStats[project.status]++;
    totalBudget += project.budget;
  });

  return {
    total: projectsData.length,
    totalBudget: parseFloat(totalBudget.toFixed(2)),
    inProgress: statusStats.status_2,
    completed: statusStats.status_3,
    settled: statusStats.status_4,
    typeStats,
    statusStats,
    monthlyStats: [
      { month: '2025-12', count: 2 },
      { month: '2026-01', count: 3 },
      { month: '2026-02', count: 4 },
      { month: '2026-03', count: 5 },
      { month: '2026-04', count: 4 },
      { month: '2026-05', count: 6 }
    ]
  };
}
