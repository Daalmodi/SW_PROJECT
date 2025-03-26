import React from 'react';
import { View,Text, ScrollView } from 'react-native';
import { fetchFilmById } from '../services/swapiService';
import { Film } from '../types/apiTypes';
import { lightTheme } from '../themes/themes';


const FilmCard = () =>{
    const [data, setData] = React.useState<Film[]>([]);
    const [loading, setLoading] = React.useState<boolean>(true);

    React.useEffect(() => {
        const getData = async () => {
          const response = await fetchFilmById('2');
          setData([response]);
          setLoading(false);
        };
        getData();
      }, []);

      return (
        <View style={lightTheme.cardContainer}>
          <ScrollView>
            {loading ? (
              <Text>Cargando...</Text>
            ) : (
              <View style={lightTheme.infoContainer}>
                <Text style={lightTheme.title}>{data[0].title}</Text>
                <Text style={lightTheme.info}>Director: {data[0].director}</Text>
                <Text style={lightTheme.info}>Producer: {data[0].producer}</Text>
                <Text style={lightTheme.info}>Release Date: {data[0].release_date}</Text>
                <Text style={lightTheme.info}>Summary: {data[0].opening_crawl}</Text>
              </View>
            )}
          </ScrollView>
        </View>
      );
    };

export default FilmCard;
