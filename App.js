import { StatusBar } from "expo-status-bar";
import React from "react";
import { Button, Text } from "react-native";

//screens
import Login from "./screens/Login";
import CardView from "./components/CardView";
import { BLUE, GRAY } from "./common/colors";

export default function App() {
	return <CardView marginTop={50} marginLeft={50}></CardView>;
}
