import * as React from "react";
import AntAutoComplete, { AutoCompleteProps as AntAutoCompleteProps } from "antd/lib/auto-complete";
import Input from "antd/lib/input";
import { getParentNode } from "../utils";
import { SizeType } from "antd/lib/config-provider/SizeContext";

export interface AutoCompleteProps extends AntAutoCompleteProps {
  dataSource?: string[];
  placeholder: string;
  size?: SizeType;
  value: string;
  onChange?: (value: string) => void;
  onSearch?: (value: string) => void;
}

const AutoComplete: React.FC<AutoCompleteProps> = (props) => {
  const [options, setOptions] = React.useState([]);
  const [value, setValue] = React.useState(props.value);
  const { dataSource, onChange, size, ...otherProps } = props;

  const handleSearch: (value: string) => void = (value) => {
    if (props.onSearch) {
      props.onSearch(value);
    }
    setOptions(value && !value.match(/[a-z|%]/gi) && dataSource ? dataSource.map((key) => ({ value: `${value}${key}` })) : ([] as any));
  };

  const handleChange: (value: string) => void = (value) => {
    setValue(value);
  };

  const handleChangeEnd = (e: any) => {
    const { target } = e;
    const v = target ? target.value : e;
    if (v !== props.value) {
      setValue(v);
      // if (onChange) {
      onChange?.(v);
      // }
    }
  };

  return (
    <AntAutoComplete
      {...otherProps}
      value={value || undefined}
      options={options}
      onSearch={handleSearch}
      onChange={handleChange}
      onBlur={handleChangeEnd}
      onSelect={handleChangeEnd}
      placeholder={props.placeholder || "--"}
      dropdownMatchSelectWidth={false}
      dropdownClassName="editor-list-dropdown"
      getPopupContainer={(node) => getParentNode(node, ["editor-list"])}
    >
      <Input
        size={size}
        onPressEnter={(e) => {
          handleChangeEnd((e.target as any).value);
        }}
      />
    </AntAutoComplete>
  );
};

AutoComplete.displayName = "AutoComplete";

AutoComplete.defaultProps = {
  dataSource: ["px", "%", "rem", "em", "vw", "vh"],
  size: "small",
};

export default AutoComplete;
