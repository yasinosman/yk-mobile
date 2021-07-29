import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { ThemeProvider } from "react-native-elements";
import Dashboard from "./screens/Dashboard";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

export default function App() {
	return (
		<SafeAreaProvider>
			<ThemeProvider>
				{/** route = /home component = Dashboard */}
				<Dashboard />
			</ThemeProvider>
		</SafeAreaProvider>
	);
}
