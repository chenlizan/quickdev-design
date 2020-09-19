import classNames from 'classnames';
import React, { MouseEventHandler, useRef } from 'react';
import { findDOMNode } from 'react-dom';
import { Button } from 'antd';
import { DragOutlined, MenuOutlined } from '@ant-design/icons';
import { addEvent, removeEvent } from './utils';

function noop() {
}

const eventsFor = {
  start: 'mousedown',
  move: 'mousemove',
  stop: 'mouseup',
};

interface ToolBarProps {
  onClick?: (key: string) => void;
}

const ToolBar: React.FC<ToolBarProps> = ({ onClick = noop }) => {
  const toolBarEl = useRef(null);

  const handleClick: React.MouseEventHandler<HTMLElement> = (e) => {
    const { value } = e.currentTarget as any;
    onClick(value);
  };

  const handleDragStart: MouseEventHandler<HTMLElement> = (e) => {
    const thisNode = findDOMNode(document.querySelector('.overlay'));
    if (thisNode) {
      addEvent(thisNode, eventsFor.move, handleDrag);
      addEvent(thisNode, eventsFor.stop, handleDragStop);
    }
  };

  const handleDragStop: MouseEventHandler<HTMLElement> = (e) => {
    const thisNode = findDOMNode(document.querySelector('.overlay'));
    if (thisNode) {
      removeEvent(thisNode, eventsFor.move, handleDrag);
      removeEvent(thisNode, eventsFor.stop, handleDragStop);
    }
  };

  const handleDrag: MouseEventHandler<HTMLElement> = (e) => {
    console.log(e);
  };

  const onMouseDown: MouseEventHandler<HTMLElement> = (e) => {
    console.log('onMouseDown');
    handleDragStart(e);
  };

  const onMouseUp: MouseEventHandler<HTMLElement> = (e) => {
    console.log('onMouseUp');
    handleDragStop(e);
  };

  return (
    <div className={classNames('toolbar')} ref={toolBarEl}>
      <Button icon={<MenuOutlined/>} size='small' type='primary' value='Menu' onClick={handleClick}/>
      <Button icon={<DragOutlined/>} size='small' type='primary' value='Drag' onClick={handleClick}
              onMouseDown={onMouseDown} onMouseUp={onMouseUp}/>
    </div>
  );
};

export default ToolBar;
