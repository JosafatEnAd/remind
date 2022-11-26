import * as Speech from 'expo-speech'
import { Alert } from 'react-native'
//import {schedulePushNotification} from '../components/NotificationsComponent'
import { setDay, setMonth } from './datesData'

export const speak = (date,name,description) => {
    const fecha = `${String(setDay(date.getDay()))} ${date.getDate()} de ${String(setMonth(date.getMonth() + 1))} del ${date.getFullYear()} a las ${date.toLocaleTimeString()}`
    Alert.alert('Datos del recordatorio', `Medicamento: ${name} \nDescripción: ${description} \nFecha: ${fecha}`, [
        {
            text: 'Cancel',
            style: 'cancel'
        },
        {
            text: 'Ok',
            onPress: () => console.log('It was pressed')
        }
    ])
    const message = `Datos del recordatorio, el nombre del medicamento es ${name},la descripción es ${description} y fecha es ${fecha}`
    //const message = `Fecha: ${String(setDay(date.getDay()))} ${date.getDate()} de ${String(setMonth(date.getMonth()+1))} del ${date.getFullYear()} a las ${date.toLocaleTimeString()}`
    const options = {
        voice: "es-us-x-esd-network",
        lenguage: "es-US",
        pitch: 0.7,
        rate: 0.8,
        quality: "Enhanced"
    }
    Speech.speak(message, options)

}