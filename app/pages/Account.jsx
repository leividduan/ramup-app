import React from 'react';
import { View, Text, FlatList, Pressable, SafeAreaView, StyleSheet } from 'react-native';
import { useNavigation } from "@react-navigation/native";

//Icons
import AddIcon from '../components/addIcon';
import LogoutIcon from '../components/logoutIcon';

const Option = (opt) => (
    <Pressable 
        style={styles.option}
        onPress={opt.handler}
    >
        {opt.icon}
        <Text style={styles.optionText}>{opt.title}</Text>
    </Pressable>
)

export default function AccountPage() {
    const navigation = useNavigation();

    function logout() {
        navigation.navigate('Login');
    }
    function historyHandler() {
        navigation.navigate('EventHistoryPage');
    }
    function documentHandler() {}
    function myEventsHandler() {}
    function newEventHandler() {
        navigation.navigate('EventRegisterPage');
    }

    const OPTS = [
        {
            key: '0',
            title: 'Histórico',
            icon: (<AddIcon style={styles.icon} color='#000' height={25} width={25}></AddIcon>),
            handler: historyHandler,
        },
        {
            key: '1',
            title: 'Cadastrar Documento',
            icon: (<AddIcon style={styles.icon} color='#000' height={25} width={25}></AddIcon>),
            handler: documentHandler,
        },
        {
            key: '2',
            title: 'Meus Eventos',
            icon: (<AddIcon style={styles.icon} color='#000' height={25} width={25}></AddIcon>),
            handler: myEventsHandler,
        },
        {
            key: '3',
            title: 'Cadastrar Evento',
            icon: (<AddIcon style={styles.icon} color='#000' height={25} width={25}></AddIcon>),
            handler: newEventHandler,
        },
        {
            key: '4',
            title: 'Sair',
            icon: (<LogoutIcon style={styles.icon} color='#000' height={25} width={25}></LogoutIcon>),
            handler: logout,
        },
    ];

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.content}>
                <FlatList
                    style={styles.list}
                    data={OPTS}
                    renderItem={({item}) => <Option {...item} />}
                    keyExtrator={item => item.key}
                />
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
        justifyContent: 'start',
        alignItems: 'stretch',
        width: '100%',
    },
    list: {
        width: '100%',
    },
    option: {
        justifyContent: "start",
        alignItems: "center",
        flexDirection: "row",
        padding: 10,
        marginVertical: 5,
        width: '100%',
    },
    optionText: {
        fontSize: 17,
        color: "#fff",
    },
    icon: {
        margin: 10,
    },

});