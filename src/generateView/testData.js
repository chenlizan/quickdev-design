const dataObj = {
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
                children: '测试测试',
                props:{}
            }
        ]
};

module.exports = dataObj;