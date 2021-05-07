import React from "react";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import CustomProgressBar from "./CustomProgressBar";
import Carousel from "react-native-carousel-view";

const PlayerAttributes = (props) => {
    const {
        pace,
        shooting,
        passing,
        dribbling,
        defending,
        physical,
        goalKeeper,
    } = props.attr;

    return (
        <SafeAreaView style={styles.root}>
            <Carousel
                width={375}
                height={300}
                delay={2000}
                indicatorSize={20}
                indicatorColor="yellow"
                height={350}
            >
                <View style={styles.row}>
                    <View>
                        <Text style={styles.itemL}>Hız</Text>
                        <CustomProgressBar progress={pace} />
                    </View>
                </View>
                <View style={styles.row}>
                    <View>
                        <Text style={styles.itemL}>Şut</Text>
                        <CustomProgressBar progress={shooting} />
                    </View>
                </View>
                <View style={styles.row}>
                    <View>
                        <Text style={styles.itemL}>Paslaşma</Text>
                        <CustomProgressBar progress={passing} />
                    </View>
                </View>
                <View style={styles.row}>
                    <View>
                        <Text style={styles.itemL}>Top Sürme</Text>
                        <CustomProgressBar progress={dribbling} />
                    </View>
                </View>

                <View style={styles.row}>
                    <View>
                        <Text style={styles.itemL}>Defans</Text>
                        <CustomProgressBar progress={defending} />
                    </View>
                </View>
                <View style={styles.row}>
                    <View>
                        <Text style={styles.itemL}>Fiziksel</Text>
                        <CustomProgressBar progress={physical} />
                    </View>
                </View>
                <View style={styles.row}>
                    <View>
                        <Text style={styles.itemL}>Kalecilik</Text>
                        <CustomProgressBar progress={goalKeeper} />
                    </View>
                </View>
            </Carousel>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    root: {
        flex: 1,
        alignItems: "center",
        alignContent: "center",
        backgroundColor: "black",
        opacity: 0.7,
        borderRadius: 8,
        marginHorizontal: 20,
    },
    row: {
        flexDirection: "row",
        justifyContent: "space-around",
        paddingBottom: 30,
        marginBottom: 0,
    },

    itemL: {
        fontSize: 22,
        fontWeight: "bold",
        color: "white",
        textAlign: "center",
        paddingVertical: 20,
    },
});

export default PlayerAttributes;
