import * as React from 'react'
import Dropzone from 'react-dropzone'

export  default  class Basic extends React.Component {
    constructor(props:any) {
        super(props)
        this.state = {
            files: []
        }
    }

    onDrop(files) {
        var reader = new FileReader();
        reader.readAsText(files[0]);
        reader.onload = function(e){
            console.log(e)
        }


        this.setState({files});
    }

    onCancel() {
        this.setState({
            files: []
        });
    }

    render() {
        const files = this.state.files.map(file => (
            <li key={file.name}>
                {file.name} - {file.size} bytes
            </li>
        ))

        return (
            <section>
                <Dropzone
                    onDrop={this.onDrop.bind(this)}
                    onFileDialogCancel={this.onCancel.bind(this)}
                >
                    {({getRootProps, getInputProps}) => (
                        <div {...getRootProps()}>
                            <input {...getInputProps()} />
                            <p>Drop files here, or click to select files</p>
                        </div>
                    )}
                </Dropzone>
                <aside>
                    <h4>Files</h4>
                    <ul>{files}</ul>
                </aside>
            </section>
        );
    }
}