import React from 'react'
import {Table} from 'react-bootstrap'
const Categorydetails = (props) => {

   

//   const {name}=props.pro
    
    
  return (
    <div>


<Table striped bordered hover variant="dark">
  <tbody>
  <tr>
    <th>id</th>
    <th>name</th>
    <th>category</th>
    <th>address</th>
  </tr>
  {props.pro.map((e,i)=>(
    <>
      <tr key={i}>
      <td>{i+1}</td>
      <td>{e.name}</td>
      <td>{e.category}</td>
      <td>{console.log(e.address)}</td>
    </tr>
    </>
  ))}
  
  </tbody>
</Table>

        
    </div>
  )
}

export default Categorydetails