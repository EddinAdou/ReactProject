import React from 'react';
import { SafeAreaView, TextInput, StyleSheet } from 'react-native';

const Input = ({ value, onChangeText, placeholder }) => {
  return (
    <SafeAreaView>
            <TextInput style={[styles.input,
             { backgroundColor: 'white', color: 'black' }]} 
            placeholder="Nouvel objectif" value={nvGoal}
            onChangeText={(text) => setnvGoal(text)}
             />

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    width: '80%',
    marginBottom: 10,
    padding: 10,
    borderRadius: 5,
    borderColor: '#fac309',
    borderWidth: 1,
    textAlign: 'center',
    backgroundColor: '#fff',
  },
});

export default Input;
