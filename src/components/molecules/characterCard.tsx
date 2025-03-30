import React, { useEffect } from 'react';
import { CharacterCardProps } from '../types/screensTypes';
import { Character } from '../types/apiTypes';
import { fetchCharacterByUrl } from '../services/swapiService';
import { ScrollView, Text, View } from 'react-native';
import { lightTheme } from '../themes/themes';
const CharacterCard: React.FC<CharacterCardProps> = ({route})=>{
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
        <View style={lightTheme.cardContainer}>
          <ScrollView>
            {loading ? (
              <Text>Cargando...</Text>
            ) : (
              <View style={lightTheme.infoContainer}>
                <Text style={lightTheme.title}>{data[0].name}</Text>
                <Text style={lightTheme.info}>Mass: {data[0].mass}</Text>
                <Text style={lightTheme.info}>Hair color: {data[0].hair_color}</Text>
                <Text style={lightTheme.info}>Skin color: {data[0].skin_color}</Text>
                <Text style={lightTheme.info}>Eye color:  {data[0].eye_color}</Text>
                <Text style={lightTheme.info}>Birth year:  {data[0].birth_year}</Text>
                <Text style={lightTheme.info}>Gender:  {data[0].gender}</Text>
              </View>
            )}
          </ScrollView>
        </View>
      );
};
export default CharacterCard;
