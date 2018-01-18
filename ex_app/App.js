import React from 'react';
import { View, StatusBar } from 'react-native';
import MainNavigation from './src/navigations/MainNavigation';

const App = props => (
	<View style={{ flex: 1, paddingTop: StatusBar.currentHeight }}>
		<MainNavigation {...props} name="gaurav" />
	</View>
);
export default App;
