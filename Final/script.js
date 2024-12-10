const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');
const navbar = document.querySelector('.navbar');

// 控制 burger 菜单的显示/隐藏
burger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// 添加滚动事件监听器
window.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
        navbar.classList.add('scrolled'); // 滚动时添加背景颜色
    } else {
        navbar.classList.remove('scrolled'); // 回到顶部时移除背景颜色
    }
});



// 使用你的 Mapbox Access Token
mapboxgl.accessToken = 'pk.eyJ1IjoiemhkZW5nNiIsImEiOiJjbTRleXh1NGQxMmxnMmpvbnBzN2Vxcjc3In0.8zspfyCIOzXxtGzPQTzD9w';

// 初始化地图
const map = new mapboxgl.Map({
    container: 'map', // 对应 HTML 中的 id
    style: 'mapbox://styles/mapbox/streets-v11', // 地图样式
    center: [104.0658, 30.6574], // 成都的经纬度
    zoom: 12, // 地图缩放级别
});

// 添加缩放控件
map.addControl(new mapboxgl.NavigationControl());

// 添加搜索框
const geocoder = new MapboxGeocoder({
    accessToken: mapboxgl.accessToken, // 使用你的 Access Token
    mapboxgl: mapboxgl, // 绑定地图实例
    placeholder: 'Search for places in Chengdu', // 搜索框提示
    marker: true, // 搜索结果添加标记
    proximity: { longitude: 104.0658, latitude: 30.6574 }, // 提高成都周边的搜索优先级
    language: 'en' // 强制搜索结果返回英文
});

// 将搜索框添加到地图顶部
map.addControl(geocoder);

// 在市中心添加一个标记
const centerMarker = new mapboxgl.Marker({ color: 'red' }) // 设置标记颜色
    .setLngLat([104.0658, 30.6574]) // 成都的经纬度
    .setPopup(
        new mapboxgl.Popup({ offset: 25 }) // 点击标记时显示弹窗
            .setHTML('<h3>Chengdu City Center</h3><p>This is the heart of Chengdu!</p>')
    )
    .addTo(map);

    const themeCards = document.querySelectorAll('.theme-card');

themeCards.forEach(card => {
    const video = card.querySelector('.theme-video');

    // Pause the video and set to the first frame on load
    video.pause();
    video.currentTime = 0;

    // Play video on hover
    card.addEventListener('mouseenter', () => {
        video.play(); // Start playing
    });

    // Pause video on hover end
    card.addEventListener('mouseleave', () => {
        video.pause(); // Pause
        video.currentTime = 0; // Reset to the first frame
    });
});


// Mapbox Access Token
const mapboxAccessToken = 'pk.eyJ1IjoiemhkZW5nNiIsImEiOiJjbTRleXh1NGQxMmxnMmpvbnBzN2Vxcjc3In0.8zspfyCIOzXxtGzPQTzD9w';

// DOM Elements
const departureInput = document.getElementById('departure');
const destinationInput = document.getElementById('destination');
const departureSuggestions = document.getElementById('departure-suggestions');
const destinationSuggestions = document.getElementById('destination-suggestions');

// Fetch city suggestions
async function fetchCitySuggestions(query, suggestionsList) {
    if (!query) {
        suggestionsList.innerHTML = '';
        suggestionsList.style.display = 'none';
        return;
    }

    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${query}.json?access_token=${mapboxAccessToken}&autocomplete=true&types=place`;
    const response = await fetch(url);
    const data = await response.json();

    // Display suggestions
    suggestionsList.innerHTML = '';
    data.features.forEach((feature) => {
        const li = document.createElement('li');
        li.textContent = feature.place_name;
        li.addEventListener('click', () => {
            suggestionsList.previousElementSibling.value = feature.place_name; // Update input value
            suggestionsList.style.display = 'none'; // Hide suggestions
        });
        suggestionsList.appendChild(li);
    });
    suggestionsList.style.display = 'block';
}

// Event listeners for inputs
departureInput.addEventListener('input', () => fetchCitySuggestions(departureInput.value, departureSuggestions));
destinationInput.addEventListener('input', () => fetchCitySuggestions(destinationInput.value, destinationSuggestions));


document.querySelectorAll('.faq-question').forEach(button => {
    button.addEventListener('click', () => {
        const faqItem = button.parentElement;

        // Toggle active class
        faqItem.classList.toggle('active');

        // Collapse all other items
        document.querySelectorAll('.faq-item').forEach(item => {
            if (item !== faqItem) {
                item.classList.remove('active');
            }
        });
    });
});


