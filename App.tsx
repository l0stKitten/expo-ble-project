import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Menu from './screens/Menu';

type RootStackParamList = {
  Menu: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
	return (
		<NavigationContainer>
		<Stack.Navigator>
			<Stack.Screen
			name="Menu"
			component={Menu}
			options={{
				title: 'Home Security',
				headerTitleAlign: 'center',
				headerStyle: {
				backgroundColor: '#fff',
				},
				headerTintColor: '#000',
				headerTitleStyle: {
				fontWeight: 'bold',
				}
			}}
			/>
		</Stack.Navigator>
		</NavigationContainer>
	);
}
