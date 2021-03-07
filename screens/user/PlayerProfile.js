import React, { useEffect } from "react";
import {
    View,
    Text,
    StyleSheet,
    ImageBackground,
    ScrollView,
} from "react-native";
import PlayerAttributes from "../../components/PlayerAttributes";
import PlayerInfo from "../../components/PlayerInfo";
import PlayerStats from "../../components/PlayerStats";
//redux
import { useDispatch, useSelector } from "react-redux";
import * as playerCardActions from "../../redux/actions/playerCard-action";
import * as playerAttributeActions from "../../redux/actions/playerAttribute-action";
import * as playerStaticsActions from "../../redux/actions/playerStatistics-action";
import * as playerDetailsActions from "../../redux/actions/playerDetails-action";

const PlayerProfilePage = ({ route, navigation }) => {
    const image = require("../../assets/background-image.jpg");
    const { id } = route.params;
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(playerCardActions.getPlayerCardInfo(id));
        dispatch(playerAttributeActions.fetchPlayerAttributes(id));
        dispatch(playerStaticsActions.fetchPlayerStatistics(id));
    }, [dispatch]);

    const playerCard = useSelector(
        (state) => state.playerCardStore.selectedPlayerCard
    );

    const attr = useSelector(
        (state) => state.playerAttributeStore.selectedPlayerAttribute
    );

    const stats = useSelector(
        (state) => state.playerStatisticsStore.selectedPlayerStatistics
    );

    if (!playerCard || !attr || !stats) {
        return (
            <View style={styles.notFound}>
                <Text>No Player Selected</Text>
            </View>
        );
    } else {
        const { name, position, overall, kitNumber, foot, age } = playerCard;

        const {
            pace,
            shooting,
            passing,
            dribbling,
            defending,
            physical,
            goalKeeper,
        } = attr;

        const {
            goals,
            assists,
            red,
            yellow,
            motm,
            cleanSheet,
            form,
            playedMatches,
        } = stats;

        return (
            <View style={styles.root}>
                <ScrollView>
                    <ImageBackground source={image} style={styles.image}>
                        <PlayerInfo
                            name={name}
                            position={position}
                            overall={overall}
                            kitNumber={kitNumber}
                            age={age}
                            foot={foot}
                        />
                        <View style={styles.surround}>
                            <PlayerAttributes
                                pace={pace}
                                shooting={shooting}
                                passing={passing}
                                dribbling={dribbling}
                                defending={defending}
                                physical={physical}
                                goalKeeper={goalKeeper}
                            />
                            <PlayerStats
                                goals={goals}
                                assists={assists}
                                red={red}
                                yellow={yellow}
                                motm={motm}
                                cleanSheet={cleanSheet}
                                form={form}
                                playedMatches={playedMatches}
                            />
                        </View>
                    </ImageBackground>
                </ScrollView>
            </View>
        );
    }
};

const styles = StyleSheet.create({
    root: {
        flex: 1,
        justifyContent: "center",
    },
    notFound: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    surround: {
        height: 600,
        marginTop: 40,
        marginHorizontal: 20,
    },
    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center",
    },
    topContainer: {
        justifyContent: "space-around",
        flexDirection: "row",
        marginTop: 50,
    },
    column: {
        height: 170,
        borderRadius: 8,
        backgroundColor: "black",
        opacity: 0.7,
        flex: 1,
        margin: 20,
        justifyContent: "space-around",
    },
    columnInside: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    itemL: {
        fontSize: 20,
        fontWeight: "bold",
        color: "white",
        marginLeft: 10,
    },
    itemR: {
        fontSize: 20,
        fontWeight: "bold",
        color: "yellow",
        marginRight: 10,
    },
    itemM: {
        fontSize: 20,
        fontWeight: "bold",
        color: "white",
    },
    profilePicture: {
        height: 200,
        width: 150,
    },
});

{
    /*
    dispatch(playerDetailsActions.fetchPlayerDetails(tempID));

    const details = useSelector(
        (state) => state.playerDetailsStore.selectedPlayerDetails
    
    );

        const {
            phone,
            email,
            height,
            weight,
            playerCardId,
            attributesId,
            statisticsId,
        } = details;

        <PlayerInfo
                            name={name}
                            position={position}
                            overall={overall}
                            kitNumber={kitNumber}
                            weight={weight}
                            height={height}
                            age={age}
                            foot={foot}
                        />

        

*/
}
export default PlayerProfilePage;
