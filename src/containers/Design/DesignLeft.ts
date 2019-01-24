import {bindActionCreators, Dispatch} from 'redux';
import {connect} from 'react-redux';
import DesignLeft from '../../views/Design/DesignLeft';
import {current_choose_node, drop_after_data} from '../../action/index';

const mapStateToProps = (state: object) => {
    return {
        uiMeta: (state as any).Design.uiMeta
    }
};

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        handleChooseNode: bindActionCreators(current_choose_node, dispatch),
        handleDropNode: bindActionCreators(drop_after_data, dispatch)
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(DesignLeft);