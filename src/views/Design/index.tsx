import * as React from 'react';
import * as PropTypes from 'prop-types';
import {Layout} from 'antd';
import DesignContent from './DesignContent';

const {Header, Footer, Sider, Content,} = Layout;

import * as test from '../../testData';

import * as styles from '../../stylesheets/Design.less';

export default class Design extends React.PureComponent<any, any> {

    render(): React.ReactNode {
        return (
            <div className={styles.design}>
                <Header style={{backgroundColor: 'wheat'}}>Header</Header>
                <Layout>
                    <Sider>Sider</Sider>
                    <Content>
                        <DesignContent uiMeta={test}/>
                    </Content>
                    <Sider>Sider</Sider>
                </Layout>
                <Footer>Footer</Footer>
            </div>
        );
    }

}