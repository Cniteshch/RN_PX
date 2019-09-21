import React from "react";
import { View } from "react-native";
import { DrawerItems } from "react-navigation-drawer";

const CustomDrawerNavigator = props => (
  <View >
    <DrawerItems
      activeBackgroundColor={"#e91e63"}
      activeTintColor={"#fff"}
    />
  </View>
);

export default CustomDrawerNavigator;