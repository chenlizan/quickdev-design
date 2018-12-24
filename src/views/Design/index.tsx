import * as React from 'react';
import * as PropTypes from 'prop-types';
import {Layout} from 'antd';
import DesignContent from './DesignContent';
const {Header, Footer, Sider, Content,} = Layout;

import * as test from '../../testData';

export default class Design extends React.PureComponent<any, any> {

    render(): React.ReactNode {
        return (
            <div>
                <Header>Header</Header>
                <Layout>
                    {/*<Sider>Sider</Sider>*/}
                    {/*<Content>*/}
                        {/*<DesignContent uiMeta={test}/>*/}
                    {/*</Content>*/}
                    {/*<Sider>Sider</Sider>*/}
                </Layout>
                <Footer>Footer</Footer>
            </div>
        );
    }

}