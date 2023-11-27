import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { useTheme } from "react-native-paper";

import Lights from './Lights';
import Sound from './Sound';
import Alarm from './Alarm';
import Home from './Home';

const Tab = createMaterialBottomTabNavigator();

const Menu: React.FC = () => {

    return (
        <Tab.Navigator style={{backgroundColor: "#fff"}}>
        <Tab.Screen
            name="Home"
            component={Home}
            options={{
            tabBarLabel: "Home",
            tabBarIcon: () => (
                <MaterialCommunityIcons 
                    name="home" 
                    color="#000" 
                    size={24} 
                />
            ),
            }}
        />
        <Tab.Screen
            name="Sonido"
            component={Sound}
            options={{
            tabBarLabel: "Conf. Sonido",
            tabBarIcon: () => (
                <MaterialCommunityIcons 
                    name="music" 
                    color="#000" 
                    size={24} 
                />
            ),
            }}
        />
        <Tab.Screen
            name="Luces"
            component={Lights}
            options={{
            tabBarLabel: "Conf. Luces",
            tabBarIcon: () => (
                <MaterialCommunityIcons
                name="alarm-light"
                color="#000"
                size={24}
                />
            ),
            }}
        />
        <Tab.Screen
            name="Horario"
            component={Alarm}
            options={{
            tabBarLabel: "Conf. Horario",
            tabBarIcon: () => (
                <MaterialCommunityIcons
                    name="clock"
                    color="#000"
                    size={24}
                />
            ),
            }}
        />
        </Tab.Navigator>
    );
}

export default Menu;