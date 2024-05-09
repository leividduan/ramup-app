import React, { useEffect, useState } from 'react';
import * as Location from 'expo-location';
import MapView from '../components/mymap';
import { PROVIDER_GOOGLE } from 'react-native-maps';
import {  Alert, SafeAreaView, StyleSheet, View, Dimensions } from 'react-native';

const initialRegion = {
    latitude: 49.2576508,
    longitude: -123.2639868,
    latitudeDelta: 100,
    longitudeDelta: 100,
};

export default function MapPage() {
    const [region, setRegion] = useState();

    const getCurrentPosition = async () => {
        let { status } = await Location.requestForegroundPermissionsAsync();

        if (status !== "granted") {
          Alert.alert("Ops!", "Permissão de acesso a localização negada.");
        }
    
        let {
          coords: { latitude, longitude },
        } = await Location.getCurrentPositionAsync();
    
        setRegion({ latitude, longitude, latitudeDelta: 100, longitudeDelta: 100 });
    };

    useEffect(() => {
        getCurrentPosition();
    }, []);

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.container}>
                <MapView
                    provider={PROVIDER_GOOGLE}
                    style={styles.map}
                    region={region}
                    initialRegion={initialRegion}
                ></MapView>
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
    map: {
        width: Dimensions.get("window").width,
        height: Dimensions.get("window").height,
    },
});