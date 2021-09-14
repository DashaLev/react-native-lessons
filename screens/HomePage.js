import React from 'react';
import {View} from 'react-native';
import About from "../components/About";
import Contacts from "../components/Contacts";

const HomePage = () => {
    return <View>
        <About/>
        <Contacts/>
    </View>;
};
export default HomePage;
