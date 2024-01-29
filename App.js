import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, SafeAreaView, TextInput, Button, Alert, Pressable, Modal } from 'react-native';
import Item from './src/Components/Item'; 
import Todo from './src/Components/Todo';
import Input from './src/Components/Input';
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
<Item/>

const App = () => {

 const [nvGoal, setnvGoal] = React.useState('');
 const [flatData, setFlatData] = React.useState(sampleGoals);
 const [isModalVisible, setIsModalVisible] = useState(false);

 const toggleModal = () => {
  setIsModalVisible(!isModalVisible);
};


 const deleteGoals = (id) => {
  const mjGoals = flatData.filter((goal) => goal.id !== id);
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
      <Todo/>

      <TextInput style={[styles.input, { backgroundColor: 'white', color: 'black' }]} placeholder="Nouvel objectif" value={nvGoal} onChangeText={(text) => setnvGoal(text)} 
      />
      <View >
        <Pressable onPress={ajoutGoal} style={styles.but}>
        <Text style={styles.add}>⊕</Text>
        </Pressable>
      </View>
      
      <FlatList
        data={flatData}
        renderItem={({item}) => <Item name={item.name} key={item.id} onDelete={() => deleteGoals(item.id)}/>}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  containers: {
    flex: 1,
    backgroundColor: '#blue',
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
    alignItems: 'center',
    backgroundColor: '#007FFF',
    fontFamily: 'Impact',
  },
  title: {
    fontSize: 32,
    fontFamily: 'Impact',
  },
  input: {
    width: '80%',
    marginBottom: 1,
    padding: 20,
    color: 'black',
    borderRadius: 5,
    borderColor: '#fac309',
    borderWidth: 1,
    borderBottomWidth: 3,
    marginRight: 10,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#ffff'
  },
  but:{
    borderColor: "#09e8fa",
    
    fontSize: 45,
    padding: 10,
    margin: 10,
    fontSize: 55,
    fontWeight: 'bold',
  },
  add:{
    fontSize: 50,
    paddingBottom: '-10',
    color: '#030303',
  },
 
  
});
export default App;