import React, {useState,useEffect} from 'react';
import {Text,View, Button,FlatList,ScrollView,Image, StyleSheet,TouchableOpacity} from 'react-native';

const Biography = ({navigation,route}) => {
    const id = route.params.id;
        const keyword = route.params.keyword;
    const [loading,setLoading] = useState(true);
    const [bio,setBio] = useState(null);
    const accessToken = "3000225276910329";

    useEffect(()=>{
        fetch(`https://superheroapi.com/api/${accessToken}/${id}/biography`)
        .then(response=>response.json())
        .then(json=>setBio(json))
        .catch(error=>console.error(error))
    })
    return(
        <>
        <Button color="#f72096" title="Go back to results" onPress={()=>navigation.navigate('Results',{name:keyword})} />
        {bio != null ? <ScrollView>
        <View style={styles.main}>
            <View style={styles.infoContainer}>
                <Text style={styles.infoText}>Full Name</Text>
                <Text style={styles.infoText}>{bio["full-name"]}</Text>
            </View>
            <View style={styles.infoContainer}>
                <Text style={styles.infoText}>Alter Egos</Text>
                <Text style={styles.infoText}>{bio["alter-egos"]}</Text>
            </View>
            <View style={styles.infoContainer}>
                <Text style={styles.infoText}>Aliases</Text>
                <Text style={styles.infoText}>{bio.aliases[0]}, {bio.aliases[1]}</Text>
            </View>
            <View style={styles.infoContainer}>
                <Text style={styles.infoText}>Place of Birth</Text>
                <Text style={styles.infoText}>{bio["place-of-birth"]}</Text>
            </View>
            <View style={styles.infoContainer}>
                <Text style={styles.infoText}>First Apperance</Text>
                <Text style={styles.infoText}>{bio["first-appearance"]}</Text>
            </View>
            <View style={styles.infoContainer}>
                <Text style={styles.infoText}>Publisher</Text>
                <Text style={styles.infoText}>{bio.publisher}</Text>
            </View>
            <View style={styles.infoContainer}>
                <Text style={styles.infoText}>Alignment</Text>
                <Text style={styles.infoText}>{bio["alignment"]}</Text>
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
        fontSize:20,width:200,padding:10,height:50
    }
})


export default Biography;