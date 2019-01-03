import {bindActionCreators, Dispatch} from 'redux';
import {connect} from 'react-redux';
import DesignRight from '../../views/Design/DesignRight';
import {right_choose_component} from '../../action/index';

const mapStateToProps = (state: object) => {
    return {
        uiMeta: (state as any).Design.uiMeta
    }
};

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        handleChooseComponent: bindActionCreators(right_choose_component, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DesignRight);