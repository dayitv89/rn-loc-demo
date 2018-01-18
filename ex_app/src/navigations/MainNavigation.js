import { StackNavigator } from 'react-navigation';
import { StackNavigatorHelper } from 'react-navigation-helper';

import MainScene from '../scenes/MainScene';

export default StackNavigatorHelper.exportStackNavigator(
	StackNavigator(
		{
			MainScene: { screen: StackNavigatorHelper.setInitParamsToProps(MainScene) }
			// MyComponent2: { screen: StackNavigatorHelper.paramsToProps(MyComponent2) },
			// MyComponent3: { screen: StackNavigatorHelper.paramsToProps(MyComponent3) },
			// MyComponent4: { screen: StackNavigatorHelper.paramsToProps(MyComponent4) }
		},
		{
			cardStyle: {
				backgroundColor: 'transparent',
				shadowColor: 'transparent'
			},
			headerMode: 'none'
			// transitionConfig: () =>
			// 	StackNavigatorHelper.transitionConfig({
			// 		MyComponent3: 'present',
			// 		MyComponent4: 'pop'
			// 	})
		}
	)
);
