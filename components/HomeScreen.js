import React, {useState, useEffect} from 'react';
import {Text,View,TouchableOpacity,StyleSheet,TextInput} from 'react-native';

const HomeScreen = ({navigation}) => {
    const [name,setName] = useState("");

    const onChange = textValue => {
        return setName(textValue)
    }
    return(
        <>
        <View style={styles.container}>
            <Text style={styles.logo}> SuperArchive </Text>
            <TextInput style={styles.input} onChangeText={onChange} placeholder="Enter heroes or villains' name"/>
            <TouchableOpacity onPress={()=>navigation.navigate('Results',{name:name})} style={styles.btn} title="Search">
                <Text style={styles.btnText}> Search </Text>
            </TouchableOpacity>
        </View>
        </>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    },
    logo:{
        fontSize:40
    },
    input:{
        height:60,
        padding:10,
        fontSize:20,
        borderColor:"red",
        backgroundColor:"white",
        borderWidth:1,
        marginBottom:10
    },
    btn:{
        padding:9,
        borderWidth:1,
        backgroundColor:"teal"
    },
    btnText:{
        color:"white"
    }
})

export default HomeScreen;