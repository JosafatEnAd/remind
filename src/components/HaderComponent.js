import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const HaderComponent=() => {
    return (
        <View style={[styles.HeaderContainer, { backgroundColor: '#FFFFFF' }]}>
            <View>
                <Text style={[styles.LogoText]}>M</Text>
            </View>
            <View style={[styles.TextHeaderBox]}>
                <Text style={[styles.TextHeader]}>MEDICINE</Text>
                <Text style={[styles.TextHeader]}>REMINDER</Text>
            </View>
        </View>
    )
}
const styles=StyleSheet.create({
    HeaderContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        height: 125,
        width: 'auto',
    },
    TextHeader: {
        color: '#121212',
        fontSize: 50,
        textShadowColor: '#2e2e2e',
        textShadowRadius: 15,
        textShadowOffset: {
            width: 4,
            height: 4
        }
    },
    TextHeaderBox: {
        display: 'flex',
        flexDirection: 'column',
        width: 'auto',
        height: 55
    },
    LogoText: {
        textAlignVertical: 'top',
        height: '70%',
        width: '100%',
        color: '#1a79ff',
        textShadowColor: 'blue',
        textShadowOffset: {
            width: 5,
            height: 5
        },
        textShadowRadius: 15,
        fontSize: 80,
        fontWeight: '700'
    },
})
export default HaderComponent