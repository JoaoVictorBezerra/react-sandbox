import reactLogo from './assets/react.svg'
import './App.css'
import { main } from './Promises'
function App() {


  return (
    <>
      <div>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <div>
        <button onClick={main}>Requisição</button>
      </div>
    </>
  )
}

export default App
