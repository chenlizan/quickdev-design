import * as React from 'react';
import * as ReactDOM from 'react-dom';

const eventsFor = {
    start: 'mousedown',
    move: 'mousemove',
    stop: 'mouseup'
};

export default class Divide extends React.PureComponent {

    addEvent(el: Node | null, event: string, handler: Function): void {
        if (!el) {
            return;
        }
        if (el.attachEvent) {
            el.attachEvent('on' + event, handler);
        } else if (el.addEventListener) {
            el.addEventListener(event, handler, true);
        } else {
            // $FlowIgnore: Doesn't think elements are indexable
            el['on' + event] = handler;
        }
    }

    render() {

        const thisNode = ReactDOM.findDOMNode(this);

        this.addEvent(thisNode.ownerDocument, eventsFor.move, this.handleDrag);
        this.addEvent(thisNode.ownerDocument, eventsFor.stop, this.handleDragStop);

        return (
            <div style={{width: 2, backgroundColor: 'red', cursor: 'ew-resize'}}>|</div>
        )
    }
}