import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';

import Logged from './pages/LoggedPage';
import Login from './pages/Login';
import Register from './pages/Register';

import { AuthProvider } from './contexts/AuthContext';
import EventDetailPage from './pages/EventDetailPage';
import EventHistoryPage from './pages/EventHistoryPage';
import EventRegisterPage from './pages/EventRegisterPage';

const Stack = createStackNavigator();

export default function App() {

    return (
        <NavigationContainer>
            <AuthProvider>
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
                                headerTitle: 'Cadastro',
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
                        <Stack.Screen 
                            name='EventHistoryPage' 
                            component={EventHistoryPage}
                            options={{
                                headerTitle: 'Histórico de eventos',
                                headerTransparent: true,
                                headerTintColor: '#FFF',
                            }}
                        />
                        <Stack.Screen 
                            name='EventDetailPage' 
                            component={EventDetailPage}
                            options={{
                                headerTitle: 'Detalhes do evento',
                                headerTransparent: true,
                                headerTintColor: '#FFF',
                            }}
                        />
                        <Stack.Screen 
                            name='EventRegisterPage' 
                            component={EventRegisterPage}
                            options={{
                                headerTitle: 'Cadastro de evento',
                                headerTransparent: true,
                                headerTintColor: '#FFF',
                            }}
                        />
                    </Stack.Navigator>
                    <StatusBar style='auto'/>
                </View>
            </AuthProvider>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
});