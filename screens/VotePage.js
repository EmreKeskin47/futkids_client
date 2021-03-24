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
import VoteCard from "../components/VoteCard";
import { weeklyVote } from "../redux/actions/playerCard-action";
import HeaderButton from "../components/HeaderButton";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

const VotePage = () => {
    const [position, setPosition] = useState("");
    const [selectedPlayer, setSelectedPlayer] = useState();
    const dispatch = useDispatch();

    const playerSelected = (id) => {
        setSelectedPlayer(id);
    };

    const clicked = () => {
        dispatch(weeklyVote(selectedPlayer, 1));
        Alert.alert(
            "Oy verdiginiz icin tesekkur ederiz",
            "Oyuncularimiz her hafta cok calisiyorlar ve sizin geri bildirimlerinizle daha iyi noktalara geleceklerine inaniyoruz.",
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
                <Text style={styles.btnText}>Gönder</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
};

export const screenOptions = (navData) => {
    return {
        headerTitle: "Oy Ver",
        headerLeft: () => (
            <HeaderButtons HeaderButtonComponent={HeaderButton}>
                <Item
                    title="Menu"
                    iconName={
                        Platform.OS === "android" ? "md-menu" : "ios-menu"
                    }
                    onPress={() => {
                        navData.navigation.toggleDrawer();
                    }}
                />
            </HeaderButtons>
        ),
    };
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
        fontSize: RFPercentage(2),
        fontFamily: "Avenir-Medium",
    },
    dropdown: {
        marginHorizontal: 20,
        fontFamily: "Avenir-Medium",
    },
    card: {},
    btn: {
        alignSelf: "center",
        backgroundColor: "#6e3b6e",
        margin: 10,
        height: 50,
        width: 100,
        justifyContent: "center",
        borderRadius: 5,
    },
    btnText: {
        fontWeight: "bold",
        fontSize: RFPercentage(3),
        alignSelf: "center",
        color: "white",
        fontFamily: "Avenir-Medium",
    },
});

export default VotePage;
