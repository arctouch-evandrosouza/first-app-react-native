import React from 'react';
import { 
    StyleSheet, 
    Text, 
    View,
    StatusBar,
    TouchableOpacity
 } from 'react-native';

 import { Feather } from '@expo/vector-icons';


const StatusBarHeigth = StatusBar.currentHeight ? StatusBar.currentHeight + 2 : 60;

export default function Header({ startGame }) {
  return (
    <View style={styles.container}>
        <View style={styles.content}>
        <Text style={styles.heading}>English Game</Text>
        <TouchableOpacity activeOpacity={0.8} style={styles.buttonHeader} onPress={startGame}>
            <Feather name="refresh-ccw" size={27} color="#FFF"/>
        </TouchableOpacity>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#8000ff',
      color: '#fff',
      paddingTop: StatusBarHeigth,
      flexDirection: 'row',
      paddingStart: 16,
      paddingEnd: 16,
      paddingBottom: 25
    },
    content: {
      flex: 1,
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'space-between'
    },
    heading: {
        fontSize: 18,
        color: '#fff',
        fontWeight: 'bold',
    },
    buttonHeader: {
        width: 44,
        height: 44,
        backgroundColor: 'rgba(255,255,255,0.5)',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 44 / 2
    }
});