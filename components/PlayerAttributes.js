import React, { useEffect } from "react";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import PlayerForm from "../components/PlayerForm";
import * as playerActions from "../store/players-action";

const PlayerAttributes = () => {

    return (    
        <SafeAreaView style={styles.root}>
            
                <View style={styles.row}>
                    <View style={styles.column}>
                        <Text style={styles.itemL}>Pas</Text>
                        <Text style={styles.itemR}>67</Text>
                    </View>
                </View>
                <View style={styles.row}>
                    <View style={styles.column}>
                        <Text style={styles.itemL}>Sut</Text>
                        <Text style={styles.itemR}>81</Text>
                    </View>
                </View>
                <View style={styles.row}>
                    <View style={styles.column}>
                        <Text style={styles.itemL}>Fiz</Text>
                        <Text style={styles.itemR}>86</Text>
                    </View>
                </View>
                <View style={styles.row}>
                    <View style={styles.column}>
                        <Text style={styles.itemL}>Hiz</Text>
                        <Text style={styles.itemR}>73</Text>
                    </View>
                </View>
                <View style={styles.row}>
                    <View style={styles.column}>
                        <Text style={styles.itemL}>Def</Text>
                        <Text style={styles.itemR}>41</Text>
                    </View>
                </View>

                <View style={styles.row}>
                    <View style={styles.column}>
                        <Text style={styles.itemL}>Yas</Text>
                        <Text style={styles.itemR}>16</Text>
                    </View>
                    <View style={styles.column}>
                        <Text style={styles.itemL}>Ayak</Text>
                        <Text style={styles.itemR}>S</Text>
                    </View>
                </View>
                <View style={styles.row}>
                    <View style={styles.column}>
                        <Text style={styles.itemL}>Boy</Text>
                        <Text style={styles.itemR}>1.79</Text>
                    </View>
                    <View style={styles.column}>
                        <Text style={styles.itemL}>Uyruk</Text>
                        <Text style={styles.itemR}>tr</Text>
                    </View>
                </View>
            
          </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    root : {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-around',   
    },
    row: {
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center'
    },
    column: {
        height: 30,
        borderRadius: 8,
        backgroundColor: 'black',
        opacity: 0.5,
        flex: 1,
        margin: 20,
        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection: 'row'
    },
    itemL: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white'
    },
    itemR: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'red'
    }
});

export default PlayerAttributes;