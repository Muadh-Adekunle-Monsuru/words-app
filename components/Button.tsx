import React from 'react';
import tw from 'twrnc';
import { View, Text } from './Themed';
import { Pressable, Keyboard, TouchableWithoutFeedback } from 'react-native';

export default function Buttons({ todayView, setTodayView }) {
	return (
		<View
			style={tw.style(
				'border-2',
				'rounded-full',
				'flex-row',
				'justify-center',
				'w-3/4',
				'mx-auto',
				'overflow-hidden',
				'shadow-md',
				'p-0',
				'mt-20'
			)}
		>
			<Pressable style={{ flex: 1 }} onPress={() => setTodayView(true)}>
				<View
					style={tw.style(
						{ 'bg-blue-100': todayView },
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
