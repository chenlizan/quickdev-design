import * as React from 'react';
import Input from 'antd/lib/input';
import {toArrayChildren} from '../utils';

const Group = Input.Group;

export interface InputGroupProps {
    className: string,
    children: React.ReactNode,
    onChange: (value: any, isDrag?: boolean) => void,
}

const InputGroup: React.FC<InputGroupProps> = props => {

    const {onChange, ...otherProps} = props;

    const getValues = (props: any) => {
        const values: any = {};
        toArrayChildren(props.children).forEach(item => {
            const key = item.key;
            values[key] = item.props.defaultValue || item.props.value || item.props.color;
        });
        return values;
    };

    const [values, setValues] = React.useState(getValues(props));

    const handleChange = (key: string, e: any, isDrag: boolean) => {
        const value = e && e.target ? e.target.value : e;
        if (key === 'center') {
            onChange(value);
            Object.keys(values).forEach(cKey => {
                values[cKey] = value;
            });
        } else {
            values[key] = value;
            values.center = null;
            onChange(values, isDrag);
        }
        setValues(values);
    };

    const children = toArrayChildren(otherProps.children).map(item => {
        if (!item) {
            return null;
        }
        const onChange = (e: any, isDrag: boolean) => {
            handleChange(item.key, e, isDrag);
        };
        return React.cloneElement(item, {...item.props, onChange});
    });

    return React.createElement(Group, otherProps, children);
};

InputGroup.displayName = 'InputGroup';

export default InputGroup;