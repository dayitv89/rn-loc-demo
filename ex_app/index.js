import React from 'react';
import { AppRegistry, View, Platform, StatusBar } from 'react-native';
import { ifIphoneX } from 'react-native-iphone-x-helper';

import MainNavigation from './src/navigations/MainNavigation';

const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? ifIphoneX(44, 20) : StatusBar.currentHeight;

const App = props => (
	<View style={{ flex: 1, paddingTop: STATUSBAR_HEIGHT, backgroundColor: '#03A9F4' }}>
		<MainNavigation {...props} />
	</View>
);

export default App;

AppRegistry.registerComponent('App', () => App);
