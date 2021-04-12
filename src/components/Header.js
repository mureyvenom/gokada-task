import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import { withNavigation } from 'react-navigation';

const Header = ({navigation}) => {
    const openMenu = () => {
        navigation.openDrawer();
    }

    return(
        <View style={styles.mainHeader} >
            <View style={styles.innerHeader}>
                <View>
                <TouchableOpacity 
                onPress={openMenu}
                style={styles.buttonStyle}>
                    <MaterialCommunityIcons name='menu' color='white' size={30} />
                </TouchableOpacity>
                </View>
                <View>
                    
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    mainHeader: {
        width: '100%',
        height: 70,
        flexDirection: 'column',
        justifyContent: 'center',
        paddingHorizontal: 25,
        backgroundColor: '#585858'
    },
    innerHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    buttonStyle: {
        color: '#fff'
    }
});

export default withNavigation(Header);