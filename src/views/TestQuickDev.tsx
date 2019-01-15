import * as _ from 'lodash';
import GenerateView from '../components/GenerateView';
import * as styles from './TestQuickDev.less';

const testData = require('../testData/jsonData');

export default class TestQuickDev extends GenerateView {
    // @ts-ignore
    constructor(props) {
        super(props);
    }

    static defaultProps = {
        uiMeta: testData,
        uiProps: {}
    };

    uiPropsHandler = {
        "Button1": {
            className: styles.button,
            onClick: () => {
                console.log('onClick');
                this.updateUI('Button1', {children: 'findUI'});
                this.findUI('Button1');
            }
        }
    };

    componentWillMount() {
        _.assign(this.props.uiProps, this.uiPropsHandler);
    }
}
