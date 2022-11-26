import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import CardsComponent from './CardsComponent'
const IndexComponent = () => {
    const data = [
        {
            id: 1,
            medicamento: "Test1",
            description: "Ejemplo de notas para medicamentos",
            horaVencimiento: "18/11/2022 12:00am",
            estatus: "Importante"
        },
        {
            id: 2,
            medicamento: "Test2",
            description: "Ejemplo de notas para medicamentos",
            horaVencimiento: "18/11/2022 13:00am",
            estatus: ""
        },
        {
            id: 3,
            medicamento: "Test3",
            description: "Ejemplo de notas para medicamentos",
            horaVencimiento: "18/11/2022 15:00am",
            estatus: "Importante"
        }
    ]
  return (
    <ScrollView>
    {
        data.map((el, idx) =>

            <View key={idx}>
                <CardsComponent data={el} />
            </View>
        )
    }
</ScrollView>
  )
}

export default IndexComponent