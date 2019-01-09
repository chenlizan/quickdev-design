import * as React from 'react';
import {Form, Input} from 'antd';
import {FormComponentProps} from 'antd/lib/form';

const configMeta = require('../../../assets/json/AttributeConfig/Button');

import indexModule from './indexModule';

interface AttributeProps extends FormComponentProps {
    // uiMeta: object
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
                <Form.Item  {...formItemLayout} label={configMeta[i].label}>
                    {getFieldDecorator('userName', {
                        rules: [{required: true, message: 'Please input your username!'}],
                    })(
                        React.createElement(configMeta[i].default['testModule'])
                    )}
                </Form.Item>
            )
        }
        return element;
    }

    render(): React.ReactNode {
        return (
            <Form>
                {this.generateFormItem(configMeta)}
            </Form>
        );
    }
}

export default Form.create({
    onFieldsChange: (props, fields) => {
    },
    onValuesChange: (props, changedValues, allValues) => {
    }
})(Attribute)

