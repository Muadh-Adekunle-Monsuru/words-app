import React, { Component, useEffect } from 'react';
import { View, Text } from '@/components/Themed';
import { useState } from 'react';
import { testData } from './testData';
import { Pressable, StyleSheet } from 'react-native';
import tw from 'twrnc';
import DefinitionList from '@/components/definitions';
import SynonymList from '@/components/synonymList';
import AntonymList from '@/components/antonymList';
import { useLocalSearchParams } from 'expo-router';
import axios from 'axios';
import PartOfSpeech from '@/components/partofspeech';
import LottieView from 'lottie-react-native';
import { useToast } from 'react-native-toast-notifications';

export default function DefinitionPage({ params }) {
	const [show, setShow] = useState('definition');
	const [response, setResponse] = useState({ result: [] });
	const [def, setDef] = useState(true);
	const [syn, setSyn] = useState(false);
	const [ant, setAnt] = useState(false);
	const [received, setReceived] = useState(false);
	const { definition } = useLocalSearchParams();
	const toast = useToast();

	useEffect(() => {
		const fetchDef = async () => {
			try {
				const definitions = await axios
					.get(
						`https://www.stands4.com/services/v2/syno.php?uid=12472&tokenid=VJQcvTHrB4isup5E&word=${definition}&format=json`
					)
					.then((response) => {
						setResponse(response.data);
						setReceived(true);
					});
			} catch (e) {
				console.log('Error fetching definition', e);
				toast.show(`Error fetching definition ${e}`, { type: 'warning' });
			}
		};
		fetchDef();
	}, []);

	const changeView = (componentToShow) => {
		switch (componentToShow) {
			case 'display':
				return <DefinitionList data={response} />;
				break;
			case 'synonym':
				return <SynonymList data={response} />;
				break;
			case 'antonym':
				return <AntonymList data={response} />;
				break;
			default:
				return <DefinitionList data={response} />; // Default to Component1
		}
	};
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
	return (
		<View style={{ flex: 1, justifyContent: 'center', padding: 20 }}>
			<View style={{ flex: 0.2 }}>
				<Text style={tw.style({ fontFamily: 'LoraBold' }, 'text-5xl')}>
					{definition}
				</Text>
				<View>{received && <PartOfSpeech data={response} />}</View>
				<View
					style={styles.separator}
					lightColor='#dee2e6'
					darkColor='rgba(255,255,255,0.1)'
				/>
				<View style={tw`flex flex-row gap-2 p-3 justify-between`}>
					<View>
						<Pressable
							style={tw.style('px-5', 'py-3', 'border', 'rounded-full', {
								'bg-slate-300': def,
							})}
							onPress={() => {
								setShow('display');
								setDef(true);
								setSyn(false);
								setAnt(false);
							}}
						>
							<Text>Definition</Text>
						</Pressable>
					</View>

					<Pressable
						style={tw.style('px-5', 'py-3', 'border', 'rounded-full', {
							'bg-slate-300': syn,
						})}
						onPress={() => {
							setSyn(true);
							setShow('synonym');
							setDef(false);
							setAnt(false);
						}}
					>
						<Text>Synonym</Text>
					</Pressable>
					<Pressable
						style={tw.style('px-5', 'py-3', 'border', 'rounded-full', {
							'bg-slate-300': ant,
						})}
						onPress={() => {
							setShow('antonym');
							setAnt(true);
							setSyn(false);
							setDef(false);
						}}
					>
						<Text>Antonym</Text>
					</Pressable>
				</View>
				<View style={styles.separator} lightColor='#dee2e6' />
			</View>
			<View style={{ flex: 0.5 }}>
				{(received && changeView(show)) || <Animation />}
			</View>
		</View>
	);
}
const styles = StyleSheet.create({
	separator: {
		marginVertical: 10,
		height: 1,
		width: '100%',
		color: '#6c757d',
	},
});
