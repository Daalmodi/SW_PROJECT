
import { View } from 'react-native';
import React from 'react';
import MenuNav from '../molecules/menuNav';
import ScreensNavigation from '../navigation/screensNavigation';
import ThemeButton from '../atoms/themeButton';
import { lightTheme,darkTheme } from '../themes/themes';
import { useSelector } from 'react-redux';
import { ThemeState } from '../types/themeTypes';

const StaticScreen : React.FC = () => {
const themeState = useSelector((state:{theme:ThemeState})=>state.theme.theme);
const theme = themeState === 'light' ? lightTheme : darkTheme;
return(
        <View style={theme.staticContainer}>
            <View style={theme.header}>
                <ThemeButton/>
            </View>
            <View style={theme.tree}>
              <ScreensNavigation/>
            </View>
            <View style={theme.footer}>
                <MenuNav/>
            </View>
         </View>

    );
};



export default StaticScreen;
