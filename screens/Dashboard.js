import React from "react";
import { ScrollView } from "react-native";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Dimensions } from "react-native";
import { Card, Icon, Image } from "react-native-elements";
import { BLUE, GRAY, RED, SHADOW_COLOR } from "../common/colors";

const accounts = [
	{
		title: "Vadesiz TL Hesabı",
		accountNo: "43265782",
		avaBalanceNum: "31 TL",
		avaBalance: "Kullanılabilir Bakiye",
		currentBalanceNum: "3131 TL",
		currentBalance: "Güncel Bakiye",
		id: 1,
	},
	{
		title: "Vadesiz TL Hesabı",
		accountNo: "12265782",
		avaBalanceNum: "200 TL",
		avaBalance: "Kullanılabilir Bakiye",
		currentBalanceNum: "6969 TL",
		currentBalance: "Güncel Bakiye",
		id: 2,
	},
];

const cards = [
	{
		title: "ADIOS",
		cardNo: "6421 45** **** 5123",
		current_dept_num: "31,69 TL",
		current_dept: "Güncel Borç",
		available_lim_num: "3131,69 TL",
		available_lim: "Kullanılabilir Limit",
		id: 2,
	},
	{
		title: "WORD",
		cardNo: "6412 12** **** 5234",
		current_dept_num: "6969,31 TL",
		current_dept: "Güncel Borç",
		available_lim_num: "3131,69 TL",
		available_lim: "Kullanılabilir Limit",
		id: 3,
	},
];
const miniCards = [
	{
		title: "Varlıklarım",
		id: 1,
		image: <Image source={require("../assets/img/varliklarim.png")} style={{ width: 30, height: 30 }} />,
	},
	{
		title: "Para Çek/Yatır",
		id: 2,
		image: <Icon name="money" size={30} color={BLUE} type="font-awesome"></Icon>,
	},
	{
		title: "Akıllı Rehber",
		id: 3,
		image: <Icon name="address-book" size={30} color={BLUE} type="font-awesome"></Icon>,
	},
	// {
	// 	title: "World Pay",
	// 	id: 4,
	// 	image: (
	// 		<Image source={require("../assets/img/world-pay.png")} style={{ width: 60, height: 40, opacity: 0.3 }} />
	// 	),
	// },
	{
		title: "Aracım+",
		id: 5,
		image: <Icon name="car" size={30} type="font-awesome" color={BLUE}></Icon>,
	},
];

const Dashboard = () => {
	return (
		<View style={styles.wrapper}>
			{/* Hesaplarım */}
			<View style={styles.container}>
				<Text style={styles.title}>Hesaplarım</Text>
				<ScrollView horizontal showsHorizontalScrollIndicator={false}>
					{accounts.map((account) => {
						return (
							<TouchableOpacity key={account.id} onPress={() => console.log(account.id)}>
								<View style={[styles.cardContainer, styles.blueBorder]}>
									<View style={styles.cardContainerHeader}>
										<View
											style={{
												width: 75,
												height: 45,
												backgroundColor: "white",
												justifyContent: "center",
												alignItems: "center",
											}}
										>
											<Icon name="money" size={45} color={BLUE} type="font-awesome" />
										</View>
										<View
											style={{
												width:
													Dimensions.get("window").width * (90 / 100) -
													(75 + 25),
												height: 45,
												flex: 1,
												justifyContent: "flex-start",
											}}
										>
											<Text style={{ fontSize: 18 }}>{account.title}</Text>
											<Text style={{ fontSize: 12 }}>{account.accountNo}</Text>
										</View>
									</View>
									<View style={styles.cardContainerContent}>
										<View
											style={{
												width: Dimensions.get("window").width * (40 / 100),
											}}
										>
											<Text
												style={{
													textAlign: "center",
													fontSize: 19,
													fontWeight: "bold",
												}}
											>
												{account.avaBalanceNum}
											</Text>
											<Text
												style={{
													textAlign: "center",
													fontSize: 12,
													fontWeight: "100",
												}}
											>
												Kullanılabilir Bakiye
											</Text>
										</View>
										<View style={{ width: Dimensions.get("window").width * (40 / 100) }}>
											<Text
												style={{
													textAlign: "center",
													fontSize: 19,
													fontWeight: "bold",
												}}
											>
												{account.currentBalanceNum}
											</Text>
											<Text
												style={{
													textAlign: "center",
													fontSize: 12,
													fontWeight: "100",
												}}
											>
												Güncel Bakiye
											</Text>
										</View>
									</View>
								</View>
							</TouchableOpacity>
						);
					})}
				</ScrollView>
			</View>
			{/* Kartlarım */}

			<View style={styles.container}>
				<Text style={styles.title}>Kartlarım</Text>
				<ScrollView horizontal showsHorizontalScrollIndicator={false}>
					{cards.map((card) => {
						return (
							<TouchableOpacity key={card.id} onPress={() => null}>
								<View style={[styles.cardContainer, styles.redBorder]}>
									<View style={styles.cardContainerHeader}>
										<View
											style={{
												width: 75,
												height: 45,
												backgroundColor: "white",
												justifyContent: "center",
												alignItems: "center",
											}}
										>
											<Image
												source={require("../assets/img/Card.png")}
												style={{ width: 60, height: 40 }}
											/>
										</View>
										<View
											style={{
												width:
													Dimensions.get("window").width * (90 / 100) -
													(75 + 25),
												height: 45,
												flex: 1,
												justifyContent: "flex-start",
											}}
										>
											<Text style={{ fontSize: 18 }}>{card.title}</Text>
											<Text style={{ fontSize: 12 }}>{card.cardNo}</Text>
										</View>
									</View>
									<View style={styles.cardContainerContent}>
										<View
											style={{
												width: Dimensions.get("window").width * (40 / 100),
											}}
										>
											<Text
												style={{
													textAlign: "center",
													fontSize: 19,
													fontWeight: "bold",
												}}
											>
												{card.current_dept_num}
											</Text>
											<Text
												style={{
													textAlign: "center",
													fontSize: 12,
													fontWeight: "100",
												}}
											>
												Güncel Borç
											</Text>
										</View>
										<View style={{ width: Dimensions.get("window").width * (40 / 100) }}>
											<Text
												style={{
													textAlign: "center",
													fontSize: 19,
													fontWeight: "bold",
												}}
											>
												{card.available_lim_num}
											</Text>
											<Text
												style={{
													textAlign: "center",
													fontSize: 12,
													fontWeight: "100",
												}}
											>
												Kullanılabilir Limit
											</Text>
										</View>
									</View>
								</View>
							</TouchableOpacity>
						);
					})}
				</ScrollView>
			</View>
			{/* Dİğer işlemler */}
			<View style={styles.smallContainer}>
				<ScrollView horizontal showsHorizontalScrollIndicator={false}>
					{miniCards.map((card) => {
						return (
							<TouchableOpacity
								activeOpacity={1}
								key={card.id}
								onPress={() => console.log(card.id)}
							>
								<View style={styles.smallCardContainer}>
									<View style={styles.smallCardContent}>{card.image}</View>
									<View style={styles.smallCardTitle}>
										<Text>{card.title}</Text>
									</View>
								</View>
							</TouchableOpacity>
						);
					})}
				</ScrollView>
			</View>
		</View>
	);
};

export default Dashboard;

const styles = StyleSheet.create({
	wrapper: {
		flex: 1,
		alignItems: "center",
		padding: 10,
		backgroundColor: "#FFFFFF",
		paddingTop: Dimensions.get("window").height * (5 / 100),
	},
	title: {
		fontSize: 20,
		fontWeight: "bold",
		paddingHorizontal: 20,
	},
	container: {
		height: 179,
		width: Dimensions.get("window").width,
		marginTop: 10,
		marginBottom: 10,
	},
	smallContainer: {
		height: 108,
		marginTop: 10,
		marginBottom: 10,
	},
	cardContainer: {
		width: Dimensions.get("window").width * (90 / 100),
		height: 126,
		borderRadius: 10,
		borderLeftWidth: 5,
		marginLeft: 10,
		marginRight: 10,
		marginTop: 10,
		padding: 10,
		backgroundColor: "#FFFFFF",
		shadowColor: SHADOW_COLOR,
		//iOS
		shadowOffset: { width: 0, height: 1 },
		shadowOpacity: 0.2,
		//Android
		elevation: 12,
	},
	cardContainerHeader: {
		height: 50,
		marginVertical: 3,
		flex: 1,
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
	},
	cardContainerContent: {
		height: 50,
		marginVertical: 3,
		flex: 1,
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
	},
	smallCardContainer: {
		width: Dimensions.get("window").width * (26.5 / 100),
		height: 88,
		marginHorizontal: Dimensions.get("window").width * (2.5 / 100),
		marginTop: 10,
		marginBottom: 10,
		borderRadius: 10,
		backgroundColor: "#FFFFFF",
		shadowColor: SHADOW_COLOR,
		//iOS
		shadowOffset: { width: 0, height: 1 },
		shadowOpacity: 0.2,
		//Android
		elevation: 5,
	},
	smallCardTitle: {
		height: 38,
		lineHeight: 38,
		backgroundColor: GRAY,
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	smallCardContent: {
		height: 50,
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	blueBorder: {
		borderColor: BLUE,
	},
	redBorder: {
		borderColor: RED,
	},
});
