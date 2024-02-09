import axios from 'axios'
import React from 'react'
import {useState} from 'react'

const UserPost = () => {
    const [uName, setName]=useState('')
    const [subject,setSubject]=useState('')
    const [Address, setAddress]=useState('')
    const [message,setMessage]=useState('')
    const [msg,setMsg]=useState('')
    
    const Submit=(e)=>{
        axios.post('/api/v1/nodemailer',{uName,Address,subject,message}).then(response=>{
            // setMsg(response.data.msg)
            setMsg(response.data)
        }).catch(err=>{
            console.log(err)
        })
        e.preventDefault()
        
    }

  return (
    <div>
        <form>
            <input type='text' value={uName} onChange={(e)=>setName(e.target.value)} placeholder='Your Name'/>
            <input type='text' value={Address} onChange={(e)=>setAddress(e.target.value)} placeholder='Your address'/>
            <input type='text' value={subject} onChange={(e)=>setSubject(e.target.value)} placeholder='Subject'/>
            <input type='text' value={message} onChange={(e)=>setMessage(e.target.value)} placeholder='Message here'/>
            <button onClick={Submit}>Submit</button><br/>
            {msg}
        </form>
    </div>
  )
}

export default UserPost