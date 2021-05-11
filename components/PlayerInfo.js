import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const PlayerInfo = (props) => {
    const { name, position, overall, kitNumber, foot, age, image } =
        props.playerCard;

    return (
        <View style={styles.topContainer}>
            {image == "" ? (
                <Ionicons
                    name="person-circle-sharp"
                    style={styles.profilePictureIcon}
                />
            ) : (
                <Image source={{ uri: image }} style={styles.playerImage} />
            )}

            <View style={styles.column}>
                <View style={styles.columnInside}>
                    <Text style={styles.itemL}>İsim</Text>
                    <Text style={styles.itemR}>{name}</Text>
                </View>
                {/* <View style={styles.columnInside}>
          <Text style={styles.itemL}>Takım</Text>
          <Text style={styles.itemR}>Galatasaray</Text>
        </View> */}
                <View style={styles.columnInside}>
                    <Text style={styles.itemL}>Mevki</Text>
                    <Text style={styles.itemR}>{position}</Text>
                </View>
                <View style={styles.columnInside}>
                    <Text style={styles.itemL}>Numara</Text>
                    <Text style={styles.itemR}>{kitNumber}</Text>
                </View>
                <View style={styles.columnInside}>
                    <Text style={styles.itemL}>Güç</Text>
                    <Text style={styles.itemR}>{overall}</Text>
                </View>
                <View style={styles.columnInside}>
                    <Text style={styles.itemL}>Yaş</Text>
                    <Text style={styles.itemR}>{age}</Text>
                </View>
                <View style={styles.columnInside}>
                    <Text style={styles.itemL}>Ayak</Text>
                    <Text style={styles.itemR}>{foot}</Text>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
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
        height: 250,
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
        paddingVertical: 55,
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
    profilePictureIcon: {
        fontSize: 150,
        marginTop: 55,
    },
    playerImage: {
        width: 120,
        height: 120,
        borderRadius: 100,
        marginLeft: 15,
        marginTop: 25,
    },
});

export default PlayerInfo;
