/**
 * 走哪啦 (ZounaLa) - 宣传官网交互脚本
 * Apple-Style Interactive Behaviors
 */

document.addEventListener('DOMContentLoaded', () => {
  initStickyHeader();
  initScrollReveal();
  initSimulatorTabs();
  initHeatmapSimulator();
  initBoredomSimulator();
  initTripStatsCounter();
  initFaqAccordion();
  initSmoothScroll();
});

/**
 * 1. 顶部磨砂导航栏滚动状态与高亮
 */
function initStickyHeader() {
  const header = document.querySelector('.site-header');
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links a');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }

    // 更新导航高亮
    let current = '';
    const scrollPos = window.scrollY + 100;

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });
}

/**
 * 2. 页面元素滚动淡入动画 (Scroll Reveal)
 */
function initScrollReveal() {
  const revealElements = document.querySelectorAll('.reveal-on-scroll');

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          obs.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  revealElements.forEach(el => observer.observe(el));
}

/**
 * 3. 核心体验模拟器 Tab 切换
 */
function initSimulatorTabs() {
  const tabs = document.querySelectorAll('.sim-tab-btn');
  const panels = document.querySelectorAll('.sim-panel');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const targetId = tab.getAttribute('data-target');

      tabs.forEach(t => t.classList.remove('active'));
      panels.forEach(p => p.classList.remove('active'));

      tab.classList.add('active');
      const targetPanel = document.getElementById(targetId);
      if (targetPanel) {
        targetPanel.classList.add('active');
      }
    });
  });
}

/**
 * 4. 26 周（半年）贡献热力图动态生成与悬浮提示
 */
function initHeatmapSimulator() {
  const container = document.getElementById('heatmapContainer');
  if (!container) return;

  // 生成 26 列 x 7 行 = 182 天的打卡模拟矩阵
  container.innerHTML = '';
  const totalDays = 26 * 7;
  const levels = [0, 0, 1, 1, 1, 2, 2, 3, 4]; // 偏向有活跃度

  for (let i = 0; i < totalDays; i++) {
    const cell = document.createElement('div');
    cell.classList.add('heatmap-cell');
    
    // 随机但连贯的活跃度分布
    const rand = Math.floor(Math.random() * levels.length);
    const level = levels[rand];
    
    if (level > 0) {
      cell.classList.add(`l-${level}`);
    }

    cell.title = `打卡记录: ${level > 0 ? level * 2 + ' 次足迹' : '无打卡'}`;
    container.appendChild(cell);
  }
}

/**
 * 5. 发呆无聊度交互演示
 */
function initBoredomSimulator() {
  const slider = document.getElementById('boredomSlider');
  const countDisplay = document.getElementById('boredomCount');
  const statusTag = document.getElementById('boredomTag');
  const meterFill = document.getElementById('boredomMeterFill');

  if (!slider) return;

  const statuses = [
    { max: 1, text: '轻微放空 ☕️', color: 'rgba(48, 209, 88, 0.15)', textColor: 'var(--apple-green)' },
    { max: 3, text: '一般无聊 🥱', color: 'rgba(255, 214, 10, 0.15)', textColor: 'var(--apple-yellow)' },
    { max: 6, text: '非常无聊 🫠', color: 'rgba(255, 159, 10, 0.15)', textColor: 'var(--apple-orange)' },
    { max: 12, text: '实在太无聊了 🤯', color: 'rgba(255, 69, 58, 0.15)', textColor: 'var(--apple-pink)' }
  ];

  function updateBoredom(val) {
    const num = parseInt(val, 10);
    if (countDisplay) countDisplay.textContent = `${num} 次发呆`;
    
    const percentage = Math.min(100, Math.max(15, (num / 10) * 100));
    if (meterFill) meterFill.style.width = `${percentage}%`;

    const found = statuses.find(s => num <= s.max) || statuses[statuses.length - 1];
    if (statusTag) {
      statusTag.textContent = found.text;
      statusTag.style.backgroundColor = found.color;
      statusTag.style.color = found.textColor;
    }
  }

  slider.addEventListener('input', (e) => {
    updateBoredom(e.target.value);
  });
}

/**
 * 6. 户外路线实时运动数据动态刷新
 */
function initTripStatsCounter() {
  const distEl = document.getElementById('statDistance');
  const calEl = document.getElementById('statCalories');
  const stepEl = document.getElementById('statSteps');
  const paceEl = document.getElementById('statPace');

  if (!distEl) return;

  let currentDist = 4.82;
  let currentKcal = 286;
  let currentSteps = 6840;

  // 定时微小跳动模拟实时户外记录
  setInterval(() => {
    currentDist = +(currentDist + 0.01).toFixed(2);
    currentKcal += 1;
    currentSteps += 14;

    distEl.textContent = `${currentDist} km`;
    calEl.textContent = `${currentKcal} kcal`;
    stepEl.textContent = `${currentSteps}`;
  }, 3500);
}

/**
 * 7. FAQ 折叠展开交互
 */
function initFaqAccordion() {
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    question.addEventListener('click', () => {
      const isActive = item.classList.contains('active');

      // 关闭其他展开项
      faqItems.forEach(other => {
        if (other !== item) other.classList.remove('active');
      });

      if (!isActive) {
        item.classList.add('active');
      } else {
        item.classList.remove('active');
      }
    });
  });
}

/**
 * 8. 平滑锚点跳转
 */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;

      const targetEl = document.querySelector(targetId);
      if (targetEl) {
        e.preventDefault();
        const headerOffset = 60;
        const elementPosition = targetEl.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
}
