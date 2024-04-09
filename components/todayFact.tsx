import React, { useEffect } from 'react';
import { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { View, Text } from './Themed';
import tw from 'twrnc';
import axios from 'axios';
import Buttons from './Button';
import { StyleSheet } from 'react-native';
export default function TodayFact() {
	const [quote, setQuote] = useState('');
	const getTodayQuote = async () => {
		try {
			const quote = await axios
				.get('https://uselessfacts.jsph.pl/api/v2/facts/today')
				.then((response) => {
					setQuote(response.data.text);
					AsyncStorage.setItem('todayLocal', response.data.text);
				});
		} catch (e) {
			console.log('Error Getting Data', e);
			alert('Error Getting Data' + e);
			const value = await AsyncStorage.getItem('todayLocal');
			setQuote(value);
			console.log('From Local');
		}
	};

	useEffect(() => {
		getTodayQuote();
	}, []);
	return (
		<View
			style={{
				// flex: 0.4,
				justifyContent: 'center',
				backgroundColor: '#219ebc',
			}}
		>
			<Text style={styles.title}>Today's Fact:</Text>
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
		fontWeight: '200',
	},
	separator: {
		marginVertical: 30,
		height: 1,
		width: '100%',
	},
});
