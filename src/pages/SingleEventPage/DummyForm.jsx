import { useState } from 'react'

export const DummyForm = () => {
  
  const [userInfo,setUserInfo] = useState(null)
  
  const handleChange = (e) => {
  setUserInfo(p => ({
    ...p,
    [e.target.name]: e.target.value
  }))
  }
  const handleSubmit = (e) => {
  e.preventDefault()
  console.log(userInfo)
  }
  
  return(
  <section 
  style={{maxWidth:'650px'}}
  className="container-lg mt-5 bg-danger p-4 rounded">
  
  <p
  className="text-white fs-6 my-3"
  >Hello,if you are intrested in this event please fill up this form.</p>
  
  <form 
  onSubmit={e => handleSubmit(e)}>
  
  <div className="form-group text-white mb-3">
  <label className="mb-1" htmlFor="name">
  Name
  </label>
  <input type="email" 
  className="form-control form-control-lg" 
  id="name" 
  name="name" 
  placeholder="Enter Name" 
  onChange={e => handleChange(e)}/>
  </div>
  
  <div className="form-group text-white mb-3">
  <label className="mb-1" htmlFor="email">
  Email
  </label>
  <input type="email" 
  className="form-control form-control-lg"
  id="email" 
  name="email" 
  placeholder="Enter Email" 
  onChange={e => handleChange(e)} />
  </div>
  
  <button 
  style={{display:'block'}}
  className="btn btn-secondary mt-4 mx-auto w-50"
  >
  Submit
  </button>
  
  </form>
  
  </section>
  )
}