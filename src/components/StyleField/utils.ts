import * as React from "react";

export const alphaBg =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/" +
  "9hAAAAMUlEQVQ4T2NkYGAQYcAP3uCTZhw1gGGYhAGBZIA/nYDCgBDAm9BGDWAAJyRCgLaBCAAgXwixzAS0p" +
  "gAAAABJRU5ErkJggg==";

export const colorExp = /^rgba?\(((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+(?:\.\d+)?))?)\)$|(#[\d\w]+|\w+\((?:\d+%?(?:,\s)*){3}(?:\d*\.?\d+)?\))|^hsla?\(((\d+),\s*([\d.]+)%,\s*([\d.]+)%(?:,\s*(\d+(?:\.\d+)?))?)\)$/gi; // eslint-disable-line max-len

export const colorLookup = {
  aqua: "rgb(0, 255, 255)",
  lime: "rgb(0, 255, 0)",
  silver: "rgb(192, 192, 192)",
  black: "rgb(0, 0, 0)",
  maroon: "rgb(128, 0, 0)",
  teal: "rgb(0, 128, 128)",
  blue: "rgb(0, 0, 255)",
  navy: "rgb(0, 0, 128)",
  white: "rgb(255, 255, 255)",
  fuchsia: "rgb(255, 0, 255)",
  olive: "rgb(128, 128, 0)",
  yellow: "rgb(255, 255, 0)",
  orange: "rgb(255, 165, 0)",
  gray: "rgb(128, 128, 128)",
  purple: "rgb(128, 0, 128)",
  green: "rgb(0, 128, 0)",
  red: "rgb(255, 0, 0)",
  pink: "rgb(255, 192, 203)",
  cyan: "rgb(0, 255, 255)",
  transparent: "rgba(255, 255, 255, 0)",
};

export function getParentNode(node: any, className: string[], toBool: boolean = false): HTMLElement {
  const parent = node.parentNode;
  const classNameArray = (parent.className || "").split(" ").some((name: string) => {
    if (Array.isArray(className)) {
      return className.indexOf(name) >= 0;
    }
    return name === className;
  });
  if (classNameArray || parent.tagName.toLocaleLowerCase() === "body") {
    const isBody = parent.tagName.toLocaleLowerCase() === "body";
    return toBool ? !isBody : parent;
  }
  return getParentNode(parent, className, toBool);
}

export function isColor(v: string) {
  return v.match(colorExp) || colorLookup[v];
}

export function toArrayChildren(children: React.ReactNode) {
  const ret: any[] = [];
  React.Children.forEach(children, (c) => {
    ret.push(c);
  });
  return ret;
}
