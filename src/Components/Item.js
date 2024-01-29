import React, { useState } from 'react';
import { View, Text, StyleSheet, Pressable, Modal, TouchableOpacity } from 'react-native';

const Item = ({ id, name, onDelete }) => {
  const [modalVisible, setModalVisible] = useState(false);

  const confirmDelete = () => {
    setModalVisible(false);
    onDelete();
  };

  return (
    <View style={styles.item}>
      <Text style={styles.name}>{name}</Text>
      <Pressable onPress={() => setModalVisible(true)} style={styles.buttonX}><Text style={styles.delete}>✘</Text></Pressable>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(false);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Êtes-vous sûr de vouloir supprimer cet objectif ?</Text>
            <View style={styles.buttonContainer}>
              <TouchableOpacity onPress={confirmDelete} style={[styles.button, styles.buttonDelete]}>
                <Text style={styles.buttonText}>Supprimer</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => setModalVisible(false)} style={[styles.button, styles.buttonCancel]}>
                <Text style={styles.buttonText}>Annuler</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};


export default Item;
const styles = StyleSheet.create({
  name: {
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
    fontFamily: 'Impact',
  },
  item: {
    backgroundColor: '#f2f3f4',
    padding: 20,
    marginVertical: 30,
    marginHorizontal: 20,
    borderRadius: 15,
    fontWeight: 'bold'
  },
  delete:{
    fontSize: 40,
    color: 'red',
    flex: 1,
  },
  buttonX:{
    width: 20,
    paddingTop: 10,
    paddingBottom: 0,
    marginBottom: 10,
    margin: 10,
    height: 50,
    alignSelf: 'center',
    marginRight: 24,
    paddingRight: -30,
    paddingLeft: -30
    
  },
  centeredView:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalView: {
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    fontSize: 18,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    margin: 10,
  },
  buttonDelete: {
    backgroundColor: 'red',
  },
  buttonCancel: {
    backgroundColor: 'gray',
  },
  buttonAdd: {
    backgroundColor: 'green',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  addButton: {
    backgroundColor: '#007AFF',
    borderRadius: 20,
    padding: 10,
    margin: 10,
    width: '80%',
    alignSelf: 'center',
  },
  addButtonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 16,
  },
})