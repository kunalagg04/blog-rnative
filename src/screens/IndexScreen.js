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
import { Context } from '../context/BlogContext';
import { Ionicons } from '@expo/vector-icons';

const IndexScreen = () => {

    const { state , addBlogPost , deleteBlogPost} = useContext(Context);

    return (
        <View>
            <Button onPress={() => addBlogPost() } title="Add Post"/>
            <FlatList 
              data = {state}
              keyExtractor={blogPost => blogPost.title}
              renderItem={({ item }) => {
                return <View style={styles.row}>
                  <Text style={styles.title}>  {item.title} - {item.id}  </Text>
                  <TouchableOpacity onPress={() => deleteBlogPost()}>
                  <Ionicons name="ios-trash" style={styles.icon} />
                  </TouchableOpacity>
              
                </View>
              }}
                />
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