import React from 'react';
import { TextInput as NativeTextInput, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    errorInput: {
        height: 40,
        margin: 5,
        borderWidth: 1,
        borderColor: "red",
        padding: 10,
        backgroundColor: "white",
        borderRadius: 5
    },
});

const TextInput = ({ style, error, ...props }) => {
  const textInputStyle = error ? styles.errorInput : [style];

  return <NativeTextInput style={textInputStyle} {...props} />;
};

export default TextInput;