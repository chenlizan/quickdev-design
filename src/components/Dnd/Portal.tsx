import React from "react";
import ReactDOM from "react-dom";

export function getDocument() {
  return window.document;
}

interface PortalProps {
  getContainer?: () => HTMLElement;
  didUpdate?: (prevProps: Readonly<any>) => void;
}

export default class Portal extends React.Component<PortalProps> {
  private _container: HTMLElement | undefined;

  static defaultProps = {
    getContainer: () => getDocument().body,
  };

  componentDidMount() {
    this.createContainer();
  }

  componentDidUpdate(prevProps: Readonly<any>) {
    const { didUpdate } = this.props;
    if (didUpdate) {
      didUpdate(prevProps);
    }
  }

  componentWillUnmount() {
    this.removeContainer();
  }

  createContainer() {
    const { getContainer } = this.props;
    if (getContainer) {
      this._container = getContainer();
      this.forceUpdate();
    }
  }

  removeContainer() {
    if (this._container && this._container.parentNode) {
      this._container.parentNode.removeChild(this._container);
    }
  }

  render() {
    if (this._container) {
      return ReactDOM.createPortal(this.props.children, this._container as any);
    }
    return null;
  }
}
