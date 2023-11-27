import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { Button, Text, IconButton } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Sound: React.FC = () => {
  const [frecuencia, setFrecuencia] = useState("");

  const handleButtonPress = (frequency: string) => {
    setFrecuencia(frequency);
  };

  const handleGuardarPress = () => {
    // Add logic to save the frequency or perform other actions
    console.log(`Frecuencia saved: ${frecuencia}`);
  };

  return (
    <View style={styles.container}>
        <View style={styles.containerTittle}>
            <Text>Frecuencia: {frecuencia}</Text>
        </View>
        <View style={styles.buttonRow}>
            <IconButton
            icon={() => <Icon name="music" size={30} color="#000" />}
            onPress={() => handleButtonPress("Frequency 1")}
            />
            <IconButton
            icon={() => <Icon name="music" size={30} color="#000" />}
            onPress={() => handleButtonPress("Frequency 2")}
            />
            <IconButton
            icon={() => <Icon name="music" size={30} color="#000" />}
            onPress={() => handleButtonPress("Frequency 3")}
            />
        </View>
        <View style={styles.buttonRow}>
            <IconButton
            icon={() => <Icon name="music" size={30} color="#000" />}
            onPress={() => handleButtonPress("Frequency 4")}
            />
            <IconButton
            icon={() => <Icon name="music" size={30} color="#000" />}
            onPress={() => handleButtonPress("Frequency 5")}
            />
            <IconButton
            icon={() => <Icon name="music" size={30} color="#000" />}
            onPress={() => handleButtonPress("Frequency 6")}
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

export default Sound;