import { ViewProps, StyleSheet, View, Text } from "react-native";

import { MaterialCommunityIcons } from '@expo/vector-icons';
import { StatusBar } from "expo-status-bar";
import { LinearGradient } from 'expo-linear-gradient';


export type WeatherProps = ViewProps & {
  temp: number;
  con:  keyof typeof weatherOptions;
};

export default function Weather({ temp, con }: WeatherProps) {
  return (
    <LinearGradient
      colors={weatherOptions[con].gradient}
      style={styles.container}
    >
      <StatusBar 
        style='light'
        translucent
        backgroundColor='transparent' 
      />
      <View style={styles.halfcontainer}>
        <MaterialCommunityIcons
          name={weatherOptions[con].iconName}
          size={120}
          color="#fff"
        />

        <Text style={styles.temp}>{Math.round(temp)}°</Text>
      </View>
      <View style={{ ...styles.halfcontainer, ...styles.textcontainer }}>
        <Text style={styles.title}>{weatherOptions[con].title}</Text>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      
    },
    halfcontainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: 'center'
    },
    textcontainer: {
        paddingHorizontal: 20,
        alignItems: 'flex-start'
    },
    temp:{
        fontSize:42,
        color: "#fff"
    },
    title:{
        color: "#fff",
        fontSize:44,
        fontWeight: '300',
        marginBottom: 10

    },
  
})

type WeatherOption = {
    iconName: keyof typeof MaterialCommunityIcons.glyphMap;
    gradient: string[];
    title: string;
  };

const weatherOptions : Record<string, WeatherOption> = {
  Thunderstorm: {
    iconName: "weather-lightning",
    gradient: ["#141E30", "#243B55"],
    title: "Be home",
   
  },
  Drizzle: {
    iconName: "weather-rainy",
    gradient: ["#3a7bd5", "#3a6073"],
    title: "Take a umbrella",
  
  },
  Rain: {
    iconName: "weather-pouring",
    gradient: ["#000046", "#1CB5E0"],
    title: "Rainy Today",
  
  },
  Snow: {
    iconName: "snowflake",
    gradient: ["#83a4d4", "#b6fbff"],
    title: "Snow!",
   
  },
  Dust: {
    iconName: "weather-windy-variant",
    gradient: ["#B79891", "#94716B"],
    title: "Dusty",
   
  },
  Smoke: {
    iconName: "weather-windy",
    gradient: ["#56CCF2", "#2F80ED"],
    title: "Smoke eveywhere",
    
  },
  Haze: {
    iconName: "weather-hazy",
    gradient: ["#3E5151", "#DECBA4"],
    title: "Haze!",
   
  },
  Mist: {
    iconName: "weather-fog",
    gradient: ["#606c88", "#3f4c6b"],
    title: "Mist",
    
  },
  Clear: {
    iconName: "weather-sunny",
    gradient: ["#56CCF2", "#2F80ED"],
    title: "Super weather",
    
  },
  Clouds: {
    iconName: "weather-cloudy",
    gradient: ["#757F9A", "#D7DDE8"],
    title: "Cloudy day",
   
  },
};
