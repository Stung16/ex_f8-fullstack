const client = require("../Databases/init.redis")
module.exports = {
  getListUser: async () => {
    const usersCache = await client.get("users")
    let users
    if (!usersCache) {
      const response = await fetch(`https://jsonplaceholder.typicode.com/users`)
      users = await response.json()
      await client.set("users", JSON.stringify(users), "ex", 60 * 60 * 8)
    } else {
      users = JSON.parse(usersCache)
    }
    return users
  },
  getDetailUser: async (id) => {
    const userCache = await client.get(`user_${id}`)
    let user
    if (!userCache) {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/users/${id}`
      )
      user = await response.json()
      await client.set(`user_${id}`, JSON.stringify(user), "ex", 60 * 60 * 2)
    } else {
      user = JSON.parse(userCache)
    }
    return user
  },
}