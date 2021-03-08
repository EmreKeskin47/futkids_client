import React, { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Card, CardItem } from "native-base";
import Colors from "../constants/Colors";
import PlayerSummary from "../components/PlayerSummary";
import { useDispatch } from "react-redux";
import * as playerAttributeActions from "../redux/actions/playerAttribute-action";

const PlayerCard = (props) => {
    let tempRenderCondition = false;

    if (props.attr) {
        tempRenderCondition = true;
    }

    const { id, playerName, playerPosition, overall, kitNumber } = props;
    return (
        <View>
            <Card style={{ marginTop: 50 }}>
                <CardItem header bordered style={styles.cardHeader}>
                    <Text style={styles.subheading}>{playerName}</Text>
                    <Text style={styles.subheading}>{playerPosition}</Text>
                    <Text style={styles.subheading}>{overall}</Text>
                </CardItem>

                {tempRenderCondition ? (
                    <CardItem>
                        <PlayerSummary attr={props.attr} style={styles.attrs} />
                    </CardItem>
                ) : (
                    <CardItem>
                        <Text></Text>
                    </CardItem>
                )}
            </Card>
        </View>
    );
};

const styles = StyleSheet.create({
    attrs: {
        height: 500,
    },
    subheading: {
        fontSize: 20,
        fontWeight: "900",
        color: "#fff",
    },
    cardHeader: {
        backgroundColor: Colors.primary,
        flexDirection: "row",
        justifyContent: "space-around",
        marginHorizontal: 20,
        borderRadius: 8,
        marginTop: 10,
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
