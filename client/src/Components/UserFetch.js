import React from 'react'
import axios from 'axios'
import { useState,useEffect } from 'react'

const UserFetch = () => {
    const [data,setData]=useState([])

    // useEffect(() => {
    
    
    
    // }, [])
    
 const fetchUser= async()=>{
  try{
    const fetchedData= await axios.get('/api/v1/user/get')
    setData(fetchedData.data.user)
    console.log(fetchedData)
  }
  catch(err){
    console.log(err)
  }
       
       
        }

        const handleDelete=async (userid)=>{
          try {
            console.log(userid)
            await axios.delete(`/api/v1/user/delete/${userid}`);
            fetchUser();
            
          } catch (error) {
            console.log(error)
          }

        }
   

   
      
  return (
    <> 
    <button onClick={fetchUser}>UserFetch</button>
       <br/>

       <table cellSpacing={0} border={2} style={{'width':"50%", 'textAlign':'center'}}>
    <tr>
      <th>Name</th>
      <th>Address</th>
    </tr>

      {
        
     data.map((item,id)=>{

return(
 
    <tr>
      <td>{item.uName}</td>
      <td>{item.Address}</td>
      <td><button onClick={() => handleDelete(item._id)}>Delete</button></td>
    </tr>
 
)

     })
    
      }
       </table>
    </>
  )
}

export default UserFetch