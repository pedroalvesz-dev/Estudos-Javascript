//Fazendo uma receita de bolo utilizando classes e objetos

class formaDeBolo{
    constructor(ingredientes ,temperaturaDoForno,tempDePrepreparo,saborDaMassa,saborDoRecheio){
        this.ingredientes=ingredientes
        this.temperaturaDoForno=temperaturaDoForno
        this.tempDePreparo=tempDePrepreparo
        this.saborDaMassa=saborDaMassa
        this.saborDoRecheio=saborDoRecheio
        
    }
    escreverIngredientes(){
        console.log(`Um bolo sendo feito usando ${this.ingredientes}`)
    }
    escreverTemperaturaDoforno(){
        console.log(`Você vai deixar no Forno Médio usando a temperatura de ${this.temperaturaDoForno}`)
    }
    escreverTempoDePreparo(){
        console.log(`O bolo deve ficar no forno por ${this.tempDePreparo} minutos`)
    }
    escreverSaborDaMassar(){
        console.log(`A receita vai acompanhar ${this.saborDaMassa}`)
    }
    escreverSaborDoRecheio(){
        console.log(`O recheio fica a criterio de quem vai fazer,mas eu vou usar o ${this.saborDoRecheio}`)
    }
    escreverFinalizacao(){
        console.log("Obrigado por seguirem a minha receita de bolo espero que tenham conseguido")
    }

}

let boloDeFesta= new formaDeBolo("ovos,Açúcar,Farinha de trigo,Manteiga ou óleo e Fermento em pó",
    "180 °C",
    40,
    "massa de chocolate",
    "recheio de morango")

boloDeFesta.escreverIngredientes()
boloDeFesta.escreverTemperaturaDoforno()
boloDeFesta.escreverTempoDePreparo()
boloDeFesta.escreverSaborDaMassar()
boloDeFesta.escreverSaborDoRecheio()
boloDeFesta.escreverFinalizacao()


