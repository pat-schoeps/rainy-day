const withSass = require("@zeit/next-sass");
const withTM = require('next-plugin-transpile-modules');

const resourcesLoader = {
  loader: "sass-resources-loader",
  options: {
    resources: ["./stylesheets/variables.scss"]
  }
};
module.exports = withSass(
  {
    webpack: (config, options) => {
      config.module.rules.map(rule => {
        if (
          rule.test.source.includes("scss") ||
          rule.test.source.includes("sass")
        ) {
          rule.use.push(resourcesLoader);
        }
      });
      return config;
    }
  },
  withTM({
    transpileModules: ['TweenMax', 'TimelineMax', 'DrawSVGPlugin', 'MorphSVGPlugin'],
    cssModules: false
  })
);