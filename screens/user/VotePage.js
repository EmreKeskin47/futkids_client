import React, { useState } from "react";
import {
    Text,
    StyleSheet,
    SafeAreaView,
    TouchableOpacity,
    Alert,
} from "react-native";
import DropDownPicker from "react-native-dropdown-picker";
import { useDispatch } from "react-redux";
import VoteCard from "../../components/VoteCard";
import { weeklyVote } from "../../redux/actions/playerCard-action";

const VotePage = () => {
    const [position, setPosition] = useState("GK");
    const [selectedPlayer, setSelectedPlayer] = useState();
    const dispatch = useDispatch();

    const playerSelected = (id) => {
        setSelectedPlayer(id);
    };

    const clicked = () => {
        dispatch(weeklyVote(selectedPlayer, 1));
        Alert.alert(
            "Oy verdiginiz icin tesekkur ederiz",
            "Oyuncularimiz her hafta cok calisiyorlar ve sizin geri bildirimlerinizle daha iyi noktlara geleceklerine inaniyoruz.",
            [{ text: "OK" }],
            { cancelable: false }
        );
    };
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.heading}>
                Yas araligini girdiginiz oyuncular asagida goruntulenecektir.
                {"\n"}
                {"\n"}
                Bu hafta dikkatinizi ceken oyuncunun uzerine tiklayip, asagidaki
                gonder butonuna basarak, oyuncuya oy verebilirsiniz.
            </Text>
            <DropDownPicker
                items={[
                    { label: "GK", value: "GK" },
                    { label: "DEF", value: "DEF" },
                    { label: "MID", value: "MID" },
                    { label: "ATT", value: "ATT" },
                ]}
                defaultIndex={0}
                containerStyle={{ height: 50 }}
                onChangeItem={(item) => setPosition(item.value)}
                placeholder={"Lutfen bir pozisyon seçiniz"}
                style={styles.dropdown}
            />
            <VoteCard
                playerSelected={playerSelected}
                position={position}
                style={styles.card}
            />
            <TouchableOpacity onPress={clicked} style={styles.btn}>
                <Text style={styles.btnText}>Gonder</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    heading: {
        marginTop: 40,
        margin: 20,
        alignSelf: "center",
        color: "black",
        opacity: 0.8,
        fontWeight: "bold",
        fontSize: 20,
        fontFamily: "Avenir-Medium",
    },
    dropdown: {
        marginHorizontal: 20,
        fontFamily: "Avenir-Medium",
    },
    card: {},
    btn: {
        alignSelf: "center",
        marginTop: 20,
        backgroundColor: "#6e3b6e",
        height: 50,
        width: 100,
        justifyContent: "center",
        borderRadius: 5,
    },
    btnText: {
        fontWeight: "bold",
        fontSize: 20,
        alignSelf: "center",
        color: "white",
        fontFamily: "Avenir-Medium",
    },
});

export default VotePage;
