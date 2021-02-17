import * as React from "react";

export const alphaBg =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/" +
  "9hAAAAMUlEQVQ4T2NkYGAQYcAP3uCTZhw1gGGYhAGBZIA/nYDCgBDAm9BGDWAAJyRCgLaBCAAgXwixzAS0p" +
  "gAAAABJRU5ErkJggg==";

export const colorExp = /^rgba?\(((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+(?:\.\d+)?))?)\)$|(#[\d\w]+|\w+\((?:\d+%?(?:,\s)*){3}(?:\d*\.?\d+)?\))|^hsla?\(((\d+),\s*([\d.]+)%,\s*([\d.]+)%(?:,\s*(\d+(?:\.\d+)?))?)\)$/gi; // eslint-disable-line max-len

export const colorLookup: { [key: string]: string } = {
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

export function getParentNode(node: any, className: string[] | string, toBool: boolean = false): HTMLElement {
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

function toCssLowerCase(d: string) {
  return d.replace(/[A-Z]/, ($1) => `-${$1.toLocaleLowerCase()}`);
}

function defaultToCss(d: { [key: string]: any }, current: { [key: string]: string }) {
  return Object.keys(d)
    .map((key) => {
      const data = d[key];
      if ((!data && data !== 0) || current[key] === data) {
        return null;
      }
      return `${toCssLowerCase(key)}: ${data};`;
    })
    .filter((item) => item)
    .join("\n");
}

function defaultToStyleList(d: { [key: string]: any }, current: { [key: string]: string }) {
  Object.keys(current).forEach((key) => {
    d[key] = current[key];
  });
}

export function toCss(newData: { [key: string]: any }, currentData: { [key: string]: any }) {
  let css = "";
  Object.keys(newData).forEach((key) => {
    let addCss;
    switch (key) {
      case "layout":
        addCss = defaultToCss(newData[key], currentData[key]);
        break;
      default:
        break;
    }
    if (addCss && addCss !== ";") {
      css = css && addCss ? `${css}${addCss}` : addCss;
    }
  });
  return css;
}

export function toStyleList(newData: { [key: string]: any }, currentData: { [key: string]: any }) {
  Object.keys(currentData).forEach((key) => {
    switch (key) {
      case "layout":
        defaultToStyleList(newData[key], currentData[key]);
        break;
      default:
        break;
    }
  });
}

export function getDefaultData(style: any) {
  if (!style) {
    return null;
  }
  const borderBool =
    (style.borderStyle !== "none" && style.borderColor !== "0px") ||
    (style.borderTopStyle !== "none" && style.borderTopColor !== "0px") ||
    (style.borderRightStyle !== "none" && style.borderRightColor !== "0px") ||
    (style.borderBottomStyle !== "none" && style.borderBottomColor !== "0px") ||
    (style.borderLeftStyle !== "none" && style.borderLeftColor !== "0px");
  return {
    layout: {
      display: style.display,
      // 只支持 row 布局
      alignItems: style.alignItems || "stretch",
      justifyContent: style.justifyContent || "flex-start",
    },
  };
}
