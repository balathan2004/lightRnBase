import { useTheme } from "react-native-paper";
import { theme } from "./theme";

type themeType = typeof theme;

export const useAppTheme = () => useTheme() as themeType;
