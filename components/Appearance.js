import React, {useState,useEffect} from 'react';
import {Text,View, Button,FlatList,ScrollView,Image, StyleSheet,TouchableOpacity} from 'react-native';

const Appearance = ({navigation, route}) => {
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
        <Button color="#f72096" title="Go back to results" onPress={()=>navigation.navigate('Results',{name:keyword})} />
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
                <Text style={styles.infoText}>Height</Text>
                <Text style={styles.infoText}>{onechar.appearance.height[0]}, {onechar.appearance.height[1]}</Text>
            </View>
            <View style={styles.infoContainer}>
                <Text style={styles.infoText}>Weight</Text>
                <Text style={styles.infoText}>{onechar.appearance.weight[0]}, {onechar.appearance.weight[1]}</Text>
            </View>            
            <View style={styles.infoContainer}>
                <Text style={styles.infoText}>Eye Color</Text>
                <Text style={styles.infoText}>{onechar.appearance["eye-color"]}</Text>
            </View>
            <View style={styles.infoContainer}>
                <Text style={styles.infoText}>Hair Color</Text>
                <Text style={styles.infoText}>{onechar.appearance["hair-color"]}</Text>
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

export default Appearance;