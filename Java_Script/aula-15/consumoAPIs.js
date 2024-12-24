/*
  ! Fetch API
  fetch('URL', )
    * Para quê serve a FetchAPI
        Fetch API é uma API do Browser (Ela basicamente serve para pegar dados da API).
  
*/

// then / catch
fetch("https://viacep.com.br/ws/01001000/json/")
  .then((response) => {
    response.json().then((datas) => console.log(datas));    
  })
  .catch((erro) => {
    console.log(erro);
  });

// async / await
async function getDatasFromCep() {
  try {
    const response = await fetch("https://viacep.com.br/ws/01001000/json/");
    const datas = await response.json();
    console.log(datas);
  } catch (erro) {
    console.log('Deu errado: ', erro);
  } finally {
    console.log('Terminou a requisição');
  }
}

getDatasFromCep();