import styled from 'styled-components'

const Card = styled.article`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  padding: 1.25rem;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s, box-shadow 0.2s;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.15);
  }
`

const Nome = styled.h3`
  font-size: 1.1rem;
  color: #212529;
`

const Preco = styled.p`
  font-size: 1.4rem;
  font-weight: 700;
  color: #0d6efd;
`

const Botao = styled.button`
  margin-top: auto;
  padding: 0.75rem 1rem;
  font: inherit;
  font-weight: 600;
  color: #fff;
  background-color: ${(props) => (props.$adicionado ? '#198754' : '#6c757d')};
  border: 0;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.2s, filter 0.2s;

  &:hover {
    filter: brightness(0.9);
  }

  &:focus-visible {
    outline: 3px solid #0d6efd;
    outline-offset: 2px;
  }
`

function CardProduto({ nome, preco, adicionado, onClick }) {
  const precoFormatado = preco.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  })

  return (
    <Card>
      <Nome>{nome}</Nome>
      <Preco>{precoFormatado}</Preco>
      <Botao type="button" $adicionado={adicionado} onClick={onClick}>
        {adicionado ? 'Adicionado ✓' : 'Adicionar ao carrinho'}
      </Botao>
    </Card>
  )
}

export default CardProduto
