import React, { useState } from 'react';
import { Alert, Image, Pressable, SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native';
import { useNavigation } from "@react-navigation/native";
const logo = require("../assets/adaptive-icon.png");

export default function RegisterPage () {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPass, setConfirmPass] = useState("");
    const [email, setEmail] = useState("");
    const navigation = useNavigation();

    const register = () => {
        if (username && email && password && password === confirmPass) {
            // Envia informacoes pra API de cadastro
            navigation.navigate('Login');
        } else {
            Alert.alert("Por favor, insira um nome de usuário e senha válidos.");
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.content}>
                <Image source={logo} style={styles.image} resizeMode='contain' />
                <View style={styles.inputView}>
                    <TextInput
                        style={styles.input}
                        placeholder='E-mail'
                        value={email}
                        onChangeText={setEmail}
                        autoCorrect={false}
                        autoCapitalize='none'
                    />
                    <TextInput
                        style={styles.input}
                        placeholder='Usuário'
                        value={username}
                        onChangeText={setUsername}
                        autoCorrect={false}
                        autoCapitalize='none'
                    />
                    <TextInput
                        style={styles.input}
                        placeholder='Senha'
                        secureTextEntry
                        value={password}
                        onChangeText={setPassword}
                        autoCorrect={false}
                        autoCapitalize='none'
                    />
                    <TextInput
                        style={styles.input}
                        placeholder='Confirmar Senha'
                        secureTextEntry
                        value={confirmPass}
                        onChangeText={setConfirmPass}
                        autoCorrect={false}
                        autoCapitalize='none'
                    />
                    
                </View>
                <View style={styles.buttonView}>
                    <Pressable style={styles.button} onPress={register}>
                        <Text style={styles.buttonText}>Cadastrar</Text>
                    </Pressable>
                </View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#7203FF',
        alignItems: 'center',
        justifyContent: 'center',
    },
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'stretch',
    },
    image: {
        height: 160,
        width: 170,
        alignSelf: 'center', // Align the image in the center horizontally
        marginBottom: 50
    },
    inputView: {
        width: "100vw",
        marginBottom: 20,
        paddingHorizontal: 20, // Add padding to the sides
    },
    input: {
        height: 50,
        paddingHorizontal: 20,
        borderColor: "#7203FF",
        borderWidth: 1,
        borderRadius: 7,
        backgroundColor: "#fff",
        marginBottom: 15
    },
    forgetText: {
        fontSize: 11,
        color: "#fff",
        fontWeight: "bold",
        alignSelf: "center"
    },
    button: {
        backgroundColor: "#0BCE83",
        borderColor: "gray",
        alignItems: "center",
        justifyContent: "center",
        alignContent: "center",
        alignSelf: "center",
        height: 50, // Set the height to match the inputs
        paddingHorizontal: 20, // Adjust the padding to match the inputs
        marginTop: 15, // Space between the inputs and the button
        width: '80%' // Make the button occupy 80% of the width
    },
    buttonText: {
        color: "#fff",
        fontSize: 18,
        fontWeight: "bold"
    },
    footerText: {
        textAlign: "center",
        alignItems: "center",
        justifyContent: "center",
        color: "#fff",
    },
    bottomContainer: {
        alignItems: 'center',
        marginBottom: 10, // Adjust the space between the inputs and the bottom container
    }
});