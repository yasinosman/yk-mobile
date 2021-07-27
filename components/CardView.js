import React from "react";
import { Platform, Text, View } from "react-native";
import { BLUE, GRAY, SHADOW_COLOR } from "../common/colors";
import { createStyleSheet } from "../utils";

/**
 *
 * @param {{children: React.ReactNode, width: number, height: number, ...styles: any}} param0
 * @returns {React.FC}
 */
const CardView = ({
	children = <Text style={{ color: "black", textAlign: "center", lineHeight: 80 }}>Card View</Text>,
	width = 200,
	height = 80,

	...styles
}) => {
	return (
		<View
			style={createStyleSheet({
				width,
				height,
				borderLeftWidth: 10,
				borderColor: BLUE,
				borderRadius: 10,
				backgroundColor: GRAY,
				shadowColor: SHADOW_COLOR,
				//iOS
				shadowOffset: { width: 0, height: 1 },
				shadowOpacity: 0.2,
				//Android
				elevation: 10,
				...styles,
			})}
		>
			{children}
		</View>
	);
};

export default CardView;
