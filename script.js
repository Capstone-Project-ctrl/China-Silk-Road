// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Add smooth scrolling for navigation links
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId !== '#') {
                document.querySelector(targetId).scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Add a class to header when scrolling
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
}); 

<script>
    var timeline_json = {
        // ...（你的 timeline_json 不变）...
    };

    window.timeline = new TL.Timeline('timeline', timeline_json);

    // 事件与景点图片的对应关系
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

    function renderHeritageCards(activeIdx = 0) {
        document.getElementById('heritage-cards').innerHTML = heritageData.map((h, idx) => `
            <div class="card mb-4 ${idx === activeIdx ? 'border-primary shadow' : ''}">
                <img src="${h.img}" class="card-img-top" alt="${h.name}" style="object-fit:cover;max-height:260px;">
                <div class="card-body">
                    <h4 class="card-title">${h.name}</h4>
                    <h6 class="text-muted">${h.event} <span class="small">(${h.date})</span></h6>
                    <p class="card-text">${h.desc}</p>
                </div>
            </div>
        `).join('');
    }

    document.addEventListener('DOMContentLoaded', function() {
        renderHeritageCards(0);
        document.querySelectorAll('#timeline-list .list-group-item').forEach((item, idx) => {
            item.addEventListener('click', function() {
                document.querySelectorAll('#timeline-list .list-group-item').forEach(li => li.classList.remove('active'));
                this.classList.add('active');
                renderHeritageCards(idx);
            });
        });
    });
</script> 

<div class="container my-5">
  <div class="row">
    <!-- 时间线 -->
    <div class="col-md-5">
      <ul class="list-group" id="timeline-list">
        <li class="list-group-item active" data-idx="0">
          <b>138 BC</b> Zhang Qian's Mission
        </li>
        <li class="list-group-item" data-idx="1">
          <b>97 AD</b> Ban Chao's Campaigns
        </li>
        <li class="list-group-item" data-idx="2">
          <b>629-645 AD</b> Xuanzang's Journey
        </li>
        <li class="list-group-item" data-idx="3">
          <b>1372 AD</b> Construction of Jiayuguan Pass
        </li>
        <li class="list-group-item" data-idx="4">
          <b>1645 AD</b> Construction of Potala Palace
        </li>
      </ul>
    </div>
    <!-- 景点卡片 -->
    <div class="col-md-7">
      <div id="heritage-cards">
        <!-- JS填充卡片内容 -->
      </div>
    </div>
  </div>
</div> 