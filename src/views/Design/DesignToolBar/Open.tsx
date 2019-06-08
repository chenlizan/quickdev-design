import * as React from 'react'
import * as PropTypes from 'prop-types';
import {Button} from "antd";
import DropZone from 'react-dropzone'

const parseJson = require('parse-json');
const stripBom = require('strip-bom');

export interface OpenProps {
    onChange?: (value?: object) => void
}

export default class Open extends React.Component<OpenProps, any> {

    static defaultProps: OpenProps;

    static propTypes = {
        onChange: PropTypes.func
    };

    constructor(props: Readonly<OpenProps>) {
        super(props)
    }

    onDrop = (acceptedFiles: Blob[]): void => {
        const reader = new FileReader();
        reader.readAsText(acceptedFiles[0]);
        const type = acceptedFiles[0].type;
        reader.onloadend = (e) => {
            if (type === "application/json") {
                (this.props as any).onChange(parseJson((stripBom((e.target as any).result))));
            }
        }
    };

    render() {
        return (
            <DropZone accept="application/json,text/javascript" multiple={false} noDrag={false} onDrop={this.onDrop}>
                {({getRootProps, getInputProps}) => (
                    <Button {...getRootProps()}>
                        <input {...getInputProps()}/>Open
                    </Button>
                )}
            </DropZone>
        )
    }
}
