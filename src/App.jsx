import './App.css'
import Navber from './components/Navber/Navber'
import PriceOptions from './components/PriceOptions/PriceOptions'
import LineChart from './components/LineChart/LineChart'

function App() {

  return (
    <div className='w-10/12 m-auto'>
      <Navber></Navber>

      <PriceOptions></PriceOptions>

      <LineChart></LineChart>
      
     
    </div>
  )
}

export default App
