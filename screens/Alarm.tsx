import React, { useState, Fragment, useRef } from "react";
import { Button, Text } from 'react-native-paper';
import { View } from 'react-native';
import { StyleSheet } from "react-native";
import { TimePickerModal } from 'react-native-paper-dates';


const Alarm: React.FC = () => {
    const [visibleInicio, setVisibleInicio] = useState(false);
    const [visibleFin, setVisibleFin] = useState(false);
    const [selectedTimeInicio, setSelectedTimeInicio] = useState<{ hours: number; minutes: number }>({ hours: 0, minutes: 0 });
    const [selectedTimeFin, setSelectedTimeFin] = useState<{ hours: number; minutes: number }>({ hours: 0, minutes: 0 });
  
    const handleGuardarPress = () => {
      console.log(`Color saved: ${selectedTimeInicio.hours}:${selectedTimeInicio.minutes}`);
      console.log(`Color saved: ${selectedTimeFin.hours}:${selectedTimeFin.minutes}`);
    };
  
    const onDismissInicio = () => {
      setVisibleInicio(false);
    };
  
    const onConfirmInicio = ({ hours, minutes }) => {
      setVisibleInicio(false);
      setSelectedTimeInicio({ hours, minutes });
      console.log("Inicio:", { hours, minutes });
    };
  
    const onDismissFin = () => {
      setVisibleFin(false);
    };
  
    const onConfirmFin = ({ hours, minutes }) => {
      setVisibleFin(false);
      setSelectedTimeFin({ hours, minutes });
      console.log("Fin:", { hours, minutes });
    };
  
    return (
      <View style={styles.container}>
        <View style={styles.buttonRow}>
            <Text style={{marginRight: 12}}>Hora Inicio: {selectedTimeInicio.hours}:{selectedTimeInicio.minutes}</Text>
            <Button onPress={() => setVisibleInicio(true)} uppercase={false} mode="outlined" >
                Inicio
            </Button>
            <TimePickerModal
                visible={visibleInicio}
                onDismiss={onDismissInicio}
                onConfirm={onConfirmInicio}
                hours={selectedTimeInicio.hours}
                minutes={selectedTimeInicio.minutes}
            />
        </View>
        <View style={styles.buttonRow}>
            <Text style={{marginRight: 12}}>Hora Fin: {selectedTimeFin.hours}:{selectedTimeFin.minutes}</Text>
            <Button onPress={() => setVisibleFin(true)} uppercase={false} mode="outlined">
                Fin
            </Button>
            <TimePickerModal
                visible={visibleFin}
                onDismiss={onDismissFin}
                onConfirm={onConfirmFin}
                hours={selectedTimeFin.hours}
                minutes={selectedTimeFin.minutes}
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
        alignItems: 'center', // Align items horizontally
        marginBottom: 20,
    },
    guardarButton: {
        marginTop: 20,
    },
    containerButton: {
        justifyContent: 'flex-end',
        margin: 16,
        padding: 16,
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
    },
});
  
export default Alarm;