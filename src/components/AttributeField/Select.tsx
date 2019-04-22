import * as React from 'react';
import {Select} from 'antd';
import * as styles from './assets/index.less';

const Option = Select.Option;

export default class Index extends React.PureComponent<any, any> {

    displayName: "Select" | undefined;

    handleOnChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        this.props.onChange({target: {value: e.target.value === '' ? undefined : e}});
    };

    generateOption(configMeta: Array<any>): Array<JSX.Element> {
        const element = [];
        for (let i = 0, len = configMeta.length; i < len; i++) {
            element.push(
                <Option key={configMeta[i].value}>{configMeta[i].label}</Option>
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
