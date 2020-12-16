import * as React from "react";
import classNames from "classnames";
import Row from "antd/lib/row";
import Col from "antd/lib/col";
import Input from "antd/lib/input";
import Popover from "antd/lib/popover";
import { SketchPicker } from "react-color";
import { CloseCircleOutlined } from "@ant-design/icons";
import { alphaBg, getParentNode, isColor } from "../utils";

export interface ColorProps {
  className: string;
  color: string;
  title?: any;
  type: string;
  span?: number[];
  onChange?: (value: string, isDrag?: boolean) => void;
  gutter?: number;
}

const Color: React.FC<ColorProps> = (props) => {
  const [color, setColor] = React.useState(props.color);
  const [showPicker, setShowPicker] = React.useState(false);
  const [isColorDown, setIsColorDown] = React.useState(false);

  React.useEffect(() => {
    const { color } = props;
    setColor(color);
  }, [props.color]);

  const { onChange, title, type, span, ...otherProps } = props;

  const classNameWrapper = classNames({
    "editor-color-wrapper": true,
    [props.className]: true,
  });

  const className = classNames({
    "editor-color": true,
    active: showPicker,
  });

  const handleInputBlur: React.ReactEventHandler<HTMLInputElement> = (event) => {
    const { target } = event;
    if (props.color !== (target as any).value) {
      props.onChange?.((target as any).value);
    }
  };

  const handleInputChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    const { target } = event;
    setColor(target.value);
  };

  const handleMouseDown: React.MouseEventHandler<HTMLDivElement> = (e) => {
    // 渐变条没有样式，取上级样式，有个预览小块，用 style 判断；
    const isWhite = getParentNode(e.target, ["saturation-white", "flexbox-fix", ""], true);
    if (isWhite) {
      setIsColorDown(true);
    }
  };

  const handleMouseUp = (e: any) => {
    if (isColorDown) {
      const domStyle = e.target.style;
      // react-color 里的预览小块，无法判断，用 style 判断;
      const noPreviewDom = !(
        domStyle.background &&
        domStyle.right === "0px" &&
        domStyle.top === "0px" &&
        domStyle.left === "0px" &&
        domStyle.bottom === "0px" &&
        domStyle.borderRadius === "2px" &&
        domStyle.position === "absolute" &&
        domStyle.boxShadow
      );
      setIsColorDown(false);
      if (noPreviewDom) {
        props.onChange?.(color);
      }
    }
  };

  const handleColorChange = (value: any) => {
    const rgb = value.rgb;
    const color = rgb.a === 1 ? value.hex : `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${rgb.a})`;
    setColor(color);
    if (!isColorDown) {
      props.onChange?.(color);
    } else {
      props.onChange?.(color, true);
    }
  };

  const handleRemoveColor = () => {
    if (props.color !== "initial") {
      props.onChange?.("initial");
    }
  };

  const handleVisibleChange = (showPicker: boolean) => {
    setShowPicker(showPicker);
  };

  const getColorPicker = () => {
    return (
      <div key="picker" onMouseDown={handleMouseDown} onMouseUp={handleMouseUp}>
        <SketchPicker
          color={color && isColor(color) ? color : "rgba(0,0,0,1)"}
          presetColors={[
            "#f04134",
            "#00a854",
            "#108ee9",
            "#f5317f",
            "#f56a00",
            "#7265e6",
            "#ffbf00",
            "#00a2ae",
            "#222222",
            "#404040",
            "#919191",
            "#bfbfbf",
            "#d9d9d9",
            "#e9e9e9",
            "#fbfbfb",
            "transparent",
          ]}
          onChange={handleColorChange}
        />
      </div>
    );
  };

  const children = (
    <Popover
      title={false}
      content={getColorPicker()}
      trigger="click"
      visible={showPicker}
      onVisibleChange={handleVisibleChange}
      overlayClassName="editor-list-popover"
    >
      <a className={className} style={{ background: `#fff url(${alphaBg})` }}>
        <i style={{ background: color }} className={`${!color || color === "initial" ? "no-color" : ""}`}>
          {(!color || color === "initial") && (
            <svg width="100%" height="100%" viewBox="0 0 60 20" id="no-color" preserveAspectRatio="none">
              <g id="Page-1">
                <path d="M0.5,19.5 L59.5,0.5" id="Line" stroke="#FF0000" />
              </g>
            </svg>
          )}
        </i>
      </a>
    </Popover>
  );

  if (props.type === "cut") {
    return (
      <div className={classNameWrapper}>
        {children}
        <span className="color-close" onClick={handleRemoveColor}>
          <CloseCircleOutlined />
        </span>
      </div>
    );
  }

  return (
    <Row className={classNameWrapper}>
      <Col span={span?.[0]}>{props.title}</Col>
      <Col span={span?.[1]} style={{ position: "relative" }}>
        {children}
      </Col>
      <Col span={span?.[2]}>
        <Input value={color} onBlur={handleInputBlur} onPressEnter={handleInputBlur} onChange={handleInputChange} size="small" placeholder="Add color" />
      </Col>
    </Row>
  );
};

Color.displayName = "Color";

Color.defaultProps = {
  span: [3, 9, 12],
};

export default Color;
