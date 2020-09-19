import _ from 'lodash';
import classNames from 'classnames';
import React, { MouseEventHandler, useRef, useState } from 'react';
import Catcher from './Catcher';
import Portal, { getDocument } from './Portal';
import { getRectWidth, getRectHeight } from './utils';


interface OverlayProps {
  className?: string;
  children?: React.ReactNode;
}

const Overlay: React.FC<OverlayProps> = ({ className, children }) => {
  const overlayEl = useRef(null);

  const [currentHoverRect, setCurrentHoverRect] = useState({} as DOMRectReadOnly);
  const [currentSelectRect, setCurrentSelectRect] = useState({} as DOMRectReadOnly);
  const [currentSelectDom, setCurrentSelectDom] = useState({} as HTMLElement);

  const getContainer = () => {
    const popupContainer = document.createElement('div');
    popupContainer.style.position = 'absolute';
    popupContainer.style.top = '0';
    popupContainer.style.left = '0';
    const mountNode = getDocument().body;
    mountNode.appendChild(popupContainer);
    return popupContainer;
  };

  const overlayClick: MouseEventHandler = (e) => {
    const dom = e.target as HTMLElement;
    if (dom.getAttribute('data-nid')) {
      setCurrentSelectDom(dom);
      setCurrentSelectRect(dom.getBoundingClientRect().toJSON() || {});
    } else {
      setCurrentSelectDom({} as HTMLElement);
      setCurrentSelectRect({} as DOMRectReadOnly);
    }
  };

  const overlayMove: MouseEventHandler = (e) => {
    const dom = e.target as HTMLElement;
    if (dom.getAttribute('data-nid')) {
      const currentRectData = dom.getBoundingClientRect().toJSON() || {};
      if (!_.eq(currentRectData, currentHoverRect)) {
        setCurrentHoverRect(currentRectData);
      }
    } else {
      setCurrentHoverRect({} as DOMRectReadOnly);
    }
  };

  return (
    <>
      <div className={classNames('overlay', className)} ref={overlayEl}
           onClick={overlayClick} onMouseMove={overlayMove}
      >
        {children}
      </div>
      {!_.eq(currentHoverRect, currentSelectRect) &&
      <Portal getContainer={getContainer}>
        <Catcher domRect={currentHoverRect} type='hover'/>
      </Portal>}
      {!_.isEmpty(currentSelectRect) &&
      <Portal getContainer={getContainer}>
        <Catcher dom={currentSelectDom} domRect={currentSelectRect} type='select'/>
      </Portal>}
    </>
  );
};

export default Overlay;
