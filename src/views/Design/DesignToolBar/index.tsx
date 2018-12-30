import * as React from 'react';
import Dropzone, {DropzoneProps} from './Dropzone';

export default class Index extends React.PureComponent<any, any> {

    displayName: "DesignToolBar" | undefined;

    render(): React.ReactNode {
        return (
            <Dropzone onChange={(value): DropzoneProps => this.props.handleOpenFile(value)}/>
        );
    }
}