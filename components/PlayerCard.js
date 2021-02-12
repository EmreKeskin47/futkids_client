import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Card, CardItem } from "native-base";
import Colors from "../constants/Colors";

const PlayerCard = (props) => {
    const { id, playerName, playerPosition, overall } = props;
    return (
        <View>
            <Card style={{ marginTop: 10 }}>
                <CardItem header bordered style={styles.cardHeader}>
                    <Text style={styles.subheading}>{playerName}</Text>
                </CardItem>
                <CardItem>
                    <View>
                        <Text
                            style={{
                                fontSize: 18,
                                fontWeight: "bold",
                                marginBottom: 10,
                            }}
                        >
                            {overall}
                        </Text>
                        <Text>{playerPosition}</Text>
                    </View>
                </CardItem>
                <CardItem footer bordered>
                    <View style={styles.footer}>
                        <Text>{id}</Text>
                    </View>
                </CardItem>
            </Card>
        </View>
    );
};

const styles = StyleSheet.create({
    subheading: {
        fontSize: 20,
        fontWeight: "900",
        color: "#fff",
    },
    cardHeader: {
        backgroundColor: Colors.primary,
    },
    footer: {
        width: "100%",
        paddingVertical: 4,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
});

export default PlayerCard;
