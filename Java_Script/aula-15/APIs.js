/*
  ! APIs
    -> Em potuguês, Interface de programação de Aplicações. 
    -> Hoje em dia é muito comum que diferentes aplicações consumam dados pela internet, muitas vezes dados providenciados por terceiros.
    -> Por exemplo, um aplicativo de entrega de alimentos pode usar dados de geolocalização do Google para localizar restaurantes próximos ao usário e exibir a rota percorrida pelo entregador.
    -> Como essas aplicações podem estar rodando em diferentes plataformas e linguagens de programação, é importante estabelecer uma "Liguagem comum" para que todos consigam esses dados.
    -> A API é uma interface que nos permite utilizar funcionalidades/ recursos de terceiros, seguindo um conjuto de definições/ contratos estabelecidos pelo terceiro.
    * Exemplos:
      -> Login social
      -> Pagamento Online
    -> A API acaba facilitando a vida dos programadores, pois reduz o tempo de desenvolvimento de novas aplicações.
    * Tipos de APIs:
      1.Públicas ou abertas
      2. Privadas ou internas
      3. APIs de Parceiras
    * Protocolos de APIs:
      -> Os protocolos servem para padronizar a troca de dados entre a aplicação e a API.
      -> Existem diferentes protocolos de APIs, como RPC, SOAP, GraphQL e REST.
      -> O REST é o padrão mais comum.
      -> REST (Representational State Transfer) se baseia em seis restrições. Caso uma API respeite essas 6 restrições, ela é considerada uma API RESTful.
    * Protocolos de APIs:
      -> Ter uma arquitetura formada por clientes, servidores e recursos, com solicitações gerenciadas por HTTP.
      -> Estabelecer uma comunicação stateless entre cliente e servidor. Isso significa que nenhuma informação do cliente é armazenada entre solicitações GET e todas as solicitações são separadas e desconectadas.
      -> Armazenar dados em cache para otimizar as interações entre cliente e servidor. 
      -> Ter uma interface uniforme entre os componentes para que as informações sejam transferidas em um formato padronizado.
      -> Ter um sistema em camadas que organiza os tipos de servidores(responsáveis pela segurança, pelo carregamento de carga e assim por diante) envolvidos na revuperação das informações solicitações em hierarquias que o cliente não pode ver.
      -> Possibilidade código sob demanda (opcional): a capacidade de enviar um código executável do servidor para o cliente quando solicitado para ampliar a funcionaliade disponivel ao cliente.

    * Características de APIs REST 
    -> Os recursos são solicitados/ enviados via protocolo HTTP.
    -> URI Base(Base URL): Várias APIs fornecem um "endereço base".Todas as suas requisições incluirão esse endereço, e ao final dele nós colocamos detalhes específicos para cada um dos recursos disponíveis.
    -> Formato do dado/recurso: Algumas APIs possuem formatos fixos de dados. Outras permitem que voçê escolha. È comum, por exemplo, que uma API permite que voçê escolha entre JSON, XML, CSV e/ou outros formatos.
    -> Schemas: È bastante comum que as APIs disponibilizem um "modelo" genérico de como será formatado o seu JSO para que os desenvolvedores saibam quias campos esperar e quais tipos de dados serão possiveis para cada campo. Por exemplo:
      {
        "nome": string,
        "pontuacao": interger
      }
*/
