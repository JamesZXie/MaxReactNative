import React from 'react';
import { View, Text, Dimensions, StyleSheet } from 'react-native';

class SideDrawer extends React.Component{
  render(){
    return(
      <View style={styles.container}>
        <Text>SideDrawer</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('window').width * 0.8,
    paddingTop: 22,
    flex: 1,
  }
})

export default SideDrawer;
