const dimensions = ["专业基础", "编程实现", "系统设计", "算法数学", "工程质量", "业务理解", "创新探索", "协作表达"];

const roles = [
  {
    id: "huawei-software", company: "华为", title: "软件开发工程师", family: "研发类 · 软件与平台",
    summary: "面向通信、云与终端产品完成软件设计、编码、测试和性能优化，强调系统性与工程可靠性。",
    scores: [5, 5, 5, 3, 5, 3, 4, 4], match: "工程型",
    skills: ["C/C++ / Java / Python", "数据结构与算法", "Linux", "网络与操作系统", "DevOps", "软件设计模式"],
    evidence: ["可运行的中大型系统，含架构图、测试与性能指标", "参与开源项目并提交可追溯的 issue 或 PR", "解释一次复杂故障的定位路径与根因", "用 Git 管理多人协作、评审与持续集成"],
    courses: "数据结构、操作系统、计算机网络、软件工程、数据库系统",
    contests: "蓝桥杯、ICPC / CCPC、华为 ICT 大赛、服务外包创新创业大赛",
    projects: "实现高并发服务或分布式任务平台，加入监控、压测、容错与 CI/CD",
    advice: "先成为能独立交付模块的工程师，再向技术专家、系统架构师或项目技术负责人发展。",
    career: ["软件开发工程师", "高级工程师", "技术专家 / 架构师"], source: "https://career.huawei.com/"
  },
  {
    id: "huawei-ai", company: "华为", title: "AI 算法工程师", family: "研发类 · 人工智能",
    summary: "围绕计算机视觉、自然语言处理或大模型开展算法研发、训练优化与工程落地。",
    scores: [5, 4, 4, 5, 4, 4, 5, 3], match: "研究型",
    skills: ["Python / C++", "机器学习与深度学习", "概率统计与线性代数", "PyTorch / TensorFlow", "模型训练与推理", "论文阅读"],
    evidence: ["在公开数据集上建立可复现基线并完成消融实验", "从论文复现到业务场景改进的完整记录", "量化精度、时延、显存和吞吐量的权衡", "将模型封装为可调用服务并持续监控"],
    courses: "线性代数、概率统计、机器学习、深度学习、最优化方法、并行计算",
    contests: "中国大学生计算机设计大赛、Kaggle、华为 ICT 大赛 AI 赛道、全国大学生数学建模竞赛",
    projects: "完成领域小模型或 RAG 系统，提供数据治理、评测、推理优化与部署报告",
    advice: "本科阶段先打牢数学与工程基础，研究型岗位可继续深造，并逐步走向算法专家或 AI 系统架构。",
    career: ["算法工程师", "高级算法工程师", "算法专家 / AI 架构师"], source: "https://career.huawei.com/reccampportal/portal5/social-recruitment-detail.html?dataSource=1&jobId=28739"
  },
  {
    id: "huawei-hardware", company: "华为", title: "硬件研发工程师", family: "研发类 · 硬件与系统",
    summary: "承担单板、器件与硬件系统的方案设计、调试验证和全流程交付，关注可靠性与可制造性。",
    scores: [5, 3, 5, 4, 5, 3, 4, 4], match: "系统型",
    skills: ["数电与模电", "ARM / FPGA", "原理图与 PCB", "信号完整性", "EMC / 可靠性", "软硬件联调"],
    evidence: ["从需求到原理图、PCB、焊接和调试的完整作品", "示波器、逻辑分析仪等仪器的规范使用记录", "针对功耗、温升、信号或 EMC 的测试报告", "一次硬件故障的假设、验证与闭环过程"],
    courses: "电路分析、模拟电子技术、数字逻辑、嵌入式系统、计算机组成原理、信号与系统",
    contests: "全国大学生电子设计竞赛、智能车竞赛、嵌入式芯片与系统设计竞赛、挑战杯",
    projects: "设计一块嵌入式智能终端，完成传感、控制、通信、功耗和可靠性验证",
    advice: "从单板与模块交付积累全流程经验，再向硬件专家、系统工程师或产品架构师发展。",
    career: ["硬件开发工程师", "系统工程师", "硬件专家 / 产品架构师"], source: "https://career.huawei.com/reccampportal/portal5/social-recruitment-detail.html?dataSource=1&jobId=34093"
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
  companyFilters.innerHTML = ["全部", "华为", "米哈游"].map(company =>
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
