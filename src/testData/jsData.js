(function uiMeta() {
    return {
        namespace: 'antd-mobile', //元素命名空间
        type: 'List', //元素类型
        id: 'list1', //元素标识
        props: {'chenlizan': 1}, //元素属性
        children: //元素的元素
            [
                {
                    namespace: 'antd-mobile',
                    type: 'InputItem',
                    id: 'InputItem1',
                    children: '测试',
                    props: {value: "not editable", editable: false}
                },
                {
                    namespace: 'antd-mobile',
                    type: 'InputItem',
                    props: {value: "editable"}

                },
                {
                    namespace: 'html',
                    type: 'span',
                    id: 'span1',
                    children: '测试测试',
                    props: {}
                },
                {
                    namespace: 'antd-mobile',
                    type: 'DatePickerView',
                    props: {
                        mode: 'year',
                        value: new Date('2016-10-19')
                    }
                },
                {
                    namespace: 'antd-mobile',
                    type: 'Button',
                    id: 'Button1',
                    children: '测试按钮1',
                    props: {
                        style: {backgroundColor: 'red'}
                    }
                },
                {
                    namespace: 'antd-mobile',
                    type: 'Button',
                    children: '测试按钮2',
                    props: {
                        style: {backgroundColor: 'red'}
                    }
                },
                {
                    namespace: 'antd-mobile',
                    type: 'Button',
                    children: '测试按钮3',
                    props: {
                        style: {backgroundColor: 'red'}
                    }
                },
                {
                    namespace: 'antd-mobile',
                    type: 'Button',
                    children: '测试按钮4',
                    props: {
                        style: {backgroundColor: 'red'}
                    }
                },
                {
                    namespace: 'antd-mobile',
                    type: 'Button',
                    children: '测试按钮5',
                    props: {
                        style: {backgroundColor: 'red'}
                    }
                },
                {
                    namespace: 'antd-mobile',
                    type: 'Button',
                    children: '测试按钮6',
                    props: {
                        style: {backgroundColor: 'red'}
                    }
                },
                {
                    namespace: 'antd-mobile',
                    type: 'Button',
                    children: '测试按钮7',
                    props: {
                        style: {backgroundColor: 'red'}
                    }
                },
                {
                    namespace: 'antd-mobile',
                    type: 'Button',
                    children: '测试按钮8',
                    props: {
                        style: {backgroundColor: 'red'}
                    }
                },
                {
                    namespace: 'antd-mobile',
                    type: 'Button',
                    children: '测试按钮9',
                    props: {
                        style: {backgroundColor: 'red'}
                    }
                },
                {
                    namespace: 'antd-mobile',
                    type: 'Button',
                    children: '测试按钮10',
                    props: {
                        style: {backgroundColor: 'red'}
                    }
                },
                {
                    namespace: 'antd-mobile',
                    type: 'Button',
                    children: '测试按钮11',
                    props: {
                        style: {backgroundColor: 'red'}
                    }
                },
                {
                    namespace: 'antd-mobile',
                    type: 'Button',
                    children: '测试按钮12',
                    props: {
                        style: {backgroundColor: 'red'}
                    }
                },

            ]
    }
})();