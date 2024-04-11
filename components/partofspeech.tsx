import React from 'react';
import { View, Text } from './Themed';
import tw from 'twrnc';
import { FontAwesome } from '@expo/vector-icons';
import { useToast } from 'react-native-toast-notifications';
export default function PartOfSpeech({ data }) {
	const toast = useToast();
	const pof = [];
	try {
		data.result.map((data) => {
			!pof.includes(data.partofspeech) ? pof.push(data.partofspeech) : null;
		});
	} catch (e) {
		pof.push(data.result.partofspeech);
		// console.log(e);
		// toast.show(`Error getting part of speach ${e}`, { type: 'warning' });
	}
	return <Text style={tw`p-2 text-gray-500`}>{pof.toString()}</Text>;
}
