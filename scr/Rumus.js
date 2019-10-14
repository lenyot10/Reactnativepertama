import React from 'react';
import{
    View,
     Text
     
}from 'react-native';

class Rumus extends React.Component{
    r = this.props;
    render(){
        return(
        <View>
            <Text> Nama  : {this.r.nama} </Text>
            <Text> Rumus Luas : {this.r.rumusL} </Text>
            <Text> Rumus Keliling : {this.r.keliling} </Text>
        </View>
        );
    }
}
export default Rumus;