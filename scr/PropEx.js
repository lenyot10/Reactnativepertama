import React from 'react';
import{
    View,
     Text
     
}from 'react-native';



class Propex extends React.Component{
    p = this.props;
    render(){
        
        return(
            
            <View>
                
                <Text> Contoh PropEx </Text>
                <Text> Nama : {this.p.nama} </Text>
                <Text> Alamat : {this.p.alamat}</Text>
                <Text> Telpon : {this.p.telpon}</Text>
                <Text> Email : {this.p.email}</Text>
        </View>

        )
    }
}
export default Propex;