// var ingredientes = [
//     {
//         nome: 'carne',
//         quantidade:2,
//         quantidadeGramas:80,
//         valor:4.46
//     },
//     {
//         nome:'Pão brioche',
//         quantidade:2,
//         quantidadeGramas:null,
//         valor:1.22
//     },
//     {
//         nome: 'cheedar',
//         quantidade:4,
//         quantidadeGramas:null,
//         valor:1.12
//     },
//     {
//         nome:'bacon',
//         quantidade:2,
//         quantidadeGramas:null,
//         valor:1.50
//     },
//     {
//         nome:'maionese de bacon',
//         quantidade:null,
//         quantidadeGramas:5,
//         valor:0.50
//     }
// ]

function capitalizarNovo(colecao){
    let modificado=[]

    for(var i in colecao){
        let nome = colecao[i].nome

        let splitNome=nome.split(' ')

        if(splitNome.length === 1){
            let letraMaiscula= splitNome[0].charAt(0).toUpperCase()
            let restroDaFrase= splitNome[0].slice(1)

            let frase = letraMaiscula+restroDaFrase
            modificado.push(frase)
        }
        else{
            let modificadoComposto=[]

            for(i in splitNome){
                let letraMaiscula= splitNome[i].charAt(0).toUpperCase()
                let restroDaFrase= splitNome[i].slice(1)
    
                let frase = letraMaiscula+restroDaFrase
                modificadoComposto.push(frase)
            }

            let fraeseComposta=modificadoComposto.join(' ')
            modificado.push(fraeseComposta)
        }

    }
    
    return modificado
}

function capitalizarNovo2(colecao,atributo){
    // console.log(typeof colecao[0]);
    if(typeof colecao[0] == 'object'){
         var resultado = colecao.map(function(obj){
            let letraMaiscula = obj[atributo].charAt(0).toUpperCase()
            let restroDaFrase = obj[atributo].slice(1)

            obj[atributo]=letraMaiscula+restroDaFrase

            return obj
         })

         console.log(resultado);
    }
}

// capitalizarNovo(ingredientes)

function capitalizar(listaSplit){

    if(listaSplit.length > 1){

        var listaTratada = []

        for(var i in listaSplit){

            var frase = listaSplit[i]
            var letraMaiuscula= frase.charAt(0).toUpperCase()
            var restroDaFrase = frase.slice(1)

            var r=letraMaiuscula+restroDaFrase
            listaTratada.push(r)
        }
    }
    else{

        var frase=listaSplit[0]
        var letraMaiuscula= frase.charAt(0).toUpperCase()
        var restroDaFrase = frase.slice(1)
        var r=letraMaiuscula+restroDaFrase
        return r
    }
    if (listaTratada.length > 1){
        var r=listaTratada.join(' ')
        return r
    }
}

function caixaAlta(lista){

    var modificado = []

    for( var item in lista){
        var itemCaixaAlta= lista[item].toUpperCase()
        modificado.push(itemCaixaAlta)
    }
    ordenar(modificado)
    return modificado
}

function modificador(lista){

    let modificado = []

    for(let i in lista){
        var listaSplit = lista[i].split(' ')

        var r=capitalizar(listaSplit)
        modificado.push(r)
    }

    let listaOrdenada=ordenar(modificado)
    return listaOrdenada
}

function ordenar(lista){
    // LEVA EM CONSIDERAÇÃO ACENTOS 
    return lista.sort(function(a,b){
        return a.localeCompare(b)
    })
}
 
export default {
    modificador: modificador,
    ordenar: ordenar,
    capitalizar:capitalizar,
    capitalizarNovo:capitalizarNovo,
    capitalizarNovo2:capitalizarNovo2,
    caixaAlta:caixaAlta
}
