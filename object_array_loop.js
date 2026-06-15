const students = [
  {
    name: "aasif",
    age: 17,
  },
  {
    name: "rohit",
    age: 25,
  },

  {
    name: "tarun",
    age: 43,
  },
  {
    name: "mehtab",
    age: 20,
  },
];
// let total=0
// students.forEach((item)=>{
// total+=item.age

// })
// console.log(total)

const result = students.filter((item) => {
  return item.age > 18;
});
console.log(result);

const finalresult=result.map((item)=>{
    if(item.age>18)
        return item.name
})
console.log(finalresult)