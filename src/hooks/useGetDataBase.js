import { useState, useEffect } from 'react'
import getDatabase from '../helpers/getDatabase'

const useGetDataBase = () => {
    const [datosDB, setDatosDB] = useState({
        arrayData: [],
        cargando: true
    })
    useEffect(() => {
        getDatabase()
            .then((arrayData) => {
                return {
                    arrayData,
                    cargando: false
                }
            }).catch((err) => {
                console.log(err)
            });


    }, [])


    return datosDB;
}

export default useGetDataBase