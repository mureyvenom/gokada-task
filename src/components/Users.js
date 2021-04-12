import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons'; 

const Users = ({user}) => {
    return(
        <View style={styles.mainContainer}>
            <View style={styles.holderContainer}>
                <View style={{width: '25%', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                    <Feather name="user" size={24} color="black" />
                </View>
                <View>
                    <Text>Name: {user.name}</Text>
                    <Text>Email: {user.email}</Text>
                    <Text>Website: {user.website}</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        flexDirection: 'column',
        justifyContent: 'center',
        borderWidth: 2,
        borderColor: '#222',
        borderRadius: 5,
        paddingVertical: 15,
        marginBottom: 15
    },
    holderContainer: {
        flexDirection: 'row',
        paddingHorizontal: 15
    }
});

export default Users;