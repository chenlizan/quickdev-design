import * as React from "react";
import { TweenOneGroup } from "rc-tween-one";
import Row from "antd/lib/row";
import Col from "antd/lib/col";
import Collapse from "antd/lib/collapse";
import Radio, { RadioChangeEvent } from "antd/lib/radio";
import Icon from "./common/Icon";

const Panel = Collapse.Panel;
const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;

export interface LayoutProps {
  className?: string;
  header?: string;
  locale: {
    header: string;
    name: string;
    displaySelect: { [key: string]: string };
    flexName: { [key: string]: { name: string; icon: string } };
    flexSelect: { [key: string]: { [key: string]: string } };
  };
  value?: { [key: string]: string };
  onChange?: (name: any, value: any) => void;
}

const Layout: React.FC<LayoutProps> = (props) => {
  const { value, locale, header, ...otherProps } = props;

  const handleChange = (e: RadioChangeEvent, key: string) => {
    const type = e.target.value;
    const { value } = props;
    if (value) {
      value[key] = type;
    }
    props.onChange?.("layout", value);
  };

  const getFlexChildToRender = () => {
    const { locale, value } = props;
    const { flexSelect, flexName } = locale;
    const getItemToChild = (data: { [key: string]: string }, $key: string) => {
      return Object.keys(data).map((key) => (
        <RadioButton value={key} key={key}>
          <Icon type={`${$key}-${key}`} prompt={data[key]} />
        </RadioButton>
      ));
    };
    const rowItem = Object.keys(flexSelect).map((key) => {
      const item = flexSelect[key];
      const nameObj = flexName[key];
      return (
        <Row gutter={8} key={key}>
          <Col span={3}>
            <Icon type={nameObj.icon} prompt={nameObj.name} />
          </Col>
          <Col span={21}>
            <RadioGroup
              value={value?.[key]}
              size="small"
              onChange={(e) => {
                handleChange(e, key);
              }}
            >
              {getItemToChild(item, key)}
            </RadioGroup>
          </Col>
        </Row>
      );
    });
    return (
      <div key="flex" style={{ overflow: "hidden" }}>
        {rowItem}
      </div>
    );
  };

  const radioChildrenToRender = () => {
    return (
      <RadioGroup
        value={value?.display}
        size="small"
        onChange={(e) => {
          handleChange(e, "display");
        }}
      >
        {Object.keys(locale.displaySelect).map((key) => (
          <RadioButton value={key} key={key}>
            <Icon type={key === "none" ? "eye-invisible" : key} prompt={locale.displaySelect[key]} />
          </RadioButton>
        ))}
      </RadioGroup>
    );
  };
  const flexChild = value?.display === "flex" ? getFlexChildToRender() : null;

  return (
    <Panel key="layout" {...otherProps} header={header || locale.header}>
      <Row gutter={8}>
        <Col>{locale.name}</Col>
      </Row>
      <Row gutter={8}>
        <Col>{radioChildrenToRender()}</Col>
      </Row>
      <TweenOneGroup
        enter={{ height: 0, type: "from", duration: 300, ease: "easeInOutCirc" }}
        leave={{ height: 0, duration: 300, ease: "easeInOutCirc" }}
        style={{ overflow: "hidden" }}
      >
        {flexChild}
      </TweenOneGroup>
    </Panel>
  );
};

Layout.displayName = "EditorLayout";

Layout.defaultProps = {
  className: "editor-layout",
  value: {
    display: "block",
    alignItems: "stretch",
    justifyContent: "flex-start",
  },
};

export default Layout;
