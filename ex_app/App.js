import React from 'react';
import { View, Platform, StatusBar } from 'react-native';
import { ifIphoneX } from 'react-native-iphone-x-helper';

import MainNavigation from './src/navigations/MainNavigation';

const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? ifIphoneX(44, 20) : StatusBar.currentHeight;

const App = props => (
	<View style={{ flex: 1, paddingTop: STATUSBAR_HEIGHT }}>
		<MainNavigation {...props} name="gaurav" />
	</View>
);

export default App;
