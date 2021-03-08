import React from "react";
import { View } from "react-native";
import { AnimatedCircularProgress } from "react-native-circular-progress";

const CustomProgressBar = (props) => {
    const { progress } = props;
    if (progress) {
        return (
            <AnimatedCircularProgress
                size={40}
                width={8}
                fill={progress}
                tintColor="#00e0ff"
                backgroundColor="#3d5875"
            />
        );
    } else {
        return <View></View>;
    }
};

export default CustomProgressBar;
