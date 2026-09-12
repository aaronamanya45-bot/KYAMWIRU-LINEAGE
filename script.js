/* =====================================================
   KYAMWIRU LINEAGE — MAIN SCRIPT (COMPLETE)
   ===================================================== */

(function () {
    'use strict';

    console.log('✅ Kyamwiru script loaded');

    /* ---------- IMAGES ---------- */
    const HERO_IMG    = "images/HERO.png";
    const GRANDMA_IMG = "images/KAKA.png";
    const GRANDPA_IMG = "images/TITI.png";

    /* ---------- PAGE 2 — ELDERS & AUNTIES (10) ---------- */
    const PAGE2_MEMBERS = [
        {img: "images/RUTH.jpeg" },
        {img: "images/IMMY.png" },
        { img: "images/GRACE.jpeg" },
        { img: "images/BRENDA.jpeg", pos: "center 40%" },
        {  img: "images/CHANUNU.jpeg" },
        { img: "images/CHUNCHUNU.jpeg" },
        { img: "images/MUHOOZI.png" },
        { img: "images/MUM.jpeg" },
        { img: "images/SISTERS.jpeg" },
        { img: "images/FORGOT.png" }
    ];

    /* ---------- PAGE 3 — GRANDSONS & GRANDDAUGHTERS (20) ---------- */
    const PAGE3_MEMBERS = [
        {   img: "images/PRIMA.jpeg" },
        {  img: "images/MATHIAS.jpeg" },
        {  img: "images/ZEDE.png" },
        { img: "images/BADBOYS.jpeg" },
        { img: "images/ALLEN.jpeg" },
        { img: "images/SISTERS.jpeg" },
        { img: "images/ELIZ.png" },
        { img: "images/EASTER.jpeg" },
        { img: "images/MARVIN.jpeg" },
        { img: "images/NINSI.png" },
        { img: "images/KIKADE.png" },
        { img: "images/BAB.jpeg" },
        { img: "images/BRIAN.png" },
        { img: "images/MWO.png" },
        { img: "images/JACK.jpeg" },
        { img: "images/ENID.jpeg" },
        { img: "images/JOYY.png" },
        { img: "images/DORAH.jpeg" },
        { img: "images/IVAN.png" },
        { img: "images/ME.jpeg" }
    ];

    /* ---------- PAGE 4 — FAMILY MOMENTS (2 videos) ---------- */
    const FAMILY_VIDEOS = [
        { title: "Kyamwiru Family Reunion — Sembabule 2024", desc: "The entire Kyamwiru lineage gathers in Kankalangye to celebrate decades of family and unity.", poster: "images/December 7, 2025.mp4", src: "https://cdn.coverr.co/videos/coverr-a-family-gathering-around-a-table-5099/1080p.mp4" },
        { title: "Sunday Worship & Thanksgiving", desc: "Our family gives thanks for His protection, provision, and the legacy He has built through us.", poster: "images/SUNDAY_WORSHIP.jpeg", src: "https://cdn.coverr.co/videos/coverr-hands-holding-each-other-1080p.mp4" }
    ];

    /* ---------- DOM ---------- */
    const app          = document.getElementById('app');
    const navLinks     = document.querySelectorAll('.nav-link');
    const footerLinks  = document.querySelectorAll('.footer-col ul a');
    const menuToggle   = document.getElementById('menu-toggle');
    const mainNav      = document.getElementById('main-nav');
    const backToTop    = document.getElementById('back-to-top');
    const scrollBar    = document.getElementById('scroll-progress');
    const header       = document.getElementById('main-header');
    const loader       = document.getElementById('loader');

    if (!app) { console.error('❌ #app not found'); return; }

    /* ---------- HELPERS ---------- */
    function setActiveNav(pageKey) {
        navLinks.forEach(function (l) { l.classList.toggle('active', l.dataset.page === pageKey); });
    }
    function closeMobileMenu() {
        if (mainNav) mainNav.classList.remove('open');
        if (menuToggle) menuToggle.classList.remove('open');
    }
    function buildMemberCards(members) {
        var html = '';
        for (var i = 0; i < members.length; i++) {
            var m = members[i];
            html += '<div class="member-card reveal-on-scroll">' +
                        '<div class="img-wrap"><img src="' + m.img + '" alt="' + m.name + '" loading="lazy"></div>' +
                        '<div class="member-name">' + m.name + '</div>' +
                        '<div class="member-role">' + m.role + '</div>' +
                    '</div>';
        }
        return html;
    }
    function initReveal() {
        var obs = new IntersectionObserver(function (entries) {
            entries.forEach(function (e) {
                if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); }
            });
        }, { threshold: 0.1 });
        document.querySelectorAll('.reveal-on-scroll').forEach(function (el) { obs.observe(el); });
    }

    /* ---------- PAGE 1 — HOME ---------- */
    function renderHome() {
        setActiveNav('home');
        app.innerHTML =
            '<div class="hero">' +
                '<img class="hero-image" src="' + HERO_IMG + '" alt="Kyamwiru family heritage">' +
                '<div class="hero-overlay">' +
                    '<div class="hero-quote">' +
                        '<h2>“The Kyamwiru family has lasted for over <em>decades</em> and still going on.”</h2>' +
                        '<p>— Sembabule District · Kankalangye</p>' +
                    '</div>' +
                '</div>' +
            '</div>' +

            '<div class="welcome">' +
                '<h1>Welcome to the <i>Kyamwiru Lineage</i></h1>' +
                '<div class="sub">A legacy of love, resilience, and unity — from our ancestors to our grandchildren.</div>' +
                '<div class="location-badge">📍 Sembabule District — Kankalangye</div>' +
            '</div>' +

            '<div class="section-title">' +
                '<h2>Our Beloved Grandparents</h2>' +
                '<p>The pillars of the Kyamwiru Lineage</p>' +
            '</div>' +

            '<div class="grandparents">' +
                '<div class="gp-card">' +
                    '<div class="ribbon">Matriarch</div>' +
                    '<img src="' + GRANDMA_IMG + '" alt="Grandma Kyamwiru">' +
                    '<div class="name">Grandma Kyamwiru</div>' +
                    '<div class="role">Matriarch</div>' +
                '</div>' +
                '<div class="gp-card">' +
                    '<div class="ribbon">Patriarch</div>' +
                    '<img src="' + GRANDPA_IMG + '" alt="Grandpa Kyamwiru">' +
                    '<div class="name">Grandpa Kyamwiru</div>' +
                    '<div class="role">Patriarch</div>' +
                '</div>' +
            '</div>' +

            '<div class="section-title" id="article">' +
                '<h2>Our Family Article</h2>' +
                '<p>A story of heritage, resilience, and unity</p>' +
            '</div>' +

            '<article class="article-wrap reveal-on-scroll">' +
                '<header class="article-header">' +
                    '<span class="article-tag">Family History</span>' +
                    '<h2>The Kyamwiru Lineage: A Legacy Rooted in Kankalangye</h2>' +
                    '<p class="article-meta">Written by the Kyamwiru Family Council · Sembabule District, Uganda</p>' +
                '</header>' +
                '<div class="article-body">' +
                    '<p>For over six decades, the name <strong>Kyamwiru</strong> has echoed through the rolling hills of Sembabule District, in the small but proud village of Kankalangye. What began as a humble household built on faith, hard work, and a deep respect for family has grown into a lineage that spans four generations — a living testimony that when love is the foundation, a family can withstand anything.</p>' +

                    '<h3>Where It All Began</h3>' +
                    '<p>The story of our lineage traces back to the union of our beloved grandparents, whose marriage marked the birth of the Kyamwiru name. From their small homestead in Kankalangye, they raised children who would grow to become uncles, aunties, mothers, and fathers — each carrying forward the values they were taught: <strong>honesty, unity, and hard work</strong>. Their home was never just a house; it was a gathering place, a school of life, and a sanctuary for anyone who needed it.</p>' +

                    '<blockquote>“A family is like a forest. When you are outside, it is dense. When you are inside, you see that each tree has its own place.”<cite>— Kyamwiru Family Proverb</cite></blockquote>' +

                    '<h3>The Pillars of Our Family</h3>' +
                    '<p>Today, the Kyamwiru lineage stands on four strong pillars that our grandparents instilled in every generation:</p>' +
                    '<ul>' +
                        '<li><strong>Faith</strong> — Trust in God and in one another, no matter the season.</li>' +
                        '<li><strong>Unity</strong> — We gather, we celebrate, and we mourn together. No one walks alone.</li>' +
                        '<li><strong>Hard Work</strong> — From the gardens of Kankalangye to the cities of Uganda, we labour with dignity.</li>' +
                        '<li><strong>Respect</strong> — For our elders, our culture, and the land that raised us.</li>' +
                    '</ul>' +

                    '<h3>From Kankalangye to the World</h3>' +
                    '<p>Though our roots remain firmly planted in Sembabule, the branches of the Kyamwiru family now reach far beyond — into Kampala, across Uganda, and even beyond its borders. Our uncles and aunties have become teachers, farmers, traders, and community leaders. Our brothers and sisters carry the family name into new generations, while our grandsons and granddaughters are the promise of a future we may not see, but for which we are building.</p>' +

                    '<h3>A Promise to Future Generations</h3>' +
                    '<p>As we look ahead, we do so with gratitude for those who came before us and with hope for those who will come after. This lineage — the <strong>Kyamwiru Lineage</strong> — is not merely a collection of names. It is a covenant. It is a story that says: <em>we were here, we loved, we endured, and we are still going on.</em></p>' +

                    '<blockquote>“Obumu buli maanyi — Unity is strength.”<cite>— The Kyamwiru Family Motto</cite></blockquote>' +

                    '<p>To every member of the Kyamwiru family, wherever you are: you are part of something beautiful, something lasting, something that has survived decades and will survive many more. Welcome home.</p>' +
                '</div>' +
            '</article>';

        initReveal();
    }

    /* ---------- PAGE 2 — ELDERS ---------- */
    function renderElders() {
        setActiveNav('elders');
        app.innerHTML =
            '<div class="page-header">' +
                '<h1 class="page-title">Elders &amp; Aunties</h1>' +
                '<p class="page-subhead">The guiding voices of the Kyamwiru family</p>' +
            '</div>' +
            '<div class="family-grid">' + buildMemberCards(PAGE2_MEMBERS) + '</div>';
        initReveal();
    }

    /* ---------- PAGE 3 — GRANDSONS ---------- */
    function renderGrandsons() {
        setActiveNav('grandsons');
        app.innerHTML =
            '<div class="page-header">' +
                '<h1 class="page-title">Grandsons &amp; Granddaughters</h1>' +
                '<p class="page-subhead">The next generation — carrying the Kyamwiru torch forward</p>' +
            '</div>' +
            '<div class="family-grid">' + buildMemberCards(PAGE3_MEMBERS) + '</div>';
        initReveal();
    }

    /* ---------- PAGE 4 — MOMENTS ---------- */
    function renderMoments() {
        setActiveNav('moments');
        var videos = '';
        for (var i = 0; i < FAMILY_VIDEOS.length; i++) {
            var v = FAMILY_VIDEOS[i];
            videos += '<div class="video-card">' +
                        '<div class="video-wrapper">' +
                            '<video controls preload="none" poster="' + v.poster + '">' +
                                '<source src="' + v.src + '" type="video/mp4">' +
                            '</video>' +
                        '</div>' +
                        '<div class="video-info">' +
                            '<h3>' + v.title + '</h3>' +
                            '<p>' + v.desc + '</p>' +
                        '</div>' +
                    '</div>';
        }
        app.innerHTML =
            '<div class="page-header">' +
                '<h1 class="page-title">Family Moments</h1>' +
                '<p class="page-subhead">Cherished memories of the Kyamwiru family — captured in time</p>' +
            '</div>' +
            '<div class="video-grid">' + videos + '</div>';
    }

    /* ---------- ROUTER ---------- */
    var routes = {
        home: renderHome,
        elders: renderElders,
        grandsons: renderGrandsons,
        moments: renderMoments
    };
    function navigate(page) {
        var render = routes[page] || renderHome;
        render();
        app.classList.remove('page-enter');
        void app.offsetWidth;
        app.classList.add('page-enter');
        window.location.hash = page;
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    /* ---------- EVENTS ---------- */
    navLinks.forEach(function (link) {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            navigate(link.dataset.page);
            closeMobileMenu();
        });
    });
    footerLinks.forEach(function (link) {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            navigate(link.dataset.page);
        });
    });
    var logoEl = document.querySelector('.logo');
    if (logoEl) {
        logoEl.addEventListener('click', function (e) { e.preventDefault(); navigate('home'); });
    }
    if (menuToggle) {
        menuToggle.addEventListener('click', function () {
            menuToggle.classList.toggle('open');
            if (mainNav) mainNav.classList.toggle('open');
        });
    }
    window.addEventListener('hashchange', function () {
        var page = window.location.hash.replace('#', '') || 'home';
        if (routes[page]) routes[page]();
    });

    /* ---------- SCROLL EFFECTS ---------- */
    var ticking = false;
    window.addEventListener('scroll', function () {
        if (ticking) return;
        ticking = true;
        requestAnimationFrame(function () {
            var st = window.scrollY;
            var dh = document.documentElement.scrollHeight - window.innerHeight;
            var progress = dh > 0 ? (st / dh) * 100 : 0;
            if (scrollBar) scrollBar.style.width = progress + '%';
            if (header) header.classList.toggle('scrolled', st > 60);
            if (backToTop) backToTop.classList.toggle('show', st > 400);
            ticking = false;
        });
    }, { passive: true });

    if (backToTop) {
        backToTop.addEventListener('click', function () {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    /* ---------- LOADER ---------- */
    window.addEventListener('load', function () {
        setTimeout(function () { if (loader) loader.classList.add('hidden'); }, 500);
    });
    setTimeout(function () {
        if (loader && !loader.classList.contains('hidden')) loader.classList.add('hidden');
    }, 2500);

    /* ---------- INITIAL ---------- */
    var initial = window.location.hash.replace('#', '') || 'home';
    if (routes[initial]) routes[initial]();
    else renderHome();

})();