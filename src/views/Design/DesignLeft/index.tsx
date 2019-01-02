import * as React from 'react';
import * as uuid from 'uuid/v4';
import {Tabs, Tree} from 'antd';
import {AntTreeNode} from "antd/lib/tree";

const TabPane = Tabs.TabPane;
const {TreeNode} = Tree;

interface AntTreeNodeDropEvent {
    node: AntTreeNode;
    dragNode: AntTreeNode;
    dragNodesKeys: string[];
    dropPosition: number;
    dropToGap?: boolean;
    event: React.MouseEventHandler<any>;
}

export default class Index extends React.PureComponent<any, any> {

    displayName: "DesignLeft" | undefined;

    generateTreeNode = (uiMeta: Array<any>): Array<JSX.Element> => {
        const element = [];
        for (let i = 0, len = uiMeta.length; i < len; i++) {
            element.push(
                <TreeNode title={uiMeta[i].type} key={uuid()}>
                    {(uiMeta[i].children && Array.isArray(uiMeta[i].children)) ? this.generateTreeNode(uiMeta[i].children) : null}
                </TreeNode>
            )
        }
        return element;
    };

    onDrop = (info: AntTreeNodeDropEvent) => {
        const {uiMeta} = this.props;
        const dropKey = info.node.props.eventKey;
        const dragKey = info.dragNode.props.eventKey;
        const dropPos = info.node.props.pos.split('-');
        const dropPosition = info.dropPosition - Number(dropPos[dropPos.length - 1]);

        const loop = (data, key, callback) => {
            data.forEach((item, index, arr) => {
                if (item.key === key) {
                    return callback(item, index, arr);
                }
                if (item.children && Array.isArray(item.children)) {
                    return loop(item.children, key, callback);
                }
            });
        };

        let dragObj;
        loop([uiMeta], dragKey, (item, index, arr) => {
            arr.splice(index, 1);
            dragObj = item;
        });

        console.log(dragObj);
    };

    render(): React.ReactNode {
        const {uiMeta} = this.props;
        return (
            <Tabs {...this.props} type="card" defaultActiveKey="1" tabPosition="left">
                <TabPane tab="视图" key="1">
                    <Tree defaultExpandAll draggable showLine onDrop={this.onDrop}>
                        {this.generateTreeNode([uiMeta])}
                    </Tree>
                </TabPane>
                <TabPane tab="Tab" key="2">Content of Tab Pane 2</TabPane>
            </Tabs>
        )
    }
}