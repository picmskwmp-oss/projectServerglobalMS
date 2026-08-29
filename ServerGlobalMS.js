/**
 * MAUSLOT Server Widget
 * File JavaScript mandiri untuk GitHub/jsDelivr.
 *
 * Setelah file di-upload ke GitHub, pasang pada website:
 * <script src="https://cdn.jsdelivr.net/gh/USERNAME/REPOSITORY@main/server-widget-mauslot.js"></script>
 */
(() => {
  'use strict';

  const WIDGET_ID = 'MauslotSrv';
  const STYLE_ID = 'MauslotSrvStyle';
  const LOADING_ID = 'MauslotSrvLoading';
  const LOADING_DURATION = 4000;
  const AMOUNT_MIN_STEP = 12500;
  const AMOUNT_MAX_STEP = 98000;
  const AMOUNT_ANIMATION_TIME = 900;
  const PLAYER_MIN_DELAY = 2500;
  const PLAYER_MAX_DELAY = 4500;

  const LOADING_CSS = `
  html.Mauslot-ai-loading,
  html.Mauslot-ai-loading body {
    overflow: hidden !important;
  }

  #MauslotSrvLoading,
  #MauslotSrvLoading * {
    box-sizing: border-box;
  }

  #MauslotSrvLoading {
    position: fixed;
    inset: 0;
    z-index: 2147483647;
    display: grid;
    place-items: center;
    padding: 24px;
    visibility: hidden;
    opacity: 0;
    pointer-events: none;
    background:
      radial-gradient(circle at 50% 45%, rgba(0, 136, 255, .18), transparent 42%),
      rgba(0, 4, 24, .72);
    -webkit-backdrop-filter: blur(15px) saturate(.65);
    backdrop-filter: blur(15px) saturate(.65);
    transition: opacity .22s ease, visibility .22s ease;
    font-family: Arial, Helvetica, sans-serif;
  }

  #MauslotSrvLoading.on {
    visibility: visible;
    opacity: 1;
    pointer-events: auto;
  }

  .Mauslot-ai-loader__panel {
    position: relative;
    width: min(330px, calc(100vw - 36px));
    padding: 32px 22px 26px;
    overflow: hidden;
    border: 1px solid rgba(83, 219, 255, .55);
    border-radius: 24px;
    background: linear-gradient(155deg, rgba(5, 25, 79, .9), rgba(1, 6, 31, .94));
    box-shadow:
      0 24px 70px rgba(0, 0, 0, .7),
      0 0 35px rgba(0, 136, 255, .3),
      inset 0 0 30px rgba(61, 210, 255, .08);
    color: #fff;
    text-align: center;
  }

  .Mauslot-ai-loader__panel::before {
    content: "";
    position: absolute;
    inset: 0;
    pointer-events: none;
    background: repeating-linear-gradient(
      0deg,
      transparent 0,
      transparent 5px,
      rgba(75, 219, 255, .035) 6px
    );
  }

  .Mauslot-ai-loader__visual {
    position: relative;
    width: 126px;
    height: 126px;
    margin: 0 auto 24px;
  }

  .Mauslot-ai-loader__orbit,
  .Mauslot-ai-loader__core {
    position: absolute;
    top: 50%;
    left: 50%;
    border-radius: 50%;
    transform: translate(-50%, -50%);
  }

  .Mauslot-ai-loader__orbit {
    border-style: solid;
  }

  .Mauslot-ai-loader__orbit--one {
    width: 126px;
    height: 126px;
    border-width: 2px;
    border-color: #56e7ff transparent #0878ff transparent;
    box-shadow: 0 0 18px rgba(44, 203, 255, .45);
    animation: MauslotAiSpin 1.35s linear infinite;
  }

  .Mauslot-ai-loader__orbit--two {
    width: 98px;
    height: 98px;
    border-width: 1px;
    border-color: transparent #1ba4ff transparent #73f1ff;
    animation: MauslotAiSpinReverse 1.05s linear infinite;
  }

  .Mauslot-ai-loader__core {
    display: grid;
    place-items: center;
    width: 68px;
    height: 68px;
    border: 1px solid rgba(107, 238, 255, .9);
    background:
      radial-gradient(circle at 36% 30%, rgba(139, 246, 255, .65), transparent 22%),
      linear-gradient(145deg, #0d8dff, #022a92 72%);
    box-shadow:
      0 0 15px #008cff,
      0 0 38px rgba(0, 180, 255, .65),
      inset 0 0 18px rgba(148, 245, 255, .45);
    color: #fff;
    font-size: 23px;
    font-weight: 900;
    letter-spacing: 1px;
    text-shadow: 0 0 9px #fff;
    animation: MauslotAiPulse 1.2s ease-in-out infinite;
  }

  .Mauslot-ai-loader__node {
    position: absolute;
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: #72efff;
    box-shadow: 0 0 10px #18b9ff;
    animation: MauslotAiBlink .9s ease-in-out infinite alternate;
  }

  .Mauslot-ai-loader__node--one { top: 8px; left: 34px; }
  .Mauslot-ai-loader__node--two { right: 9px; bottom: 34px; animation-delay: .25s; }
  .Mauslot-ai-loader__node--three { bottom: 12px; left: 24px; animation-delay: .5s; }

  .Mauslot-ai-loader__title {
    position: relative;
    margin: 0;
    color: #f4fcff;
    font-size: clamp(17px, 5vw, 22px);
    line-height: 1.25;
    font-weight: 900;
    letter-spacing: .7px;
    text-transform: uppercase;
    text-shadow: 0 0 15px rgba(53, 204, 255, .85);
  }

  .Mauslot-ai-loader__status {
    position: relative;
    margin-top: 10px;
    color: #61dcff;
    font-size: 10px;
    font-weight: 800;
    letter-spacing: 2px;
    text-transform: uppercase;
  }

  .Mauslot-ai-loader__dots {
    position: relative;
    display: flex;
    justify-content: center;
    gap: 7px;
    margin-top: 15px;
  }

  .Mauslot-ai-loader__dots span {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: #5de5ff;
    box-shadow: 0 0 9px #078aff;
    animation: MauslotAiDots 1s ease-in-out infinite;
  }

  .Mauslot-ai-loader__dots span:nth-child(2) { animation-delay: .15s; }
  .Mauslot-ai-loader__dots span:nth-child(3) { animation-delay: .3s; }

  @keyframes MauslotAiSpin {
    from { transform: translate(-50%, -50%) rotate(0deg); }
    to { transform: translate(-50%, -50%) rotate(360deg); }
  }

  @keyframes MauslotAiSpinReverse {
    from { transform: translate(-50%, -50%) rotate(360deg); }
    to { transform: translate(-50%, -50%) rotate(0deg); }
  }

  @keyframes MauslotAiPulse {
    0%, 100% { transform: translate(-50%, -50%) scale(.96); filter: brightness(.95); }
    50% { transform: translate(-50%, -50%) scale(1.05); filter: brightness(1.25); }
  }

  @keyframes MauslotAiBlink {
    from { opacity: .3; transform: scale(.7); }
    to { opacity: 1; transform: scale(1.35); }
  }

  @keyframes MauslotAiDots {
    0%, 100% { opacity: .28; transform: translateY(0); }
    50% { opacity: 1; transform: translateY(-5px); }
  }

  @media (max-width: 480px) {
    .Mauslot-ai-loader__panel {
      padding: 28px 18px 23px;
      border-radius: 20px;
    }

    .Mauslot-ai-loader__visual {
      transform: scale(.9);
      margin-bottom: 18px;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    #MauslotSrvLoading,
    .Mauslot-ai-loader__orbit,
    .Mauslot-ai-loader__core,
    .Mauslot-ai-loader__node,
    .Mauslot-ai-loader__dots span {
      transition: none;
      animation: none;
    }
  }
  `;

  const LOADING_HTML = `
  <div id="MauslotSrvLoading" role="status" aria-live="assertive" aria-hidden="true">
    <div class="Mauslot-ai-loader__panel">
      <div class="Mauslot-ai-loader__visual" aria-hidden="true">
        <span class="Mauslot-ai-loader__orbit Mauslot-ai-loader__orbit--one"></span>
        <span class="Mauslot-ai-loader__orbit Mauslot-ai-loader__orbit--two"></span>
        <span class="Mauslot-ai-loader__node Mauslot-ai-loader__node--one"></span>
        <span class="Mauslot-ai-loader__node Mauslot-ai-loader__node--two"></span>
        <span class="Mauslot-ai-loader__node Mauslot-ai-loader__node--three"></span>
        <span class="Mauslot-ai-loader__core">AI</span>
      </div>
      <p class="Mauslot-ai-loader__title">Server Sedang Di Update</p>
      <div class="Mauslot-ai-loader__status">AI System &bull; Sinkronisasi Data</div>
      <div class="Mauslot-ai-loader__dots" aria-hidden="true">
        <span></span><span></span><span></span>
      </div>
    </div>
  </div>`;

  const CSS = "#MauslotSrv,\n  #MauslotSrv * {\n    box-sizing: border-box;\n  }\n\n  #MauslotSrv {\n    --Mauslot-left: 100px;\n    --Mauslot-top: 72px;\n    --Mauslot-navy-950: #02051b;\n    --Mauslot-navy-900: #03103b;\n    --Mauslot-navy-800: #071b64;\n    --Mauslot-blue: #0878ff;\n    --Mauslot-blue-deep: #0045cf;\n    --Mauslot-cyan: #4dccff;\n    position: fixed;\n    top: var(--Mauslot-top);\n    left: var(--Mauslot-left);\n    width: 100px;\n    height: 62px;\n    z-index: 2147483645;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    overflow: visible;\n    font-family: Arial, Helvetica, sans-serif;\n  }\n\n  #MauslotSrvBtn {\n    width: 76px;\n    height: 76px;\n    border: 0;\n    outline: 0;\n    background: transparent;\n    padding: 0;\n    margin: 0;\n    cursor: pointer;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    -webkit-tap-highlight-color: transparent;\n  }\n\n  #MauslotSrvBtn:focus-visible {\n    border-radius: 50%;\n    box-shadow: 0 0 0 3px var(--Mauslot-cyan),\n                0 0 16px rgba(8, 120, 255, .85);\n  }\n\n  #MauslotSrvBtn img {\n    width: 76px;\n    height: 76px;\n    object-fit: contain;\n    display: block;\n    filter: none;\n    image-rendering: auto;\n    transform: translateZ(0);\n    backface-visibility: hidden;\n    user-select: none;\n    -webkit-user-drag: none;\n  }\n\n  #MauslotSrvLabel {\n    position: absolute;\n    top: 60px;\n    left: 50%;\n    transform: translateX(-50%);\n    color: var(--Mauslot-cyan);\n    font-size: 8px;\n    line-height: 1;\n    font-weight: 800;\n    white-space: nowrap;\n    text-transform: uppercase;\n    text-shadow: 0 1px 2px #000, 0 0 7px rgba(0, 126, 255, .95);\n    pointer-events: none;\n  }\n\n  #MauslotSrvBox {\n    position: absolute;\n    top: calc(100% + 9px);\n    left: 0;\n    width: min(308px, calc(100vw - 16px));\n    max-height: min(560px, calc(100vh - var(--Mauslot-top) - 82px));\n    overflow: auto;\n    padding: 6px;\n    border: 1px solid rgba(45, 166, 255, .62);\n    border-radius: 0 0 10px 10px;\n    background: linear-gradient(180deg,\n                rgba(7, 27, 100, .99) 0%,\n                rgba(2, 10, 47, .99) 100%);\n    box-shadow: 0 14px 35px rgba(0, 0, 0, .86),\n                0 0 0 1px rgba(77, 204, 255, .14) inset,\n                0 0 22px rgba(0, 86, 255, .28);\n    color: #fff;\n    text-align: left;\n    visibility: hidden;\n    opacity: 0;\n    pointer-events: none;\n    transform: translateY(-8px);\n    transition: opacity .18s ease, transform .18s ease, visibility .18s;\n    scrollbar-width: thin;\n    scrollbar-color: var(--Mauslot-blue) var(--Mauslot-navy-950);\n  }\n\n  #MauslotSrvBox.on {\n    visibility: visible;\n    opacity: 1;\n    pointer-events: auto;\n    transform: translateY(0);\n  }\n\n  #MauslotSrvBox::-webkit-scrollbar {\n    width: 5px;\n  }\n\n  #MauslotSrvBox::-webkit-scrollbar-track {\n    background: var(--Mauslot-navy-950);\n  }\n\n  #MauslotSrvBox::-webkit-scrollbar-thumb {\n    background: linear-gradient(180deg, var(--Mauslot-cyan), var(--Mauslot-blue));\n    border-radius: 10px;\n  }\n\n  .Mauslot-server {\n    display: block;\n    margin: 0 0 6px;\n    padding: 10px 9px 8px;\n    border: 1px solid rgba(43, 159, 255, .48);\n    border-radius: 9px;\n    background: linear-gradient(145deg,\n                rgba(11, 41, 128, .96) 0%,\n                rgba(3, 12, 55, .98) 100%);\n    box-shadow: 0 4px 10px rgba(0, 0, 0, .55),\n                0 0 10px rgba(0, 103, 255, .12) inset;\n    color: inherit;\n    text-decoration: none;\n    cursor: pointer;\n    transition: transform .16s ease, border-color .16s ease, box-shadow .16s ease, filter .16s ease;\n    -webkit-tap-highlight-color: transparent;\n  }\n\n  .Mauslot-server:hover {\n    transform: translateY(-1px);\n    border-color: rgba(77, 204, 255, .95);\n    box-shadow: 0 6px 15px rgba(0, 0, 0, .6),\n                0 0 16px rgba(8, 120, 255, .45);\n    filter: brightness(1.08);\n  }\n\n  .Mauslot-server:active {\n    transform: translateY(0) scale(.985);\n  }\n\n  .Mauslot-server:focus-visible {\n    outline: 2px solid var(--Mauslot-cyan);\n    outline-offset: 2px;\n  }\n\n  .Mauslot-server:last-child {\n    margin-bottom: 0;\n  }\n\n  .Mauslot-server__top,\n  .Mauslot-server__bottom {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    gap: 8px;\n  }\n\n  .Mauslot-server__top {\n    margin-bottom: 8px;\n  }\n\n  .Mauslot-server__name,\n  .Mauslot-server__time,\n  .Mauslot-server__badge,\n  .Mauslot-server__players,\n  .Mauslot-server__amount {\n    white-space: nowrap;\n  }\n\n  .Mauslot-server__name {\n    color: #fff;\n    font-size: 11px;\n    font-weight: 800;\n  }\n\n  .Mauslot-server__flag {\n    margin-right: 4px;\n    color: var(--Mauslot-cyan);\n    font-size: 8px;\n    text-transform: uppercase;\n  }\n\n  .Mauslot-server__time {\n    margin-left: 5px;\n    padding: 2px 4px;\n    border-radius: 4px;\n    background: linear-gradient(180deg, #1595ff 0%, #075ce8 100%);\n    color: #fff;\n    font-size: 8px;\n    font-weight: 900;\n    box-shadow: 0 0 8px rgba(14, 128, 255, .4);\n  }\n\n  .Mauslot-server__badge {\n    display: inline-flex;\n    align-items: center;\n    justify-content: center;\n    padding: 4px 7px;\n    border-radius: 7px;\n    background: linear-gradient(180deg, var(--Mauslot-blue) 0%, var(--Mauslot-blue-deep) 100%);\n    color: #fff;\n    font-size: 8px;\n    font-weight: 900;\n    text-transform: uppercase;\n    box-shadow: 0 0 10px rgba(8, 120, 255, .45);\n    transition: filter .16s ease, box-shadow .16s ease;\n  }\n\n  .Mauslot-server:hover .Mauslot-server__badge {\n    filter: brightness(1.2);\n    box-shadow: 0 0 14px rgba(77, 204, 255, .75);\n  }\n\n  .Mauslot-server__players {\n    color: #fff;\n    font-size: 9px;\n    font-weight: 700;\n  }\n\n  .Mauslot-server__players::before {\n    content: \"â™Ÿ\";\n    margin-right: 4px;\n    color: var(--Mauslot-cyan);\n  }\n\n  .Mauslot-server__amount {\n    color: var(--Mauslot-cyan);\n    font-size: 11px;\n    font-weight: 900;\n  }\n\n  .Mauslot-server__bar {\n    height: 4px;\n    margin-top: 7px;\n    overflow: hidden;\n    border-radius: 20px;\n    background: #020a2b;\n    box-shadow: 0 0 0 1px rgba(66, 175, 255, .18) inset;\n  }\n\n  .Mauslot-server__bar > span {\n    display: block;\n    width: var(--load, 75%);\n    height: 100%;\n    border-radius: inherit;\n    background: linear-gradient(90deg, #5fe0ff 0%, #0a8aff 55%, #0054df 100%);\n    box-shadow: 0 0 9px rgba(31, 160, 255, .9);\n  }\n\n  @media (max-width: 992px) {\n    #MauslotSrv {\n      --Mauslot-left: auto;\n      --Mauslot-top: auto;\n      top: auto;\n      right: 28px;\n      bottom: 140px;\n      left: auto;\n      width: 100px;\n      height: 76px;\n    }\n\n    #MauslotSrvBox {\n      top: auto;\n      right: 0;\n      bottom: calc(100% + 10px);\n      left: auto;\n      width: min(308px, calc(100vw - 16px));\n      max-height: min(560px, calc(100vh - 245px));\n      border-radius: 10px 10px 0 0;\n      transform: translateY(8px);\n    }\n\n    #MauslotSrvBox.on {\n      transform: translateY(0);\n    }\n  }\n\n  @media (max-width: 480px) {\n    #MauslotSrv {\n      right: 20px;\n      bottom: 138px;\n    }\n  }\n\n  @media (prefers-reduced-motion: reduce) {\n    #MauslotSrvBox {\n      transition: none;\n    }\n  }";

  const HTML = "<div id=\"MauslotSrv\">\n  <button\n    id=\"MauslotSrvBtn\"\n    type=\"button\"\n    aria-label=\"Buka status server international\"\n    aria-controls=\"MauslotSrvBox\"\n    aria-expanded=\"false\"\n  >\n    <img\n      src=\"http://plcl.me/images/kyoaE.gif\"\n      alt=\"Server International\"\n      width=\"76\"\n      height=\"76\"\n    >\n  </button>\n\n  <span id=\"MauslotSrvLabel\">Server International</span>\n\n  <div id=\"MauslotSrvBox\" role=\"dialog\" aria-label=\"Status Server International\">\n    <a class=\"Mauslot-server\" style=\"--load: 91%\" href=\"https://urlmsshorten.com/mauslot-spektakuler\" aria-label=\"Buka link MAUSLOT melalui server Indonesia\">\n      <div class=\"Mauslot-server__top\">\n        <div class=\"Mauslot-server__name\"><span class=\"Mauslot-server__flag\">ID</span>Indonesia <span class=\"Mauslot-server__time\">02:09 PM</span></div>\n        <span class=\"Mauslot-server__badge\">Recommended</span>\n      </div>\n      <div class=\"Mauslot-server__bottom\">\n        <span class=\"Mauslot-server__players\">Players 3.568</span>\n        <span class=\"Mauslot-server__amount\">Rp 286.507.435</span>\n      </div>\n      <div class=\"Mauslot-server__bar\"><span></span></div>\n    </a>\n\n    <a class=\"Mauslot-server\" style=\"--load: 78%\" href=\"https://urlmsshorten.com/mauslot-spektakuler\" aria-label=\"Buka link MAUSLOT melalui server China\">\n      <div class=\"Mauslot-server__top\">\n        <div class=\"Mauslot-server__name\"><span class=\"Mauslot-server__flag\">CN</span>China <span class=\"Mauslot-server__time\">03:09 PM</span></div>\n        <span class=\"Mauslot-server__badge\">Hot</span>\n      </div>\n      <div class=\"Mauslot-server__bottom\">\n        <span class=\"Mauslot-server__players\">Players 3.748</span>\n        <span class=\"Mauslot-server__amount\">Rp 211.031.021</span>\n      </div>\n      <div class=\"Mauslot-server__bar\"><span></span></div>\n    </a>\n\n    <a class=\"Mauslot-server\" style=\"--load: 69%\" href=\"https://urlmsshorten.com/mauslot-spektakuler\" aria-label=\"Buka link MAUSLOT melalui server America\">\n      <div class=\"Mauslot-server__top\">\n        <div class=\"Mauslot-server__name\"><span class=\"Mauslot-server__flag\">US</span>America <span class=\"Mauslot-server__time\">03:09 AM</span></div>\n        <span class=\"Mauslot-server__badge\">RTP Tinggi</span>\n      </div>\n      <div class=\"Mauslot-server__bottom\">\n        <span class=\"Mauslot-server__players\">Players 3.341</span>\n        <span class=\"Mauslot-server__amount\">Rp 171.514.466</span>\n      </div>\n      <div class=\"Mauslot-server__bar\"><span></span></div>\n    </a>\n\n    <a class=\"Mauslot-server\" style=\"--load: 55%\" href=\"https://urlmsshorten.com/mauslot-spektakuler\" aria-label=\"Buka link MAUSLOT melalui server Australia\">\n      <div class=\"Mauslot-server__top\">\n        <div class=\"Mauslot-server__name\"><span class=\"Mauslot-server__flag\">AU</span>Australia <span class=\"Mauslot-server__time\">05:09 PM</span></div>\n        <span class=\"Mauslot-server__badge\">Hot</span>\n      </div>\n      <div class=\"Mauslot-server__bottom\">\n        <span class=\"Mauslot-server__players\">Players 3.355</span>\n        <span class=\"Mauslot-server__amount\">Rp 112.803.393</span>\n      </div>\n      <div class=\"Mauslot-server__bar\"><span></span></div>\n    </a>\n\n    <a class=\"Mauslot-server\" style=\"--load: 63%\" href=\"https://urlmsshorten.com/mauslot-spektakuler\" aria-label=\"Buka link MAUSLOT melalui server Japan\">\n      <div class=\"Mauslot-server__top\">\n        <div class=\"Mauslot-server__name\"><span class=\"Mauslot-server__flag\">JP</span>Japan <span class=\"Mauslot-server__time\">04:09 PM</span></div>\n        <span class=\"Mauslot-server__badge\">Hot</span>\n      </div>\n      <div class=\"Mauslot-server__bottom\">\n        <span class=\"Mauslot-server__players\">Players 2.866</span>\n        <span class=\"Mauslot-server__amount\">Rp 115.277.923</span>\n      </div>\n      <div class=\"Mauslot-server__bar\"><span></span></div>\n    </a>\n\n    <a class=\"Mauslot-server\" style=\"--load: 47%\" href=\"https://urlmsshorten.com/mauslot-spektakuler\" aria-label=\"Buka link MAUSLOT melalui server Thailand\">\n      <div class=\"Mauslot-server__top\">\n        <div class=\"Mauslot-server__name\"><span class=\"Mauslot-server__flag\">TH</span>Thailand <span class=\"Mauslot-server__time\">02:09 PM</span></div>\n        <span class=\"Mauslot-server__badge\">Hot</span>\n      </div>\n      <div class=\"Mauslot-server__bottom\">\n        <span class=\"Mauslot-server__players\">Players 2.604</span>\n        <span class=\"Mauslot-server__amount\">Rp 98.426.810</span>\n      </div>\n      <div class=\"Mauslot-server__bar\"><span></span></div>\n    </a>\n  </div>\n</div>";

  const initServerWidget = () => {
    // Mencegah widget tampil dua kali jika script dipanggil berulang.
    if (document.getElementById(WIDGET_ID)) return;

    if (!document.getElementById(STYLE_ID)) {
      const style = document.createElement('style');
      style.id = STYLE_ID;
      style.textContent = CSS + LOADING_CSS;
      document.head.appendChild(style);
    }

    const holder = document.createElement('div');
    holder.innerHTML = HTML;
    const root = holder.firstElementChild;

    if (!root || !document.body) return;
    document.body.appendChild(root);

    const loadingHolder = document.createElement('div');
    loadingHolder.innerHTML = LOADING_HTML;
    const loading = loadingHolder.firstElementChild;

    if (!loading) return;
    document.body.appendChild(loading);

    const btn = root.querySelector('#MauslotSrvBtn');
    const box = root.querySelector('#MauslotSrvBox');
    const serverCards = root.querySelectorAll('.Mauslot-server');
    const amountElements = root.querySelectorAll('.Mauslot-server__amount');
    const playerElements = root.querySelectorAll('.Mauslot-server__players');

    if (!btn || !box) return;

    let loadingTimer = 0;

    const rupiahFormatter = new Intl.NumberFormat('id-ID');
    const playerFormatter = new Intl.NumberFormat('id-ID');

    const animateAmount = (element, startValue, endValue) => {
      const startedAt = performance.now();

      const updateFrame = (currentTime) => {
        const progress = Math.min(
          (currentTime - startedAt) / AMOUNT_ANIMATION_TIME,
          1
        );
        const easedProgress = 1 - Math.pow(1 - progress, 3);
        const currentValue = Math.round(
          startValue + (endValue - startValue) * easedProgress
        );

        element.textContent = `Rp ${rupiahFormatter.format(currentValue)}`;
        element.dataset.currentAmount = String(currentValue);

        if (progress < 1) {
          window.requestAnimationFrame(updateFrame);
        }
      };

      window.requestAnimationFrame(updateFrame);
    };

    const startMovingAmount = (element, index) => {
      const initialValue = Number(element.textContent.replace(/\D/g, ''));
      element.dataset.currentAmount = String(initialValue);

      const move = () => {
        const currentValue = Number(element.dataset.currentAmount);
        const randomStep = Math.floor(
          AMOUNT_MIN_STEP + Math.random() * (AMOUNT_MAX_STEP - AMOUNT_MIN_STEP)
        );

        animateAmount(element, currentValue, currentValue + randomStep);

        const nextMovement = 1800 + Math.random() * 1400;
        window.setTimeout(move, nextMovement);
      };

      window.setTimeout(move, 450 + index * 180);
    };

    amountElements.forEach(startMovingAmount);

    const startMovingPlayers = (element, index) => {
      let currentPlayers = Number(element.textContent.replace(/\D/g, ''));

      const move = () => {
        currentPlayers += 1;
        element.textContent = `Players ${playerFormatter.format(currentPlayers)}`;

        const nextMovement =
          PLAYER_MIN_DELAY + Math.random() * (PLAYER_MAX_DELAY - PLAYER_MIN_DELAY);
        window.setTimeout(move, nextMovement);
      };

      window.setTimeout(move, 900 + index * 280);
    };

    playerElements.forEach(startMovingPlayers);

    const setOpen = (open) => {
      box.classList.toggle('on', open);
      btn.setAttribute('aria-expanded', String(open));
      btn.setAttribute(
        'aria-label',
        open
          ? 'Tutup status server international'
          : 'Buka status server international'
      );
    };

    const hideLoading = () => {
      window.clearTimeout(loadingTimer);
      loading.classList.remove('on');
      loading.setAttribute('aria-hidden', 'true');
      document.documentElement.classList.remove('Mauslot-ai-loading');
    };

    const showLoading = () => {
      setOpen(false);
      window.clearTimeout(loadingTimer);
      loading.classList.add('on');
      loading.setAttribute('aria-hidden', 'false');
      document.documentElement.classList.add('Mauslot-ai-loading');
      loadingTimer = window.setTimeout(hideLoading, LOADING_DURATION);
    };

    btn.addEventListener('click', (event) => {
      event.stopPropagation();
      setOpen(!box.classList.contains('on'));
    });

    box.addEventListener('click', (event) => {
      event.stopPropagation();
    });

    serverCards.forEach((card) => {
      card.addEventListener('click', (event) => {
        event.preventDefault();
        event.stopPropagation();
        showLoading();
      });
    });

    document.addEventListener('click', () => {
      setOpen(false);
    });

    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') {
        setOpen(false);
        hideLoading();
      }
    });
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initServerWidget, { once: true });
  } else {
    initServerWidget();
  }
})();
