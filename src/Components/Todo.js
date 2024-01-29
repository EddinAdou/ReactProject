import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const Todo = () => {
  return (
    <View>
        <Text style={styles.todo}>To-do Liste</Text>
      </View>
  )
}

export default Todo;
const styles = StyleSheet.create({
    todo:{
     
        fontFamily: 'Impact',
        fontSize: 20,
        fontWeight: 'bold',
        paddingBottom: 5
      }
})