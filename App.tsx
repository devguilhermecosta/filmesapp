import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import { FilmeProps } from './src/interfaces';
import api from './src/services/api';

export default function App(): React.JSX.Element {
  const [filmes, setFilmes] = useState<FilmeProps[]>([]);

  useEffect(() => {
    async function getFilmes() {
      await api.get('r-api/?api=filmes')
      .then((r) => setFilmes(r.data));
    }

    getFilmes();

  }, []);

  return (
    <View>
      <Text>teste</Text>
    </View>
  );
}
