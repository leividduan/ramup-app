import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import {
    Button,
    FlatList,
    Modal,
    SafeAreaView,
    StatusBar,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from 'react-native';

const events = [
  {
    name: "SURF PARTY",
    description: "Encontro perfeito para surfistas!",
    city: "Itajaí",
    state: "Santa Catarina",
    country: "Brasil",
    zipCode: "12345-678",
    latitude: "-23.550520",
    longitude: "-46.633308",
    onlyAdults: false,
    showUsers: true,
    date: "22/07/2024",
    time: "16:00"
  },
  {
    name: "FESTINHA",
    description: "Joga o copo pro alto e vamos beber!",
    city: "Itajaí",
    state: "Santa Catarina",
    country: "Brasil",
    zipCode: "23456-789",
    latitude: "-22.906847",
    longitude: "-43.172896",
    onlyAdults: false,
    showUsers: true,
    date: "22/07/2024",
    time: "16:00"
  },
  {
    name: "HAPPY HOUR",
    description: "Rolêzinho pós trabalho, bora?",
    city: "Itajaí",
    state: "Santa Catarina",
    country: "Brasil",
    zipCode: "10001-123",
    latitude: "40.712776",
    longitude: "-74.005974",
    onlyAdults: true,
    showUsers: false,
    date: "22/07/2024",
    time: "16:00"
  },
  {
    name: "SKATE PARTY",
    description: "Encontro perfeito para skatistas!",
    city: "Itajaí",
    state: "Santa Catarina",
    country: "Brasil",
    zipCode: "94102-345",
    latitude: "37.774929",
    longitude: "-122.419418",
    onlyAdults: false,
    showUsers: true,
    date: "22/07/2024",
    time: "16:00"
  },
  {
    name: "UNIVERSITY PARTY",
    description: "Vamos curtir a vida no melhor open da cidade",
    city: "Balneário Camboriú",
    state: "Santa Catarina",
    country: "Brasil",
    zipCode: "73301-567",
    latitude: "30.267153",
    longitude: "-97.743057",
    onlyAdults: true,
    showUsers: false,
    date: "22/07/2024",
    time: "16:00"
  }
];

const Item = ({ item, onPress }) => (
  <TouchableOpacity onPress={onPress} style={styles.item}>
    <Text style={styles.title}>{item.name}</Text>
    <Text>{item.description}</Text>
    <Text>{`${item.city}, ${item.state}, ${item.country}`}</Text>
    <Text>{`Zip Code: ${item.zipCode}`}</Text>
    <Text>{`Only Adults: ${item.onlyAdults ? "Yes" : "No"}`}</Text>
  </TouchableOpacity>
);

export default function SearchPage() {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [search, setSearch] = useState('');

  const handlePress = (event) => {
    setSelectedEvent(event);
  };

  const closeModal = () => {
    setSelectedEvent(null);
  };

  const filteredEvents = events.filter(event =>
    event.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.searchContainer}>
        <Ionicons name="md-search" size={24} color="rgb(114, 3, 255)" style={styles.searchIcon} />
        <TextInput
          style={styles.searchInput}
          placeholder="Pesquisar"
          placeholderTextColor="rgb(114, 3, 255)"
          value={search}
          onChangeText={setSearch}
        />
      </View>
      <FlatList
        data={filteredEvents}
        renderItem={({ item }) => (
          <Item
            item={item}
            onPress={() => handlePress(item)}
          />
        )}
        keyExtractor={item => item.name}
      />
      {selectedEvent && (
        <Modal
          animationType="slide"
          transparent={true}
          visible={true}
          onRequestClose={closeModal}
        >
          <View style={styles.modalView}>
            <Text style={styles.modalTitle}>{selectedEvent.name}</Text>
            <Text>{`Data: ${selectedEvent.date}`}</Text>
            <Text>{`Horário: ${selectedEvent.time}`}</Text>
            <Text>Se prepare!</Text>
            <Button title="Close" onPress={closeModal} />
          </View>
        </Modal>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(114, 3, 255)', // Cor de fundo roxa
    paddingTop: StatusBar.currentHeight || 0,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 25,
    margin: 16,
    paddingHorizontal: 10,
    elevation: 3, // para Android
    shadowColor: '#000', // para iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    height: 40,
    color: 'rgb(114, 3, 255)',
  },
  item: {
    backgroundColor: '#fff', // Cor dos cards em branco
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 10,
    elevation: 3, // para Android
    shadowColor: '#000', // para iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'rgb(114, 3, 255)', // Cor dos títulos dos cards roxa
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 15,
    color: 'rgb(114, 3, 255)', // Cor do título do modal roxa
  },
});