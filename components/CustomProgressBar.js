import React from "react";
import { AnimatedCircularProgress } from "react-native-circular-progress";

const CustomProgressBar = (props) => {
    const { progress } = props;
    return (
        <AnimatedCircularProgress
            size={40}
            width={8}
            fill={progress}
            tintColor="#00e0ff"
            backgroundColor="#3d5875"
        />
    );
};

export default CustomProgressBar;
