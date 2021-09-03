import { Formik } from "formik";
import React from "react";
import { Pressable, View, StyleSheet } from "react-native";
import * as yup from 'yup';
import { useHistory } from "react-router";

import theme from "../theme";
import FormikTextInput from "./FormikTextInput";
import Text from './Text';
import useSignIn from '../hooks/useSignIn';

const initialValues = {
    username: '',
    password: ''
};

const SignInForm = ({ onSubmit }) => {
    return (
        <View>
            <FormikTextInput name="username" placeholder="Username" />
            <FormikTextInput name="password" placeholder="Password" secureTextEntry />
            <Pressable onPress={onSubmit} style={styles.signInButton}>
                <Text color="textLight">Sign in</Text>
            </Pressable>
        </View>
    );
};

const validationSchema = yup.object().shape({
    username: yup
        .string()
        .required("Username is required"),
    password: yup
        .string()
        .required("Password is required")
});

const SignIn = () => {

    const [signIn] = useSignIn();
    const history = useHistory();

    const onSubmit = async (values) => {
        const { username, password } = values;

        try {
            const { data } = await signIn({ username, password });
            history.push('/');
        } catch (e) {
            console.log(e);
        }
    };

    return (
        <Formik 
            initialValues={initialValues} 
            onSubmit={onSubmit}
            validationSchema={validationSchema}    
        >
            {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
        </Formik>
    );
};

const styles = StyleSheet.create({
    signInButton: {
        height: 40,
        margin: 5,
        borderWidth: 1,
        padding: 10,
        backgroundColor: theme.colors.primary,
        borderRadius: 5,
        alignSelf: "flex-start",
    }
});

export default SignIn;