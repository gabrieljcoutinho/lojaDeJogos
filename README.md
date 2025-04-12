# Projeto React - Loja Virtual

Loja de jogos com as págias Home, Loja e Contato.

Desenvolvido com React e o componente react-router-dom que é utilizado para permitir a troca de páginas.

## Como rodar o projeto

Abra o terminar do PowerShell e execute o comando abaixo:

```bash
npm start
```

Acessar a aplicação em http://localhost:3000.


## Estrutura do projeto

As pastas estão organizadas da seguinte forma:

Componentes do projeto:

- \Components
  - Header.js = Cabeçalho da página
  - Footer = Rodapé da página

- \CSSdaPageCompra = Arquivo CSS de cada um dos jogos

- \CSSdeCadaPagina
  - header.css

- \imgsCds = Imagem dos CD's

- \imgsJogos = Imagem do banner dos jogos

- \imgsParceria =  Imagem do logo das empresas


- \pageComprarJogo = Página de compra


 - \Variaveis = Variáveis dos textos


## Atualização

No site está sendo utilizado variáveis para permitir atualizar os conteúdos.

Por exemplo para alterar o valor do jogo Elder, precisamos:

1- Alterar o valor no arquivo: `variaveisPrecosJogs.js`

```
export const preçoEldenRing = 'R$:275,84'
```

e o valor será automaticamente exibido na página de compra, devido ao código abaixo no arquivo `Loja.js`:

  import precoJogo from '../Variaveis/variavesiPrecosJogs.js'

     <div>
        <p>
            {precoJogo}
        </p>
      </di>


## Como criar um projeto igual

Criar o projeto

```bash
npx create-react-app loja
```

Adicionar o componente react-router-dom

```bash
npm install react-router-dom
```
