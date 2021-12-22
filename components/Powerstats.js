import React, {useState,useEffect} from 'react';
import {Text,View, Button,FlatList,ScrollView,Image, StyleSheet,TouchableOpacity} from 'react-native';
import { VictoryBar, VictoryChart, VictoryTheme } from "victory-native";
import * as Svg from 'react-native-svg'
const PowerStats = ({navigation, route}) => {
    const id = route.params.id;
    const keyword = route.params.keyword;
    const [loading,setLoading] = useState(true);
    const [stats,setStats] = useState(null);
    const accessToken = "3000225276910329";

    useEffect(()=>{
        fetch(`https://superheroapi.com/api/${accessToken}/${id}/powerstats`)
        .then(response=>response.json())
        .then(json=>setStats(json))
        .catch(error=>console.error(error))
    })
    return(
        <>
        <Button title="Go back to results" onPress={()=>navigation.navigate('Results',{name:keyword})} />
        {stats != null ?   // if not, VictoryBar will receive Null imediately and it will crash.
        <>                
        <VictoryChart
            theme={VictoryTheme.material}
            domainPadding={10}
            >
            <VictoryBar animate={{duration:2000,onLoad:{duration:1000}}}
                style={{ data: { fill: "#c43a31" } }}
                data={[
                { x: "Strength", y: parseInt(stats.strength)},
                { x: "Intelligence", y: parseInt(stats.intelligence)},
                { x: "Speed", y: parseInt(stats.speed)},
                { x: "Durability", y: parseInt(stats.durability)},
                { x: "Power", y: parseInt(stats.power)},
                { x: "Combat", y: parseInt(stats.combat)}
            ]}
            />
        </VictoryChart>
        
        <View style={styles.statsTextContainer} >
        <View style={styles.statsTextWrap}>
            <Text style={styles.statsText}>Strength:</Text>
            <Text style={styles.statsText}>{stats.strength}</Text>
        </View>
        <View style={styles.statsTextWrap}>
            <Text style={styles.statsText}>Intelligence:</Text>
            <Text style={styles.statsText}>{stats.intelligence}</Text>
        </View>
        <View style={styles.statsTextWrap}>
            <Text style={styles.statsText}>Speed:</Text>
            <Text style={styles.statsText}>{stats.speed}</Text>
        </View>
        <View style={styles.statsTextWrap}>
            <Text style={styles.statsText}>Durability:</Text>
            <Text style={styles.statsText}>{stats.durability}</Text>
        </View>
        <View style={styles.statsTextWrap}>
            <Text style={styles.statsText}>Power:</Text>
            <Text style={styles.statsText}>{stats.power}</Text>
        </View>
        <View style={styles.statsTextWrap}>
            <Text style={styles.statsText}>Combat:</Text>
            <Text style={styles.statsText}>{stats.combat}</Text>
        </View>
        </View>
        
        </>
        : <Text>Loading... Please wait.</Text> }
        </>
    )
};

const styles = StyleSheet.create({
    statsTextWrap:{
        flexDirection:"row",justifyContent:"space-between",width:150
    },
    statsTextContainer:{
        paddingLeft:40,paddingRight:40,
        flexDirection:"row",justifyContent:"space-between",flexWrap:"wrap"
    },
    statsText:{
        fontSize:20,marginBottom:20,fontWeight:"bold"
    }
})

export default PowerStats;