import * as React from 'react';
import {Button} from 'antd';

import * as styles from './assets/index.less';

export default class Index extends React.PureComponent<any, any> {

    displayName: "Button" | undefined;

    render(): React.ReactNode {
        const {text} = this.props;
        return (
            <div className={styles['attribute_field_button']}>
                <Button
                    type="primary">
                    {text}
                </Button>
            </div>
        );
    }
}