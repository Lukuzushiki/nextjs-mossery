const withImages = require("next-images");
const dotEnv = require("dotenv");

dotEnv.config();

module.exports = withImages({
  env: {
    REACT_APP_HOST: process.env.REACT_APP_HOST,
    REACT_APP_CLOUD: process.env.REACT_APP_CLOUD,
  },
  webpack(config, options) {
    return config;
  },
});
