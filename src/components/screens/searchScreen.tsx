import { Text, TextInput, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { fetchSearchALL } from '../services/swapiService';
import TochableItem from '../atoms/tochableItem';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types/screensTypes';
import { useSelector } from 'react-redux';
import { ThemeState } from '../types/themeTypes';
import { darkTheme, lightTheme } from '../themes/themes';

const SearchScreen = () => {
    const themeState = useSelector((state:{theme:ThemeState})=>state.theme.theme);
    const theme = themeState === 'light' ? lightTheme : darkTheme;
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
    const [query,setQuery] = useState<string>('');
    const[results,setResults] = useState<{films : any[];characters:any[];planets:any[]}>({
        films:[],
        characters:[],
        planets:[]});

    useEffect(() =>{
        if (query.length < 3) return;
        const fetchData = async () =>{
            const {films,characters,planets} = await fetchSearchALL(query);
            setResults({
                films: films,
                characters: characters,
                planets: planets,
            });
        };
        const delay = setTimeout(fetchData,500);
        return()=> clearTimeout(delay);

    },[query]);

    return (
        <View>
            <TextInput
                placeholder="Search"
                value={query}
                onChangeText={setQuery}
                style={theme.input}
            />
            {/* Mostrar los resultados de las películas */}
            <Text style={theme.textField}>Películas</Text>
                <View>
                    {results.films.map((film)=>
                        <TochableItem
                            key={film.title}
                            data={film.title ?? 'Unknown'}
                            onPress={() => navigation.navigate('FilmCard',{url: film.url ?? ''})}
                        />
                    )}
                </View>

            {/* Mostrar los resultados de los personajes */}
            <Text style={theme.textField} >Personajes</Text>
                <View>
                    {results.characters.map((character)=>
                    <TochableItem
                        key={character.name}
                        data={character.name ?? 'Unknown'}
                        onPress={()=> navigation.navigate('CharacterCard',{url: character.url ?? ''})}
                    />
                    )}
                </View>

            {/* Mostrar los resultados de los planetas */}
            <Text  style={theme.textField}>Planetas</Text>
                <View>
                    {results.planets.map((planet)=>
                        <TochableItem
                            key={planet.name}
                            data={planet.name ?? 'Unknown'}
                            onPress={()=> navigation.navigate('PlanetCard',{url: planet.url ?? ''})}
                        />
                    )}
                </View>
        </View>
    );
};

export default SearchScreen;
