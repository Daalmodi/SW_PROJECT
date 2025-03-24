import React from 'react';
import { View,Text, StyleSheet, FlatList } from 'react-native';
import { fetchFilmById } from '../services/swapiService';
import { Film } from '../types/apiTypes';


const FilmCard = () =>{
    const [data, setData] = React.useState<Film[]>([]);
    const [loading, setLoading] = React.useState<boolean>(true);

    React.useEffect(() => {
        const getData = async () => {
          const response = await fetchFilmById('1');
          setData([response]);
          setLoading(false);
        };
        getData();
      }, []);

      return (
        <View style={styles.container}>
          <Text style={styles.text}>Card info</Text>
          {loading ? (
            <Text>Cargando...</Text>
          ) : (
            <View>
                <FlatList
                    data={data}
                    renderItem={({ item }) => (
                    <View>
                        <Text>{item.title}</Text>
                        <Text>{item.director}</Text>
                        <Text>{item.producer}</Text>
                        <Text>{item.release_date}</Text>
                        <Text>{item.opening_crawl}</Text>
                    </View>
                    )}
                />
            </View>
          )}
        </View>
      );
    };

    const styles = StyleSheet.create({
        container :{
            flex:1,
            backgroundColor: '#fff',
            padding: 16 ,
        },
        text:{
            fontSize:20,
            color: 'red',
        },
      });


export default FilmCard;
