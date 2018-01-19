import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class CityDetailScene extends Component {
	render() {
		return (
			<View style={styles.container}>
				<Text>I'm the {this.props.data.cityName} component</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'rgb(225, 225, 225)',
		alignItems: 'center',
		justifyContent: 'center'
	}
});
