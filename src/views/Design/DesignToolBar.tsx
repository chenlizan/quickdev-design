import * as React from 'react';
import Dropzone from './Dropzone';

export default class DesignToolBar extends React.PureComponent<any, any> {
    render(): React.ReactNode {
        return (
            <Dropzone onChange={(e: any) => this.props.handleOpenFile(e)}/>
        );
    }
}