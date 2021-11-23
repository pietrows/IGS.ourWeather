import { declareClass } from '@babel/types';
import * as React from 'react';
import {StyleSheet, Text, View} from 'react-native';

// const showclimates = (data)=>{for(var i = 0; i < 2; i++){
//     return data.climates[i].hour
// }}
export function NextHours(){
    const data = {
    climates: [
        {
            hour: "18:00",
            value:  "Nublado"
        },
        {
            hour:"19:00",
            value:"Nublado"
            
        },

    ],
    compoundHumidity: '72%',
    humidity: 72

}
    return(
         <View style={estilo.container}>
             {
                data.climates.map((item)=> {
                    return <View style={estilo.clima}>
                            <Text style={estilo.text}>
                                {item.value}
                            </Text>
                            <Text style={estilo.text}>
                                {item.hour}
                            </Text>
                            </View>  
                 })
             }
             
            <View style={estilo.clima}>
                <Text style={estilo.text}>
                    {data.compoundHumidity} 
                </Text>
            </View>    
        </View>
        
    )
}
const estilo = StyleSheet. create({
    container:{
            flex: 1,
            flexDirection: 'row',
            backgroundColor:'#1F253F',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            fontSize: 25,
    },
    clima:{
        flexDirection: 'column',
        flex: 1,
    
    },
    text:{
        fontSize:  25,
        color: "white",
    }
})
