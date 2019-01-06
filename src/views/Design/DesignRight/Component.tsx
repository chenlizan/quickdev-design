import * as React from 'react';
import {Collapse, Button} from 'antd';
import * as uuid from 'uuid/v4';

const configMeta = require('../../../assets/json/ComponentConfig.json').group;
const Panel = Collapse.Panel;

type ClickData = { namespace: string, type: string }

export type ClickEventHandler = (e: MouseEvent, data: ClickData) => void;

interface ComponentProps {
    onClick?: ClickEventHandler
}

export default class Component extends React.PureComponent <ComponentProps, any> {

    handleClick = (e: any): void => {
        const {onClick} = this.props;
        if (onClick) {
            onClick(e, e.currentTarget.dataset);
        }
    };

    generateChild(configMeta: Array<any>, namespace: string): Array<JSX.Element> {
        const element = [];
        for (let i = 0, len = configMeta.length; i < len; i++) {
            element.push(
                <Button
                    data-type={configMeta[i].type}
                    data-namespace={namespace}
                    key={uuid()}
                    onClick={this.handleClick}
                    style={{marginBottom: 5, marginRight: 5}}
                >
                    {configMeta[i].name}
                </Button>
            )
        }
        return element;
    }

    generatePanel(): Array<JSX.Element> {
        const element = [];
        for (let i = 0, len = configMeta.length; i < len; i++) {
            element.push(
                <Panel header={configMeta[i].name} key={uuid()}>
                    {this.generateChild(configMeta[i].components, configMeta[i].namespace)}
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