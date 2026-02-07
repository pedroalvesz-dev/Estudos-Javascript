//#region  sem json
comprarProdutos(
    "Pedro",
    "mouse , teclado mecanico ,monitor",
    "100 dolares, 200 dolares, 300 dolares",
    "1000 dolares",
);

function comprarProdutos(name, products, valor, quantidadeDeDinheiro) {
    console.log("pessoa que comprou os produtos foi o " + name);
    console.log("produtos comprados foram: " + products);
    console.log("Preço de todos os produtos: " + valor);
    console.log("Dinheiro disponivel para comprar:" + quantidadeDeDinheiro);
}
//#endregion

//#region com json

let montarMeuPcGamer={
    nomeDaLoja:"best buy", 
    name:"Pedro",
    products:{
        0:["mouse",100],
        1:["teclado mecanico",200],
        2:["monitor",400]    
    },
    quantidadeDeDolares:"3000 dolares"
}

comprasNaBestBuy(montarMeuPcGamer)
function comprasNaBestBuy(montarMeuPcGamer){
    console.log(`bem vindo a ${montarMeuPcGamer.nomeDaLoja}`)

    for(let index in montarMeuPcGamer.products){
        let[produtos,preco]=montarMeuPcGamer.products[index]
        console.log(`-${produtos} preço $${preco}`)
    }
    console.log(`${montarMeuPcGamer.name} tinha ${montarMeuPcGamer.quantidadeDeDolares} para comprar as peças do seu pc gamer `)
}

//#endregion

