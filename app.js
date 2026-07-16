const dimensions = ["专业基础", "编程实现", "系统设计", "算法数学", "工程质量", "业务理解", "创新探索", "协作表达"];

const roles = [
  {
    id: "leda-eda-algorithm", company: "立芯科技", title: "EDA 算法工程师", family: "研发类 · EDA 核心算法",
    summary: "面向数字电路设计实现与物理优化研发核心算法，将图论、计算几何和组合优化转化为可扩展的工业软件能力。",
    scores: [5, 5, 4, 5, 5, 4, 5, 4], match: "算法型",
    skills: ["C++", "数据结构与算法", "图论与计算几何", "组合优化", "Linux", "数字集成电路基础"],
    evidence: ["实现布局、布线、划分或时序优化算法并在标准数据集评测", "解释算法复杂度、解质量与运行时间之间的权衡", "构建可复现的性能基准并定位内存或并行瓶颈", "阅读 EDA 论文后完成工程化复现与改进"],
    courses: "数据结构、算法设计、离散数学、图论、计算几何、运筹学、数字集成电路",
    contests: "ICPC / CCPC、蓝桥杯、全国大学生集成电路创新创业大赛、数学建模竞赛",
    projects: "开发一个迷你布局布线或逻辑优化工具，提供数据格式、算法设计、可视化与基准报告",
    advice: "先建立强算法与 C++ 系统能力，再补足芯片设计流程，逐步成长为 EDA 核心算法专家或技术架构师。",
    career: ["EDA 算法工程师", "高级研发工程师", "算法专家 / EDA 架构师"], source: "https://www.ledatech.cn/gywm"
  },
  {
    id: "leda-eda-application", company: "立芯科技", title: "EDA 应用工程师", family: "产品与技术类 · 数字后端应用",
    summary: "连接 EDA 产品与芯片设计场景，完成工具验证、设计流程搭建、问题定位和客户技术支持。",
    scores: [5, 4, 4, 3, 5, 5, 4, 5], match: "复合型",
    skills: ["数字后端流程", "Shell / Tcl / Python", "Linux", "时序分析", "工具验证", "技术沟通"],
    evidence: ["搭建从 RTL 到 GDSII 的练习流程并记录关键检查点", "用脚本自动化设计任务并量化效率或质量提升", "针对时序、拥塞或功耗问题形成定位报告", "将复杂工具问题整理为可复用的案例与操作文档"],
    courses: "数字逻辑、集成电路设计、计算机组成原理、脚本程序设计、软件测试、工程沟通",
    contests: "全国大学生集成电路创新创业大赛、电子设计竞赛、服务外包创新创业大赛、挑战杯",
    projects: "基于开源 EDA 工具完成一次小型芯片后端实现，并开发自动化运行、检查和报告脚本",
    advice: "以数字设计流程和脚本能力为起点，积累真实问题闭环经验，可向资深应用工程师、产品专家或解决方案架构师发展。",
    career: ["EDA 应用工程师", "资深 AE / 产品验证", "产品专家 / 解决方案架构师"], source: "https://www.ledatech.cn/gywm"
  },
  {
    id: "ssc-ai-computing", company: "上海超级计算中心", title: "计算应用工程师（人工智能）", family: "计算应用类 · 智能计算",
    summary: "面向科研与产业用户开展人工智能计算应用、模型适配和算力优化，让算法在异构高性能平台上稳定运行。",
    scores: [5, 4, 5, 5, 5, 5, 4, 5], match: "应用研究型",
    skills: ["Python / C++", "机器学习与深度学习", "GPU 并行计算", "Linux 集群", "模型训练与推理", "科研需求分析"],
    evidence: ["在 GPU 集群完成模型训练并记录扩展效率、吞吐量和资源占用", "比较单机、多卡和多节点方案的性能与成本", "将科研问题抽象为数据、算法和算力配置方案", "形成可复现的环境、作业脚本、评测与技术报告"],
    courses: "机器学习、深度学习、并行计算、计算机体系结构、数值分析、Linux 系统管理",
    contests: "全国大学生计算机系统能力大赛、Kaggle、数学建模竞赛、ASC 世界大学生超级计算机竞赛",
    projects: "在集群上完成一个科学智能或大模型训练任务，提供资源配置、性能剖析和扩展性报告",
    advice: "同时培养 AI 算法、并行计算和科研沟通能力，可向智能计算专家、HPC 应用专家或算力解决方案负责人发展。",
    career: ["计算应用工程师", "高级 HPC / AI 工程师", "智能计算专家 / 解决方案负责人"], source: "https://rsj.sh.gov.cn/tzpgg_17408/20240717/t0035_1426098.html"
  },
  {
    id: "ssc-platform-software", company: "上海超级计算中心", title: "研发工程师（软件开发）", family: "研发类 · 超算服务平台",
    summary: "研发高性能计算服务平台及资源管理系统，整合作业、项目、数据、权限、计费和技术支持能力。",
    scores: [5, 5, 5, 3, 5, 5, 4, 4], match: "平台型",
    skills: ["Java / Go / Python", "Linux", "分布式系统", "作业调度", "容器与云原生", "监控与可观测性"],
    evidence: ["开发面向异构资源的任务调度或资源管理系统", "以压测数据说明并发、可靠性和扩展性设计", "实现权限、审计、监控和故障恢复的完整闭环", "通过 API、文档和自动化测试支持多人协作交付"],
    courses: "操作系统、计算机网络、数据库、分布式系统、云计算、软件工程、信息安全",
    contests: "全国大学生计算机系统能力大赛、服务外包创新创业大赛、ICPC / CCPC、互联网+",
    projects: "开发一个轻量算力服务门户，包含队列调度、任务状态、资源监控、用户权限和审计日志",
    advice: "先打牢后端与 Linux 系统能力，再深入调度、异构资源和平台可靠性，向超算平台专家或系统架构师发展。",
    career: ["平台研发工程师", "高级系统工程师", "超算平台专家 / 系统架构师"], source: "https://www.ssc.net.cn/resource-xfinity.html"
  },
  {
    id: "mihoyo-client", company: "米哈游", title: "游戏客户端开发", family: "程序与技术类 · 客户端",
    summary: "实现玩法、交互和表现系统，并处理多平台适配、性能优化与工具链协作。",
    scores: [4, 5, 4, 4, 5, 5, 4, 4], match: "体验型",
    skills: ["C++ / C#", "Unity / Unreal", "计算机图形学", "数据结构与算法", "性能分析", "游戏玩法理解"],
    evidence: ["完整可玩的作品，明确个人负责模块", "帧率、内存、包体与加载速度的优化对比", "复杂玩法系统的状态与模块设计说明", "跨策划、美术和程序协作的迭代记录"],
    courses: "数据结构、计算机图形学、游戏引擎原理、设计模式、人机交互、计算机网络",
    contests: "中国大学生计算机设计大赛、Game Jam、服务外包创新创业大赛、独立游戏开发赛事",
    projects: "制作一款 3D 可玩 Demo，包含核心循环、动画、UI、存档和性能分析",
    advice: "先建立扎实的 C++ 与引擎能力，再选择玩法、图形、引擎或工具链方向深入。",
    career: ["客户端开发", "高级客户端 / 方向负责人", "引擎专家 / 技术负责人"], source: "https://join.mihoyo.com/"
  },
  {
    id: "mihoyo-server", company: "米哈游", title: "游戏服务器开发", family: "程序与技术类 · 服务端",
    summary: "围绕玩法逻辑、在线服务和基础设施建设高并发、高可用的游戏服务器。",
    scores: [5, 5, 5, 3, 5, 5, 3, 4], match: "平台型",
    skills: ["C++ / Go", "网络编程", "数据库与缓存", "分布式系统", "高并发与高可用", "游戏业务逻辑"],
    evidence: ["多人在线服务，包含匹配、房间或状态同步", "基于压测数据解释容量规划与优化方案", "缓存、限流、熔断和故障恢复的设计", "数据库一致性与异常场景测试记录"],
    courses: "操作系统、计算机网络、数据库、分布式系统、软件工程、信息安全",
    contests: "ICPC / CCPC、蓝桥杯、服务外包创新创业大赛、互联网+",
    projects: "开发多人游戏后端，完成鉴权、匹配、排行榜、数据持久化和可观测性",
    advice: "从玩法服务和基础组件起步，逐步承担大型在线系统架构，走向服务端专家或技术负责人。",
    career: ["服务器开发", "高级服务端工程师", "后端架构师 / 技术负责人"], source: "https://join.mihoyo.com/"
  },
  {
    id: "mihoyo-ta", company: "米哈游", title: "技术美术 TA", family: "美术与表现类 · 技术美术",
    summary: "连接美术目标与工程实现，建设渲染效果、资产规范和生产工具，平衡品质与性能。",
    scores: [3, 4, 4, 4, 4, 5, 5, 5], match: "跨界型",
    skills: ["Shader / 渲染管线", "Unity / Unreal", "Python 工具开发", "DCC 软件", "资产规范", "视觉审美"],
    evidence: ["展示 Shader、材质或程序化效果的可交互 Demo", "用工具显著减少重复制作并量化效率提升", "针对不同平台制定资产规格与性能预算", "以拆解文档说明视觉效果的技术实现"],
    courses: "计算机图形学、数字媒体技术、线性代数、程序设计、三维建模、视觉设计基础",
    contests: "中国大学生计算机设计大赛、Game Jam、数字艺术设计大赛、虚拟现实设计赛事",
    projects: "制作风格化渲染场景，并开发一个美术资产检查或批处理工具",
    advice: "建立美术表达与编程的双重基本功，再向渲染 TA、流程 TA、技术美术负责人发展。",
    career: ["初级技术美术", "专项 TA / 高级 TA", "TA Lead / 图形技术专家"], source: "https://join.mihoyo.com/"
  }
];

let activeCompany = "全部";
let activeRoleId = roles[0].id;
let sortDescending = false;

const companyFilters = document.querySelector("#companyFilters");
const roleList = document.querySelector("#roleList");
const profileDetail = document.querySelector("#profileDetail");
const searchInput = document.querySelector("#roleSearch");
const emptyState = document.querySelector("#emptyState");

function renderFilters() {
  companyFilters.innerHTML = ["全部", "立芯科技", "上海超级计算中心", "米哈游"].map(company =>
    `<button type="button" class="filter-button ${company === activeCompany ? "active" : ""}" data-company="${company}" aria-pressed="${company === activeCompany}">${company}</button>`
  ).join("");
}

function filteredRoles() {
  const term = searchInput.value.trim().toLowerCase();
  return roles.filter(role => (activeCompany === "全部" || role.company === activeCompany) &&
    [role.title, role.company, role.family, ...role.skills].join(" ").toLowerCase().includes(term));
}

function renderRoleList() {
  const visible = filteredRoles();
  if (visible.length && !visible.some(role => role.id === activeRoleId)) activeRoleId = visible[0].id;
  roleList.innerHTML = visible.map(role => `
    <button class="role-button ${role.id === activeRoleId ? "active" : ""}" type="button" data-role="${role.id}" aria-pressed="${role.id === activeRoleId}">
      <strong>${role.title}</strong><small>${role.company} · ${role.family.split(" · ")[0]}</small><b aria-hidden="true">›</b>
    </button>`).join("");
  emptyState.hidden = visible.length > 0;
  document.querySelector(".profile-layout").hidden = visible.length === 0;
  if (visible.length) renderProfile(roles.find(role => role.id === activeRoleId));
}

function renderProfile(role) {
  profileDetail.innerHTML = `
    <div class="profile-top">
      <div><span class="company-tag">${role.company} · ${role.family}</span><h3>${role.title}</h3><p>${role.summary}</p></div>
      <div class="match-badge"><strong>${role.match}</strong><small>岗位倾向</small></div>
    </div>
    <div class="detail-grid">
      <div>
        <section class="detail-block"><h4>核心能力关键词</h4><div class="tag-list">${role.skills.map(skill => `<span>${skill}</span>`).join("")}</div></section>
        <section class="detail-block"><h4>能力证据清单</h4><ul class="evidence-list">${role.evidence.map(item => `<li>${item}</li>`).join("")}</ul></section>
        <section class="detail-block"><h4>典型职业路径</h4><div class="career-line">${role.career.map((item, i) => `${i ? '<span>→</span>' : ''}${item}`).join("")}</div></section>
      </div>
      <div class="recommend-grid">
        <div class="recommend-item"><strong>建议课程</strong><p>${role.courses}</p></div>
        <div class="recommend-item"><strong>建议竞赛</strong><p>${role.contests}</p></div>
        <div class="recommend-item"><strong>建议项目</strong><p>${role.projects}</p></div>
        <div class="recommend-item"><strong>发展建议</strong><p>${role.advice}</p></div>
        <a class="source-link" href="${role.source}" target="_blank" rel="noreferrer">查看企业招聘来源 ↗</a>
      </div>
    </div>`;
}

function renderMatrix() {
  const ordered = [...roles].sort((a, b) => sortDescending ? b.scores.reduce((x,y)=>x+y,0) - a.scores.reduce((x,y)=>x+y,0) : roles.indexOf(a) - roles.indexOf(b));
  document.querySelector("#matrixTable").innerHTML = `
    <thead><tr><th scope="col">岗位</th>${dimensions.map(d => `<th scope="col">${d}</th>`).join("")}</tr></thead>
    <tbody>${ordered.map(role => `<tr><td><span class="matrix-company">${role.company}</span><strong>${role.title}</strong></td>${role.scores.map((score, index) => `<td class="score-cell"><span class="score-${score}" aria-label="${dimensions[index]} ${score} 级">${score}</span></td>`).join("")}</tr>`).join("")}</tbody>`;
}

companyFilters.addEventListener("click", event => {
  const button = event.target.closest("[data-company]"); if (!button) return;
  activeCompany = button.dataset.company; renderFilters(); renderRoleList();
});
roleList.addEventListener("click", event => {
  const button = event.target.closest("[data-role]"); if (!button) return;
  activeRoleId = button.dataset.role; renderRoleList();
});
searchInput.addEventListener("input", renderRoleList);
document.querySelector("#resetFilters").addEventListener("click", () => { activeCompany = "全部"; searchInput.value = ""; renderFilters(); renderRoleList(); });
document.querySelector("#sortMatrix").addEventListener("click", event => { sortDescending = !sortDescending; event.currentTarget.textContent = sortDescending ? "恢复默认排序" : "按综合要求排序"; renderMatrix(); });
document.querySelector("#printPage").addEventListener("click", () => window.print());

renderFilters(); renderRoleList(); renderMatrix();
