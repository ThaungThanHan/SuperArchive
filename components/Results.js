import React, {useState,useEffect} from 'react';
import {Text,View, Button,FlatList,Image, StyleSheet,TouchableOpacity} from 'react-native';

const Results = ({navigation,route}) => {
    const name = route.params.name;
    const [chars,setChars] = useState([]);
    const accessToken = "3000225276910329";
    useEffect(()=>{
        fetch(`https://superheroapi.com/api/${accessToken}/search/${name}`)
        .then(response=>response.json())
        .then(json=>setChars(json))
        .catch(error=>console.error(error))
    })

    return(
        <>
        <Button title="Go back to search" onPress={()=>navigation.navigate('Home')} />
        <FlatList style={styles.container} data={chars.results} renderItem={({item})=> 
            <View style={styles.view}> 
            <TouchableOpacity onPress={()=>navigation.navigate('Info',{id:item.id,keyword:name})}>
                <Image style={styles.image} source={{uri:`${item.image.url}`}} />
            </TouchableOpacity>
            <Text>{item.name}</Text>
            </View>
        } 
        />
        </>
    )
};
const styles = StyleSheet.create({
    container:{
        width:500,flex:1
    },
    view:{
        flexDirection:"row",alignItems:"center"
    },
    image:{
        width:250, height: 200, marginRight:50,
        marginBottom:20,marginTop:10
    }
})

export default Results;