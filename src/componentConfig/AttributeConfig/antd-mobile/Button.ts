export = [
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
        "toFields": (value: any) => {
            return value;
        },
        "onFieldsChange": (fields: any) => {
            return fields;
        }
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
        "dependencies": {
            "id": "dependencies1",
            "label": "dependencies1",
            "description": "dependencies",
            "type": "Input",
            "props": {}
        },
        "type": "Switch",
        "props": {
            "initialValue": false,
            "valuePropName": "checked"
        }
    }
]
