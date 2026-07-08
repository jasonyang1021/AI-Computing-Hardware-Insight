const topics = [
  {
    id: "glass-core",
    name: "玻璃基板",
    category: "Advanced Packaging",
    subtitle: "先进封装 Glass Core 产业洞察",
    status: "Draft",
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

let activeTopicId = "glass-core";
let activeView = "industry";
const skillDrafts = {};

const topicList = document.querySelector("#topicList");
const navItems = document.querySelectorAll("[data-view-target]");
const viewSections = document.querySelectorAll("[data-view-section]");

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
  document.querySelector("#topicCategory").textContent = topic.category;
  document.querySelector("#topicTitle").textContent = topic.name;
  document.querySelector("#topicSubtitle").textContent = topic.subtitle;
  document.querySelector("#topicStatus").textContent = topic.status;
  document.querySelector("#skillName").textContent = topic.skill;
  document.querySelector("#skillPrompt").value = skillDrafts[topic.id] || topic.prompt;

  document.querySelector("#conclusionGrid").innerHTML = topic.conclusions
    .map(([label, score, text]) => `
      <article class="conclusion-card">
        <span>${label}</span>
        <strong>${score}</strong>
        <p>${text}</p>
      </article>
    `)
    .join("");

  document.querySelector("#findingList").innerHTML = topic.findings.map((item) => `<li>${item}</li>`).join("");
  document.querySelector("#riskList").innerHTML = topic.risks.map((item) => `<li>${item}</li>`).join("");
  document.querySelector("#actionList").innerHTML = topic.actions.map((item) => `<li>${item}</li>`).join("");
  document.querySelector("#chainList").innerHTML = topic.chain
    .map(([name, detail]) => `
      <div class="chain-step">
        <strong>${name}</strong>
        <span>${detail}</span>
      </div>
    `)
    .join("");
  renderDeepDive(topic);
}

function renderDeepDive(topic) {
  const panel = document.querySelector("#deepDivePanel");
  if (!topic.deepDive) {
    panel.hidden = true;
    return;
  }

  panel.hidden = false;
  document.querySelector("#deepDiveTitle").textContent = topic.deepDive.title;
  document.querySelector("#deepDiveNote").textContent = topic.deepDive.note;
  document.querySelector("#benchmarkRows").innerHTML = topic.deepDive.benchmarks
    .map(([dimension, kpi, benchmark, meaning]) => `
      <tr>
        <td><strong>${dimension}</strong></td>
        <td>${kpi}</td>
        <td>${benchmark}</td>
        <td>${meaning}</td>
      </tr>
    `)
    .join("");
  document.querySelector("#competitionRows").innerHTML = topic.deepDive.competition
    .map(([camp, strength, gap, judgment]) => `
      <tr>
        <td><strong>${camp}</strong></td>
        <td>${strength}</td>
        <td>${gap}</td>
        <td>${judgment}</td>
      </tr>
    `)
    .join("");
  document.querySelector("#capabilityList").innerHTML = topic.deepDive.capabilities
    .map(([name, scope, insight]) => `
      <div class="capability-item">
        <strong>${name}</strong>
        <span>${scope}</span>
        <p>${insight}</p>
      </div>
    `)
    .join("");
  document.querySelector("#opportunityList").innerHTML = topic.deepDive.opportunities
    .map(([level, title, action]) => `
      <div class="opportunity-item">
        <span>${level}</span>
        <strong>${title}</strong>
        <p>${action}</p>
      </div>
    `)
    .join("");
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
  const labels = {
    industry: "产业洞察",
    academic: "学术洞察",
    skills: "Skills 管理",
    permissions: "权限管理",
  };
  document.querySelector("#pageTitle").textContent = labels[view];
}

topicList.addEventListener("click", (event) => {
  const button = event.target.closest("[data-topic]");
  if (!button) return;
  activeTopicId = button.dataset.topic;
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
