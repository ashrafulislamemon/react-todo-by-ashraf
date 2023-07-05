import React from 'react'
import { useEffect, useState } from 'react'
import { useContext } from 'react'
import { categorycontext } from '../App'
import Categorydetails from './Categorydetails'

const allproduct = [
  { name: 'Asus', category: 'leotop',
   address: [{ home: 'dhaka', city: 'dhanmondi' }, { home: 'dhaka', city: 'dhanmondi' }, { home: 'dhaka', city: 'dhanmondi' }] }
  , { name: 'lenevo', category: 'leotop', 
  address: [{ home: 'dhaka', city: 'dhanmondi' }, { home: 'dhaka', city: 'dhanmondi' }, { home: 'dhaka', city: 'dhanmondi' }]},
   { name: 'dell', category: 'leotop',
    address: [{ home: 'dhaka', city: 'dhanmondi' }, { home: 'dhaka', city: 'dhanmondi' }, { home: 'dhaka', city: 'dhanmondi' }] },
    { name: 'hp', category: 'leotop', 
    address: [{ home: 'dhaka', city: 'dhanmondi' }, { home: 'dhaka', city: 'dhanmondi' }, { home: 'dhaka', city: 'dhanmondi' }] },

{ name: 'Nokia', category: 'mobile', address: [{ home: 'dha', city: 'dhanmdi' }, { home: 'dhaka', city: 'dhandi' }, { home: 'dhaka', city: 'dhanmondi' }] }, { name: 'apple', category: 'mobile', address: 'noakhali' }, { name: 'oppo', category: 'mobile', address: [{ home: 'dhaka', city: 'dhanmondi' }, { home: 'dhaka', city: 'dhanmondi' }, { home: 'dhaka', city: 'dhanmondi' }] }, { name: 'samsung', category: 'mobile', address: [{ home: 'dhaka', city: 'dhanmondi' }, { home: 'dhaka', city: 'dhanmondi' }, { home: 'dhaka', city: 'dhanmondi' }] },
{ name: 'canon', category: 'cemera', address: [{ home: 'dhaka', city: 'nmondi' }, { home: 'dhaka', city: 'dhandi' }, { home: 'dhaka', city: 'dhanmondi' }] }, { name: 'tosiba', category: 'cemera', address: [{ home: 'dhaka', city: 'dhanmondi' }, { home: 'dhaka', city: 'dhanmondi' }, { home: 'dhaka', city: 'dhanmondi' }]}, { name: 'nikon', category: 'cemera', address: [{ home: 'dhaka', city: 'dhanmondi' }, { home: 'dhaka', city: 'dhanmondi' }, { home: 'dhaka', city: 'dhanmondi' }] }
]
const Category = () => {

  const [count] = useContext(categorycontext)


  // console.log(count)

  const getpro = allproduct.filter(pd => pd.category === count)
  const [pro, setPro] = useState([])
  useEffect(() => {

    setPro(getpro)


  }, [count])

  return (
    <>
      <h1>your selected category {count}</h1>
      {/* {pro.map((pd)=>(<Categorydetails pro={pd}></Categorydetails>))} */}

      <Categorydetails pro={pro}></Categorydetails>

    </>
  )
}

export default Category