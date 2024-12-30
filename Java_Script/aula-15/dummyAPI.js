async function getUsers() {
  const resposta = await fetch("https://dummyapi.io/data/v1/user?create=1", {
    headers: {
      'app-id': '63f77cc1b7f489f0b351b30f'
    },
  });

  const users = await resposta.json()

  console.log(users);
}

getUsers();

async function getUser() {

}

async function createUser() {
  await fetch("https://dummyapi.io/data/v1/user?create=1")
}