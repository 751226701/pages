// AI 视频生成模型目录交互逻辑

document.addEventListener('DOMContentLoaded', function() {
  const modelGrid = document.getElementById('modelGrid');
  const modelCount = document.getElementById('modelCount');
  const searchInput = document.getElementById('searchInput');
  const typeFilter = document.getElementById('typeFilter');
  const companyFilter = document.getElementById('companyFilter');
  const priceFilter = document.getElementById('priceFilter');
  const sortSelect = document.getElementById('sortSelect');
  const modal = document.getElementById('modelModal');
  const modalBody = document.getElementById('modalBody');
  const closeModal = document.getElementById('closeModal');

  // 特征图标映射
  const featureIcons = {
    duration: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>',
    quality: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="23 7 16 12 23 17 23 7"></polygon><rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect></svg>',
    scene: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="3" y1="9" x2="21" y2="9"></line><line x1="9" y1="21" x2="9" y2="9"></line></svg>',
    motion: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"></path></svg>',
    style: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="13.5" cy="6.5" r=".5"></circle><circle cx="17.5" cy="10.5" r=".5"></circle><circle cx="8.5" cy="7.5" r=".5"></circle><circle cx="6.5" cy="12.5" r=".5"></circle><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.555C21.965 6.012 17.461 2 12 2z"></path></svg>',
    control: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>',
    speed: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>',
    image: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline></svg>',
    edit: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>',
    share: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line></svg>',
    language: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>',
    physics: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path><path d="M2 12h20"></path></svg>',
    text: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="4 7 4 4 20 4 20 7"></polyline><line x1="9" y1="20" x2="15" y2="20"></line><line x1="12" y1="4" x2="12" y2="20"></line></svg>',
    api: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>',
    frame: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><rect x="7" y="7" width="3" height="3"></rect><rect x="14" y="7" width="3" height="3"></rect></svg>',
    interpolation: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="17 1 21 5 17 9"></polyline><path d="M3 11V9a4 4 0 0 1 4-4h14"></path><polyline points="7 23 3 19 7 15"></polyline><path d="M21 13v2a4 4 0 0 1-4 4H3"></path></svg>',
    batch: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>',
    open: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12a9 9 0 0 1-9 9m9-9a9 9 0 0 0-9-9m9 9H3m9 9a9 9 0 0 1-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 0 1 9-9"></path></svg>',
    local: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>',
    custom: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20h9"></path><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path></svg>',
    effects: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>',
    free: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M12 6v6l4 2"></path></svg>',
    multimodal: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"></rect><path d="M12 4v16"></path><path d="M4 12h16"></path></svg>',
    expression: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"></circle><path d="M16 8v.01"></path><path d="M12 12c2-2.5 4-3.5 4-5 0-1.5-.5-2-1-2.5"></path><path d="M12 12c-2 2.5-4 3.5-4 5 0 1.5.5 2 1 2.5"></path></svg>',
    character: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>',
    pose: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="5" r="3"></circle><path d="M6.5 23l3-7.5 3.5 3.5 3-6 3 6 3.5-3.5 3 7.5"></path></svg>',
    realtime: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>',
    light: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18h6"></path><path d="M10 22h4"></path><path d="M12 2v1"></path><path d="M12 15a7 7 0 0 0-7 7c0 2.38 1.19 4.47 3 5.74V17a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-2.26c1.81-1.27 3-3.36 3-5.74a7 7 0 0 0-7-7z"></path></svg>',
    deploy: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>',
    extend: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 3 21 3 21 9"></polyline><polyline points="9 21 3 21 3 15"></polyline><line x1="21" y1="3" x2="14" y2="10"></line><line x1="3" y1="21" x2="10" y2="14"></line></svg>',
    cloud: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path></svg>',
    creative: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>'
  };

  // 过滤和排序函数
  function filterAndSortModels() {
    const searchTerm = searchInput.value.toLowerCase();
    const typeValue = typeFilter.value;
    const companyValue = companyFilter.value;
    const priceValue = priceFilter.value;
    const sortValue = sortSelect.value;

    let filteredModels = videoModelsData.filter(model => {
      // 搜索过滤
      const matchesSearch = !searchTerm || 
        model.name.toLowerCase().includes(searchTerm) ||
        model.company.toLowerCase().includes(searchTerm) ||
        model.description.toLowerCase().includes(searchTerm);

      // 类型过滤
      const matchesType = typeValue === 'all' || model.type === typeValue;

      // 厂商过滤
      const matchesCompany = companyValue === 'all' || model.company === companyValue;

      // 价格过滤
      const matchesPrice = priceValue === 'all' || model.price === priceValue;

      return matchesSearch && matchesType && matchesCompany && matchesPrice;
    });

    // 排序
    filteredModels.sort((a, b) => {
      switch (sortValue) {
        case 'popularity':
          return b.popularity - a.popularity;
        case 'recent':
          return new Date(b.releaseDate) - new Date(a.releaseDate);
        case 'name':
          return a.name.localeCompare(b.name);
        default:
          return 0;
      }
    });

    return filteredModels;
  }

  // 创建模型卡片
  function createModelCard(model) {
    const card = document.createElement('div');
    card.className = `rob-model-card${model.featured ? ' featured' : ''}`;
    card.dataset.id = model.id;

    const featuresHtml = model.features.slice(0, 4).map(f => 
      `<span class="rob-feature-tag">${featureIcons[f.icon] || ''} ${f.name}</span>`
    ).join('');

    card.innerHTML = `
      <div class="rob-model-header">
        <div class="rob-model-icon" style="background: ${model.iconBg}">${model.icon}</div>
        <div class="rob-model-info">
          <h3 class="rob-model-name">${model.name}</h3>
          <p class="rob-model-company">${model.company}</p>
          <div class="rob-model-badges">
            <span class="rob-badge rob-badge-type">${model.typeLabel}</span>
            <span class="rob-badge rob-badge-price ${model.price === 'paid' ? 'paid' : ''}">${model.priceLabel}</span>
          </div>
        </div>
      </div>
      <div class="rob-model-body">
        <p class="rob-model-description">${model.description}</p>
        <div class="rob-model-features">
          ${featuresHtml}
        </div>
      </div>
      <div class="rob-model-footer">
        <div class="rob-model-stats">
          <span class="rob-stat-item">热度: <strong>${model.popularity}</strong></span>
          <span class="rob-stat-item">${model.releaseDate}</span>
        </div>
        <a href="${model.url}" target="_blank" class="rob-model-link" onclick="event.stopPropagation()">
          访问官网
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="17 7 17 17 7 17"></polyline></svg>
        </a>
      </div>
    `;

    card.addEventListener('click', () => showModelDetail(model));
    return card;
  }

  // 显示模型详情弹窗
  function showModelDetail(model) {
    const featuresHtml = model.features.map(f => 
      `<li><strong>${f.name}</strong>${getFeatureDescription(f.icon)}</li>`
    ).join('');

    const limitationsHtml = model.limitations.map(l => `<li>${l}</li>`).join('');

    modalBody.innerHTML = `
      <div class="rob-modal-header">
        <div class="rob-model-icon" style="background: ${model.iconBg}; width: 72px; height: 72px; font-size: 2rem; margin-bottom: 16px;">${model.icon}</div>
        <h2 class="rob-modal-title">${model.name}</h2>
        <p class="rob-modal-subtitle">${model.company} · ${model.typeLabel}</p>
        <div class="rob-model-badges" style="margin-top: 16px;">
          <span class="rob-badge rob-badge-type">${model.typeLabel}</span>
          <span class="rob-badge rob-badge-price ${model.price === 'paid' ? 'paid' : ''}">${model.priceLabel}</span>
        </div>
      </div>
      <div class="rob-modal-body">
        <div class="rob-modal-section">
          <h3 class="rob-modal-section-title">模型介绍</h3>
          <p style="color: var(--rob-gray); line-height: 1.7;">${model.description}</p>
        </div>
        <div class="rob-modal-section">
          <h3 class="rob-modal-section-title">主要功能</h3>
          <ul class="rob-modal-list">
            ${featuresHtml}
          </ul>
        </div>
        <div class="rob-modal-section">
          <h3 class="rob-modal-section-title">定价方案</h3>
          <div class="rob-modal-pricing">
            <span class="rob-pricing-label">当前定价</span>
            <span class="rob-pricing-value">${model.pricing}</span>
          </div>
        </div>
        <div class="rob-modal-section">
          <h3 class="rob-modal-section-title">使用限制</h3>
          <ul class="rob-modal-list">
            ${limitationsHtml}
          </ul>
        </div>
        <div class="rob-modal-section" style="text-align: center;">
          <a href="${model.url}" target="_blank" class="rob-model-link" style="padding: 14px 32px; font-size: 1rem;">
            访问官网
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width: 18px; height: 18px;"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="17 7 17 17 7 17"></polyline></svg>
          </a>
        </div>
      </div>
    `;

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  // 获取功能描述
  function getFeatureDescription(feature) {
    const descriptions = {
      duration: ' - 支持生成指定时长的视频',
      quality: ' - 提供高清甚至4K级别的输出',
      scene: ' - 能够处理复杂的多场景内容',
      motion: ' - 生成自然流畅的人物动作',
      style: ' - 支持多种艺术风格转换',
      control: ' - 提供精细的参数控制选项',
      speed: ' - 快速生成，缩短等待时间',
      image: ' - 支持从静态图片生成动态视频',
      edit: ' - 内置强大的视频编辑工具',
      share: ' - 便捷的社交媒体分享功能',
      language: ' - 优化的多语言理解能力',
      physics: ' - 符合物理规律的真实效果',
      text: ' - 直接从文本描述生成视频',
      api: ' - 提供开发者 API 接口',
      frame: ' - 支持关键帧到完整视频',
      interpolation: ' - 智能插值生成中间帧',
      batch: ' - 支持批量处理提高效率',
      open: ' - 开源项目，可自由使用',
      local: ' - 支持本地部署使用',
      custom: ' - 可进行自定义训练优化',
      effects: ' - 多种特效可供选择',
      free: ' - 完全免费无限制使用',
      multimodal: ' - 支持多种输入模态',
      expression: ' - 精准的面部表情生成',
      character: ' - 专业的角色动画生成',
      pose: ' - 姿态控制驱动动画',
      realtime: ' - 实时预览生成效果',
      extend: ' - 支持视频长度扩展',
      cloud: ' - 云端处理无需本地资源',
      creative: ' - 丰富的创意工具集'
    };
    return descriptions[feature] || '';
  }

  // 渲染模型列表
  function renderModels() {
    const filteredModels = filterAndSortModels();
    modelCount.textContent = filteredModels.length;

    if (filteredModels.length === 0) {
      modelGrid.innerHTML = `
        <div class="rob-no-results">
          <svg class="rob-no-results-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            <line x1="8" y1="11" x2="14" y2="11"></line>
          </svg>
          <h3 class="rob-no-results-title">未找到相关模型</h3>
          <p class="rob-no-results-text">请尝试调整筛选条件或搜索关键词</p>
        </div>
      `;
      return;
    }

    modelGrid.innerHTML = '';
    filteredModels.forEach(model => {
      modelGrid.appendChild(createModelCard(model));
    });
  }

  // 关闭弹窗
  function closeModalHandler() {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }

  // 事件监听
  searchInput.addEventListener('input', renderModels);
  typeFilter.addEventListener('change', renderModels);
  companyFilter.addEventListener('change', renderModels);
  priceFilter.addEventListener('change', renderModels);
  sortSelect.addEventListener('change', renderModels);

  closeModal.addEventListener('click', closeModalHandler);

  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeModalHandler();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      closeModalHandler();
    }
  });

  // 初始渲染
  renderModels();
});
