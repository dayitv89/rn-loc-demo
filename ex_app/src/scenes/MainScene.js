import React, { Component } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { SearchBar, Card, Button } from 'react-native-elements';
import { FloatingAction } from 'react-native-floating-action';

import FloatImgs from '../imgs/float_menu';
import Cities from '../data/Cities';

const actions = [
	{
		text: 'Language',
		icon: FloatImgs.language,
		name: 'bt_language',
		position: 1
	},
	{
		text: 'Settings',
		icon: FloatImgs.settings,
		name: 'bt_settings',
		position: 2
	},
	{
		text: 'About Us',
		icon: FloatImgs.about,
		name: 'bt_about',
		position: 3
	},
	{
		text: 'Search',
		icon: FloatImgs.search,
		name: 'bt_search',
		position: 4
	}
];

export default class MainScene extends Component {
	constructor(props) {
		super(props);
		this.state = { cites: Cities };
		this.onSearch = this.onSearch.bind(this);
		this.onClearSearch = this.onClearSearch.bind(this);
		this.renderCell = this.renderCell.bind(this);
		this.onFloatMenu = this.onFloatMenu.bind(this);
	}

	onSearch(text) {
		this.setState({
			cites: Cities.filter(i => {
				const searchWord = text.toLowerCase();
				return (
					i.cityName.toLowerCase().includes(searchWord) ||
					i.sights.some(j => j.locationName.toLowerCase().includes(searchWord))
				);
			})
		});
	}

	onClearSearch(text) {
		this.setState({ cites: Cities });
	}

	onCellTapped({ item, index }) {
		this.props.navigation.navigate('CityDetailScene', { data: item.sights });
	}

	onFloatMenu(btnName) {
		switch (btnName) {
			case 'bt_language':
			case 'bt_settings':
			case 'bt_about':
				console.warn(btnName);
				break;
			case 'bt_search':
				this.searchBar.focus();
				break;
		}
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
					icon={{ name: 'remove-red-eye' }}
					backgroundColor="#03A9F4"
					buttonStyle={{ borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0 }}
					title="SHOW DETAILS"
					onPress={() => this.onCellTapped({ item, index })}
					raised
				/>
			</Card>
		);
	}

	render() {
		return (
			<View style={styles.container}>
				<SearchBar
					ref={o => (this.searchBar = o)}
					placeholder="Search city / places..."
					onChangeText={this.onSearch}
					onClearText={this.onClearSearch}
					lightTheme
					containerStyle={{ backgroundColor: '#03A9F4', borderTopWidth: 0, borderBottomWidth: 0 }}
					inputStyle={{ backgroundColor: 'rgb(244, 244, 244)' }}
				/>
				<FlatList data={this.state.cites} renderItem={this.renderCell} keyExtractor={(item, index) => index} />
				<FloatingAction floatingIcon={FloatImgs.more} actions={actions} onPressItem={this.onFloatMenu} />
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'rgb(225, 225, 225)'
	},
	cell: {
		borderRadius: 5,
		overflow: 'hidden'
	}
});
