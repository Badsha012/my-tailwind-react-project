import { Suspense } from 'react'

import './App.css'
import Header from './Components/Daisyai/Header'
import Navbar from './Components/Navbar/Navbar'
import Pricing from './Components/PricingOptions/Pricing'
import ResultChart from './Components/ResultChart/ResultChart'

const pricingpromise =fetch('pricingdata.json')
.then (res => res.json())


function App() {


  return (
    <>
      
     <header>
      <Navbar></Navbar>
            {/* <Header></Header> */}
     </header>
   <main>
    <Suspense fallback={<span className="loading loading-spinner text-info"></span>}>
      <Pricing pricingpromise={pricingpromise}></Pricing>
    </Suspense>

    <ResultChart></ResultChart>
   </main>
   <footer>

   </footer>

    </>
  )
}

export default App
