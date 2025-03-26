
import { StyleSheet } from 'react-native';

export  const lightTheme = StyleSheet.create({
    cardContainer: {
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        padding: 16,
        margin: 16,
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 3.84,
        elevation: 7,
        borderColor: '#DDDDDD',
        borderWidth:1,
        maxHeight:600,
        height:600,
        width:350,
      },
      title: {
        fontFamily: 'Open Sans',
        textAlign: 'center',
        justifyContent:'center',
        fontSize: 25,
        fontWeight: 'bold',
        color: '#333333',
        marginBottom: 8,
      },
      infoContainer: {

        flexDirection: 'column',
        justifyContent: 'space-between',
      },
      info: {
        fontFamily: 'Open Sans',
        fontSize: 17,
        color: '#666666',
      },
});
