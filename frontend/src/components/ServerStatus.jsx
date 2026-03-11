import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

const ServerStatus = () => {
  const result = useQuery({
    queryKey: ['serverStatus'],
    queryFn: () => axios.get('/api/health').then((res) => res.data),
  })

  if (result.isLoading) return <div>Loading...</div>
  if (result.error) {
    const message = result.error.response
      ? `Server error: ${result.error.response.status}`
      : result.error.message
    return <div>Error: {message}</div>
  }

  const { status } = result.data
  console.log('Server status:', status)
  return <div>Server is up, status: {status}</div>
}

export default ServerStatus
