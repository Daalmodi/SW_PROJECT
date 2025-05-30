import React from 'react';
import { Planet } from '../types/apiTypes';
import { fetchPlanetByUrl } from '../services/swapiService';
import { ScrollView, Text, View } from 'react-native';
import { darkTheme, lightTheme } from '../themes/themes';
import { PlanetCardProps } from '../types/screensTypes';
import { useSelector } from 'react-redux';
import { ThemeState } from '../types/themeTypes';
const PlanetCard : React.FC<PlanetCardProps> = ({route}) =>{
    const themeState = useSelector((state:{theme:ThemeState})=>state.theme.theme);
    const theme = themeState === 'light' ? lightTheme : darkTheme;
    const [data,setData] = React.useState<Planet[]>([]);
    const [loading,setLoading] = React.useState<boolean>(true);
    const { url } = route.params; // Obtener la URL desde las props
    React.useEffect(()=>{
        const getData = async ()=>{
            const response = await fetchPlanetByUrl(url);
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
                <Text style={theme.info}>Rotation  period: {data[0].rotation_period}</Text>
                <Text style={theme.info}>Orbital period: {data[0].orbital_period}</Text>
                <Text style={theme.info}>Diameter {data[0].diameter}</Text>
                <Text style={theme.info}>Climate:  {data[0].diameter}</Text>
              </View>
            )}
          </ScrollView>
        </View>
      );

};
export default PlanetCard;
