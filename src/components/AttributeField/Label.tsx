import * as React from 'react';
import {Input} from 'antd';

import * as styles from './assets/index.less';

export default class Label extends React.PureComponent<any, any> {

    handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const data: string[] = [];
        if (e.target.value === '') {
            this.props.onChange({target: {value: data}});
        } else {
            data.push(e.target.value);
            this.props.onChange({target: {value: data}});
        }
    };

    render(): React.ReactNode {
        return (
            <Input
                {...this.props}
                className={styles['attribute_field_label']}
                onChange={this.handleOnChange}
            />
        );
    }
}