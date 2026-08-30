* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    scroll-behavior: smooth;
}

body {
    min-height: 100vh;
    background:
        radial-gradient(circle at 70% 0%, rgba(0, 255, 220, 0.07), transparent 30%),
        #050708;
    color: white;
    font-family: Arial, Helvetica, sans-serif;
    overflow-x: hidden;
}


/* SIDEBAR */

.sidebar {
    position: fixed;
    top: 0;
    left: 0;

    width: 86px;
    height: 100vh;

    background: rgba(6, 9, 10, 0.96);

    border-right: 1px solid rgba(255, 255, 255, 0.06);

    display: flex;
    flex-direction: column;

    z-index: 100;

    overflow: hidden;

    transition:
        width 0.25s ease,
        box-shadow 0.25s ease;
}

.sidebar:hover,
.sidebar:focus-within {
    width: 250px;

    box-shadow:
        20px 0 50px rgba(0, 0, 0, 0.45);
}


.sidebar-logo {
    height: 95px;

    display: flex;
    align-items: center;

    padding: 0 20px;

    text-decoration: none;

    flex-shrink: 0;
}

.sidebar-logo img {
    width: 205px;
    max-width: none;
}


.sidebar-nav {
    display: flex;
    flex-direction: column;

    gap: 5px;
}


.side-link {
    position: relative;

    min-height: 52px;

    display: flex;
    align-items: center;

    gap: 20px;

    padding: 0 24px;

    color: #9ea5a8;

    text-decoration: none;

    border-left: 3px solid transparent;

    white-space: nowrap;

    transition:
        color 0.18s ease,
        background 0.18s ease,
        border-color 0.18s ease;
}

.side-link:hover,
.side-link:focus-visible {
    color: white;

    background: rgba(255, 255, 255, 0.05);

    outline: none;
}

.side-link.active {
    color: #59f5e4;

    border-left-color: #59f5e4;

    background:
        linear-gradient(
            90deg,
            rgba(89, 245, 228, 0.12),
            transparent
        );
}


.side-icon {
    min-width: 34px;

    font-size: 26px;

    text-align: center;

    flex-shrink: 0;
}

.side-text {
    font-size: 15px;
    font-weight: 700;

    opacity: 0;

    transform: translateX(-5px);

    transition:
        opacity 0.18s ease,
        transform 0.18s ease;
}

.sidebar:hover .side-text,
.sidebar:focus-within .side-text {
    opacity: 1;
    transform: translateX(0);
}


.side-link.text-only {
    padding-left: 58px;
}

.side-link.text-only .side-text {
    margin-left: 0;
}


.sidebar-bottom {
    margin-top: auto;

    padding-bottom: 20px;
}


/* MAIN */

.main-content {
    margin-left: 86px;

    min-height: 100vh;

    padding-bottom: 80px;
}


/* HEADER */

.store-header {
    padding:
        70px
        clamp(30px, 5vw, 80px)
        40px;
}

.eyebrow,
.mini-label {
    color: #59f5e4;

    font-size: 12px;

    font-weight: 800;

    letter-spacing: 2px;
}

.store-header h1 {
    margin-top: 10px;

    max-width: 900px;

    font-size: clamp(48px, 6vw, 82px);

    letter-spacing: -3px;

    line-height: 0.98;
}

.header-description {
    margin-top: 20px;

    max-width: 680px;

    color: #a6adb0;

    font-size: 18px;

    line-height: 1.6;
}


.store-tabs {
    margin-top: 30px;

    display: flex;

    gap: 10px;

    flex-wrap: wrap;
}

.store-tab {
    border: 1px solid rgba(255, 255, 255, 0.12);

    background: rgba(255, 255, 255, 0.04);

    color: #b7bcbf;

    padding: 11px 18px;

    border-radius: 999px;

    font-size: 14px;

    font-weight: 700;

    cursor: pointer;

    transition:
        background 0.18s ease,
        color 0.18s ease,
        border-color 0.18s ease,
        transform 0.18s ease;
}

.store-tab:hover,
.store-tab:focus-visible {
    color: white;

    border-color: rgba(89, 245, 228, 0.45);

    transform: translateY(-1px);

    outline: none;
}

.store-tab.active {
    background: #59f5e4;

    border-color: #59f5e4;

    color: #03100f;
}


/* FEATURED STORE */

.featured-store {
    position: relative;

    min-height: 520px;

    margin:
        0
        clamp(30px, 5vw, 80px)
        70px;

    border-radius: 28px;

    overflow: hidden;

    display: flex;
    align-items: flex-end;

    background:
        radial-gradient(
            circle at 72% 32%,
            rgba(89, 245, 228, 0.8),
            transparent 18%
        ),
        radial-gradient(
            circle at 75% 40%,
            rgba(0, 108, 120, 0.55),
            transparent 32%
        ),
        linear-gradient(
            135deg,
            #071113,
            #082427 45%,
            #041012
        );

    border:
        1px solid
        rgba(255, 255, 255, 0.08);

    box-shadow:
        0 35px 80px rgba(0, 0, 0, 0.42);
}

.featured-overlay {
    position: absolute;
    inset: 0;

    background:
        linear-gradient(
            90deg,
            rgba(3, 7, 8, 0.96) 0%,
            rgba(3, 7, 8, 0.83) 36%,
            rgba(3, 7, 8, 0.25) 68%,
            rgba(3, 7, 8, 0.08) 100%
        ),
        linear-gradient(
            0deg,
            rgba(3, 7, 8, 0.92),
            transparent 55%
        );
}

.featured-content {
    position: relative;

    z-index: 2;

    max-width: 670px;

    padding: clamp(34px, 5vw, 68px);
}

.featured-label {
    display: inline-block;

    color: #59f5e4;

    font-size: 12px;

    font-weight: 800;

    letter-spacing: 2px;
}

.featured-content h2 {
    margin-top: 12px;

    font-size: clamp(48px, 6vw, 78px);

    line-height: 1;

    letter-spacing: -3px;
}

.featured-meta {
    margin-top: 18px;

    display: flex;

    gap: 10px;

    color: #c8cdcf;

    font-size: 14px;
}

.featured-content p {
    margin-top: 22px;

    max-width: 590px;

    color: #b3b9bb;

    font-size: 17px;

    line-height: 1.6;
}


.price-row {
    margin-top: 25px;

    display: flex;

    align-items: center;

    gap: 14px;
}

.old-price {
    color: #777d7f;

    font-size: 18px;

    text-decoration: line-through;
}

.new-price {
    color: #59f5e4;

    font-size: 23px;

    font-weight: 800;
}


.featured-actions {
    margin-top: 30px;

    display: flex;

    gap: 12px;

    flex-wrap: wrap;
}

.featured-actions button {
    min-height: 50px;

    border-radius: 11px;

    padding: 0 22px;

    font-size: 15px;

    font-weight: 800;

    cursor: pointer;

    transition:
        transform 0.18s ease,
        border-color 0.18s ease;
}

.primary-store-button {
    background: #59f5e4;

    color: #03100f;

    border: none;
}

.secondary-store-button {
    color: white;

    background: rgba(255, 255, 255, 0.09);

    border:
        1px solid
        rgba(255, 255, 255, 0.12);
}

.list-button {
    width: 52px;

    padding: 0 !important;

    color: white;

    font-size: 26px !important;

    background: rgba(255, 255, 255, 0.08);

    border:
        1px solid
        rgba(255, 255, 255, 0.13);
}

.featured-actions button:hover,
.featured-actions button:focus-visible {
    transform: translateY(-2px);

    outline: none;
}


/* STORE SECTIONS */

.store-section {
    padding:
        0
        clamp(30px, 5vw, 80px)
        65px;
}

.section-heading {
    margin-bottom: 22px;

    display: flex;

    align-items: flex-end;

    justify-content: space-between;

    gap: 20px;
}

.section-heading h2 {
    margin-top: 4px;

    font-size: 28px;
}


.store-grid {
    display: grid;

    grid-template-columns:
        repeat(auto-fill, minmax(245px, 1fr));

    gap: 25px;
}

.store-card {
    min-width: 0;

    cursor: pointer;
}

.store-art {
    position: relative;

    aspect-ratio: 16 / 10;

    border-radius: 18px;

    overflow: hidden;

    border:
        1px solid
        rgba(255, 255, 255, 0.08);

    box-shadow:
        0 18px 40px rgba(0, 0, 0, 0.28);

    transition:
        transform 0.2s ease,
        border-color 0.2s ease,
        box-shadow 0.2s ease;
}

.store-card:hover .store-art,
.store-card:focus-within .store-art {
    transform: scale(1.035);

    border-color: rgba(89, 245, 228, 0.62);

    box-shadow:
        0 25px 60px rgba(0, 0, 0, 0.44);
}


.store-art::after {
    content: "";

    position: absolute;

    inset: 0;

    background:
        linear-gradient(
            0deg,
            rgba(3, 6, 7, 0.72),
            transparent 60%
        );
}


.art-one {
    background:
        radial-gradient(circle at 72% 30%, #59f5e4, transparent 18%),
        linear-gradient(135deg, #071113, #11363a);
}

.art-two {
    background:
        radial-gradient(circle at 28% 20%, #b1e6ff, transparent 15%),
        linear-gradient(135deg, #0d1422, #3b3656);
}

.art-three {
    background:
        radial-gradient(circle at 78% 45%, #f46f53, transparent 18%),
        linear-gradient(135deg, #160909, #552012);
}

.art-four {
    background:
        radial-gradient(circle at 74% 22%, #f04c4c, transparent 16%),
        linear-gradient(135deg, #100708, #401010);
}

.art-five {
    background:
        radial-gradient(circle at 65% 25%, #f1c9ff, transparent 17%),
        linear-gradient(135deg, #0b0910, #362440);
}

.art-six {
    background:
        radial-gradient(circle at 75% 25%, #71d2ff, transparent 17%),
        linear-gradient(135deg, #071017, #17354c);
}

.art-seven {
    background:
        radial-gradient(circle at 25% 40%, #5af0ce, transparent 17%),
        linear-gradient(135deg, #07100f, #223330);
}

.art-eight {
    background:
        radial-gradient(circle at 77% 33%, #9c74ff, transparent 17%),
        linear-gradient(135deg, #0b0811, #281c42);
}

.art-nine {
    background:
        radial-gradient(circle at 70% 18%, #6cd9ff, transparent 16%),
        linear-gradient(135deg, #07141a, #173f50);
}

.art-ten {
    background:
        radial-gradient(circle at 77% 30%, #ffd36c, transparent 16%),
        linear-gradient(135deg, #181208, #4b3513);
}


.store-badge {
    position: absolute;

    top: 13px;
    left: 13px;

    z-index: 3;

    padding: 7px 9px;

    border-radius: 7px;

    background: #59f5e4;

    color: #03100f;

    font-size: 10px;

    font-weight: 900;

    letter-spacing: 1px;
}

.deal-badge {
    background: white;

    color: #070909;
}


.quick-list-button {
    position: absolute;

    top: 12px;
    right: 12px;

    z-index: 4;

    width: 38px;
    height: 38px;

    border-radius: 50%;

    border:
        1px solid
        rgba(255, 255, 255, 0.18);

    background:
        rgba(4, 7, 8, 0.72);

    color: white;

    font-size: 22px;

    cursor: pointer;
}

.quick-list-button:hover,
.quick-list-button:focus-visible {
    border-color: #59f5e4;

    outline: none;
}


.store-card-info {
    padding: 14px 3px 0;
}

.store-card-info h3 {
    font-size: 19px;
}

.store-card-info p {
    margin-top: 6px;

    color: #82898c;

    font-size: 13px;
}

.store-pricing {
    margin-top: 13px;

    display: flex;

    align-items: center;

    justify-content: space-between;

    gap: 12px;

    color: #a7adaf;

    font-size: 13px;
}

.store-pricing strong {
    color: #59f5e4;

    font-size: 14px;
}


.store-note {
    margin:
        20px
        clamp(30px, 5vw, 80px)
        0;

    padding: 22px 24px;

    border-radius: 16px;

    border:
        1px solid
        rgba(255, 255, 255, 0.08);

    background:
        rgba(255, 255, 255, 0.03);

    color: #959c9f;
}

.store-note strong {
    color: white;
}

.store-note p {
    margin-top: 7px;

    line-height: 1.5;
}


/* HIDDEN FILTER ITEMS */

.store-card.hidden {
    display: none;
}


/* MOBILE */

@media (max-width: 800px) {

    .sidebar {
        width: 68px;
    }

    .sidebar:hover,
    .sidebar:focus-within {
        width: 215px;
    }

    .sidebar-logo {
        padding-left: 12px;
    }

    .side-link {
        padding-left: 15px;
    }

    .side-link.text-only {
        padding-left: 49px;
    }

    .main-content {
        margin-left: 68px;
    }

    .store-header {
        padding-top: 45px;
    }

    .featured-store {
        min-height: 480px;
    }

    .featured-content {
        padding: 30px;
    }

    .store-grid {
        grid-template-columns:
            repeat(auto-fill, minmax(190px, 1fr));
    }
}
