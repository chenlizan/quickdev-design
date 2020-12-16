const fs = require("fs");
const path = require("path");
const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = (relativePath) => path.resolve(appDirectory, relativePath);
const config = require(resolveApp("package")).config;

module.exports = {
  publicPath: config.publicPath || "./",
};
