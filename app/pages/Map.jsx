import * as Location from 'expo-location';
import React, { useEffect, useState } from 'react';
import { Alert, Dimensions, SafeAreaView, StyleSheet, View } from 'react-native';
import { PROVIDER_GOOGLE } from 'react-native-maps';
import MapView from '../components/mymap';

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
    
        setRegion({ latitude, longitude, latitudeDelta: 0.01, longitudeDelta: 0.01 });
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
                    initialRegion={region}
                    showsUserLocation={true}
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
        height: Dimensions.get("window").height/1.19,
    },
});