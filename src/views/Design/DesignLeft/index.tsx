import * as React from 'react';
import {Tabs, Tree} from 'antd';

const TabPane = Tabs.TabPane;
const {TreeNode} = Tree;

export default class Index extends React.PureComponent<any, any> {

    displayName: "DesignLeft" | undefined;

    render(): React.ReactNode {
        return (
            <Tabs {...this.props} defaultActiveKey="1" tabPosition="left">
                <TabPane tab="Tab 1" key="1"><Tree
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
                <TabPane tab="Tab 2" key="2">Content of Tab Pane 2</TabPane>
            </Tabs>
        )
    }
}