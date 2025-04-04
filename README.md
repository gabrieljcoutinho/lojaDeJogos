 #Projeto feito usando React. 

 #Comandos nescessários:

 1- npx create-react-app loja;
 2- npm install react-router-dom;
 3- Ir no arquivo App.js e colocar o comando: npm start; 

#Foram criadas 10 pastas para separar o projeto, lembre-se de criar dentro do SRC

#Componentes, coloque arquivos que montam a página:
1 - Header;
2 - Section;
3 - main; 
4- footer;

/No meu projeto só foram nescessários o Footer e o Header/

 # Na página de compra, fiz vários links que levão para a compra do jogo, devido isso crie uma página de Css para cad um, segue o exemplo:

 CSSdaPageCompra /nome da pasta do meu projeto/
    reVillage.css /nome do arquivo css que representa o jogo/

# Crie uma pasta com o seguinte nome: CSSdeCadaPagina, esses Css se~rao os estilos da Home, pode ser dos componetes como Header, footer etc.. Segue exemplo:
  CSSdeCadaPagina
    header.css /Nome do arquivo/

#Crie uma pasta para colocar as imagens que representam o CD de cada jogo, segue exemplo:
  imgsCds /nome da pasta/
    reVillage.jpg /Nome do arquivo/

#Crie uma pasta para por as imagens que representa o "Banner" do jogo, é o que vai mostrar para pessoa clicar:
  imgsJogos /Nome da pasta/
    reVillage.jpg /Nome do arquivo/

#Crie uma pasta com o nome imgsParceria, para colcoar imagens dos logos das empressas que fizeram os jogos, no meu projeto eu usei os logos para representar propagandas:
  imgsParceria /Nome da pasta/
    Capcom.jpg /Nome do arquivo/

# Crie uma pasta para os arquivos que vão ser mostardos quando a pessoa clicar para comprar o jogo, vai ter umas divs e vai ter um botão no final de cada div de cada jogo, ao clciar a pessoa vai ser redirecionada para outra página onde só terá o jogo que a pessoa quer
   pageComprarJogo /Nome da pasta/
     EndenRing.js /Nome do arquivo/

# Crie uma pasta para separar os links do Header, o meu projeto é dividido em TRÊS parte: Home, Loja e Contato:
  pages /Nome de pasta/
    Home.js /Nome do arquivo/

# Crie uma pasta chamada Variaveis, essa pasta eu criei para colocar o minimo de texto no outros arquivos, assim eu posso alterar os textos de uma forma mais rápida, para facilitar o entendimento segue o exemplo:
    <p>Esse jogo custa R$: 1000,00</p>

---Invés de eu colocar o texto direto, eu crio outro arquiov, crio uma varável e colco essa variável no lugar do texto, segue exeplo:
   var valorJogo: "R$: 1000,00"
    <p>Esse jogo custa: {valorJogo}</p>

---Assim eu posso alterar o valor de uma forma mais rápida e posso colocar menos texto, se nescessário, posso trocar o resto do texto por outra variável ou eu troco todo o texto para uma única variável, que é como está nos aquivos, assim fica mais fácil de manipular os conteúdos
 
 # Para finalizar, abra o arquivo App.js, abra o terminar clicando com o botão direto do Mouse e escolhendo a opção Abrir no Terminal Integrado e insira o seguinte comando:
   npm start

# Aperte Enter e o projeto estará rodando

/-------------------Fim do código-------------------/









    
