import React from 'react';
import { View, Text } from '@/components/Themed';
import LottieView from 'lottie-react-native';
import { router } from 'expo-router';
export default function HomePage() {
	return (
		<View style={{ flex: 1 }}>
			<LottieView
				source={require('../assets/splash.json')}
				style={{ width: '100%', height: '100%' }}
				autoPlay
				loop={false}
				onAnimationFinish={() => router.replace('/(tabs)/')}
			/>
		</View>
	);
}
