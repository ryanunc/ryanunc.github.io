// 滚动事件
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.style.backgroundColor = 'rgba(255, 255, 255, 0.8)'; 
        header.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)'; 
    } else {
        header.style.backgroundColor = 'transparent'; 
        header.style.boxShadow = 'none'; 
    }
});

// 页面初次加载时导航栏颜色和阴影正确
window.dispatchEvent(new Event('scroll'));

const movieIcon = document.getElementById('movie-icon'); 
const mediaContent = document.getElementById('media-content'); 

// 显示互动部分内容，隐藏图标
function showMediaContent() {
    mediaContent.classList.add('visible'); 
    movieIcon.classList.add('hidden'); 
}

// 点击事件，点击图标时显示内容
movieIcon.addEventListener('click', showMediaContent);


//gallery 项目，每个项目绑定点击事件
document.querySelectorAll('.gallery-item').forEach(item => {
    item.addEventListener('click', function() {
        const modal = document.getElementById('modal'); 
        const fullImage = document.getElementById('full-image'); 
        const caption = document.getElementById('caption'); 
        const img = this.querySelector('img'); 

        // 显示模态框
        modal.style.display = 'block';
        fullImage.src = img.src; 
    });
});


// 如果用户点击模态框区域关闭模态框
window.addEventListener('click', function(event) {
    const modal = document.getElementById('modal');
    if (event.target == modal) {
        modal.style.display = 'none';
    }
});


document.getElementById('last-updated').innerText += new Date(document.lastModified).toLocaleString();

document.addEventListener("DOMContentLoaded", function() {
    if (window.innerWidth <= 768) {
        const elementsToRemove = ["header", ".icons", "#timeline"];
        elementsToRemove.forEach(selector => {
            const element = document.querySelector(selector);
            if (element) element.remove();
        });
    }
});