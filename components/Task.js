import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const Task = (props) => {

	return (
		<View style={styles.item}>
			<View style={styles.itemLeft}>
				<View style={styles.square}></View>

				<Text style={styles.itemText}>{props.text}</Text>

			</View>
			<View style={styles.circular}>

			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	item: {
		backgroundColor: "#FFFFFF",
		padding: 15,
		borderRadius: 20,
		marginBottom: 10,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between"
	},

	itemLeft: {
		flexDirection: "row",
		alignItems: "center",
		felxWrap: "wrap"
	},

	square: {
		width: 24,
		height: 24,
		backgroundColor: "#55BCF6",
		opacity: 0.9,
		borderRadius: 10,
		marginRight: 12,
	},

	itemText: {
		maxWidth: "80%",
	},

	circular: {
		width: 15,
		height: 15,
		borderColor: "#55BCF6",
		borderWidth: 2,
		borderRadius: 30,
	}
});

export default Task;