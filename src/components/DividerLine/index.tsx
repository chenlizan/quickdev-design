import * as React from "react";
import * as ReactDOM from "react-dom";
import classNames from "classnames";
import { addEvent, removeEvent } from "./utils";
import "./assets/index.less";

const omit = require("omit.js").default;

const eventsFor = {
  start: "mousedown",
  move: "mousemove",
  stop: "mouseup",
};

export type DraggableData = { x: number; y: number };

type EventHandler<T> = (e: T) => void;

type DraggableEventHandler = (e: MouseEvent, data: DraggableData) => void;

type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

interface DividerLineProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "onDrag"> {
  prefixCls?: string;
  orientation?: "left" | "right";
  onDrag?: DraggableEventHandler;
  style?: React.CSSProperties;
}

export default class DividerLine extends React.PureComponent<DividerLineProps, any> {
  static defaultProps = {
    prefixCls: "divider-line",
  };

  componentWillUnmount(): void {
    const thisNode = ReactDOM.findDOMNode(this);
    if (thisNode) {
      const { ownerDocument } = thisNode;
      removeEvent(ownerDocument, eventsFor.move, this.handleDrag);
      removeEvent(ownerDocument, eventsFor.stop, this.handleDragStop);
    }
  }

  handleDragStart: EventHandler<MouseEvent> = (e) => {
    const thisNode = ReactDOM.findDOMNode(this);
    if (thisNode) {
      const { ownerDocument } = thisNode;
      addEvent(ownerDocument, eventsFor.move, this.handleDrag);
      addEvent(ownerDocument, eventsFor.stop, this.handleDragStop);
    }
  };

  handleDrag: EventHandler<MouseEvent> = (e) => {
    const thisNode = ReactDOM.findDOMNode(this);
    const { orientation, onDrag } = this.props;
    if (thisNode && onDrag) {
      const offsetX = orientation === "left" ? 0 : thisNode.ownerDocument.body.clientWidth;
      onDrag(e, { x: Math.abs(offsetX - e.clientX), y: e.clientY });
    }
  };

  handleDragStop: EventHandler<MouseEvent> = (e) => {
    const thisNode = ReactDOM.findDOMNode(this);
    if (thisNode) {
      const { ownerDocument } = thisNode;
      removeEvent(ownerDocument, eventsFor.move, this.handleDrag);
      removeEvent(ownerDocument, eventsFor.stop, this.handleDragStop);
    }
  };

  onMouseDown: EventHandler<MouseEvent> = (e) => {
    this.handleDragStart(e);
  };

  onMouseUp: EventHandler<MouseEvent> = (e) => {
    this.handleDragStop(e);
  };

  getDividerLineClassName() {
    const { prefixCls } = this.props;
    return classNames(prefixCls);
  }

  render(): React.ReactNode {
    const { className } = this.props;
    const otherProps = omit(this.props, ["prefixCls", "onDrag"]);
    return <div {...otherProps} className={classNames(this.getDividerLineClassName(), className)} onMouseDown={this.onMouseDown} onMouseUp={this.onMouseUp} />;
  }
}
