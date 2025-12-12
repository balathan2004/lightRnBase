import { MD3Colors, MD3LightTheme, MD3Theme } from "react-native-paper";

const fonts: MD3Theme["fonts"] = {
  bodyLarge: {
    fontFamily: "Inter_400Regular",
    fontWeight: "400",
    letterSpacing: 0.15,
    lineHeight: 24,
    fontSize: 16,
  },
  bodyMedium: {
    fontFamily: "Inter_400Regular",
    fontWeight: "400",
    letterSpacing: 0.25,
    lineHeight: 20,
    fontSize: 14,
  },
  bodySmall: {
    fontFamily: "Inter_400Regular",
    fontWeight: "400",
    letterSpacing: 0.4,
    lineHeight: 18,
    fontSize: 12,
  },
  headlineLarge: {
    fontFamily: "Inter_600SemiBold",
    fontWeight: "600",
    lineHeight: 40,
    fontSize: 32,
    letterSpacing: 0,
  },
  headlineMedium: {
    fontFamily: "Inter_600SemiBold",
    fontWeight: "600",
    lineHeight: 36,
    fontSize: 28,
    letterSpacing: 0,
  },
  headlineSmall: {
    fontFamily: "Inter_500Medium",
    fontWeight: "500",
    lineHeight: 32,
    fontSize: 24,
    letterSpacing: 0,
  },

  titleLarge: {
    fontFamily: "Inter_600SemiBold",
    fontWeight: "600",
    letterSpacing: 0,
    lineHeight: 28,
    fontSize: 22,
  },
  titleMedium: {
    fontFamily: "Inter_600SemiBold",
    fontWeight: "600",
    letterSpacing: 0.15,
    lineHeight: 24,
    fontSize: 18,
  },
  titleSmall: {
    fontFamily: "Inter_500Medium",
    fontWeight: "500",
    letterSpacing: 0.1,
    lineHeight: 20,
    fontSize: 16,
  },

  labelLarge: {
    fontFamily: "Inter_500Medium",
    fontWeight: "500",
    letterSpacing: 0.1,
    lineHeight: 20,
    fontSize: 14,
  },
  labelMedium: {
    fontFamily: "Inter_500Medium",
    fontWeight: "500",
    letterSpacing: 0.5,
    lineHeight: 18,
    fontSize: 12,
  },
  labelSmall: {
    fontFamily: "Inter_500Medium",
    fontWeight: "500",
    letterSpacing: 0.5,
    lineHeight: 16,
    fontSize: 11,
  },

  displayLarge: {
    fontFamily: "Inter_700Bold",
    fontWeight: "700",
    letterSpacing: -0.25,
    lineHeight: 64,
    fontSize: 57,
  },
  displayMedium: {
    fontFamily: "Inter_700Bold",
    fontWeight: "700",
    letterSpacing: -0.1,
    lineHeight: 52,
    fontSize: 45,
  },
  displaySmall: {
    fontFamily: "Inter_600SemiBold",
    fontWeight: "600",
    letterSpacing: 0,
    lineHeight: 44,
    fontSize: 36,
  },
  default: {
    fontFamily: "Inter_600SemiBold",
    fontWeight: "600",
    letterSpacing: 0,
  },
};

const colors = {
  // ----------------------------------------
  // BRAND / PRIMARY SYSTEM
  // ----------------------------------------
  primary: "#4F7BFF",
  primaryDark: "#345BDB",
  primaryLight: "#AFC6FF",

  secondary: "#FFB84D",
  secondaryDark: "#DB8F2E",
  secondaryLight: "#FFDCA6",

  // ----------------------------------------
  // SURFACE COLORS
  // ----------------------------------------
  background: "#0F0F12",
  surface: "#1A1A1F",
  surfaceLight: "#22222A",
  surfaceDark: "#0A0A0D",

  // A little transparent overlay for modals, etc.
  overlay: "rgba(0,0,0,0.5)",

  // ----------------------------------------
  // TEXT COLORS (clearly separated)
  // ----------------------------------------
  textLight: "#FFFFFF",
  textDark: "#000000",
  textPrimary: "#E6E8F2",
  textSecondary: "#A4A6AD",
  textMuted: "#6D6F78",

  // ----------------------------------------
  // ACTION COLORS (status related)
  // ----------------------------------------
  success: "#33D18A",
  successDark: "#1E9C64",

  warning: "#FFB74D",
  warningDark: "#DB8B2E",

  error: "#FF4F4F",
  errorDark: "#D63333",

  info: "#4FC3F7",
  infoDark: "#2196F3",

  // ----------------------------------------
  // UTILITY COLORS
  // ----------------------------------------
  border: "#2C2C32",
  borderLight: "#3A3A42",
  divider: "#202028",

  // Shadows & glows (for Stark tech vibes)
  glowPrimary: "rgba(79, 123, 255, 0.4)",
  glowError: "rgba(255, 79, 79, 0.4)",
};

export const theme = {
  ...MD3LightTheme,
  fonts,
  colors,
};
