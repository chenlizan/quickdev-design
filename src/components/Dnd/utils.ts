const cache = {} as any;
const start = '(?:^|\\s)';
const end = '(?:\\s|$)';

function lookupClass(className: string) {
  let cached = cache[className];
  if (cached) {
    cached.lastIndex = 0;
  } else {
    cache[className] = cached = new RegExp(start + className + end, 'g');
  }
  return cached;
}

export function addClass(el: HTMLElement, className: string) {
  const current = el.className;
  if (!current.length) {
    el.className = className;
  } else if (!lookupClass(className).test(current)) {
    el.className += ' ' + className;
  }
}

export function rmClass(el: HTMLElement, className: string) {
  el.className = el.className.replace(lookupClass(className), ' ').trim();
}

export function addEvent(el: any, event: string, handler: Function): void {
  if (!el) return;
  if (el.attachEvent) {
    el.attachEvent('on' + event, handler);
  } else if (el.addEventListener) {
    el.addEventListener(event, handler, true);
  } else {
    el['on' + event] = handler;
  }
}

export function removeEvent(el: any, event: string, handler: Function): void {
  if (!el) return;
  if (el.detachEvent) {
    el.detachEvent('on' + event, handler);
  } else if (el.removeEventListener) {
    el.removeEventListener(event, handler, true);
  } else {
    el['on' + event] = null;
  }
}

export function getRectWidth(rect: DOMRect) {
  return rect.width || (rect.right - rect.left);
}

export function getRectHeight(rect: DOMRect) {
  return rect.height || (rect.bottom - rect.top);
}

export function getRectLeft(rect: DOMRect) {
  return rect.left;
}
