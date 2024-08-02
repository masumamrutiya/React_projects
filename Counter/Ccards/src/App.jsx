import { useState } from 'react'
import Data from "./Components/Data.jsx";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Data />
    </>
  )
}

export default App
