import React, { useEffect } from 'react';
import { Text, View } from 'react-native';
import { fetchAllplanets } from '../services/swapiService';
import { ScrollView } from 'react-native';
import { Planet } from '../types/apiTypes';
import TochableItem from '../atoms/tochableItem';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types/screensTypes';
const PlanetsScreen = () =>{
const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
const [planets,setplanets] = React.useState<Planet[]>([]);
const[loading,setLoading] = React.useState(true);

useEffect(() => {
    const getPlanets = async () => {
        const response = await fetchAllplanets();
        setplanets(response);
        setLoading(false);
    };
    getPlanets();
}, []);
    return(
        <View>
            <ScrollView>
                {loading ? (
                    <Text>loading</Text>
                ) : (
                    <View>
                        {planets.map((planet)=>
                            <TochableItem
                            key={planet.name}
                            data={planet.name ?? 'Unknown'}
                            onPress={() => navigation.navigate('PlanetCard', { url: planet.url ?? '' })
                            }
                            />
                        )}
                    </View>
                    )}
            </ScrollView>
        </View>
    );
};
export default PlanetsScreen;
