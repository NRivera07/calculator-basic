import { styles } from "@/constants/theme";
import { Slot } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import "react-native-reanimated";

export default function RootLayout() {
  return (
    <View style={styles.background}>
      <StatusBar style={"light"} />
      <Slot />
    </View>
  );
}
