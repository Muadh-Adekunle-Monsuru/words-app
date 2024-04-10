import React, { useEffect } from 'react';
import { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { View, Text } from './Themed';
import tw from 'twrnc';
import axios from 'axios';
import Buttons from './Button';
import { StyleSheet, ScrollView } from 'react-native';

export default function RandomFact() {
	const [quote, setQuote] = useState('');
	const GetRandomFact = async () => {
		try {
			const quote = await axios
				.get('https://uselessfacts.jsph.pl/api/v2/facts/random')
				.then((response) => {
					AsyncStorage.setItem('randomLocal', response.data.text);
					setQuote(response.data.text);
				});
		} catch (e) {
			console.log('Error Getting Quote', e);
			alert('Error Getting Data' + e);
			const value = await AsyncStorage.getItem('randomLocal');
			setQuote(value);
			console.log('From Local');
		}
	};

	useEffect(() => {
		GetRandomFact();
	}, []);
	return (
		<View
			style={{
				justifyContent: 'center',
				backgroundColor: '#219ebc',
			}}
		>
			<Text style={styles.title}>Random Fact:</Text>
			<View
				style={styles.separator}
				lightColor='black'
				darkColor='rgba(255,255,255,0.1)'
			/>
			<Text style={tw.style('text-3xl', { fontFamily: 'Lora' })}>{quote}</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		padding: 30,
	},
	title: {
		fontSize: 35,
		fontFamily: 'LoraBold',
		fontWeight: '500',
	},
	separator: {
		marginVertical: 30,
		height: 1,
		width: '100%',
	},
});
