import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

const ServerStatus = () => {
  const { data, isPending, isError } = useQuery({
    queryKey: ['serverStatus'],
    queryFn: () => axios.get('/api/health').then((res) => res.data),
  })

  if (isPending) return <div>Loading...</div>
  if (isError) return <div>Server is down</div>

  return <div>Server is up, status: {data.status}</div>
}

export default ServerStatus
