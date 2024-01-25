import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, SafeAreaView, TextInput, Button, Alert } from 'react-native';

let sampleGoals = [{
  id: "1",
  name: "Faire les courses"
},
{
  id: "2",
  name: "Aller à la salle de sport 3 fois par semaine"
},
{
  id: "3",
  name: "Monter à plus de 5000m d'altitude"
},
{
  id: "3",
  name: "Acheter mon premier appartement"
},
{
  id: "4",
  name: "Perdre 5 kgs"
},
{
  id: "5",
  name: "Gagner en productivité"
},
{
  id: "6",
  name: "Apprendre un nouveau langage"
},
{
  id: "7",
  name: "Faire une mission en freelance"
},
{
  id: "8",
  name: "Organiser un meetup autour de la tech"
},
{
  id: "9",
  name: "Faire un triathlon"
},
];

const Item = ({name}) => (
  <View style={styles.item}>
    <Text style={styles.name}>{name}</Text>
  </View>
);

const App = () => {
  const [newGoal, setNewGoal] = React.useState('');

  const addGoal = () => {
    if (!newGoal) {
      Alert.alert('Veuillez saisir un objectif');
      return;
    }

    const updatedGoals = [...sampleGoals, {
      id: sampleGoals.length + 1,
      name: newGoal,
    }];

    sampleGoals = updatedGoals;
    setNewGoal('');

    const updatedFlatListData = sampleGoals.map((goal) => ({
      id: goal.id,
      name: goal.name,
    }));

    return updatedFlatListData;
  };

  return (
    <SafeAreaView style={styles.container}>
      <TextInput style={styles.input}
        placeholder="Nouvel objectif"
        value={newGoal}
        onChangeText={(text) => setNewGoal(text)}
        
      />
      <Button
        title="Add"
        onPress={addGoal}
        color={'black'}
        backgroundColor={'#007AFF'}
        borderBottomColor={'#737373'}
        />
      <FlatList
        data={sampleGoals}
        renderItem={({item}) => <Item name={item.name} />}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  containers: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'red',
    fontWeight: 'bold',
    fontSize: '100px',
  },
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: 'grey',
    padding: 20,
    marginVertical: 30,
    marginHorizontal: 20,
    borderRadius: 5,
    fontWeight: 'bold'
  },
  title: {
    fontSize: 32,
  },
  input: {
    width: '80%',
    marginBottom: 20,
    padding: 15,
    borderRadius: 5,
    borderColor: '#ccc',
    borderWidth: 1,
    flex: 1,
    borderBottomWidth: 1,
    marginRight: 10,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  name:{
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center'
  }
});
export default App;