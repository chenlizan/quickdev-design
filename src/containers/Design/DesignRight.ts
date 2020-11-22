import {bindActionCreators, Dispatch} from 'redux';
import {connect} from 'react-redux';
import DesignRight from '../../views/Design/DesignRight';
import {attribute_change, choose_component} from '../../action';

const mapStateToProps = (state: object) => {
    return {
        currentProps: (state as any).Design.currentProps
    }
};

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        handleAttributeChange: bindActionCreators(attribute_change, dispatch),
        handleChooseComponent: bindActionCreators(choose_component, dispatch)
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(DesignRight);