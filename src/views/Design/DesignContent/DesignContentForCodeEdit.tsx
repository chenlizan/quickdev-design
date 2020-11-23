import * as React from "react";
import * as monaco from "monaco-editor";
import * as jsonFormat from "json-format";
import * as styles from "../../../stylesheets/Design.less";

export default class DesignContentForCodeEdit extends React.PureComponent<
  any,
  any
> {
  private readonly containerCode: React.RefObject<HTMLDivElement>;
  private readonly containerJson: React.RefObject<HTMLDivElement>;
  private editorCode: monaco.editor.IStandaloneCodeEditor | undefined;
  private editorJson: monaco.editor.IStandaloneCodeEditor | undefined;

  constructor(props: Readonly<any>) {
    super(props);
    this.containerCode = React.createRef();
    this.containerJson = React.createRef();
    this.editorCode = undefined;
    this.editorJson = undefined;
  }

  private initMonaco = (props: any) => {
    const _this = this;
    const { uiCode, uiMeta, onChange } = props;
    if (this.containerCode) {
      this.editorCode = monaco.editor.create(
        this.containerCode.current as HTMLElement,
        {
          value: uiCode,
          automaticLayout: true,
          contextmenu: true,
          language: "javascript",
          readOnly: false,
          wordWrap: "wordWrapColumn",
          wordWrapMinified: true,
          wrappingIndent: "indent",
        }
      );
      this.editorCode.onDidChangeModelContent(() => {
        onChange((_this.editorCode as any).getValue());
      });
    }
    if (this.containerJson) {
      this.editorJson = monaco.editor.create(
        this.containerJson.current as HTMLElement,
        {
          value: jsonFormat(uiMeta),
          automaticLayout: true,
          contextmenu: true,
          language: "json",
          readOnly: true,
          wordWrap: "wordWrapColumn",
          wordWrapMinified: true,
          wrappingIndent: "indent",
        }
      );
    }
  };

  componentDidMount(): void {
    this.initMonaco(this.props);
  }

  componentWillReceiveProps(nextProps: Readonly<any>, nextContext: any): void {
    if (this.editorCode && this.props.uiCode !== nextProps.uiCode) {
      this.editorCode.setValue(nextProps.uiCode);
    }
    if (this.editorJson && this.props.uiMeta !== nextProps.uiMeta) {
      this.editorJson.setValue(jsonFormat(nextProps.uiMeta));
    }
  }

  componentWillUnmount(): void {
    if (this.editorCode) {
      this.editorCode.dispose();
    }
    if (this.editorJson) {
      this.editorJson.dispose();
    }
  }

  render(): React.ReactNode {
    const { currentView, style } = this.props;
    const hideStyle = { display: "none" };
    return (
      <div>
        <div
          className={styles.design_content_monaco}
          style={currentView === "code" ? style : hideStyle}
          ref={this.containerCode}
        />
        <div
          className={styles.design_content_monaco}
          style={currentView === "json" ? style : hideStyle}
          ref={this.containerJson}
        />
      </div>
    );
  }
}
