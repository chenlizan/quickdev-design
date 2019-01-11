import {bindActionCreators, Dispatch} from 'redux';
import {connect} from 'react-redux';
import DesignToolBar from '../../views/Design/DesignToolBar';
import {toolbar_open_file} from '../../action/index';

const mapStateToProps = (state: object) => {
    return {}
};

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        handleOpenFile: bindActionCreators(toolbar_open_file, dispatch)
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(DesignToolBar);