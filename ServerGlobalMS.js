/**
 * MAUSLOT Server Widget
 * File JavaScript mandiri untuk GitHub/jsDelivr.
 *
 * Setelah file di-upload ke GitHub, pasang pada website:
 * <script src="https://cdn.jsdelivr.net/gh/USERNAME/REPOSITORY@main/server-widget-mauslot.js"></script>
 */
(() => {
  'use strict';

  const WIDGET_ID = 'rjmSrv';
  const STYLE_ID = 'rjmSrvStyle';

  const CSS = "#rjmSrv,\n  #rjmSrv * {\n    box-sizing: border-box;\n  }\n\n  #rjmSrv {\n    --rjm-left: 100px;\n    --rjm-top: 72px;\n    --rjm-navy-950: #02051b;\n    --rjm-navy-900: #03103b;\n    --rjm-navy-800: #071b64;\n    --rjm-blue: #0878ff;\n    --rjm-blue-deep: #0045cf;\n    --rjm-cyan: #4dccff;\n    position: fixed;\n    top: var(--rjm-top);\n    left: var(--rjm-left);\n    width: 100px;\n    height: 62px;\n    z-index: 2147483645;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    overflow: visible;\n    font-family: Arial, Helvetica, sans-serif;\n  }\n\n  #rjmSrvBtn {\n    width: 76px;\n    height: 76px;\n    border: 0;\n    outline: 0;\n    background: transparent;\n    padding: 0;\n    margin: 0;\n    cursor: pointer;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    -webkit-tap-highlight-color: transparent;\n  }\n\n  #rjmSrvBtn:focus-visible {\n    border-radius: 50%;\n    box-shadow: 0 0 0 3px var(--rjm-cyan),\n                0 0 16px rgba(8, 120, 255, .85);\n  }\n\n  #rjmSrvBtn img {\n    width: 76px;\n    height: 76px;\n    object-fit: contain;\n    display: block;\n    filter: none;\n    image-rendering: auto;\n    transform: translateZ(0);\n    backface-visibility: hidden;\n    user-select: none;\n    -webkit-user-drag: none;\n  }\n\n  #rjmSrvLabel {\n    position: absolute;\n    top: 60px;\n    left: 50%;\n    transform: translateX(-50%);\n    color: var(--rjm-cyan);\n    font-size: 8px;\n    line-height: 1;\n    font-weight: 800;\n    white-space: nowrap;\n    text-transform: uppercase;\n    text-shadow: 0 1px 2px #000, 0 0 7px rgba(0, 126, 255, .95);\n    pointer-events: none;\n  }\n\n  #rjmSrvBox {\n    position: absolute;\n    top: calc(100% + 9px);\n    left: 0;\n    width: min(308px, calc(100vw - 16px));\n    max-height: min(560px, calc(100vh - var(--rjm-top) - 82px));\n    overflow: auto;\n    padding: 6px;\n    border: 1px solid rgba(45, 166, 255, .62);\n    border-radius: 0 0 10px 10px;\n    background: linear-gradient(180deg,\n                rgba(7, 27, 100, .99) 0%,\n                rgba(2, 10, 47, .99) 100%);\n    box-shadow: 0 14px 35px rgba(0, 0, 0, .86),\n                0 0 0 1px rgba(77, 204, 255, .14) inset,\n                0 0 22px rgba(0, 86, 255, .28);\n    color: #fff;\n    text-align: left;\n    visibility: hidden;\n    opacity: 0;\n    pointer-events: none;\n    transform: translateY(-8px);\n    transition: opacity .18s ease, transform .18s ease, visibility .18s;\n    scrollbar-width: thin;\n    scrollbar-color: var(--rjm-blue) var(--rjm-navy-950);\n  }\n\n  #rjmSrvBox.on {\n    visibility: visible;\n    opacity: 1;\n    pointer-events: auto;\n    transform: translateY(0);\n  }\n\n  #rjmSrvBox::-webkit-scrollbar {\n    width: 5px;\n  }\n\n  #rjmSrvBox::-webkit-scrollbar-track {\n    background: var(--rjm-navy-950);\n  }\n\n  #rjmSrvBox::-webkit-scrollbar-thumb {\n    background: linear-gradient(180deg, var(--rjm-cyan), var(--rjm-blue));\n    border-radius: 10px;\n  }\n\n  .rjm-server {\n    display: block;\n    margin: 0 0 6px;\n    padding: 10px 9px 8px;\n    border: 1px solid rgba(43, 159, 255, .48);\n    border-radius: 9px;\n    background: linear-gradient(145deg,\n                rgba(11, 41, 128, .96) 0%,\n                rgba(3, 12, 55, .98) 100%);\n    box-shadow: 0 4px 10px rgba(0, 0, 0, .55),\n                0 0 10px rgba(0, 103, 255, .12) inset;\n    color: inherit;\n    text-decoration: none;\n    cursor: pointer;\n    transition: transform .16s ease, border-color .16s ease, box-shadow .16s ease, filter .16s ease;\n    -webkit-tap-highlight-color: transparent;\n  }\n\n  .rjm-server:hover {\n    transform: translateY(-1px);\n    border-color: rgba(77, 204, 255, .95);\n    box-shadow: 0 6px 15px rgba(0, 0, 0, .6),\n                0 0 16px rgba(8, 120, 255, .45);\n    filter: brightness(1.08);\n  }\n\n  .rjm-server:active {\n    transform: translateY(0) scale(.985);\n  }\n\n  .rjm-server:focus-visible {\n    outline: 2px solid var(--rjm-cyan);\n    outline-offset: 2px;\n  }\n\n  .rjm-server:last-child {\n    margin-bottom: 0;\n  }\n\n  .rjm-server__top,\n  .rjm-server__bottom {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    gap: 8px;\n  }\n\n  .rjm-server__top {\n    margin-bottom: 8px;\n  }\n\n  .rjm-server__name,\n  .rjm-server__time,\n  .rjm-server__badge,\n  .rjm-server__players,\n  .rjm-server__amount {\n    white-space: nowrap;\n  }\n\n  .rjm-server__name {\n    color: #fff;\n    font-size: 11px;\n    font-weight: 800;\n  }\n\n  .rjm-server__flag {\n    margin-right: 4px;\n    color: var(--rjm-cyan);\n    font-size: 8px;\n    text-transform: uppercase;\n  }\n\n  .rjm-server__time {\n    margin-left: 5px;\n    padding: 2px 4px;\n    border-radius: 4px;\n    background: linear-gradient(180deg, #1595ff 0%, #075ce8 100%);\n    color: #fff;\n    font-size: 8px;\n    font-weight: 900;\n    box-shadow: 0 0 8px rgba(14, 128, 255, .4);\n  }\n\n  .rjm-server__badge {\n    display: inline-flex;\n    align-items: center;\n    justify-content: center;\n    padding: 4px 7px;\n    border-radius: 7px;\n    background: linear-gradient(180deg, var(--rjm-blue) 0%, var(--rjm-blue-deep) 100%);\n    color: #fff;\n    font-size: 8px;\n    font-weight: 900;\n    text-transform: uppercase;\n    box-shadow: 0 0 10px rgba(8, 120, 255, .45);\n    transition: filter .16s ease, box-shadow .16s ease;\n  }\n\n  .rjm-server:hover .rjm-server__badge {\n    filter: brightness(1.2);\n    box-shadow: 0 0 14px rgba(77, 204, 255, .75);\n  }\n\n  .rjm-server__players {\n    color: #fff;\n    font-size: 9px;\n    font-weight: 700;\n  }\n\n  .rjm-server__players::before {\n    content: \"♟\";\n    margin-right: 4px;\n    color: var(--rjm-cyan);\n  }\n\n  .rjm-server__amount {\n    color: var(--rjm-cyan);\n    font-size: 11px;\n    font-weight: 900;\n  }\n\n  .rjm-server__bar {\n    height: 4px;\n    margin-top: 7px;\n    overflow: hidden;\n    border-radius: 20px;\n    background: #020a2b;\n    box-shadow: 0 0 0 1px rgba(66, 175, 255, .18) inset;\n  }\n\n  .rjm-server__bar > span {\n    display: block;\n    width: var(--load, 75%);\n    height: 100%;\n    border-radius: inherit;\n    background: linear-gradient(90deg, #5fe0ff 0%, #0a8aff 55%, #0054df 100%);\n    box-shadow: 0 0 9px rgba(31, 160, 255, .9);\n  }\n\n  @media (max-width: 768px) {\n    #rjmSrv {\n      --rjm-left: 8px;\n      --rjm-top: 72px;\n      width: 76px;\n    }\n\n    #rjmSrvBox {\n      left: 0;\n      width: min(308px, calc(100vw - 16px));\n    }\n  }\n\n  @media (prefers-reduced-motion: reduce) {\n    #rjmSrvBox {\n      transition: none;\n    }\n  }";

  const HTML = "<div id=\"rjmSrv\">\n  <button\n    id=\"rjmSrvBtn\"\n    type=\"button\"\n    aria-label=\"Buka status server international\"\n    aria-controls=\"rjmSrvBox\"\n    aria-expanded=\"false\"\n  >\n    <img\n      src=\"http://plcl.me/images/kyoaE.gif\"\n      alt=\"Server International\"\n      width=\"76\"\n      height=\"76\"\n    >\n  </button>\n\n  <span id=\"rjmSrvLabel\">Server International</span>\n\n  <div id=\"rjmSrvBox\" role=\"dialog\" aria-label=\"Status Server International\">\n    <a class=\"rjm-server\" style=\"--load: 91%\" href=\"https://urlmsshorten.com/mauslot-spektakuler\" aria-label=\"Buka link MAUSLOT melalui server Indonesia\">\n      <div class=\"rjm-server__top\">\n        <div class=\"rjm-server__name\"><span class=\"rjm-server__flag\">ID</span>Indonesia <span class=\"rjm-server__time\">02:09 PM</span></div>\n        <span class=\"rjm-server__badge\">Recommended</span>\n      </div>\n      <div class=\"rjm-server__bottom\">\n        <span class=\"rjm-server__players\">Players 3.568</span>\n        <span class=\"rjm-server__amount\">Rp 286.507.435</span>\n      </div>\n      <div class=\"rjm-server__bar\"><span></span></div>\n    </a>\n\n    <a class=\"rjm-server\" style=\"--load: 78%\" href=\"https://urlmsshorten.com/mauslot-spektakuler\" aria-label=\"Buka link MAUSLOT melalui server China\">\n      <div class=\"rjm-server__top\">\n        <div class=\"rjm-server__name\"><span class=\"rjm-server__flag\">CN</span>China <span class=\"rjm-server__time\">03:09 PM</span></div>\n        <span class=\"rjm-server__badge\">Hot</span>\n      </div>\n      <div class=\"rjm-server__bottom\">\n        <span class=\"rjm-server__players\">Players 3.748</span>\n        <span class=\"rjm-server__amount\">Rp 211.031.021</span>\n      </div>\n      <div class=\"rjm-server__bar\"><span></span></div>\n    </a>\n\n    <a class=\"rjm-server\" style=\"--load: 69%\" href=\"https://urlmsshorten.com/mauslot-spektakuler\" aria-label=\"Buka link MAUSLOT melalui server America\">\n      <div class=\"rjm-server__top\">\n        <div class=\"rjm-server__name\"><span class=\"rjm-server__flag\">US</span>America <span class=\"rjm-server__time\">03:09 AM</span></div>\n        <span class=\"rjm-server__badge\">RTP Tinggi</span>\n      </div>\n      <div class=\"rjm-server__bottom\">\n        <span class=\"rjm-server__players\">Players 3.341</span>\n        <span class=\"rjm-server__amount\">Rp 171.514.466</span>\n      </div>\n      <div class=\"rjm-server__bar\"><span></span></div>\n    </a>\n\n    <a class=\"rjm-server\" style=\"--load: 55%\" href=\"https://urlmsshorten.com/mauslot-spektakuler\" aria-label=\"Buka link MAUSLOT melalui server Australia\">\n      <div class=\"rjm-server__top\">\n        <div class=\"rjm-server__name\"><span class=\"rjm-server__flag\">AU</span>Australia <span class=\"rjm-server__time\">05:09 PM</span></div>\n        <span class=\"rjm-server__badge\">Hot</span>\n      </div>\n      <div class=\"rjm-server__bottom\">\n        <span class=\"rjm-server__players\">Players 3.355</span>\n        <span class=\"rjm-server__amount\">Rp 112.803.393</span>\n      </div>\n      <div class=\"rjm-server__bar\"><span></span></div>\n    </a>\n\n    <a class=\"rjm-server\" style=\"--load: 63%\" href=\"https://urlmsshorten.com/mauslot-spektakuler\" aria-label=\"Buka link MAUSLOT melalui server Japan\">\n      <div class=\"rjm-server__top\">\n        <div class=\"rjm-server__name\"><span class=\"rjm-server__flag\">JP</span>Japan <span class=\"rjm-server__time\">04:09 PM</span></div>\n        <span class=\"rjm-server__badge\">Hot</span>\n      </div>\n      <div class=\"rjm-server__bottom\">\n        <span class=\"rjm-server__players\">Players 2.866</span>\n        <span class=\"rjm-server__amount\">Rp 115.277.923</span>\n      </div>\n      <div class=\"rjm-server__bar\"><span></span></div>\n    </a>\n\n    <a class=\"rjm-server\" style=\"--load: 47%\" href=\"https://urlmsshorten.com/mauslot-spektakuler\" aria-label=\"Buka link MAUSLOT melalui server Thailand\">\n      <div class=\"rjm-server__top\">\n        <div class=\"rjm-server__name\"><span class=\"rjm-server__flag\">TH</span>Thailand <span class=\"rjm-server__time\">02:09 PM</span></div>\n        <span class=\"rjm-server__badge\">Hot</span>\n      </div>\n      <div class=\"rjm-server__bottom\">\n        <span class=\"rjm-server__players\">Players 2.604</span>\n        <span class=\"rjm-server__amount\">Rp 98.426.810</span>\n      </div>\n      <div class=\"rjm-server__bar\"><span></span></div>\n    </a>\n  </div>\n</div>";

  const initServerWidget = () => {
    // Mencegah widget tampil dua kali jika script dipanggil berulang.
    if (document.getElementById(WIDGET_ID)) return;

    if (!document.getElementById(STYLE_ID)) {
      const style = document.createElement('style');
      style.id = STYLE_ID;
      style.textContent = CSS;
      document.head.appendChild(style);
    }

    const holder = document.createElement('div');
    holder.innerHTML = HTML;
    const root = holder.firstElementChild;

    if (!root || !document.body) return;
    document.body.appendChild(root);

    const btn = root.querySelector('#rjmSrvBtn');
    const box = root.querySelector('#rjmSrvBox');

    if (!btn || !box) return;

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

    btn.addEventListener('click', (event) => {
      event.stopPropagation();
      setOpen(!box.classList.contains('on'));
    });

    box.addEventListener('click', (event) => {
      event.stopPropagation();
    });

    document.addEventListener('click', () => {
      setOpen(false);
    });

    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') setOpen(false);
    });
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initServerWidget, { once: true });
  } else {
    initServerWidget();
  }
})();
