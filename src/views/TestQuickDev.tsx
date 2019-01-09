import * as _ from 'lodash';
import GenerateView from '../components/GenerateView';

const testData = require('../testData/jsonData');

export default class TestQuickDev extends GenerateView {

    constructor(props:any) {
        super(props);
    }

    static defaultProps = {
        uiMeta: testData,
        uiProps: {}
    };

    componentWillMount() {
        _.assign(this.props.uiProps, this.uiPropsHandler);
    }

    uiPropsHandler = {
        "Button1": {
            onClick: (e:any) => {
                console.log(e);
            }
        }
    };

}
