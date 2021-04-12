import React, { useEffect } from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';

const SplashScreen = ({navigation}) => {
    useEffect(() => {
        setTimeout(() => {
            navigation.navigate('main');
        }, 2000);
    }, [])

    return(
        <SafeAreaView style={{flex: 1}}>
            <View style={styles.container}>
                <Text style={styles.h1}>Splash Screen</Text>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 25,
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    h1: {
        fontSize: 40,
        fontWeight: '600'
    }
});

export default SplashScreen;