import React from 'react'
import { StyleSheet, View, Image, Text, Button, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux';

import Icon from 'react-native-vector-icons/Ionicons'
import { deletePlace } from '../../store/actions/index'

class PlaceDetail extends React.Component{

  placeDeletedHandler = () => {
    this.props.onDeletePlace(this.props.selectedPlace.key);
    this.props.navigator.pop();
  }

  render() {
    return(
      <View style={styles.container}>
        <View>
          <Image style={styles.placeImage} source={this.props.selectedPlace.image} />
          <Text style={styles.placeName}>{this.props.selectedPlace.name}</Text>
        </View>
        <View>
          <TouchableOpacity onPress={this.placeDeletedHandler} style={styles.deleteButton}>
            <Icon size={30} name = "ios-trash" color="red"/>
          </TouchableOpacity>
        </View>
      </View>
  )}
};

const styles = StyleSheet.create({
  container: {
    margin: 20,
  },
  placeImage: {
    height: 200,
    width: "100%",
  },
  placeName: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 28,
  },
  deleteButton: {
    alignItems: "center",
  }
})

const mapDispatchToProps = dispatch => {
  return {
    onDeletePlace: (key) => dispatch(deletePlace(key))
  }
}

export default connect(null, mapDispatchToProps)(PlaceDetail);
