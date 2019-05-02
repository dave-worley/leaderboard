import React from 'react';
import { shallow } from '../../enzyme';

import AddEditPlayer from '.';

describe('Add Player Test', () => {

  it('renders', () => {
    const wrapper = shallow(<AddEditPlayer />);
    // Expect the wrapper object to be empty because state.uploadFormVisible is false
    expect(wrapper.find('div.modal').length).toEqual(0);
  });

});
