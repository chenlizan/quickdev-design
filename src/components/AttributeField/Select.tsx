import * as React from 'react';
import {Select} from 'antd';
import {SelectValue} from 'antd/lib/select';
import * as styles from './assets/index.less';

export default class Index extends React.PureComponent<any, any> {

    displayName: "Select" | undefined;

    handleOnChange = (e: SelectValue) => {
        this.props.onChange({target: {value: e === '' ? undefined : e}});
    };

    generateOption(configMeta: Array<any>): Array<JSX.Element> {
        const element = [];
        for (let i = 0, len = configMeta.length; i < len; i++) {
            element.push(
                <Select.Option key={configMeta[i].value}>{configMeta[i].label}</Select.Option>
            )
        }
        return element;
    }

    render(): React.ReactNode {
        return (
            <Select
                className={styles['attribute_field_select']}
                onChange={this.handleOnChange}
                value={this.props.value}
            >
                {this.generateOption(this.props.options || [])}
            </Select>
        );
    }
}
