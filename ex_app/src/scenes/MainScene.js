import React, { Component } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { SearchBar, Card, Button } from 'react-native-elements';
import Cities from '../data/Cities';

export default class MainScene extends Component {
	renderCell({ item, index }) {
		return (
			<Card
				key={index}
				containerStyle={{ borderRadius: 5, marginBottom: index + 1 === Cities.length ? 10 : 0 }}
				featuredTitle={item.cityName}
				featuredSubtitle={item.citySubtitle}
				image={{ uri: item.cityImageUri }}
				imageProps={{ resizeMode: 'cover', backgroundColor: 'rgba(0,0,0,0.2)' }}
			>
				<Text style={{ marginBottom: 10 }}>{item.cityInfo}</Text>
				<Button
					icon={{ name: 'hearing' }}
					backgroundColor="#03A9F4"
					buttonStyle={{ borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0 }}
					title="VIEW NOW"
				/>
			</Card>
		);
	}

	render() {
		return (
			<View style={styles.container}>
				<SearchBar placeholder="Type Here..." />
				<FlatList data={Cities} renderItem={this.renderCell} />
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'rgb(244, 244, 244)'
	}
});
