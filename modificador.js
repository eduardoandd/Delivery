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
    caixaAlta:caixaAlta
}
