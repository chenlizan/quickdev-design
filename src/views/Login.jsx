/**
 * Created by chenlizan on 2017/6/18.
 */

import React from 'react';
import PropTypes from 'prop-types';
import {List, InputItem} from 'antd-mobile';
import {createForm} from 'rc-form';
import HelloTs from '../components/HelloTs';

const dataObj = {
    id: '1',
    type: 'List',
    key: 'a',
    props: {'chenlizan': 1},
    children:
        [
            {
                id: '1-1',
                type: 'InputItem'
            },
            {
                id: '1-2',
                type: 'InputItem',
            }
        ]
}

function generateReactElement(object) {
    const {type, props, children} = object
    return React.createElement(require('antd-mobile')[type] || type, props)
}

class LoginForm extends React.Component {
    constructor(props) {
        super(props)
    }

    getChildContext() {
    }

    render() {
        const {getFieldProps} = this.props.form;

        const test = () => {
            return (
                <List renderHeader={() => 'Not editable / Disabled'}>
                    <InputItem
                        value="not editable"
                        editable={false}
                    >姓名</InputItem>
                    <InputItem
                        value="style of disabled `InputItem`"
                        disabled
                    >姓名</InputItem>
                </List>
            )
        };

        const _test = test();

        const _test1 = generateReactElement(dataObj);

        return (
            <div>
                <HelloTs compiler="TypeScript" framework="React"/>
                {_test}
            </div>
        );
    }
}

LoginForm.propTypes = {
    account: PropTypes.object,
    result: PropTypes.string
};

LoginForm.contextTypes = {};

LoginForm.childContextTypes = {};

const WrappedLoginForm = createForm()(LoginForm);

export default WrappedLoginForm;
