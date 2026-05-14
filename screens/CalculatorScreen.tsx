import CalculatorButton from "@/components/CalculatorButton";
import { colors, styles } from "@/constants/theme";
import React from "react";
import { Text, View } from "react-native";

export default function CalculatorScreen() {
  const buttons = [
    { label: "C", color: colors.lightGray },
    { label: "+/-", color: colors.lightGray },
    { label: "%", color: colors.lightGray },
    { label: "/", color: colors.orange },
    { label: "7" },
    { label: "8" },
    { label: "9" },
    { label: "*", color: colors.orange },
    { label: "4" },
    { label: "5" },
    { label: "6" },
    { label: "-", color: colors.orange },
    { label: "1" },
    { label: "2" },
    { label: "3" },
    { label: "+", color: colors.orange },
    { label: "0", flex: 2 },
    { label: "." },
    { label: "=", color: colors.orange },
  ];

  return (
    <View style={styles.calculatorContainer}>
      <View style={{ marginBottom: 20, paddingHorizontal: 30 }}>
        <Text style={styles.mainResult}>1500</Text>
        <Text style={styles.subResult}>15</Text>
      </View>
      <View style={styles.buttonRow}>
        {buttons.map((button, index) => (
          <CalculatorButton
            key={index}
            label={button.label}
            color={button.color}
            flex={button.flex}
          />
        ))}
      </View>
    </View>
  );
}
