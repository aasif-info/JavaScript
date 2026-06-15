// function greet(){

//     console.log("hell0")
//     console.log(4+9)
//     return 2
// }
// greet()
// console.log(greet())

// parameter function
// function calculation(a,b,opr){
//  if (opr==="sum"){
// return `${opr}=${a+b}`
//  }

//     if(opr==="mul"){
//         return `${opr}=${a*b}`
//     }
// }
// console.log(calculation(10,7,"mul"))
// console.log(calculation(10,7,"sum"))

// function trafficlight(light){
// if(light==="red"){
//     return "Stop"
// }
// if(light==="yellow"){
//     return "Be Ready"
// }
// if(light==="green"){
//     return "Go>>>>"
// }
// }
// console.log(trafficlight("red"))

// now using switch
// function trafficlights(light) {

//     switch (light) {

//         case "red":
//             return "STOP!!"
//             break;
//         case "yellow":
//             return "WAIT!!!"
//             break;
//         case "green":
//             return "GO>>>>>>>"

//     }

// }

// console.log(trafficlights("green"))

// function Days(num) {

//     switch (num) {
//         case "1":
//             return "MON";
//             break

//         case "2":
//             return "TUE";
//             break

//         case "3":
//             return "WED";
//             break

//         case "4":
//             return "THU";
//             break

//         case "5":
//             return "FRI";
//             break

//         case "6":
//             return "SAT";
//             break

//         case "7":
//             return "SUN";
//             break

//     }

// }

// console.log(Days("4"))

// print table using for loop in function

// function table(num){

//     for( let i=1;i<=10;i++)
//         console.log( `${num}x${i}=${num*i}`)

// }
// table(2)

// const table = (num)=>{

//     for(let i=1;i<=10;i++){
//         console.log(`${num}x${i}=${i*num}`)
//     }

// };
// table(9)

// const trafficlights =(light)=>{

// switch(light){
// case"red":
// return "stop"
// }

// }
//  this is arrow function

// const sum =(a,b)=>{
// return a+b
// }

// console.log(sum(45,78))

// // now in sigle line

// const mul=(a,b)=> a*b
//  console.log(mul(8,8))

//  Anonymous function

const amous = function () {
  console.log("this is anonymous function");
};
amous();
