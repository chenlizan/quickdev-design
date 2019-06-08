import {bindActionCreators, Dispatch} from 'redux';
import {connect} from 'react-redux';
import DesignToolBar from '../../views/Design/DesignToolBar';
import {current_view, open_file, reset_state} from '../../action';

const mapStateToProps = (state: object) => {
    return {}
};

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        handleCurrentView: bindActionCreators(current_view, dispatch),
        handleOpenFile: bindActionCreators(open_file, dispatch),
        handleResetState: bindActionCreators(reset_state, dispatch)
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(DesignToolBar);
