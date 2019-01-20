import {Dispatch} from 'redux';
import {connect} from 'react-redux';
import DesignPreview from '../../views/Design/DesignPreview';

const mapStateToProps = (state: object) => {
    return {
        uiCode: (state as any).Design.uiCode,
        uiMeta: (state as any).Design.uiMeta
    }
};

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(DesignPreview);