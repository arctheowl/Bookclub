
  const colors = require('tailwindcss/colors')

module.exports = {

  images: {
    domains: ['external-content.duckduckgo.com', "images.unsplash.com"],
  },
    theme: {
      extend: {
        colors: {
          sky: colors.sky,
          teal: colors.teal,
        },
      },
    },
    webpack5: true,
    webpack: (config) => {
      config.resolve.fallback = { fs: false };
  
      return config;
    },
  }