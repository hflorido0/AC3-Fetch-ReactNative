import { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { CheckConexion } from '../dao/CheckConexion';



export default function Conexion() {
    const [showModal, setShowModal] = useState(false);
    const [movies, setMovies] = useState<Movies>();

    async function checkData () {
        const mov = await CheckConexion();
        setMovies(mov);
    }

    useEffect(() => {
        setShowModal(false);
        checkData();
    }, []);

    return (
        <View>
            <Text>{movies?.title}</Text>
            <Text>{movies?.description}</Text>
            {movies?.movies?.map((item, index) => (
                <View key={item.id}>
                    <Text>{item.title}</Text>
                    <Text>{item.releaseYear}</Text>
                </View>
            ))}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  