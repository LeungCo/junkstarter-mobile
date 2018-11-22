import { Dimensions } from "react-native";

export const { height: HEIGHT } = Dimensions.get("window");

export const COLORS = {
  GREEN: "rgb(144, 208, 65)",
  BLUE: "rgb(74, 144, 226)"
};

export const PADDING = {
  S: 5,
  M: 10,
  L: 15,
  XL: 20,
  "2XL": 25,
  "3XL": 30,
  "4XL": 35,
  "5XL": 40,
  "6XL": 45,
  "7XL": 50,
  "8XL": 55,
  "9XL": 60,
  PERCENT: {
    S: HEIGHT * 0.05,
    M: HEIGHT * 0.1,
    L: HEIGHT * 0.15,
    XL: HEIGHT * 0.2,
    "2XL": HEIGHT * 0.25,
    "3XL": HEIGHT * 0.3,
    "4XL": HEIGHT * 0.35,
    "5XL": HEIGHT * 0.4,
    "6XL": HEIGHT * 0.45,
    "7XL": HEIGHT * 0.5,
    "8XL": HEIGHT * 0.55,
    "9XL": HEIGHT * 0.6
  }
};

export const FONT = {
  SIZE: {
    XXS: 10,
    XS: 12,
    S: 14,
    M: 16,
    XL: 20
  },
  WEIGHT: {
    NORMAL: "400",
    SEMI_BOLD: "600",
    BOLD: "900"
  }
};
