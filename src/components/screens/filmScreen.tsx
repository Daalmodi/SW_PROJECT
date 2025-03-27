

import FilmCard from '../molecules/filmCard';
import React from 'react';

import { FilmScreenProps } from '../types/screensTypes';



 const FilmScreen: React.FC<FilmScreenProps> = () => {
    return(
            <FilmCard/>
    );
 };


export default FilmScreen;
