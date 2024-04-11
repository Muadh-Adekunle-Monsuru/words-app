import { StyleSheet, ScrollView } from 'react-native';
import { useState } from 'react';
import { Text, View } from '@/components/Themed';
import Buttons from '@/components/Button';
import TodayFact from '@/components/todayFact';
import RandomFact from '@/components/randomFact';
import tw from 'twrnc';
export default function TabOneScreen() {
	const [todayView, setTodayView] = useState(true);
	return (
		<View style={{ flex: 1, backgroundColor: 'white' }}>
			<ScrollView style={tw.style(styles.container, 'gap-5')}>
				<View
					style={{
						flex: 0.5,
						justifyContent: 'center',
						marginTop: '50%',
					}}
				>
					{todayView ? <TodayFact /> : <RandomFact />}
				</View>
				<Buttons setTodayView={setTodayView} todayView={todayView} />
			</ScrollView>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 30,
		backgroundColor: 'white',
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
