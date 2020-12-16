export default [
  {
    id: "uiKey",
    label: "uiKey",
    description: "元素的ref属性",
    type: "Input",
    props: {},
  },
  {
    id: "size",
    label: "size",
    description: "两翼留白的间距",
    type: "Select",
    props: {
      initialValue: "md",
      options: [
        {
          label: "xs",
          value: "xs",
        },
        {
          label: "sm",
          value: "sm",
        },
        {
          label: "md",
          value: "md",
        },
        {
          label: "lg",
          value: "lg",
        },
        {
          label: "xl",
          value: "xl",
        },
      ],
    },
  },
];
