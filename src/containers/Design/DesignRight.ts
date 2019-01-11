import {bindActionCreators, Dispatch} from 'redux';
import {connect} from 'react-redux';
import DesignRight from '../../views/Design/DesignRight';
import {choose_component} from '../../action/index';

const mapStateToProps = (state: object) => {
    return {
    }
};

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        handleChooseComponent: bindActionCreators(choose_component, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DesignRight);