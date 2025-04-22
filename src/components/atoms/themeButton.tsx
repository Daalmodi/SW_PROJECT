import { TouchableOpacity, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { ThemeActionTypes, ThemeState} from '../types/themeTypes';
import { darkTheme, lightTheme } from '../themes/themes';
import Icon from 'react-native-vector-icons/FontAwesome';

 const ThemeButton = ()=>{
    const dispatch = useDispatch();
    const themeState = useSelector((state:{theme:ThemeState})=>state.theme.theme);
    const theme = themeState === 'light' ? lightTheme : darkTheme;
    const handleToggleTheme = ()=>{
        console.log('Change the theme: ',themeState);

        dispatch({
            type: ThemeActionTypes.TOGGLE_THEME});
    };
    return(
        <View >
            <TouchableOpacity onPress={handleToggleTheme} style={theme.themeButton}>
                {themeState === 'dark' ?
                <Icon name="moon-o"
                size={30}
                color={'white'}
                /> :
                <Icon name="sun-o"
                color={'white'}
                size={30}/>
                }
            </TouchableOpacity>
        </View>
    );
};
export default ThemeButton;
