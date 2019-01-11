import {Dispatch} from 'redux';
import {connect} from 'react-redux';
import Attribute from '../../views/Design/DesignRight/Attribute';

const mapStateToProps = (state: object) => {
    return {
        currentProps: (state as any).Design.currentProps
    }
};

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {}
};

export default connect(mapStateToProps, mapDispatchToProps)(Attribute);