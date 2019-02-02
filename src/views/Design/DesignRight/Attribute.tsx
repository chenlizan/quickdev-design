import * as React from 'react';
import * as uuid from 'uuid/v4';
import * as _ from 'lodash';
import {Form} from 'antd';
import {FormComponentProps} from 'antd/lib/form';

import AttributeConfig from './AttributeConfig';
import AttributeField from '../../../components/AttributeField';

interface PropData {
    key: string,
    namespace: string,
    type: string
}

export type ChangeEventHandler = (data: any) => void;

export interface AttributeProps extends FormComponentProps {
    currentProps: PropData,
    onChange?: ChangeEventHandler
}

const formItemLayout = {
    labelCol: {span: 8, style: {backgroundColor: 'white', borderBottom: '1px solid silver'}},
    wrapperCol: {
        span: 16,
        style: {backgroundColor: 'white', borderBottom: '1px solid silver', borderLeft: '1px solid silver'}
    },
    style: {marginBottom: 'initial'}
};

class Attribute extends React.PureComponent<AttributeProps, any> {

    generateFormItem(configMeta: Array<any>): Array<JSX.Element> {
        const {getFieldDecorator} = this.props.form;
        const element = [];
        for (let i = 0, len = configMeta.length; i < len; i++) {
            element.push(
                <Form.Item key={i} {...formItemLayout} label={configMeta[i].label}>
                    {getFieldDecorator<string>(configMeta[i].id, {})(React.createElement((AttributeField as any)[configMeta[i].type]))}
                </Form.Item>
            )
        }
        return element;
    }

    render(): React.ReactNode {
        const {namespace, type} = this.props.currentProps;
        let formItem = [<span key={uuid()}>无属性配置</span>];
        if (namespace && type) {
            try {
                const propMeta = (AttributeConfig as any)[namespace][type];
                if (propMeta) {
                    formItem = formItem.concat(this.generateFormItem(propMeta));
                    formItem.shift();
                }
            } catch (e) {

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
    }
})(Attribute)

