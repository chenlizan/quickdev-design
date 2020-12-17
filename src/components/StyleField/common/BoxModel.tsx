import * as React from "react";
import classNames from "classnames";
import Select from "antd/lib/select";
import AutoComplete from "./AutoComplete";
import Color from "./Color";
import InputGroup from "./InputGroup";
import { getParentNode } from "../utils";

export interface BoxModelProps {
  name: string;
  disabled: boolean;
  keys: string[];
  value: any;
  onChange?: (value: any, isDrag?: boolean) => void;
}

const BoxModel: React.FC<BoxModelProps> = (props) => {
  const radioKeys = ["top-left", "top-right", "bottom-right", "bottom-left", "center"];

  const getColor = () => {
    const { value } = props;
    return props.keys.map((key) => {
      const v = (value && value[key]) || (typeof value === "string" ? value : null);
      return <Color key={key} type="cut" className={key} color={v} />;
    });
  };

  const getInput = (isRadius: boolean) => {
    const { value } = props;
    return (isRadius ? radioKeys : props.keys).map((key) => {
      let v = (value && value[key]) || (typeof value === "string" ? value : null);
      if (key === "center") {
        const values = Object.keys(value).map((c) => value[c]);
        const equal = values.every((c) => c === values[0]);
        v = equal ? values[0] : v;
      }
      return <AutoComplete key={key} value={v} className={key} placeholder={key} disabled={props.disabled} />;
    });
  };

  const getSelect = () => {
    const select = ["none", "solid", "dashed", "dotted", "double"];
    const { value } = props;
    return props.keys.map((key) => {
      const v = (value && value[key]) || (typeof value === "string" ? value : select[0]);
      return (
        <Select
          className={key}
          size="small"
          key={key}
          value={v}
          getPopupContainer={(node) => getParentNode(node, "editor-list")}
          dropdownMatchSelectWidth={false}
          dropdownClassName="editor-list-dropdown"
        >
          {select.map((cKey) => (
            <Select.Option value={cKey} key={cKey}>
              {cKey}
            </Select.Option>
          ))}
        </Select>
      );
    });
  };

  const getChildrenToBox = () => {
    switch (props.name) {
      case "color":
        return getColor();
      case "style":
        return getSelect();
      default:
        return getInput(props.name === "radius");
    }
  };

  return (
    <div className={classNames("box-model-wrapper")}>
      <InputGroup
        className={classNames("box-model")}
        onChange={(v, isDrag) => {
          if (props.onChange) {
            props.onChange(v, isDrag);
          }
        }}
      >
        {getChildrenToBox()}
      </InputGroup>
    </div>
  );
};

BoxModel.displayName = "BoxModel";

export default BoxModel;
