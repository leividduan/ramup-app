import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';

export default function SearchPage() {
    return (
        <SafeAreaView style={styles.container}></SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#808080',
        alignItems: 'center',
        justifyContent: 'center',
    }
});