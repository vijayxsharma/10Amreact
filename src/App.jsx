// import React from 'react'
// import FlipKart from './FlipKart/FlipKart'

// const App = () => {
//   return (
//     <div>
//       <FlipKart />
//     </div>
//   )
// }

// export default App

//Note Task App
// import React from 'react'
// import NoteApp from './NotetaskApp/NoteApp'

// const App = () => {
//   return (
//     <>
//       <NoteApp/>
//     </>
//   )
// }

// export default App

// useContaxt
// import React from 'react'
// import GrandChild from './DataDeneWala/GrandChild'
// import GrandParent from './DataDeneWala/GrandParent'

// const App = () => {
//   return (
//     <div>
//       <GrandParent/>
//     </div>
//   )
// }

// export default App

//counter App By reducer
// import React from 'react'
// import Counter from './CounterByReducer/Counter'
// import AllProvider from './CounterByReducer/AllProvider'

// const App = () => {
//   return (
//     <div>
//       <AllProvider>
//         <Counter/>
//       </AllProvider>
//     </div>
//   )
// }

// export default App

//NoteApp By Reducer
import React from 'react'
import NoteApp from './NoteAppByReducer/NoteApp'
import Counter from './CounterByReducer/Counter'
import Navbar from './routes/Navbar'
import { Outlet } from 'react-router-dom'

const App = () => {
  return (
    <div className='container'>
      <Navbar/>
      <Outlet/>
    </div>
  )
}

export default App



