import React, { useEffect } from 'react';
import { View, Text, StyleSheet, SafeAreaView, StatusBar, TouchableOpacity, ActivityIndicator, FlatList } from 'react-native';
import Header from '../components/Header';
import Users from '../components/Users';
import { createStructuredSelector } from 'reselect';
import { selectUsers, selectUsersFetched, selectUsersLoading, selectUsersError } from '../redux/users/users.selector';
import { setUsersAsync } from '../redux/users/users.actions';
import { connect } from 'react-redux';

const DataScreen = ({setUsers, users, usersLoading, usersError}) => {
    return(
        <SafeAreaView style={{flex: 1}}>
            <View style={styles.mainHolder}>
                    <Header />
                <View style={styles.container}>
                    <View>
                        <TouchableOpacity onPress={() => setUsers()}>
                            <View style={styles.buttonStyle}>
                                <Text style={styles.buttonText}>Get Users</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.dataView}>
                        
                        <FlatList 
                        data={users}
                        showsVerticalScrollIndicator={true}
                        keyExtractor={(user) => user.id.toString()}
                        renderItem={({item}) => {
                            return(
                                <Users user={item} />
                            );
                        }
                        }
                        />
                        {
                            usersError || usersLoading ?
                            <View style={{flex: 1, flexDirection: 'column', justifyContent: 'center'}}>
                                <ActivityIndicator color='#000' size='large' />
                                <Text style={styles.errorText}>{usersError}</Text>
                            </View>
                            :
                            null
                        }
                    </View>
                 </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 25,
        alignItems: 'center',
        paddingVertical: 15
    },
    mainHolder: {        
        marginTop: StatusBar.currentHeight,
        flex: 1
    },
    buttonStyle: {
        height: 45,
        width: 300,
        backgroundColor: '#222',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText: {
        fontSize: 20,
        color: '#fff'
    },
    dataView: {
        flex: 1,
        width: '100%',
        marginTop: 15
    },
    errorText: {
        fontSize: 24,
        color: '#000',
        fontWeight: '700',
        textAlign: 'center'
    }
});

const mapStateToProps = createStructuredSelector({
    users: selectUsers,
    usersFetched: selectUsersFetched,
    usersLoading: selectUsersLoading,
    usersError: selectUsersError
});

const mapDispatchToProps = dispatch => ({
    setUsers:  () => dispatch(setUsersAsync())
})

export default connect(mapStateToProps, mapDispatchToProps)(DataScreen);