import {bindActionCreators, Dispatch} from 'redux';
import {connect} from 'react-redux';
import DesignRight from '../../views/Design/DesignRight';
// import {toolbar_open_file} from '../../action/index';

const mapStateToProps = (state: object) => {
    return {
        uiMeta: (state as any).Design.uiMeta
    }
};

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        // handleOpenFile: bindActionCreators(toolbar_open_file, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DesignRight);