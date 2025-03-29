

import React, { useEffect } from 'react';
import { Film } from '../types/apiTypes';
import { fetchAllFilms } from '../services/swapiService';
import { ScrollView, Text, View } from 'react-native';
import TochableItem from '../atoms/tochableItem';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types/screensTypes';





 const FilmScreen = () => {
        const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
        const [films,setFilms] = React.useState<Film[]>([]);
        const [loading,setLoading] = React.useState<boolean>(true);
        useEffect(()=>{
                const getFilms = async() =>{
                        const response = await fetchAllFilms();
                        setFilms(response);
                        setLoading(false);
                };
                getFilms();

        },[]);
    return(
        <View>
                <ScrollView>
                        {loading ? (
                                <Text>loading</Text>
                        ) : (
                                <View>
                                        {films.map((film)=>
                                                <TochableItem
                                                key={film.title}
                                                data={film.title ?? 'Unkown'}
                                                onPress={()=> navigation.navigate('FilmCard',{url: film.url ?? '' })}
                                                />
                                        )}
                                </View>
                        )}
                </ScrollView>
        </View>

    );
 };


export default FilmScreen;
