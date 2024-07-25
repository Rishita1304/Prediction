import { StyleSheet } from "react-native";

import { COLORS, FONT, SHADOWS, SIZES } from "../../../constants/index";

const styles = StyleSheet.create({
    container: {
      width: "100%",
      padding: 10,
      backgroundColor:  "#FFF",
      borderRadius: SIZES.medium,
      flexDirection:"column",
      justifyContent: "center",
      alignItems: "center",
      ...SHADOWS.medium,
      shadowColor: COLORS.white,
    },
})

export default styles;
