import React, { Component } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { SearchBar, Card, Button } from 'react-native-elements';
import Cities from '../data/Cities';

export default class MainScene extends Component {
	constructor(props) {
		super(props);
		this.state = { cites: Cities };
		this.onSearch = this.onSearch.bind(this);
		this.onClearSearch = this.onClearSearch.bind(this);
		this.renderCell = this.renderCell.bind(this);
	}

	onSearch(text) {
		this.setState({ cites: Cities.filter(i => i.cityName.toLowerCase().includes(text.toLowerCase())) });
	}

	onClearSearch(text) {
		this.setState({ cites: Cities });
	}

	onCellTapped({ item, index }) {
		console.warn(item.cityName, index);
	}

	renderCell({ item, index }) {
		return (
			<Card
				key={index}
				containerStyle={[styles.cell, { marginBottom: index + 1 === Cities.length ? 15 : 0 }]}
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
					onPress={() => this.onCellTapped({ item, index })}
				/>
			</Card>
		);
	}

	render() {
		return (
			<View style={styles.container}>
				<SearchBar placeholder="Search city..." onChangeText={this.onSearch} onClearText={this.onClearSearch} />
				<FlatList data={this.state.cites} renderItem={this.renderCell} keyExtractor={(item, index) => index} />
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'rgb(244, 244, 244)'
	},
	cell: {
		borderRadius: 5,
		overflow: 'hidden'
	}
});
