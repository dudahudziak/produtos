# CardProduto com Styled Components

Componente `CardProduto` estilizado inteiramente com **CSS-in-JS (Styled Components)**. O botão muda de cor conforme a prop `adicionado`.

## Tecnologias

- React 18
- Vite
- Styled Components 6

## Estilização dinâmica

| Prop `adicionado` | Cor do botão | Texto |
|---|---|---|
| `false` | cinza `#6c757d` | Adicionar ao carrinho |
| `true` | verde `#198754` | Adicionado ✓ |

```jsx
const Botao = styled.button`
  background-color: ${(props) => (props.$adicionado ? '#198754' : '#6c757d')};
`
```

O `CardProduto` recebe `adicionado` e repassa ao botão como `$adicionado` (prop transitória do Styled Components, que não é enviada ao HTML).

## Estrutura

```
src/
├── components/
│   └── CardProduto.jsx   componente + estilos (Card, Nome, Preco, Botao)
├── App.jsx               grade de produtos e estilo global
└── main.jsx
```

## Como rodar

```bash
npm install
npm run dev
```

Abra o endereço exibido no terminal 

Os dados são estáticos e não há carrinho real: o clique apenas alterna o estado visual do botão.
