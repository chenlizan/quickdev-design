import * as React from 'react';
import * as monaco from 'monaco-editor';
import * as styles from "../../../stylesheets/Design.less";

import jsonFormat = require("json-format");

export default class DesignContentForCodeEdit extends React.PureComponent<any, any> {
    private readonly containerElement: React.RefObject<HTMLDivElement>;
    private editor: monaco.editor.IStandaloneCodeEditor | undefined;

    constructor(props: Readonly<any>) {
        super(props);
        this.containerElement = React.createRef();
        this.editor = undefined;
    }

    private initMonaco = (props: any) => {
        const _this = this;
        const {jsonView, uiCode, uiMeta, onChange} = props;
        if (this.containerElement) {
            this.editor = monaco.editor.create(this.containerElement.current as HTMLElement, {
                value: jsonView ? jsonFormat(uiMeta) : uiCode,
                automaticLayout: true,
                contextmenu: !jsonView,
                language: jsonView ? "json" : "javascript",
                readOnly: jsonView,
                wordWrap: 'wordWrapColumn',
                wordWrapMinified: true,
                wrappingIndent: "indent"
            });
            this.editor.onDidChangeModelContent(() => {
                onChange((_this.editor as any).getValue());
            });
        }
    };

    componentDidMount(): void {
        this.initMonaco(this.props);
    }

    componentWillReceiveProps(nextProps: Readonly<any>, nextContext: any): void {
        if (this.props.codeView !== nextProps.codeView) {
            if (this.editor) {
                this.editor.dispose();
            }
            this.initMonaco(nextProps);
        }
        if (this.editor && nextProps.jsonView && this.props.uiMeta !== nextProps.uiMeta) {
            this.editor.setValue(jsonFormat(nextProps.uiMeta));
        }
    }

    componentWillUnmount(): void {
        if (this.editor) {
            this.editor.dispose();
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