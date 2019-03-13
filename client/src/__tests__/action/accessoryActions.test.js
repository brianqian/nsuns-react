import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import * as Action from '../../actions';
import Adapter from 'enzyme-adapter-react-16';
import configureStore from 'redux-mock-store';
import fetchMock from 'fetch-mock';
import thunk from 'redux-thunk';
import * as Util from '../../utils';

Enzyme.configure({ adapter: new Adapter() });

const middlewares = [thunk];
const mockStore = configureStore(middlewares);
const store = mockStore({});

describe('accessory action', () => {
  test('should add accessory to store', () => {
    const basePlan = 'test';
    const expectedAction = {
      type: 'ADD_ACCESSORY',
      basePlan,
    };
    expect(Action.addAccessorySuccess(basePlan)).toEqual(expectedAction);
  });
});

// describe('accessory thunk tests', () => {
//   beforeEach(() => {
//     fetchMock.restore();
//   });
//   test('should dispatch success on completion', () => {
//     fetchMock.getOnce(Util.deleteAccessory('test'));
//   });
// });

describe('deleteAccessory', () => {});
