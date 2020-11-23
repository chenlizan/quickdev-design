const Babel = require("@babel/standalone");
const React = require("react");
const ReactDOM = require("react-dom");
const stripBom = require("strip-bom");
const antd = require("antd");
const antdMobile = require("antd-mobile");
const GenerateView = require("../../../components/GenerateView").default;

const babelConfig = {
  ast: false,
  babelrc: false,
  presets: ["env", "react"],
  plugins: [["proposal-class-properties"]],
  sourceMap: false,
  sourceType: "script",
};

const BabelCompile = (uiCode: string) => {
  let reactObj = null;
  try {
    reactObj = eval(Babel.transform(stripBom(uiCode), babelConfig).code);
  } catch (err) {
    console.error(err.message);
  }
  return reactObj;
};

export default BabelCompile;
