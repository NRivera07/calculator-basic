import CalculatorButton from "@/components/CalculatorButton";
import { colors, styles } from "@/constants/theme";
import React from "react";
import { Text, View } from "react-native";

export default function CalculatorScreen() {
  return (
    <View style={styles.calculatorContainer}>
      <View style={{ marginBottom: 20, paddingHorizontal: 30 }}>
        <Text style={styles.mainResult}>1500</Text>
        <Text style={styles.subResult}>15</Text>
      </View>
      <View style={styles.buttonRow}>
        <CalculatorButton label="C" />
        <CalculatorButton label="+/-" />
        <CalculatorButton label="del" />
        <CalculatorButton label="/" color={colors.orange} />
      </View>
    </View>
  );
}
