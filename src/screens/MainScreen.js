import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import HaderComponent from '../components/HaderComponent'
import IndexComponent from '../components/IndexComponent'
import AddComponent from '../components/AddComponent'

const MainScreen = () => {
    return (
        <>
            <View style={styles.headerContainer}>
                <HaderComponent />
            </View>
            <View style={styles.container}>
                <IndexComponent />
            </View>

            <View style={styles.button_add}>
                <AddComponent />
            </View>
        </>
    )
}
const styles = StyleSheet.create({
    headerContainer: {
        flex: .51,
    },
    container: {
        flex: 2,
    },
    button_add: {
        height: 100,
    }
})
export default MainScreen