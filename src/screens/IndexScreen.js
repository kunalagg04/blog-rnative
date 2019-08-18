import React, { useContext, useEffect } from 'react';
// useContext for getting access to context wala data
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Button,
  TouchableOpacity
} from 'react-native';
import BlogContext from '../context/BlogContext';

const IndexScreen = () => {

    const value = useContext(BlogContext);

    return (
        <View>
            <Text>
                {value}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    row: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingVertical: 20,
      paddingHorizontal: 10,
      borderTopWidth: 1,
      borderColor: 'gray'
    },
    title: {
      fontSize: 18
    },
    icon: {
      fontSize: 24
    }
  });
  
  export default IndexScreen;