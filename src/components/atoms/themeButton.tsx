import { Text, TouchableOpacity, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { ThemeActionTypes, ThemeState} from '../types/themeTypes';


 const ThemeButton = ()=>{
    const dispatch = useDispatch();
    const theme = useSelector((state:{theme:ThemeState})=>state.theme.theme);
    const handleToggleTheme = ()=>{
        console.log('Change the theme: ',theme);

        dispatch({
            type: ThemeActionTypes.TOGGLE_THEME});
    };
    return(
        <View>
            <TouchableOpacity onPress={handleToggleTheme} style={{backgroundColor:'blue', padding:10, borderRadius:5, alignContent:'center'}}>
                <Text> Theme change</Text>
            </TouchableOpacity>
        </View>
    );
};
export default ThemeButton;
