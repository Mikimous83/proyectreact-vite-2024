import {useEffect, useState} from 'react'
import axios from 'axios'
import './App.css'

function App() {
    const API_URL = import.meta.env.VITE_API_URL
    const [criptos, setCriptos] = useState()

    useEffect(() => {
        axios.get(`${API_URL}assets`)
        // fetch(`${API_URL}assets`)
            // .then(response => response.json())
            .then(data => {
                // console.log(data)
                setCriptos(data.data.data)
            })
            .catch(() => {
                console.error('la peticion fallo')
            })
    }, [])
    if (!criptos) return <span>Cargando...</span>

    return (
        <>
            <h1>Lista de criptomonedas</h1>
            <ol>
                {
                    criptos.map(({id,name, priceUsd}) => (
                        // eslint-disable-next-line react/jsx-key
                        <li key={id}>Nombre: {name} Precio: {priceUsd} </li>
                    ))
                }
            </ol>
        </>
    )
}

export default App
