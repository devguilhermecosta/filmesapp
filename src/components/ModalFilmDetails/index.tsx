import React from 'react';
import { 
  View, 
  Modal, 
  TouchableOpacity, 
  Text, 
  StyleSheet,
 } from 'react-native';
import { ModalProps } from '../../interfaces';

export default function ModalFilmDetails(props: ModalProps): React.JSX.Element {
  return (
    <Modal
      animationType='slide'
      transparent={true}
      visible={props.modalVisible}
    >
      <View onTouchStart={() => props.closeModal()} style={styles.container} >
        <TouchableOpacity style={[styles.areaButton, styles.topRounded]} onPress={() => props.closeModal()}>
          <Text style={[
            styles.text, 
            styles.centeredText, 
            styles.closeButton,
            styles.topRounded,
            ]}>fechar</Text>
        </TouchableOpacity>

        <View style={styles.modalContainer}>
          <Text style={[styles.text, styles.centeredText, styles.marginText]}>{props.title}</Text>
          <Text style={[styles.text, styles.justifyText]}>{props.sinopse}</Text>
        </View>
      </View>

    </Modal>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingLeft: 10,
    paddingRight: 10,
  },
  modalContainer: {
    backgroundColor: '#121212',
    padding: 10,
  },
  text: {
    color: '#fff',
    fontSize: 16,
    lineHeight: 25,
  },
  centeredText: {
    textAlign: 'center',
  },
  justifyText: {
    textAlign: 'justify',
  },
  marginText: {
    marginTop: 20,
    marginBottom: 20,
  },
  areaButton: {
    marginBottom: -1,
  },
  closeButton: {
    textTransform: 'uppercase',
    backgroundColor: 'darkred',
    padding: 10,
  },
  topRounded: {
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  }
})