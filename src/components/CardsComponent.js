import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const CardsComponent = (props) => {
    return (
        <View style={styles.container}>
            <Text style={[styles.txt, { textAlign: 'center', fontWeight: 'bold', letterSpacing: 1 }]}>{props.data['medicamento']}</Text>
            <Text style={[styles.txt, { textAlign: 'justify' }]}>{props.data['description']}</Text>
            <Text style={[styles.txt, { textAlign: 'center', color: 'green' }]}>{props.data['horaVencimiento']}</Text>
            <Text style={props.data['estatus'] === 'Importante' ? styles.txtImp : styles.txtNoImp} />
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        elevation: 10,
        shadowColor: '#975C8D',
        shadowOffset: {
            width: 10,
            height: 10
        },
        borderRadius: 20,
        margin: 10,
        padding: 10
    },
    txt: {
        color: 'black',
        fontSize: 20,
        marginTop: 5
    },
    txtImp: {
        height: 20,
        width: 20,
        borderRadius: 10,
        backgroundColor: 'red',
        elevation: 5
    },
    txtNoImp: {
        height: 20,
        width: 20,
        borderRadius: 10,
        backgroundColor: 'green',
        elevation: 5
    }
})
export default CardsComponent