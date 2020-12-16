import _ from "lodash";
import classNames from "classnames";
import React, { useState } from "react";
import ToolBar from "./ToolBar";
import { addClass, getRectHeight, getRectWidth, getRectLeft } from "./utils";
import Portal, { getDocument } from "./Portal";

interface CatcherProps {
  dom?: HTMLElement;
  domRect?: DOMRectReadOnly;
  type?: "hover" | "select" | "";
}

const Catcher: React.FC<CatcherProps> = ({ dom = document.createElement("div"), domRect, type }) => {
  const [drag, setDrag] = useState(false);

  const styles = _.omit(domRect as DOMRectReadOnly, ["bottom", "right", "x", "y"]);

  const getMirror = () => {
    let mirror;
    console.log(styles);
    const rect = dom.getBoundingClientRect();
    mirror = dom.cloneNode(true) as HTMLElement;
    addClass(mirror, "mirror");
    mirror.style.position = "absolute";
    mirror.style.width = `${rect.width}px`;
    mirror.style.height = `${rect.height}px`;
    mirror.style.top = `${rect.top}px`;
    mirror.style.left = `${rect.left}px`;
    const mountNode = getDocument().body;
    mountNode.appendChild(mirror);
    return mirror;
  };

  const handleClick = (key: string): void => {
    if (key === "Drag") {
      console.log(key);
    }
  };

  if (type === "select") {
    return (
      <div className={classNames("catcher", "select")} style={styles} onMouseEnter={() => setDrag(true)} onMouseOut={() => setDrag(false)}>
        <ToolBar onClick={handleClick} />
        {/*<div dangerouslySetInnerHTML={{ __html: getMirror().toString() }}/>*/}
        {/*{drag ? <Portal getContainer={getMirror}/> : null}*/}
      </div>
    );
  } else {
    return <div className={classNames("catcher", "hover")} style={styles} />;
  }
};

export default Catcher;
