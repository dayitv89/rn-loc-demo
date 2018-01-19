import React, { Component } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { SearchBar, Card, Button } from 'react-native-elements';
import { FloatingAction } from 'react-native-floating-action';

import FloatImgs from '../imgs/float_menu';

const actions = [
	{
		text: 'Back',
		icon: FloatImgs.back,
		name: 'bt_back',
		position: 1
	}
];

export default class CityDetailScene extends Component {
	constructor(props) {
		super(props);
		this.state = { cites: this.props.data };
		this.onSearch = this.onSearch.bind(this);
		this.onClearSearch = this.onClearSearch.bind(this);
		this.renderCell = this.renderCell.bind(this);
		this.onFloatMenu = this.onFloatMenu.bind(this);
	}

	onSearch(text) {
		this.setState({
			cites: this.props.data.filter(i => i.locationName.toLowerCase().includes(text.toLowerCase()))
		});
	}

	onClearSearch(text) {
		this.setState({ cites: Cities });
	}

	onFloatMenu(btnName) {
		this.props.navigation.goBack();
	}

	renderCell({ item, index }) {
		return (
			<Card
				key={index}
				containerStyle={[styles.cell, { marginBottom: index + 1 === this.props.data.length ? 15 : 0 }]}
				featuredTitle={item.locationName}
				image={{ uri: item.locationImageUri }}
				imageProps={{ resizeMode: 'cover', backgroundColor: 'rgba(0,0,0,0.2)' }}
			>
				<Text style={{ marginBottom: 10 }}>{item.locationInfo}</Text>
			</Card>
		);
	}

	render() {
		return (
			<View style={styles.container}>
				<SearchBar
					ref={o => (this.searchBar = o)}
					placeholder="Search Places..."
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
