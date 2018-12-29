import * as React from 'react'
import DropZone from 'react-dropzone'

const parseJson = require('parse-json');
const stripBom = require('strip-bom');

export default class Index extends React.Component<any,any> {

    displayName: "Dropzone" | undefined;

    constructor(props: any) {
        super(props)
    }

    onDrop = (acceptedFiles: Blob[]) => {
        const reader = new FileReader();
        reader.readAsText(acceptedFiles[0]);
        const type = acceptedFiles[0].type;
        reader.onloadend = (e) => {
            if (type === "text/javascript") {
                (this.props as any).onChange(eval(stripBom((e.target as any).result)));
            } else if (type === "application/json") {
                (this.props as any).onChange(parseJson((stripBom((e.target as any).result))));
            }
        }
    };

    render() {
        return (
            <DropZone accept=".json,.js" multiple={false} onDrop={this.onDrop.bind(this)}>
                {({getRootProps, getInputProps}) => (
                    <div {...getRootProps()}>
                        <input {...getInputProps()} />
                        <p>将文件拖至此处，或单击选择文件</p>
                    </div>
                )}
            </DropZone>
        )
    }
}