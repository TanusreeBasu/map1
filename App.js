import * as React from 'react';
import { Dimensions, StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import MapView, { Callout, Circle, Marker } from 'react-native-maps';
//import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete'
// import {Permissions, Location} from 'expo';
// import Draggable from 'react-draggable'
// import { useState } from 'react'

export default function App () {
  const [pin, setPin] = React.useState({
    latitude: 21.7679,
    longitude: 78.8718,
                                       })
    
return (
<View style = {styles.container}>
        <MapView
              initialRegion={{
              latitude: 21.7679,
              longitude: 78.8718,
              latitudeDelta: 100,
              longitudeDelta:100,
                              }}    
              provider="google"
            style = {styles.map}>
                  <Marker
                    coordinate= {pin}
                     pinColor= "green"
                    draggable={true}
                    onDragStart={(e)=>{
                    console.log("Drag Start", e.nativeEvent.coordinates)
                    }}
                    onDragEnd={(e)=>{
                     setPin({
                       latitude:e.nativeEvent.coordinate.latitude,
                       longitude:e.nativeEvent.coordinate.longitude
                     })
                      }}

              
               >
      <Callout>
          <Text>I am here</Text> 
      </Callout>
            </Marker>
          <Circle 
      center={pin}
      radius={1000}
  />


  </MapView>
</View>
  )
            }

const styles = StyleSheet.create({
  container:{

    flex:1,
     backgroundColor:"#fff",
     alignItems:"center",
     justifyContent:"center"

  },
  map:{
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height
  }
})