import * as React from "react";
import Collapse from "antd/lib/collapse";
import Border from "./Border";
import Layout from "./Layout";
import Locale from "./locale/zh_CN";
import { getDefaultData, toStyleList } from "./utils";

const StyleList: React.FC<any> = (props) => {
  const [styleList, setStyleList] = React.useState({ layout: {}, border: {} });

  React.useEffect(() => {
    const { currentProps } = props;

    const domElem = document.querySelector(`[data-nid='${currentProps.key || ""}']`);

    if (domElem) {
      toStyleList(styleList, getDefaultData(getComputedStyle(domElem)) as any);
      setStyleList({ ...styleList });
    }
  }, [props.currentProps]);

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
