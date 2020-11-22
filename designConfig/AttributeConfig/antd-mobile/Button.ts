export default [
    {
        "id": "uiKey",
        "label": "uiKey",
        "description": "元素的ref属性",
        "type": "Input",
        "props": {}
    },
    {
        "id": "children",
        "label": "text",
        "description": "显示的文字",
        "type": "Input",
        "props": {}
    },
    {
        "id": "type",
        "label": "type",
        "description": "按钮类型",
        "type": "Select",
        "props": {
            "initialValue": "-",
            "options": [
                {
                    "label": "-",
                    "value": "-"
                },
                {
                    "label": "primary",
                    "value": "primary"
                },
                {
                    "label": "ghost",
                    "value": "ghost"
                },
                {
                    "label": "warning",
                    "value": "warning"
                }
            ]
        },

    },
    {
        "id": "size",
        "label": "size",
        "description": "按钮大小",
        "type": "Select",
        "props": {
            "initialValue": "large",
            "options": [
                {
                    "label": "large",
                    "value": "large"
                },
                {
                    "label": "small",
                    "value": "small"
                }
            ]
        }
    },
    {
        "id": "disabled",
        "label": "disabled",
        "description": "设置禁用",
        "type": "Switch",
        "props": {
            "initialValue": false,
            "valuePropName": "checked"
        },
        "toFields": (value: any) => {
            return value;
        },
        "onFieldsChange": (fields: any) => {
            return fields;
        }
    },
    {
        "id": "inline",
        "label": "inline",
        "description": "是否设置为行内按钮",
        "type": "Switch",
        "props": {
            "initialValue": false,
            "valuePropName": "checked"
        },
    },
    {
        "id": "loading",
        "label": "loading",
        "description": "设置按钮载入状态",
        "type": "Switch",
        "props": {
            "initialValue": false,
            "valuePropName": "checked"
        },
    },
    {
        "id": "color",
        "label": "关联属性（颜色）",
        "description": "association",
        "type": "Color",
        "props": {},
        "association": {
            "id": "loading",
            "condition": true
        }
    }
]
