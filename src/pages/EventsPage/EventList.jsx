import { useState } from 'react'
import { useAppContext } from '../../Context'
import { useNavigate } from 'react-router-dom'

const filterByExpiration = (arr)=>{
  const Today = Date.now()
  return arr.filter(function (item) {
    return new Date(item.date).getTime() > Today;
  });
};
const filterByUpcoming = (arr)=>{
  const Today = Date.now()
  return arr.filter(function (item) {
    return new Date(item.date).getTime() < Today;
  });
};

export const EventList = () => {
  
  const [pastDates,setPastDates] = useState(false)
  
  const navigate = useNavigate()
  
  const { state } = useAppContext()
  
  const currentUserEvents = state.users.find(user => user.email===state.currentUser)?.events
    
  if(!currentUserEvents?.length)
  return
  
  return (
  <>
  <Tabs setPastDates={setPastDates}/>
  {
    (pastDates ? filterByUpcoming(currentUserEvents):filterByExpiration(currentUserEvents)).map(e => <EventListItem toEditEvent ={() => navigate(`/editevent/${e.id}`)} toSingleEvent={() => navigate(`/${e.id}`)} key={e.id} data={e}/>)
  }
  </>
  )
}

const Tabs = ({setPastDates}) => {
  return (
  <ul className="nav nav-pills my-3" id="pills-tab" role="tablist">
  <li className="nav-item" role="presentation">
    <button className="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true" onClick={()=>setPastDates(false)}>Upcoming</button>
  </li>
  <li className="nav-item" role="presentation">
    <button className="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false" onClick={()=>setPastDates(true)}>Past</button>
  </li>

</ul>
    
  )
}

const EventListItem = ({data,toSingleEvent,toEditEvent})=>{
  
  return(
  <div 
  style={{border: '1px solid #dbdbd8'}}
  className="row justify-content-center align-items-center mt-2 rounded"
  >
  
  <div className="col">
  <CalenderDateComponent 
  date={data.date}/>
  </div>
  
  <div className="col" onClick={toSingleEvent}>
  <p className="m-0 text-white" style={{fontWeight:'800'}}>
  {data.name}
  </p>
  <small className="text-secondary">
  {new Date(data.date).toString()}
  </small>
  </div>
  
  <div className="col">
  <button style={{maxWidth:'200px'}}
  type="button" className="d-block btn btn-primary w-100 mx-auto" onClick={toEditEvent}>
  Edit
  </button>
  </div>
  
  </div>
    
  )
}

const CalenderDateComponent = ({date})=>{
  
  const months = [
	{
		"abb": "Jan",
		"name": "January"
	},
	{
		"abb": "Feb",
		"name": "February"
	},
	{
		"abb": "Mar",
		"name": "March"
	},
	{
		"abb": "Apr",
		"name": "April"
	},
	{
		"abb": "May",
		"name": "May"
	},
	{
		"abb": "Jun",
		"name": "June"
	},
	{
		"abb": "Jul",
		"name": "July"
	},
	{
		"abb": "Aug",
		"name": "August"
	},
	{
		"abb": "Sep",
		"name": "September"
	},
	{
		"abb": "Oct",
		"name": "October"
	},
	{
		"abb": "Nov",
		"name": "November"
	},
	{
		"abb": "Dec",
		"name": "December"
	}
]
  
  const [,month,day] = date?.split('-')
  
  return (
  <div style={{maxWidth:'100px'}} className="d-flex justify-content-around rounded bg-dark text-white p-1">
  <span
  className="bg-secondary text-white p-1 rounded"
  >
  {months[month-1].abb.toUpperCase()}
  </span>
  <span
  className="bg-secondary text-white p-1 rounded"
  >{day}</span>
  </div>
  )
}



