/**
 * Created by chenlizan on 2017/6/18.
 */

import React from 'react';
import * as PropTypes from 'prop-types';
import {createForm} from 'rc-form';
import HelloTs from '../components/HelloTs';
import GenerateView from '../generateView/index';
import testData from '../generateView/testData';

class LoginForm extends React.Component {
    constructor(props) {
        super(props)
    }

    getChildContext() {
    }

    componentDidMount() {
        this.testGv.findUI('span1');
        this.testGv.updateUI('InputItem1', {value: "111editable"})
    }

    uiPropsHandler = {
        "Button1": {
            onClick: (e) => {
                console.log(e);
            }
        }
    };

    render() {
        const {getFieldProps} = this.props.form;
        return (
            <div>
                <HelloTs compiler="TypeScript" framework="React"/>
                <GenerateView ref={node => this.testGv = node} uiMeta={testData} uiProps={this.uiPropsHandler}/>
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
