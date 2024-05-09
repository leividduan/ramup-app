import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

//Pages
import Map from './Map';
import Account from './Account';
import SearchEvents from './SearchEvents';

//Icons
import LayersIcon from '../components/layersIcon';
import HomeIcon from '../components/homeIcon';
import AccountIcon from '../components/accountIcon';

const Tab = createBottomTabNavigator();

export default function Logged() {

    return (
        <Tab.Navigator 
            initialRouteName='Map'
            screenOptions={{
                tabBarActiveTintColor: '#7203FF',
                tabBarInactiveTintColor: '#808080',
                tabBarShowLabel: false,
            }}
        >
            <Tab.Screen 
                name='SearchEvents' 
                component={SearchEvents}
                options={{
                    tabBarIcon: ({color, size}) => (
                        <LayersIcon color={color} height={size} width={size} />
                    ),
                    headerShown: false,
                }}
            />
            <Tab.Screen 
                name='Map' 
                component={Map}
                options={{
                    tabBarIcon: ({color, size}) => (
                        <HomeIcon color={color} height={size} width={size} />
                    ),
                    headerShown: false,
                }}
            />
            <Tab.Screen 
                name='Account' 
                component={Account}
                options={{
                    tabBarIcon: ({color, size}) => (
                        <AccountIcon color={color} height={size} width={size} />
                    ),
                    headerShown: false,
                }}
            />
        </Tab.Navigator>
    );
}