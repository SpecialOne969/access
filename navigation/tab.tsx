import React from 'react';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View, Text, Image } from "react-native";
import HomeScreen from "../screens/HomeScreen";
import AddGuest from "../screens/AddGuest";
import MyGuest from "../screens/MyGuest";

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          position: "absolute",
          left: 20,
          right: 10,
          elevation: 0,
          backgroundColor: "blue",
          borderRadius: 15,
          height: 90,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={{ alignItems: "center", justifyContent: "center", top: 10 }}>
              <Image source={require("../assets/icons/icons8-home-50.png")} style={{ width: 24, height: 24 }} />
              <Text style={{ color: focused ? "white" : "gray" }}>Home</Text>
            </View>
          ),
        }}
      />
      <Tab.Screen name="AddGuest" component={AddGuest} />

      <Tab.Screen name="MyGuest" component={MyGuest} options={{
        tabBarIcon: ({ focused }) => (
          <View style={{ alignItems: "center", justifyContent: "center", top: 10 }}>
            <Image source={require("../assets/icons/icons8-home-50.png")} style={{ width: 24, height: 24 }} />
            <Text style={{ color: focused ? "white" : "gray" }}>Add Guest</Text>
          </View>
        ),
      }} />
      <Tab.Screen name="MyGuest" component={MyGuest} options={{
        tabBarIcon: ({ focused }) => (
          <View style={{ alignItems: "center", justifyContent: "center", top: 10 }}>
            <Image source={require("../assets/icons/icons8-home-50.png")} style={{ width: 24, height: 24 }} />
            <Text style={{ color: focused ? "white" : "gray" }}>Profile</Text>
          </View>
        ),
      }} />
    </Tab.Navigator>
  );
};

export default Tabs;
