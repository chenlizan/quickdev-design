import * as React from 'react';
import {Select} from 'antd';

const Option = Select.Option;

export default class Label extends React.PureComponent<any, any> {

    render(): React.ReactNode {
        return (
            <Select defaultValue="" {...this.props}>
                <Option value=""></Option>
                <Option value="primary">primary</Option>
                <Option value="ghost">ghost</Option>
                <Option value="warning">warning</Option>
            </Select>
        );
    }
}