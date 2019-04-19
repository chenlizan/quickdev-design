import * as React from 'react';
import {Input, Select} from 'antd';
import * as styles from './assets/index.less';

const Option = Select.Option;

export default class Label extends React.PureComponent<any, any> {

    handleOnChange = (e: string) => {
        this.props.onChange({target: {value: e === '' ? undefined : e}});
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
            <Select {...this.props}
                    className={styles['attribute_field_type']}
                    defaultValue=""
                    onChange={this.handleOnChange}
            >
                {this.generateOption(this.props.options || [])}
            </Select>
        );
    }
}
