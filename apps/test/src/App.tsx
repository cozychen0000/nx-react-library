import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Button2 } from 'nx-react-library-ui'
import { cN } from 'nx-react-library-ui/utils'


function App() {
  const [count, setCount] = useState(0)
  const classNames = 'bg-blue-500'

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button className={cN('avatar', classNames, {
          // "bg-lime-200": true,
        })} onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <Button2>1213</Button2>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
