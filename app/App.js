import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './pages/Login';
import Register from './pages/Register';
import Logged from './pages/LoggedPage';

const Stack = createStackNavigator();

export default function App() {

    return (
        <NavigationContainer>
            <View style={styles.container}>
                <Stack.Navigator initialRouteName='Login'>
                    <Stack.Screen 
                        name='Login' 
                        component={Login}
                        options={{
                            headerShown: false,
                        }}
                    />
                    <Stack.Screen 
                        name='Register' 
                        component={Register} 
                        options={{
                            headerTitle: '',
                            headerTransparent: true,
                            headerTintColor: '#FFF',
                        }}
                    />
                    <Stack.Screen 
                        name='Logged' 
                        component={Logged} 
                        options={{
                            headerShown: false,
                        }}
                    />
                </Stack.Navigator>
                <StatusBar style='auto'/>
            </View>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
});