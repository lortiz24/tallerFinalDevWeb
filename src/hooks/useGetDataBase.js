import { useState, useEffect } from 'react'
import getDatabase from '../helpers/getDatabase'

const useGetDataBase = (controllerGetDB,setControllerGetDB) => {
    
    const [datosDB, setDatosDB] = useState({
        arrayData: [],
        cargando: true,     
    })
    useEffect(() => {
        getDatabase()
            .then((arrayData) => {
                setDatosDB({
                    arrayData,
                    cargando: false
                    
                })
            }).catch((err) => {
                console.log(err)
            });
            
            setControllerGetDB(false)
    }, [controllerGetDB])


    return datosDB;
}

export default useGetDataBase