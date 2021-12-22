import React, {useState,useEffect} from 'react';
import {Text,View, Button,FlatList,ScrollView,Image, StyleSheet,TouchableOpacity} from 'react-native';

const Work = ({navigation, route}) => {
    const id = route.params.id;
    const keyword = route.params.keyword;
    const [loading,setLoading] = useState(true);
    const [onechar,setoneChars] = useState(null);
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
        <View style={styles.main}>
            <View style={styles.infoContainer}>
                <Text style={styles.infoText}>Occupation</Text>
                <Text style={styles.infoText}>{onechar.work.occupation}</Text>
            </View>
            <View style={styles.infoContainer}>
                <Text style={styles.infoText}>Base</Text>
                <Text style={styles.infoText}>{onechar.work.base}</Text>
            </View>
            <View style={styles.infoContainer}>
                <Text style={styles.infoText}>Affiliations</Text>
                <Text style={styles.infoText}>{onechar.connections["group-affiliation"]}</Text>
            </View>
            <View style={styles.infoContainer}>
                <Text style={styles.infoText}>Relatives</Text>
                <Text style={styles.infoText}>{onechar.connections["relatives"]}</Text>
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

export default Work;