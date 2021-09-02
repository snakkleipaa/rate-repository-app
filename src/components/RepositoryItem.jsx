import React from "react";
import { View, Text, Image, StyleSheet } from 'react-native';
import theme from "../theme";

const avatarStyles = StyleSheet.create({
    container: {
        flex: 0,
        flexDirection: 'column',
        padding: 10,
        margin: 5
    },
    avatar: {
        width: 45,
        height: 45,
        borderRadius: 5,
        justifyContent: 'flex-start'
    },
});

const infoStyles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-evenly'
    },
    fullName: {
        fontSize: theme.fontSizes.subheading,
        fontWeight: theme.fontWeights.bold,
        margin: 3
    },
    description: {
        fontSize: theme.fontSizes.subheading,
        fontWeight: theme.fontWeights.normal,
        color: theme.colors.textSecondary,
        margin: 3
    },
    language: {
        fontSize: theme.fontSizes.subheading,
        color: theme.colors.textLight,
        backgroundColor: theme.colors.primary,
        borderRadius: 5,
        padding: 4,
        alignSelf: 'flex-start',
        margin: 3
    }
});

const statsStyles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        margin: 10
    },
    singleStatContainer: {
        flexDirection: 'column',
        alignItems: 'center'
    }
});

const Avatar = ({ image }) => {
    return (
        <View style={avatarStyles.container}>
            <Image 
                style={avatarStyles.avatar}
                source={{
                    uri: `${image}`
                }}
            />
        </View>
    );
};

const Info = ({ fullName, description, language }) => {
    return (
        <View style={infoStyles.container}>
            <Text style={infoStyles.fullName}>{fullName}</Text>
            <Text style={infoStyles.description}>{description}</Text>
            <Text style={infoStyles.language}>{language}</Text>
        </View>
    );
};

const Stats = ({ stargazersCount, forksCount, reviewCount, ratingAverage }) => {
    const roundNumber = (num) => {
        return Math.abs(num) > 999 ? Math.sign(num)*((Math.abs(num)/1000).toFixed(1)) + 'k' : Math.sign(num)*Math.abs(num);
    };

    return (
        <View style={statsStyles.container}>
            <View style={statsStyles.singleStatContainer}>
                <Text style={infoStyles.fullName}>{roundNumber(stargazersCount)}</Text>
                <Text style={infoStyles.description}>Stars</Text>
            </View>
            <View style={statsStyles.singleStatContainer}>
                <Text style={infoStyles.fullName}>{roundNumber(forksCount)}</Text>
                <Text style={infoStyles.description}>Forks</Text>
            </View>
            <View style={statsStyles.singleStatContainer}>
                <Text style={infoStyles.fullName}>{roundNumber(reviewCount)}</Text>
                <Text style={infoStyles.description}>Reviews</Text>
            </View>
            <View style={statsStyles.singleStatContainer}>
                <Text style={infoStyles.fullName}>{roundNumber(ratingAverage)}</Text>
                <Text style={infoStyles.description}>Rating</Text>
            </View>
        </View>
    );
};

const itemStyles = StyleSheet.create({
    container: {
        alignItems: 'stretch',
        flexDirection: 'column',
        backgroundColor: 'white'
    },
    topContainer: {
        flexDirection: 'row',
        marginTop: 10
    }
});

const AvatarInfo = ({ fullName, description, language, image }) => {
    return (
        <View style={itemStyles.topContainer}>
            <Avatar image={image} />
            <Info 
                fullName={fullName}
                description={description}
                language={language}
            />
        </View>
    );
};


const RepositoryItem = ({ fullName, description, language, forksCount, stargazersCount, ratingAverage, reviewCount, ownerAvatarUrl }) => {
    return (
        <View style={itemStyles.container}>
            <AvatarInfo
                image={ownerAvatarUrl}
                fullName={fullName}
                description={description}
                language={language}
            />
            <Stats 
                forksCount={forksCount}
                stargazersCount={stargazersCount}
                ratingAverage={ratingAverage}
                reviewCount={reviewCount}
            />
        </View>
    );
};

export default RepositoryItem;