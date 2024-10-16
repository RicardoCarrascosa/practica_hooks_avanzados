import './App.css'
import { Calculator } from './components/Calculator/Calculator'
import Clock from './components/Timer/Clock'
import { Timer } from './hooks/Timer'

function App() {
  const { Time } = Timer()
  return (
    <>
      <Clock timer={Time} />
      <Calculator />
    </>
  )
}

export default App
