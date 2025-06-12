// 冲浪地图交互脚本
document.addEventListener('DOMContentLoaded', function() {
    // 引入Leaflet地图库（需在mkdocs.yml中添加CDN）
    const script = document.createElement('script');
    script.src = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js';
    script.onload = function() {
      initMap();
    };
    document.head.appendChild(script);
    
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css';
    document.head.appendChild(link);
    
    // 浪点数据
    const surfSpots = [
      // 国内浪点
      { 
        name: "三亚后海", 
        lat: 18.2557, 
        lng: 109.5213, 
        level: "beginner",
        region: "china",
        description: "中国最适合初学者的冲浪海滩，夏季平均浪高1-1.5米。"
      },
      { 
        name: "万宁日月湾", 
        lat: 18.6577, 
        lng: 110.3347, 
        level: "intermediate",
        region: "china",
        description: "国内顶级浪点，冬季浪高1.5-2.5米，适合中级以上玩家。"
      },
      { 
        name: "深圳西涌", 
        lat: 22.6847, 
        lng: 114.7325, 
        level: "beginner",
        region: "china",
        description: "珠三角地区入门级浪点，夏季浪高0.5-1米。"
      },
      
      // 国际浪点
      { 
        name: "巴厘岛乌鲁瓦图", 
        lat: -8.4095, 
        lng: 115.1889, 
        level: "advanced",
        region: "international",
        description: "世界顶级浪点，旱季浪高2-4米，适合高级玩家。"
      },
      { 
        name: "夏威夷Pipeline", 
        lat: 21.4643, 
        lng: -157.8043, 
        level: "advanced",
        region: "international",
        description: "世界级管浪浪点，冬季浪高3-6米，仅限专业选手。"
      },
      { 
        name: "澳大利亚贝尔斯海滩", 
        lat: -38.3551, 
        lng: 144.3996, 
        level: "intermediate",
        region: "international",
        description: "Rip Curl Pro赛事举办地，适合中级以上玩家。"
      }
    ];
    
    // 初始化地图
    function initMap() {
      const map = L.map('surf-map').setView([20, 110], 4);
      
      // 添加地图图层
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors'
      }).addTo(map);
      
      // 添加浪点标记
      const markers = {};
      surfSpots.forEach(spot => {
        const icon = L.icon({
          iconUrl: spot.level === 'beginner' 
            ? 'https://cdn.jsdelivr.net/npm/leaflet@1.9.4/dist/images/marker-icon.png' 
            : spot.level === 'intermediate' 
              ? 'https://cdn.jsdelivr.net/npm/leaflet@1.9.4/dist/images/marker-icon-green.png' 
              : 'https://cdn.jsdelivr.net/npm/leaflet@1.9.4/dist/images/marker-icon-red.png',
          iconSize: [25, 41],
          iconAnchor: [12, 41]
        });
        
        const marker = L.marker([spot.lat, spot.lng], { icon: icon }).addTo(map);
        marker.bindPopup(`<b>${spot.name}</b><br>${spot.description}`);
        
        if (!markers[spot.level]) {
          markers[spot.level] = [];
        }
        markers[spot.level].push(marker);
      });
      
      // 筛选功能
      const filterButtons = document.querySelectorAll('.filter-btn');
      filterButtons.forEach(button => {
        button.addEventListener('click', function() {
          // 移除所有标记
          surfSpots.forEach(spot => {
            map.removeLayer(markers[spot.level][surfSpots.indexOf(spot)]);
          });
          
          // 显示筛选后的标记
          const filter = this.getAttribute('data-filter');
          filterButtons.forEach(btn => btn.classList.remove('active'));
          this.classList.add('active');
          
          if (filter === 'all') {
            surfSpots.forEach((spot, index) => {
              map.addLayer(markers[spot.level][index]);
            });
          } else if (filter === 'china' || filter === 'international') {
            surfSpots.forEach((spot, index) => {
              if (spot.region === filter) {
                map.addLayer(markers[spot.level][index]);
              }
            });
          } else {
            surfSpots.forEach((spot, index) => {
              if (spot.level === filter) {
                map.addLayer(markers[spot.level][index]);
              }
            });
          }
        });
      });
    }
  });