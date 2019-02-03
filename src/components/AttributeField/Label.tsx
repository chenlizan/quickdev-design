import * as React from 'react';
import {Input} from 'antd';

export default class Label extends React.PureComponent<any, any> {

    handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const data: string[] = [];
        if (e.target.value === '') {
            this.props.onChange({target: {value: data}});
        } else {
            data.push(e.target.value);
            this.props.onChange({target: {value: data}});
        }
    };

    render(): React.ReactNode {
        return (
            <Input
                {...this.props}
                onChange={this.handleOnChange}
                placeholder="标签名称"
                style={{border: 'none'}}
            />
        );
    }
}