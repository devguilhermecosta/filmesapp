import React, { useState } from 'react';
import { 
  View, 
  Text, 
  Image, 
  TouchableOpacity,
  StyleSheet
 } from 'react-native';
import { FilmItemProps } from '../../interfaces';
import ModalFilmDetails from '../ModalFilmDetails';

export default function FilmItem(props: FilmItemProps): React.JSX.Element {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.name}>{props.data.nome}</Text>

      <View>
        <Image
          source={{ uri: props.data.foto }}
          style={styles.image}
        />

        <View style={styles.buttonArea}>
          <TouchableOpacity style={styles.button} onPress={() => setModalVisible(true)}>
            <Text style={styles.buttonText}>leia mais</Text>
          </TouchableOpacity>
        </View>

        <ModalFilmDetails
          modalVisible={modalVisible}
          title={props.data.nome}
          sinopse={props.data.sinopse}
          closeModal={() => setModalVisible(false)}
        />

      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 40,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  name: {
    fontSize: 20,
    color: '#000',
    paddingLeft: 10,
    paddingTop: 15,
    paddingBottom: 15,
  },
  image: {
    width: '100%',
    height: 250,
    objectFit: 'cover',
  },
  buttonArea: {
    alignItems: 'flex-end',
    marginTop: -45,
  },
  button: {
    width: 100,
    backgroundColor: '#0081F1',
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    padding: 8,
    fontSize: 16,
    textTransform: 'uppercase',
  }
})