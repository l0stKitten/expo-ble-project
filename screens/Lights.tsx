import React, { useState, Fragment, useRef } from "react";
import { Button, Text, IconButton } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { View } from 'react-native';
import { StyleSheet } from "react-native";


const Lights: React.FC = () => {
    const [color, setColor] = useState("");

    const handleButtonPress = (color: string) => {
        setColor(color);
    };

    const handleGuardarPress = () => {
        // Add logic to save the frequency or perform other actions
        console.log(`Color saved: ${color}`);
    };

    return (
        <View style={styles.container}>
            <View style={styles.containerTittle}>
                <Text>Color: {color}</Text>
            </View>
            <View style={styles.buttonRow}>
                <IconButton
                icon={() => <Icon name="gamepad-circle" size={30} color="#F40952" />}
                onPress={() => handleButtonPress("rgb(244, 9, 82)")}
                />
                <IconButton
                icon={() => <Icon name="gamepad-circle" size={30} color="#FFBE1C" />}
                onPress={() => handleButtonPress("rgb(255, 190, 28)")}
                />
                <IconButton
                icon={() => <Icon name="gamepad-circle" size={30} color="#28D2CD" />}
                onPress={() => handleButtonPress("rgb(40, 210, 205)")}
                />
            </View>
            <View style={styles.buttonRow}>
                <IconButton
                icon={() => <Icon name="gamepad-circle" size={30} color="#00E676" />}
                onPress={() => handleButtonPress("rgb(0, 230, 118)")}
                />
                <IconButton
                icon={() => <Icon name="gamepad-circle" size={30} color="#AC20EE" />}
                onPress={() => handleButtonPress("rgb(172, 32, 238)")}
                />
                <IconButton
                icon={() => <Icon name="gamepad-circle" size={30} color="#3C4EF6" />}
                onPress={() => handleButtonPress("rgb(60, 78, 246)")}
                />
            </View>
            <View style={styles.containerButton}>
                <Button style={styles.guardarButton} onPress={handleGuardarPress}>
                    Guardar
                </Button>
            </View>
        
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    guardarButton: {
        marginTop: 20,
    },
    containerButton: {
        justifyContent: 'flex-end',
        margin: 16,
        padding:16,
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
    },
    containerTittle: {
        justifyContent: 'flex-start',
        alignItems:'center',
        margin: 16,
        padding:16,
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
    },
});

export default Lights;