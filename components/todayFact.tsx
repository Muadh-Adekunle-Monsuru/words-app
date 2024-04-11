import React, { useEffect } from 'react';
import { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { View, Text } from './Themed';
import tw from 'twrnc';
import axios from 'axios';
import Buttons from './Button';
import { StyleSheet } from 'react-native';
import LottieView from 'lottie-react-native';
import { useToast } from 'react-native-toast-notifications';
export default function TodayFact() {
	const [quote, setQuote] = useState(null);
	const toast = useToast();
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
			const value = await AsyncStorage.getItem('todayLocal');
			setQuote(value);
			toast.show(`Error getting fact ${e}`, { type: 'warning' });
		}
	};

	useEffect(() => {
		getTodayQuote();
	}, []);

	const Animation = () => {
		return (
			<LottieView
				source={require('../assets/loading.json')}
				style={{ width: '100%', height: '100%' }}
				autoPlay
				loop
			/>
		);
	};
	const Content = () => {
		return (
			<Text style={tw.style('text-3xl', { fontFamily: 'Lora' })}>{quote}</Text>
		);
	};
	return (
		<View
			style={{
				// flex: 0.4,
				justifyContent: 'center',
				backgroundColor: 'white',
			}}
		>
			<Text style={styles.title}>Today's Fact:</Text>
			<View
				style={styles.separator}
				lightColor='black'
				darkColor='rgba(255,255,255,0.1)'
			/>
			{(quote && <Content />) || <Animation />}
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
