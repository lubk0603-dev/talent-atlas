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
        <button class="profile-resume-link" type="button" data-resume-role="${role.id}">用这个岗位生成简历</button>
      </div>
    </div>`;
}

function renderMatrix() {
  const ordered = [...roles].sort((a, b) => sortDescending ? b.scores.reduce((x,y)=>x+y,0) - a.scores.reduce((x,y)=>x+y,0) : roles.indexOf(a) - roles.indexOf(b));
  document.querySelector("#matrixTable").innerHTML = `
    <thead><tr><th scope="col">岗位</th>${dimensions.map(d => `<th scope="col">${d}</th>`).join("")}</tr></thead>
    <tbody>${ordered.map(role => `<tr><td><span class="matrix-company">${role.company}</span><strong>${role.title}</strong></td>${role.scores.map((score, index) => `<td class="score-cell"><span class="score-${score}" aria-label="${dimensions[index]} ${score} 级">${score}</span></td>`).join("")}</tr>`).join("")}</tbody>`;
}

const templateNames = {
  technical: "技术标准模板",
  project: "项目优先模板",
  campus: "校园成长模板"
};

const sampleResume = {
  candidateName: "林知远（虚构范例）",
  contact: "138****5274 | linzhiyuan@example.com | github.com/lin-zhiyuan",
  headline: "EDA 算法工程师方向",
  summary: "计算机科学与技术本科生，具备 C++ 算法实现与 Linux 开发基础，能够围绕问题建模、方案实现和实验验证整理项目证据。",
  skills: ["C++", "Python", "Linux", "数据结构与算法", "图论", "性能分析"],
  education: [{
    title: "计算机科学与技术 本科",
    organization: "福州大学",
    period: "2023-2027",
    bullets: ["核心课程：数据结构、算法设计、操作系统、离散数学", "持续整理课程项目代码、实验记录与复盘文档"]
  }],
  projects: [{
    title: "迷你布局优化工具",
    organization: "课程项目",
    period: "2026.03-2026.06",
    bullets: ["使用 C++ 完成图数据建模、启发式算法实现与命令行工具封装", "设计公开样例实验，比较不同策略的运行时间与解质量", "编写使用说明和复现实验脚本，明确个人负责模块与技术取舍"]
  }, {
    title: "算法练习与可视化笔记",
    organization: "个人项目",
    period: "持续维护",
    bullets: ["整理图搜索、最短路径和组合优化问题的实现与复杂度分析", "为典型样例补充测试用例、结果截图和错误复盘"]
  }],
  experience: [{
    title: "程序设计学习小组",
    organization: "项目成员",
    period: "2025-2026",
    bullets: ["参与代码互审与问题讲解，将常见错误整理为共享检查清单", "协作维护练习仓库，统一提交说明与测试规范"]
  }],
  achievements: ["公开代码仓库与项目说明文档", "本范例内容为虚构示意，请勿直接复制投递"]
};

let activeTemplate = "technical";
let generatedResume = null;

const aiProviderPresets = {
  openai: {
    endpoint: "https://api.openai.com/v1",
    note: "使用 OpenAI API Key，默认选择兼顾速度与成本的模型。",
    models: [
      { id: "gpt-5-mini", label: "GPT-5 mini · 快速经济" },
      { id: "gpt-5.2", label: "GPT-5.2 · 高质量" },
      { id: "gpt-4.1-mini", label: "GPT-4.1 mini · 兼容稳定" }
    ]
  },
  gemini: {
    endpoint: "https://generativelanguage.googleapis.com/v1beta/openai",
    note: "使用 Google AI Studio 的 Gemini API Key。",
    models: [
      { id: "gemini-3.5-flash", label: "Gemini 3.5 Flash · 快速通用" }
    ]
  },
  deepseek: {
    endpoint: "https://api.deepseek.com",
    note: "使用 DeepSeek 开放平台 API Key。",
    models: [
      { id: "deepseek-v4-flash", label: "DeepSeek V4 Flash · 快速经济" },
      { id: "deepseek-v4-pro", label: "DeepSeek V4 Pro · 复杂任务" }
    ]
  },
  qwen: {
    endpoint: "https://dashscope.aliyuncs.com/compatible-mode/v1",
    note: "默认使用阿里云百炼北京地域，API Key 需与地域匹配。",
    models: [
      { id: "qwen-plus", label: "Qwen Plus · 通用推荐" },
      { id: "qwen3.7-plus", label: "Qwen 3.7 Plus · 新版通用" },
      { id: "qwen3.7-max", label: "Qwen 3.7 Max · 高质量" }
    ]
  },
  kimi: {
    endpoint: "https://api.moonshot.cn/v1",
    note: "使用 Kimi 开放平台 API Key。",
    models: [
      { id: "kimi-k3", label: "Kimi K3 · 旗舰通用" },
      { id: "kimi-k2.6", label: "Kimi K2.6 · 稳定通用" }
    ]
  },
  zhipu: {
    endpoint: "https://open.bigmodel.cn/api/paas/v4",
    note: "使用智谱 AI 开放平台 API Key。",
    models: [
      { id: "glm-5.1", label: "GLM-5.1 · 旗舰通用" },
      { id: "glm-4.7-flash", label: "GLM-4.7 Flash · 快速经济" },
      { id: "glm-4.7", label: "GLM-4.7 · 稳定通用" }
    ]
  },
  custom: {
    endpoint: "",
    note: "填写支持 OpenAI Chat Completions 格式的服务地址和模型 ID。",
    models: []
  }
};

const resumeForm = document.querySelector("#resumeForm");
const targetRole = document.querySelector("#targetRole");
const targetCompany = document.querySelector("#targetCompany");
const templatePicker = document.querySelector(".template-picker");
const resumePreview = document.querySelector("#resumePreview");
const generationStatus = document.querySelector("#generationStatus");
const formError = document.querySelector("#formError");
const generateButton = document.querySelector("#generateResume");
const aiProvider = document.querySelector("#aiProvider");
const aiEndpoint = document.querySelector("#aiEndpoint");
const aiKey = document.querySelector("#aiKey");
const aiModel = document.querySelector("#aiModel");
const customModel = document.querySelector("#customModel");
const providerHint = document.querySelector("#providerHint");
const configState = document.querySelector("#configState");
const outputButtons = ["copyResume", "downloadResume", "printResume"].map(id => document.querySelector(`#${id}`));

function escapeHTML(value = "") {
  return String(value).replace(/[&<>'"]/g, character => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;"
  })[character]);
}

function splitItems(value = "") {
  return String(value).split(/[、，,；;\n]+/).map(item => item.trim()).filter(Boolean);
}

function splitBlocks(value = "", fallbackTitle = "相关经历") {
  return String(value).split(/\n\s*\n/).map((block, index) => {
    const lines = block.split("\n").map(line => line.replace(/^[-•*]\s*/, "").trim()).filter(Boolean);
    if (!lines.length) return null;
    return {
      title: lines.length > 1 ? lines[0] : `${fallbackTitle}${index ? ` ${index + 1}` : ""}`,
      organization: "",
      period: "",
      bullets: lines.length > 1 ? lines.slice(1) : lines
    };
  }).filter(Boolean);
}

function collectResumeData() {
  return Object.fromEntries(new FormData(resumeForm).entries());
}

function roleContext(roleId) {
  const role = roles.find(item => item.id === roleId);
  if (!role) return null;
  return {
    company: role.company,
    title: role.title,
    summary: role.summary,
    skills: role.skills,
    evidence: role.evidence
  };
}

function setFormError(message = "") {
  formError.textContent = message;
  formError.hidden = !message;
}

function validateResumeForm() {
  const requiredFields = [...resumeForm.querySelectorAll("[required]")];
  requiredFields.forEach(field => field.removeAttribute("aria-invalid"));
  const invalid = requiredFields.filter(field => !field.value.trim());
  if (!invalid.length) {
    setFormError();
    return true;
  }
  invalid.forEach(field => field.setAttribute("aria-invalid", "true"));
  setFormError("请先填写目标岗位、姓名、联系方式、教育经历、技能和项目经历。");
  invalid[0].focus();
  return false;
}

function getSelectedModel() {
  return aiModel.value === "custom" ? customModel.value.trim() : aiModel.value.trim();
}

function updateCustomModelField() {
  const isCustom = aiModel.value === "custom";
  customModel.hidden = !isCustom;
  customModel.setAttribute("aria-hidden", String(!isCustom));
}

function applyProviderPreset(providerId, preferredModel = "", endpointOverride = null) {
  const preset = aiProviderPresets[providerId] || aiProviderPresets.custom;
  const modelOptions = preset.models.map(model => `<option value="${model.id}">${model.label}</option>`).join("");
  aiModel.innerHTML = `${modelOptions}<option value="custom">自定义模型 ID</option>`;

  const hasPreferredModel = preset.models.some(model => model.id === preferredModel);
  if (hasPreferredModel) {
    aiModel.value = preferredModel;
    customModel.value = "";
  } else if (preferredModel) {
    aiModel.value = "custom";
    customModel.value = preferredModel;
  } else if (preset.models.length) {
    aiModel.value = preset.models[0].id;
    customModel.value = "";
  } else {
    aiModel.value = "custom";
    customModel.value = "";
  }

  aiEndpoint.value = endpointOverride === null ? preset.endpoint : endpointOverride;
  providerHint.textContent = preset.note;
  updateCustomModelField();
  updateConfigState();
}

function saveAIPreference(key, value) {
  try {
    localStorage.setItem(key, value);
  } catch (error) {
    console.info("无法保存 AI 接口偏好。", error);
  }
}

function updateConfigState() {
  const ready = aiEndpoint.value.trim() && aiKey.value.trim() && getSelectedModel();
  configState.textContent = ready ? "已就绪" : "待配置";
  configState.classList.toggle("ready", Boolean(ready));
}

function normalizeEndpoint(value) {
  const endpoint = value.trim().replace(/\/+$/, "");
  return endpoint.endsWith("/chat/completions") ? endpoint : `${endpoint}/chat/completions`;
}

function localResume(data) {
  const selectedRole = roleContext(data.targetRole);
  const roleTitle = selectedRole?.title || targetRole.options[targetRole.selectedIndex]?.text || "目标岗位";
  return {
    candidateName: data.candidateName,
    contact: data.contact,
    headline: `${roleTitle}候选人`,
    summary: `面向${data.targetCompany ? `${data.targetCompany}的` : ""}${roleTitle}岗位。以下内容根据本人填写的信息整理，投递前请逐项核验。`,
    skills: splitItems(data.skills),
    education: [{ title: "教育经历", organization: "", period: "", bullets: splitItems(data.education) }],
    projects: splitBlocks(data.projects, "项目经历"),
    experience: splitBlocks(data.experience, "实践经历"),
    achievements: splitItems(data.achievements)
  };
}

function normalizeEntries(value, fallbackTitle) {
  if (!Array.isArray(value)) return [];
  return value.map((entry, index) => {
    if (typeof entry === "string") return { title: `${fallbackTitle}${index ? ` ${index + 1}` : ""}`, organization: "", period: "", bullets: [entry] };
    return {
      title: entry?.title || fallbackTitle,
      organization: entry?.organization || "",
      period: entry?.period || "",
      bullets: Array.isArray(entry?.bullets) ? entry.bullets.filter(Boolean) : splitItems(entry?.bullets || entry?.details || "")
    };
  }).filter(entry => entry.title || entry.bullets.length);
}

function normalizeAIResume(value, source) {
  return {
    candidateName: source.candidateName,
    contact: source.contact,
    headline: value?.headline || `${targetRole.options[targetRole.selectedIndex]?.text || "目标岗位"}候选人`,
    summary: value?.summary || "",
    skills: Array.isArray(value?.skills) ? value.skills.filter(Boolean) : splitItems(value?.skills || source.skills),
    education: normalizeEntries(value?.education, "教育经历"),
    projects: normalizeEntries(value?.projects, "项目经历"),
    experience: normalizeEntries(value?.experience, "实践经历"),
    achievements: Array.isArray(value?.achievements) ? value.achievements.filter(Boolean) : splitItems(value?.achievements || source.achievements)
  };
}

function parseAIContent(content) {
  const cleaned = String(content || "").trim().replace(/^```(?:json)?\s*/i, "").replace(/\s*```$/, "");
  const start = cleaned.indexOf("{");
  const end = cleaned.lastIndexOf("}");
  if (start < 0 || end < start) throw new Error("AI 返回的内容不是可识别的简历数据，请重试。");
  return JSON.parse(cleaned.slice(start, end + 1));
}

function entrySection(title, entries, className = "") {
  if (!entries.length) return "";
  return `<section class="resume-doc-section ${className}"><h4>${escapeHTML(title)}</h4>${entries.map(entry => `
    <article class="resume-entry">
      <div class="resume-entry-head"><strong>${escapeHTML([entry.title, entry.organization].filter(Boolean).join(" | "))}</strong><span>${escapeHTML(entry.period)}</span></div>
      ${entry.bullets.length ? `<ul>${entry.bullets.map(item => `<li>${escapeHTML(item)}</li>`).join("")}</ul>` : ""}
    </article>`).join("")}</section>`;
}

function skillSection(skills) {
  if (!skills.length) return "";
  return `<section class="resume-doc-section resume-section-skills"><h4>技能与工具</h4><div class="resume-skills">${skills.map(skill => `<span>${escapeHTML(skill)}</span>`).join("")}</div></section>`;
}

function achievementSection(items) {
  if (!items.length) return "";
  return `<section class="resume-doc-section resume-section-achievements"><h4>成果与荣誉</h4><p>${items.map(escapeHTML).join("<br>")}</p></section>`;
}

function renderResume() {
  if (!generatedResume) return;
  const resume = generatedResume;
  const education = entrySection("教育经历", resume.education, "resume-section-education");
  const projects = entrySection("项目经历", resume.projects, "resume-section-projects");
  const experience = entrySection("实践经历", resume.experience, "resume-section-experience");
  const skills = skillSection(resume.skills);
  const achievements = achievementSection(resume.achievements);
  const mainSections = activeTemplate === "project"
    ? [projects, experience, skills, education, achievements]
    : activeTemplate === "campus"
      ? [education, projects, experience]
      : [skills, projects, experience, education, achievements];
  const sidebar = activeTemplate === "campus" ? `<aside class="resume-sidebar">${skills}${achievements}</aside>` : "";
  resumePreview.className = `resume-paper template-${activeTemplate}`;
  resumePreview.innerHTML = `<article class="resume-document">
    <header class="resume-doc-header">
      <div><h3>${escapeHTML(resume.candidateName)}</h3><p>${escapeHTML(resume.headline)}</p></div>
      <p class="resume-contact">${escapeHTML(resume.contact)}</p>
    </header>
    ${resume.summary ? `<p class="resume-summary">${escapeHTML(resume.summary)}</p>` : ""}
    ${sidebar}
    <div class="resume-doc-body">${mainSections.join("")}</div>
  </article>`;
  outputButtons.forEach(button => button.disabled = false);
}

function setGenerationState(message, state = "") {
  generationStatus.textContent = message;
  generationStatus.className = `generation-status ${state}`.trim();
}

async function generateWithAI(data) {
  const selectedModel = getSelectedModel();
  if (!aiEndpoint.value.trim() || !aiKey.value.trim() || !selectedModel) {
    document.querySelector(".ai-config").open = true;
    setFormError("请先选择 AI 服务商和模型，并填写接口地址与 API 密钥，或使用本地草稿。");
    setGenerationState("AI 尚未配置", "error");
    const modelInput = aiModel.value === "custom" ? customModel : aiModel;
    [aiEndpoint, aiKey, modelInput].find(input => input === customModel ? !selectedModel : !input.value.trim())?.focus();
    return;
  }
  setFormError();
  generateButton.disabled = true;
  generateButton.classList.add("loading");
  setGenerationState("正在分析岗位与经历");
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 60000);
  const promptData = { ...data, targetRole: targetRole.options[targetRole.selectedIndex]?.text || data.targetRole, roleResearch: roleContext(data.targetRole), template: templateNames[activeTemplate] };
  const systemPrompt = `你是一名严谨的中文技术招聘简历编辑。只使用用户提供的事实，不补造公司、时间、职责、数据、奖项或技能。没有量化数据时不要自行添加数字。围绕目标岗位选择关键词，使用简洁、可核验的动作表达，控制在一页简历的信息密度。只返回一个合法 JSON 对象，不要使用 Markdown。结构必须是：{"headline":"","summary":"","skills":[""],"education":[{"title":"","organization":"","period":"","bullets":[""]}],"projects":[同结构],"experience":[同结构],"achievements":[""]}。空缺板块使用空数组。`;
  try {
    const response = await fetch(normalizeEndpoint(aiEndpoint.value), {
      method: "POST",
      headers: { "Content-Type": "application/json", "Authorization": `Bearer ${aiKey.value.trim()}` },
      body: JSON.stringify({
        model: selectedModel,
        messages: [
          { role: "system", content: systemPrompt },
          { role: "user", content: `请根据以下真实信息生成岗位定制简历：\n${JSON.stringify(promptData)}` }
        ]
      }),
      signal: controller.signal
    });
    const payload = await response.json().catch(() => ({}));
    if (!response.ok) throw new Error(payload?.error?.message || `接口请求失败，状态码 ${response.status}`);
    const content = payload?.choices?.[0]?.message?.content;
    if (!content) throw new Error("接口未返回可用内容，请检查模型名称与接口兼容性。");
    generatedResume = normalizeAIResume(parseAIContent(content), data);
    renderResume();
    setGenerationState("AI 简历已生成，请逐项核验", "success");
  } catch (error) {
    const message = error.name === "AbortError"
      ? "请求超时，请稍后重试。"
      : error instanceof TypeError
        ? "无法连接接口。请检查地址、网络和服务是否允许浏览器跨域请求。"
        : error.message;
    setGenerationState("生成失败", "error");
    setFormError(message);
  } finally {
    clearTimeout(timeout);
    generateButton.disabled = false;
    generateButton.classList.remove("loading");
  }
}

targetRole.innerHTML = `<option value="">请选择目标岗位</option>${roles.map(role => `<option value="${role.id}">${role.company} | ${role.title}</option>`).join("")}<option value="custom">其他岗位</option>`;

try {
  const savedProvider = localStorage.getItem("resume-ai-provider") || "openai";
  const savedEndpoint = localStorage.getItem("resume-ai-endpoint");
  const savedModel = localStorage.getItem("resume-ai-model") || "";
  aiProvider.value = aiProviderPresets[savedProvider] ? savedProvider : "openai";
  applyProviderPreset(aiProvider.value, savedModel, savedEndpoint || null);
} catch (error) {
  console.info("浏览器未开放本地偏好存储。", error);
  applyProviderPreset("openai");
}

templatePicker.addEventListener("click", event => {
  const button = event.target.closest("[data-template]");
  if (!button) return;
  activeTemplate = button.dataset.template;
  templatePicker.querySelectorAll("[data-template]").forEach(option => {
    const selected = option === button;
    option.classList.toggle("active", selected);
    option.setAttribute("aria-checked", String(selected));
  });
  document.querySelector("#templateLabel").textContent = templateNames[activeTemplate];
  resumePreview.className = `resume-paper template-${activeTemplate}`;
  renderResume();
});

targetRole.addEventListener("change", () => {
  const role = roleContext(targetRole.value);
  if (role) targetCompany.value = role.company;
});

aiProvider.addEventListener("change", () => {
  applyProviderPreset(aiProvider.value);
  saveAIPreference("resume-ai-provider", aiProvider.value);
  saveAIPreference("resume-ai-endpoint", aiEndpoint.value.trim());
  saveAIPreference("resume-ai-model", getSelectedModel());
});

aiModel.addEventListener("change", () => {
  updateCustomModelField();
  updateConfigState();
  saveAIPreference("resume-ai-model", getSelectedModel());
  if (aiModel.value === "custom") customModel.focus();
});

customModel.addEventListener("input", () => {
  updateConfigState();
  saveAIPreference("resume-ai-model", customModel.value.trim());
});

aiEndpoint.addEventListener("input", updateConfigState);
aiEndpoint.addEventListener("change", () => saveAIPreference("resume-ai-endpoint", aiEndpoint.value.trim()));
aiKey.addEventListener("input", updateConfigState);

resumeForm.addEventListener("input", event => {
  if (event.target.matches("[required]") && event.target.value.trim()) event.target.removeAttribute("aria-invalid");
});

resumeForm.addEventListener("submit", event => {
  event.preventDefault();
  if (!validateResumeForm()) return;
  generateWithAI(collectResumeData());
});

document.querySelector("#localDraft").addEventListener("click", () => {
  if (!validateResumeForm()) return;
  generatedResume = localResume(collectResumeData());
  renderResume();
  setGenerationState("本地草稿已生成，尚未调用 AI", "success");
});

document.querySelector("#loadSampleResume").addEventListener("click", () => {
  activeTemplate = "technical";
  templatePicker.querySelectorAll("[data-template]").forEach(option => {
    const selected = option.dataset.template === activeTemplate;
    option.classList.toggle("active", selected);
    option.setAttribute("aria-checked", String(selected));
  });
  document.querySelector("#templateLabel").textContent = templateNames[activeTemplate];
  generatedResume = JSON.parse(JSON.stringify(sampleResume));
  renderResume();
  setGenerationState("范例简历已载入，可参考结构后填写自己的内容", "success");
  resumePreview.scrollIntoView({ behavior: "smooth", block: "center" });
});

profileDetail.addEventListener("click", event => {
  const button = event.target.closest("[data-resume-role]");
  if (!button) return;
  targetRole.value = button.dataset.resumeRole;
  targetRole.dispatchEvent(new Event("change"));
  document.querySelector("#resume").scrollIntoView({ behavior: "smooth", block: "start" });
});

document.querySelector("#copyResume").addEventListener("click", async () => {
  const text = resumePreview.innerText.trim();
  try {
    await navigator.clipboard.writeText(text);
    setGenerationState("简历文本已复制", "success");
  } catch (error) {
    const helper = document.createElement("textarea");
    helper.value = text;
    document.body.appendChild(helper);
    helper.select();
    document.execCommand("copy");
    helper.remove();
    setGenerationState("简历文本已复制", "success");
  }
});

document.querySelector("#downloadResume").addEventListener("click", () => {
  const title = `${generatedResume.candidateName}-${generatedResume.headline}`.replace(/[\\/:*?"<>|]/g, "-");
  const documentHTML = `<!doctype html><html lang="zh-CN"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width"><title>${escapeHTML(title)}</title><style>body{margin:0;background:#e9edf1;color:#1d252c;font-family:Arial,"Microsoft YaHei UI",sans-serif;line-height:1.48}.page{width:210mm;min-height:297mm;box-sizing:border-box;margin:24px auto;padding:16mm;background:white}.resume-doc-header{display:grid;grid-template-columns:1fr auto;gap:20px;padding-bottom:18px;border-bottom:2px solid #2457e6}.resume-doc-header h3{margin:0;font-size:30px}.resume-doc-header p,.resume-summary{color:#4b5964}.resume-contact{text-align:right;white-space:pre-line}.resume-doc-body{display:grid;gap:18px}.resume-doc-section h4{margin:0 0 8px;color:#2457e6;font-size:11px;letter-spacing:.09em}.resume-entry{margin-bottom:12px}.resume-entry-head{display:flex;justify-content:space-between;gap:12px}.resume-entry-head span{color:#65717b;font-size:10px}.resume-entry ul{margin:4px 0;padding-left:17px}.resume-entry li,.resume-doc-section p{font-size:10.5px}.resume-skills{display:flex;flex-wrap:wrap;gap:5px}.resume-skills span{padding:4px 7px;border-radius:5px;color:#183a9b;background:#e8edff;font-size:10px}.resume-sidebar{display:grid;gap:18px}@media print{body{background:white}.page{margin:0;box-shadow:none}}@media(max-width:800px){.page{width:auto;min-height:100vh;margin:0;padding:24px}.resume-doc-header{grid-template-columns:1fr}.resume-contact{text-align:left}}</style></head><body><main class="page">${resumePreview.innerHTML}</main></body></html>`;
  const url = URL.createObjectURL(new Blob([documentHTML], { type: "text/html;charset=utf-8" }));
  const link = document.createElement("a");
  link.href = url;
  link.download = `${title}.html`;
  link.click();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
  setGenerationState("HTML 简历已下载", "success");
});

document.querySelector("#printResume").addEventListener("click", () => {
  document.body.classList.add("print-resume");
  window.print();
});

window.addEventListener("afterprint", () => document.body.classList.remove("print-resume"));
updateConfigState();

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
