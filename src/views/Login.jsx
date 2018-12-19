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
        const {uiMeta} = this.testGv.props;
        uiMeta.children[0].children = 'XX';
        this.testGv.setState({_date: Date.now()});
    }

    render() {
        const {getFieldProps} = this.props.form;
        return (
            <div>
                <HelloTs compiler="TypeScript" framework="React"/>
                <GenerateView ref={node => this.testGv = node} uiMeta={testData}/>
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
