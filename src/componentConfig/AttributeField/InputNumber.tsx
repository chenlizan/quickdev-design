import * as React from 'react';
import {InputNumber} from 'antd';

import * as styles from './assets/index.less';

export default class Index extends React.PureComponent<any, any> {

    displayName: "InputNumber" | undefined;

    handleOnChange = (value: number | undefined | string) => {
        this.props.onChange({target: {value: value === '' ? undefined : value}});
    };

    render(): React.ReactNode {
        return (
            <InputNumber
                className={styles['attribute_field_inputnumber']}
                onChange={this.handleOnChange}
                value={this.props.value}
            />
        );
    }
}