const { UserList, MovieList } = require("../FakeData")


const resolvers = {
  Query: {
    users: () => {
      return UserList
    },
    user: (_, args) => {
      const id = Number(args.id)

      return UserList.find(user => user.id === id)
    },

    movies: () => {
      return MovieList
    },

    movie: (_, args) => {
      const name = args.name;

      return MovieList.find((movie) => movie.name === name)
    }
  },
  User: {
    favoriteMovies: () => {
      return MovieList.filter(movie => movie.yearOfPublication < 2012)
    }
  }
}

module.exports = {
  resolvers
}
