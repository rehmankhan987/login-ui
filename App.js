
import React from 'react';
import { StyleSheet, Image, View, Text, TouchableOpacity } from 'react-native';



export default class App extends React.Component {
  render(){
  return (
    <View style={styles.container}>
      <Image 
      style={{width:'100%',height:200}}
      source={require('./components/Image/logo.png')}
      resizeMode='contain'/>

      <Text style={{fontSize:40,fontWeight:'bold'}}>Hello!</Text>

      <Text style={{fontSize:16,color:'grey',textAlign:'center',marginHorizontal:20}}>
      Wellcome to login tutorial. A vedio of designing login screen
     </Text>
     
      <View style={{ flexDirection: 'row', margin: 20, paddingVertical: 20}}>

      <TouchableOpacity
        style={{backgroundColor: '#0d47a1' , padding: 10, width:150, borderRadius: 30,marginVertical:2}}>

       <Text style={{textAlign:'center',color:'#fff',fontSize:18}}>Login</Text>

                </TouchableOpacity>

        <TouchableOpacity
        style={{backgroundColor: '#fff' , padding: 10, width:150, borderRadius: 30,marginHorizontal:2
        ,borderWidth:1,borderColor:'#0d47a1'}}>

       <Text style={{textAlign:'center',color:'#0d47a1',fontSize:18}}>Sign up</Text>

        </TouchableOpacity>

        </View>
     
        <Text style={{fontSize:16,marginTop:10}}>or via social media</Text>

       <View style={{flexDirection:'row',marginTop:20}}>

         <View 
         style={{height:40,width:40,borderRadius:40/2,backgroundColor:'#3f51b5'
         ,alignItems:'center',justifyContent:'center'}}>

           <Text style={{fontSize:25,fontWeight:'bold',color:'#fff'}}>f</Text>

           </View>

           <View style={{height:40,width:40,borderRadius:40/2,
            backgroundColor:'#f44336',alignItems:'center',justifyContent:'center'}}>

           <Text style={{fontSize:25,fontWeight:'bold',color:'#fff'}}>g</Text>

           </View>

           <View style={{height:40,width:40,borderRadius:40/2,
            backgroundColor:'#156560',alignItems:'center',justifyContent:'center'}}>

           <Text style={{fontSize:25,fontWeight:'bold',color:'#fff'}}>in</Text>
           
           </View>
       </View>
    </View>
  );
}
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
