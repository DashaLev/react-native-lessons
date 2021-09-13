import React from 'react';
import {StyleSheet} from 'react-native';
import {View, Text} from 'react-native';

const User = ({item}) => {
    return <View style={[styles.userBlock]}>
        <Text >{item.name}</Text>
    </View>;
}
let styles = StyleSheet.create({
    userBlock: {
        flex: 1,
        backgroundColor: 'silver',
        marginBottom:10,
        padding:5
    },
});

export default User