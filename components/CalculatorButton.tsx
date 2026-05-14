import { colors, styles } from "@/constants/theme";
import React from "react";
import { Pressable, Text } from "react-native";

type CalculatorButtonProps = {
  label: string;
  color?: string;
};
export default function CalculatorButton({
  label,
  color = colors.darkGray,
}: CalculatorButtonProps) {
  return (
    <Pressable
      style={({ pressed }) => ({
        ...styles.button,
        opacity: pressed ? 0.8 : 1,
        backgroundColor: color || (pressed ? "#ccc" : "#fff"),
      })}
    >
      <Text style={styles.buttonText}>{label}</Text>
    </Pressable>
  );
}
