# O que é este repo

Irei utilizar esse repositório para guardar anotações importantes e exemplos para utilizar em projetos futuros.\
Se isto te ajudar, ficarei feliz :blush:

## Dependências

Você precisar ter o Node.Js instalado na sua máquina. [Baixar o NodeJs](https://nodejs.org/pt-br/)

## Como executar o projeto

Para executar o projeto utilize:

### `npm start`

Irá rodar a aplicação no modo desenvolvimento.\
Abrirá a aplicação no endereço [http://localhost:3000](http://localhost:3000).

Toda vez que salvar um arquivo a página será recarregada.\
Erros e Warnings aparecerão no console.

## Documentação do React

Link para acessar a [documentação do React](https://reactjs.org/).

## Exemplos

### `Contador`

O primeiro exemplo é bem simples, trata-se de um componente JSX que irá renderizar um número e um botão, cada\
clique no botão irá incrementar o valor do número na tela e no title do documento.

Localizado em [src/components/Contador.js](src/components/Contador.js)

## Explicações

### `Component`

Componentes são funções que irão retornar um conjunto de elementos HTML a serem renderizados na tela.

#### Sintaxe

~~~javascript
import {React} from 'react';

//Função que retorna um componente JSX
//props = objeto que contém as propriedades recebidas quando o componente é chamado em algum arquivo

function MeuComponent(props){

    return(
        <div>
            <h1>{props.texto}</h1>
        </div>
    );
}

export default MeuComponent;

~~~

Uso:

~~~javascript
<MeuComponent texto="Hello Word">
~~~

### `useState`

O useState é um hook que nos permite declarar e setar valores a um estado do nosso component.

É necessário importá-lo do pacote react.

~~~javascript
import React, { useState } from 'react';
~~~

Declaração:

~~~javascript
//Declara um array de 2 índices
//Primeiro índice : declara a variável que irá conter o valor do state
//Segundo índice : declara a função que irá setar o valor do state
//Array recebe como valor a função useState que passa como parâmetro o valor inicial do state
const [quantidade, setQuantidade] = useState(0);

const [usuario, setUsuario] = useState({nome: "Yan", idade: 22});
~~~

Uso:

~~~javascript
//Para pegar o valor de um state você pode simplesmente chamá-lo
console.log(usuario);
<span>{usuario.nome}</span>

//Para setar o valor de um state você deverá chamar a função que foi declarada na instância do state
//e passar como parâmetro da função o novo valor do state
setUsuario({nome: "João", idade: 15});
~~~

### `useEffect`

o useEffect é um hook que permitirá  executar uma função quando o valor de um dos seus parâmetros sofrer
uma alteração.

Ele recebe uma função e uma lista de objetos que ficarão sendo verificados, caso algum desses objetos tiverem
seus valores modificados a função dentro do useEffect será executada.

É necessário importá-lo do pacote react.

~~~javascript
import React, { useEffect } from 'react';
~~~

Sintaxe:

~~~javascript
 useEffect(funcao, [array,comObjetos,queVaoDisparar,aFuncao]);
~~~

Declaração:

~~~javascript

  useEffect(() => {
    // Executa um código aqui dentro toda vez que a variável contador sofrer uma mudança de valor
  },[contador]);

~~~

Yan Vitor - 2022
