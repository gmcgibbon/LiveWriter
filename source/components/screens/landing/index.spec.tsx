import 'react-native';
import 'jest';
import React         from 'react';
import LandingScreen from './index';
import renderer      from 'react-test-renderer';

describe(LandingScreen.name, () => {

  describe('render', () => {

    const screen = renderer.create(
      <LandingScreen />
    );

    it('renders correctly', () => {
      expect(screen).toBeDefined()
    });
  });

  describe('.navigationOptions', () => {

    const navigationOptions = LandingScreen.navigationOptions;

    it('does not have a header', () => {
      expect(navigationOptions.header).toBeNull()
    });
  });

});
