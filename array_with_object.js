const students = [
  {
    id: 1,
    name: "mehtaab",
    age: 23,
    roll_no: 213,
    branch: "BCA",
  },
  {
    id: 2,
    name: "mehta",
    age: 24,
    roll_no: 214,
    branch: "Bca",
  },
  {
    id: 3,
    name: "jyoti",
    age: 21,
    roll_no: 215,
    branch: "BTECH CSE",
  },
  {
    id: 4,
    name: "golu",
    age: 25,
    roll_no: 216,
    branch: "Bca",
  },
  {
    id: 5,
    name: "molu",
    age: 23,
    roll_no: 213,
    branch: "Btech cse",
  },
];

const result=students.find((item)=>{
    if(item.id===3){
        return item.branch="bca"
    }
})
console.log(result)
