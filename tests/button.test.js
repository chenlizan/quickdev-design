import React from 'react'
const { shallow } =  require('enzyme')

test('Jest-React-TypeScript 尝试运行', () => {
    const renderer = shallow(<div>hello world</div>)
    expect(renderer.text()).toEqual('hello world')
})