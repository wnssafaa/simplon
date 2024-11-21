//1
function bonjour(){
    return "Bonjour, le Monde!"
}
console.log(bonjour())
//2
function somme(a,b){
    return a+b

}
console.log(somme(1,2));
//3
function longeur(str){
    return str.length

}
let CH="HI"
console.log(longeur(CH));
//4

function premierelettre(chaine){
  //  return chaine.charAt(0)
return chaine[0]


}
console.log(premierelettre("safaa"));
//5
function inverser(chaine){
    return chaine.split('').reverse().join('');

}
console.log(inverser("hello"));
//6
const maj=(chaine)=>{
    return chaine.toUpperCase()
}
console.log(maj("hi"));
//7
function diviser(chaine){
return chaine.split(' ')
}

console.log(diviser("Bonjour tout le monde"));
//8
function typenumbers(a){
    if(a%2==0){
        console.log("ce nombre est paire");
    }else{

        console.log("ce nombre est impair");
    }
}

typenumbers(6)
//9
function grand(tab){
    let max=tab[0]
    for(i=0;i<=tab.length;i++){
        if(tab[i]>max){
            max=tab[i]
              }
    }
console.log(max);
}
tab=[90,2,325,6,128]
grand(tab)
//10


function ADD(Z){
    let s=0
for(i=0;i<Z.length;i++){
    s+=Z[i]
}
console.log("la somme est  "+s);
}

tabA=[1,2,3,10,12,30];

ADD(tabA)
//11
function calculee(chaine){
    let s=0
    for(i of chaine ){
        if(i==="a" || i==="e"|| i==="u"||i==="y"||i==="i"||i==="o"||i== "A"||i==="E"||i=="I"||i==="Y"||i==="O")
{
    s++
        }
}
console.log("le nombre de letttre  voyelles dans cette chaine est   "+s);
}
let name="safaa"
calculee(name)
//12
function estPremier(nombre) {
    if (nombre <= 1) return false;
    if (nombre === 2) return true;
    if (nombre % 2 === 0) return false;
    for (let i = 3; i <= Math.sqrt(nombre); i += 2) {
        if (nombre % i === 0) return false;
    }
    return true;
}

// Exemple d'utilisation :
let nombre = 23;
console.log(estPremier(nombre)); // Affichera true car 29 est un nombre premier

//13
function factorial(n){
    let f=1
    for(i=1;i<=n;i++){
        f=f*i
    }
return f
}
console.log(factorial(4));
//14
function inverserMots(chaine) {
    return chaine.split(' ').map(mot => mot.split('').reverse().join('')).join(' ');
}

// Exemple d'utilisation :
let phrase = "bonjour tout le monde";
let phraseInversee = inverserMots(phrase);
console.log(phraseInversee); // Affichera "ruojnob tuot el ednom"

//15
function palindorme(chaine){
    if(chaine===chaine.split('').reverse().join('')){
        console.log("la chaine est palindorme");
    }else{
        console.log("la chaine est pas palindorme");
    }

}
palindorme("safaa")
//16
function depluqees(tab){
    let TAB=[]
    for(i=0;i<tab.length;i++){
        if(!TAB.includes(tab[i])){
            TAB.push(tab[i])

        }
        return TAB
    }

}
let TAB=[1,1,2,3,4,45,10]
let a=depluqees(TAB)
console.log(a);
function supprimerDoublons(tab) {
    let uniqueTab = [];
    for (let i = 0; i < tab.length; i++) {
        if (!uniqueTab.includes(tab[i])) {
            uniqueTab.push(tab[i]);
        }
    }
    return uniqueTab;
}

 tab = [1, 1, 2, 3, 4, 45, 10];
let b = supprimerDoublons(tab);
console.log(b); // Affichera [1, 2, 3, 4, 45, 10]
//17
function moyen(tab){
    let s=0
    for(i=0;i<tab.length;i++){
        s+=tab[i]
    }
return "le moyeen de tableau est "+s/tab.length
}
tab = [1, 1, 2, 3, 4, 45, 10];
let c = moyen(tab);
console.log(c);
//18
function ouccrence(chaine,car){
    let c=0
    for(i=0;i<chaine.length;i++){
        if(car===chaine[i])
            c++
    }
    return c
}
console.log(ouccrence("safaa","a"));
//19
function capitaliserMots(phrase) {
    return phrase.split(' ').map(mot => mot.charAt(0).toUpperCase() + mot.slice(1)).join(' ');
}

// Exemple d'utilisation :
let phras = "bonjour tout le monde";
let phraseCapitalisee = capitaliserMots(phras);
console.log(phraseCapitalisee); // Affichera "Bonjour Tout Le Monde"

//16
function delet(t){
    let tab=[]
    for(i=0;i<=t.length;i++){
        if(t[i]!==t[i+1]){
            tab.push(t[i])
        }
    }
    return tab
}
tab = [1, 1, 2, 3, 4, 4,5, 10];
 b = delet(tab);
console.log(b);
//20
function echange(chaine){
    let pre=chaine[0]
    let der=chaine[chaine.length-1]
    if(chaine.length===2){
        return chaine.split('').reverse().join('')
    }else{
    return der+chaine.slice(1, -1)+pre}

}
chaine="safaa elouannass"
console.log(echange(chaine));
function echangerPremiersDerniers(chaine) {
    // Si la chaîne a moins de deux caractères, rien à échanger
    if (chaine.length < 2) {
        return chaine;
    }

    // Identifier le premier et le dernier caractère
    let premierCaractere = chaine[0];
    let dernierCaractere = chaine[chaine.length - 1];

    // Construire la nouvelle chaîne avec les caractères échangés
    let nouvelleChaine = dernierCaractere + chaine.slice(1, -1) + premierCaractere;

    return nouvelleChaine;
}

// Exemple d'utilisation
 chaine = "Bonjour";
console.log(echangerPremiersDerniers(chaine)); // Affichera "ruonjoB"
//