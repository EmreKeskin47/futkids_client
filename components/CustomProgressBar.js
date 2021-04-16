import { Fontisto } from "@expo/vector-icons";
import React from "react";
import { View, Text } from "react-native";
import { AnimatedCircularProgress } from "react-native-circular-progress";

const CustomProgressBar = (props) => {
    const { progress } = props;
    if (progress) {
        return (
            <AnimatedCircularProgress
                size={200}
                width={50}
                fill={progress}
                tintColor={
                    progress < 50
                        ? "#ff0000"
                        : progress > 75
                        ? "#00ff7f"
                        : "orange"
                }
                backgroundColor="#3d5875"
            >
                {(fill) => (
                    <Text style={{ color: "white", fontSize: 26 }}>
                        {progress}
                    </Text>
                )}
            </AnimatedCircularProgress>
        );
    } else {
        return <View></View>;
    }
};

export default CustomProgressBar;
