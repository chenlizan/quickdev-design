const dataObj = {
    namespace: 'antd-mobile',
    type: 'List',
    id: 'list1',
    props: {'chenlizan': 1},
    children:
        [
            {
                namespace: 'antd-mobile',
                type: 'InputItem',
                id: 'InputItem1',
                children: '测试',
                props:{value:"not editable"}
            },
            {
                namespace: 'antd-mobile',
                type: 'InputItem',
                id: 'InputItem2'
            }
        ]
};

module.exports = dataObj;