export function addEvent(el: any, event: string, handler: Function): void {
  if (!el) return;
  if (el.attachEvent) {
    el.attachEvent("on" + event, handler);
  } else if (el.addEventListener) {
    el.addEventListener(event, handler, true);
  } else {
    el["on" + event] = handler;
  }
}

export function removeEvent(el: any, event: string, handler: Function): void {
  if (!el) return;
  if (el.detachEvent) {
    el.detachEvent("on" + event, handler);
  } else if (el.removeEventListener) {
    el.removeEventListener(event, handler, true);
  } else {
    el["on" + event] = null;
  }
}
