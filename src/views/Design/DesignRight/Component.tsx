import * as _ from 'lodash';
import * as React from 'react';
import {Collapse, Button} from 'antd';
import * as uuid from 'uuid/v4';
import {componentList, componentRelation} from '../../../assets/json/ComponentConig';

const Panel = Collapse.Panel;

interface PropData {
    key: string,
    namespace: string,
    type: string
}

type ClickData = { namespace: string, type: string }

export type ClickEventHandler = (e: MouseEvent, data: ClickData) => void;

interface ComponentProps {
    currentProps: PropData
    onClick?: ClickEventHandler
}

export default class Component extends React.PureComponent <ComponentProps, any> {

    handleClick = (e: any): void => {
        const {onClick} = this.props;
        if (onClick) {
            onClick(e, e.currentTarget.dataset);
        }
    };

    getButtonDisabled(element: PropData): boolean {
        const {namespace, type} = this.props.currentProps;
        const predicate = {} as any;
        predicate[element.namespace] = element.type;
        if (namespace && type && _.find(componentRelation[namespace][type], predicate) === undefined) {
            return true;
        } else {
            return false;
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

    render(): React.ReactNode {
        return (
            <Collapse>
                {this.generatePanel()}
            </Collapse>
        );
    }

}