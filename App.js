import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { ThemeProvider } from "react-native-elements";
import Dashboard from "./screens/Dashboard";

export default function App() {
	return (
		<SafeAreaProvider>
			<ThemeProvider>
				<Dashboard />
			</ThemeProvider>
		</SafeAreaProvider>
	);
}
