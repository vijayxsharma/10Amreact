import React from 'react'
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import App from '../App'
import NoteApp from '../NoteAppByReducer/NoteApp'
import FlipKart from '../FlipKart/FlipKart'
import Counter from '../CounterByReducer/Counter'
import AllProvider from '../CounterByReducer/AllProvider'
import NotFound from '../NoteAppByReducer/NotFound'
import Navbar from './Navbar'
const RoutingArea = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} >
           <Route path="/" element={<NoteApp />} />
           <Route path="/flipkart" element={<FlipKart />} />
           <Route path="/counter" element={<AllProvider><Counter/></AllProvider>} />
        </Route>
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default RoutingArea
