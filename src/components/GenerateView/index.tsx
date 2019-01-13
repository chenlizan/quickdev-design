import * as React from 'react';
import * as uuid from 'uuid/v4';
import * as _ from 'lodash';
import {GenerateViewPropsType} from './PropsType';

export interface GenerateViewProps extends GenerateViewPropsType {
    uiProps?: object
}

export default class GenerateView extends React.PureComponent<GenerateViewProps, any> {

    constructor(props: Readonly<GenerateViewProps>) {
        super(props);
    }

    public findUI(id: string): React.ReactNode {
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

    private generateReactElement(element: any): JSX.Element {
        const {uiProps = {}} = this.props;
        const {namespace, type, id, props} = element;
        if (namespace === 'antd-mobile') {
            _.assign(props, {key: uuid()}, {ref: (node: any) => (this as any)[id] = node}, (uiProps as any)[id]);
            return React.createElement(require('antd-mobile')[type], props, props.children);
        } else if (namespace === 'html') {
            _.assign(props, {key: uuid()}, {ref: (node: any) => (this as any)[id] = node});
            return React.createElement(type, props, props.children);
        } else {
            return element;
        }
    }

    private generateComponent(uiMeta: Array<any>): Array<JSX.Element> {
        const element = [];
        for (let i = 0, len = uiMeta.length; i < len; i++) {
            if (uiMeta[i].props.children && Array.isArray(uiMeta[i].props.children)) {
                uiMeta[i].props.children = this.generateComponent(uiMeta[i].props.children);
            }
            element.push(this.generateReactElement(uiMeta[i]));
        }
        return element;
    }

    render(): React.ReactNode {
        const {uiMeta} = this.props;
        if (Object.keys(uiMeta).length === 0) return null;
        return this.generateComponent([_.cloneDeep(uiMeta)]);
    }
}
