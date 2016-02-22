import React from 'react';
import should from 'should';
import Strike from '../dist';
import { renderJSX } from '../utils/tester';
import { findDOMNode } from 'react-dom';
import TestUtils from 'react-addons-test-utils';

describe('Strike', () => {
  it('should be able to create simple instance', () => {
    const node = renderJSX(
      <Strike>
        <div>Hello</div>
      </Strike>
    );

    const ele = findDOMNode(node).querySelector('div');
    ele.innerHTML.should.equal('Hello');
  });
});
