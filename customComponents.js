import React from 'react';
import styles from './styles';

import {
    Button,
    TouchableOpacity,
    TouchableHighlight,
    Pressable,
    Text,
    StyleSheet,
    Alert
} from 'react-native';

function buttonPressAction({ setTitle, buttonTitle, onPress }) {
    Alert.alert(
        "Button Pressed",
        `You pressed the ${buttonTitle} button!`,
        [
            {
                text: "OK",
                onPress: () => {
                    setTitle("Button Pressed");
                    onPress && onPress();
                }
            }
        ]
    );
}

// Custom Button
export const CustomButton = ({ onPress, title, setTitle }) => {
    const handlePress = () => {
        buttonPressAction({ setTitle, buttonTitle: "normal", onPress })
    };

    return (
        <Button title={title} onPress={handlePress} />
    );
};

// Custom TouchableOpacity Button
export const CustomTouchableOpacityButton = ({ onPress, title, setTitle }) => {
    const handlePress = () => {
        buttonPressAction({ setTitle, buttonTitle: "TouchableOpacity", onPress })
    };

    return (
        <TouchableOpacity style={styles.button} onPress={handlePress}>
            <Text style={styles.buttonText}>{title}</Text>
        </TouchableOpacity>
    );
};

// Custom TouchableHighlight Button
export const CustomTouchableHighlightButton = ({ onPress, title, setTitle }) => {
    const handlePress = () => {
        buttonPressAction({ setTitle, buttonTitle: "TouchableHighlight", onPress })
    };

    return (
        <TouchableHighlight style={styles.button} onPress={handlePress}>
            <Text style={styles.buttonText}>{title}</Text>
        </TouchableHighlight>
    );
};

// Custom Pressable Button
export const CustomPressableButton = ({ onPress, title, setTitle }) => {
    const handlePress = () => {
        buttonPressAction({ setTitle, buttonTitle: "Pressable", onPress })
    };

    return (
        <Pressable style={styles.pressableButton} onPress={handlePress}>
            <Text style={styles.buttonText}>{title}</Text>
        </Pressable>
    );
};
