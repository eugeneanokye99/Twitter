import {FlatList, StyleSheet } from 'react-native';
import tweets from '../../assets/data/tweets';
import Tweet from '../../components/Tweets';
import { View } from '../../components/Themed';


export default function TabOneScreen() {
  return (
    <View style={styles.page}>
      <FlatList 
      data={tweets}
      renderItem ={({item}) => (
        <Tweet tweet={item} />
      )}
      />
      
    </View>
    
  );
}

const styles = StyleSheet.create({
  page: {
    backgroundColor: 'white',
    flex: 1,
  }
});
