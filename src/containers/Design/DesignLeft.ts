import {bindActionCreators, Dispatch} from 'redux';
import {connect} from 'react-redux';
import DesignLeft from '../../views/Design/DesignLeft';
// import {toolbar_open_file} from '../../action/index';

const mapStateToProps = (state: object) => {
    return {}
};

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        // handleOpenFile: bindActionCreators(toolbar_open_file, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DesignLeft);