import React from 'react';
import {Button, StyleSheet} from 'react-native';
import {View, Text} from 'react-native';
import {useDispatch} from "react-redux";

const User = ({item,navigation:{navigate}}) => {

    let dispatch = useDispatch()

    const onPress = () => {
        navigate('User details page', {data: item});
        dispatch({type:'CHANGE_STATUS',payload:false})
    };

    return <View style={styles.userBlock}>
        <Text style={styles.textStyle}>{item.name}</Text>
        <Button title={'User details'} onPress={onPress} />
    </View>;
}
    let styles = StyleSheet.create({
        userBlock: {
            flex: 1,
            backgroundColor: 'silver',
            marginBottom:10,
            padding:5
        },
        textStyle: {
            textAlign: 'center',
            marginBottom: 5,
            fontWeight:'bold'
        }
    });

export default User