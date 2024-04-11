import React from 'react';
import { View, Text } from './Themed';
import tw from 'twrnc';
import { FontAwesome } from '@expo/vector-icons';
import { ScrollView } from 'react-native';
import { useToast } from 'react-native-toast-notifications';
export default function SynonymList({ data }) {
	const toast = useToast();
	let synonymlist = [];
	try {
		data.result.map((data, index) => {
			try {
				const array = data.synonyms.split(',');
				array.map((element) => synonymlist.push(element));
			} catch (e) {}
		});
	} catch (e) {
		// console.log('Error gettting synonyms', e);
		// toast.show(`Error getting synonyms ${e}`, { type: 'warning' });
	}

	function uniqueElements(array) {
		return Array.from(new Set(array));
	}
	const uniqueArr = uniqueElements(synonymlist);
	function generateGradientColor(index, totalRows) {
		const hue = (160 / totalRows) * index;
		return `hsl(${hue}, 70%, 90%)`;
	}
	return (
		<ScrollView style={{ flex: 1 }}>
			<View style={tw`p-3 text-justify flex flex-row flex-wrap gap-2`}>
				{uniqueArr.splice(0, 40).map((ele: string, index) => {
					const color = generateGradientColor(index, 20); // Assuming you're showing 20 elements per row
					return (
						<Text
							style={tw.style(
								'px-3',
								'py-2',
								'border',
								'rounded-full',
								'text-lg',
								{
									backgroundColor: color,
								}
							)}
							key={index}
						>
							{ele}
						</Text>
					);
				})}
			</View>
		</ScrollView>
	);
}
