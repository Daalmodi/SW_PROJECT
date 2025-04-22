import React from 'react';
import { ListItemProps } from '../types/apiTypes';
import { TouchableOpacity } from 'react-native';


import { Text } from 'react-native';
import { useSelector } from 'react-redux';
import { ThemeState } from '../types/themeTypes';
import { darkTheme, lightTheme } from '../themes/themes';
const TochableItem: React.FC<ListItemProps> = ({data,onPress})=>{
  const themeState = useSelector((state:{theme:ThemeState})=>state.theme.theme);
  const theme = themeState === 'light' ? lightTheme : darkTheme;
    return(
        <TouchableOpacity style={theme.FilmItem} onPress={onPress}>
            <Text style={theme.itemText}>{data}</Text>
        </TouchableOpacity>
    );

};

export default TochableItem;
