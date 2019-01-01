import * as React from 'react';
import {Tabs, Tree} from 'antd';

const TabPane = Tabs.TabPane;
const {TreeNode} = Tree;

const uiMeta =  [require('../../../testData/jsonData')];


export default class Index extends React.PureComponent<any, any> {

    displayName: "DesignLeft" | undefined;


    generateTree: any = () => {
        for (let i = 0, len = uiMeta.length; i < len; i++) {
            if (uiMeta[i].children && Array.isArray(uiMeta[i].children)) {

            }
            rows.push(this.generateReactElement(uiMeta[i]));
        }
    }

    render(): React.ReactNode {
        return (
            <Tabs {...this.props} type="card" defaultActiveKey="1"
                  tabPosition="left">
                <TabPane tab="视图" key="1"><Tree
                    showLine
                    defaultExpandedKeys={['0-0-0']}
                >
                    <TreeNode title="parent 1" key="0-0">
                        <TreeNode title="parent 1-0" key="0-0-0">
                            <TreeNode title="leaf" key="0-0-0-0"/>
                            <TreeNode title="leaf" key="0-0-0-1"/>
                            <TreeNode title="leaf" key="0-0-0-2"/>
                        </TreeNode>
                        <TreeNode title="parent 1-1" key="0-0-1">
                            <TreeNode title="leaf" key="0-0-1-0"/>
                        </TreeNode>
                        <TreeNode title="parent 1-2" key="0-0-2">
                            <TreeNode title="leaf" key="0-0-2-0"/>
                            <TreeNode title="leaf" key="0-0-2-1"/>
                        </TreeNode>
                    </TreeNode>
                </Tree>
                </TabPane>
                <TabPane tab="Tab" key="2">Content of Tab Pane 2</TabPane>
            </Tabs>
        )
    }
}