// 咖啡生产数据
const coffeeData = {
    "BR": { name: "Brazil", production: 3000, type: "Arabica" },
    "VN": { name: "Vietnam", production: 1800, type: "Robusta" },
    "CO": { name: "Colombia", production: 1400, type: "Arabica" },
    "ID": { name: "Indonesia", production: 1200, type: "Robusta" },
    "ET": { name: "Ethiopia", production: 800, type: "Arabica" },
    "HN": { name: "Honduras", production: 600, type: "Arabica" },
    "IN": { name: "India", production: 500, type: "Robusta" },
    "UG": { name: "Uganda", production: 400, type: "Robusta" },
    "MX": { name: "Mexico", production: 350, type: "Arabica" },
    "GT": { name: "Guatemala", production: 300, type: "Arabica" }
};

// 初始化地图
am5.ready(function() {
    // 创建根元素
    var root = am5.Root.new("chartdiv");

    // 设置主题
    root.setThemes([am5themes_Animated.new(root)]);

    // 创建地图
    var chart = root.container.children.push(
        am5map.MapChart.new(root, {
            panX: "translateX",
            panY: "translateY",
            projection: am5map.geoMercator()
        })
    );

    // 创建多边形系列
    var polygonSeries = chart.series.push(
        am5map.MapPolygonSeries.new(root, {
            geoJSON: am5geodata_worldLow,
            exclude: ["AQ"]
        })
    );

    // 配置多边形
    polygonSeries.mapPolygons.template.setAll({
        tooltipText: "{name}",
        toggleKey: "active",
        interactive: true,
        fill: am5.color("#eee"),
        strokeWidth: 0.5
    });

    // 添加点击事件
    polygonSeries.mapPolygons.template.events.on("click", function(ev) {
        const countryId = ev.target.dataItem.get("id");
        const countryData = coffeeData[countryId];
        
        if (countryData) {
            showCountryInfo(countryData);
        }
    });

    // 设置数据
    polygonSeries.set("heatRules", [{
        target: polygonSeries.mapPolygons.template,
        dataField: "value",
        min: am5.color("#eee"),
        max: am5.color("#673AB7")
    }]);

    polygonSeries.data.setAll([
        { id: "BR", value: coffeeData.BR.production },
        { id: "VN", value: coffeeData.VN.production },
        { id: "CO", value: coffeeData.CO.production },
        { id: "ID", value: coffeeData.ID.production },
        { id: "ET", value: coffeeData.ET.production },
        { id: "HN", value: coffeeData.HN.production },
        { id: "IN", value: coffeeData.IN.production },
        { id: "UG", value: coffeeData.UG.production },
        { id: "MX", value: coffeeData.MX.production },
        { id: "GT", value: coffeeData.GT.production }
    ]);

    // 添加图例
    var legend = chart.children.push(
        am5.Legend.new(root, {
            centerX: am5.p50,
            x: am5.p50,
            background: am5.Rectangle.new(root, {
                fill: am5.color("#fff"),
                fillOpacity: 0.2
            })
        })
    );

    legend.data.setAll(polygonSeries.dataItems);
});

// 显示国家信息
function showCountryInfo(countryData) {
    const modal = $('#infoModal');
    const countryInfo = $('#countryInfo');
    
    countryInfo.html(`
        <div class="country-info">
            <h3>${countryData.name}</h3>
            <p>Production: ${countryData.production} thousand metric tons</p>
            <p>Primary Coffee Type: ${countryData.type}</p>
        </div>
    `);
    
    modal.modal('show');
}

<script>
var timeline_json = {
    "title": {
        "text": {
            "headline": "Silk Road Timeline",
            "text": "A journey through the major events and developments of the ancient Silk Road"
        }
    },
    "events": [
        {
            "start_date": {"year": "-138", "display_date": "138 BC"},
            "text": {"headline": "Zhang Qian's Mission"},
        },
        {
            "start_date": {"year": "97", "display_date": "97 AD"},
            "text": {"headline": "Ban Chao's Campaigns"},
        },
        {
            "start_date": {"year": "629", "display_date": "629-645 AD"},
            "text": {"headline": "Xuanzang's Journey"},
        },
        {
            "start_date": {"year": "1372", "display_date": "1372 AD"},
            "text": {"headline": "Construction of Jiayuguan Pass"},
        },
        {
            "start_date": {"year": "1645", "display_date": "1645 AD"},
            "text": {"headline": "Construction of Potala Palace"},
        }
    ]
};

const heritageData = [
  {
    img: "img/wild-goose.jpg",
    name: "Giant Wild Goose Pagoda",
    event: "Zhang Qian's Mission",
    date: "138 BC",
    desc: "Symbolizes the Silk Road's eastern start, built after Zhang Qian's mission."
  },
  {
    img: "img/jiaohe.jpg",
    name: "Jiaohe Ruins",
    event: "Ban Chao's Campaigns",
    date: "97 AD",
    desc: "A key military and trading outpost, secured by Ban Chao's campaigns."
  },
  {
    img: "img/mogao-mural.jpg",
    name: "Mogao Caves",
    event: "Xuanzang's Journey",
    date: "629-645 AD",
    desc: "Flourished as a Buddhist art center after Xuanzang's journey."
  },
  {
    img: "img/jiayuguan-pass.jpg",
    name: "Jiayuguan Pass",
    event: "Construction of Jiayuguan Pass",
    date: "1372 AD",
    desc: "The western terminus of the Ming Great Wall, built in 1372."
  },
  {
    img: "img/potala-palace.jpg",
    name: "Potala Palace",
    event: "Construction of Potala Palace",
    date: "1645 AD",
    desc: "A landmark of the southern Silk Road, built in 1645."
  }
];

function renderHeritageInfo(idx) {
    const h = heritageData[idx];
    document.getElementById('heritage-info').innerHTML = `
      <div class="card mx-auto mb-4 shadow" style="max-width: 600px;">
        <img src="${h.img}" class="card-img-top" alt="${h.name}" style="object-fit:cover;max-height:280px;">
        <div class="card-body">
          <h4 class="card-title mb-2">${h.name}</h4>
          <h6 class="mb-2 text-muted">${h.event} <span class="small">(${h.date})</span></h6>
          <p class="mb-2">${h.desc}</p>
        </div>
      </div>
    `;
}

window.timeline = new TL.Timeline('timeline', timeline_json);

document.addEventListener('DOMContentLoaded', function() {
    renderHeritageInfo(0);
    window.timeline.on('change', function() {
        // 用 TimelineJS 的 getCurrentSlideIndex() 获取当前索引
        let idx = window.timeline.getCurrentSlideIndex ? window.timeline.getCurrentSlideIndex() : 0;
        renderHeritageInfo(idx);
    });
});
</script> 