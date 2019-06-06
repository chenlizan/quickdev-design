import * as _ from 'lodash';
import * as React from 'react';
import {Collapse, Button} from 'antd';
import * as uuid from 'uuid/v4';
import {componentList, componentRelation} from '../../../assets/json/ComponentConig';
import {ClickEventHandler, PropData} from './PropsType';

const Panel = Collapse.Panel;

interface ComponentProps {
    currentProps: PropData
    onClick?: ClickEventHandler
}

export default class Component extends React.PureComponent <ComponentProps, any> {

    getButtonDisabled(element: PropData): boolean {
        const {currentProps} = this.props;
        const predicate = {} as any;
        predicate[element.namespace] = element.type;
        if (currentProps && currentProps.namespace && currentProps.type && _.find(componentRelation[currentProps.namespace][currentProps.type], predicate) !== undefined) {
            return false;
        } else {
            return true;
        }
    }

    generateChild(componentList: Array<any>, namespace: string): Array<JSX.Element> {
        const element = [];
        for (let i = 0, len = componentList.length; i < len; i++) {
            element.push(
                <Button
                    data-type={componentList[i].type}
                    data-namespace={namespace}
                    key={uuid()}
                    onClick={this.handleClick}
                    style={{marginBottom: 5, marginRight: 5}}
                    disabled={this.getButtonDisabled({namespace, type: componentList[i].type} as PropData)}
                >
                    {componentList[i].name}
                </Button>
            )
        }
        return element;
    }

    generatePanel(): Array<JSX.Element> {
        const element = [];
        for (let i = 0, len = componentList.length; i < len; i++) {
            element.push(
                <Panel header={componentList[i].name} key={i.toString()}>
                    {this.generateChild(componentList[i].components, componentList[i].namespace)}
                </Panel>
            )
        }
        return element;
    }

    handleClick = (e: any): void => {
        const {onClick} = this.props;
        if (onClick) {
            onClick(e, e.currentTarget.dataset);
        }
    };

    render(): React.ReactNode {
        return (
            <Collapse>
                {this.generatePanel()}
            </Collapse>
        );
    }

}
