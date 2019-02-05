import * as React from 'react';
import {Input, Select} from 'antd';
import * as styles from './assets/index.less';

const Option = Select.Option;

export default class Label extends React.PureComponent<any, any> {

    handleOnChange = (e: string) => {
        this.props.onChange({target: {value: e === '' ? undefined : e}});
    };

    render(): React.ReactNode {
        return (
            <Select {...this.props}
                    className={styles['attribute_field_type']}
                    defaultValue=""
                    onChange={this.handleOnChange}
            >
                <Option value="">-</Option>
                <Option value="primary">primary</Option>
                <Option value="ghost">ghost</Option>
                <Option value="warning">warning</Option>
            </Select>
        );
    }
}