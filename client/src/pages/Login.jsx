import React from 'react'
import {Link ,useNavigate} from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'

function Login() {

    const [email , setEmail] = useState()
    const [password , setPassword] = useState()
    const navigate = useNavigate()

    const handleSubmit = (e) =>
    {
        e.preventDefault()
        axios.post('http://localhost:3000/Login' , {email, password})
        .then(result =>{console.log(result)
            if(result.data === "Success")
            {   alert("user registered successfully")
                const userName = result.data.name; 
                navigate('/Main', { state: { name: userName } });
            }
            else{
                alert("User not found")
            }
        })
        .catch(err=> console.log(err))
    }

  return (
    <div className='container-fluid d-flex justify-content-center align-items-center bg-secondary vh-100'>
        <div className='bg-white p-4 rounded w-100' style={{ maxWidth: '400px' }}>
            <h2 className="text-center mb-4">Login</h2>
            <form action="" onSubmit={handleSubmit}>
                <div className='mb-3'>
                    <label htmlFor="email">
                        <strong>Email</strong>
                    </label>
                    <input type="text"
                    placeholder='Enter Name'
                    autoComplete='off'
                    name='email'
                    className='form-control rounded-0'
                    required
                    onChange={(e)=>setEmail(e.target.value)}
                     />
                </div>
                <div className='mb-3'>
                    <label htmlFor="password">
                        <strong>Password</strong>
                    </label>
                    <input type="text"
                    placeholder='Enter Name'
                    autoComplete='off'
                    name='password'
                    className='form-control rounded-0'
                    required
                    onChange={(e)=>setPassword(e.target.value)}
                     />
                </div>
                <button type='submit' className='btn btn-primary w-100 rounded-0 mb-3'>Login</button>
                </form>
                <p className="text-center">Do Not Have an Account </p>
                <Link to="/Register" className='btn btn-default border w-100 bg-light rounded-0 text-decoration-none'>Register</Link>
        </div>
    </div>
  )
}

export default Login
