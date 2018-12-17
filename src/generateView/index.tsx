import * as React from 'react';
import {GenerateViewPropsType} from './PropsType';
import * as _ from 'lodash'

export interface GenerateViewProps extends GenerateViewPropsType {
    test: 'test'
}

export default class GenerateView extends React.Component<GenerateViewProps, any> {
    private _views: any;

    constructor(props: Readonly<GenerateViewProps>) {
        super(props);
        this._views = [];
    }

    generateReactElement(element: any) {
        const {namespace, type, props, children} = element;
        if (namespace === 'antd-mobile') {
            return React.createElement(require('antd-mobile')[type] || type, props, children);
        } else {
            return element;
        }
    }

    generateComponent(uiMeta: any) {
        const item = [];
        for (let i = 0, len = uiMeta.length; i < len; i++) {
            if (uiMeta[i].children) {
                uiMeta[i].children = this.generateComponent(uiMeta[i].children);
                return this.generateReactElement(uiMeta[i]);
            }
            item.push(this.generateReactElement(uiMeta[i]));
        }
        return item;
    }

    render(): React.ReactNode {
        const {uiMeta} = this.props;
        return this.generateComponent([uiMeta]);
    }
}

