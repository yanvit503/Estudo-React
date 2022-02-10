import React from 'react';
import { useState } from 'react';


function Formulario(props)
{
    const[nome,setNome] = useState('');
    
    function handleChangeInput(e)
    {
        setNome(e.target.value)
    }

    return (
        <div className='form-floating'>
            

            <input type="text" placeholder="Digite seu nome" className='form-control' id="inputNome"
             value={nome} 
             onChange={(e) => { handleChangeInput(e) }} />
             
            <label htmlFor="inputNome">Nome:</label>

            <br/>

            { nome != "" ? <span id="nomeSpam">Seu nome é {nome}</span> : <></>}
        </div>
    );
}

export default Formulario;