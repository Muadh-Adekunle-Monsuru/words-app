import React from 'react';
import { View, Text } from './Themed';
import tw from 'twrnc';
import { FontAwesome } from '@expo/vector-icons';
export default function DefinitionList({ data }) {
	const list = [];
	const tryObject = () => {
		try {
			data.result.map((data, index) => {
				list.push(data.definition);
			});
		} catch (e) {
			list.push(data.result.definition);
		}
	};

	tryObject();
	return (
		<View style={tw`p-1 text-justify`}>
			{list.map((data, index) => {
				return (
					<View
						key={index}
						style={tw`p-1 text-lg  flex flex-row items-center gap-2`}
					>
						<Text>
							<FontAwesome name='circle' size={6} />
						</Text>
						<Text style={tw`text-lg`}>{data}</Text>
					</View>
				);
			})}
		</View>
	);
}
