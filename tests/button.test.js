import React from 'react';
import {render} from 'enzyme';

import Button from '../designConfig/AttributeField/Button';

test('AttributeField_Button', () => {
    const renderer = render(<Button text="hello world"/>);
    expect(renderer.find('button span').text()).toEqual('hello world')
});