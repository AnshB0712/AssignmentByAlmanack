import { useParams } from 'react-router-dom'
import { useAppContext } from '../../Context'

import { CalenderDisplay } from './CalenderDisplay'
import { InfoDisplay } from './InfoDisplay'
import { DummyForm } from './DummyForm'

export const SingleEventPage = () => {
  
  const { eventID } = useParams()
  const { state } = useAppContext()
  
  const data = state.users.find(user => user.email===state.currentUser).events.find(event => event.id === eventID)
  
  return(
  <>
  <div className="container d-flex justify-content-center align-items-center mt-5">
  <InfoDisplay data={data}/>
  <CalenderDisplay data={data}/>
  </div>
  <DummyForm />
  </>
  )
}