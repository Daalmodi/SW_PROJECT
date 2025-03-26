import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type RootStackParamList = {
    FilmScreen: undefined;
    PlanetsScreen: undefined;
  };

export type FilmScreenProps ={
    navigation: NativeStackNavigationProp<RootStackParamList,'FilmScreen'>;
  };


