/*
  ! Introdução ao ReactJS

    -> O ReactJS é uma biblioteca de JavaScript eficiencia e flexível, sendo útil no desenvolvimento de interfaces de usuário.

    * O ReactJS pode ser utilizado para diferentes finalidades:

      1. Aplicação Web
      2. Aplicação Mobile
      3. Aplicação Desktop 
      4. Aplicativos para TV
      5. Aplicativos de Realidade Aumentada.

      -> Ele nos permite criar interfaces complexas a partir de pedaços de código pequenos e isolados, o que chamamos de componentes.

    * Bibliotecas derivadas do ReactJS

      1. React DOM - Aplicação Web
      2. React Native - Aplicativo Mobile
      3. Eletron - Aplicação Desktop
      4. React TV - Aplicação para TV
      5. React VR - Aplicativo de Realidade Aumentada.

    * Como o ReactJS funciona ? 

      1. Compilers (Babel)
        -> E um compilador ele vai fazer uma conversão de código.

      2. Bundlers (WebPack)
        -> E pegue varios códigos JavaScript e transforme em apenas um.

      3. Vite (WebPack)
        -> O Vite é uma ferramenta de construção e desenvolvimento frontend extremamente rápida e eficiente, criada para substituir o Webpack e outras bundlers tradicionais. Ele é especialmente popular em projetos Vue.js e React, mas suporta diversas outras tecnologias modernas.

    * Exemplo de importação

      1. import { greeting, PI } from './exemplo';  
        -> Forma nova de importação suportada pelo browser, essa forma é chamada de ESModules

      2. const { greeting, PI } = require('./exemplo1');

      -> Forma antiga de importação não suportada pelo browser, essa forma é chamada de Common JS.

    * Para que serve o StrictMode?
      -> Ferramenta para checar más práticas React. Caso encontre potenciais problemas, emite warnings(Apenas no ambiente de desenvolvimento).

      ? Exemplos de checagens de erro:
        1. Utilização do Content API legado
        2. Detectação de utilização de métodos do ciclo de vida que forem depreciados.
        3. Efeitos colaterais não esperados em componentes

    
    ! Componetização
      -> Ela consiste em dividir um sistema em componentes independentes e reutilizáveis, facilitando a manutenção, escalabilidade e reutilização do código.
      
      * Padrões de Renderização (Rendering Patterns).

        ? SPA - single page application        
          -> Single Page Application (SPA) é um tipo de aplicação web que carrega uma única página HTML e atualiza seu conteúdo dinamicamente, sem precisar recarregar a página inteira quando o usuário navega. 

        ? SSR - Server Side Rendering(Next JS)
          -> Server-Side Rendering (SSR) é uma técnica onde as páginas de um site são geradas no servidor antes de serem enviadas ao navegador. Isso significa que, ao acessar uma página, o servidor monta todo o HTML com o conteúdo dinâmico e entrega pronto para o usuário, ao invés de depender do JavaScript para construir tudo no lado do cliente (como acontece em SPAs puras).

        ? SSG - Static Site Generation(Next JS)
          -> Static Site Generation (SSG) é uma técnica onde as páginas de um site são pré-geradas no momento da build e servidas como arquivos HTML estáticos. Isso significa que, quando um usuário acessa o site, ele recebe uma página pronta, sem necessidade de processamento no servidor.

      * Dois tipos de componentes
        ? Class Componentes
          -> Componentes baseados em classes
          * Exemplos:
            import React from "react"
            
            // Componente em classe é uma classe que herda a classe Componentes do React, e retorna HTML dentro método render.
            class App extends React.Component {
              // Método responsável por renderizar o contéudo HTML do nosso componente
               render() {
                return (
                  <>
                    <div>
                      <h1>Aprendendo React</h1>
                      <p>Isso aqui é um parágrafo</p>
                    </div>
                  </>
                )
              }
            }
            
            export default App;
            
            

        ? Function Componentes 
          -> Componentes baseadas em funções

    ! React Legado II - Props e Estados
    
      * Outras formas de criar um componente
        Exemplo:
          import React from "react";
          import logoImg from '../../assets/image/react.svg';
          import './style.css';
          
          export class Navbar extends React.Component {
            render() {
              return (
                <header>
                  <nav id="navbar">
                    <div className="nav-brand">
                      <img src={logoImg} alt="" />
                      <h1>Space Flight News</h1>
                    </div>
                    <ul className="nav-list">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Trending</a></li>
                    <li><a href="#">Categories</a></li>
                    <li><a href="#">About us</a></li>          
                  </ul>
                  </nav>        
                </header>
              )
            }
          }

      * A importação em outro arquivo.
        import { Navbar } from "./components/Navbar/Navbar";    
          -> As chaves nos obriga nomear as exportação com o mesmo nome.  


      * Props
        -> Props (abreviação de "properties") são argumentos que passamos para componentes no React. Elas permitem que um componente receba valores dinâmicos e sejam reutilizáveis.

        * this.props = {
          -> Dentro do this.props é criado um objeto

          title: 'Exemplo
        }


*/





