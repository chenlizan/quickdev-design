import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {addEvent, removeEvent} from './utils';

const eventsFor = {
    start: 'mousedown',
    move: 'mousemove',
    stop: 'mouseup'
};

type EventHandler<T> = (e: T) => void | false;

export type DraggableData = {
    x: number, y: number
};

type DraggableEventHandler = (e: MouseEvent, data: DraggableData) => void;

type DivideLineProps = {
    id?: string;
    className?: string;
    onDrag?: DraggableEventHandler,
    onMouseDown?: (e: MouseEvent) => void,
    style?: React.CSSProperties;
}

export default class DivideLine extends React.PureComponent<DivideLineProps, any> {

    static defaultProps = {
        onDrag: (() => {
        }) as DraggableEventHandler
    };

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

    handleDrag: EventHandler<MouseEvent> = (e) => {
        const thisNode = ReactDOM.findDOMNode(this);
        const {id, onDrag} = this.props;
        if (thisNode && onDrag) {
            // @ts-ignore
            const offsetX = id === 'left' ? 0 : thisNode.ownerDocument.body.clientWidth;
            onDrag(e, {x: Math.abs(offsetX - e.clientX), y: e.clientY});
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

    onMouseDown: EventHandler<MouseEvent> = (e: MouseEvent) => {
        this.handleDragStart(e);
    };

    onMouseUp: EventHandler<MouseEvent> = (e: MouseEvent) => {
        this.handleDragStop(e);
    };

    render(): React.ReactNode {
        return (
            // @ts-ignore
            <div {...this.props} onMouseDown={this.onMouseDown} onMouseUp={this.onMouseUp}/>
        )
    }
}