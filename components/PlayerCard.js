import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Card, CardItem } from "native-base";
import Colors from "../constants/Colors";
import PlayerSummary from "../components/PlayerSummary";
import { useDispatch, useSelector } from "react-redux";
import * as playerAttributeActions from "../redux/actions/playerAttribute-action";

const PlayerCard = (props) => {
    const tempID = "12";
    let tempRenderCondition = false;
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(playerAttributeActions.fetchPlayerAttributes(tempID));
    }, [dispatch]);
    const attr = useSelector(
        (state) => state.playerAttributeStore.selectedPlayerAttribute
    );
    if (attr) {
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
                        <PlayerSummary
                            pace={attr.pace}
                            shooting={attr.shooting}
                            passing={attr.passing}
                            dribbling={attr.dribbling}
                            defending={attr.defending}
                            physical={attr.physical}
                            goalKeeper={attr.goalKeeper}
                            style={styles.attrs}
                        />
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

{
    /**
    
 */
}

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
