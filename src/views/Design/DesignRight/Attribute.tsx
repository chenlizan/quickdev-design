import * as React from 'react';
import * as uuid from 'uuid/v4';
import * as _ from 'lodash';
import {Tooltip} from 'antd';
import {InfoCircleOutlined} from '@ant-design/icons';
import {Form as LegacyForm} from '@ant-design/compatible';
import {FormComponentProps} from '@ant-design/compatible/lib/form';
import AttributeConfig from '../../../../designConfig/AttributeConfig';
import AttributeField from '../../../../designConfig/AttributeField';
import {ClickEventHandler, ChangeEventHandler, PropData} from './PropsType';


interface AttributeProps extends FormComponentProps {
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
                <InfoCircleOutlined/>
            </Tooltip> : null
        }
    </span>
);

class Attribute extends React.PureComponent<AttributeProps, any> {

    generateFormItem(configMeta: Array<any>): Array<JSX.Element> {
        const {currentProps, form} = this.props;
        const {getFieldDecorator, getFieldsValue} = form;
        const element = [];
        const fieldsValue = getFieldsValue();
        for (let i = 0, len = configMeta.length; i < len; i++) {
            const {Association, id, label, type} = configMeta[i];
            if (id && label) {
                const {initialValue, valuePropName} = configMeta[i].props;
                element.push(
                    <LegacyForm.Item key={i} {...formItemLayout} label={formItemLabel(configMeta[i])} colon={false}>
                        {getFieldDecorator<string>(id, {
                            initialValue, valuePropName: valuePropName || 'value',
                        })(React.createElement((AttributeField as any)[type], configMeta[i].props))}
                    </LegacyForm.Item>
                )
            } else { //no binging
                element.push(
                    <LegacyForm.Item key={i}>
                        {React.createElement((AttributeField as any)[type], _.assign(configMeta[i].props, {onClick: this.handleClick}))}
                    </LegacyForm.Item>
                )
            }
            if (Association && fieldsValue[id]) { //associated attributes
                this.generateFormItem(_.isBoolean(fieldsValue[id]) ? Association["true"] : Association[fieldsValue[id]]).forEach((item) => {
                    element.push(item);
                });
            } else if (Association && (currentProps as any).props[id]) {
                this.generateFormItem(_.isBoolean((currentProps as any).props[id]) ? Association["true"] : Association[(currentProps as any).props[id]]).forEach((item) => {
                    element.push(item);
                });
            }
        }
        return element;
    }

    handleClick: ClickEventHandler = (e, data) => {
        const {onClick} = this.props;
        if (onClick) {
            onClick(e, data);
        }
    };

    render(): React.ReactNode {
        const {currentProps} = this.props;
        let formItem = [<span key={uuid()}>无属性配置</span>];
        if (currentProps && currentProps.namespace && currentProps.type) {
            const propMeta = (AttributeConfig as any)[currentProps.namespace][currentProps.type];
            if (propMeta) {
                formItem = formItem.concat(this.generateFormItem(propMeta));
                formItem.shift();
            }
        }
        return (
            <LegacyForm>
                {formItem}
            </LegacyForm>
        );
    }
}

export default LegacyForm.create<any>({
    mapPropsToFields: props => {
        if (props.currentProps && _.isObject(props.currentProps.props)) {
            const fieldData = {};
            const propMeta = (AttributeConfig as any)[props.currentProps.namespace][props.currentProps.type];
            Object.keys(props.currentProps.props).forEach((key) => {
                const propMetaItem = _.find(propMeta, {id: key});
                (fieldData as any)[key] = LegacyForm.createFormField({
                    value: propMetaItem && propMetaItem.toFields ? propMetaItem.toFields(props.currentProps.props[key]) : props.currentProps.props[key]
                });
            });
            if (props.currentProps.uiKey) {
                (fieldData as any)['uiKey'] = LegacyForm.createFormField({
                    value: props.currentProps.uiKey
                });
            }
            return fieldData;
        }
    },
    onFieldsChange: (props, fields) => {
        const propMeta = (AttributeConfig as any)[props.currentProps.namespace][props.currentProps.type];
        const propMetaItem = _.find(propMeta, {id: Object.keys(fields)[0]});
        if (propMetaItem.onFieldsChange) {
            props.onChange(propMetaItem.onFieldsChange(fields));
        } else {
            props.onChange(fields);
        }
    }
})(Attribute as any)
