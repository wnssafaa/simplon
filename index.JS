// console.log(typeof(1.3));
// let array = ["tab"];
// // array.push(),
// /*let str = "Hello, world!";
// let reversedStr = str.split('').reverse().join('');
// console.log(reversedStr); // "!dlrow ,olleH"*/
// // prebuilt functions  shift,pop,slice("",)
// //les objets
// objet11={
//     nom:"safaa",
//     age:23,
//     ville:"CASABLANCA",
// }
// console.log(objet11);
// //manupilation de data 
// //type Nan
// // var:utiliser globalement , & let:valable just dans le blog{}, & const
// let a=1;
// let b=2;
// console.log(a*b);
// let c="ttttt";
// console.log(a*c);//Afficher NaN
// //le//les exersises de discord
// //1
//  colors = ["red", "green", "blue", "yellow"]
//  colors.pop()
//  console.log(colors)
//  //2
//  let sentence = "Learning JavaScript is fun!"; // La phrase de départ
// let wordsArray = sentence.split(" "); // Divise la phrase en mots avec l'espace comme séparateur
// console.log(wordsArray); // Affiche le tableau résultant

//  //3
//  let days = ["Tuesday", "Wednesday"]
//  days.push("sunday","Monday")
//  console.log(days)
//  //4
//  let email = "user@example.com";       // The email address
// let domain = email.split("@")[1];     // Split the email at '@' and get the second part
// console.log(domain);
// //5
// let tasks = ["wake up", "brush teeth", "have breakfast"]; // Original array
// let remainingTasks = tasks.slice(1); // Creates a new array starting from index 1 (second element)
// console.log(remainingTasks);
// //OR
//  tasks = ["wake up", "brush teeth", "have breakfast"];
// tasks.shift(); // Removes the first element directly from tasks
// console.log(tasks);
// //6
// let numberss = [1, 2, 3];      // Original array
// numberss.push(4, 5, 6);         // Adds 4, 5, and 6 to the end of the array
// console.log(numberss);
// //7
// let fileName = "document.pdf";           // The filename
// let fileExtension = fileName.split(".").pop(); // Split by "." and get the last part
// console.log(fileExtension);
// console.log(fileName);


// //8
// let letters = ["a", "b", "d", "e"]; // Original array
// letters.splice(2, 0, "c");          // Insert "c" at index 2
// console.log(letters);
// //conditions
// //IF
// let age=90 
// if(age<18){
//     console.log("you can't drive");
// }
// else if(age>18 && age<65){
//     console.log("you can drive");
// }else{
//     console.log("you are too old to drive ");
// }
// age=20
// if(age>18){
//     console.log("you can drive");
//     //la premiere condition et verifier et valide alors le programme excuter la 1ere condition et quiter
// }
// else if(age>18 && age<65){
//     console.log("you can drive");
// }else{
//     console.log("you are too old to drive ");
// }
// //switch
// let fruit ="banana"
// switch(fruit){
//     case "banana":
//         console.log("banana is yellow");
//         break;
//         case "apple":
//             console.log("apples are somtimes red somtimes green");
//             break;
//             default:
//                 console.log("i don't know this fruit");
//                 break;//quand j'ai pas utiliser break le 1ere excuter et la suit de cases
// }
// let day="lundi"
// switch(day){
//     case "dimanche":
//         case "samedi":
//             console.log("it's a weekend");
//     break        
//     default:
//         console.log("it's a weekday");
//         break;
// }
// //tarnnary operator 
// //? SI LA CONDITION ET TRUE
// //:SI LA CONDITION ET FALSE
// //     IF                         else
// age=2
// age>18 && age<65?console.log("you can drive"):age>65?console.log("you are too old to drive"):console.log("you can't drive");
// //str.toUppercase()   str.toloWercase()
// //LOOPS
// const classA=[
//     {
//         nom:"safaa",
//         age:23,
//         ville:"CASABLANCA",
    
//     },
//     {
//         nom:"safaa",
//         age:23,
//         ville:"CASABLANCA",
    
//     },
//     {
//         nom:"safaa",
//         age:23,
//         ville:"CASABLANCA",
    
//     }
// ]
// for(let i=0;i<classA.length;i++){
//     for(info in classA[i]){
//         console.log("les information    " + classA[i][info]);
//         console.log("les information    " + classA[i].age);
//     }
//     console.log("\n");

// }
// //continur pour depaaser a l'autre element 
// let numbers =[1,2,4,-7,-9,10]
// for(i=0;i<numbers.length;i++){
// if(numbers[i]>0){
//     console.log(numbers[i]*2);
// }else {
//     continue;
// }
// }
// //les foction
// const nb=(tab)=>{
//     for(i=0;i<tab.length;i++){
//         console.log(tab[i]*2);
//     }
  
// }
// nb([1,2,3])
//  const typenb=(num)=>{
//     if(num%2==0){
//         console.log("ce nombre est pair   "+num);
//     }else{
//         console.log("ce nombre est impair  "+num);
//     }
    
//  }
//  typenb(8)
//  //var=fonction scop variable
//  //CSS 