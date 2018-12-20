import * as React from 'react';
import * as uuid from 'uuid/v4';
import * as _ from 'lodash';
import {GenerateViewPropsType} from './PropsType';
import 'antd-mobile/dist/antd-mobile.less';

interface GenerateViewProps extends GenerateViewPropsType {
    uiProps?: object
}

export default class GenerateView extends React.PureComponent<GenerateViewProps, any> {

    constructor(props: Readonly<GenerateViewProps>) {
        super(props);
    }

    public findUI(id: string): any {
        return (this as any)[id];
    }

    public updateUI(id: string, props: any): void {
        const {uiMeta} = this.props;
        (function recursive(uiMeta: Array<any>) {
            for (let i = 0, len = uiMeta.length; i < len; i++) {
                if (uiMeta[i].id === id) {
                    _.assign(uiMeta[i].props, props);
                } else if (uiMeta[i].children && Array.isArray(uiMeta[i].children)) {
                    recursive(uiMeta[i].children);
                }
            }
        })([uiMeta]);
        this.setState({_date: Date.now()});
    }

    private generateReactElement(element: any): any {
        const {uiProps} = this.props;
        const {namespace, type, id, props, children} = element;
        if (namespace === 'antd-mobile') {
            _.assign(props, {key: uuid()}, {ref: (node: any) => (this as any)[id] = node}, (uiProps as any)[id]);
            return React.createElement(require('antd-mobile')[type], props, children);
        } else if (namespace === 'html') {
            _.assign(props, {key: uuid()}, {ref: (node: any) => (this as any)[id] = node});
            return React.createElement(type, props, children);
        } else {
            return element;
        }
    }

    private generateComponent(uiMeta: any): any {
        const rows = [];
        for (let i = 0, len = uiMeta.length; i < len; i++) {
            if (uiMeta[i].children && Array.isArray(uiMeta[i].children)) {
                uiMeta[i].children = this.generateComponent(uiMeta[i].children);
            }
            rows.push(this.generateReactElement(uiMeta[i]));
        }
        return rows;
    }

    render(): React.ReactNode {
        const {uiMeta} = this.props;
        return this.generateComponent([_.cloneDeep(uiMeta)]);
    }
}
