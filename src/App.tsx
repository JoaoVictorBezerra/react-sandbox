import reactLogo from './assets/react.svg'
import './App.css'
import { promiseAll } from './Sandbox/Promises'
import { destructuring } from './Sandbox/Destructuring'
// import HeavyComponent from './Sandbox/HeavyComponent'

import { Suspense, lazy } from 'react'

const HeavyComponent = lazy(() => import("./Sandbox/HeavyComponent")) // Importar com lazy

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
      <div>
        {/* <HeavyComponent /> */}
        {/* Será renderizado um "Loading" enquanto o componente está carregando em segundo plano. */}
        <h3>Heavy Component</h3>
        <Suspense fallback={<p>Loading...</p>}>
          <HeavyComponent />
        </Suspense>
      </div>
    </>
  )
}

export default App
