import { useState } from 'react'
import { useAppContext } from '../../Context'
import { useNavigate,useParams } from 'react-router-dom'


export const EditEventPage = () => {
  
  const { eventID } = useParams()
  const navigate = useNavigate()
  const { dispatch,state } = useAppContext()
  const [eventInfo,setEventInfo] = useState(
    state.users
    .find(user => user.email === state.currentUser)
    .events
    .find(event => event.id === eventID)
    )
  
  const handleChange = (e) => {
  setEventInfo(p => ({
    ...p,
    [e.target.name]: e.target.value
  }))
  }
  const handleSubmit = (e) => {
  e.preventDefault()
  dispatch({
    type: "EDIT_EVENT",
    payload: {
      id:eventID,
      ...eventInfo
    }
  })
  console.log({EditEvent: eventInfo});
  navigate('/events')
  }
  
  return(
  <section
  style={{maxWidth: '600px'}}
  className="container-lg bg-dark p-3 rounded overlay mx-auto mt-5">
  
  <h3
  className="text-white m-0"
  >Edit Event</h3>
  
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
  value={eventInfo.name}
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
  value={eventInfo.date}
  onChange={e => handleChange(e)} />
  </div>
  </div>
  
  <button 
  style={{display:'block'}}
  className="btn btn-secondary mt-4 mx-auto w-50"
  >
  Edit
  </button>
  
  </form>
  
  </section> 
  )
}
