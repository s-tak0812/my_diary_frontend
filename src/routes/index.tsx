import { createFileRoute } from '@tanstack/react-router'
import { useEffect, useState } from 'react'
import apiServices from '../services/apiServices'

export const Route = createFileRoute('/')({
  component: Index,
})

function Index() {
  // const [users, setUsers] = useState<any>()

  const getUsers = async () => {
    try {
      const res = await apiServices.getUsers()
      console.log(res)
    } catch (err: any) {
      console.error(err)
    }
  }

  useEffect(() => {
    getUsers()
  }, [])

  return (
    <div className="p-2">
      <h3>Welcome Home!</h3>
    </div>
  )
}