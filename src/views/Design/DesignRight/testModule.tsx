import * as React from 'react';
import {Input} from 'antd';

export default  class testModule extends React.PureComponent<any, any>{

    render(): React.ReactNode {
        return (
            <Input placeholder="Username1"/>
        );
    }
}