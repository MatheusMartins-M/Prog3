console.log("parte 2");

function soma(a, b){
    const resultado = a + b;

    return resultado;
}

console.log(soma(5, 6));

let sub = function(a, b){
    return a - b;
}

console.log(sub(27, 10));
let opera = sub;
console.log(opera(7, 2));

(function(nome){
    console.log("Olá, "+ nome);
})("Matheus");

let div = (a, b) => a/b;
console.log(div(6, 3));

let multi = (a, b) =>{
    const c = a*b;
    return c;
};
console.log(multi(3, 3))

function calculadora(valor1, valor2, operacao){
    console.log("Realizando operação com os valores "
        + valor1 +" e "+ valor2);
    
    console.log(operacao(valor1, valor2))
}

calculadora(2, 10, multi)
calculadora(10, 123, soma)

let lista = [20, 3, 4, 5, 60, 5]
function exibeValor(valor){
    console.log("O valor do item é: "+ valor);
}
lista.forEach(exibeValor);


function multiplica(valor){
    console.log(valor+ " multiplicado por 2 é "+ (valor * 2));
}
lista.forEach(multiplica)


function multiPorDez(valor){
    return valor * 10;
}

let listaMultiDez = lista.map(multiPorDez);
console.log(lista)
console.log(listaMultiDez)


let listaComAumento = lista.map(function(valor) {return valor + valor * 0.1});
console.log(listaComAumento);

console.log(lista.map((valor) => valor + valor*0.1));

lista.map((valor) => valor + valor*0.20).forEach((valor) => console.log("O valor é: "+ valor));

const listaSubDez = lista.filter((valor) => {
    if(valor < 10){
        return true;
    }else{
        return false;
    }
} );
console.log(listaSubDez)

console.log(lista.filter((valor) => valor < 10))

