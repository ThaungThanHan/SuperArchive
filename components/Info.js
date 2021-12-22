import React, {useState,useEffect} from 'react';
import {Text,View, Button,FlatList,ScrollView,Image, StyleSheet,TouchableOpacity} from 'react-native';

const Info = ({navigation,route}) => {
    const id = route.params.id;
    const keyword = route.params.keyword
    const [loading,setLoading] = useState(true);
    const [onechar,setoneChars] = useState(null);
    const [image,setImage] = useState([]);
    const accessToken = "3000225276910329";

    useEffect(()=>{
        fetch(`https://superheroapi.com/api/${accessToken}/${id}`)
        .then(response=>response.json())
        .then(json=>setoneChars(json))
        .catch(error=>console.error(error))
    })

    return(
        <>
        <Button title="Go back to results" onPress={()=>navigation.navigate('Results',{name:keyword})} />
        {onechar != null ? <ScrollView>
        <Image style={styles.image} source={{uri:`${onechar.image.url}`}} />
        <View style={styles.main}>
            <View style={styles.infoContainer}>
                <Text style={styles.infoText}>Name</Text>
                <Text style={styles.infoText}>{onechar.name}</Text>
            </View>
            <View style={styles.infoContainer}>
                <Text style={styles.infoText}>Gender</Text>
                <Text style={styles.infoText}>{onechar.appearance.gender}</Text>
            </View>
            <View style={styles.infoContainer}>
                <Text style={styles.infoText}>Race</Text>
                <Text style={styles.infoText}>{onechar.appearance.race}</Text>
            </View>
            <View style={styles.infoContainer}>
                <Text style={styles.infoText}>Occupation</Text>
                <Text style={styles.infoText}>{onechar.work.occupation}</Text>
            </View>
            <View style={styles.infoContainer}>
                <Text style={styles.infoText}>Aliases</Text>
                <Text style={styles.infoText}>{onechar.biography.aliases}</Text>
            </View>
            <View style={styles.infoContainer}>
                <Text style={styles.infoText}>Height</Text>
                <Text style={styles.infoText}>{onechar.appearance.height}</Text>
            </View>
            <View style={styles.infoContainer}>
                <Text style={styles.infoText}>Weight</Text>
                <Text style={styles.infoText}>{onechar.appearance.weight}</Text>
            </View>            
            <View style={styles.infoContainer}>
                <Text style={styles.infoText}>Publisher</Text>
                <Text style={styles.infoText}>{onechar.biography.publisher}</Text>
            </View>        
            </View>
        </ScrollView>
        : <Text> Loading...Please wait </Text> }
        </>
    )
};

const styles = StyleSheet.create({
    main:{
        height:"auto",
    },
    image:{
        width:"100%", height: 400,
    },
    infoContainer:{
        justifyContent:"space-between",flexDirection:"row",
        padding:20,bordeBottomWidth:5,borderBottomColor:'black',
        marginBottom: 20,
        paddingRight:50,width:300
    },
    infoText:{
        fontSize:25,width:200,padding:10
    }
})

export default Info;