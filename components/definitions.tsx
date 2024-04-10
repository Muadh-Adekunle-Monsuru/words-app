import React from 'react';
import { View, Text } from './Themed';
import tw from 'twrnc';
import { FontAwesome } from '@expo/vector-icons';
export default function DefinitionList({ data }) {
	const definitionlist = data.result.map((data, index) => {
		return (
			<View
				key={index}
				style={tw`p-1 text-lg  flex flex-row items-center gap-2`}
			>
				<Text>
					<FontAwesome name='circle' size={6} />
				</Text>
				<Text style={tw`text-lg`}>{data.definition}</Text>
			</View>
		);
	});
	return <View style={tw`p-1 text-justify`}>{definitionlist}</View>;
}
