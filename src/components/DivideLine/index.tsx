import * as React from 'react';
import * as ReactDOM from 'react-dom';
import classNames from 'classnames';
import {addEvent, removeEvent} from './utils';

const omit = require('omit.js').default;

const eventsFor = {
    start: 'mousedown',
    move: 'mousemove',
    stop: 'mouseup'
};

export type DraggableData = { x: number, y: number };

type EventHandler<T> = (e: T) => void;

type DraggableEventHandler = (e: MouseEvent, data: DraggableData) => void;

type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

interface DivideLineProps extends React.HTMLAttributes<HTMLDivElement> {
    id?: string;
    className?: string;
    onMove?: DraggableEventHandler;
    style?: React.CSSProperties;
}

export default class DivideLine extends React.PureComponent<DivideLineProps, any> {

    static defaultProps: DivideLineProps;

    componentWillUnmount(): void {
        const thisNode = ReactDOM.findDOMNode(this);
        if (thisNode) {
            const {ownerDocument} = thisNode;
            removeEvent(ownerDocument, eventsFor.move, this.handleDrag);
            removeEvent(ownerDocument, eventsFor.stop, this.handleDragStop);
        }
    }

    handleDragStart: EventHandler<MouseEvent> = (e) => {
        const thisNode = ReactDOM.findDOMNode(this);
        if (thisNode) {
            const {ownerDocument} = thisNode;
            addEvent(ownerDocument, eventsFor.move, this.handleDrag);
            addEvent(ownerDocument, eventsFor.stop, this.handleDragStop);
        }
    };

    handleDrag: EventHandler<MouseEvent> = (e: any) => {
        const thisNode = ReactDOM.findDOMNode(this);
        const {id, onMove} = this.props;
        if (thisNode && onMove) {
            const offsetX = id === 'left' ? 0 : thisNode.ownerDocument!.body.clientWidth;
            onMove(e, {x: Math.abs(offsetX - e.clientX), y: e.clientY});
        }
    };

    handleDragStop: EventHandler<MouseEvent> = (e) => {
        const thisNode = ReactDOM.findDOMNode(this);
        if (thisNode) {
            const {ownerDocument} = thisNode;
            removeEvent(ownerDocument, eventsFor.move, this.handleDrag);
            removeEvent(ownerDocument, eventsFor.stop, this.handleDragStop);
        }
    };

    onMouseDown: EventHandler<MouseEvent> = (e) => {
        this.handleDragStart(e);
    };

    onMouseUp: EventHandler<MouseEvent> = (e: any): void => {
        this.handleDragStop(e);
    };

    render(): React.ReactNode {
        const {className} = this.props;
        const otherProps = omit(this.props, [
            'id',
            'onDrag',
            'style'
        ]);
        return (
            <div
                {...otherProps}
                className={classNames(className)}
                onMouseDown={this.onMouseDown}
                onMouseUp={this.onMouseUp}
            />
        )
    }
}