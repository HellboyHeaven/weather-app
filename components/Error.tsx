import { Colors } from "@/constants/Colors";
import { Stack, Link } from "expo-router";
import React from "react";
import { View, Text, StyleSheet } from "react-native";


export default function NotFoundWeather() {
    return (
      <>
        <Stack.Screen options={{ title: 'Oops!' }} />
        <View style={styles.container}>
          <Text style={styles.text}>This screen doesn't exist.</Text>
          <Link href="/" style={styles.link}>
            <Text>Go to home screen!</Text>
          </Link>
        </View>
      </>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      padding: 20,
      backgroundColor: 'black'
    },
    text : {
      color : 'white'
    },
    link: {
      color : 'white',
      marginTop: 15,
      paddingVertical: 15,
    },
  });
  