import React from 'react';
import {StyleSheet} from 'react-native';
import {View, Text } from 'react-native';

const About = () => {
    return <View style={styles.base}>
        <View>
            <Text style={styles.title}>ABOUT US</Text>
        </View>
        <View>
            <Text style={styles.description}>
                The main purpose of your About Us page is to give your visitors a glimpse into who you are as a person or
                a business (or sometimes both). As users discover your brand, they need to distinguish what sets you apart
                and makes you… you. This often requires finding the right balance between compelling content and a design
                carefully planned to look the part. Conveying your identity in a fun and approachable – but also reliable
                and informative – way is challenging.
            </Text>
        </View>
    </View>;
};
export default About;

let styles = StyleSheet.create({
    base: {
        padding:10,
        backgroundColor:'aliceblue',
    },
    title: {
        fontWeight:'bold',
        textAlign:'center',
        marginBottom:5,
        backgroundColor: 'rgb(33, 150, 243)',
        padding: 10
    },
    description: {
        textAlign:'justify',
        lineHeight:25
    }
});