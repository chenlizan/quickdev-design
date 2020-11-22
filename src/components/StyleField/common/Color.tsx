import * as React from 'react';
import classNames from "classnames";
import Row from 'antd/lib/row';
import Col from 'antd/lib/col';
import Input from 'antd/lib/input';
import Popover from 'antd/lib/popover';
import {SketchPicker} from "react-color";
import {CloseCircleOutlined} from '@ant-design/icons';


export interface ColorProps {
    className: string,
    color: string,
    title: any,
    type: string,
    span: [3, 9, 12],
    onChange: (value: string) => void,
}

const Color: React.FC<ColorProps> = (props) => {

    const [color, setColor] = React.useState(props.color);
    const [showPicker, setShowPicker] = React.useState(false);
    const {onChange, title, type, span, ...otherProps} = props;

    const classNameWrapper = classNames({
        'editor-color-wrapper': true,
        [props.className]: true,
    });

    const className = classNames({
        'editor-color': true,
        active: showPicker,
    });


    const handleInputBlur = () => {

    }


    const handleInputChange:React.ChangeEventHandler<HTMLInputElement> = (event) => {
        const {target} = event;
        setColor(target.value);
    };

    const handleRemoveColor = () => {
        if (props.color !== 'initial') {
            props.onChange('initial');
        }
    };

    const handleVisibleChange = (showPicker: boolean) => {
        setShowPicker(showPicker)
    };


    const children = (
        <Popover
            title={false}
            // content={this.getColorPicker()}
            trigger="click"
            visible={showPicker}
            onVisibleChange={handleVisibleChange}
            overlayClassName="editor-list-popover"
        >
            <a
                className={className}
                // style={{ background: `#fff url(${alphaBg})` }}
            >
                <i
                    style={{background: color}}
                    className={`${!color || color === 'initial' ? 'no-color' : ''}`}
                >
                    {(!color || color === 'initial') && (
                        <svg width="100%" height="100%" viewBox="0 0 60 20" id="no-color" preserveAspectRatio="none">
                            <g id="Page-1">
                                <path d="M0.5,19.5 L59.5,0.5" id="Line" stroke="#FF0000"/>
                            </g>
                        </svg>)}
                </i>
            </a>
        </Popover>
    );

    if (props.type === 'cut') {
        return (
            <div className={classNameWrapper}>
                {children}
                <span className="color-close" onClick={handleRemoveColor}>
                <CloseCircleOutlined/>
                </span>
            </div>
        );
    }

    return (
        <Row className={classNameWrapper}>
            <Col span={span[0]}>
                {props.title}
            </Col>
            <Col span={span[1]} style={{position: 'relative'}}>
                {children}
            </Col>
            <Col span={span[2]}>
                <Input
                    value={color}
                    onBlur={handleInputBlur}
                    onPressEnter={handleInputBlur}
                    onChange={handleInputChange}
                    size="small"
                    placeholder="Add color"
                />
            </Col>
        </Row>
    )
};

Color.displayName = 'Color';

export default Color;