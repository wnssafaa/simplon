//1
let number=-10
if(number>0){
    console.log("ce nombre est positive");
}else{
    console.log("ce nombre est négative");
}
//2
let num=12
if(num%2==0){
    console.log("ce nombre est pair ");

}else{
    console.log("ce nombre et impaire");
}
//3
let a=10
let b=12
if(a>b){
    console.log("a est plus grand que b");
}else if(a<b){
    console.log("b est plus grand que a");
}else{
    console.log("a et b sont egaux");
}
//4
let temp=60
if(temp>30){
    console.log("chaud");
}else if(temp>15 && temp<30){
    console.log("Tiéde");
}else{
    console.log("froid");
}
//5
let password ="letmein"
if(password.toLowerCase()==="letmein"){
    console.log("Accès Accordé");
}else{
    console.log("Accès Refusé");
}
//6
let day=7
switch(day){
    case 1:
        console.log("lundi");
        break;
    case 2:
        console.log("mardi");
        break;
    case 3  :
        console.log("mercredi");
        break;
    case 4  :
        console.log("jeudi");
        break; 
    case 5  :
            console.log("vendredi");
            break;  
   case 6  :
         console.log("samedi");
       break;   
    case 7:
        console.log("dimanche");
        break; 
        default:
            console.log("erreur");   
            break;                

}
//7
let age=15
if(age<13){
    console.log("enfant");

}else if(age>13 && age<17){
    console.log("adolesence");
}else{
    console.log("adulte");
}
//8
let light="rouge"
switch(light){
    case "rouge":
        console.log("rouge");
        break;
    case "jaune":
        console.log("ralentissez");
        break;
        case "vert":
            console.log("allez");  
            break
         default:
            console.log("erreur");   
            break;  
}
//9
let year=2024
if(year%4===0 && year%100!==0 || year%400===0){
    console.log("année bissextile");
}else{
    console.log("année n'est pas bissextile");
}
//10 deja fait
//11
let grade = 'B'; // Remplacez cette valeur par 'A', 'B', 'C', etc., pour tester différents cas

switch (grade) {
    case 'A':
        console.log("Excellent travail !");
        break;
    case 'B':
        console.log("Bon travail !");
        break;
    case 'C':
        console.log("Peut mieux faire.");
        break;
    case 'D':
        console.log("Travail insuffisant.");
        break;
    case 'F':
        console.log("Échec. Besoin de beaucoup de pratique.");
        break;
    default:
        console.log("Note invalide. Veuillez entrer une note entre A et F.");
}
//12
let NUM=1000
NUM>=1 &&NUM<=100?console.log("NUM est entre 1 et 100"):console.log("hors porteé");
//13
let weather="weather"
if(weather==="rainy"){
    console.log("rainy");

}else if(weather==="sunny"){
    console.log("sunny");

}else{
    console.log("cloudy");
}
//14
let marks=50
marks>50?console.log("Réussi"):console.log("échoué");;
//15
let total=200
let remise
if(total>100){
    remise=total*0.1
    console.log(remise);
}else{
    console.log("pas de remise");
}
//16
let role="admin"
switch(role){
    case "editeur":
        console.log("les permission de editeur");
        break;
    case "admin":
        console.log("les permission de admin");
        break;  
        case "spectateur":
            console.log("les permission de sepctateur");
            break;
            default:
                console.log("n'est pas un role");
                break;  
}
//17
let score=87;
let bonus= true
score>80 && bonus===true?console.log("score eleve"):console.log("rien");;
//18
let h=8
if(h>=6 && h<=18){
    console.log("jour");
}else{
    console.log("nuit");
}
//19
let cartotal=600
let reduction
if(cartotal>500){
    cartotal=cartotal*0.2
   
}else{
console.log("pas de reduction");
}
console.log("le total est "+ cartotal);
//20
let month = 3; // Remplacez cette valeur par un nombre entre 1 et 12 pour tester

if (month === 12 || month === 1 || month === 2) {
    console.log("Hiver");
} else if (month >= 3 && month <= 5) {
    console.log("Printemps");
} else if (month >= 6 && month <= 8) {
    console.log("Été");
} else if (month >= 9 && month <= 11) {
    console.log("Automne");
} else {
    console.log("Mois invalide. Veuillez entrer un nombre entre 1 et 12.");
}

 