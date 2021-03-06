import React, {useEffect, useState} from 'react';
import {FlatList, StyleSheet} from 'react-native';
import {View} from 'react-native';
import {getUsers} from "../services/user.service";
import User from "./User";


const Users = () => {

    let [users, setUsers] = useState([]);

    useEffect(() => {
        getUsers().then(value => setUsers([...value]))
    }, []);

    return (
        <View style={styles.base}>
            <FlatList
                data={users}
                renderItem={({item}) => <User item={item}/>}
                keyExtractor={item => `${item.id}`}
            />
        </View>
    );
}
export default Users;

    let styles = StyleSheet.create({
        base: {
            flexGrow: 0,
            padding:10,
            backgroundColor:'lightblue',
            height:410
        }
    });