import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './components/Layout'
import NuevoCliente, {action as nuevoClienteAction} from './pages/NuevoCliente'
import Index, {loader as clientesLoader} from './pages/Index'
import EditarCliente, {loader as editarClienteLoader, action as editarClienteAction} from './pages/EditarCliente'
import ErrorPage from './components/ErrorPage'
import {action as eliminarClienteAction} from './components/Cliente'


// path son las rutas a las paginas, las url o las paginas
// element es lo que se va a mostrar en pantalla, componente o codigo html, lugar donde se inyecta el outlet
//  todos los cambios que haga en layout se verán reflejados en todos los hijos children
// primer children index es la pagina principal
// loaders se usa para obtener datos de una API o de un objeto similar a un state
// actions para procesar la entrada de datos de un Form

// useLoaderData cuando quiera obtener el resultado de un loader
// useActionData cuando quiera obtener el resultado de un action 

const router = createBrowserRouter([
	{
		path: '/',
		element: <Layout/>,
		children: [
			{
				index: true,
				element: <Index/>,
				loader: clientesLoader,
				errorElement: <ErrorPage/>
			},
			{
				path: '/clientes/nuevo',
				element: <NuevoCliente/>,
				action: nuevoClienteAction,
				errorElement: <ErrorPage/>
			},
			{
				path: '/clientes/:clienteId/editar',
				element: <EditarCliente/>,
				loader: editarClienteLoader,
				action: editarClienteAction,
				errorElement: <ErrorPage/>
			},
			{
				path: '/clientes/:clienteId/eliminar',
				action: eliminarClienteAction
			}
		]
	},
])



ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<RouterProvider router={router}/>
	</React.StrictMode>,
)
