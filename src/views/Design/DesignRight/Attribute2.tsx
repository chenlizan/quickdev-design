// @ts-nocheck
import _ from "lodash";
import React from "react";
import { Form, Tooltip } from "antd";
import { FormInstance } from "antd/lib/form";
import { InfoCircleOutlined } from "@ant-design/icons";
import AttributeConfig from "../../../../designConfig/AttributeConfig";
import AttributeField from "../../../components/AttributeField";
import { ClickEventHandler, ChangeEventHandler, PropData } from "./PropsType";

interface AttributeProps {
  currentProps: PropData;
  onClick?: ClickEventHandler;
  onChange?: ChangeEventHandler;
}

const formItemLayout = {
  labelCol: {
    span: 8,
    style: {
      height: 41,
      backgroundColor: "white",
      borderBottom: "1px solid silver",
    },
  },
  wrapperCol: {
    span: 16,
    style: {
      backgroundColor: "white",
      borderBottom: "1px solid silver",
      borderLeft: "1px solid silver",
    },
  },
  style: { marginBottom: "initial" },
};

const formItemLabel = (configMeta: any) => (
  <span>
    {configMeta.label}&nbsp;&nbsp;
    {configMeta.description ? (
      <Tooltip title={configMeta.description}>
        <InfoCircleOutlined />
      </Tooltip>
    ) : null}
  </span>
);

export default class Attribute extends React.PureComponent<AttributeProps, any> {
  formRef = React.createRef<FormInstance>();

  generateFormItem(configMeta: Array<any>): Array<JSX.Element> {
    const { currentProps } = this.props;
    const element = [];
    const fieldsValue = this.formRef.current?.getFieldsValue(true);
    for (let i = 0, len = configMeta.length; i < len; i++) {
      const { association, id, type } = configMeta[i];
      const { initialValue, valuePropName = "value" } = configMeta[i].props;
      if (
        (!association && type !== "Button") ||
        (association &&
          (fieldsValue?.[association.id] === association["condition"] || (currentProps as any).props[association.id] === association["condition"]))
      ) {
        element.push(
          <Form.Item
            key={i}
            name={id}
            colon={false}
            {...formItemLayout}
            initialValue={initialValue}
            valuePropName={valuePropName}
            label={formItemLabel(configMeta[i])}
          >
            {React.createElement((AttributeField as any)[type], configMeta[i].props)}
          </Form.Item>
        );
      } else if (type === "Button") {
        element.push(
          <Form.Item key={i}>{React.createElement((AttributeField as any)[type], _.assign(configMeta[i].props, { onClick: this.handleClick }))}</Form.Item>
        );
      }
    }
    return element;
  }

  handleClick: ClickEventHandler = (e, data) => {
    const { onClick } = this.props;
    if (onClick) {
      onClick(e, data);
    }
  };

  onValuesChange = (changedValues: any) => {
    const { props } = this;
    const propMeta = (AttributeConfig as any)[props.currentProps.namespace][props.currentProps.type];
    const propMetaItem = _.find(propMeta, { id: Object.keys(changedValues)[0] });
    if (propMetaItem.onFieldsChange) {
      props.onChange?.(propMetaItem.onFieldsChange(changedValues));
    } else {
      props.onChange?.(changedValues);
    }
  };

  render(): React.ReactNode {
    const { currentProps } = this.props;
    const fieldData = [];
    let formItem = [<span>无属性配置</span>];
    const propMeta = (AttributeConfig as any)[currentProps.namespace][currentProps.type];
    if (currentProps && currentProps.namespace && currentProps.type) {
      if (propMeta) {
        formItem = formItem.concat(this.generateFormItem(propMeta));
        formItem.shift();
      }
    }
    propMeta.forEach((propMetaItem) => {
      fieldData.push({
        name: propMetaItem.id,
        value: propMetaItem.toFields ? propMetaItem.toFields(currentProps.props[propMetaItem.id]) : currentProps.props[propMetaItem.id],
      });
    });
    this.formRef.current?.setFieldsValue(fieldData);
    return (
      <Form ref={this.formRef} onValuesChange={this.onValuesChange}>
        {formItem}
      </Form>
    );
  }
}
