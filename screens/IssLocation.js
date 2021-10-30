import React, { Component } from 'react';
import { Text, View,StyleSheet,ImageBackground,StatusBar,SafeAreaView,Image,Alert,Platform } from 'react-native';
import MapView,{Marker } from 'react-native-maps';
import axios from "axios";

export default class IssLocationScreen extends Component {
constructor(props){
    super();
    this.state = {
        location:{}
    };
};


componentDidMount(){
    this.getISSLocation()
    
}

getISSLocation = () =>{
    axios
    .get("https://api.wheretheiss.at/v1/satellites/25544")
    .then(response => {
        this.setState({location:response.data})
    })

    .catch(error =>{
        Alert.alert(error.message)
    })
    
}
    
    render() {

        <View style={{
            flex:1,
            justifyContent:"center",
            alignItems:"center",
            
        }}>
            <Text>Loading</Text>
        </View>
        
        return (
            
            <View style={styles.container}>
                <ImageBackground source= {require("../assets/iss_bg.jpg")}/>
            <View
                style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                <Text>ISS Location Screen!</Text>
            </View>
            <View style={styles.mapContianer}>
                <MapView
                style={styles.map}
                region = {{
                    latitude = this.state.location.latitude,
                    longitude = this.state.location.longitude,
                    latitudeDelta:100,
                    longitudeDelta:100,
                }}
                >
                    <Marker
                corodinate = {{
                    latitude: this.state.location.latitude,
                    longitude:this.state.location.longitude,
                }}  >
                  </Marker>  
                </MapView>
                </View>
                </View>
                
                
        )
    }

}
const styles = StyleSheet.create({
    container:{
        flex:1,
        
    },
    backgroundImage:{
        flex:1,
        resizeMode:"cover",

    },
    titleContainer:{
        flex:0.1,
        justifyContent:'center',
        alignItems:'center',
    }
})