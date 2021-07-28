import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { ThemeProvider } from "react-native-elements";

export default function App() {
	return (
		<SafeAreaProvider>
			<ThemeProvider></ThemeProvider>
		</SafeAreaProvider>
	);
}
