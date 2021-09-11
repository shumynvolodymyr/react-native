import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';

export default function User({item}) {
    return (
    <View>
        <Text>{item.id}. {item.name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
