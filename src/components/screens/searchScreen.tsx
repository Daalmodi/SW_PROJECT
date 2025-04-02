import { FlatList, Text, TextInput, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { fetchSearchALL } from '../services/swapiService';

const SearchScreen = () => {
    const [query,setQuery] = useState<string>('');
    const[results,setResults]= useState<{films : any[];characters:any[];planets:any[]}>({
        films:[],
        characters:[],
        planets:[]});

    useEffect(() =>{
        if (query.length< 3)return;
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
                style={{ borderWidth: 1, padding: 10, margin: 10 }}
            />
            {/* Mostrar los resultados de las películas */}
            <Text >Películas</Text>
            <FlatList
                data={results.films}
                keyExtractor={(item) => item.title}
                renderItem={({ item }) => <Text>{item.title}</Text>}
             />

      {/* Mostrar los resultados de los personajes */}
            <Text>Personajes</Text>
             <FlatList
                data={results.characters}
                keyExtractor={(item) => item.name}
                renderItem={({ item }) => <Text >{item.name}</Text>}
      />

      {/* Mostrar los resultados de los planetas */}
            <Text>Planetas</Text>
            <FlatList
                data={results.planets}
                keyExtractor={(item) => item.name}
                renderItem={({ item }) => <Text>{item.name}</Text>}
            />
        </View>
    );
};

export default SearchScreen;
