console.log("OK!")

let exemplo = "texto";
console.log(exemplo.length);
console.log(exemplo.toUpperCase());
console.log(exemplo.indexOf("xt"));
console.log(exemplo[2])
console.log(exemplo[0])
console.log(exemplo[exemplo.length - 1]);
console.log(exemplo.toUpperCase().indexOf("TO"));

let email2 = "www.restiga.ifrs.edu.br";
let email = "matheus.m.mota50@restinga.ifrs.edu.br";

if(email2.indexOf("@") >= 1 && email2.endsWith("restinga.ifrs.edu.br")){
    console.log("Aceito!");
}else{
    console.log("Negado!")
}

if(email.indexOf("@") >= 1 && email.endsWith("restinga.ifrs.edu.br")){
    console.log("Aceito!");
}else{
    console.log("Negado!")
}

let lista = ["a", "b", "c"];

for(const chave in lista){
    console.log(chave);
    console.log(lista[chave])
    console.log("========");
}

for(const valor of lista){
    console.log(valor)
}

