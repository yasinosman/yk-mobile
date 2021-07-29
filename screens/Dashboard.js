import React from "react";
import { ScrollView } from "react-native";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Dimensions } from "react-native";
import { Icon, Image } from "react-native-elements";
import { BLUE, RED } from "../common/colors";
import SmallCardView from "../components/SmallCardView";
import CardView from "../components/CardView";
import accounts from "../mock/accounts.json";
import cards from "../mock/cards.json";
import actions from "../mock/actions";
import offers from "../mock/offers.json";
import InfoCard from "../components/InfoCard";

const Dashboard = () => {
	return (
		<View style={styles.wrapper}>
			{/* Hesaplarım */}
			<View style={styles.container}>
				<Text style={styles.title}>Hesaplarım</Text>
				<ScrollView horizontal showsHorizontalScrollIndicator={false}>
					{accounts.map((account) => {
						return (
							<CardView
								key={account.id}
								onPress={() => alert(account.title)}
								icon={
									<Image
										source={require("../assets/img/tl-img.png")}
										style={{ width: 70, height: 70, marginTop: 10 }}
									/>
								}
								title={account.title}
								subTitle={account.accountNo}
								key1={account.avaBalance}
								value1={account.avaBalanceNum}
								key2={account.currentBalance}
								value2={account.currentBalanceNum}
							/>
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
							<CardView
								key={card.id}
								onPress={() => alert(card.title)}
								icon={
									<Image
										source={require("../assets/img/Card.png")}
										style={{ width: 60, height: 40 }}
									/>
								}
								title={card.title}
								subTitle={card.cardNo}
								key1={card.current_dept}
								value1={card.current_dept_num}
								key2={card.available_lim}
								value2={card.available_lim_num}
								containerStyles={styles.redBorder}
							/>
						);
					})}
				</ScrollView>
			</View>

			{/* Dİğer işlemler */}
			<View style={styles.smallContainer}>
				<ScrollView horizontal showsHorizontalScrollIndicator={false}>
					{actions.map((action) => {
						const { id, image, title } = action;
						return (
							<SmallCardView
								key={id}
								onPress={() => console.log(id)}
								id={id}
								image={image}
								title={title}
							/>
						);
					})}
				</ScrollView>
			</View>

			{/** Teklifler */}
			<View style={[styles.container, { height: 200 }]}>
				<Text style={styles.title}>Teklifler</Text>
				<ScrollView horizontal showsHorizontalScrollIndicator={false}>
					{offers.map((offer) => (
						<InfoCard key={offer.id} text={offer.offer} />
					))}
				</ScrollView>
			</View>
			{/* <View backgroundColor="#F5F7FA" marginTop={15}>
				<Text>Son başarılı </Text>
				<Text>Son başarılı </Text>
			</View> */}
		</View>
	);
};

export default Dashboard;

const styles = StyleSheet.create({
	wrapper: {
		height: Dimensions.get("window").height,
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
		width: Dimensions.get("window").width,
		marginBottom: 0,
	},
	redBorder: {
		borderColor: RED,
	},
});
