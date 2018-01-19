import { StackNavigator } from 'react-navigation';
import { StackNavigatorHelper } from 'react-navigation-helper';

import Scenes from '../scenes';

export default StackNavigatorHelper.exportStackNavigator(
	StackNavigator(
		{
			MainScene: { screen: StackNavigatorHelper.setInitParamsToProps(Scenes.MainScene) },
			CityDetailScene: { screen: StackNavigatorHelper.paramsToProps(Scenes.CityDetailScene) }
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
