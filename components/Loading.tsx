import { View, StatusBar, Text, StyleSheet } from "react-native"

export default function LoadingWeather()  {
  return (
    <View style={styles.container}>
        <StatusBar barStyle="dark-content" translucent backgroundColor="transparent" />
        <Text style={styles.text}>Loading Weather...</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 30,
        paddingVertical: 100,
        backgroundColor: "#FDF6AA",
        // justifyContent: 'center',
        // ali gnItems: 'center'
    },
    text: {
        fontSize: 25,
        color: "#2c2c2c"
    }
})