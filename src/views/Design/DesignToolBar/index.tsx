import * as React from 'react';
import Dropzone, {DropzoneProps} from './Dropzone';

const {initState} = require('../../../reducers');

export default class Index extends React.PureComponent<any, any> {

    displayName: "DesignToolBar" | undefined;

    componentWillMount(): void {
        this.props.handleResetState(initState.Design);
    }

    render(): React.ReactNode {
        return (
            <Dropzone onChange={(value): DropzoneProps => this.props.handleOpenFile(value)}/>
        );
    }
}