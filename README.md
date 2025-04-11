#Projeto React de Loja Virtual

  Abra o terminar no PowerShell e insira os comandos:

- npx create-react-app loja
- npm install react-router-dom (Instale essa biblioteca para utilizar a troca de página através de links)


#Estrutura das Pastas

Dentro da pasta src, crie as seguintes pastas para organizar o projeto:

- Componentes(Pasta)
   - Header
     - Cabeçalho da página
   - Footer
      - Rodapé da página

(Observação: Este projeto utiliza apenas os componentes Footer e Header)

 - CSSdaPageCompra(Pasta)
    - CSSdaPageCompra
     - reVillage.css (colocar todos os arquivos de CSS de cada jogo)

- CSSdeCadaPagina(Pasta)
    - header.css

- imgsCds(Pasta)
    - reVillage.jpg

- imgsJogos(Pasta)

Insira as imagens de banner dos jogos, que serão exibidas para o usuário ao clicar :

  - imgsJogos(Pasta)
    - reVillage.jpg
    
    imgsParceria(Pasta) 
  Adicione as imagens dos logos das empresas desenvolvedoras dos jogos. Neste projeto, são usadas para simular propagandas:
  
  - imgsParceria(Pasta)
    - Capcom.jpg

pageComprarJogo

Mantenha os arquivos que serão mostrados quando um usuário clicar para comprar um jogo. Cada arquivo representará a página individual de um jogo, contendo detalhes e um botão de compra:

  - pageComprarJogo (Pasta)
    - EndenRing.js

  - pages (Pasta)
    - Home.js
     
    Variaveis(Pasta)

Utilize esta pasta para armazenar arquivos com variáveis de texto. Isso facilita a manutenção e edição do conteúdo do site.

   - Variaveis(Pasta)
     - variaveisConteudoDivs.js (Arquivo)

Exemplo:
  - export const precoJogo = R$: 1000,00

No arquivo Loja.js
  - import precoJogo from '../Variaveis/variavesiPrecosJogs.js'
    tag abertura div
        tag abertura p
            {precoJogo}
        tag fechamento p
    tag fechamento div

Qualquer alteração feita no arquivo, a variável já tera a alteração por causa da importação

Execução do Projeto

Para iniciar o projeto, siga estas etapas:

Abra o arquivo App.js.

Abra o terminal integrado no seu editor de código (geralmente clicando com o botão direito do mouse e selecionando "Abrir no Terminal Integrado").

Execute o seguinte comando no terminal do PowerShell:
  - npm start

Pressione Enter. O projeto será compilado e aberto em uma nova aba do seu navegador.
