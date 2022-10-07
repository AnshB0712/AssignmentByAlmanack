import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAppContext } from '../../Context'

export const LoginForm = () => {
  
  const [userInfo,setUserInfo] = useState(null)
  const { dispatch } = useAppContext()
  const navigate = useNavigate()
  
  const handleChange = (e) => {
  setUserInfo(p => ({
    ...p,
    [e.target.name]: e.target.value
  }))
  }
  const handleSubmit = (e) => {
  e.preventDefault()
  dispatch({
    type:'LOGIN',
    payload:userInfo
  })
  console.log({
    UserLogin: userInfo
  })
  navigate('/events')
  }
  
  return(
  <section 
  className="container-lg">
  
  <h3
  className="text-white mt-3 mb-3"
  >Login</h3>
  
  <form 
  onSubmit={e => handleSubmit(e)}>
  
  <div className="form-group text-white mb-3">
  <label className="mb-1" htmlFor="Email">
  Email
  </label>
  <input type="email" 
  className="form-control form-control-lg" 
  id="Email" 
  name="email" 
  placeholder="Enter Email" 
  onChange={e => handleChange(e)}/>
  </div>
  
  <div className="form-group text-white mb-3">
  <label className="mb-1" htmlFor="Password">
  Password
  </label>
  <input type="password" 
  className="form-control form-control-lg"
  id="Password" 
  name="password" 
  placeholder="Enter Password" 
  onChange={e => handleChange(e)} />
  </div>
  
  <button 
  style={{display:'block'}}
  disabled={!userInfo?.email || !userInfo?.password}
  className={`btn btn-secondary mt-4 mx-auto w-50 ${!userInfo?.email && !userInfo?.password && 'disabled'}`}
  >
  Login
  </button>
  
  </form>
  
  </section>
  )
}