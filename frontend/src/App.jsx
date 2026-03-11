import ServerStatus from './components/ServerStatus'
import Counter from './components/Counter'

const App = () => {
  return (
    <div className="page-container">
      <h1>Vite + React</h1>
      <div>
        <h3>Counter</h3>
        <Counter />
        <h3>Status</h3>
        <ServerStatus />
      </div>
    </div>
  )
}

export default App
