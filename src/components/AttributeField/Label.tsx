import * as React from 'react';
import {Input} from 'antd';

export default class Label extends React.PureComponent<any, any> {
    render(): React.ReactNode {
        return (
            <Input {...this.props} placeholder="标签"/>
        );
    }
}