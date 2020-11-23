import * as React from "react";
import Scrollbars from "react-custom-scrollbars";
import DesignPreview from "../../../containers/Design/DesignPreview";
import * as styles from "../../../stylesheets/Design.less";

export default class DesignContentForMobile extends React.PureComponent<
  any,
  any
> {
  private readonly iframeElement: React.RefObject<any>;

  constructor(props: Readonly<any>) {
    super(props);
    this.iframeElement = React.createRef();
  }

  render(): React.ReactNode {
    const { boostMode, modeSize } = this.props;
    if (this.iframeElement.current) {
      this.iframeElement.current.contentWindow.location.reload(true);
    }
    return (
      <div>
        <Scrollbars
          autoHide
          className={styles.design_content_mobile}
          style={modeSize}
        >
          {boostMode ? (
            <iframe ref={this.iframeElement} src="#/preview" />
          ) : (
            <DesignPreview />
          )}
        </Scrollbars>
      </div>
    );
  }
}
