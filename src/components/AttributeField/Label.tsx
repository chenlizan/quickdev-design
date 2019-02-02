import * as React from 'react';
import {Input} from 'antd';

export default class Label extends React.PureComponent<any, any> {

    handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const data = [];
        data.push(e.target.value);
        this.props.onChange({target: {value: data}});
    };

    render(): React.ReactNode {
        return (
            <Input {...this.props} placeholder="标签" onChange={this.handleOnChange}/>
        );
    }
}