import React from 'react';
import { ListItemProps } from '../types/apiTypes';
import { TouchableOpacity } from 'react-native';
import { StyleSheet } from 'react-native';

import { Text } from 'react-native';
const TochableItem: React.FC<ListItemProps> = ({data,onPress})=>{
    return(
        <TouchableOpacity style={styles.item} onPress={onPress}>
            <Text style={styles.itemText}>{data}</Text>
        </TouchableOpacity>
    );

};
const styles = StyleSheet.create({
    item: {
      backgroundColor: '#333',
      padding: 15,
      marginVertical: 10,
      borderRadius: 10,
      alignItems: 'center',
    },
    itemText: {
      fontSize: 18,
      color: '#FFF',
      fontWeight: 'bold',
    },
  });

export default TochableItem;
