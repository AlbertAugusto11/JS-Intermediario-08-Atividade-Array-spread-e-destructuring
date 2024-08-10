/*
  Importe corretamente as constantes usuarios e enderecos dos arquivos
  dbUsers.js e dbAdress.js, respecitvamente
*/

// Faça as importações corretas acima
console.log(usuarios);
console.log(enderecos);

// Adicionar endereços aos usuarios pelo id
function addAddresToUser(listaDeUsuarios, listaDeEnderecos) {
  [n1,n2,n3,n4] = listaDeUsuarios;
  let x = [];
  for(i=0;i<listaDeEnderecos.length;i++){
    if(listaDeEnderecos[i].userId == 1){
      n1.endereco = listaDeEnderecos[i].endereco;
      x.push(n1);
    }else if(listaDeEnderecos[i].userId == 2){
      n2.endereco = listaDeEnderecos[i].endereco;
      x.push(n2);
    }else if(listaDeEnderecos[i].userId == 3){
      n3.endereco = listaDeEnderecos[i].endereco;
      x.push(n3);
    }else if(listaDeEnderecos[i].userId == 4){
      n4.endereco = listaDeEnderecos[i].endereco;
      x.push(n4);
    }
  }
  return x;
}

// Descomente os consoles abaixo para testar suas funções
console.log(addAddresToUser(usuarios, enderecos));

// Funcao para deletar o password
function deletePassword(x) {
  x.password = "";
  return x;
}
console.log(deletePassword(usuarios[0]));

// Listar os usuarios sem a senha
function listUsers(usuarios) {
  let x = [0];
  usuarios.filter(element =>{
    if(element.password == ""){
      x.pop();
      x.push(element);
    }
  });
  return x;
}
console.log(listUsers(usuarios));

// Listar somente nome, email e stack
function listUserStacks(listaDeUsuarios) {
  let x = listaDeUsuarios;
  x.forEach(element => {
    delete element.id;
    delete element.idade;
    delete element.password;
    delete element.endereco;
  });
  return x;
}
console.log(listUserStacks(usuarios));

//Deletar um usuário que tenha python na stack
function deleteUser(listaDeUsuarios) {
  let x = listaDeUsuarios;
  let xx = [...listaDeUsuarios]
  let y;
  for(i=0;i<xx.length;i++){
    if(xx[i].stacks.includes("Python") == true){
      y = xx[i];
    }
  }
  let z = xx.indexOf(y);
  xx.splice(z,1)
  return xx;
}
console.log(deleteUser(usuarios));
