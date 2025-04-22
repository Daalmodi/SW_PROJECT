import React, { useEffect } from 'react';
import { CharacterCardProps } from '../types/screensTypes';
import { Character } from '../types/apiTypes';
import { fetchCharacterByUrl } from '../services/swapiService';
import { ScrollView, Text, View } from 'react-native';
import { darkTheme, lightTheme } from '../themes/themes';
import { useSelector } from 'react-redux';
import { ThemeState } from '../types/themeTypes';
const CharacterCard: React.FC<CharacterCardProps> = ({route})=>{
    const themeState = useSelector((state:{theme:ThemeState})=>state.theme.theme);
    const theme = themeState === 'light' ? lightTheme : darkTheme;
    const [data,setData] = React.useState<Character[]>([]);
    const[loading,setLoading] = React.useState<boolean>(true);
    const{ url } = route.params;
    useEffect(()=>{
        const getData = async ()=>{
            const response = await fetchCharacterByUrl(url);
            setData([response]);
            setLoading(false);
        };
        getData();
    },[url]);

return (
        <View style={theme.cardContainer}>
          <ScrollView>
            {loading ? (
              <Text>Cargando...</Text>
            ) : (
              <View style={theme.infoContainer}>
                <Text style={theme.title}>{data[0].name}</Text>
                <Text style={theme.info}>Mass: {data[0].mass}</Text>
                <Text style={theme.info}>Hair color: {data[0].hair_color}</Text>
                <Text style={theme.info}>Skin color: {data[0].skin_color}</Text>
                <Text style={theme.info}>Eye color:  {data[0].eye_color}</Text>
                <Text style={theme.info}>Birth year:  {data[0].birth_year}</Text>
                <Text style={theme.info}>Gender:  {data[0].gender}</Text>
              </View>
            )}
          </ScrollView>
        </View>
      );
};
export default CharacterCard;
