import {bindActionCreators, Dispatch} from 'redux';
import {connect} from 'react-redux';
import DesignToolBar from '../../views/Design/DesignToolBar';
import {open_file, reset_state} from '../../action/index';

const mapStateToProps = (state: object) => {
    return {}
};

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        handleOpenFile: bindActionCreators(open_file, dispatch),
        handleResetState: bindActionCreators(reset_state, dispatch)
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(DesignToolBar);