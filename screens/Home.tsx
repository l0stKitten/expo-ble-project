import React from "react";
import { View, StyleSheet } from "react-native";
import { Text, Button } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Home: React.FC = () => {
    const frecuencia = "alguna frecuencia";
    const color = "blue";
    const inicio = "10:00PM";
    const fin = "5:00AM";
    const data = [
        { icon: 'music', text: ` ${frecuencia}` },
        { icon: 'alarm-light', text: `${color}` },
        { icon: 'clock', text: `${inicio} - ${fin}` },
    ];

    return (
        <View style={styles.container}>
        {data.map((item, index) => (
            <View key={index} style={styles.row}>
            <View style={styles.column1}>
                <Icon name={item.icon} size={30} color="#000" />
            </View>
            <View style={styles.column}>
                <Text>{item.text}</Text>
            </View>
            </View>
        ))}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    column: {
        flex: 1,
        alignItems: 'center',
    },
    column1: {
        flex: 1,
        alignItems: 'center',
        alignSelf: 'flex-end'
    },
});

export default Home;