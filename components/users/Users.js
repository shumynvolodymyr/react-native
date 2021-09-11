import React, {useEffect} from 'react';
import {StyleSheet, View, FlatList} from 'react-native';
import {getUsers} from "../../services/users.api";
import {useDispatch, useSelector} from "react-redux";
import User from "../user/User";

export default function Users() {

    const users = useSelector(state => state.usersReducer.users);
    let dispatch = useDispatch();

    useEffect(() => {
        dispatch(getUsers());
    }, [])

    return (
        <View>
            <FlatList
                data={users}
                renderItem={({item}) => {
                    return <User item={item}/>
                }}
                keyExtractor={users => `${users.id}`}
            />
        </View>
    );
}

const styles = StyleSheet.create({});
