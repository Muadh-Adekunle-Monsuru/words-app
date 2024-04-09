import React from 'react';
import tw from 'twrnc';
import { View, Text } from './Themed';
import { Pressable } from 'react-native';

export default function Buttons({ todayView, setTodayView }) {
	return (
		<View
			style={tw` border rounded-full flex-row justify-center w-1/2 mx-auto mt-20 overflow-hidden shadow-md p-0`}
		>
			<Pressable style={{ flex: 1 }} onPress={() => setTodayView(true)}>
				<View
					style={tw.style(
						{ 'bg-blue-200': todayView },
						'py-5',
						'px-5',
						'grow',
						'w-full'
					)}
				>
					<Text style={tw`text-lg text-center`}>Today</Text>
				</View>
			</Pressable>

			<View
				lightColor='#eee'
				darkColor='rgba(255,255,255,0.1)'
				style={tw`h-full border `}
			/>
			<Pressable style={{ flex: 1 }} onPress={() => setTodayView(false)}>
				<View style={tw.style({ 'bg-blue-200': !todayView }, 'py-5', 'px-5')}>
					<Text style={tw`text-lg`}>Random</Text>
				</View>
			</Pressable>
		</View>
	);
}
