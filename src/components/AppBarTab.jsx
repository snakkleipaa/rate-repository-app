import React from "react";
import { Pressable, Text } from "react-native";
import { Link } from "react-router-native";

const AppBarTab = ({ text, style, link }) => {
    return (
        <Pressable>
            <Link to={link}>
                <Text style={style}>{text}</Text>
            </Link>
        </Pressable>
    );
};

export default AppBarTab;