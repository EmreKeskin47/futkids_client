import React, { useEffect, useState } from "react";
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    ActivityIndicator,
    FlatList,
} from "react-native";
import { useSelector } from "react-redux";

const Item = ({ item, onPress, style }) => (
    <TouchableOpacity onPress={onPress} style={[styles.item, style]}>
        <View style={styles.title}>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.position}>{item.position}</Text>
        </View>
    </TouchableOpacity>
);

const VoteCard = (props) => {
    const { position } = props;
    const [loading, setLoading] = useState(false);
    const [players, setPlayers] = useState([]);
    const [selectedId, setSelectedId] = useState(null);

    useEffect(() => {
        setLoading(true);
        getOptions();
        if (playerCardList) {
            setLoading(false);
        }
    }, [position]);

    const playerCardList = useSelector(
        (state) => state.playerCardStore.playerCards
    );

    const getOptions = () => {
        setPlayers([]);
        playerCardList.forEach((player) => {
            if (player.position === position) {
                setPlayers((oldArray) => [...oldArray, player]);
            }
        });
    };

    const renderItem = ({ item }) => {
        const backgroundColor = item.id === selectedId ? "#6e3b6e" : "#f9c2ff";

        return (
            <Item
                item={item}
                onPress={() => {
                    setSelectedId(item.id);
                    props.playerSelected(item.playerID);
                }}
                style={{ backgroundColor }}
            />
        );
    };
    if (loading) {
        return (
            <View style={styles.container}>
                <ActivityIndicator size="large" />
            </View>
        );
    } else {
        return (
            <View style={styles.container}>
                <FlatList
                    data={players}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.playerID}
                    extraData={selectedId}
                />
            </View>
        );
    }
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 20,
    },
    item: {
        padding: 20,
        marginVertical: 10,
        marginHorizontal: 20,
        borderRadius: 5,
    },
    title: {
        justifyContent: "space-evenly",
        flexDirection: "row",
    },
    name: {
        fontSize: 20,
        fontFamily: "Avenir-Medium",
    },
    position: {
        fontSize: 20,
        fontFamily: "Avenir-Medium",
        color: "red",
    },
});

export default VoteCard;
