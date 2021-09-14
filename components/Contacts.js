import React from 'react';
import {StyleSheet} from 'react-native';
import {View, Text} from 'react-native';

const Contacts = () => {
    return (
        <View style={styles.base}>
            <View>
                <Text style={styles.title}>CONTACT US</Text>
            </View>
            <View>
                <Text>
                    Company: Vertex42 LLC
                </Text>
            </View>
            <View>
                <Text>
                    Address: 5926 W Killington Ct Herriman UT 84096
                </Text>
            </View>
            <View>
                <Text>
                    Phone: We do not provide support via the phone.We've tried that before, but found that email works better
                </Text>
            </View>
            <View>
                <Text>
                    Email: email@com
                </Text>
            </View>
        </View>
    )
}
export default Contacts

let styles = StyleSheet.create({
    base: {
        padding:10,
        backgroundColor:'lightblue',
    },
    title: {
        fontWeight:'bold',
        marginBottom:5,
        textAlign:'center',
        backgroundColor: 'rgb(33, 150, 243)',
        padding: 10
    }
});