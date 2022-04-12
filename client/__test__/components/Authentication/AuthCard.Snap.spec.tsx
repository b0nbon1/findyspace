/* eslint-disable @typescript-eslint/no-empty-function */
import React, { ReactPortal } from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import AuthCards from '../../../src/components/authentication/AuthCard';

describe('AuthCard tests snaps', () => {
  const oldCreatePortal = ReactDOM.createPortal;
  function createNodeMock(element) {
    if (element.type === 'p') {
      // This is your fake DOM node for <p>.
      // Feel free to add any stub methods, e.g. focus() or any
      // other methods necessary to prevent crashes in your components.
      return {};
    }
    // You can return any object from this method for any type of DOM component.
    // React will use it as a ref instead of a DOM node when snapshot testing.
    return null;
  }
  beforeAll(() => {
    ReactDOM.createPortal = jest.fn((element, node) => element as ReactPortal);
  });

  it('renders homepage unchanged', () => {
    const options = {createNodeMock};
    const props = {
      open: true,
      handleClose: () => {},
      handleAuth: () => {},
      isLogin: true,
    };
    const tree = renderer.create(<AuthCards {...props} />, options).toJSON();
    expect(tree).toMatchSnapshot();
  });

  afterAll(() => {
    ReactDOM.createPortal = oldCreatePortal;
  });
});
