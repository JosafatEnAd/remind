const days = [[1,'Lunes'],[2, 'Martes'],[3,'Miércoles'],[4,'Jueves'],[5,'Viernes'],[6,'Sábado'],[0,'Domingo']]
const months = [[1,'Enero'],[2,'Febrero'],[3,'Marzo'],[4,'Abril'],[5,'Mayo'],[6,'Junio'],[7,'Julio'],[8,'Agosto'],[9,'Septiembre'],[10,'Octubre'],[11,'Noviembre'],[12,'Diciembre']]
export const setDay = day => {
    return days.find(el => el[0] === day)[1]
}
export const setMonth = month => {
    return months.find(el => el[0] == month)[1]
}