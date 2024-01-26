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

const Item = ({ id, name, onDelete }) => (
  <View style={styles.item}>
    <Text style={styles.name}>{name}</Text>
    <Button title=" ᙭" onPress={onDelete}
    style={styles.buttonX} />
  </View>
);


const App = () => {
  
 const [nvGoal, setnvGoal] = React.useState('');
 const [flatData, setFlatData] = React.useState(sampleGoals);

 const deleteGoals = (id) => {
  const mjGoals = flatData.filter((goal) => goal.id !== id);
  setnvGoal('');
  setFlatData(mjGoals);
  return mjGoals;
}
  
const ajoutGoal = () => {
  if (!nvGoal) {
    Alert.alert('Veuillez saisir un objectif');
    return;
  }

  const mjGoals = [...sampleGoals, {
    id: sampleGoals.length + 1,
    name: nvGoal,
    
  }];
    
  sampleGoals = mjGoals;
  setnvGoal('');
  setFlatData(mjGoals);
  const mjFlatData = sampleGoals.map((goal) => ({
    id: goal.id,
    name: goal.name,
  }));

  return mjFlatData;
};

  return (
    <SafeAreaView style={styles.container}>
      <TextInput style={styles.input}
        placeholder="Nouvel objectif"
        value={nvGoal}
        onChangeText={(text) => setnvGoal(text)}
        
      />
      <View style={styles.but}>
        <Button
        title="⊕"
        onPress={ajoutGoal}
        color="#fff"
        fontSize={"20rem"}
        /></View>
      
      <FlatList
        data={flatData}
        renderItem={({item}) => <Item name={item.name} id={item.id} onDelete={() => deleteGoals(item.id)}/>}
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
    alignItems: 'center'
  },
  item: {
    backgroundColor: '#d1bebe',
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
    padding: 20,
    color: 'black',
    borderRadius: 5,
    borderColor: '#d1bebe',
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
  },
  but:{
    borderColor: "##d1bebe",
    backgroundColor: "black",
    borderRadius: 50,
    border: 1,
    fontSize: 30,
    padding: 10,
    margin: 10
  },
  buttonX:{
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: 'red'
  }
});
export default App;