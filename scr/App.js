import React from 'react';
import{
    ScrollView,
    View,
    Text
    
} from 'react-native';
import Rm from './Rumus';
import ProEx from './PropEx'; 
//import component prof Ex

class App extends React.Component{


    
    render(){
      //  alert('tes')
        console.log("Hello Word")
        return(
            <ScrollView
            contentInsetAdjustmentBehavior="automatic">
            <View>
                
                {/* <Text> Nama   : Ajit</Text>
                <Text> Alamat : Tangsel </Text>
                <Text> Telpon : 0895392134482</Text>
                <Text> Email  : ajitagustiani10@gmail.com </Text>

                <Text></Text>
              <ProEx nama="Gilang" alamat = 'Bandung' telpon ='0895' email='gilang@gmail.com'/> 
              <Text></Text>
              <ProEx nama="dery" alamat = 'Bandung' telpon ='0895' email='gilang@gmail.com'/> 
              <Text></Text> */}

              <Rm nama = "Persegi" rumusL ='Panjang x Lebar' keliling = '4 x sisi / (sisi x sisi x sisi x sisi)'/>
              <Text style = {style.hr}></Text>
              <Rm nama = "Persegi Panjang" rumusL ='Panjang x Lebar' keliling = '  2 x (p + l)'/>
              <Text></Text>
              <Rm nama = "Lingkaran" rumusL = '3.14 x r x r' keliling = ' 2 x 3.14 x r'/>
              <Text></Text>
              <Rm nama = "Segitiga" rumusL = '½ × a × t' keliling = ' a + b + c'/>
              <Text></Text>
              <Rm nama = "Belah ketupat" rumusL = '½ × d1 × d2' keliling = ' s + s + s + s / (s × 4)'/>

              

              
            {/* <Text>{"\n"}</Text> 
                <Text> Nama   : Dzikri </Text>
                <Text> Alamat : Depok </Text>
                <Text> Telpon : 0895392134482 </Text>
                <Text> Email  : dzikri@gmail.com </Text> */}

            </View>
            </ScrollView>
        );
    }
}

export default App;