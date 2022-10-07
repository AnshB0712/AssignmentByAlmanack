import { useState } from 'react'
import { Link } from 'react-router-dom'

export const EventHeader = () => {
  
  return(
  <>
  <nav className="navbar navbar-dark bg-dark">
  <div className="container-fluid">
    <span className="navbar-brand mb-0 h1">Events</span>
    
    <Link to="/addevent">
    <button
    className="btn btn-success"
    type="button">
     + Create Event
    </button>
    </Link>
   </div>
  </nav>
  </>
  )
}