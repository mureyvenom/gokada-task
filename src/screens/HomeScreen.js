import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, StatusBar } from 'react-native';
import Header from '../components/Header';

const HomeScreen = () => {
    return(
        <SafeAreaView style={{flex: 1}}>
            <View style={styles.mainHolder}>
                    <Header />
                <View style={styles.container}>
                    <Text>Home Screen</Text>
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 25,
        justifyContent: 'center',
        alignItems: 'center'
    },
    mainHolder: {        
        marginTop: StatusBar.currentHeight,
        flex: 1
    }
});

export default HomeScreen;