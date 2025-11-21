// 分店資料
const branches = [
    {
        name: "三重總店 - 新北市",
        address: "新北市三重區成功路41巷29號1樓",
        phone: "0906-828-969",
        hours: "週一至週五：09:00-18:00",
        weekend: "週末：接受電話諮詢",
        govLink: "https://newrepat.sfaa.gov.tw/home/pavs/vendor/detail/4bc1e2b4925683da01928f33b742721d"
    },
    {
        name: "萬華店 - 台北市",
        address: "台北市萬華區漢口街2段56號6樓之2",
        phone: "0906-828-969",
        hours: "週一至週五：09:00-18:00",
        weekend: "週末：接受電話諮詢",
        govLink: "https://newrepat.sfaa.gov.tw/home/pavs/vendor/detail/4bc1e2b4925683da01928f18485b6b3c"
    },
    {
        name: "大安店 - 台北市",
        address: "台北市大安區仁愛路三段26號5樓",
        phone: "0906-828-969",
        hours: "週一至週五：09:00-18:00",
        weekend: "週末：接受電話諮詢",
        govLink: "https://newrepat.sfaa.gov.tw/home/pavs/vendor/detail/4bc1e2b4932907af01966193c90c0e46"
    },
    {
        name: "板橋店 - 新北市",
        address: "新北市板橋區三民路2段23號14樓",
        phone: "0906-828-969",
        hours: "週一至週五：09:00-18:00",
        weekend: "週末：接受電話諮詢",
        govLink: "https://newrepat.sfaa.gov.tw/home/pavs/vendor/detail/4bc1e2b4925683da0192935af3984d82"
    },
    {
        name: "中和店 - 新北市",
        address: "新北市中和區中原二街28號18樓",
        phone: "0906-828-969",
        hours: "週一至週五：09:00-18:00",
        weekend: "週末：接受電話諮詢",
        govLink: "https://newrepat.sfaa.gov.tw/home/pavs/vendor/detail/4bc1e2b4925683da01928f0f674a69a8"
    },
    {
        name: "新店店 - 新北市",
        address: "新北市新店區安興路127之3號1樓",
        phone: "0906-828-969",
        hours: "週一至週五：09:00-18:00",
        weekend: "週末：接受電話諮詢",
        govLink: "https://newrepat.sfaa.gov.tw/home/pavs/vendor/detail/4bc1e2b4925683da01928f1ddb8b6c52"
    },
    {
        name: "新莊店 - 新北市",
        address: "新北市新莊區富貴路492號6樓",
        phone: "0906-828-969",
        hours: "週一至週五：09:00-18:00",
        weekend: "週末：接受電話諮詢",
        govLink: "https://newrepat.sfaa.gov.tw/home/pavs/vendor/detail/4bc1e2b4932907af0196618fef720cb2"
    }
];

// 渲染分店資訊
function renderBranches() {
    const container = document.getElementById('branches-container');
    if (!container) return;

    container.innerHTML = branches.map(branch => `
        <div class="branch-card">
            <h3>${branch.name}</h3>
            <div class="branch-info">
                <p><strong>📍 地址：</strong>${branch.address}</p>
                <p><strong>📞 電話：</strong>${branch.phone}</p>
                <p><strong>🕒 營業時間：</strong></p>
                <p>${branch.hours}</p>
                <p>${branch.weekend}</p>
                <div class="branch-buttons">
                    <a href="tel:${branch.phone.replace(/-/g, '')}" class="contact-btn">📞 立即撥打</a>
                    <a href="${branch.govLink}" target="_blank" class="contact-btn">🏛️ 政府登記</a>
                </div>
            </div>
        </div>
    `).join('');
}

// 頁面切換功能
function showPage(pageId) {
    // 隱藏所有頁面
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => {
        page.classList.remove('active');
    });

    // 顯示指定頁面
    const targetPage = document.getElementById(pageId);
    if (targetPage) {
        targetPage.classList.add('active');
        // 更新 URL hash，但不觸發 hashchange 事件（避免無限迴圈）
        if (window.location.hash.substring(1) !== pageId) {
            history.pushState(null, null, `#${pageId}`);
        }
    }

    // 更新導航狀態
    updateNavigation(pageId);

    // 關閉移動端菜單
    closeMenu();

    // 滾動到頂部
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// 處理 Hash 變更
function handleHashChange() {
    const hash = window.location.hash.substring(1); // 移除 #
    if (hash) {
        showPage(hash);
    } else {
        showPage('home'); // 默認首頁
    }
}

// 更新導航狀態
function updateNavigation(activePageId) {
    // 移除所有導航項目的active狀態
    const navItems = document.querySelectorAll('nav a');
    navItems.forEach(item => {
        item.classList.remove('active');
    });

    // 為對應的導航項目添加active狀態
    const activeNavItem = document.getElementById(`nav-${activePageId}`);
    if (activeNavItem) {
        activeNavItem.classList.add('active');
    }
}

// 移動端菜單切換
function toggleMenu() {
    const navMenu = document.getElementById('nav-menu');
    const menuIcon = document.getElementById('menu-icon');

    navMenu.classList.toggle('show');

    if (navMenu.classList.contains('show')) {
        menuIcon.textContent = '✕';
    } else {
        menuIcon.textContent = '☰';
    }
}

// 關閉移動端菜單
function closeMenu() {
    const navMenu = document.getElementById('nav-menu');
    const menuIcon = document.getElementById('menu-icon');

    if (navMenu) {
        navMenu.classList.remove('show');
    }
    if (menuIcon) {
        menuIcon.textContent = '☰';
    }
}

// 平滑滾動到指定元素
function scrollToElement(elementId) {
    const element = document.getElementById(elementId);
    if (element) {
        element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// 處理外部鏈接點擊
function handleExternalLink(url) {
    window.open(url, '_blank', 'noopener,noreferrer');
}

// 處理電話撥打
function makeCall(phoneNumber) {
    window.location.href = `tel:${phoneNumber}`;
}

// 工具函數：格式化電話號碼
function formatPhoneNumber(phone) {
    return phone.replace(/(\d{4})(\d{3})(\d{3})/, '$1-$2-$3');
}

// 工具函數：復制文本到剪貼板
async function copyToClipboard(text) {
    try {
        await navigator.clipboard.writeText(text);
        // 可以添加提示訊息
        showMessage('已複製到剪貼板！');
    } catch (err) {
        console.error('複製失敗:', err);
    }
}

// 顯示臨時訊息
function showMessage(message, type = 'success') {
    const messageEl = document.createElement('div');
    messageEl.textContent = message;
    messageEl.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? '#2ecc71' : '#e74c3c'};
        color: white;
        padding: 1rem 2rem;
        border-radius: 5px;
        z-index: 10000;
        animation: slideInRight 0.3s ease;
    `;

    document.body.appendChild(messageEl);

    setTimeout(() => {
        messageEl.style.animation = 'slideOutRight 0.3s ease';
        setTimeout(() => {
            if (messageEl.parentNode) {
                document.body.removeChild(messageEl);
            }
        }, 300);
    }, 3000);
}

// 動畫觀察器（用於頁面滾動動畫）
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function (entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// 輪播圖邏輯
let currentSlide = 0;
const totalSlides = 3;
let photoContainer;
let dots;

function initCarousel() {
    photoContainer = document.getElementById('photoContainer');
    dots = document.querySelectorAll('.dot');

    if (!photoContainer || !dots.length) return;

    // 觸控滑動支援
    const carousel = document.getElementById('carousel');
    if (carousel) {
        let startX = 0;
        let startY = 0;
        let isScrolling = false;

        carousel.addEventListener('touchstart', (e) => {
            startX = e.touches[0].clientX;
            startY = e.touches[0].clientY;
            isScrolling = false;
        });

        carousel.addEventListener('touchmove', (e) => {
            if (!startX || !startY) return;

            const currentX = e.touches[0].clientX;
            const currentY = e.touches[0].clientY;
            const diffX = startX - currentX;
            const diffY = startY - currentY;

            if (Math.abs(diffX) > Math.abs(diffY)) {
                isScrolling = true;
                e.preventDefault(); // 防止頁面滾動
            }
        });

        carousel.addEventListener('touchend', (e) => {
            if (!startX || !isScrolling) return;

            const endX = e.changedTouches[0].clientX;
            const diffX = startX - endX;

            // 滑動距離閾值
            if (Math.abs(diffX) > 50) {
                if (diffX > 0) {
                    changeSlide(1); // 左滑，下一張
                } else {
                    changeSlide(-1); // 右滑，上一張
                }
            }

            startX = 0;
            startY = 0;
            isScrolling = false;
        });
    }
}

// 切換照片函數
function changeSlide(direction) {
    currentSlide += direction;

    if (currentSlide >= totalSlides) {
        currentSlide = 0;
    } else if (currentSlide < 0) {
        currentSlide = totalSlides - 1;
    }

    updateCarousel();
}

// 直接跳到指定照片
function goToSlide(slideIndex) {
    currentSlide = slideIndex;
    updateCarousel();
}

// 更新輪播狀態
function updateCarousel() {
    if (!photoContainer) return;
    const translateX = -currentSlide * 100;
    photoContainer.style.transform = `translateX(${translateX}%)`;

    // 更新指示點
    if (dots) {
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentSlide);
        });
    }
}

// 頁面載入完成後的初始化
document.addEventListener('DOMContentLoaded', function () {
    // 渲染分店資訊
    renderBranches();

    // 處理初始 Hash
    handleHashChange();

    // 監聽 Hash 變更
    window.addEventListener('hashchange', handleHashChange);

    // 初始化輪播圖
    initCarousel();

    // 為所有CTA按鈕添加點擊事件
    const ctaButtons = document.querySelectorAll('.cta-button');
    ctaButtons.forEach(button => {
        button.addEventListener('click', function () {
            showPage('contact');
        });
    });

    // 為移動端菜單項目添加點擊關閉功能
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', function () {
            // 延遲關閉菜單，確保頁面切換動畫完成
            setTimeout(() => {
                closeMenu();
            }, 100);
        });
    });

    // 點擊頁面其他地方關閉移動端菜單
    document.addEventListener('click', function (event) {
        const navMenu = document.getElementById('nav-menu');
        const menuToggle = document.querySelector('.menu-toggle');
        const nav = document.querySelector('nav');

        // 如果點擊的不是菜單相關元素，則關閉菜單
        if (nav && !nav.contains(event.target) && menuToggle && !menuToggle.contains(event.target)) {
            closeMenu();
        }
    });

    // 監聽窗口大小變化
    window.addEventListener('resize', function () {
        // 如果窗口變大，關閉移動端菜單
        if (window.innerWidth > 768) {
            closeMenu();
        }
    });

    // 添加滾動效果
    let lastScrollTop = 0;
    window.addEventListener('scroll', function () {
        const header = document.querySelector('header');
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        // 向下滾動時添加陰影效果
        if (header) {
            if (scrollTop > 50) {
                header.style.boxShadow = '0 4px 20px rgba(0,0,0,0.15)';
            } else {
                header.style.boxShadow = '0 4px 15px rgba(0,0,0,0.1)';
            }
        }

        lastScrollTop = scrollTop;
    });

    // 當頁面載入後觀察所有需要動畫的元素
    // 注意：branch-card 是動態生成的，所以這裡可能選不到，需要改進
    // 解決方案：使用 MutationObserver 或在 renderBranches 後觀察
    const staticAnimateElements = document.querySelectorAll('.feature-card, .contact-item');
    staticAnimateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    // 觀察動態生成的 branch-card
    const branchCards = document.querySelectorAll('.branch-card');
    branchCards.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    // CSS動畫樣式（通過JavaScript添加）
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideInRight {
            from { transform: translateX(100%); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
        }
        
        @keyframes slideOutRight {
            from { transform: translateX(0); opacity: 1; }
            to { transform: translateX(100%); opacity: 0; }
        }
    `;
    document.head.appendChild(style);
});

// 鍵盤導航支持
document.addEventListener('keydown', function (event) {
    // ESC鍵關閉移動端菜單
    if (event.key === 'Escape') {
        closeMenu();
    }

    // Enter鍵激活聚焦的按鈕
    if (event.key === 'Enter' && event.target.tagName === 'BUTTON') {
        event.target.click();
    }
});
