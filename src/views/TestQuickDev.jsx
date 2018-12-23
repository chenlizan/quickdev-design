import GenerateView from '../components/GenerateView';
import testData from '../testData';
import _ from 'lodash';



export default class TestQuickDev extends GenerateView {

    static defaultProps = {
        uiMeta: testData,
        uiProps: {}
    };

    componentWillMount() {
        _.assign(this.props.uiProps, this.uiPropsHandler);
    }

    uiPropsHandler = {
        "Button1": {
            onClick: (e) => {
                console.log(e);
            }
        }
    };

}
