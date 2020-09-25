import * as React from 'react';
import {Switch} from 'antd';
import {CloseOutlined, CheckOutlined} from '@ant-design/icons';
import * as styles from './assets/index.less';

export default class Index extends React.PureComponent<any, any> {

    displayName: "Switch" | undefined;

    handleOnChange = (checked: boolean, event: MouseEvent) => {
        this.props.onChange({target: {value: checked}});
    };

    render(): React.ReactNode {
        return (
            <Switch
                className={styles['attribute_field_switch']}
                checkedChildren={<CheckOutlined/>}
                unCheckedChildren={<CloseOutlined/>}
                onChange={this.handleOnChange}
                checked={this.props.checked}
                size="small"
            />
        );
    }
}