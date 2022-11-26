import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const HaderComponent = () => {
    return (
        <View style={[styles.HeaderContainer, { backgroundColor: '#fff' }]}>
            <View>
                <Text style={[styles.LogoText]}>M</Text>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    HeaderContainer: {
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'stretch',
        width: '95%'
    },
    LogoText: {
        color: '#D989B5',
        textShadowColor: '#863A6F',
        textShadowOffset: {
            width: 6,
            height: 8
        },
        textShadowRadius: 28,
        fontSize: 100,
        fontWeight: '300'
    },
})
export default HaderComponent