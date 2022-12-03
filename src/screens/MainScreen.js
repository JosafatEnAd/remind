import React from 'react'
import { ScrollView, SafeAreaView, StyleSheet, Text, View, Image } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';
import HaderComponent from '../components/HaderComponent'
import IndexComponent from '../components/IndexComponent'
import AddComponent from '../components/AddComponent'

const MainScreen=() => {
    return (
        <SafeAreaView >
            <LinearGradient colors={['rgba(240, 240, 255, 1)', 'rgba(53, 175, 227, 1)', 'rgba(49, 150, 227, 1))', 'rgba(29, 89, 211, 1)', 'rgba(20, 63, 148, 1)']} style={[styles.MainContainer]}>
                {/* Invocación del componente para el header */}
                <HaderComponent />
                <View style={[styles.Body, { justifyContent: 'flex-start' }]}>
                    <View style={[styles.VoiceBox, { alignSelf: 'center' }]}>
                        <Text style={[styles.TextVoiceBox]}>Toca para usar el microfono</Text>
                        <Image source={require('../resources/microfono_icono.png')} style={[{ width: 45, height: 45, marginTop: 2 }]} />
                    </View>
                    <Text style={[{ fontSize: 20, fontWeight: '900', alignSelf: 'center', marginTop: 25 }]}>Todo lo que tienes que tomar hoy:</Text>
                    <View style={[styles.BodyRContainer]}>
                        <View style={[styles.BodyCContainer]}>
                            <IndexComponent />
                        </View>
                    </View>
                    <View style={[{ marginLeft: 350, height: 30, width: 30 }]}>
                        <AddComponent />
                    </View>
                </View>
            </LinearGradient>
        </SafeAreaView>
    )
}
const styles=StyleSheet.create({
    MainContainer: {
        width: '100%',
        height: '100%'
    },
    Body: {
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
    VoiceBox: {
        justifyContent: 'center',
        display: 'flex',
        flexDirection: 'row',
        marginTop: 30,
        height: 50,
        width: 350,
        backgroundColor: '#FFFFFF',
        borderRadius: 20,
        borderColor: 'black',
        borderWidth: 2
    },
    TextVoiceBox: {
        marginLeft: 10,
        height: '100%',
        width: '75%',
        color: 'black',
        fontSize: 15,
        textAlignVertical: 'center',
        textAlign: 'center'
    },
    BodyRContainer: {
        width: '100%',
        height: 500,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },
    BodyCContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly'
    },
    BodyContainer: {
        backgroundColor: 'white',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        width: 150,
        height: 150
    },
    BodyContainerText: {
        fontSize: 15,
        color: 'black',
        textAlign: 'center',
        fontWeight: '500'
    },
    BotonRecordatorio: {
        justifyContent: 'space-around',
        display: 'flex',
        flexDirection: 'row',
        width: '75%',
        height: 65,
        backgroundColor: 'white',
        alignSelf: 'center',
        borderRadius: 75
    },
    BotonText: {
        fontSize: 25,
        color: 'black',
        height: '100%',
        textAlignVertical: 'center'
    }
})
export default MainScreen