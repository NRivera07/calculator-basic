import { colors, styles } from "@/constants/theme";
import React from "react";
import { Pressable, Text } from "react-native";

type CalculatorButtonProps = {
  label: string;
  color?: string;
  onPress?: () => void;
};
export default function CalculatorButton({
  label,
  color = colors.darkGray,
  onPress,
}: CalculatorButtonProps) {
  return (
    <Pressable
      style={({ pressed }) => ({
        ...styles.button,
        opacity: pressed ? 0.8 : 1,
        backgroundColor: color || (pressed ? "#ccc" : "#fff"),
        flex: label === "0" ? 2 : 1,
      })}
      onPress={onPress}
    >
      <Text style={styles.buttonText}>{label}</Text>
    </Pressable>
  );
}
