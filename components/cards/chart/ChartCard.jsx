import { View} from "react-native";

import styles from "./chartcard.style";
import MyLineChart from '../../utils/Charts'

const ChartCard = () => {
  return (
    <View
      style={styles.container}
    >
        <MyLineChart/>
    </View>
  )
}

export default ChartCard