const topics = [
  {
    id: "glass-core",
    name: "玻璃基板",
    category: "Advanced Packaging",
    subtitle: "先进封装 Glass Core 产业洞察",
    status: "Draft",
    updatedAt: "2026-07-08",
    skill: "glass-core-insight",
    conclusions: [
      ["市场垄断性", "高", "材料、TGV、金属化和客户验证集中在少数成熟生态，短期壁垒主要来自认证和良率学习曲线。"],
      ["技术先进性", "高", "大尺寸、低翘曲、高平整度和高密度互连能力使其成为先进封装的重要潜在路线。"],
      ["成本竞争力", "中", "长期有机会改善大面积封装经济性，但短期受良率、设备折旧和导入周期约束。"],
    ],
    findings: [
      "玻璃基板不是单一材料机会，而是材料、工艺、设备、封装客户共同验证的系统工程。",
      "日韩台更强在材料、精密加工和封装生态，美国更强在路线定义、设备和 AI 需求牵引。",
      "中国最现实的切入点是 TGV 加工、金属化、电镀、检测、可靠性测试和部分材料国产替代。",
    ],
    chain: [
      ["材料", "低 CTE 玻璃、ABF、介电材料、铜材料、缓冲层材料"],
      ["工艺", "玻璃成形、减薄、TGV、金属化、RDL、检测与可靠性"],
      ["设备", "激光钻孔、湿法清洗、电镀、曝光、AOI、翘曲检测"],
      ["客户", "先进封装厂、AI GPU/ASIC、AI Server"],
    ],
    risks: ["良率爬坡慢", "客户认证周期长", "与 ABF / 硅中介层路线竞争", "可靠性数据不足"],
    actions: ["建立玻璃基板 Benchmark 数据表", "拆分材料/工艺/设备三张供应商地图", "补中国 Gap 与五年机会矩阵"],
    deepDive: {
      title: "Glass Core 产业拆解",
      note: "按 glass-core-insight：材料 -> 工艺 -> 设备 -> 竞争格局 -> 中国建议",
      benchmarks: [
        ["玻璃基材", "低 CTE、厚度均匀性、表面缺陷密度、平整度", "面向大尺寸先进封装，优先看低翘曲与高平整度", "决定能否承接大尺寸 Chiplet / AI Package"],
        ["TGV", "孔径一致性、孔壁损伤、金属化填充、导通良率", "高密度、低缺陷、可量产的玻璃通孔能力", "是玻璃基板区别于传统载板的核心制造门槛"],
        ["ABF / 介电层", "低损耗、附着力、层间可靠性、细线路能力", "与现有 ABF 生态兼容，同时支持更高互连密度", "决定玻璃基板是否能进入主流封装供应链"],
        ["可靠性", "热循环、翘曲、分层、湿热、TGV 漏电与疲劳", "必须建立材料-工艺-封装级 Test Vehicle", "客户认证周期的关键瓶颈"],
      ],
      competition: [
        ["日韩台", "材料、精密加工、封装生态、客户验证能力强", "路线由大客户牵引，产能扩张节奏受认证影响", "第一梯队，更可能率先形成可量产供应链"],
        ["美国", "AI 需求定义、设备、EDA、IDM/Foundry 路线影响力强", "本土制造链条相对分散", "定义方向和标准，推动 Chiplet / AI Package 需求"],
        ["中国", "玻璃材料、激光加工、电镀、检测和封测具备切入基础", "高端材料、TGV 良率、可靠性数据和客户认证不足", "应优先做 Test Vehicle、设备材料协同和国产验证平台"],
      ],
      capabilities: [
        ["材料体系", "低 CTE 玻璃、ABF、PI/Low-Dk、铜材料、缓冲层材料", "重点不是单点替代，而是材料组合窗口和封装可靠性。"],
        ["工艺体系", "玻璃减薄、清洗、TGV、种子层、电镀、CMP、RDL、检测", "TGV + 金属化 + 平坦化是良率主线，需要工艺闭环。"],
        ["设备体系", "激光钻孔/改质、湿法、电镀、曝光、AOI、X-Ray、翘曲检测", "国产机会集中在封装级设备、检测设备和自动化搬运。"],
      ],
      opportunities: [
        ["S 级", "TGV 加工与金属化闭环", "用统一 Test Vehicle 做孔径、漏电、导通、疲劳和良率统计。"],
        ["S 级", "可靠性与检测平台", "建立热循环、湿热、翘曲、分层、TGV 漏电和失效分析数据库。"],
        ["A+ 级", "ABF / 介电 / 缓冲材料国产验证", "不要只比较材料参数，要做封装结构级验证。"],
        ["A 级", "设备材料工艺联合开发", "激光、电镀、清洗、AOI 与材料供应商共同优化良率。"],
      ],
    },
    prompt: "你是 Glass Core 产业洞察专家。请围绕材料、工艺、设备、全球竞争格局、未来路线和中国企业建议输出决策导向洞察。禁止百科式介绍，必须包含 Benchmark、KPI、JKT/US/CN 对比、中国 Gap 和行动建议。",
  },
  {
    id: "hbm",
    name: "HBM",
    category: "Memory",
    subtitle: "高带宽存储产业洞察",
    status: "Draft",
    updatedAt: "2026-07-08",
    skill: "hbm-industry-insight",
    conclusions: [
      ["价值链重构", "高", "HBM4 后竞争从标准 DRAM 产品转向定制化系统组件。"],
      ["可靠性壁垒", "高", "累计良率、热管理和客户 Qualification 是核心护城河。"],
      ["国产机会", "中高", "优先机会在测试、TSV、MUF/Underfill、可靠性平台和先进封装协同。"],
    ],
    findings: [
      "HBM 是 DRAM、TSV、堆叠键合、Base Die、先进封装和系统可靠性的组合竞争。",
      "HBM4 之后 Logic Base Die 与客户定制会提升 Foundry 和 AI 客户的话语权。",
      "中国应先建设可靠性与测试闭环，而不是只追单一产品代际命名。",
    ],
    chain: [
      ["DRAM", "Core Die、Retention、VRT、良率"],
      ["TSV", "垂直互连、绝缘介质、铜填充、PDN"],
      ["Stack", "TCB、MR-MUF、NCF、Hybrid Bonding"],
      ["System", "GPU/ASIC + HBM + CoWoS + AI Server"],
    ],
    risks: ["客户认证门槛高", "热可靠性问题放大", "先进封装产能约束", "出口管制影响"],
    actions: ["沉淀 HBM 可靠性 Dashboard", "建立材料-工艺-测试六级 Gate", "拆分 HBM4/HBM4E 路线图"],
    deepDive: {
      title: "HBM 产业深度拆解",
      note: "从 Memory Product 走向 Customized Heterogeneous System Component",
      benchmarks: [
        ["HBM4 架构", "2048-bit 接口、Pin Speed、单 Stack 带宽、Base Die 定制能力", "HBM4/HBM4E 进入 2TB/s+ 到 3TB/s+ 级公开口径", "价值从 DRAM Die 向 Base Die、封装协同和客户定制迁移"],
        ["累计良率", "DRAM Die 良率、TSV 良率、Bond 良率、Base Die、Package、Test", "Y_total 由多环节乘法决定，层数越高越敏感", "HBM 经济性核心不是单步良率，而是跨工序缺陷控制"],
        ["热可靠性", "HBM Tj、Retention tail、Refresh activity、MUF/TIM 热阻、Thermal gradient", "训练/推理长时间高带宽负载放大热-保持-刷新-功耗闭环", "热问题直接耦合 DRAM 存储介质可靠性"],
        ["测试体系", "Known Good Stack、ECC Telemetry、Stack Warpage、ΔR、Fail Bit Count", "Material -> Wafer -> Stack -> Package -> System -> Field 六级 Gate", "测试与可靠性平台会成为国产 HBM 的优先突破口"],
      ],
      competition: [
        ["韩国", "DRAM Core Die、HBM 堆叠、MR-MUF/TC-NCF 量产学习曲线强", "先进逻辑 Base Die 和 CoWoS 级系统集成需跨区域协同", "仍是 HBM 主导阵营，但 HBM4 后需要更深 Foundry/客户协同"],
        ["台湾", "Foundry、CoWoS、先进封装系统集成和 AI 客户协同强", "不掌握主流 DRAM Core Die", "HBM4 后权重上升，是系统封装集成关键节点"],
        ["日本", "材料、精密设备、CMP、封装材料、测试可靠性生态强", "终端产品和 AI 客户定义能力相对弱", "是 HBM 隐形控制点，尤其在材料和设备环节"],
        ["美国", "AI 架构、GPU/ASIC 客户、Micron、EDA/设备/标准和出口规则强", "完整制造链条分散", "定义需求和规则，并通过客户认证影响价值链"],
        ["中国", "DRAM、封测、设备国产化和大规模制造有基础", "公开可验证先进 HBM 量产证据有限，可靠性/客户认证数据不足", "应先建设 HBM 可靠性、测试、TSV、热材料和封装协同能力"],
      ],
      capabilities: [
        ["材料与介质", "DRAM 电容介质、TSV liner、MUF/EMC/NCF、RDL 介质、TIM", "介质可靠性不能只看 DRAM Cell，必须覆盖 TSV、键合、RDL、聚合物和热材料。"],
        ["工艺与封装", "DRAM Fabrication、TSV、晶圆减薄、Microbump、TCB/MR-MUF/Hybrid Bonding、Base Die", "HBM 是前道 DRAM、中道 TSV、后道先进封装三套体系的耦合。"],
        ["测试与可靠性", "Wafer test、Known Good Die/Stack、Stack Test、Package HTOL、System workload、Field telemetry", "可靠性不是最后验证，而是 HBM 成本曲线和客户准入的核心变量。"],
      ],
      opportunities: [
        ["S 级", "HBM Reliability & Qualification Platform", "建立 Retention/VRT、TSV TDDB、Microbump EM、Warpage、ECC Telemetry 和 AI Workload Soak 平台。"],
        ["S 级", "Advanced Test", "进入 Wafer、Stack、Package、System 多级测试，提升失效定位和客户认证能力。"],
        ["S 级", "TSV + Bond + Test 闭环", "不要分散做单点设备，优先形成 TSV、Microbump、MUF/NCF、Electrical Test、FA 的闭环。"],
        ["A+ 级", "MUF / Underfill / Thermal Materials", "按 Thermal x Mechanical x Moisture x Processability x Reliability 做多目标优化。"],
        ["A+ 级", "TCB 与 Hybrid Bonding 双路线", "近期抓 TCB/MUF/NCF 良率，中期做 Hybrid Bonding Test Vehicle，长期面向 HBM5。"],
      ],
    },
    prompt: "你是 HBM 产业洞察专家。请从 DRAM、TSV、堆叠键合、Base Die、先进封装、热管理、可靠性测试和客户认证角度输出系统级洞察，并区分公开事实、产业推演和规划 Benchmark。",
  },
  {
    id: "optical",
    name: "光电互联",
    category: "Networking",
    subtitle: "AI 数据中心光互联产业洞察",
    status: "Planned",
    updatedAt: "待更新",
    skill: "optical-interconnect-insight",
    conclusions: [
      ["需求拉动", "高", "AI 集群规模扩大推动交换、光模块、硅光和 CPO 关注度上升。"],
      ["路线分歧", "中高", "可插拔光模块、LPO、硅光和 CPO 将在成本、功耗和可维护性之间竞争。"],
      ["国产机会", "中", "机会集中在光模块、硅光封装、测试和部分设备材料。"],
    ],
    findings: ["光互联瓶颈来自带宽、功耗、成本和可维护性的共同约束。", "CPO 是长期方向，但短期仍需看生态导入节奏。"],
    chain: [["器件", "激光器、调制器、探测器"], ["模块", "800G/1.6T 光模块"], ["系统", "交换机、AI 集群网络"]],
    risks: ["路线切换不确定", "客户导入节奏波动", "高速测试门槛高"],
    actions: ["建立 LPO/CPO/硅光对比表", "补供应商矩阵", "补 AI 集群网络需求模型"],
    prompt: "你是 AI 数据中心光电互联产业洞察专家。请从带宽、功耗、成本、可维护性、客户导入和供应链角度分析光模块、硅光、LPO、CPO 等路线。",
  },
  {
    id: "pcb",
    name: "PCB",
    category: "Board & Components",
    subtitle: "AI 服务器 PCB 产业洞察",
    status: "Planned",
    skill: "pcb-insight",
    conclusions: [
      ["价值量提升", "中高", "AI 服务器推动高层数、高速低损耗和电源完整性要求提升。"],
      ["材料约束", "中", "低损耗覆铜板、铜箔、树脂和玻纤布影响性能与良率。"],
      ["竞争格局", "中", "头部 PCB 厂和材料厂受益于认证、良率和客户绑定。"],
    ],
    findings: ["PCB 从成本件转向性能约束件。", "高速信号、电源完整性和散热协同决定 AI 主板稳定性。"],
    chain: [["材料", "铜箔、树脂、玻纤布、低损耗覆铜板"], ["制造", "多层压合、钻孔、电镀、阻抗控制"], ["客户", "AI 服务器 ODM、云厂商"]],
    risks: ["客户集中", "材料认证慢", "价格周期波动"],
    actions: ["补 AI 服务器 PCB 层数和价值量模型", "建立材料供应链表", "拆出 HDI/高速板/电源板机会"],
    prompt: "你是 AI 服务器 PCB 产业洞察专家。请围绕高层数、高速信号、电源完整性、低损耗材料、良率、客户认证和供应链格局输出产业洞察。",
  },
];

const users = [
  ["Jason", "Owner", "全部主题", "Active"],
  ["Glass Expert", "Expert", "玻璃基板", "Invited"],
  ["Memory Expert", "Expert", "HBM", "Invited"],
  ["Strategy Viewer", "Viewer", "Published reports", "Active"],
];

const glassArchive = {
  kicker: "GLASS-CORE-INSIGHT v1.0 · AI COMPUTING HARDWARE INSIGHT",
  title: "Glass Core（玻璃基板）产业洞察",
  subtitle: "从材料、工艺、设备到全球竞争格局：日韩台为何领先、美国如何定义路线、中国应从哪里突破",
  thesis: "核心判断：Glass Core 的竞争本质不是“谁先做出一块玻璃”，而是“谁先把大尺寸玻璃、TGV、铜金属化、细线 RDL、可靠性和客户验证闭环成可量产平台”。",
  meta: "截至 2026-07-07 ｜ 研究口径：公开权威资料 + 产业链推演 ｜ 规划 Benchmark 非行业统一标准",
  pages: [
    {
      id: "p1",
      no: "P1",
      title: "产业链全景",
      question: "Glass Core 产业价值到底掌握在哪些环节、哪些区域？",
      takeaway: "2026 年产业处于“多家试验线/样品线 → 量产验证”的临界区。真正稀缺的不是玻璃原片，而是跨越材料、TGV、金属化、RDL、检测、可靠性和 AI/HPC 客户验证的系统能力。",
      cards: [
        ["JKT 第一梯队", "生态型优势", "日本掌握特种玻璃、化学材料、精密设备；韩国加速把玻璃芯材料与 FC-BGA 载板能力闭环；台湾拥有先进封装与高端客户验证场景。"],
        ["US 第二梯队", "路线定义型优势", "Intel 用 AI/HPC 大封装需求定义技术目标；美国通过 CHIPS/NAPMP 支持 glass-core packaging ecosystem，并依托设备与工艺控制能力建立先进封装体系。"],
        ["CN 第三梯队", "制造追赶型优势", "显示玻璃、精密加工、激光、湿法、电镀和面板搬运具有可迁移基础；但半导体级大板良率、超细 RDL、可靠性数据库和 AI 客户量产认证仍是核心 Gap。"],
      ],
      flow: ["Glass Core", "材料", "工艺", "设备", "先进封装", "AI GPU / ASIC", "AI Server"],
    },
    {
      id: "p2",
      no: "P2",
      title: "材料体系分析",
      question: "哪些材料是真正瓶颈，玻璃芯是否会替代现有材料体系？",
      takeaway: "Glass Core 不是“用玻璃替掉 ABF”这么简单。近中期最可能的主流形态是 Glass Core + Organic Build-up / RDL 的混合结构，真正机会来自界面、附着、CTE 匹配、低损耗和大板均匀性。",
      table: {
        heads: ["材料", "核心 KPI", "全球龙头", "中国 Gap", "中国建议"],
        rows: [
          ["Glass Substrate", "CTE、TTV、Bow/Warpage、Ra、强度、介电损耗", "AGC、NEG、Corning、SCHOTT、HOYA", "封装专用玻璃 composition IP、超低缺陷大板、TGV 适配", "优先做“玻璃+TGV+金属化”的联合材料平台，不单独卖原片"],
          ["Photoresist", "Resolution、CDU、玻璃/金属附着、耐电镀、Panel 涂布均匀性", "TOK、JSR、DuPont/Qnity", "厚膜解析度、大板均匀性、低残留", "与曝光/电镀设备共开发，不做孤立材料认证"],
          ["Copper Material", "Seed continuity、adhesion、via fill void、uniformity、stress", "Atotech/MKS、DuPont/Qnity、JCU、Uyemura", "高 AR 与低应力、高均匀性的深孔填充", "建立“孔型×药水×波形×设备”联合 DOE 数据库"],
          ["ABF / Dielectric", "低 Dk/Df、附着力、低温固化、层间可靠性", "Ajinomoto、JSR、DuPont、Resonac", "高端 Build-up 膜、玻璃界面可靠性", "不要以替代 ABF 为唯一叙事；优先攻玻璃界面兼容"],
        ],
      },
    },
    {
      id: "p3",
      no: "P3",
      title: "工艺体系分析",
      question: "Glass Core 真正卡在哪些工艺，哪个步骤决定量产成败？",
      takeaway: "量产瓶颈不是单一 TGV 打孔，而是孔形成 → 清洗/活化 → Seed 连续性 → 深孔铜填充 → CMP → 细线 RDL → 大板检测的累积良率。",
      table: {
        heads: ["工艺", "Benchmark / KPI", "中国 Gap", "五年机会", "中国建议"],
        rows: [
          ["TGV Formation", "Laser modification+etch 与 CO2 direct drill 双路线；看孔径、pitch、AR、crack、holes/s", "HVM throughput 与 defect ppm", "高密度 TGV", "不要押单路线，建立双工艺 test vehicle"],
          ["Seed Layer", "sidewall coverage、adhesion、continuity、stress", "高 AR sidewall 连续性", "ALD / advanced seed", "发展薄种子+高覆盖替代路线"],
          ["Copper Plating", "void、seam、uniformity、stress、fill time", "高 AR + Panel 均匀", "最大国产机会之一", "药水-波形-夹具-流场联合优化"],
          ["RDL", "近中期量产争夺 5/5 μm 级，2-5 μm 为工业化方向", "Panel distortion / overlay", "2-5 μm 工业化", "以 adaptive lithography + AOI 做闭环"],
          ["Inspection", "sub-micron AOI、3D metrology、TGV 内部缺陷检测", "内部孔缺陷/大板高速检测", "最确定设备机会", "优先投资 inline metrology"],
        ],
      },
    },
    {
      id: "p4",
      no: "P4",
      title: "设备体系分析",
      question: "哪些设备最可能形成新一轮卡位与国产替代？",
      takeaway: "Glass Core 给设备行业带来的最大变化是从 300 mm wafer 思维转向 510×515 / 600×600 / 650×650 mm Panel 思维。最值得下注的是 TGV、Panel 光刻、PVD/Seed、深孔电镀、AOI/3D Metrology、Warpage 与自动搬运。",
      table: {
        heads: ["设备", "对应工艺", "核心 KPI", "国产机会", "建议"],
        rows: [
          ["Laser Drilling / Modification", "TGV", "孔径/锥度、crack、holes/s、AR", "★★★★★", "绑定蚀刻/检测形成整线"],
          ["Electro Plating", "TGV fill / RDL", "void-free、uniformity、current density", "★★★★★", "优先国产突破"],
          ["AOI / 3D Metrology", "RDL / TGV", "sub-μm detection、3D、false call", "★★★★★", "做 inline + AI defect classification"],
          ["Warpage Inspection", "全流程", "μm-scale map、thermal warpage", "★★★★★", "低成本大板在线测量"],
          ["Panel Handling", "全流程搬运", "breakage ppm、edge contact、flatness support", "★★★★★", "以显示面板经验迁移封装"],
        ],
      },
    },
    {
      id: "p5",
      no: "P5",
      title: "全球竞争格局",
      question: "为什么首先在日韩台形成？美国如何定义方向？中国到底处于什么位置？",
      takeaway: "全球竞争不是“三个地区同时做同一件事”。日韩台负责把产业链做成，美国负责把需求和架构定义清楚，中国的机会在于把大规模制造、设备国产化和成本工程做出来。",
      cards: [
        ["第一梯队 JKT", "为什么先形成？", "日本有特种玻璃、光刻胶、CMP、ABF、精密设备；韩国有 FC-BGA 与大客户协同；台湾有先进封装与客户验证场景。"],
        ["第二梯队 US", "如何定义路线？", "Intel 用 AI/HPC 大封装需求定义技术目标，美国政策和设备生态推动 glass-core packaging ecosystem。"],
        ["第三梯队 CN", "当前真实位置", "优势在显示玻璃、脆性材料加工、激光、湿法、电镀和自动化；短板是长期可靠性数据、先进 RDL overlay、国际头部客户认证。"],
      ],
    },
    {
      id: "p6",
      no: "P6",
      title: "未来技术路线",
      question: "未来五年 Glass Core 会沿哪几条路线演进？",
      takeaway: "未来五年的主线不是“全玻璃替代一切”，而是从 Glass Core + Organic Build-up 起步，逐步走向大 Panel、细 RDL、光电共封装与系统级封装。",
      cards: [
        ["Route A", "Glass Core + ABF Build-up", "近中期主航道：用玻璃解决刚性、平整度、尺寸稳定性，保留有机 build-up 做细线与多层。"],
        ["Route B", "Glass Interposer + Organic Substrate", "适合大尺寸与成本敏感场景，可能先替代部分 silicon interposer / large-area interposer 功能。"],
        ["Route C", "CPO / Optical Integration", "利用玻璃电学、光学与尺寸稳定性，承接光引擎、无源器件、低损耗互连。"],
      ],
    },
    {
      id: "p7",
      no: "P7",
      title: "中国企业建议",
      question: "未来中国最值得突破哪些方向，如何避免低水平重复投资？",
      takeaway: "中国不应把 Glass Core 定义为“再建一条玻璃线”，而应定义为先进封装制造平台争夺战。最优策略是优先攻下可形成系统壁垒的战场。",
      cards: [
        ["S", "大板 AOI / 3D Metrology / Warpage", "所有路线都需要，且 HVM 必须 inline。KPI：sub-μm defect capture、TGV 3D、600 mm map、低 false call。"],
        ["S", "TGV + Metallization 联合平台", "单独打孔没有壁垒，孔形成到无空洞铜填充才是产品。"],
        ["S", "Hybrid Glass + ABF / RDL", "最接近首批量产结构，重点看 adhesion、2-5 μm roadmap、warpage、TCT/HAST。"],
        ["A+", "Reliability Test Vehicle & Standard", "没有长期数据就进不了 AI/HPC 供应链；要建立失效库、跨批次 correlation、客户联合认证。"],
      ],
    },
  ],
  sources: [
    "Intel Newsroom — Glass substrates for advanced packaging",
    "Nippon Electric Glass — Large TGV glass core substrates",
    "DNP — TGV glass core pilot line",
    "Samsung Electro-Mechanics — Glass substrate pilot / mass production target",
    "U.S. Department of Commerce — CHIPS advanced packaging awards",
    "Onto Innovation / LPKF — HVM collaboration for glass core substrates",
    "Ajinomoto — ABF high-performance package substrate material",
  ],
};

let activeTopicId = "glass-core";
let activeView = "industry";
const skillDrafts = {};
const skillCache = {};
let insightRefreshVersion = "20260708";
let skillPanelOpen = false;
let activeJobTimer = null;
let activeJob = null;
const reportTopics = {
  "glass-core": {
    path: "reports/glass-core-report.html",
    title: "Glass Core 产业洞察完整报告",
  },
  hbm: {
    path: "reports/hbm-report.html",
    title: "HBM 产业深度洞察完整报告",
  },
};

const topicList = document.querySelector("#topicList");
const navItems = document.querySelectorAll("[data-view-target]");
const viewSections = document.querySelectorAll("[data-view-section]");
const jobSteps = [
  ["准备上下文", "读取当前报告、Skill 和归档元数据"],
  ["执行 Skill", "调用 AI 生成新版洞察草稿"],
  ["生成报告", "输出 HTML 报告和本次更新摘要"],
  ["等待审核", "专家确认内容后再归档"],
  ["归档 GitHub", "提交报告、Skill 和 metadata commit"],
];

function activeTopic() {
  return topics.find((topic) => topic.id === activeTopicId) || topics[0];
}

function renderTopics() {
  topicList.innerHTML = topics
    .map((topic) => `
      <button class="topic-button ${topic.id === activeTopicId ? "active" : ""}" type="button" data-topic="${topic.id}">
        <strong>${topic.name}</strong>
        <span>${topic.category}</span>
      </button>
    `)
    .join("");
}

function renderIndustry() {
  const topic = activeTopic();
  const isReportTopic = Boolean(reportTopics[topic.id]);
  document.querySelector(".industry-layout").classList.toggle("report-only", isReportTopic && !skillPanelOpen);
  document.querySelector(".skill-card").hidden = isReportTopic && !skillPanelOpen;
  document.querySelector("#toggleSkill").textContent = skillPanelOpen ? "收起 Skill" : "查看 Skill";
  document.querySelector("#toggleSkill").hidden = !isReportTopic;
  document.querySelector("#topicCategory").hidden = isReportTopic;
  document.querySelector("#topicSubtitle").hidden = isReportTopic;
  document.querySelector("#topicStatus").hidden = isReportTopic;
  document.querySelector("#topicCategory").textContent = topic.category;
  document.querySelector("#topicTitle").textContent = topic.name;
  document.querySelector("#topicSubtitle").textContent = topic.subtitle;
  document.querySelector("#topicStatus").textContent = topic.status;
  document.querySelector("#updatedAt").textContent = `更新时间：${topic.updatedAt || "未更新"}`;
  document.querySelector("#skillName").textContent = topic.skill;
  renderSkillEditor(topic);
  updateTaskEntry();

  renderDeepDive(topic);
}

async function renderSkillEditor(topic) {
  const textarea = document.querySelector("#skillPrompt");
  const owner = document.querySelector("#skillOwner");
  textarea.value = skillDrafts[topic.id] || "正在加载 Skill...";
  owner.textContent = skillDrafts[topic.id] ? "Draft saved locally" : "Loading from GitHub skill";

  if (skillDrafts[topic.id]) return;

  const path = `skills/${topic.skill}.md`;
  try {
    if (!skillCache[path]) {
      const response = await fetch(path, { cache: "no-store" });
      if (!response.ok) throw new Error(`Cannot load ${path}`);
      skillCache[path] = await response.text();
    }
    if (activeTopicId === topic.id) {
      textarea.value = skillCache[path];
      owner.textContent = "Loaded from skill directory";
    }
  } catch (error) {
    if (activeTopicId === topic.id) {
      textarea.value = topic.prompt;
      owner.textContent = "Fallback prompt";
    }
  }
}

function currentSkillContent() {
  return document.querySelector("#skillPrompt").value;
}

function setModalOpen(id, open) {
  document.querySelector(`#${id}`).hidden = !open;
}

function closeModal(id) {
  setModalOpen(id, false);
}

function openInsightJobModal() {
  const topic = activeTopic();
  document.querySelector("#jobTopicTitle").textContent = `${topic.name} 洞察任务`;
  document.querySelector("#jobSkillName").value = topic.skill;
  if (activeJob && activeJob.topicId === topic.id) {
    document.querySelector("#jobBrief").value = activeJob.brief;
    document.querySelector("#jobCommitTitle").textContent = activeJob.title;
    document.querySelector("#jobCommitDetail").textContent = activeJob.detail;
    renderJobSteps(activeJob.step, activeJob.status === "done");
    document.querySelector("#startInsightJob").disabled = activeJob.status === "running";
  } else {
    document.querySelector("#jobBrief").value = "";
    document.querySelector("#jobCommitTitle").textContent = "等待任务开始";
    document.querySelector("#jobCommitDetail").textContent = "任务完成后会生成报告归档和 GitHub commit 记录。";
    renderJobSteps(-1);
    document.querySelector("#startInsightJob").disabled = false;
  }
  setModalOpen("insightJobModal", true);
}

function updateTaskEntry() {
  const button = document.querySelector("#openTask");
  const topic = activeTopic();
  const hasTopicJob = activeJob && activeJob.topicId === topic.id;
  button.hidden = !hasTopicJob;
  if (!hasTopicJob) return;
  button.textContent = activeJob.status === "running" ? "打开任务（运行中）" : "打开任务";
}

function renderJobSteps(activeIndex, doneAll = false) {
  document.querySelector("#jobSteps").innerHTML = jobSteps
    .map(([title, detail], index) => {
      const state = doneAll || index < activeIndex ? "done" : index === activeIndex ? "active" : "";
      return `<li class="${state}"><div><strong>${title}</strong><span>${detail}</span></div></li>`;
    })
    .join("");
}

function startInsightJob() {
  const topic = activeTopic();
  const brief = document.querySelector("#jobBrief").value.trim() || "按当前 Skill 全量刷新洞察报告。";
  const title = document.querySelector("#jobCommitTitle");
  const detail = document.querySelector("#jobCommitDetail");
  const button = document.querySelector("#startInsightJob");
  let index = 0;

  if (activeJobTimer) window.clearInterval(activeJobTimer);
  activeJob = {
    topicId: topic.id,
    brief,
    step: index,
    status: "running",
    title: "任务执行中",
    detail: `主题：${topic.name}；更新重点：${brief}`,
  };
  updateTaskEntry();
  button.disabled = true;
  title.textContent = activeJob.title;
  detail.textContent = activeJob.detail;
  renderJobSteps(index);

  activeJobTimer = window.setInterval(() => {
    index += 1;
    if (index < jobSteps.length) {
      activeJob.step = index;
      renderJobSteps(index);
      return;
    }

    window.clearInterval(activeJobTimer);
    activeJobTimer = null;
    button.disabled = false;
    renderJobSteps(jobSteps.length, true);
    const now = new Date();
    const stamp = now.toLocaleString("zh-CN", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
    });
    topic.updatedAt = stamp;
    insightRefreshVersion = String(now.getTime());
    document.querySelector("#updatedAt").textContent = `更新时间：${stamp}`;
    if (reportTopics[topic.id]) renderReportArchive(topic);
    activeJob = {
      ...activeJob,
      step: jobSteps.length,
      status: "done",
      title: "任务已生成待归档草稿",
      detail: `下一步接后端后，会提交 archive/${topic.id}/${now.toISOString().slice(0, 10)}.html 和 skills/${topic.skill}.md 到 GitHub。`,
    };
    title.textContent = activeJob.title;
    detail.textContent = activeJob.detail;
    updateTaskEntry();
  }, 900);
}

function archiveCurrentReport() {
  const topic = activeTopic();
  const date = new Date().toISOString().slice(0, 10);
  document.querySelector("#jobCommitTitle").textContent = "已生成归档计划";
  document.querySelector("#jobCommitDetail").textContent = `将归档当前报告到 archive/${topic.id}/${date}.html，并更新 metadata/${topic.id}.json。`;
  activeJob = {
    topicId: topic.id,
    brief: document.querySelector("#jobBrief").value.trim(),
    step: jobSteps.length,
    status: "done",
    title: "已生成归档计划",
    detail: `将归档当前报告到 archive/${topic.id}/${date}.html，并更新 metadata/${topic.id}.json。`,
  };
  updateTaskEntry();
  renderJobSteps(jobSteps.length, true);
}

function openFullSkillEditor() {
  const topic = activeTopic();
  const content = currentSkillContent();
  document.querySelector("#fullSkillName").textContent = `${topic.skill} 全屏编辑`;
  document.querySelector("#fullSkillPrompt").value = content;
  document.querySelector("#skillSaveStatus").textContent = "未保存";
  renderSkillPreview(content);
  setModalOpen("skillEditorModal", true);
}

function renderSkillPreview(content) {
  const lines = content.split("\n");
  const headings = lines.filter((line) => /^#{1,3}\s+/.test(line)).slice(0, 8);
  const hasFrontmatter = content.trimStart().startsWith("---");
  const hasName = /name:\s*\S+/.test(content);
  const hasDescription = /description:\s*\S+/.test(content);
  const wordCount = content.trim() ? content.trim().split(/\s+/).length : 0;
  document.querySelector("#skillPreview").innerHTML = `
    <h4>结构检查</h4>
    <ul>
      <li>Frontmatter：${hasFrontmatter ? "已包含" : "缺失"}</li>
      <li>name 字段：${hasName ? "已包含" : "缺失"}</li>
      <li>description 字段：${hasDescription ? "已包含" : "缺失"}</li>
      <li>内容规模：约 ${wordCount} 个词元/片段</li>
      <li>主要标题：${headings.length ? headings.join(" / ") : "暂无 Markdown 标题"}</li>
    </ul>
  `;
}

function saveFullSkill() {
  const topic = activeTopic();
  const content = document.querySelector("#fullSkillPrompt").value;
  skillDrafts[topic.id] = content;
  document.querySelector("#skillPrompt").value = content;
  document.querySelector("#skillOwner").textContent = "Draft saved locally";
  document.querySelector("#skillSaveStatus").textContent = `已生成 GitHub 归档计划：skills/${topic.skill}.md`;
}

function renderDeepDive(topic) {
  const panel = document.querySelector("#deepDivePanel");
  if (!topic.deepDive) {
    panel.hidden = true;
    return;
  }

  panel.hidden = false;
  panel.classList.toggle("archive-mode", Boolean(reportTopics[topic.id]));
  if (reportTopics[topic.id]) {
    renderReportArchive(topic);
    return;
  }

  panel.innerHTML = `
    <div class="section-title">
      <div>
        <p class="eyebrow">CHIF Deep Dive</p>
        <h4>${topic.deepDive.title}</h4>
      </div>
      <span>${topic.deepDive.note}</span>
    </div>

    <section class="deep-grid">
      <article class="panel wide-panel">
        <p class="eyebrow">Benchmark / KPI</p>
        <h4>关键指标与 Benchmark</h4>
        <div class="table-wrap">
          <table>
            <thead>
              <tr><th>维度</th><th>核心 KPI</th><th>Benchmark</th><th>产业含义</th></tr>
            </thead>
            <tbody>
              ${topic.deepDive.benchmarks.map(([dimension, kpi, benchmark, meaning]) => `
                <tr>
                  <td><strong>${dimension}</strong></td>
                  <td>${kpi}</td>
                  <td>${benchmark}</td>
                  <td>${meaning}</td>
                </tr>
              `).join("")}
            </tbody>
          </table>
        </div>
      </article>

      <article class="panel wide-panel">
        <p class="eyebrow">Competition</p>
        <h4>全球竞争矩阵</h4>
        <div class="table-wrap">
          <table>
            <thead>
              <tr><th>阵营</th><th>优势</th><th>短板</th><th>判断</th></tr>
            </thead>
            <tbody>
              ${topic.deepDive.competition.map(([camp, strength, gap, judgment]) => `
                <tr>
                  <td><strong>${camp}</strong></td>
                  <td>${strength}</td>
                  <td>${gap}</td>
                  <td>${judgment}</td>
                </tr>
              `).join("")}
            </tbody>
          </table>
        </div>
      </article>

      <article class="panel">
        <p class="eyebrow">Materials / Process / Equipment</p>
        <h4>材料、工艺、设备拆解</h4>
        <div class="capability-list">
          ${topic.deepDive.capabilities.map(([name, scope, insight]) => `
            <div class="capability-item">
              <strong>${name}</strong>
              <span>${scope}</span>
              <p>${insight}</p>
            </div>
          `).join("")}
        </div>
      </article>

      <article class="panel">
        <p class="eyebrow">China Gap / Opportunity</p>
        <h4>中国 Gap 与五年机会</h4>
        <div class="opportunity-list">
          ${topic.deepDive.opportunities.map(([level, title, action]) => `
            <div class="opportunity-item">
              <span>${level}</span>
              <strong>${title}</strong>
              <p>${action}</p>
            </div>
          `).join("")}
        </div>
      </article>
    </section>
  `;
}

function renderReportArchive(topic) {
  const panel = document.querySelector("#deepDivePanel");
  const report = reportTopics[topic.id];
  const reportPath = `${report.path}?v=${insightRefreshVersion}`;

  panel.innerHTML = `
    <section class="archive-embed">
      <iframe id="insightReportFrame" class="archive-frame" src="${reportPath}" title="${report.title}"></iframe>
    </section>
  `;
}

function updateInsight() {
  openInsightJobModal();
}

function downloadSkill() {
  const topic = activeTopic();
  const content = document.querySelector("#skillPrompt").value;
  const blob = new Blob([content], { type: "text/markdown;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `${topic.skill}.md`;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
}

function renderSkillRegistry() {
  document.querySelector("#skillRegistry").innerHTML = topics
    .map((topic) => `
      <div class="registry-item">
        <strong>${topic.skill}</strong>
        <span>${topic.name} · ${topic.status}</span>
      </div>
    `)
    .join("");
}

function renderPermissions() {
  document.querySelector("#permissionRows").innerHTML = users
    .map(([name, role, scope, status]) => `
      <tr>
        <td>${name}</td>
        <td>${role}</td>
        <td>${scope}</td>
        <td>${status}</td>
      </tr>
    `)
    .join("");
}

function showView(view) {
  activeView = view;
  document.body.dataset.view = view;
  navItems.forEach((item) => item.classList.toggle("active", item.dataset.viewTarget === view));
  viewSections.forEach((section) => section.classList.toggle("active", section.dataset.viewSection === view));
}

topicList.addEventListener("click", (event) => {
  const button = event.target.closest("[data-topic]");
  if (!button) return;
  activeTopicId = button.dataset.topic;
  skillPanelOpen = false;
  showView("industry");
  renderTopics();
  renderIndustry();
});

navItems.forEach((item) => {
  item.addEventListener("click", () => showView(item.dataset.viewTarget));
});

document.querySelector("#saveSkill").addEventListener("click", () => {
  skillDrafts[activeTopicId] = document.querySelector("#skillPrompt").value;
  document.querySelector("#skillOwner").textContent = "Draft saved locally";
});

document.querySelector("#downloadSkill").addEventListener("click", downloadSkill);

document.querySelector("#updateInsight").addEventListener("click", updateInsight);

document.querySelector("#openTask").addEventListener("click", openInsightJobModal);

document.querySelector("#openFullSkill").addEventListener("click", openFullSkillEditor);

document.querySelector("#downloadFullSkill").addEventListener("click", () => {
  document.querySelector("#skillPrompt").value = document.querySelector("#fullSkillPrompt").value;
  downloadSkill();
});

document.querySelector("#saveSkillToGithub").addEventListener("click", saveFullSkill);

document.querySelector("#fullSkillPrompt").addEventListener("input", (event) => {
  document.querySelector("#skillSaveStatus").textContent = "有未保存修改";
  renderSkillPreview(event.target.value);
});

document.querySelector("#startInsightJob").addEventListener("click", startInsightJob);

document.querySelector("#archiveCurrentReport").addEventListener("click", archiveCurrentReport);

document.querySelectorAll("[data-close-modal]").forEach((button) => {
  button.addEventListener("click", () => closeModal(button.dataset.closeModal));
});

document.querySelector("#toggleSkill").addEventListener("click", () => {
  skillPanelOpen = !skillPanelOpen;
  renderIndustry();
});

document.querySelector("#resetSkill").addEventListener("click", () => {
  delete skillDrafts[activeTopicId];
  renderIndustry();
  document.querySelector("#skillOwner").textContent = "Expert editable";
});

renderTopics();
renderIndustry();
renderSkillRegistry();
renderPermissions();
showView(activeView);
