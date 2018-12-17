/**
 * Created by chenlizan on 2017/6/18.
 */

import React from 'react';
import PropTypes from 'prop-types';
import {List, InputItem} from 'antd-mobile';
import {createForm} from 'rc-form';
import HelloTs from '../components/HelloTs';
import GenerateView from '../generateView/index';
import testData from  '../generateView/testData';

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

        const _test1 = test();

        return (
            <div>
                <HelloTs compiler="TypeScript" framework="React"/>
                {_test1}
                <GenerateView uiMeta={testData}/>
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
