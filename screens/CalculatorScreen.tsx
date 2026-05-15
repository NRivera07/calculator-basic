import CalculatorButton from "@/components/CalculatorButton";
import { colors, styles } from "@/constants/theme";
import React, { useState } from "react";
import { Text, View } from "react-native";

export default function CalculatorScreen() {
  const [result, setResult] = useState("0");
  const [subResult, setSubResult] = useState("0");

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
    { label: "0" },
    { label: "." },
    { label: "=", color: colors.orange },
  ];

  const handleButtonPress = (label: string) => {
    if (label === "C") {
      setResult("0");
      setSubResult("0");
      return;
    } else if (label === "=") {
      handleCalculate(subResult);
      return;
    }

    setSubResult((prev) => {
      const lastDigit = prev[prev.length - 1];

      const operators = ["+", "-", "*", "/", "."];

      if (prev === "0" && !operators.includes(label)) {
        return label;
      }

      if (operators.includes(lastDigit) && operators.includes(label)) {
        return prev;
      }

      return prev + label;
    });
  };

  const handleCalculate = (subresult: string) => {
    const result = eval(subresult);
    console.log(result);
    setResult(String(result));
  };

  return (
    <View style={styles.calculatorContainer}>
      <View style={{ marginBottom: 20, paddingHorizontal: 30 }}>
        <Text style={styles.mainResult}>{result}</Text>
        <Text style={styles.subResult}>{subResult}</Text>
      </View>
      <View style={styles.buttonRow}>
        {buttons.map((button, index) => (
          <CalculatorButton
            key={index}
            label={button.label}
            color={button.color}
            onPress={() => handleButtonPress(button.label)}
          />
        ))}
      </View>
    </View>
  );
}
