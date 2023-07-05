// import React from 'react'
// import { createContext } from 'react'
// import { useState } from 'react'
// import Category from './categories/Category'
// import Footer from './Footer'
// import Header from './Header'

// import Shipment from './Shipment'

// export const categorycontext=createContext()

// const App = () => {

//   const[count,setCount]=useState('mobile')

//   return (
//     <>

//     <categorycontext.Provider value={[count,setCount]}>
//         <Header/>

//         <hr />

//         <Category ></Category>

//         <hr />

//         <Shipment/>
//         <hr />
//         <Footer/>

//         <hr />
//         </categorycontext.Provider>




//         <hr />


       

//     </>
//   )
// }




// export default App




import React from 'react'
import TodoWrapper from './TodoWrapper'

const App = () => {
  return (
    <>

    <TodoWrapper></TodoWrapper>
    
    </>
  )
}

export default App