import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import App from "../App";


import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

describe('<App/>', function () {
    it('default test to allow build and pre-commit to pass in empty project', function () {
        expect("Test update").to.eq("Test update");
    });
});