let i
for(i=1;i<=10;i++){
    console.log(i);
}
//2
for(i=1;i<=5;i++){
    console.log(i*i);
}
//3
i=5
while(i>=1){
    console.log(i);
    i--;
}
//4
let tab=["rouge","red","orange"]
for(i=0;i<tab.length;i++){
    console.log(tab[i]);
}
//5
i=1
for(i=1;i<=15;i++){
    if(i%2!==0){
        console.log( i +"  est impair");
    }else{
        console.log(i  +"est pair");
    }
}

//6
i=1
let n=1
for(i=1;i<=5;i++){
    n=n*i
   
}
console.log("le resultat de produit de 1 a 5   "  +n);
//7
let fruit=["pomme","banane", "cerise"]
for(i=0;i<fruit.length;i++){
    console.log(fruit[i].toUpperCase());
}
//8
const classA=[
    {
        nom:"safaa",
        age:23,
        ville:"CASABLANCA",
    
    },
    {
        nom:"yassmine",
        age:23,
        ville:"CASABLANCA",
    
    },
    {
        nom:"sara",
        age:23,
        ville:"CASABLANCA",
    
    }
]
for(let i=0;i<classA.length;i++){
    for(info in classA[i]){
        console.log("age    " + classA[i].age);
        console.log("name   "+ classA[i].nom);
        console.log("city "+ classA[i].ville);
    }
    console.log("\n");

}
//9
//10
tab= [10, 20, 30, 40]
for(i=1;i<=tab.length;i++){
    if(tab[i]===30){
        console.log("30 est trouver dans la position  " +i);
    }
}
//11
n=0
for(i=0;i<=20;i++)
{
    if(i%2===0){
        n=n+i
    }
    
console.log(n);
}console.log("la somme de nombre paire entre1 et 20 ",+ n);
//12
let chaine="bonjour"
for(i of chaine){
    console.log(i);
}
//13
tab= ["Jean", "Jeanne", "Dupont"]
for(i of tab){
    console.log(i);
}
//14
for(i=1;i<=15;i++){
    if(i%3!==0){
        console.log(i);

    }
}
//15
i=1
while(i<=10){
    console.log("5 * "+i+" = "+i*5);
    i++
}
//16
tab= [4, 8, 15, 16, 23, 42]
for(i of tab){
     if(i<20){
        console.log(i);
     }
}    
//17
i=1
do{
    if(i!==4){
    console.log(i);
    }
    i++
}while(i<=5)
//18
let s =0
for(i=1;i<=10;i++){

    s=s+i
    console.log(s);
if(s>=30){
    console.log("Limite atteinte");
    break;
}

}    
//foreach
let tab2= ["rouge", "vert", "bleu"];
tab2.forEach(i=>console.log(i))