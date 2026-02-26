import { View, Text, TextInputProps, ViewStyle } from "react-native";
import React, { Component, ReactNode } from "react";
import { TextInput, StyleSheet } from "react-native";

type InputColors = {
  backgroundColor?: string;
  textColor?: string;
  placeholderColor?: string;
  helperTextColor?: string;
  labelColor?: string;
  borderColor?: string;
};

type InputMeasures = {
  borderWidth?: number;
  borderRadius?: number;
  paddingHorizontal?: number;
  paddingVertical?: number;
};

type BaseInputThemingProps = {
  activeColors?: InputColors;
  inactiveColors?: InputColors;
  disabledColors?: InputColors;
  measures?: InputMeasures;
};

type BaseInputProps = TextInputProps & {
  label?: string | ReactNode;
  helperText?: string | ReactNode;
  containerStyle?: ViewStyle;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
};

const baseInputTheme: BaseInputThemingProps = {
  activeColors: {
    backgroundColor: "#FFFFFF",
    textColor: "#111827",
    placeholderColor: "#6B7280",
    helperTextColor: "#4B5563",
    labelColor: "#2563EB",
    borderColor: "#2563EB", // focused border = primary
  },

  inactiveColors: {
    backgroundColor: "#F9FAFB",
    textColor: "#111827",
    placeholderColor: "#9CA3AF",
    helperTextColor: "#6B7280",
    labelColor: "#374151",
    borderColor: "#D1D5DB", // neutral border
  },

  disabledColors: {
    backgroundColor: "#F3F4F6",
    textColor: "#9CA3AF",
    placeholderColor: "#D1D5DB",
    helperTextColor: "#9CA3AF",
    labelColor: "#D1D5DB",
    borderColor: "#E5E7EB", // faded border
  },
  measures: {
    borderRadius: 16,
    borderWidth: 1,
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
};

const BaseInput = ({ ...rest }: BaseInputThemingProps) => {
  const elementRenderer = (value: String | ReactNode) => {
    if (typeof value === "string") {
      return <Text>{value}</Text>;
    } else {
      return <>{value}</>;
    }
  };

  return ({
    label,
    helperText,
    editable,
    style,
    containerStyle,
    leftIcon,
    rightIcon,
    ...rest
  }: BaseInputProps) => {
    const inputColors = editable
      ? baseInputTheme.activeColors
      : baseInputTheme.inactiveColors;

    return (
      <View style={[styles.container, containerStyle]}>
        {label && elementRenderer(label)}
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",

            backgroundColor: inputColors?.backgroundColor,

            borderColor: inputColors?.borderColor,
            borderWidth: baseInputTheme.measures?.borderWidth,
            borderRadius: baseInputTheme.measures?.borderRadius,
            paddingHorizontal: baseInputTheme.measures?.paddingHorizontal,
            paddingVertical: baseInputTheme.measures?.paddingVertical,
          }}
        >
          {leftIcon && <View style={{ marginRight: 8 }}>{leftIcon}</View>}
          <TextInput
            editable={editable}
            style={[
              {
                flex: 1,
                backgroundColor: inputColors?.backgroundColor,
                borderWidth:0,
              },
              style,
            ]}
            {...rest}
          />
          {rightIcon && <View style={{ marginLeft: 8 }}>{rightIcon}</View>}
        </View>
        {helperText && elementRenderer(helperText)}
      </View>
    );
  };
};

const styles = StyleSheet.create({
  container: {},

  input: {
    flex: 1, // 👈 VERY IMPORTANT
    paddingVertical: 10,
  },

  icon: {
    marginHorizontal: 6,
  },
});

export default BaseInput;
