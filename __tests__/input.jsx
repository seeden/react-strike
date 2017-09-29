import React, { Component } from 'react';
import Strike from '../src';
import { shallow, mount, render } from 'enzyme';

describe('Translate', () => {
  it('should be able to create simple instance', async () => {
    const wrapper = mount(
      <Strike>
        <div className="test">Hello</div>
      </Strike>
    );

    expect(wrapper.find('.test').html()).toBe('<div class="test">Hello</div>');
  });
});
