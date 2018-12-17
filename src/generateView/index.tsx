import * as React from 'react';
import {GenerateViewPropsType} from './PropsType';

export interface GenerateViewProps extends GenerateViewPropsType {
    test: 'test'
}

export default class GenerateView extends React.Component<GenerateViewProps, any> {

    // generateReactElement(element: any) {
    //     const {namespace, type, props} = element;
    //     return React.createElement(require(namespace)[type] || type, props)
    // }

    render(): React.ReactNode {
        return <div>dddddd</div>;
    }
}

