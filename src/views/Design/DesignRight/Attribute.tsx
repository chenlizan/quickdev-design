import * as React from 'react';
import {Input} from 'antd';

interface AttributeProps {
    uiMeta: object
}

export default class Attribute extends React.PureComponent<AttributeProps, any> {

    render(): React.ReactNode {
        return (
            <Input placeholder="Basic usage"/>
        );
    }
}

