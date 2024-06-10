import React from 'react';
import { SafeAreaView, View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from "@react-navigation/native";

export default function AccountPage() {
    const navigation = useNavigation();
    const handleEventHistory = () => {
        navigation.navigate('EventHistoryPage');
    };

    const handleRegisterEvent = () => {
        navigation.navigate('EventRegisterPage');
    };

    const handleLogout = () => {
        navigation.navigate('Login');
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.buttonList}>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity onPress={handleEventHistory} style={styles.button}>
                        <Text style={styles.buttonText}>Histórico de eventos</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.separator} />
                <View style={styles.buttonContainer}>
                    <TouchableOpacity onPress={handleRegisterEvent} style={styles.button}>
                        <Text style={styles.buttonText}>Cadastro de evento</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.separator} />
                <View style={styles.buttonContainer}>
                    <TouchableOpacity onPress={handleLogout} style={styles.button}>
                        <Text style={styles.buttonText}>Sair</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#7203FF',
    },
    buttonList: {
        flex: 1,
        justifyContent: 'flex-start',
        margin: 20,
    },
    buttonContainer: {
        marginVertical: 5,
    },
    button: {
        alignItems: 'flex-start',
        padding: 10
    },
    buttonText: {
        fontSize: 16,
        color: '#ffffff'
    },
    separator: {
        height: 1,
        backgroundColor: '#ffffff',
        marginVertical: 5,
    },
});
