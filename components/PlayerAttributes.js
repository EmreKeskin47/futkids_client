import React, { useState, useCallback, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaViewStatusBar,
  StatusBar,
  Button,
  SafeAreaView,
} from "react-native";
import { AnimatedCircularProgress } from "react-native-circular-progress";

const PlayerAttributes = () => {
  return (
    <SafeAreaView style={styles.root}>
      <View style={styles.row}>
        <View style={styles.column}>
          <Text style={styles.itemL}>Pas</Text>
          <Text style={styles.itemR}>67</Text>
          <AnimatedCircularProgress
            size={40}
            width={8}
            fill={67}
            tintColor="#00e0ff"
            onAnimationComplete={() => console.log("onAnimationComplete")}
            backgroundColor="#3d5875"
          />
        </View>
      </View>
      <View style={styles.row}>
        <View style={styles.column}>
          <Text style={styles.itemL}>Sut</Text>
          <Text style={styles.itemR}>81</Text>
          <AnimatedCircularProgress
            size={40}
            width={8}
            fill={67}
            tintColor="#00e0ff"
            onAnimationComplete={() => console.log("onAnimationComplete")}
            backgroundColor="#3d5875"
          />
        </View>
      </View>
      <View style={styles.row}>
        <View style={styles.column}>
          <Text style={styles.itemL}>Fiz</Text>
          <Text style={styles.itemR}>86</Text>
          <AnimatedCircularProgress
            size={40}
            width={8}
            fill={81}
            tintColor="#00e0ff"
            onAnimationComplete={() => console.log("onAnimationComplete")}
            backgroundColor="#3d5875"
          />
        </View>
      </View>
      <View style={styles.row}>
        <View style={styles.column}>
          <Text style={styles.itemL}>Hiz</Text>
          <Text style={styles.itemR}>73</Text>
          <AnimatedCircularProgress
            size={40}
            width={8}
            fill={73}
            tintColor="#00e0ff"
            onAnimationComplete={() => console.log("onAnimationComplete")}
            backgroundColor="#3d5875"
          />
        </View>
      </View>
      <View style={styles.row}>
        <View style={styles.column}>
          <Text style={styles.itemL}>Def</Text>
          <Text style={styles.itemR}>41</Text>
          <AnimatedCircularProgress
            size={40}
            width={8}
            fill={41}
            tintColor="#00e0ff"
            onAnimationComplete={() => console.log("onAnimationComplete")}
            backgroundColor="#3d5875"
          />
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
  root: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-around",
    backgroundColor: "black",
    opacity: 0.7,
    borderRadius: 8,
  },
  bar: {
    backgroundColor: "white",
  },
  row: {
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
  },
  column: {
    height: 30,
    borderRadius: 8,
    flex: 1,
    margin: 20,
    justifyContent: "space-around",
    alignItems: "center",
    flexDirection: "row",
  },
  itemL: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },
  itemR: {
    fontSize: 20,
    fontWeight: "bold",
    color: "green",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    paddingVertical: 20,
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10,
  },
});

export default PlayerAttributes;
