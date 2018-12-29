import {bindActionCreators, Dispatch} from 'redux';
import {connect} from 'react-redux';
import DesignContent from '../../views/Design/DesignContent';

const mapStateToProps = (state: object) => {
    return {
        uiMeta: (state as any).Design.uiMeta
    }
};

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(DesignContent);