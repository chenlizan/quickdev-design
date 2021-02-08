import * as React from "react";
import Collapse from "antd/lib/collapse";
import Border from "./Border";
import Layout from "./Layout";
import Locale from "./locale/zh_CN";

const StyleList: React.FC<any> = () => {
  const [styleList, setStyleList] = React.useState({ layout: {}, border: {} });
  const handleChang = (name: string, value: any) => {
    console.log(name + ":", value);
    setStyleList({ ...styleList, [name]: value });
  };

  return (
    <Collapse className="editor-list">
      <Layout locale={Locale.EditorLayout} onChange={handleChang} value={styleList["layout"]} />
      <Border locale={Locale.EditorBorder} onChange={handleChang} value={styleList["border"]} />
    </Collapse>
  );
};

export default StyleList;
