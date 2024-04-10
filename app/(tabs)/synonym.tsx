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
	return (
		<TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
			<View style={styles.container}>
				<View
					style={tw.style(
						{
							alignItems: 'center',
							justifyContent: 'center',
							width: '80%',
							backgroundColor: '#343a40',
						},
						'gap-10'
					)}
				>
					<TextInput
						style={tw`w-full border-b-2 text-5xl text-white border-white`}
						placeholder='Enter Word ...'
						cursorColor={'white'}
						enterKeyHint='search'
						placeholderTextColor='white'
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
							style={tw`py-3 border-2 w-full rounded-full flex flex-row justify-center items-center gap-5 border-white`}
						>
							<Text style={tw`text-xl text-white`}>Search</Text>
							<FontAwesome name='search' size={20} color={'white'} />
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
		backgroundColor: '#343a40',
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
