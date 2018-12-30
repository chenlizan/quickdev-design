import * as React from 'react';
import {Layout} from 'antd';
import DesignContent from '../../containers/Design/DesignContent';
import DesignToolBar from '../../containers/Design/DesignToolBar';
import DesignLeft from '../../containers/Design/DesignLeft';
import DivideLine, {DraggableData} from '../../components/DivideLine';
import * as styles from '../../stylesheets/Design.less';

const {Header, Footer, Sider, Content,} = Layout;

export default class Design extends React.PureComponent<any, any> {

    constructor(props: Readonly<any>) {
        super(props);
        this.state = {
            leftWidth: 250,
            rightWidth: 250,
        }
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
                    <DivideLine id="left" className={styles.design_divider} onMove={this.handleDragLeft}></DivideLine>
                    <Content>
                        <DesignContent/>
                    </Content>
                    <DivideLine id="right" className={styles.design_divider} onMove={this.handleDragRight}></DivideLine>
                    <Sider width={rightWidth}>Sider</Sider>
                </Layout>
                <Footer className={styles.design_footer}>Footer</Footer>
            </div>
        );
    }

}