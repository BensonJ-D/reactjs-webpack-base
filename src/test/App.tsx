import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import App from "../App";

describe('<App/>', function () {
    it('should render child text', function () {
        const shallowWrapper = shallow(<App />);

        expect(shallowWrapper.children().text()).to.eq("Test update");
    });
});