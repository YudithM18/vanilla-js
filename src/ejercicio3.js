function clonarArreglo(arreglo) {
    const clon = [...arreglo]

    return clon
}


const arreglo = [1, 2, 3, 4, 5, 6]
clonarArreglo(arreglo)





function clonarObjeto(persona) {
    const clonObj = {...persona}

    return clonObj
}

const persona = {
    nombre: "Amaya",
    edad: 24,
}
clonarObjeto(persona)




function sumar(...numbers) {
    return numbers.reduce((acumulador, valorActual) =>{
        return acumulador + valorActual
    }, 0)
    
    
}

sumar (1,2,3,4)




function saludar( nombre = `Desconocido`) {

    return `Hola`, nombre
    
}







// NO MODIFICAR
export { clonarArreglo, clonarObjeto, sumar, saludar };