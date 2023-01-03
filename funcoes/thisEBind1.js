const pessoa = {
    saudacao: 'Bom dia!',
    falar() {
        console.log(this.saudacao)
    }
}

pessoa.falar()
const falar = pessoa.falar
falar() //conflito entre paradigmas: funcional e OO


const falarDePessoa = pessoa.falar.bind(pessoa) //bind define o this sem utilizá-lo
falarDePessoa()

const falar2 = pessoa.falar
falar2()