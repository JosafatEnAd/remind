import { Pressable, StyleSheet, Modal, View, TextInput, Text, TouchableOpacity, Alert } from 'react-native'
import React from 'react'
import { DateTimePickerAndroid } from '@react-native-community/datetimepicker'
import { setDay, setMonth } from '../resources/datesData'
import { speak } from '../resources/voiceSpeech'
const AddComponent = () => {
    const [modalVisible, setModalVisible] = React.useState(false) // Controlador para mostrar modal
    const [date, setDate] = React.useState(new Date(Date.now())); // Obtención de la fecha actual

    //Estados para datos del form
    const [name, setName] = React.useState('')
    const [description, setDescription] = React.useState('')
    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate;
        setDate(currentDate)
    }
    const showMode = (currentMode) => {
        DateTimePickerAndroid.open({
            value: date,
            onChange,
            mode: currentMode,
            is24Hour: true,
        })
    }
    const showDatePicker = () => {
        showMode('date')
    }
    const showTimePicker = () => {
        showMode('time')
    }
    return (
        <>
            <Modal animationType='slide' transparent={false} visible={modalVisible}>
                <View style={styles.close_container}>
                    <Pressable onPress={() => setModalVisible(!modalVisible)}>
                        <Text style={{ color: 'rgba(0,0,0,.5)', letterSpacing: 1 }}>Close</Text>
                    </Pressable>
                </View>
                <View style={styles.form_container}>
                    <Text style={styles.title_form}>Nuevo recordatorio</Text>
                    <View style={{ marginTop: 20, flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={styles.label}>Nombre del medicamento: </Text>
                        <TextInput placeholder='Nombre del medicamento' selectionColor={'red'} style={styles.input} onChangeText={val => setName(val)} />
                    </View>
                    <View style={{ marginTop: 10, flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={styles.label}>Descripción: </Text>
                        <TextInput placeholder='Descripción' multiline numberOfLines={5} selectionColor={'red'} style={[styles.input, { height: 100 }]} onChangeText={val => setDescription(val)} />
                    </View>
                    <View style={{ marginTop: 10, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                        <TouchableOpacity style={styles.date} onPress={showDatePicker}>
                            <Text>Selecciona la fecha</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.date} onPress={showTimePicker}>
                            <Text>Selecciona la Hora</Text>
                        </TouchableOpacity>
                    </View>
                    <Text style={{ textAlign: 'center' }}><Text style={{ fontWeight: 'bold' }}>Fecha: </Text>{String(setDay(date.getDay())) + " " + String(date.getDate()) + " de " + String(setMonth(date.getMonth() + 1)) + " del " + String(date.getFullYear())}</Text>
                    <View style={{ justifyContent: 'center', alignItems: 'center', margin: 10 }}>
                        <TouchableOpacity style={{ backgroundColor: '#7DE5ED', width: 150, height: 50, borderRadius: 20, justifyContent: 'center', alignItems: 'center', elevation: 10 }} onPress={()=>speak(date,name,description)} disabled={name.length === 0 && description.length === 0 ? true : false}>
                            <Text style={{ color: 'black', fontSize: 20, fontWeight: '500', letterSpacing: 1 }}>Guardar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
            <View style={styles.container_button}>
                <Pressable onPress={() => setModalVisible(true)} style={styles.button}>
                    <Text style={styles.icon}>+</Text>
                </Pressable>
            </View>
        </>
    )
}
const styles = StyleSheet.create({
    container_button: {
        width: '95%',
        alignSelf: 'center',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'flex-end'
    },
    button: {
        backgroundColor: '#BCEAD5',
        height: 60,
        width: 60,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 10,
        shadowColor: '#9ED5C5',
    },
    icon: {
        fontSize: 25,
        color: '#000',
        fontWeight: '300'
    },
    close_container: {
        alignSelf: 'center',
        width: '98%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'flex-end'
    },
    form_container: {
        height: '90%',
        borderRadius: 30,
        elevation: 10,
        backgroundColor: 'white',
        justifyContent: 'center',
        width: '90%',
        alignSelf: 'center'
    },
    title_form: {
        color: '#000',
        fontSize: 30,
        textAlign: 'center',
        fontWeight: '500',
        letterSpacing: 1.2,
        flexDirection: 'column'
    },
    label: {
        fontSize: 15,
        padding: 10
    },
    input: {
        backgroundColor: 'white',
        height: 40,
        width: '80%',
        borderRadius: 10,
        borderWidth: 1,
        textAlign: 'center',
        fontSize: 15
    },
    date: {
        backgroundColor: '#9ED5C5',
        elevation: 2,
        height: 40,
        borderRadius: 10,
        padding: 10,
        margin: 5
    }
})
export default AddComponent