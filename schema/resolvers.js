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
  },

  Mutation: {
    createUser: (_, args) => {
      const user = args.input
      const lastId = UserList[UserList.length - 1].id
      user.id = lastId + 1;

      UserList.push(user);

      return user;
    },

    updateUsername: (_, args) => {
      const { id, newUsername } = args.input
      let userUpdated;

      UserList.forEach((user) => {
        if (user.id === Number(id)) {
          user.username = newUsername;
          userUpdated = user
        }
      })

      return userUpdated
    },

    deleteUser: (_, args) => {
      const { id } = args.input

      const removeIndex = UserList.map(item => item.id).indexOf(Number(id));

      if (removeIndex >= 0) {
        UserList.splice(removeIndex, 1)
      }
      
      return null

    }
  }
}

module.exports = {
  resolvers
}
