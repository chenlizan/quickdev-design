export default [
  {
    id: "uiKey",
    label: "uiKey",
    description: "元素的ref属性",
    type: "Input",
    props: {},
  },
  {
    id: "direction",
    label: "direction",
    description: "项目定位方向",
    type: "Select",
    props: {
      initialValue: "row",
      options: [
        {
          label: "row",
          value: "row",
        },
        {
          label: "row-reverse",
          value: "row-reverse",
        },
        {
          label: "column",
          value: "column",
        },
        {
          label: "column-reverse",
          value: "column-reverse",
        },
      ],
    },
  },
  {
    id: "wrap",
    label: "wrap",
    description: "子元素的换行方式",
    type: "Select",
    props: {
      initialValue: "nowrap",
      options: [
        {
          label: "nowrap",
          value: "nowrap",
        },
        {
          label: "wrap",
          value: "wrap",
        },
        {
          label: "wrap-reverse",
          value: "wrap-reverse",
        },
      ],
    },
  },
  {
    id: "justify",
    label: "justify",
    description: "子元素在主轴上的对齐方式",
    type: "Select",
    props: {
      initialValue: "start",
      options: [
        {
          label: "start",
          value: "start",
        },
        {
          label: "end",
          value: "end",
        },
        {
          label: "center",
          value: "center",
        },
        {
          label: "between",
          value: "between",
        },
        {
          label: "around",
          value: "around",
        },
      ],
    },
  },
  {
    id: "align",
    label: "align",
    description: "子元素在交叉轴上的对齐方式",
    type: "Select",
    props: {
      initialValue: "center",
      options: [
        {
          label: "start",
          value: "start",
        },
        {
          label: "center",
          value: "center",
        },
        {
          label: "end",
          value: "end",
        },
        {
          label: "baseline",
          value: "baseline",
        },
        {
          label: "stretch",
          value: "stretch",
        },
      ],
    },
  },
  {
    id: "alignContent",
    label: "alignContent",
    description: "有多根轴线时的对齐方式",
    type: "Select",
    props: {
      initialValue: "stretch",
      options: [
        {
          label: "start",
          value: "start",
        },
        {
          label: "end",
          value: "end",
        },
        {
          label: "center",
          value: "center",
        },
        {
          label: "between",
          value: "between",
        },
        {
          label: "around",
          value: "around",
        },
        {
          label: "stretch",
          value: "stretch",
        },
      ],
    },
  },
  {
    description: "Flex.Item 组件",
    type: "Button",
    props: {
      type: "Flex.Item",
      namespace: "antd-mobile",
      text: "添加Flex.Item",
    },
  },
];
