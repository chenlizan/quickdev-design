import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import Design from '../../views/design';
// import {login_requested_creator} from '../action/index';

function mapStateToProps(state) {
    return {
        // account: state.Login.account,
        // result: state.Login.result
    }
}

function mapDispatchToProps(dispatch) {
    return {
        // handleLoginRequested: bindActionCreators(login_requested_creator, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Design);