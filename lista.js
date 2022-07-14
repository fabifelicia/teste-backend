let phoneList = [
  { telefone: 5685396528, nome: 'João' },
  { telefone: 123456, nome: 'Helena' },
  { telefone: 526895, nome: 'Bial' },
  { telefone: 125498, nome: 'Fabio' },
  { telefone: 589354, nome: 'Luiz' }
]

function getPhoneNumber(phoneList, name) {
  return Object.values(phoneList).find(value => value.nome === name)
}


console.log(getPhoneNumber(phoneList,'Bial'))

