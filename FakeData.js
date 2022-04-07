const UserList = [{
  id: 1,
  name: "Si Purkins",
  username: "Si",
  age: 59,
  nationality: "Thailand",
  friends: [
    {
      id: 2,
      name: "Arly Jannaway",
      username: "Arly",
      age: 24,
      nationality: "Albania"
    },{
      id: 5,
      name: "Benjy Louw",
      username: "Benjy",
      age: 68,
      nationality: "Greece"
    }
  ]
},{
  id: 2,
  name: "Arly Jannaway",
  username: "Arly",
  age: 24,
  nationality: "Albania"
},{
  id: 3,
  name: "Tabby Kennan",
  username: "Tabby",
  age: 41,
  nationality: "Japan"
},{
  id: 4,
  name: "Karrah Pearde",
  username: "Karrah",
  age: 40,
  nationality: "Russia"
},{
  id: 5,
  name: "Benjy Louw",
  username: "Benjy",
  age: 68,
  nationality: "Greece"
},]

const MovieList = [
  {
    id: 1,
    name: "Avengers Endgame",
    yearOfPublication: 2019,
    isInTheaters: true,
  },
  {
    id: 2,
    name: "Iron Man",
    yearOfPublication: 2008,
    isInTheaters: false,
  },
  {
    id: 3,
    name: "Batman",
    yearOfPublication: 2022,
    isInTheaters: true,
  },
]

module.exports = {UserList, MovieList}