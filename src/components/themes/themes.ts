
import { StyleSheet } from 'react-native';

export  const lightTheme = StyleSheet.create({ 
    staticContainer:{
      flexDirection: 'column',
      flex:1,
      backgroundColor:'#777F87',
    },
    header:{
      flexDirection:'row',
      alignItems:'center',
      flex:0.5,
      backgroundColor:'#0D8AA6',
      width:'100%',
      height:700,
      justifyContent:'flex-end',
    },
    tree : {

      flex:3,
      backgroundColor:'#777F87',
      padding:10,

    },
    footer:{
      flex:0.5,
      flexDirection:'column',
     backgroundColor:'#0D8AA6',
     alignContent :'center',
     justifyContent:'center',
     borderTopStartRadius:30,
      borderTopEndRadius:30,
     borderBlockColor:'transparent',
    },
    cardContainer: {
        backgroundColor: 'white',
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
      themeButton:{
        backgroundColor:'#0D8AA6',
        padding:10,
        borderRadius:5,
      },
      FilmItem:{
       backgroundColor: 'white',
       padding: 15,
       marginVertical: 10,
       borderRadius: 10,
       alignItems: 'center',

      },
      itemText:{
        fontSize: 18,
        color: 'black',
         fontWeight: 'bold',
      },
      input:{
        borderWidth:1,
        borderColor:'#0D8AA6',
        padding:10,
        margin:10,
        borderRadius:5,
        backgroundColor:'white',
      },
      textField:{
        color: 'white',
        textAlign:'center',
        fontSize:20,
        fontWeight:'bold',
        margin:10,
      },

});


export const darkTheme = StyleSheet.create({
  staticContainer:{
    flexDirection: 'column',
    backgroundColor:'#0D0D0D',
    flex:1,
  },
  header:{
    flexDirection:'row',
    flex:0.5,
    alignItems:'center',
    backgroundColor:'#8C0B23',
    width:'100%',
    height:700,
    justifyContent:'flex-end',
  },
  tree : {

    flex:3,
    backgroundColor:'#0D0D0D',
    padding:10,

  },
  footer:{
    flex:0.5,
    flexDirection:'column',
   backgroundColor:'#8C0B23',
   alignContent :'center',
   justifyContent:'center',
   borderTopStartRadius:30,
   borderTopEndRadius:30,
  },

  cardContainer: {
    backgroundColor: '#333',
    borderRadius: 10,
    padding: 16,
    margin: 16,
    shadowColor: '#000000',

    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3.84,
    elevation: 7,
    borderColor: '#444444',
    borderWidth: 1,
    maxHeight: 600,
    height: 600,
    width: 350,
  },
  title: {
    fontFamily: 'Open Sans',
    textAlign: 'center',
    justifyContent: 'center',
    fontSize: 25,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 8,
  },
  infoContainer: {
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  info: {
    fontFamily: 'Open Sans',
    fontSize: 17,
    color: '#CCCCCC',
  },
  themeButton:{
    backgroundColor:'#8C0B23',
    padding:10,
    borderRadius:5,
    alignContent:'center',
  },
  FilmItem:{
       backgroundColor: '#333',
       padding: 15,
       marginVertical: 10,
       borderRadius: 10,
       alignItems: 'center',
  },
  itemText:{
    fontSize: 18,
    color: '#FFF',
     fontWeight: 'bold',
  },
  input:{
    borderWidth:1,
    borderColor:'#8C0B23',
    padding:10,
    margin:10,
    borderRadius:5,
    backgroundColor:'white',
  },
  textField:{
    color: 'white',
    textAlign:'center',
    fontSize:20,
    fontWeight:'bold',
    margin:10,
  },

});
