import { Image, StyleSheet, View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { Stack, useRouter } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context';
import { Colors } from '@/constants/Colors';
import left from '../assets/left.png'
import share from '../assets/share.png'
import IPLCard from '../components/cards/ipl/IPLCard'
import ChartCard from '../components/cards/chart/ChartCard'
import BetCard from '../components/cards/betting/BetCard'
import AboutCard from '../components/cards/about/AboutCard'
import ButtonsCard from '../components/cards/buttons/ButtonsCards'
import { COLORS } from '@/constants';

export default function HomeScreen() {
  return (
    <SafeAreaView
      style={styles.container}>
      <Stack.Screen options={{
        headerStyle: {
          backgroundColor: Colors.background, 
        },
        // headerTintColor: '#000',
        headerShadowVisible: false,
        headerLeft: () => (
          <TouchableOpacity style={styles.btnContainer} >
            <Image
              source={left}
              resizeMode='cover'
              style={styles.btnImg(30)}
            />
            <Text style={styles.btn}>Event 8625</Text>
          </TouchableOpacity>
        ),
        headerRight: () => (
          <TouchableOpacity style={styles.btnContainer}>
            <Image
              source={share}
              resizeMode='cover'
              style={styles.btnImg(20)}
            />
          </TouchableOpacity>
        ),
        headerTitle: "",
      }} />
<ScrollView showsVerticalScrollIndicator={false}>
<View style={{flex:1, paddingHorizontal: 10, gap:10, marginBottom:30}}>

      <IPLCard/>
      <ChartCard/>
      <BetCard/>
      <AboutCard/>
      <ButtonsCard/>
</View>
</ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    // flexDirection: 'row',
    flex:1,
    // alignItems: 'center',
    // justifyContent:'center',
    backgroundColor: COLORS.lightWhite,
    // gap: 8,
  },
  btnContainer: {
    // width: 40,
    height: 40,
    flexDirection: 'row',
    backgroundColor: Colors.background,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  btn:{
    fontSize: 17
  },
  btnImg: (dimension) => ({
    width: dimension,
    height: dimension,
  }),
  card: ({

  })
});
