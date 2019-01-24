import * as React from 'react';
import {Layout} from 'antd';
import DesignContent from '../../containers/Design/DesignContent';
import DesignToolBar from '../../containers/Design/DesignToolBar';
import DesignLeft from '../../containers/Design/DesignLeft';
import DesignRight from '../../containers/Design/DesignRight';
import DivideLine, {DraggableData} from '../../components/DividerLine';
import * as styles from '../../stylesheets/Design.less';

const {Header, Footer, Sider, Content,} = Layout;

export default class Design extends React.PureComponent<any, any> {

    constructor(props: Readonly<any>) {
        super(props);
        localStorage.removeItem('reduxPersist:Design');
        this.state = {
            leftWidth: 250,
            rightWidth: 250,
        };
    }

    handleDragLeft = (e: MouseEvent, data: DraggableData) => {
        this.setState({
            leftWidth: data.x
        });
    };

    handleDragRight = (e: MouseEvent, data: DraggableData) => {
        this.setState({
            rightWidth: data.x
        });
    };

    render(): React.ReactNode {
        const {leftWidth, rightWidth} = this.state;
        return (
            <div className={styles.design}>
                <Header className={styles.design_header}>
                    <DesignToolBar/>
                </Header>
                <Layout>
                    <Sider width={leftWidth}>
                        <DesignLeft className={styles.design_left}/>
                    </Sider>
                    <DivideLine orientation="left" className={styles.design_divider} onDrag={this.handleDragLeft}></DivideLine>
                    <Content>
                        <DesignContent/>
                    </Content>
                    <DivideLine orientation="right" className={styles.design_divider} onDrag={this.handleDragRight}></DivideLine>
                    <Sider width={rightWidth}>
                        <DesignRight className={styles.design_right}/>
                    </Sider>
                </Layout>
                <Footer className={styles.design_footer}></Footer>
            </div>
        );
    }

}