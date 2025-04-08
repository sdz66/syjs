document.addEventListener('DOMContentLoaded', function() {
    // 批注功能相关元素
    const annotatedTexts = document.querySelectorAll('.annotated-text');
    
    // 侧边栏相关元素
    const toggleBtn = document.querySelector('.toggle-sidebar');
    const sidebar = document.querySelector('.sidebar');
    const content = document.querySelector('.content');
    const mainBtns = document.querySelectorAll('.main-btn');
    const homeBtn = document.querySelector('.home-btn');

    if (toggleBtn && sidebar && content) {
        toggleBtn.style.display = 'block';
        
        toggleBtn.addEventListener('click', function() {
            sidebar.classList.toggle('active');
        });
    }

    if (mainBtns.length === 3) {
        mainBtns[0].addEventListener('click', function() {
            window.location.href = '知识е览.html';
        });
        mainBtns[1].addEventListener('click', function() {
            window.location.href = '知苏答理.html';
        });
        mainBtns[2].addEventListener('click', function() {
            window.location.href = '苏行漫迹.html';
        });
    }
    
    if (homeBtn) {
        homeBtn.addEventListener('click', function() {
            window.location.href = 'index.html';
        });
    }
    
    // 批注点击事件
    annotatedTexts.forEach(text => {
        const annotationBox = text.querySelector('.annotation-box');
        if (annotationBox) {
            text.addEventListener('click', function(e) {
                e.stopPropagation();
                annotationBox.classList.toggle('active');
            });
        }
    });
    
    // 语言切换按钮相关元素
    const languageBtn = document.querySelector('.language-btn');
    const languageDropdown = document.querySelector('.language-dropdown');
    
    if (languageBtn && languageDropdown) {
        languageBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            languageDropdown.style.display = languageDropdown.style.display === 'block' ? 'none' : 'block';
        });
    }
    
    // 点击页面其他位置关闭批注框和语言下拉菜单
    document.addEventListener('click', function() {
        if (languageDropdown) {
            languageDropdown.style.display = 'none';
        }
        annotatedTexts.forEach(text => {
            const annotationBox = text.querySelector('.annotation-box');
            if (annotationBox) {
                annotationBox.classList.remove('active');
            }
        });
    });
});