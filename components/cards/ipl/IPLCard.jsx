import { View, Text, TouchableOpacity, Image } from "react-native";

import styles from "./iplcard.style";
import iplogo from '../../../assets/iplogo.png'

const IPLCard = () => {
  return (
    <View
      style={styles.container}
    >
      <View style={styles.logoContainer}>
        <Image
          source={iplogo}
          resizeMode='contain'
          style={styles.logoImage}
        />
      </View>
      <Text style={styles.companyName} numberOfLines={1}>
        Kolkata to win the match vs Mumbai?
      </Text>

      <View style={styles.infoContainer}>
        <View style={styles.infoWrapper}>
          <Text style={styles.Keyword}> IPL </Text>
          <Text style={styles.Keyword}> T20 </Text>
          <Text style={styles.Keyword}> Cricket</Text>

        </View>
        <Text style={styles.location} numberOfLines={1}>
          Last 5 T20: Kolkata 4, Mumbai 1, Drawn 0
        </Text>
      </View>
    </View>
  )
}

export default IPLCard