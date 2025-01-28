// script.js

// 获取模式切换按钮
const modeToggleBtn = document.getElementById('mode-toggle-btn');
const body = document.body;

// 加载用户保存的模式设置
function loadModePreference() {
    const savedMode = localStorage.getItem('mode');
    if (savedMode === 'day-mode') {
        body.classList.remove('night-mode');
        body.classList.add('day-mode');
        modeToggleBtn.textContent = '🌞'; // 日间模式图标
    } else {
        body.classList.remove('day-mode');
        body.classList.add('night-mode');
        modeToggleBtn.textContent = '🌙'; // 夜间模式图标
    }
}

// 切换日间/夜间模式
modeToggleBtn.addEventListener('click', function () {
    if (body.classList.contains('day-mode')) {
        body.classList.remove('day-mode');
        body.classList.add('night-mode');
        modeToggleBtn.textContent = '🌙'; // 切换按钮图标为夜间模式
        localStorage.setItem('mode', 'night-mode'); // 保存夜间模式
    } else {
        body.classList.remove('night-mode');
        body.classList.add('day-mode');
        modeToggleBtn.textContent = '🌞'; // 切换按钮图标为日间模式
        localStorage.setItem('mode', 'day-mode'); // 保存日间模式
    }
});

// 页面加载时加载用户保存的模式
document.addEventListener('DOMContentLoaded', loadModePreference);