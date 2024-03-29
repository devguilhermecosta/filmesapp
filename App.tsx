import React, { useState, useEffect } from 'react';
import { View, FlatList, StyleSheet, ActivityIndicator } from 'react-native';
import { FilmProps } from './src/interfaces';
import api from './src/services/api';
import FilmItem from './src/components/Film';

export default function App(): React.JSX.Element {
  const [films, setFilms] = useState<FilmProps[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getFilmes() {
      await api.get('r-api/?api=filmes')
      .then((r) => {
        {setFilms(r.data)};
        setLoading(false);
      });
    }

    getFilmes();

  }, []);

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size='large' color='#121212'/>
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={films}
        renderItem={({item}) => <FilmItem data={item}/>}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
  },
  loadingContainer: {
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center'
  },
})
