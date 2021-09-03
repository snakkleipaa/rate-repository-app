import React from 'react';
import { View, StyleSheet, Pressable, Text } from 'react-native';
import Constants from 'expo-constants';
import { ScrollView } from 'react-native';
import useAuthStorage from '../hooks/useAuthStorage';

import theme from '../theme';
import AppBarTab from './AppBarTab';
import { useQuery, useApolloClient } from '@apollo/client';
import { AUTHORIZED_USER } from '../graphql/queries';


const styles = StyleSheet.create({
    container: {
        paddingTop: Constants.statusBarHeight,
        backgroundColor: theme.colors.backgroundAppBar,
        flexDirection: 'row',
        justifyContent: 'flex-start'
    },
    textContainer: {
      margin: 5
    },
    text: {
        color: theme.colors.textLight,
        fontWeight: theme.fontWeights.bold,
        fontSize: theme.fontSizes.subheading
    }
});

const AppBar = () => {

  const authStorage = useAuthStorage();
  const apolloClient = useApolloClient();

  const { data } = useQuery(AUTHORIZED_USER)
  const currentUser = data.authorizedUser

  if (!currentUser) {
    return (
      <View style={styles.container}>
        <ScrollView horizontal>
          <View style={styles.textContainer}>
            <AppBarTab text="Repositories" style={styles.text} link="/" />
          </View>
          <View style={styles.textContainer}>
            <AppBarTab text="Sing in" style={styles.text} link="/signin" />
          </View>
        </ScrollView>
      </View>
    );
  };

  const onPress = async () => {
    await authStorage.removeAccessToken();
    apolloClient.resetStore();
  }

  return (
    <View style={styles.container}>
      <ScrollView horizontal>
        <View style={styles.textContainer}>
          <AppBarTab text="Repositories" style={styles.text} link="/" />
        </View>
        <View style={styles.textContainer}>
          <Pressable onPress={onPress}>
            <Text style={styles.text}>Sign out</Text>
          </Pressable>
        </View>
      </ScrollView>
    </View>
  )


};

export default AppBar;