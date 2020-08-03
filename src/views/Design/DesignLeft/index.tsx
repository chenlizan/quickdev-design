import * as _ from "lodash";
import * as uuid from 'uuid/v4';
import * as React from 'react';
import {Tabs, Tree} from 'antd';
import {ContextMenu, MenuItem, ContextMenuTrigger} from "react-contextmenu";
import {componentRelation} from "../../../componentConfig";
import * as styles from "../../../stylesheets/Design.less";

const TabPane = Tabs.TabPane;
const {TreeNode} = Tree;

interface PropData {
    key: string,
    namespace: string,
    type: string
}

export default class Index extends React.PureComponent<any, any> {

    displayName: "DesignLeft" | undefined;

    private getTreeNodeDisabled = (element: PropData): boolean => {
        const {dropNode} = this.props;
        if (dropNode && dropNode.namespace && dropNode.type) {
            const predicate = {} as any;
            predicate[dropNode.namespace] = dropNode.type;
            if (componentRelation[element.namespace] && componentRelation[element.namespace][element.type] && _.find(componentRelation[element.namespace][element.type], predicate) === undefined) {
                return true;
            } else {
                return false;
            }
        } else {
            return false;
        }
    };

    private generateTreeNode = (uiMeta: Array<any>): React.ReactElement[] => {
        const element = [];
        for (let i = 0, len = uiMeta.length; i < len; i++) {
            if (uiMeta[i].type) {
                element.push(
                    <TreeNode key={uiMeta[i].key} disabled={this.getTreeNodeDisabled(uiMeta[i])}
                              title={uiMeta[i].key === 'app-root' ? '' :
                                  <ContextMenuTrigger id="contextmenu" holdToDisplay={-1} collect={() => uiMeta[i]}>
                                      {uiMeta[i].type}
                                  </ContextMenuTrigger>}
                    >
                        {(uiMeta[i].props && uiMeta[i].props.children) ? this.generateTreeNode(uiMeta[i].props.children) : null as any}
                    </TreeNode>
                )
            }
        }
        return element;
    };

    handleDeleteClick = (e: React.MouseEvent<HTMLDivElement>, data: object) => {
        this.props.handleDeleteNode((data as any).key);
    };

    handleSelect = (selectedKeys: any, info: any) => {
        this.props.handleChooseNode(selectedKeys[0]);
    };

    handleDragStart = (info: any) => {
        const {handleDropNode} = this.props;
        handleDropNode(info.node.props.eventKey);
    };

    handleDragEnd = (info: any) => {
        const {handleDropNode} = this.props;
        handleDropNode(undefined);
    };

    handleDrop = (info: any) => {
        const {handleDropBeforeData} = this.props;
        if (!info.node.props.disabled) {
            handleDropBeforeData(info);
        }
    };

    render(): React.ReactNode {
        const {uiMeta} = this.props;
        const treeNode = this.generateTreeNode([uiMeta]);
        return ([
            <Tabs key={uuid()} className={styles.design_left} defaultActiveKey="1" tabPosition="bottom">
                <TabPane tab="视图大纲" key="1">
                    <Tree blockNode defaultExpandAll draggable showLine
                          onDragStart={this.handleDragStart}
                          onDragEnd={this.handleDragEnd}
                          onDrop={this.handleDrop}
                          onSelect={this.handleSelect}>
                        {treeNode}
                    </Tree>
                </TabPane>
            </Tabs>,
            <ContextMenu key={uuid()} id="contextmenu">
                <MenuItem onClick={this.handleDeleteClick}>
                    删除
                </MenuItem>
                <MenuItem divider/>
                <MenuItem disabled>
                    查看
                </MenuItem>
            </ContextMenu>
        ])
    }
}
