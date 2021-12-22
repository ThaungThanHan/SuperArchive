import React, {useState, useEffect} from 'react';
import {Text,View,TouchableOpacity,StyleSheet} from 'react-native';
import { Button } from 'react-native-paper';
import { TextInput } from 'react-native-paper';

const HomeScreen = ({navigation}) => {
    const [name,setName] = useState("");

    const onChange = textValue => {
        return setName(textValue)
    }
    return(
        <>
        <View style={styles.container}>
            <Text style={styles.logo}> SuperArchive </Text>
            <TextInput style={styles.input} selectionColor="purple"
            label="Search your heroes and villains" mode="flat" onChangeText={onChange}/>
              <Button style={styles.btn}
              color="#f72096" icon="magnify" mode="contained" onPress={()=>navigation.navigate('Results',{name:name})}>
                Search
              </Button>
            {/* <TouchableOpacity onPress={()=>navigation.navigate('Results',{name:name})} style={styles.btn} title="Search">
                <Text style={styles.btnText}> Search </Text>
            </TouchableOpacity> */}
        </View>
        </>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,padding:50,
        justifyContent:"center",backgroundColor:"#db4b9a"
        // alignItems:"center"
    },
    logo:{
        fontSize:40,alignSelf:"center",marginBottom:15,fontWeight:"bold",color:"white",
    },
    input:{
        height:50,marginBottom:15,backgroundColor:"white"
    },
    btn:{
        padding:9,
        width:150,alignSelf:"center"
    },
    btnText:{
        color:"white"
    }
})

export default HomeScreen;