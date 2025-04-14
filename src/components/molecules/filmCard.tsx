import React from 'react';
import { View,Text, ScrollView } from 'react-native';

import { Film } from '../types/apiTypes';
import { lightTheme,darkTheme } from '../themes/themes';
import { FilmCardProps } from '../types/screensTypes';
import { fetchFilmByUrl } from '../services/swapiService';
import { useSelector } from 'react-redux';
import { ThemeState } from '../types/themeTypes';


const FilmCard : React.FC<FilmCardProps> = ({route}) =>{
    const themeState = useSelector((state:{theme:ThemeState})=>state.theme.theme);
    const theme = themeState === 'light' ? lightTheme : darkTheme;
    const [data, setData] = React.useState<Film[]>([]);
    const [loading, setLoading] = React.useState<boolean>(true);
    const {url} = route.params;
    React.useEffect(() => {
        const getData = async () => {
          const response = await fetchFilmByUrl(url);
          setData([response]);
          setLoading(false);
        };
        getData();
      }, [url]);

      return (
        <View style={theme.cardContainer}>
          <ScrollView>
            {loading ? (
              <Text>Cargando...</Text>
            ) : (
              <View style={theme.infoContainer}>
                <Text style={theme.title}>{data[0].title}</Text>
                <Text style={theme.info}>Director: {data[0].director}</Text>
                <Text style={theme.info}>Producer: {data[0].producer}</Text>
                <Text style={theme.info}>Release Date: {data[0].release_date}</Text>
                <Text style={theme.info}>Summary: {data[0].opening_crawl}</Text>
              </View>
            )}
          </ScrollView>
        </View>
      );
    };

export default FilmCard;
