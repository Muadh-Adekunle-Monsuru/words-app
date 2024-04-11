import React, { useEffect } from 'react';
import { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { View, Text } from './Themed';
import tw from 'twrnc';
import axios from 'axios';
import Buttons from './Button';
import { StyleSheet, ScrollView } from 'react-native';
import LottieView from 'lottie-react-native';
import { useToast } from 'react-native-toast-notifications';
export default function RandomFact() {
	const [quote, setQuote] = useState('');
	const toast = useToast();
	const GetRandomFact = async () => {
		try {
			const quote = await axios
				.get('https://uselessfacts.jsph.pl/api/v2/facts/random')
				.then((response) => {
					AsyncStorage.setItem('randomLocal', response.data.text);
					setQuote(response.data.text);
				});
		} catch (e) {
			console.log('Error Getting Fact', e);
			const value = await AsyncStorage.getItem('randomLocal');
			setQuote(value);
			toast.show(`Error getting fact ${e}`, { type: 'warning' });
		}
	};

	useEffect(() => {
		GetRandomFact();
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
				justifyContent: 'center',
				backgroundColor: 'white',
			}}
		>
			<Text style={styles.title}>Random Fact:</Text>
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
		fontWeight: '500',
	},
	separator: {
		marginVertical: 30,
		height: 1,
		width: '100%',
	},
});
