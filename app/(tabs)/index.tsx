import { StyleSheet } from 'react-native';
import { useState } from 'react';
import { Text, View } from '@/components/Themed';
import Buttons from '@/components/Button';
import TodayFact from '@/components/todayFact';
import RandomFact from '@/components/randomFact';
export default function TabOneScreen() {
	const [todayView, setTodayView] = useState(true);
	return (
		<View style={styles.container}>
			{todayView ? <TodayFact /> : <RandomFact />}
			<Buttons setTodayView={setTodayView} todayView={todayView} />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		padding: 30,
		backgroundColor: '#219ebc',
	},
	title: {
		fontSize: 35,
		fontFamily: 'Lora',
		fontWeight: '500',
	},
	separator: {
		marginVertical: 30,
		height: 1,
		width: '80%',
	},
});
