import { useState } from 'react'
import { fontFamily } from './styles'

const App = () => {
  const [count, setCount] = useState(0)

  return (
    <div style={{ fontFamily }}>
      <h1>Vite + React</h1>
      <div>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
    </div>
  )
}

export default App
