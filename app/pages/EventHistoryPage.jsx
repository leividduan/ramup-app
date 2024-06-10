import React from 'react';
import { SafeAreaView, View, Text, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const events = [
    {
      name: "Car Enthusiast Meetup",
      description: "A meetup for car enthusiasts to showcase their modified vehicles and share their passion for cars.",
      city: "São Paulo",
      state: "São Paulo",
      country: "Brazil",
      zipCode: "12345-678",
      latitude: "-23.550520",
      longitude: "-46.633308",
      onlyAdults: false,
      showUsers: true,
      rating: 3
    },
    {
      name: "Classic Car Show",
      description: "An exhibition of classic cars from the 1960s and 1970s.",
      city: "Rio de Janeiro",
      state: "Rio de Janeiro",
      country: "Brazil",
      zipCode: "23456-789",
      latitude: "-22.906847",
      longitude: "-43.172896",
      onlyAdults: false,
      showUsers: true,
      rating: 4
    },
    {
      name: "Luxury Car Expo",
      description: "A grand exhibition featuring the latest models of luxury cars from top brands.",
      city: "New York",
      state: "New York",
      country: "USA",
      zipCode: "10001-123",
      latitude: "40.712776",
      longitude: "-74.005974",
      onlyAdults: true,
      showUsers: false,
      rating: 1
    },
    {
      name: "Electric Vehicle Fair",
      description: "An event showcasing the newest electric vehicles and innovations in EV technology.",
      city: "San Francisco",
      state: "California",
      country: "USA",
      zipCode: "94102-345",
      latitude: "37.774929",
      longitude: "-122.419418",
      onlyAdults: false,
      showUsers: true,
      rating: 2
    },
    {
      name: "Motorcycle Rally",
      description: "A rally for motorcycle enthusiasts with events, contests, and a parade.",
      city: "Austin",
      state: "Texas",
      country: "USA",
      zipCode: "73301-567",
      latitude: "30.267153",
      longitude: "-97.743057",
      onlyAdults: true,
      showUsers: false,
      rating: 3
    }
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
        marginTop: 50,
        paddingBottom: 20,
    },
});

export default EventHistoryPage;
