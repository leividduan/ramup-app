import React, { useState } from 'react';
import { Alert, Image, Pressable, SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native';
import { useNavigation } from "@react-navigation/native";

const logo = require("../assets/adaptive-icon.png");

export default function LoginPage() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigation = useNavigation();

    const handleLogin = () => {
        if (username && password) {
            navigation.navigate('Logged');
            setPassword("");
        } else {
            Alert.alert("Por favor, insira um nome de usuário e senha válidos.");
        }
    };

    const handleRegister = () => {
        navigation.navigate('Register');
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.content}>
                <Image source={logo} style={styles.image} resizeMode='contain' />
                <View style={styles.inputView}>
                    <TextInput
                        style={styles.input}
                        placeholder='E-mail ou Usuário'
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
                </View>
                <View style={styles.rememberView}>
                    <Pressable style={styles.forgotBtn}>
                        <Text style={styles.forgotBtnText}>Esqueceu a senha?</Text>
                    </Pressable>
                </View>
                <View style={styles.registerView}>
                    <Text style={styles.registerText}>{`Não possui uma conta? `}</Text>
                    <Pressable style={styles.registerBtn} onPress={handleRegister}>
                        <Text style={styles.registerBtnText}>Cadastre-se!</Text>
                    </Pressable>
                </View>
                <View style={styles.loginView}>
                    <Pressable style={styles.button} onPress={handleLogin}>
                        <Text style={styles.buttonText}>LOGIN</Text>
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

    forgotBtn: {
        marginTop: -20,
        width: 280,
        height: 20,
        alignSelf: "center",
        justifyContent: "center",
    },
    forgotBtnText: {
        color: "#fff",
        fontSize: 12,
        alignSelf: "center",
        textDecorationLine: "underline",
    },

    registerView: {
        justifyContent: "center",
        flexDirection: "row",
    },
    registerText: {
        color: "#fff",
    },
    registerBtn: {},
    registerBtnText: {
        color: "#fff",
        fontWeight: 'bold',
        textDecorationLine: "underline",
    },


    button: {
        backgroundColor: "#0BCE83",
        borderRadius: 7,
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