import React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Appearance from './Appearance';
import Biography from './Biography';
import Work from './Work';
import PowerStats from './Powerstats';

const Tab = createMaterialBottomTabNavigator();
const InfoContainer = ({route}) => {
    const id = route.params.id;
    const keyword = route.params.keyword;
    return(
            <Tab.Navigator barStyle={{ backgroundColor: '#f72096' }} shifting={false}>
                <Tab.Screen options={{tabBarIcon:({color,size})=>(<MaterialCommunityIcons name="account-circle" color={color} size={25} />)}}
                name="Appearance" component={Appearance} initialParams={{id:id,keyword:keyword}}/>
                <Tab.Screen options={{tabBarIcon:({color,size})=>(<MaterialCommunityIcons name="account-details-outline" color={color} size={25} />)}}
                name="Biography" component={Biography} initialParams={{id:id,keyword:keyword}}/>
                <Tab.Screen options={{tabBarIcon:({color,size})=>(<MaterialCommunityIcons name="briefcase-check-outline" color={color} size={25} />)}}
                name="Work" component={Work} initialParams={{id:id,keyword:keyword}}/>
                <Tab.Screen options={{tabBarIcon:({color,size})=>(<MaterialCommunityIcons name="head-flash-outline" color={color} size={25} />)}}
                name="PowerStats" component={PowerStats} initialParams={{id:id,keyword:keyword}}/>
            </Tab.Navigator>
    )
}

export default InfoContainer;