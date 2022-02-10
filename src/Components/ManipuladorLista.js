import React from 'react';
import {useState,useEffect} from 'react';

function ManipuladorLista() {

    const[itens,adicionaItem] = useState([]);

    function handleAdicionarItem ()
    {
        let novoItem = document.getElementById("novoItem").value;

        adicionaItem([...itens,{id: Math.random(), Text : novoItem}])
    }

    useEffect(() => {
        document.getElementById("novoItem").value = "";
    },[itens])

    return (
        <div>
            <input id='novoItem' type="text" placeholder='Descrição do item' className='form-control'/><br/>
            <button className='btn btn-success' onClick={ handleAdicionarItem } >Adicionar</button>

            <ul className="list-group">
                {
                    itens.map((item,index) => 
                        <li key={index}>{item.Text}</li>                        
                    )
                }
            </ul>
        </div>
    );
};

export default ManipuladorLista;