// const arr = ["a", "b", "c", "d"];
// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i])
// }

// for (let x of arr) {
//     console.log(x)
// }
// let i = 0;
// while (i < arr.length) {

//     console.log(arr[i], i);
//     i++;
// }

// do while loop
// let i=0;
// do{
// console.log(arr[i],i)
// i++

// }while(i>5)

// we are printing 5 tables using for loops

// for(let i=1; i<=10;i++){
//     console.log(5*i)
// }

// let j = 1
// while (j <= 10) {
//     console.log(`2x${j}=${j*2}`)
//     j++

// }
// console.log(" ")
// let i = 1
// do {
//     console.log(i*6)
//     i++
// } while (i <= 10)

// for Each loop
// const arr2= [1,2,3,4,5,6,7,8,9,10]

// const square=arr2.forEach((item)=>{
// console.log(item*item)
// return item*item
// })

// console.log(square)

// const E_O=[1,2,3,4,5,6,7,8,9,10]

// const x=E_O.forEach(()=>{

// })

// const car=["porsche","BMW","Audi"]

// car.forEach((cars)=>{

//     console.log(`${cars}=${cars.length}`)
// })

// const ar = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const x= ar.forEach((item)=>{
//     let c=(item*item)
//     console.log(c,"asif")

// })

// const sum_of_array = (asif) => {
//   let sum = 0;
//   asif.forEach((item) => {
//     sum += item;
//   });
//   console.log(sum);
// };
// sum_of_array(ar);

//
// const mul_of_array = (x) => {
//   let mul = 1;
//   x.forEach((item) => {
//     mul *= item;
//   });
//   console.log(mul)
// };
// mul_of_array(ar)

//  const car=["porsche","BMW","Audi"]

//  const upper=car.map((item)=>{
// return`${item}=${item.toUpperCase()}`

//  })

//  console.log(upper)

// const car = ["porsche", "bmw", "Audi"];

// const fun=(x)=>{
// let b
//   const upper = car.forEach((item) => {
//    let b= console.log(`${item}=${item.toUpperCase()}`);
//   });
// console.log(b)

// }
// fun(car)

// const arrr = [1, 2, 3, 4, 5, 6];

// const str = arrr.map((item) => {
//   return String(item);
// });
// console.log(str);

// const num = str.map((item) => {
//   return parseInt(item);
// });
// console.log(num);

// filter funtion 

// const num=[12,45,34,5,6,7,76,49,2,5,89,]

// const greater=num.filter((item)=>{

//      return (item%2==0);
    
// })
// console.log(greater)

// const num1=[1,3,2,4,5,6,7,8,9]

// const odd=num1.filter((item)=>{
//    return (item%2!==0)

// })
// console.log(odd)

const car=["bmw","swift","audi"]

const strlen=car.filter((item)=>{

    return(item.length>3)
})
console.log(strlen)