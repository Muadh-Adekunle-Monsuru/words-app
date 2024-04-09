import React from 'react';
import { View, Text } from '@/components/Themed';
export default function Home() {
	return (
		<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
			<Text>Called From Home</Text>
		</View>
	);
}
