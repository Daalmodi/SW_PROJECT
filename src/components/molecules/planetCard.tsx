import React from 'react';
import { Planet } from '../types/apiTypes';
import { fetchPlanetByUrl } from '../services/swapiService';
import { ScrollView, Text, View } from 'react-native';
import { lightTheme } from '../themes/themes';
import { PlanetCardProps } from '../types/screensTypes';
const PlanetCard : React.FC<PlanetCardProps> = ({route}) =>{

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
        <View style={lightTheme.cardContainer}>
          <ScrollView>
            {loading ? (
              <Text>Cargando...</Text>
            ) : (
              <View style={lightTheme.infoContainer}>
                <Text style={lightTheme.title}>{data[0].name}</Text>
                <Text style={lightTheme.info}>Rotation  period: {data[0].rotation_period}</Text>
                <Text style={lightTheme.info}>Orbital period: {data[0].orbital_period}</Text>
                <Text style={lightTheme.info}>Diameter {data[0].diameter}</Text>
                <Text style={lightTheme.info}>Climate:  {data[0].diameter}</Text>
              </View>
            )}
          </ScrollView>
        </View>
      );

};
export default PlanetCard;
