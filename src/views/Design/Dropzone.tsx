import * as React from 'react'
import DropZone from 'react-dropzone'

const parseJson = require('parse-json');
const stripBom = require('strip-bom');

export default class Basic extends React.Component {
    constructor(props: any) {
        super(props)
    }

    onDrop = (acceptedFiles: Blob[]) => {
        const reader = new FileReader();
        reader.readAsText(acceptedFiles[0]);
        const type = acceptedFiles[0].type;
        reader.onloadend = (e) => {
            if (type === "text/javascript") {
                const data = eval(stripBom((e.target as any).result));
                console.log(data);
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