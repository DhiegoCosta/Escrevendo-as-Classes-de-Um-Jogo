class hero{
    constructor(nomeJogador,idadeJogador,classeJogador){
        this.nomeJogador = nomeJogador.toLowerCase()
        this.idadeJogador = idadeJogador
        this.classeJogador = classeJogador.toLowerCase()
    }
    atacar(){
        if (this.classeJogador==="guerreiro"){
            console.log(`${this.classeJogador} atacou usando espada`)
        } 
        else if(this.classeJogador==="mago"){
            console.log(`${this.classeJogador} atacou usando magia`)
        }
        else if(this.classeJogador==="monge"){
            console.log(`${this.classeJogador} atacou usando artes marciais`)
        } else {
            console.log(`${this.classeJogador} atacou usando shuriken`)
        }
    }
    apresentacao(){
        let primeiroNome = this.nomeJogador.split(' ')
        console.log(`Olá ${primeiroNome[0].toUpperCase()}! Bem-vindo ao game!`)
        console.log(`Iremos analisar seus dados. Aguarde...`)
    }

}

let acao = new hero("dhiego costa",22,"ninja")
acao.apresentacao()
acao.atacar()