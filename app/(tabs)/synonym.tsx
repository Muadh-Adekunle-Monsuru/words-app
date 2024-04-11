import { Pressable, StyleSheet, TextInput } from 'react-native';
import tw from 'twrnc';
import { useState } from 'react';
import { Text, View } from '@/components/Themed';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { TouchableWithoutFeedback, Keyboard } from 'react-native';
import { Button } from 'react-native';
import { Link } from 'expo-router';
export default function TabTwoScreen() {
	const [word, setWord] = useState(null);
	const [pressed, setPressed] = useState(false);
	return (
		<TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
			<View style={styles.container}>
				<View
					style={tw.style(
						{
							alignItems: 'center',
							justifyContent: 'center',
							width: '80%',
							backgroundColor: 'white',
						},
						'gap-10'
					)}
				>
					<TextInput
						style={tw`w-full border-b-2 text-5xl text-black border-black`}
						placeholder='Enter Word ...'
						cursorColor={'black'}
						enterKeyHint='search'
						placeholderTextColor='black'
						onChangeText={setWord}
						value={word}
					/>
					<Link
						href={{
							pathname: '/[definition]',
							params: { definition: `${word}` },
						}}
						asChild
					>
						<Pressable
							style={tw.style(
								'py-3',
								'border-2',
								'w-full',
								'rounded-full',
								'flex',
								'flex-row',
								'justify-center',
								'items-center',
								'gap-5',
								'border-black',
								{ 'bg-slate-300': pressed }
							)}
							onPressIn={() => setPressed(true)}
							onPressOut={() => setPressed(false)}
						>
							<Text style={tw`text-xl text-black`}>Search</Text>
							<FontAwesome name='search' size={20} color={'black'} />
						</Pressable>
					</Link>
				</View>
			</View>
		</TouchableWithoutFeedback>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: 'white',
	},
	title: {
		fontSize: 20,
		fontWeight: 'bold',
	},
	separator: {
		marginVertical: 30,
		height: 1,
		width: '80%',
	},
});
