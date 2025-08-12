import client from "../lib/api/client"

const getUsers = async () => {
  const response = await client.get(`api/users`)
  return response.data
}

const apiServices = {
  getUsers
}

export default apiServices