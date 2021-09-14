import React from 'react';
import {createStackNavigator} from "@react-navigation/stack";
import Users from "../components/Users";
import UserDetailsPage from "./UserDetailsPage";

const StackNavigator = createStackNavigator()

const UsersPage = () => {

    return (
        <StackNavigator.Navigator initialRouteName="Users">
            <StackNavigator.Screen name={'Users page'} component={Users} options={{headerShown: false}}/>
            <StackNavigator.Screen name={'User details page'} component={UserDetailsPage}/>
        </StackNavigator.Navigator>
    )

}

export default UsersPage

