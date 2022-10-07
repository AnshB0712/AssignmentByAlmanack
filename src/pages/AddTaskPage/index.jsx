import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAppContext } from '../../Context'
import uniqid from 'uniqid';

export const AddEventPage = () => {
  
  const [eventInfo,setEventInfo] = useState(null)
  const navigate = useNavigate()
  const { dispatch } = useAppContext()
  
  const handleChange = (e) => {
  setEventInfo(p => ({
    ...p,
    [e.target.name]: e.target.value
  }))
  }
  const handleSubmit = (e) => {
  e.preventDefault()
  dispatch({
    type: "ADD_EVENT",
    payload: {
      id: uniqid(),
      ...eventInfo
    }
  })
  console.log({AddEvent: eventInfo});
  navigate('/events')
  }
  
  return(
  <section
  style={{
  maxWidth: '600px'
  }}
  className="container-lg bg-dark p-3 rounded mx-auto mt-5">
  
  <h3
  className="text-white mt-3 mb-3"
  >Create Event</h3>
  
  <form 
  onSubmit={e => handleSubmit(e)}>
  
  <div className="form-group text-white mb-3">
  <label className="mb-1" htmlFor="name">
  Event Name
  </label>
  <input type="text" 
  className="form-control form-control-lg" 
  id="name" 
  name="name" 
  placeholder="Enter Event Name" 
  onChange={e => handleChange(e)}/>
  </div>
  
  <div className="form-group text-white mb-3">
  <label className="mb-1" htmlFor="date">
  Date
  </label>
  <div className="input-group input-group-lg" >
  <span className="input-group-text" id="inputGroup-sizing-lg">Date</span>
  <input type="date" 
  className="form-control form-control-lg"
  id="date" 
  name="date" 
  onChange={e => handleChange(e)} />
  </div>
  </div>
  
  <button 
  style={{display:'block'}}
  className="btn btn-secondary mt-4 mx-auto w-50"
  >
  Create
  </button>
  
  </form>
  
  </section>
  )
}