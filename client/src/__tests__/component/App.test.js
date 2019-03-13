import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import { App } from '../../App';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('App', () => {
  test('renders and displays name', () => {
    const props = { userAuth: { username: 'test' } };
    const wrapper = shallow(<App {...props} />);
    expect(wrapper.exists()).toBe(true);
    expect(wrapper.find('WelcomeTag').text()).toBe('Welcome test');
  });
  test('clicking button executes onClick', () => {});
});
