import * as React from "react";
import Collapse from "antd/lib/collapse";
import Radio, { RadioChangeEvent } from "antd/lib/radio";
import BoxModel from "./common/BoxModel";

const Panel = Collapse.Panel;
const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;

export interface BorderProps {
  className?: string;
  header?: string;
  locale: {
    header: string;
    tags: { [key: string]: string };
  };
  value?: { [key: string]: any };
  onChange?: (name: any, value: any, isDrag?: any) => void;
}

const Border: React.FC<BorderProps> = (props) => {
  const [key, setKey] = React.useState("width");
  const { value, locale, header, ...otherProps } = props;

  const handleChange = (e: any, isDrag: any) => {
    const val = {
      ...value,
      [key]: e,
    };
    props.onChange?.("border", val, isDrag);
  };

  const handleRadioChange = (e: RadioChangeEvent) => {
    setKey(e.target.value);
  };

  const getTabs = () => (
    <RadioGroup value={key} onChange={handleRadioChange} size="small">
      {Object.keys(props.locale.tags).map((key) => (
        <RadioButton value={key} key={key} className="ant-radio-button-auto-width">
          {props.locale.tags[key]}
        </RadioButton>
      ))}
    </RadioGroup>
  );

  return (
    <Panel key="border" {...otherProps} header={props.header || locale.header}>
      {getTabs()}
      <BoxModel
        name={key}
        key={key}
        keys={["top", "right", "bottom", "left", "center"]}
        value={value?.[key]}
        onChange={(v, isDrag) => {
          handleChange(v, isDrag);
        }}
      />
    </Panel>
  );
};

Border.displayName = "EditorBorder";

Border.defaultProps = {
  className: "editor-border",
  value: {
    style: "none",
    color: "#000",
    width: null,
    radius: null,
  },
};

export default Border;
