import { View} from "react-native";

import styles from "./buttonscard.style";
import CustomButtons from '../../utils/CustomButtons'

const ButtonsCard = () => {
  return (
    <View style={styles.container}>
        <CustomButtons/>
    </View>
  )
}

export default ButtonsCard