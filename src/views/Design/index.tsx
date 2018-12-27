import * as React from 'react';
import * as PropTypes from 'prop-types';
import {Layout} from 'antd';
import Draggable from 'react-draggable';
import DesignContent from './DesignContent';

const {Header, Footer, Sider, Content,} = Layout;
import * as test from '../../testData';
import * as styles from '../../stylesheets/Design.less';
import {GenerateViewProps} from "../../components/GenerateView/index";

export default class Design extends React.PureComponent<any, any> {

    constructor(props: Readonly<any>) {
        super(props);
        this.state = {
            leftOffset: 0,
            rightOffset: 0
        }
    }

    handleMouseDown = () => {
        console.log('handleMouseDown');
    };

    handleMouseMove = (e:any,data:any) => {
        console.log('handleMouseMove',e.clientX)
    };

    render(): React.ReactNode {
        const {leftOffset, rightOffset} = this.state;
        return (
            <div className={styles.design}>
                <Header className={styles.design_header}>Header</Header>
                <Layout onMouseMove={this.handleMouseMove}>
                    <Sider width={200 + leftOffset}>Sider</Sider>
                    <div className={styles.design_divider} onMouseDown={this.handleMouseDown}></div>
                    <Content>
                        <DesignContent uiMeta={test}/>
                    </Content>
                    <div className={styles.design_divider}></div>
                    <Sider width={200 + rightOffset}>Sider</Sider>
                </Layout>
                <Footer className={styles.design_footer}>Footer</Footer>
            </div>
        );
    }

}