import React from 'react';
import {Button, StyleSheet} from 'react-native';
import {View, Text} from 'react-native';
import {useDispatch} from "react-redux";

const UserDetailsPage = (props) => {

    let {route: {params: {data}},navigation} = props;

    let dispatch = useDispatch()
    navigation.setOptions({
        headerLeft: () =>
            <Button onPress={() => {
                navigation.goBack()
                dispatch({type: 'CHANGE_STATUS', payload: true})
            }} title={'Back'}/>
    })

    return <View style={styles.base}>
        <Text style={styles.fontWeight}>{data.name}</Text>
        <Text>Contacts:</Text>
        <Text>email - {data.email}</Text>
        <Text>phone - {data.phone}</Text>
    </View>;
};
export default UserDetailsPage;

    let styles = StyleSheet.create({
        base: {
            padding:10,
            backgroundColor:'lightblue',
        },
        fontWeight: {
            fontWeight:'bold',
        }
    });