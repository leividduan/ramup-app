import React, { useState } from 'react';
import { Alert, Pressable, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useNavigation } from "@react-navigation/native";

export default function EventRegisterPage() {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [date, setDate] = useState("");
    const [duration, setDuration] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [country, setCountry] = useState("");
    const [zipCode, setZipCode] = useState("");
    const [latitude, setLatitude] = useState("");
    const [longitude, setLongitude] = useState("");
    const [isPrivate, setIsPrivate] = useState(false);
    const [isAdultsOnly, setIsAdultsOnly] = useState(false);

    const navigation = useNavigation();

    const register = () => {
        if (name && description && date && duration && city && state && country && zipCode && latitude && longitude) {
            // Verifica a formatação da data
            const datePattern = /^\d{2}\/\d{2}\/\d{4}$/;
            if (!date.match(datePattern)) {
                return Alert.alert("Formato de data inválido. Utilize o formato DD/MM/AAAA.");
            }
    
            // Verifica a formatação da duração
            const durationPattern = /^\d{1,2}:\d{2}$/;
            if (!duration.match(durationPattern)) {
                return Alert.alert("Formato de duração inválido. Utilize o formato HH:mm.");
            }
    
            // Verifica a formatação do CEP
            const zipCodePattern = /^\d{5}-\d{3}$/;
            if (!zipCode.match(zipCodePattern)) {
                return Alert.alert("Formato de CEP inválido. Utilize o formato XXXXX-XXX.");
            }
    
            // Verifica a formatação da latitude e longitude
            const latitudePattern = /^-?([1-8]?[1-9]|[1-9]0)\.{1}\d{1,6}/;
            const longitudePattern = /^-?([1]?[0-7]?[0-9]|[1]?[0-7]?[0-9]|180)\.{1}\d{1,6}/;
            if (!latitude.match(latitudePattern) || !longitude.match(longitudePattern)) {
                return Alert.alert("Formato de coordenadas inválido. Utilize o formato correto XX.X.");
            }
    
            navigation.goBack();
        } else {
            return Alert.alert("Por favor, preencha todos os campos obrigatórios");
        }
    };
    
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                <View style={styles.content}>
                    <View style={styles.inputView}>
                        <TextInput
                            style={styles.input}
                            placeholder='Nome'
                            value={name}
                            onChangeText={setName}
                            autoCorrect={false}
                            autoCapitalize='none'
                        />
                        <TextInput
                            style={[styles.input, { height: 100 }]}
                            placeholder='Descrição'
                            value={description}
                            onChangeText={setDescription}
                            autoCorrect={false}
                            autoCapitalize='none'
                            multiline={true}
                        />
                        <TextInput
                            style={styles.input}
                            placeholder='Data (DD/MM/AAAA)'
                            value={date}
                            onChangeText={setDate}
                            autoCorrect={false}
                            autoCapitalize='none'
                        />
                        <TextInput
                            style={styles.input}
                            placeholder='Duração (horas:minutos)'
                            value={duration}
                            onChangeText={setDuration}
                            autoCorrect={false}
                            autoCapitalize='none'
                        />
                        <TextInput
                            style={styles.input}
                            placeholder='Cidade'
                            value={city}
                            onChangeText={setCity}
                            autoCorrect={false}
                            autoCapitalize='none'
                        />
                        <TextInput
                            style={styles.input}
                            placeholder='Estado'
                            value={state}
                            onChangeText={setState}
                            autoCorrect={false}
                            autoCapitalize='none'
                        />
                        <TextInput
                            style={styles.input}
                            placeholder='País'
                            value={country}
                            onChangeText={setCountry}
                            autoCorrect={false}
                            autoCapitalize='none'
                        />
                        <TextInput
                            style={styles.input}
                            placeholder='CEP'
                            value={zipCode}
                            onChangeText={setZipCode}
                            autoCorrect={false}
                            autoCapitalize='none'
                        />
                        <TextInput
                            style={styles.input}
                            placeholder='Latitude'
                            value={latitude}
                            onChangeText={setLatitude}
                            autoCorrect={false}
                            autoCapitalize='none'
                        />
                        <TextInput
                            style={styles.input}
                            placeholder='Longitude'
                            value={longitude}
                            onChangeText={setLongitude}
                            autoCorrect={false}
                            autoCapitalize='none'
                        />
                    </View>
                    <View style={styles.checkboxView}>
                        <TouchableOpacity style={styles.checkboxContainer} onPress={() => setIsPrivate(!isPrivate)}>
                            <View style={[styles.checkbox, { backgroundColor: isPrivate ? '#0BCE83' : '#fff' }]} />
                            <Text style={styles.checkboxLabel}>Evento Privado</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.checkboxContainer} onPress={() => setIsAdultsOnly(!isAdultsOnly)}>
                            <View style={[styles.checkbox, { backgroundColor: isAdultsOnly ? '#0BCE83' : '#fff' }]} />
                            <Text style={styles.checkboxLabel}>Maiores de 18 anos</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
            <View style={styles.buttonView}>
                <Pressable style={styles.button} onPress={register}>
                    <Text style={styles.buttonText}>Cadastrar</Text>
                </Pressable>
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
    scrollContainer: {
        flexGrow: 1,
    },
    content: {
        flex: 1,
        marginTop: 50,
        justifyContent: 'center',
        alignItems: 'stretch',
    },
    inputView: {
        width: "100%",
        marginBottom: 20,
        paddingHorizontal: 20,
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
    checkboxView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        marginBottom: 20,
    },
    checkboxContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    checkbox: {
        width: 20,
        height: 20,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#7203FF',
        marginRight: 5,
    },
    checkboxLabel: {
        color: '#fff',
        fontSize: 16,
    },
    buttonView: {
        alignItems: "center",
    },
    button: {
        backgroundColor: "#0BCE83",
        borderColor: "gray",
        alignItems: "center",
        justifyContent: "center",
        height: 50,
        paddingHorizontal: 20,
        marginTop: 15,
        width: '80%'
    },
    buttonText: {
        color: "#fff",
        fontSize: 18,
        fontWeight: "bold"
    }
});