import * as React from 'react';
import {Button, Radio} from "antd";
import Dropzone, {DropzoneProps} from './Dropzone';
import * as styles from '../../../stylesheets/Design.less';

const {initState} = require('../../../reducers');

export default class Index extends React.PureComponent<any, any> {

    displayName: "DesignToolBar" | undefined;

    componentWillMount(): void {
        this.props.handleResetState(initState.Design);
    }

    render(): React.ReactNode {
        return (
            <div className={styles.design_toolbar}>
                <Dropzone onChange={(value): DropzoneProps => this.props.handleOpenFile(value)}/>
                <Button>Save</Button>
                <Radio.Group className={styles.design_toolbar_mode} defaultValue="view" buttonStyle="solid" >
                    <Radio.Button value="view">View</Radio.Button>
                    <Radio.Button value="code">Code</Radio.Button>
                    <Radio.Button value="json">Json</Radio.Button>
                </Radio.Group>
            </div>
        );
    }
}