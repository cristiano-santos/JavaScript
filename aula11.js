/*let n1=[10,20,30]
let n2=[33,22,11,44,55]
let n3=[...n1,...n2]*/

/*const jogador1 = {nome:"Cristiano",energia:90,vidas:4,magia:180}
const jogador2 = {nome:"Emily",energia:100,vidas:5,velocidade:200}
const jogador3 = {...jogador1,...jogador2}*/

/*console.log("n1 = " + n1)
console.log("n2 = " + n2)
console.log("n3 = " + n3)
console.log("Tipo de n3 = " + typeof (n3))*/

//console.log(jogador3)

/*const soma=(v1,v2,v3)=>{
    return v1+v2+v3
}

console.log(soma(6,3,2))*/

const objs1=document.getElementsByTagName("div")
const objs2=[...document.getElementsByTagName("div")]

objs2.forEach(element => {
    element.innerHTML="curso"
});

console.log(objs1)
console.log(objs2)