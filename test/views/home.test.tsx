import React from 'react';
import renderer from 'react-test-renderer';
import Home from '../../src/views/home/home';
import MockedComponent from '../support/mocked-component';

it('renders correctly', () => {
  const tree = renderer.create(<MockedComponent Component={Home} />).toJSON();
  expect(tree).toMatchSnapshot();
});
