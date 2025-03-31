// screens/HomeScreen.tsx

import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  return (
    <SafeAreaView style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <View>
        <Text style={{ fontSize: 24, fontWeight: "bold", color: "#113E55" }}>
          Hello, Cyril!
        </Text>
      </View>
    </SafeAreaView>
  );
}
