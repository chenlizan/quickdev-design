import React from 'react';
import {shallow} from 'enzyme';

import Button from '../src/components/AttributeField/Button';

test('Jest-React-TypeScript 尝试运行', () => {
    const renderer = shallow(<Button text="hello world"/>);
    expect(renderer.text()).toEqual('hello world')
})