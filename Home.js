import * as React from 'react';
import { StyleSheet, Text } from 'react-native';

export default class Home extends React.Component{
    render() {
        return(
            <Text 
            style={{
                 flexBasis:1,
                 justifyContent:'center',
                 alignItems:'center', 
                 alignSelf:'center'
                }}>
                    Home Screen!!
            </Text>
        );
    }
}