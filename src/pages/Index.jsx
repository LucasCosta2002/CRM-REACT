import { useLoaderData } from "react-router-dom";
import Cliente from "../components/Cliente";
import { obtenerClientes } from "../data/clientes"; //trae los clientes del json

export function loader(){ //va a ejecutarse cuando el componente este listo, similiar pero no igual al useeffect
    const clientes = obtenerClientes() //carga los clientes
    return clientes
}

function Index() {

    const clientes = useLoaderData(); //es el loader de arriba, hace disponible los clientes

    return (
        <>
            <h1 className='font-black text-4xl text-blue-900'>Clientes</h1>
            <p className='mt-3'>Administra tus Clientes</p>

            {clientes.length ? (
                <table className="w-full bg-white shadow mt-5 table-auto">
                    <thead className="bg-blue-800 text-white">
                        <tr>
                            <th className="p-2">Clientes</th>
                            <th className="p-2">Contacto</th>
                            <th className="p-2">Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {clientes.map(cliente => ( //imprimimos los clientes
                            <Cliente
                                key={cliente.id}
                                cliente={cliente}
                            />
                        ))}
                    </tbody>
                 
                </table>
            ) : (
                <p className="text-center mt-10">No hay Clientes</p>
            )}
        </>
    )
}

export default Index