import * as React from 'react';
import * as PropTypes from 'prop-types';
import {Layout} from 'antd';
import DesignContent from './DesignContent';
import Dropzone from './Dropzone';

const {Header, Footer, Sider, Content,} = Layout;
import DivideLine, {DraggableData} from '../../components/DivideLine';
import * as styles from '../../stylesheets/Design.less';

const test = require("../../testData/jsonData.json");


export default class Design extends React.PureComponent<any, any> {

    constructor(props: Readonly<any>) {
        super(props);
        this.state = {
            leftOffset: 250,
            rightOffset: 250,
            data:{}
        }
    }

    handleDragLeft = (e: MouseEvent, data: DraggableData) => {
        this.setState({
            leftOffset: data.x
        });
    };
    handleDragRight = (e: MouseEvent, data: DraggableData) => {
        this.setState({
            rightOffset: data.x
        });
    };

    render(): React.ReactNode {
        const {data, leftOffset, rightOffset} = this.state;
        return (
            <div className={styles.design}>
                <Header className={styles.design_header}>
                    <Dropzone onChange={(e:any)=>this.setState({data:e})}/>
                </Header>
                <Layout>
                    <Sider width={leftOffset}>Sider</Sider>
                    <DivideLine id="left" className={styles.design_divider} onDrag={this.handleDragLeft}></DivideLine>
                    <Content>
                        <DesignContent uiMeta={data}/>
                    </Content>
                    <DivideLine id="right" className={styles.design_divider} onDrag={this.handleDragRight}></DivideLine>
                    <Sider width={rightOffset}>Sider</Sider>
                </Layout>
                <Footer className={styles.design_footer}>Footer</Footer>
            </div>
        );
    }

}