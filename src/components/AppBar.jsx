import React from 'react';
import { View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import { ScrollView } from 'react-native';

import theme from '../theme';
import AppBarTab from './AppBarTab';


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

export default AppBar;