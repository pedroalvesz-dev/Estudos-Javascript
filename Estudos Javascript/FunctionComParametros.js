//Essa funçao esta sendo chamada com parametros sendo enviados 
torrar("Pão frances","Pedro")
torrar("Pão intregral","João")

function torrar(pao,name){ 
    console.log(" alimento feito usando o " + pao)
        console.log("quem pediu esses pães foi o " + name)
}
//Essa função esta sendo exacutada com parametros com valores definidos a primeira e sem valores definidos
torrarEpessoaQuePediu()
    function torrarEpessoaQuePediu( pao="Pão de intregral" , name="Pedro" , valor="10 reais"){
    console.log("sanduiche feito usando o "+pao)
        console.log("a pessoa que pediu esse sanduiche foi o " +name)
        console.log("o pedido total deu o valor de " + valor)
 }
