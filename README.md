#Projeto React de Loja Virtual
Comandos Necessários
Crie um novo projeto React:
Bash

npx create-react-app loja
Instale a biblioteca de roteamento:
Bash

npm install react-router-dom
Inicie o servidor de desenvolvimento:
Bash

cd loja
npm start
Estrutura de Pastas
Dentro da pasta src, crie as seguintes pastas para organizar o projeto:

Componentes
Armazene aqui os arquivos que estruturam as páginas:

Header
Section
main
footer
(Observação: Este projeto utiliza apenas os componentes Footer e Header)

CSSdaPageCompra
Guarde os arquivos CSS específicos para cada página de compra de jogo. Por exemplo:

CSSdaPageCompra/
  reVillage.css
CSSdeCadaPagina
Aloque os arquivos CSS para estilizar as páginas principais, como a Home e os componentes gerais (Header, Footer, etc.). Exemplo:

CSSdeCadaPagina/
  header.css
imgsCds
Coloque as imagens que representam as capas dos jogos (CDs):

imgsCds/
  reVillage.jpg
imgsJogos
Insira as imagens de banner dos jogos, que serão exibidas para o usuário clicar:

imgsJogos/
  reVillage.jpg
imgsParceria
Adicione as imagens dos logos das empresas desenvolvedoras dos jogos. Neste projeto, são usadas para simular propagandas:

imgsParceria/
  Capcom.jpg
pageComprarJogo
Mantenha os arquivos que serão mostrados quando um usuário clicar para comprar um jogo. Cada arquivo representará a página individual de um jogo, contendo detalhes e um botão de compra:

pageComprarJogo/
  EndenRing.js
pages
Organize os arquivos que representam as diferentes seções do site (Home, Loja, Contato):

pages/
  Home.js
Variaveis
Utilize esta pasta para armazenar arquivos com variáveis de texto. Isso facilita a manutenção e edição do conteúdo do site.

Exemplo:

Ao invés de inserir o texto diretamente no componente:

JavaScript

<p>Esse jogo custa R$: 1000,00</p>
Crie um arquivo com uma variável:

JavaScript

// Variaveis/precoJogo.js
export const valorJogo = "R$: 1000,00";
E importe e utilize a variável no seu componente:

JavaScript

import { valorJogo } from '../Variaveis/precoJogo';

function MeuComponente() {
  return <p>Esse jogo custa: {valorJogo}</p>;
}
Essa abordagem permite alterar os textos de forma mais rápida e centralizada, facilitando a manipulação do conteúdo.

Execução do Projeto
Para iniciar o projeto, siga estas etapas:

Abra o arquivo App.js.

Abra o terminal integrado no seu editor de código (geralmente clicando com o botão direito do mouse e selecionando "Abrir no Terminal Integrado").

Execute o seguinte comando:

Bash

npm start
Pressione Enter. O projeto será compilado e aberto em uma nova aba do seu navegador.
