import {EventHeader} from './EventHeader'
import {EventList} from './EventList'


export const EventsPage = () => {
  return(
  <>
  <EventHeader />
  <div className='container'>
  <EventList />
  </div>
  </>
  )
}