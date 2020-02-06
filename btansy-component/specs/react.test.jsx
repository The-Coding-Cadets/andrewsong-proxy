import React from 'react'
import {mount, shallow} from 'enzyme'
import App from '../client/src/App.jsx'


describe('<App />', () => {
  it('renders an `.five`', () => {
    const wrapper = mount(<App />);
    expect(wrapper).toBeTruthy();
  });
});