import * as React from 'react';
import * as uuid from 'uuid/v4';
import {Form} from 'antd';
import {FormComponentProps} from 'antd/lib/form';
import AttributeField from '../../../components/AttributeField';

interface PropData {
    namespace: string,
    type: string
}

export interface AttributeProps extends FormComponentProps {
    currentProps: PropData
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
                <Form.Item key={uuid()} {...formItemLayout} label={configMeta[i].label}>
                    {getFieldDecorator('userName', {})(React.createElement((AttributeField as any)[configMeta[i].type]))}
                </Form.Item>
            )
        }
        return element;
    }

    render(): React.ReactNode {
        const {namespace, type} = this.props.currentProps;
        let formItem = (<span>无属性配置</span>);
        if (namespace && type) {
            const path = `../../../assets/json/AttributeConfig/${namespace}/${type}`;
            const configMeta = require(path);
            if (configMeta) {
                formItem = this.generateFormItem(configMeta)
            }
        }
        return (
            <Form>
                {formItem}
            </Form>
        );
    }
}

export default Form.create({
    mapPropsToFields: props => {
        console.log(props);
    },
    onFieldsChange: (props, fields) => {
        console.log(props);
    },
    onValuesChange: (props, changedValues, allValues) => {
        console.log(props);
    }
})(Attribute)

