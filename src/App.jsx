import { useState } from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import CardProduto from './components/CardProduto'

const GlobalStyle = createGlobalStyle`
  * { box-sizing: border-box; margin: 0; padding: 0; }

  body {
    font-family: system-ui, Arial, sans-serif;
    background: #f1f3f5;
    line-height: 1.5;
  }
`

const Pagina = styled.main`
  max-width: 1000px;
  margin: 0 auto;
  padding: 1rem;

  @media (min-width: 600px) {
    padding: 2rem 1rem;
  }
`

const Titulo = styled.h1`
  margin-bottom: 1.5rem;
  text-align: center;
  color: #212529;
`

const Grade = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;

  @media (min-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 900px) {
    grid-template-columns: repeat(3, 1fr);
  }
`

const produtos = [
  { id: 1, nome: 'Fone Bluetooth', preco: 199.9 },
  { id: 2, nome: 'Mochila Urbana', preco: 149.9 },
  { id: 3, nome: 'Garrafa Térmica', preco: 79.9 },
]

function App() {
  const [adicionados, setAdicionados] = useState([])

  function alternar(id) {
    setAdicionados((atual) =>
      atual.includes(id) ? atual.filter((item) => item !== id) : [...atual, id]
    )
  }

  return (
    <>
      <GlobalStyle />
      <Pagina>
        <Titulo>Nossos produtos</Titulo>
        <Grade>
          {produtos.map((produto) => (
            <CardProduto
              key={produto.id}
              nome={produto.nome}
              preco={produto.preco}
              adicionado={adicionados.includes(produto.id)}
              onClick={() => alternar(produto.id)}
            />
          ))}
        </Grade>
      </Pagina>
    </>
  )
}

export default App
