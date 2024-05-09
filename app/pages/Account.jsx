import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';

export default function AccountPage() {
    return (
        <SafeAreaView style={styles.container}></SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0000FF',
        alignItems: 'center',
        justifyContent: 'center',
    }
});