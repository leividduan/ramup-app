import React, { useState } from 'react';
import { SafeAreaView, View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { AirbnbRating } from 'react-native-ratings';
import { useNavigation } from '@react-navigation/native';

const EventDetailPage = () => {
    const navigation = useNavigation();
    const route = useRoute();
    const { event } = route.params;
    const [rating, setRating] = useState(event.rating); // Estado para armazenar a avaliação

    const handleRatingCompleted = (newRating) => {
        setRating(newRating); // Atualiza o estado com a nova avaliação
        console.log("Rating is: " + newRating);
    };

    return (
        <SafeAreaView style={styles.container}>
            <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
                    <Text style={styles.backButtonText}>Voltar</Text>
                </TouchableOpacity>
            <View style={styles.detailContainer}>
                <Text style={styles.eventName}>{event.name}</Text>
                <Text style={styles.eventDescription}>{event.description}</Text>
                <Text style={styles.eventDetail}>Data: {event.date}</Text>
                <Text style={styles.eventDetail}>Duração: {event.duration}</Text>
                <AirbnbRating 
                    count={5}
                    reviews={["Péssimo", "Ruim", "Ok", "Bom", "Excelente"]}
                    defaultRating={rating}
                    size={20}
                    onFinishRating={handleRatingCompleted} // Define a função para lidar com a mudança da avaliação
                />
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#7203FF',
        padding: 20,
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
    detailContainer: {
        backgroundColor: '#FFFFFF',
        padding: 20,
        borderRadius: 10,
    },
    eventName: {
        fontWeight: 'bold',
        fontSize: 24,
        marginBottom: 10,
    },
    eventDescription: {
        fontSize: 16,
        marginBottom: 10,
    },
    eventDetail: {
        fontSize: 14,
        marginBottom: 5,
    },
});

export default EventDetailPage;