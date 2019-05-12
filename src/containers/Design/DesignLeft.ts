import {bindActionCreators, Dispatch} from 'redux';
import {connect} from 'react-redux';
import DesignLeft from '../../views/Design/DesignLeft';
import {current_choose_node, current_drop_node, current_delete_node, drop_before_data} from '../../action';

const mapStateToProps = (state: object) => {
    return {
        dropNode: (state as any).Design.dropNode,
        uiMeta: (state as any).Design.uiMeta
    }
};

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        handleChooseNode: bindActionCreators(current_choose_node, dispatch),
        handleDropNode: bindActionCreators(current_drop_node, dispatch),
        handleDeleteNode: bindActionCreators(current_delete_node, dispatch),
        handleDropBeforeData: bindActionCreators(drop_before_data, dispatch)
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(DesignLeft);