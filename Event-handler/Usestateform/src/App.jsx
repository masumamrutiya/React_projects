import { useState } from 'react'
// import Formpractice from './Components/Formpractice'
import Taskform from './Components/Taskform'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Taskform/>
      {/* <Formpractice/> */}
    </>
  )
}

export default App
