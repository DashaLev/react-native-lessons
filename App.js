import React from 'react';
import {NavigationContainer} from "@react-navigation/native";
import {createDrawerNavigator} from "@react-navigation/drawer";
import HomePage from "./screens/HomePage";
import UsersPage from "./screens/UsersPage";
import {Provider, useSelector} from "react-redux";
import {store} from "./redux/store";

const Drawer = createDrawerNavigator();

export default function App() {
    return (
        <Provider store={store}>
            <AppWrapper/>
        </Provider>
    )

}

export const AppWrapper = () => {

    let {status} = useSelector(state => state)

    return (
        <NavigationContainer>
            <Drawer.Navigator>
                <Drawer.Screen name={'Users Page'} component={UsersPage} options={{headerShown: status}}/>
                <Drawer.Screen name={'Home Page'} component={HomePage}/>
            </Drawer.Navigator>
        </NavigationContainer>
    )
}
