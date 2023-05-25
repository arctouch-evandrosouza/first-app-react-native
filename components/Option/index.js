import React from 'react';
import { 
    StyleSheet, 
    Text, 
    View,
    StatusBar,
    TouchableOpacity,
    Touchable
 } from 'react-native';


const StatusBarHeigth = StatusBar.currentHeight ? StatusBar.currentHeight + 2 : 60;

export default function Header({ text, checkAnwser, id }) {
  return (
    <View style={styles.container}>
    <TouchableOpacity activeOpacity={0.5} style={styles.buttonHeader} onPress={() => checkAnwser(id)}>
        <Text style={styles.option}>{ text }</Text>
    </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
    },
    option: {
      backgroundColor: '#ccc',
      textAlign: 'center',
      color: '#111',
      width: 150,
      borderRadius: 12,
      padding: 20,
      margin: 12
    }
});