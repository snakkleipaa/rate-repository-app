import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Route, Switch } from 'react-router';

import AppBar from './AppBar';
import RepositoryList from './RepositoryList';
import SignIn from './SignIn';

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        flexShrink: 1,
        backgroundColor: '#e1e4e8'
    },
});

const Main = () => {
    return (
        <View style={styles.container}>
            <AppBar />
            <Switch>
                <Route path="/signin" exact>
                    <SignIn />
                </Route>
                <Route path="/" exact>
                    <RepositoryList />
                </Route>
                
            </Switch>
        </View>
    );
};

export default Main;