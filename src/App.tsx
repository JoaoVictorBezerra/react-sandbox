import reactLogo from './assets/react.svg'
import './App.css'
import { promiseAll } from './Sandbox/Promises'
import { destructuring } from './Sandbox/Destructuring'
function App() {


  return (
    <>
      <a href="https://react.dev" target="_blank">
        <img src={reactLogo} className="logo react" alt="React logo" />
      </a>
      <div>
        <h3>Promise</h3>
        <button onClick={promiseAll}>Requisição</button>
      </div>
      <div>
        <h3>Destructuring</h3>
        <button onClick={destructuring}>Desestruturar</button>
      </div>
    </>
  )
}

export default App
