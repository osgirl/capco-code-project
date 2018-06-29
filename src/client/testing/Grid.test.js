//__tests__/Grid.test.js
import React from 'react';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import Grid from '../components/Grid';

describe('<Graph />', () => {
  it('should render a grid', () => {
  // Render a checkbox with label in the document
  const wrapper=shallow(<Grid />);
 expect(wrapper).toMatchSnapshot(); 
  })
})
