import React from 'react';
import { SafeAreaView, View, Text, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const events = [
    { id: '1', name: 'Evento 1', description: 'Descrição breve do evento 1', date: '2024-06-10', duration: '2 horas', rating: 4 },
    { id: '2', name: 'Evento 2', description: 'Descrição breve do evento 2', date: '2024-06-11', duration: '3 horas', rating: 3 },
    { id: '3', name: 'Evento 3', description: 'Descrição breve do evento 3', date: '2024-06-12', duration: '1 hora', rating: 5 },
    // Adicione mais eventos conforme necessário
];

const EventHistoryPage = () => {
    const navigation = useNavigation();

    const handleEventPress = (event) => {
        navigation.navigate('EventDetailPage', { event });
    };

    const renderItem = ({ item }) => (
        <TouchableOpacity onPress={() => handleEventPress(item)} style={styles.card}>
            <Text style={styles.eventName}>{item.name}</Text>
            <Text style={styles.eventDescription}>{item.description}</Text>
        </TouchableOpacity>
    );

    return (
        <SafeAreaView style={styles.container}>
            <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
                <Text style={styles.backButtonText}>Voltar</Text>
            </TouchableOpacity>
            <FlatList
                data={events}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                contentContainerStyle={styles.listContent}
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#7203FF',
        padding: 10,
    },
    backButton: {
        padding: 10,
        backgroundColor: '#ffffff',
        borderRadius: 5,
        marginBottom: 10
    },
    backButtonText: {
        color: '#000',
        fontWeight: 'bold',
    },
    card: {
        backgroundColor: '#FFFFFF',
        padding: 15,
        borderRadius: 5,
        marginVertical: 10,
    },
    eventName: {
        fontWeight: 'bold',
        fontSize: 16,
        marginBottom: 5,
    },
    eventDescription: {
        fontSize: 14,
        color: '#000',
    },
    listContent: {
        paddingBottom: 20,
    },
});

export default EventHistoryPage;
