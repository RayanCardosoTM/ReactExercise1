import { useState } from 'react'
import reactLogo from '/react.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='content'>
      <img src={reactLogo} alt="" width="150px" />
      <h3>
        React
      </h3>
      <p>
        A biblioteca para interfaces de usuário web e nativas
      </p>
      <button>Aprenda React</button>
      <button>Referência da API</button>
      <hr />
      <h3>
        Crie interfaces de usuário de componentes
      </h3>
      <p>
        React permite que você construa interfaces de usuário a partir de pedaços individuais chamados componentes
      </p>
      <hr />
      <h3>
        Escreva componentes com código e marcação
      </h3>
      <p>
        Componentes React são funções JavaScript. A sintaxe de marcação é cahamada JSX. É uma extensão da sintaxe Javascript popularizada pelo React
      </p>
      <hr />
      <h4>
        Próximos passos
      </h4>
      <ul>
        <li>Uso de daos dinâmicos no JSX</li>
        <li>Criação de novos componentes</li>
        <li>Estilização de componentes</li>
        <li>Reutilização de componentes</li>
        <li>Uso de props e children</li>
        <li>Uso de eventos do JavaScript</li>
      </ul>
    </div>
  )
}

export default App
