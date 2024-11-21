import reqRespApi from "../api/reqRes";
import { useEffect } from "react";
import {useState} from 'react';

export const Usuarios = () => {
    const [usuarios, setUsuarios] = useState([]);
    
    useEffect(() => {
    //FIC: llamado de la API
    reqRespApi.get('/users')
    .then(resp=> {
            //console.log(resp.data.data);
            setUsuarios(resp.data.data);
    })
    .catch(err => console.log(err))
    }, [])


    const renderItem = (usuario) => {
        return (
            <tr key={usuario.id.toString()}>
                <td>
                    <img
                        src={ usuario.avatar }
                        alt={ usuario.first_name }
                        style={{
                            width: 50,
                            borderRadius: 100
                        }}
                    >
                    </img>
                </td>
                <td>
                    { usuario.first_name } { usuario.last_name }
                </td>
                <td>
                    { usuario.email }
                </td>
            </tr>
        )
    }
    return (
        <>
            <h3>Usuarios</h3>
            <table className = "table">
                <thead>
                    <tr>
                        <th>
                            Avatar
                        </th>
                        <th>
                            Nombre
                        </th>
                        <th>
                            email
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        usuarios.map(FicArgUsuario => renderItem(FicArgUsuario))
                    }
                </tbody>
            </table>
        </>
    )
};

export default Usuarios;