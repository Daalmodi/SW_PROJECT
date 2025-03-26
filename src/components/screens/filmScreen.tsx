

import FilmCard from '../molecules/filmCard';
import React from 'react';

import { FilmScreenProps } from '../types/screensTypes';
import { Text } from 'react-native';
import { View } from 'react-native';


 const FilmScreen: React.FC<FilmScreenProps> = () => {
    return(
        <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
            <Text> hoL</Text>
            <FilmCard/>
        </View>
    );
 };
 

export default FilmScreen;
