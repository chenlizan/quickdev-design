import * as React from 'react';
import {Layout} from 'antd';
import {Resizable, ResizeCallbackData} from 'react-resizable';
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
        this.state = {
            leftWidth: 250,
            rightWidth: 250,
        };
    }

    handleDragLeft = (e: React.SyntheticEvent, data: ResizeCallbackData) => {
        this.setState({
            leftWidth: data.size.width
        });
    };

    handleDragRight = (e: React.SyntheticEvent, data: ResizeCallbackData) => {
        this.setState({
            rightWidth: data.size.width
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
                    <Resizable axis="x" width={leftWidth} height={0} resizeHandles={['ne']} onResize={this.handleDragLeft}>
                        <Sider width={leftWidth}>
                            <DesignLeft/>
                        </Sider>
                    </Resizable>
                    {/*<DivideLine orientation="left" onDrag={this.handleDragLeft}></DivideLine>*/}
                    <Content>
                        <DesignContent/>
                    </Content>
                    {/*<DivideLine orientation="right" onDrag={this.handleDragRight}></DivideLine>*/}
                    <Resizable axis="x" width={rightWidth} height={0} resizeHandles={['nw']} onResize={this.handleDragRight}>
                        <Sider width={rightWidth}>
                            <DesignRight/>
                        </Sider>
                    </Resizable>
                </Layout>
                <Footer className={styles.design_footer}></Footer>
            </div>
        );
    }

}
