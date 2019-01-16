import * as React from 'react';
import * as monaco from 'monaco-editor/esm/vs/editor/editor.api';
import * as styles from "../../../stylesheets/Design.less";

const jsonFormat = require("json-format");


export default class DesignContentForCodeEdit extends React.PureComponent<any, any> {
    private __current_value: any;
    private readonly containerElement: React.RefObject<HTMLDivElement>;
    private editor: monaco.editor.IStandaloneCodeEditor | undefined;

    constructor(props: Readonly<any>) {
        super(props);
        this.__current_value = props.value;
        this.containerElement = React.createRef();
        this.editor = undefined;
    }

    initMonaco = () => {
        if (this.containerElement) {
            this.editor = monaco.editor.create(this.containerElement.current as HTMLElement, {
                value: jsonFormat(this.props.uiMeta),
                automaticLayout: true,
                contextmenu:false,
                language: "json",
                readOnly: true,
                wordWrap: 'wordWrapColumn',
                wordWrapMinified: true,
                wrappingIndent: "indent"
            });
        }
    };

    componentDidMount(): void {
        this.initMonaco();
    }

    componentWillReceiveProps(nextProps: Readonly<any>, nextContext: any): void {
        if (this.editor) {
            this.editor.setValue(jsonFormat(nextProps.uiMeta));
        }
    }

    render(): React.ReactNode {
        return (
            <div>
                <div className={styles.design_content_code} style={this.props.style} ref={this.containerElement}/>
            </div>
        );
    }

}