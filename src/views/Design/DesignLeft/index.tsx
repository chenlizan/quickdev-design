import * as React from 'react';
import {Tabs, Tree} from 'antd';
import * as styles from "../../../stylesheets/Design.less";

const TabPane = Tabs.TabPane;
const {TreeNode} = Tree;

type cb = (item: object, index: number, arr: Array<any>) => void;

export default class Index extends React.PureComponent<any, any> {

    displayName: "DesignLeft" | undefined;

    private generateTreeNode = (uiMeta: Array<any>): Array<JSX.Element> => {
        const element = [];
        for (let i = 0, len = uiMeta.length; i < len; i++) {
            if (uiMeta[i].type) {
                element.push(
                    <TreeNode title={uiMeta[i].key === 'app-root' ? '' : uiMeta[i].type} key={uiMeta[i].key}>
                        {(uiMeta[i].props && uiMeta[i].props.children) ? this.generateTreeNode(uiMeta[i].props.children) : null}
                    </TreeNode>
                )
            }
        }
        return element;
    };

    onDrop = (info: any) => {
        const {uiMeta, handleDropNode} = this.props;
        const dropKey = info.node.props.eventKey;
        const dragKey = info.dragNode.props.eventKey;
        const dropPos = info.node.props.pos.split('-');
        const dropPosition = info.dropPosition - Number(dropPos[dropPos.length - 1]);

        const loop = (data: Array<any>, key: string, callback: cb) => {
            data.forEach((item, index, arr) => {
                if (item.key === key) {
                    return callback(item, index, arr);
                }
                if (item.props && item.props.children) {
                    return loop(item.props.children, key, callback);
                }
            });
        };
        const data = [uiMeta];

        // Find dragObject
        let dragObj: object = {};
        loop(data, dragKey, (item, index, arr) => {
            arr.splice(index, 1);
            dragObj = item;
        });

        if (!info.dropToGap) {
            // Drop on the content
            loop(data, dropKey, (item: any) => {
                item.props.children = item.props.children || [];
                // where to insert 示例添加到尾部，可以是随意位置
                item.props.children.push(dragObj);
            });
        } else if (
            (info.node.props.children || []).length > 0 // Has children
            && info.node.props.expanded // Is expanded
            && dropPosition === 1 // On the bottom gap
        ) {
            loop(data, dropKey, (item: any) => {
                item.props.children = item.props.children || [];
                // where to insert 示例添加到尾部，可以是随意位置
                item.props.children.unshift(dragObj);
            });
        } else {
            let ar: Array<any> = [];
            let i: number = 0;
            loop(data, dropKey, (item, index, arr) => {
                ar = arr;
                i = index;
            });
            if (dropPosition === -1) {
                ar.splice(i, 0, dragObj);
            } else {
                ar.splice(i + 1, 0, dragObj);
            }
        }
        handleDropNode(data[0]);
    };

    onDragOver = (info: any) => {

    };

    onSelect = (selectedKeys: any, info: any) => {
        this.props.handleChooseNode(selectedKeys[0]);
    };

    render(): React.ReactNode {
        const {uiMeta} = this.props;
        const treeNode = this.generateTreeNode([uiMeta]);
        return (
            <Tabs className={styles.design_left} defaultActiveKey="1" tabPosition="bottom">
                <TabPane tab="视图" key="1">
                    <Tree defaultExpandAll draggable showLine onDrop={this.onDrop} onDragOver={this.onDragOver}
                          onSelect={this.onSelect}>
                        {treeNode}
                    </Tree>
                </TabPane>
            </Tabs>
        )
    }
}