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
    btns:{
        flexDirection: 'row',
        alignItems:'flex-start',
        alignSelf:'flex-start',
        gap:10,
        marginBottom: 10
    },
    btntypes:{
        borderBottomWidth: 2,
        borderBottomRightRadius:2,
        borderBottomLeftRadius:2,
        fontWeight:'500',
        borderRadius: 20
    }
});

export default styles;
