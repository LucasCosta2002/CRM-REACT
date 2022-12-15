//para obtener todos los clientes del servidor
export async function obtenerClientes(){

    const respuesta = await fetch(import.meta.env.VITE_API_URL);
    const resultado = await respuesta.json()
    
    return resultado    
}

//para obtener el cliente con el id del servidor

export async function obtenerCliente(id){

    const respuesta = await fetch(`${import.meta.env.VITE_API_URL}/${id}`);
    const resultado = await respuesta.json()
    
    return resultado    
}

export async function agregarCliente(datos){

    try {
        const respuesta = await fetch(import.meta.env.VITE_API_URL,{ //enviar cliente nuevo al JSON SERVER por metodo post
            method: 'POST',
            body: JSON.stringify(datos),  //datos que le van a pasar al sevidor
            headers: {
                'Content-Type': 'application/json'
            }
        })
        await respuesta.json()
    } catch (error) {
        console.log(error)
    }
}

export async function actualizarCliente(id, datos){
    try {
        const respuesta = await fetch(`${import.meta.env.VITE_API_URL}/${id}`,{ //Editar cliente de JSON SERVER por metodo PUT
            method: 'PUT',
            body: JSON.stringify(datos),  //datos que le van a pasar al sevidor
            headers: {
                'Content-Type': 'application/json'
            }
        })
        await respuesta.json()
    } catch (error) {
        console.log(error)
    }
}


export async function eliminarCliente(id){
    try {
        const respuesta = await fetch(`${import.meta.env.VITE_API_URL}/${id}`,{ //Eliminamos cliente de JSON SERVER por metodo Delete
            method: 'DELETE'
        })
        await respuesta.json()
    } catch (error) {
        console.log(error)
    }
}