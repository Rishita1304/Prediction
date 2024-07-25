import { Text, TouchableOpacity, View} from "react-native";

import styles from "./betcard.style";
import ActivityOrderBook from '../../utils/Activity'

const BetCard = () => {
  return (
    <View
      style={styles.container}
    >
        <View style={styles.btns}>
            <TouchableOpacity >
                <Text style={styles.btntypes}> ACTIVITY</Text>
            </TouchableOpacity>
            <TouchableOpacity >
                <Text> ORDER BOOK</Text>
            </TouchableOpacity>
        </View>
        <ActivityOrderBook/>
    </View>
  )
}

export default BetCard