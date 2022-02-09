import {React, useState,useEffect} from 'react';

//Função que retorna um componente JSX
//props = objeto que contém as propriedades recebidas quando o componente é declarado em algum arquivo
function Contador(props){

    //Declaração de um state
    //Variável do state,função de atribuir valor ao state
    const [contador,setContador] = useState(0);//seta um valor inicial à variável do state

    //useEffect 
    useEffect(() => {
        //Esta função será disparada toda vez que a variável contatador sofrer uma mudança
        document.title = contador;
    },[contador]); 

    return(
        <div>
            <h1>{contador}</h1>
            <button onClick={() => setContador(contador +1)} >Adicionar</button>
        </div>
    );
}

export default Contador;