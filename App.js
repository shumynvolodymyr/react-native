import {StatusBar} from 'expo-status-bar';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Users from "./components/users/Users";
import {Provider} from "react-redux";
import {store} from "./redux/store/store";


export default function App() {
    return (
        <Provider store={store}>
            <View style={styles.container}>
                <StatusBar style="auto"/>
                <Users/>
            </View>
        </Provider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
