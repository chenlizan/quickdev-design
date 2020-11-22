import * as React from 'react';

export function getParentNode(node: any, className: string, toBool: boolean = false): HTMLElement {
    const parent = node.parentNode;
    const classNameArray = (parent.className || '').split(' ').some((name: string) => {
        if (Array.isArray(className)) {
            return className.indexOf(name) >= 0;
        }
        return name === className;
    });
    if (classNameArray || parent.tagName.toLocaleLowerCase() === 'body') {
        const isBody = parent.tagName.toLocaleLowerCase() === 'body';
        return toBool ? !isBody : parent;
    }
    return getParentNode(parent, className, toBool);
}

export function toArrayChildren(children: React.ReactNode) {
    const ret: any[] = [];
    React.Children.forEach(children, (c) => {
        ret.push(c);
    });
    return ret;
}