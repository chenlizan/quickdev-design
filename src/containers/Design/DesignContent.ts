import {bindActionCreators, Dispatch} from 'redux';
import {connect} from 'react-redux';
import DesignContent from '../../views/Design/DesignContent';
import {ui_source_code} from '../../action';

const mapStateToProps = (state: object) => {
    return {
        uiCode: (state as any).Design.uiCode,
        uiMeta: (state as any).Design.uiMeta,
        boostMode: (state as any).Design.boostMode,
        currentProps: (state as any).Design.currentProps,
        currentView: (state as any).Design.currentView
    }
};

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        handleCodeChange: bindActionCreators(ui_source_code, dispatch)
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(DesignContent);
