import { createStackNavigator } from "@react-navigation/stack";
import WelcomeConsentScreen from "../screens/Login";
import HomeScreen from "~/screens/HomeScreen";
import Tabs from "../navigation/tab"; // Import bottom tabs

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={WelcomeConsentScreen} />
      <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
