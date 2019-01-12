import * as React from 'react';
import * as uuid from 'uuid/v4';
import {Tabs, Tree} from 'antd';

const TabPane = Tabs.TabPane;
const {TreeNode} = Tree;


export default class Index extends React.PureComponent<any, any> {

    displayName: "DesignLeft" | undefined;

    generateTreeNode = (uiMeta: Array<any>): Array<JSX.Element> => {
        const element = [];
        for (let i = 0, len = uiMeta.length; i < len; i++) {
            element.push(
                <TreeNode title={uiMeta[i].key === 'app-root' ? '' : uiMeta[i].type} key={uiMeta[i].key}>
                    {(uiMeta[i].children && Array.isArray(uiMeta[i].children)) ? this.generateTreeNode(uiMeta[i].children) : null}
                </TreeNode>
            )
        }
        return element;
    };

    onDrop = (info: any) => {
        const {uiMeta} = this.props;
        const dropKey = info.node.props.eventKey;
        const dragKey = info.dragNode.props.eventKey;
        const dropPos = info.node.props.pos.split('-');
        const dropPosition = info.dropPosition - Number(dropPos[dropPos.length - 1]);

        // const loop = (data, key, callback) => {
        //     data.forEach((item, index, arr) => {
        //         if (item.key === key) {
        //             return callback(item, index, arr);
        //         }
        //         if (item.children && Array.isArray(item.children)) {
        //             return loop(item.children, key, callback);
        //         }
        //     });
        // };
        //
        // let dragObj;
        // loop([uiMeta], dragKey, (item, index, arr) => {
        //     arr.splice(index, 1);
        //     dragObj = item;
        // });

        // console.log(dragObj);
    };

    onSelect = (selectedKeys: any, info: any) => {
        this.props.handleChooseNode(selectedKeys[0]);
    };

    render(): React.ReactNode {
        const {uiMeta} = this.props;
        const treeNode = this.generateTreeNode([uiMeta]);
        return (
            <Tabs {...this.props} defaultActiveKey="1" tabPosition="bottom">
                <TabPane tab="视图" key="1">
                    <Tree defaultExpandAll draggable showLine onDrop={this.onDrop} onSelect={this.onSelect}>
                        {treeNode}
                    </Tree>
                </TabPane>
                <TabPane tab="Tab" key="2">Content of Tab Pane 2</TabPane>
            </Tabs>
        )
    }
}