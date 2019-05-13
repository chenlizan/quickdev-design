import * as React from 'react';
import * as uuid from 'uuid/v4';
import * as _ from 'lodash';
import {Form, Icon, Tooltip} from 'antd';
import {FormComponentProps} from 'antd/lib/form';
import AttributeConfig from '../../../assets/json/AttributeConfig';
import AttributeField from '../../../components/AttributeField';
import {ClickEventHandler} from "./Component";

interface PropData {
    key: string,
    namespace: string,
    type: string
}


type ClickData = { namespace: string, type: string }

export type ClickEventHandler = (e: MouseEvent, data: ClickData) => void;
export type ChangeEventHandler = (data: any) => void;

export interface AttributeProps extends FormComponentProps {
    currentProps: PropData,
    onClick?: ClickEventHandler,
    onChange?: ChangeEventHandler
}

const formItemLayout = {
    labelCol: {span: 8, style: {height: 41, backgroundColor: 'white', borderBottom: '1px solid silver'}},
    wrapperCol: {
        span: 16,
        style: {backgroundColor: 'white', borderBottom: '1px solid silver', borderLeft: '1px solid silver'}
    },
    style: {marginBottom: 'initial'}
};

const formItemLabel = (configMeta: any) => (
    <span>
        {configMeta.label}&nbsp;&nbsp;
        {configMeta.description ?
            <Tooltip title={configMeta.description}>
                <Icon type="info-circle"/>
            </Tooltip> : null
        }
    </span>
);

class Attribute extends React.PureComponent<AttributeProps, any> {

    generateFormItem(configMeta: Array<any>): Array<JSX.Element> {
        const {getFieldDecorator, getFieldsValue} = this.props.form;
        const element = [];
        const fieldsValue = getFieldsValue();
        for (let i = 0, len = configMeta.length; i < len; i++) {
            const {dependencies, id, type} = configMeta[i];
            if (id && type) {
                const {initialValue, valuePropName} = configMeta[i].props;
                element.push(
                    <Form.Item key={i} {...formItemLayout} label={formItemLabel(configMeta[i])} colon={false}>
                        {getFieldDecorator<string>(id, {
                            initialValue, valuePropName: valuePropName || 'value',
                        })(React.createElement((AttributeField as any)[type], configMeta[i].props))}
                    </Form.Item>
                )
            } else {
                element.push(
                    <Form.Item key={i}>
                        {React.createElement((AttributeField as any)[type], _.assign(configMeta[i].props, {onClick: this.handleClick}))}
                    </Form.Item>
                )
            }
            if (dependencies && fieldsValue[id]) {
                const {initialValue, valuePropName} = dependencies.props;
                element.push(
                    <Form.Item key={i} {...formItemLayout} label={formItemLabel(dependencies)} colon={false}>
                        {getFieldDecorator<string>(dependencies.id, {
                            initialValue, valuePropName: valuePropName || 'value',
                        })(React.createElement((AttributeField as any)[dependencies.type], dependencies.props))}
                    </Form.Item>
                );
            }
        }
        return element;
    }

    handleClick = (e: any): void => {
        console.log('handleClick');
        const {onClick} = this.props;
        if (onClick) {
            onClick(e, e.currentTarget.dataset);
        }
    };

    render(): React.ReactNode {
        const {namespace, type} = this.props.currentProps;
        let formItem = [<span key={uuid()}>无属性配置</span>];
        if (namespace && type) {
            const propMeta = (AttributeConfig as any)[namespace][type];
            if (propMeta) {
                formItem = formItem.concat(this.generateFormItem(propMeta));
                formItem.shift();
            }
        }
        return (
            <Form>
                {formItem}
            </Form>
        );
    }
}

export default Form.create<any>({
    mapPropsToFields: props => {
        if (_.isObject(props.currentProps.props)) {
            const fieldData = {};
            Object.keys(props.currentProps.props).forEach((key) => {
                (fieldData as any)[key] = Form.createFormField({
                    value: props.currentProps.props[key]
                });
            });
            return fieldData;
        }
    },
    onFieldsChange: (props, fields) => {
        props.onChange(fields);
    },
    onValuesChange: (props, changedValues, allValues): void => {
        console.log(props);
    }
})(Attribute as any)
