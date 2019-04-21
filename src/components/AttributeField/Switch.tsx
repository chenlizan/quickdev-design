import * as React from 'react';
import {Icon, Switch} from 'antd';
import * as styles from './assets/index.less';

export default class Index extends React.PureComponent<any, any> {

    handleOnChange = (checked: boolean, event: MouseEvent) => {
        this.props.onChange({target: {value: checked}});
    };

    render(): React.ReactNode {
        return (
            <Switch
                className={styles['attribute_field_switch']}
                checkedChildren={<Icon type="check"/>}
                unCheckedChildren={<Icon type="close"/>}
                onChange={this.handleOnChange}
                checked={this.props.checked}
            />
        );
    }
}