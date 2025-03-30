import React, { useEffect } from 'react';
import { View , Text} from 'react-native';
import { Character } from '../types/apiTypes';
import { fetchAllCharacters } from '../services/swapiService';
import { ScrollView } from 'react-native';
import TochableItem from '../atoms/tochableItem';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types/screensTypes';


const CharacteresScreen = () =>{
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
    const [characteres,setCharacteres] = React.useState<Character[]>([]);
    const [loading,setLoading] = React.useState<boolean>(true);

    useEffect(()=>{
        const getCharacteres = async ()=>{
            const response = await fetchAllCharacters();
            setCharacteres(response);
            setLoading(false);
        };
        getCharacteres();
    },[]);


    return(
        <View>
            <ScrollView>
                {loading ? (
                    <Text>loading</Text>
                ) : (
                    <View>
                        {characteres.map((character)=>
                        <TochableItem
                        key={character.name}
                        data={character.name ?? 'Unknown'}
                        onPress={()=>navigation.navigate('CharacterCard',{url:character.url ?? '' })
                    }
                        />
                        )

                        }
                    </View>
                )

                }
            </ScrollView>
        </View>
    );
};
export default CharacteresScreen;
