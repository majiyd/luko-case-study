import React, {useEffect, useState} from 'react';
import { FlatList, StyleSheet } from 'react-native';
import api from '../api';
import InventoryItem from '../components/InventoryItem';
import { View } from '../components/Themed';
import { Inventory } from '../types';

export default function InventoryScreen() {
  useEffect(() => {
    getData()
  }, [])

  const [inventories, setInventories] = useState<Inventory[]>([])

  const getData  =  async () => {
    try {
      const response =  await api.get()
      setInventories(response.data)
      
    } catch (error) {
      console.log(`error`, error)
    }
  }
  return (
    <View style={styles.container}>
      <FlatList contentContainerStyle={styles.list} data={inventories} renderItem={({item}) => <InventoryItem details={item} />} keyExtractor={item => String(item.id)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 15
  },
  list: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  }
});
