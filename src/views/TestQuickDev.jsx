import GenerateView from '../generateView/index';
import testData from '../generateView/testData';
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
