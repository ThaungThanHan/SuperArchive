import React, {useState,useEffect} from 'react';
import {Text,View, Button,FlatList,Image, StyleSheet,TouchableOpacity} from 'react-native';
import { ProgressBar, Colors } from 'react-native-paper';

const Results = ({navigation,route}) => {
    const name = route.params.name;
    const [chars,setChars] = useState([]);
    const[isLoading,setisLoading] = useState(true);
    const accessToken = "3000225276910329";
    useEffect(()=>{
        fetch(`https://superheroapi.com/api/${accessToken}/search/${name}`)
        .then(response=>response.json())
        .then(json=>setChars(json))
        .then(setisLoading(false))
        .catch(error=>console.error(error))
    })

    return(
        <>
        <Button color="#f72096" title="Go back to search" onPress={()=>navigation.navigate('Home')} />
        <FlatList numColumns={3} style={styles.container} data={chars.results} renderItem={({item})=> 
            <View style={styles.view}> 
            <TouchableOpacity onPress={()=>navigation.navigate('InfoContainer',{id:item.id,keyword:name})}>
                <Image style={styles.image} source={{uri:`${item.image.url}`}} />
            </TouchableOpacity>
            <Text style={styles.name}>{item.name}</Text>
            </View>
        } 
        />
        </>
    )
};
const styles = StyleSheet.create({
    container:{
        width:500,flexWrap:"wrap",
    },
    view:{
        flexDirection:"column",alignSelf:"center",marginLeft:24
    },
    image:{
        width:100, height: 100,marginRight:10,
        marginBottom:20,marginTop:10
    },
    name:{
        alignSelf:"center"
    }
})

export default Results;