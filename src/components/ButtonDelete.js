import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons'; 

const DeleteButton = ({ onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Icon name="delete" size={24} color="#fff" />
      <Text style={styles.buttonText}>Supprimer</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row', 
    alignItems: 'center', 
    backgroundColor: '#ff4444', 
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 8, 
    elevation: 3,
    shadowColor: '#000', 
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    width: 'auto'
  },
  buttonText: {
    color: '#fff', 
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 8, 
  },
});

export default DeleteButton;