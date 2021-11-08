module.exports = {
  purge: ["./src/**/*.html", "./src/**/*.js"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      body: ['Roboto']
    },
    extend: {
      keyframes: {
        titleWhenPlay: {
          '0%': {transform: 'translateX(-100%)'},
          '100%': { transform: 'translateX(70%)' },
        }
       },
       animation:{
        titleWhenPlay: 'titleWhenPlay 10s linear infinite',
        spinSlow: 'spin 7s linear infinite'
      },
    },
    minWidth: {
      "250px": "250px",
      "540px": "540px",
      "180px": "180px",
      "60px": "60px",
      "96px": "96px",
      "40px": "40px"
    },
    minHeight: {
      "250px": "250px",
      "540px": "540px",
      "180px": "180px",
      "60px": "60px",
      "40px": "40px"
    },

    colors: {
      none: "rgba(0,0,0,0)",
      "primary-bg": "#282828",
      "layout-bg": "#1e1e1e",
      "sidebar-bg": "hsla(0,0%,100%,0.05)",
      // sidebar-popup-bg: #292929,
      "alpha-bg": "hsla(0,0%,100%,0.1)",
      // banner-home-dot: #d8d8d8,
      // loading-bg: hsla(0,0%,100%,0.1),
      // loading-bg-animation: hsla(0,0%,100%,0.1),
      // scroll-thumb-bg: hsla(0,0%,100%,0.3),
      // no-content-bg: hsla(0,0%,100%,0.1),
      // box-item-bg: hsla(0,0%,100%,0.1),
      // alpha-layout-bg: rgba(12,3,3,0.8),
      // artist-layout-bg: var(alpha-layout-bg),
      // tab-active-bg: hsla(0,0%,100%,0.3),
      // queue-player-popup-bg: #2d2f32,
      // kara-lyrics-bg: #1e1e1e,
      // kara-btn-bg: hsla(0,0%,100%,0.1),
      // theme-setting-active: hsla(0,0%,100%,0.15),
      "player-bg": "rgba(0,0,0,0.2)",
      "progressbar-player-bg": "hsla(0,0%,100%,0.3)",
      "progressbar-active-bg": "#fff",
      "select-bg": "hsla(0,0%,100%,0.15)",
      "text-primary": "#fff",
      "text-secondary": "hsla(0,0%,100%,0.5)",
      "purple-primary": "#7200a1",
      // link-text-hover: #c662ef,
      "text-item-hover": "#fff",
      "player-text": "#fff",
      "search-text": "#eee",
      "text-placeholder": "#757575",
      // setting-icon-text: #d8d8d8,
      // navigation-text: #a0a0a0,
      // sidebar-title: hsla(0,0%,100%,0.7),
      // song-item-action: hsla(0,0%,100%,0.5),
      "border-primary": "hsla(0,0%,100%,0.1)",
      "border-secondary": "hsla(0,0%,100%,0.05)",
      "border-box": "hsla(0,0%,100%,0.2)",
      // spotlight-item: #130223,
      // queue-border: transparent,
      "border-player": "hsla(0,0%,100%,0.1)",
      // main-box-shadow: rgba(66,66,66,0.4),
      // sticky-header-box-shadow: rgba(0,0,0,0.2),
      // notify-box-shadow: rgba(0,0,0,0.6),
      // portal-menu-box-shadow: rgba(0,0,0,0.7),
      "main-text-stroke": "#fff",
    },
  },
  variants: {
    extend: {
      borderWidth: ['hover'],
    },
    scrollbar: ["rounded"],
  },
  plugins: [
    require("tailwind-scrollbar-hide"),
    require("tailwind-scrollbar"),
  ],
};
