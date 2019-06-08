import * as React from 'react';
import {Avatar, Button, message, Radio} from "antd";
import {RadioChangeEvent} from 'antd/lib/radio'
import Open, {OpenProps} from './Open';
import * as styles from '../../../stylesheets/Design.less';

const {initState} = require('../../../reducers');

export default class Index extends React.PureComponent<any, any> {

    displayName: "DesignToolBar" | undefined;

    componentWillMount(): void {
        this.props.handleResetState(initState.Design);
    }

    handleOnChange = (e: RadioChangeEvent) => {
        this.props.handleCurrentView(e.target.value);
    };

    render(): React.ReactNode {
        return (
            <div className={styles.design_toolbar}>
                <Open onChange={(value): OpenProps => this.props.handleOpenFile(value)}/>
                <Button onClick={() => message.success('Save to clipboard')}>Save</Button>
                <Radio.Group className={styles.design_toolbar_mode} defaultValue="view" buttonStyle="solid"
                             onChange={this.handleOnChange}>
                    <Radio.Button value="view">View</Radio.Button>
                    <Radio.Button value="code">Code</Radio.Button>
                    <Radio.Button value="json">Json</Radio.Button>
                </Radio.Group>
                <Avatar className={styles.design_toolbar_user} shape="square" size="small" icon="user"/>
            </div>
        );
    }
}
